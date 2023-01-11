import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Properties:
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

    
    def analyticsadmin_properties_acknowledge_user_data_collection(self, request: operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest) -> operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse:
        r"""Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or via this API) before MeasurementProtocolSecret resources may be created.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{property}:acknowledgeUserDataCollection", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_analytics_admin_v1beta_acknowledge_user_data_collection_response = out

        return res

    
    def analyticsadmin_properties_conversion_events_create(self, request: operations.AnalyticsadminPropertiesConversionEventsCreateRequest) -> operations.AnalyticsadminPropertiesConversionEventsCreateResponse:
        r"""Creates a conversion event with the specified attributes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/conversionEvents", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesConversionEventsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaConversionEvent])
                res.google_analytics_admin_v1beta_conversion_event = out

        return res

    
    def analyticsadmin_properties_conversion_events_list(self, request: operations.AnalyticsadminPropertiesConversionEventsListRequest) -> operations.AnalyticsadminPropertiesConversionEventsListResponse:
        r"""Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/conversionEvents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesConversionEventsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaListConversionEventsResponse])
                res.google_analytics_admin_v1beta_list_conversion_events_response = out

        return res

    
    def analyticsadmin_properties_create(self, request: operations.AnalyticsadminPropertiesCreateRequest) -> operations.AnalyticsadminPropertiesCreateResponse:
        r"""Creates an \"GA4\" property with the specified location and attributes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta/properties"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaProperty])
                res.google_analytics_admin_v1beta_property = out

        return res

    
    def analyticsadmin_properties_custom_dimensions_create(self, request: operations.AnalyticsadminPropertiesCustomDimensionsCreateRequest) -> operations.AnalyticsadminPropertiesCustomDimensionsCreateResponse:
        r"""Creates a CustomDimension.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/customDimensions", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCustomDimensionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaCustomDimension])
                res.google_analytics_admin_v1beta_custom_dimension = out

        return res

    
    def analyticsadmin_properties_custom_dimensions_list(self, request: operations.AnalyticsadminPropertiesCustomDimensionsListRequest) -> operations.AnalyticsadminPropertiesCustomDimensionsListResponse:
        r"""Lists CustomDimensions on a property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/customDimensions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCustomDimensionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaListCustomDimensionsResponse])
                res.google_analytics_admin_v1beta_list_custom_dimensions_response = out

        return res

    
    def analyticsadmin_properties_custom_metrics_archive(self, request: operations.AnalyticsadminPropertiesCustomMetricsArchiveRequest) -> operations.AnalyticsadminPropertiesCustomMetricsArchiveResponse:
        r"""Archives a CustomMetric on a property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}:archive", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCustomMetricsArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def analyticsadmin_properties_custom_metrics_create(self, request: operations.AnalyticsadminPropertiesCustomMetricsCreateRequest) -> operations.AnalyticsadminPropertiesCustomMetricsCreateResponse:
        r"""Creates a CustomMetric.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/customMetrics", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCustomMetricsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaCustomMetric])
                res.google_analytics_admin_v1beta_custom_metric = out

        return res

    
    def analyticsadmin_properties_custom_metrics_list(self, request: operations.AnalyticsadminPropertiesCustomMetricsListRequest) -> operations.AnalyticsadminPropertiesCustomMetricsListResponse:
        r"""Lists CustomMetrics on a property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/customMetrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCustomMetricsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaListCustomMetricsResponse])
                res.google_analytics_admin_v1beta_list_custom_metrics_response = out

        return res

    
    def analyticsadmin_properties_data_streams_create(self, request: operations.AnalyticsadminPropertiesDataStreamsCreateRequest) -> operations.AnalyticsadminPropertiesDataStreamsCreateResponse:
        r"""Creates a DataStream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/dataStreams", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDataStreamsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaDataStream])
                res.google_analytics_admin_v1beta_data_stream = out

        return res

    
    def analyticsadmin_properties_data_streams_list(self, request: operations.AnalyticsadminPropertiesDataStreamsListRequest) -> operations.AnalyticsadminPropertiesDataStreamsListResponse:
        r"""Lists DataStreams on a property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/dataStreams", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDataStreamsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaListDataStreamsResponse])
                res.google_analytics_admin_v1beta_list_data_streams_response = out

        return res

    
    def analyticsadmin_properties_data_streams_measurement_protocol_secrets_create(self, request: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest) -> operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse:
        r"""Creates a measurement protocol secret.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/measurementProtocolSecrets", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaMeasurementProtocolSecret])
                res.google_analytics_admin_v1beta_measurement_protocol_secret = out

        return res

    
    def analyticsadmin_properties_data_streams_measurement_protocol_secrets_get(self, request: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest) -> operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetResponse:
        r"""Lookup for a single \"GA4\" MeasurementProtocolSecret.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaMeasurementProtocolSecret])
                res.google_analytics_admin_v1beta_measurement_protocol_secret = out

        return res

    
    def analyticsadmin_properties_data_streams_measurement_protocol_secrets_list(self, request: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest) -> operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse:
        r"""Returns child MeasurementProtocolSecrets under the specified parent Property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/measurementProtocolSecrets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse])
                res.google_analytics_admin_v1beta_list_measurement_protocol_secrets_response = out

        return res

    
    def analyticsadmin_properties_firebase_links_create(self, request: operations.AnalyticsadminPropertiesFirebaseLinksCreateRequest) -> operations.AnalyticsadminPropertiesFirebaseLinksCreateResponse:
        r"""Creates a FirebaseLink. Properties can have at most one FirebaseLink.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/firebaseLinks", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesFirebaseLinksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaFirebaseLink])
                res.google_analytics_admin_v1beta_firebase_link = out

        return res

    
    def analyticsadmin_properties_firebase_links_list(self, request: operations.AnalyticsadminPropertiesFirebaseLinksListRequest) -> operations.AnalyticsadminPropertiesFirebaseLinksListResponse:
        r"""Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/firebaseLinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesFirebaseLinksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaListFirebaseLinksResponse])
                res.google_analytics_admin_v1beta_list_firebase_links_response = out

        return res

    
    def analyticsadmin_properties_google_ads_links_create(self, request: operations.AnalyticsadminPropertiesGoogleAdsLinksCreateRequest) -> operations.AnalyticsadminPropertiesGoogleAdsLinksCreateResponse:
        r"""Creates a GoogleAdsLink.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/googleAdsLinks", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesGoogleAdsLinksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaGoogleAdsLink])
                res.google_analytics_admin_v1beta_google_ads_link = out

        return res

    
    def analyticsadmin_properties_google_ads_links_delete(self, request: operations.AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest) -> operations.AnalyticsadminPropertiesGoogleAdsLinksDeleteResponse:
        r"""Deletes a GoogleAdsLink on a property
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesGoogleAdsLinksDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def analyticsadmin_properties_google_ads_links_list(self, request: operations.AnalyticsadminPropertiesGoogleAdsLinksListRequest) -> operations.AnalyticsadminPropertiesGoogleAdsLinksListResponse:
        r"""Lists GoogleAdsLinks on a property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/googleAdsLinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesGoogleAdsLinksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse])
                res.google_analytics_admin_v1beta_list_google_ads_links_response = out

        return res

    
    def analyticsadmin_properties_google_ads_links_patch(self, request: operations.AnalyticsadminPropertiesGoogleAdsLinksPatchRequest) -> operations.AnalyticsadminPropertiesGoogleAdsLinksPatchResponse:
        r"""Updates a GoogleAdsLink on a property
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesGoogleAdsLinksPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaGoogleAdsLink])
                res.google_analytics_admin_v1beta_google_ads_link = out

        return res

    
    def analyticsadmin_properties_list(self, request: operations.AnalyticsadminPropertiesListRequest) -> operations.AnalyticsadminPropertiesListResponse:
        r"""Returns child Properties under the specified parent Account. Only \"GA4\" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: \"trashed\") properties are excluded by default. Returns an empty list if no relevant properties are found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta/properties"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1betaListPropertiesResponse])
                res.google_analytics_admin_v1beta_list_properties_response = out

        return res

    