import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Shipments:
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

    
    def delete_shipments_v4(self, request: operations.DeleteShipmentsV4Request) -> operations.DeleteShipmentsV4Response:
        r"""Deletes all shipments
        Deletes all shipments of the project.
        
        As an extra safety measure, you must also supply x-confirm header with value `true`. If
        the header is not explicitly specified, the request fails.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shipments/v4"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteShipmentsV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShipmentsV4400ApplicationJSON])
                res.delete_shipments_v4_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShipmentsV4401ApplicationJSON])
                res.delete_shipments_v4_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShipmentsV4403ApplicationJSON])
                res.delete_shipments_v4_403_application_json_object = out

        return res

    
    def delete_shipments_v4_plans(self, request: operations.DeleteShipmentsV4PlansRequest) -> operations.DeleteShipmentsV4PlansResponse:
        r"""Deletes all shipment plans
        Deletes all shipment plans of the project. Any shipments instantiated from the plans will
        persist, but the references to the parent plans will be removed.
        
        As an extra safety measure, you must also supply x-confirm header with value `true`. If
        the header is not explicitly specified, the request fails.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shipments/v4/plans"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteShipmentsV4PlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShipmentsV4Plans400ApplicationJSON])
                res.delete_shipments_v4_plans_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShipmentsV4Plans401ApplicationJSON])
                res.delete_shipments_v4_plans_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShipmentsV4Plans403ApplicationJSON])
                res.delete_shipments_v4_plans_403_application_json_object = out

        return res

    
    def delete_shipments_v4_plans_shipment_plan_id_(self, request: operations.DeleteShipmentsV4PlansShipmentPlanIDRequest) -> operations.DeleteShipmentsV4PlansShipmentPlanIDResponse:
        r"""Deletes a shipment plan
        Deletes a shipment plan. Any shipment instantiated from the plan will persist, but the
        reference to the parent plan will be removed.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shipments/v4/plans/{shipmentPlanId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteShipmentsV4PlansShipmentPlanIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShipmentsV4PlansShipmentPlanID400ApplicationJSON])
                res.delete_shipments_v4_plans_shipment_plan_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShipmentsV4PlansShipmentPlanID401ApplicationJSON])
                res.delete_shipments_v4_plans_shipment_plan_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShipmentsV4PlansShipmentPlanID403ApplicationJSON])
                res.delete_shipments_v4_plans_shipment_plan_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShipmentsV4PlansShipmentPlanID404ApplicationJSON])
                res.delete_shipments_v4_plans_shipment_plan_id_404_application_json_object = out

        return res

    
    def delete_shipments_v4_shipment_id_(self, request: operations.DeleteShipmentsV4ShipmentIDRequest) -> operations.DeleteShipmentsV4ShipmentIDResponse:
        r"""Deletes a shipment
        Deletes a shipment. All data related to the shipment (events, associations) will be removed.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shipments/v4/{shipmentId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteShipmentsV4ShipmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShipmentsV4ShipmentID400ApplicationJSON])
                res.delete_shipments_v4_shipment_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShipmentsV4ShipmentID401ApplicationJSON])
                res.delete_shipments_v4_shipment_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShipmentsV4ShipmentID403ApplicationJSON])
                res.delete_shipments_v4_shipment_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShipmentsV4ShipmentID404ApplicationJSON])
                res.delete_shipments_v4_shipment_id_404_application_json_object = out

        return res

    
    def get_shipments_v4(self, request: operations.GetShipmentsV4Request) -> operations.GetShipmentsV4Response:
        r"""Lists all shipments
        Provides all shipments of the project in a paginated JSON object.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shipments/v4"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShipmentsV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4200ApplicationJSON])
                res.get_shipments_v4_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4400ApplicationJSON])
                res.get_shipments_v4_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4401ApplicationJSON])
                res.get_shipments_v4_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4403ApplicationJSON])
                res.get_shipments_v4_403_application_json_object = out

        return res

    
    def get_shipments_v4_health(self) -> operations.GetShipmentsV4HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shipments/v4/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShipmentsV4HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4Health200ApplicationJSON])
                res.get_shipments_v4_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_shipments_v4_plans(self, request: operations.GetShipmentsV4PlansRequest) -> operations.GetShipmentsV4PlansResponse:
        r"""Lists all shipment plans
        Provides all shipment plans of the project in a paginated JSON object.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shipments/v4/plans"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShipmentsV4PlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4Plans200ApplicationJSON])
                res.get_shipments_v4_plans_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4Plans400ApplicationJSON])
                res.get_shipments_v4_plans_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4Plans401ApplicationJSON])
                res.get_shipments_v4_plans_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4Plans403ApplicationJSON])
                res.get_shipments_v4_plans_403_application_json_object = out

        return res

    
    def get_shipments_v4_plans_shipment_plan_id_(self, request: operations.GetShipmentsV4PlansShipmentPlanIDRequest) -> operations.GetShipmentsV4PlansShipmentPlanIDResponse:
        r"""Gets shipment plan details
        Gets details of a specific shipment plan
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shipments/v4/plans/{shipmentPlanId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShipmentsV4PlansShipmentPlanIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4PlansShipmentPlanID200ApplicationJSON])
                res.get_shipments_v4_plans_shipment_plan_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4PlansShipmentPlanID400ApplicationJSON])
                res.get_shipments_v4_plans_shipment_plan_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4PlansShipmentPlanID401ApplicationJSON])
                res.get_shipments_v4_plans_shipment_plan_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4PlansShipmentPlanID403ApplicationJSON])
                res.get_shipments_v4_plans_shipment_plan_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4PlansShipmentPlanID404ApplicationJSON])
                res.get_shipments_v4_plans_shipment_plan_id_404_application_json_object = out

        return res

    
    def get_shipments_v4_plans_shipment_plan_id_segment_plan_id_(self, request: operations.GetShipmentsV4PlansShipmentPlanIDSegmentPlanIDRequest) -> operations.GetShipmentsV4PlansShipmentPlanIDSegmentPlanIDResponse:
        r"""Gets segment plan details
        Gets details of a specific segment plan
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shipments/v4/plans/{shipmentPlanId}/{segmentPlanId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShipmentsV4PlansShipmentPlanIDSegmentPlanIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4PlansShipmentPlanIDSegmentPlanID200ApplicationJSON])
                res.get_shipments_v4_plans_shipment_plan_id_segment_plan_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4PlansShipmentPlanIDSegmentPlanID400ApplicationJSON])
                res.get_shipments_v4_plans_shipment_plan_id_segment_plan_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4PlansShipmentPlanIDSegmentPlanID401ApplicationJSON])
                res.get_shipments_v4_plans_shipment_plan_id_segment_plan_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4PlansShipmentPlanIDSegmentPlanID403ApplicationJSON])
                res.get_shipments_v4_plans_shipment_plan_id_segment_plan_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4PlansShipmentPlanIDSegmentPlanID404ApplicationJSON])
                res.get_shipments_v4_plans_shipment_plan_id_segment_plan_id_404_application_json_object = out

        return res

    
    def get_shipments_v4_version(self) -> operations.GetShipmentsV4VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shipments/v4/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShipmentsV4VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_shipments_v4_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_shipments_v4_shipment_id_(self, request: operations.GetShipmentsV4ShipmentIDRequest) -> operations.GetShipmentsV4ShipmentIDResponse:
        r"""Gets shipment details
        Gets details of a specific shipment
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shipments/v4/{shipmentId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShipmentsV4ShipmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4ShipmentID200ApplicationJSON])
                res.get_shipments_v4_shipment_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4ShipmentID400ApplicationJSON])
                res.get_shipments_v4_shipment_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4ShipmentID401ApplicationJSON])
                res.get_shipments_v4_shipment_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4ShipmentID403ApplicationJSON])
                res.get_shipments_v4_shipment_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4ShipmentID404ApplicationJSON])
                res.get_shipments_v4_shipment_id_404_application_json_object = out

        return res

    
    def get_shipments_v4_shipment_id_segment_id_(self, request: operations.GetShipmentsV4ShipmentIDSegmentIDRequest) -> operations.GetShipmentsV4ShipmentIDSegmentIDResponse:
        r"""Gets segment details
        Gets details of a specific segment
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shipments/v4/{shipmentId}/{segmentId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShipmentsV4ShipmentIDSegmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4ShipmentIDSegmentID200ApplicationJSON])
                res.get_shipments_v4_shipment_id_segment_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4ShipmentIDSegmentID400ApplicationJSON])
                res.get_shipments_v4_shipment_id_segment_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4ShipmentIDSegmentID401ApplicationJSON])
                res.get_shipments_v4_shipment_id_segment_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4ShipmentIDSegmentID403ApplicationJSON])
                res.get_shipments_v4_shipment_id_segment_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4ShipmentIDSegmentID404ApplicationJSON])
                res.get_shipments_v4_shipment_id_segment_id_404_application_json_object = out

        return res

    
    def get_shipments_v4_tracking_id_segments(self, request: operations.GetShipmentsV4TrackingIDSegmentsRequest) -> operations.GetShipmentsV4TrackingIDSegmentsResponse:
        r"""Gets device's assigned segments
        Gets all segments where the provided device is assigned as a tracker.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shipments/v4/{trackingId}/segments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShipmentsV4TrackingIDSegmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4TrackingIDSegments200ApplicationJSON])
                res.get_shipments_v4_tracking_id_segments_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4TrackingIDSegments400ApplicationJSON])
                res.get_shipments_v4_tracking_id_segments_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4TrackingIDSegments401ApplicationJSON])
                res.get_shipments_v4_tracking_id_segments_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShipmentsV4TrackingIDSegments403ApplicationJSON])
                res.get_shipments_v4_tracking_id_segments_403_application_json_object = out

        return res

    
    def patch_shipments_v4_plans_shipment_plan_id_(self, request: operations.PatchShipmentsV4PlansShipmentPlanIDRequest) -> operations.PatchShipmentsV4PlansShipmentPlanIDResponse:
        r"""Updates shipment plan details
        Updates the shipment plan details. This is a partial update, meaning that only the provided
        fields will be updated. If `ruleIds` field is given, it will replace
        the existing rules for the shipment plan.
        
        ***Note***:
        `segments` cannot be edited through this API. Changing the order of the segments in a plan
        would cause shipments created from earlier versions of the plan to diverge from any shipment
        instantiated from the new plan with different segment structure. Individual segments can
        still be updated through shipment plan API.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shipments/v4/plans/{shipmentPlanId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchShipmentsV4PlansShipmentPlanIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchShipmentsV4PlansShipmentPlanID400ApplicationJSON])
                res.patch_shipments_v4_plans_shipment_plan_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchShipmentsV4PlansShipmentPlanID401ApplicationJSON])
                res.patch_shipments_v4_plans_shipment_plan_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchShipmentsV4PlansShipmentPlanID403ApplicationJSON])
                res.patch_shipments_v4_plans_shipment_plan_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchShipmentsV4PlansShipmentPlanID404ApplicationJSON])
                res.patch_shipments_v4_plans_shipment_plan_id_404_application_json_object = out

        return res

    
    def patch_shipments_v4_plans_shipment_plan_id_segment_plan_id_(self, request: operations.PatchShipmentsV4PlansShipmentPlanIDSegmentPlanIDRequest) -> operations.PatchShipmentsV4PlansShipmentPlanIDSegmentPlanIDResponse:
        r"""Updates segment plan details
        Updates the segment plan details. This is a partial update, meaning that only the provided
        fields will be updated.
        
        ***Note***: Updating `origin` and `destination` is prohibited to prevent breaking the chain
        of locations.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shipments/v4/plans/{shipmentPlanId}/{segmentPlanId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchShipmentsV4PlansShipmentPlanIDSegmentPlanIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchShipmentsV4PlansShipmentPlanIDSegmentPlanID400ApplicationJSON])
                res.patch_shipments_v4_plans_shipment_plan_id_segment_plan_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchShipmentsV4PlansShipmentPlanIDSegmentPlanID401ApplicationJSON])
                res.patch_shipments_v4_plans_shipment_plan_id_segment_plan_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchShipmentsV4PlansShipmentPlanIDSegmentPlanID403ApplicationJSON])
                res.patch_shipments_v4_plans_shipment_plan_id_segment_plan_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchShipmentsV4PlansShipmentPlanIDSegmentPlanID404ApplicationJSON])
                res.patch_shipments_v4_plans_shipment_plan_id_segment_plan_id_404_application_json_object = out

        return res

    
    def patch_shipments_v4_shipment_id_(self, request: operations.PatchShipmentsV4ShipmentIDRequest) -> operations.PatchShipmentsV4ShipmentIDResponse:
        r"""Updates shipment details
        Updates the shipment details. This is a partial update, meaning that only the provided
        fields will be updated.
        
        Changing the status of the shipment affects the statuses of the segments. The following
        status changes are allowed:
        * `pending` → `ongoing`
          * changes the status of the first segment to `ongoing`
        * `pending` → `cancelled`
          * changes the status of all segments to `cancelled`
        * `ongoing` → `cancelled`
          * cancels the current `ongoing` segment and all the succeeding segments
        * `ongoing` → `completed`
          * completes the current `ongoing` segment and cancels all the succeeding segments
        
        ***Note***:
        `segments` and `autoStart` can be updated through this API only if the shipment is in
        `pending` state.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shipments/v4/{shipmentId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchShipmentsV4ShipmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchShipmentsV4ShipmentID400ApplicationJSON])
                res.patch_shipments_v4_shipment_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchShipmentsV4ShipmentID401ApplicationJSON])
                res.patch_shipments_v4_shipment_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchShipmentsV4ShipmentID403ApplicationJSON])
                res.patch_shipments_v4_shipment_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchShipmentsV4ShipmentID404ApplicationJSON])
                res.patch_shipments_v4_shipment_id_404_application_json_object = out

        return res

    
    def patch_shipments_v4_shipment_id_segment_id_(self, request: operations.PatchShipmentsV4ShipmentIDSegmentIDRequest) -> operations.PatchShipmentsV4ShipmentIDSegmentIDResponse:
        r"""Updates segment details
        Updates the segment details. This is a partial update, meaning that only the provided fields
        will be updated.
        
        Changing the status of a segment affects the statuses of other segments in the shipment. The
        following status changes are allowed:
        * `pending` → `ongoing`
          * changes previous `pending` segments to `cancelled`
          * changes previous `ongoing` segment to `completed` (only for the immediate predecessor of
            this segment)
          * changes previous `ongoing` segment to `cancelled` (for segments that are not immediate
            predecessor of this segment)
          * previous segments in `cancelled` or `completed` states are not affected
        * `pending` || `ongoing` → `cancelled`
          * no side effects to other segments
        * `ongoing` → `completed`
          * next segment with status `pending` is changed to `ongoing`
        
        ***Note***:
        `trackingId` can be updated through this API only if the segment is in `pending` state.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shipments/v4/{shipmentId}/{segmentId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchShipmentsV4ShipmentIDSegmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchShipmentsV4ShipmentIDSegmentID400ApplicationJSON])
                res.patch_shipments_v4_shipment_id_segment_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchShipmentsV4ShipmentIDSegmentID401ApplicationJSON])
                res.patch_shipments_v4_shipment_id_segment_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchShipmentsV4ShipmentIDSegmentID403ApplicationJSON])
                res.patch_shipments_v4_shipment_id_segment_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchShipmentsV4ShipmentIDSegmentID404ApplicationJSON])
                res.patch_shipments_v4_shipment_id_segment_id_404_application_json_object = out

        return res

    
    def post_shipments_v4(self, request: operations.PostShipmentsV4Request) -> operations.PostShipmentsV4Response:
        r"""Creates a shipment
        Creates a new shipment. A shipment consists of segments each representing a part of the
        logistics journey. A segment spans from a location to another and each segment may be
        assigned a different tracker.
        
        The segments of the shipment must form a continuous chain of locations i.e. the origin of a
        segment must match the destination of a previous segment.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shipments/v4"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostShipmentsV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostShipmentsV4201ApplicationJSON])
                res.post_shipments_v4_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostShipmentsV4400ApplicationJSON])
                res.post_shipments_v4_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostShipmentsV4401ApplicationJSON])
                res.post_shipments_v4_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostShipmentsV4403ApplicationJSON])
                res.post_shipments_v4_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostShipmentsV4404ApplicationJSON])
                res.post_shipments_v4_404_application_json_object = out

        return res

    
    def post_shipments_v4_plans(self, request: operations.PostShipmentsV4PlansRequest) -> operations.PostShipmentsV4PlansResponse:
        r"""Creates a shipment plan
        Creates a new shipment plan. A shipment plan is a structure that holds information about a
        recurring shipment. Like a shipment, a shipment plan also consists of segments each
        representing a part of the logistics journey. A segment spans from a location to another and
        each segment may be assigned a different tracker. The segments of the shipment must form a
        continuous chain of locations i.e. the origin of a segment must match the destination of a
        previous segment.
        
        In addition to shipments, a predefined duration can be assigned to each segment in the plan.
        This information will be used to calculate the Estimated Time of Departure (ETD) and
        Estimated Time of Arrival (ETA) values when instantiating a shipment from a shipment plan.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shipments/v4/plans"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostShipmentsV4PlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostShipmentsV4Plans201ApplicationJSON])
                res.post_shipments_v4_plans_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostShipmentsV4Plans400ApplicationJSON])
                res.post_shipments_v4_plans_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostShipmentsV4Plans401ApplicationJSON])
                res.post_shipments_v4_plans_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostShipmentsV4Plans403ApplicationJSON])
                res.post_shipments_v4_plans_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostShipmentsV4Plans404ApplicationJSON])
                res.post_shipments_v4_plans_404_application_json_object = out

        return res

    