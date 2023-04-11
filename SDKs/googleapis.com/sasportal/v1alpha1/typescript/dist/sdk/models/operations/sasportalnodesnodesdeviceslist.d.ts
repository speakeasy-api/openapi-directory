import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SasportalNodesNodesDevicesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SasportalNodesNodesDevicesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SasportalNodesNodesDevicesListSecurity extends SpeakeasyBase {
    option1?: SasportalNodesNodesDevicesListSecurityOption1;
    option2?: SasportalNodesNodesDevicesListSecurityOption2;
}
export declare class SasportalNodesNodesDevicesListRequest extends SpeakeasyBase {
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
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     */
    filter?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent resource.
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
export declare class SasportalNodesNodesDevicesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    sasPortalListDevicesResponse?: shared.SasPortalListDevicesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
