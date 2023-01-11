import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class V1:
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

    
    def cities_getv1_v1_cities_get(self, request: operations.CitiesGetv1V1CitiesGetRequest) -> operations.CitiesGetv1V1CitiesGetResponse:
        r"""Provides a simple listing of cities within the platform
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/cities"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CitiesGetv1V1CitiesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqCitiesResult])
                res.open_aq_cities_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def countries_get_v1_countries_country_id_get(self, request: operations.CountriesGetV1CountriesCountryIDGetRequest) -> operations.CountriesGetV1CountriesCountryIDGetResponse:
        r"""Countries Get
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/countries/{country_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CountriesGetV1CountriesCountryIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqCountriesResult])
                res.open_aq_countries_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def countries_getv1_v1_countries_get(self, request: operations.CountriesGetv1V1CountriesGetRequest) -> operations.CountriesGetv1V1CountriesGetResponse:
        r"""Countries Getv1
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/countries"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CountriesGetv1V1CountriesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqCountriesResult])
                res.open_aq_countries_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def latest_v1_get_v1_latest_location_id_get(self, request: operations.LatestV1GetV1LatestLocationIDGetRequest) -> operations.LatestV1GetV1LatestLocationIDGetResponse:
        r"""Latest V1 Get
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/latest/{location_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LatestV1GetV1LatestLocationIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def latest_v1_get_v1_latest_get(self, request: operations.LatestV1GetV1LatestGetRequest) -> operations.LatestV1GetV1LatestGetResponse:
        r"""Latest V1 Get
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/latest"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LatestV1GetV1LatestGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def locationsv1_get_v1_locations_location_id_get(self, request: operations.Locationsv1GetV1LocationsLocationIDGetRequest) -> operations.Locationsv1GetV1LocationsLocationIDGetResponse:
        r"""Locationsv1 Get
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/locations/{location_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Locationsv1GetV1LocationsLocationIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def locationsv1_get_v1_locations_get(self, request: operations.Locationsv1GetV1LocationsGetRequest) -> operations.Locationsv1GetV1LocationsGetResponse:
        r"""Locationsv1 Get
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/locations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Locationsv1GetV1LocationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def measurements_get_v1_v1_measurements_get(self, request: operations.MeasurementsGetV1V1MeasurementsGetRequest) -> operations.MeasurementsGetV1V1MeasurementsGetResponse:
        r"""Measurements Get V1
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/measurements"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MeasurementsGetV1V1MeasurementsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.measurements_get_v1_v1_measurements_get_200_application_json_any = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def parameters_getv1_v1_parameters_get(self, request: operations.ParametersGetv1V1ParametersGetRequest) -> operations.ParametersGetv1V1ParametersGetResponse:
        r"""Parameters Getv1
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/parameters"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ParametersGetv1V1ParametersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqParametersResult])
                res.open_aq_parameters_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def sources_v1_get_v1_sources_get(self, request: operations.SourcesV1GetV1SourcesGetRequest) -> operations.SourcesV1GetV1SourcesGetResponse:
        r"""Sources V1 Get
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/sources"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SourcesV1GetV1SourcesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    