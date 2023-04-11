import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ComputeRegionNetworkEndpointGroupsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeRegionNetworkEndpointGroupsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeRegionNetworkEndpointGroupsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeRegionNetworkEndpointGroupsGetSecurity extends SpeakeasyBase {
    option1?: ComputeRegionNetworkEndpointGroupsGetSecurityOption1;
    option2?: ComputeRegionNetworkEndpointGroupsGetSecurityOption2;
    option3?: ComputeRegionNetworkEndpointGroupsGetSecurityOption3;
}
export declare class ComputeRegionNetworkEndpointGroupsGetRequest extends SpeakeasyBase {
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
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The name of the network endpoint group. It should comply with RFC1035.
     */
    networkEndpointGroup: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Project ID for this request.
     */
    project: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The name of the region where the network endpoint group is located. It should comply with RFC1035.
     */
    region: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Legacy name for parameter that has been superseded by `quotaUser`.
     */
    userIp?: string;
}
export declare class ComputeRegionNetworkEndpointGroupsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    networkEndpointGroup?: shared.NetworkEndpointGroup;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
