import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurity extends SpeakeasyBase {
    option1?: ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurityOption1;
    option2?: ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurityOption2;
}
export declare class ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    regionInstanceGroupManagerDeleteInstanceConfigReq?: shared.RegionInstanceGroupManagerDeleteInstanceConfigReq;
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
     * The name of the managed instance group. It should conform to RFC1035.
     */
    instanceGroupManager: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
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
     * Name of the region scoping this request, should conform to RFC1035.
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
export declare class ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    operation?: shared.Operation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
