import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2;
}
/**
 * If `GATEWAY` is specified, only gateways are returned. If `NON_GATEWAY` is specified, only non-gateway devices are returned. If `GATEWAY_TYPE_UNSPECIFIED` is specified, all devices are returned.
 */
export declare enum CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum {
    GatewayTypeUnspecified = "GATEWAY_TYPE_UNSPECIFIED",
    Gateway = "GATEWAY",
    NonGateway = "NON_GATEWAY"
}
export declare class CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * A list of device string IDs. For example, `['device0', 'device12']`. If empty, this field is ignored. Maximum IDs: 10,000
     */
    deviceIds?: string[];
    /**
     * A list of device numeric IDs. If empty, this field is ignored. Maximum IDs: 10,000.
     */
    deviceNumIds?: string[];
    /**
     * The fields of the `Device` resource to be returned in the response. The fields `id` and `num_id` are always returned, along with any other fields specified in snake_case format, for example: `last_heartbeat_time`.
     */
    fieldMask?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * If set, returns only the gateways with which the specified device is associated. The device ID can be numeric (`num_id`) or the user-defined string (`id`). For example, if `456` is specified, returns only the gateways to which the device with `num_id` 456 is bound.
     */
    gatewayListOptionsAssociationsDeviceId?: string;
    /**
     * If set, only devices associated with the specified gateway are returned. The gateway ID can be numeric (`num_id`) or the user-defined string (`id`). For example, if `123` is specified, only devices bound to the gateway with `num_id` 123 are returned.
     */
    gatewayListOptionsAssociationsGatewayId?: string;
    /**
     * If `GATEWAY` is specified, only gateways are returned. If `NON_GATEWAY` is specified, only non-gateway devices are returned. If `GATEWAY_TYPE_UNSPECIFIED` is specified, all devices are returned.
     */
    gatewayListOptionsGatewayType?: CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The maximum number of devices to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListDevicesResponse`; indicates that this is a continuation of a prior `ListDevices` call and the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The device registry path. Required. For example, `projects/my-project/locations/us-central1/registries/my-registry`.
     */
    parent: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listDevicesResponse?: shared.ListDevicesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
