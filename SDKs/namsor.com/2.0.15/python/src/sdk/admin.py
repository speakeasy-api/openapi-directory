import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Admin:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def anonymize(self, request: operations.AnonymizeRequest) -> operations.AnonymizeResponse:
        r"""Activate/deactivate anonymization for a source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/anonymize/{source}/{anonymized}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AnonymizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def api_status(self) -> operations.APIStatusResponse:
        r"""Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/apiStatus"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIClassifiersStatusOut])
                res.api_classifiers_status_out = out
        elif r.status_code == 401:
            pass

        return res

    
    def api_usage(self, request: operations.APIUsageRequest) -> operations.APIUsageResponse:
        r"""Print current API usage.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/apiUsage"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIUsageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPeriodUsageOut])
                res.api_period_usage_out = out
        elif r.status_code == 401:
            pass

        return res

    
    def api_usage_history(self, request: operations.APIUsageHistoryRequest) -> operations.APIUsageHistoryResponse:
        r"""Print historical API usage.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/apiUsageHistory"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIUsageHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIUsageHistoryOut])
                res.api_usage_history_out = out
        elif r.status_code == 401:
            pass

        return res

    
    def api_usage_history_aggregate(self, request: operations.APIUsageHistoryAggregateRequest) -> operations.APIUsageHistoryAggregateResponse:
        r"""Print historical API usage (in an aggregated view, by service, by day/hour/min).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/apiUsageHistoryAggregate"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIUsageHistoryAggregateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIUsageAggregatedOut])
                res.api_usage_aggregated_out = out
        elif r.status_code == 401:
            pass

        return res

    
    def available_services(self) -> operations.AvailableServicesResponse:
        r"""List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/apiServices"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AvailableServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIServicesOut])
                res.api_services_out = out
        elif r.status_code == 401:
            pass

        return res

    
    def disable(self, request: operations.DisableRequest) -> operations.DisableResponse:
        r"""Activate/deactivate an API Key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/disable/{source}/{disabled}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def learnable(self, request: operations.LearnableRequest) -> operations.LearnableResponse:
        r"""Activate/deactivate learning from a source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/learnable/{source}/{learnable}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LearnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def software_version(self) -> operations.SoftwareVersionResponse:
        r"""Get the current software version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/softwareVersion"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SoftwareVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SoftwareVersionOut])
                res.software_version_out = out
        elif r.status_code == 401:
            pass

        return res

    
    def taxonomy_classes(self, request: operations.TaxonomyClassesRequest) -> operations.TaxonomyClassesResponse:
        r"""Print the taxonomy classes valid for the given classifier.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/taxonomyClasses/{classifierName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxonomyClassesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIClassifierTaxonomyOut])
                res.api_classifier_taxonomy_out = out
        elif r.status_code == 401:
            pass

        return res

    