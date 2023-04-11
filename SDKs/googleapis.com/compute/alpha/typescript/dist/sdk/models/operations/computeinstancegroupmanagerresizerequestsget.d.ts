import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ComputeInstanceGroupManagerResizeRequestsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeInstanceGroupManagerResizeRequestsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeInstanceGroupManagerResizeRequestsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeInstanceGroupManagerResizeRequestsGetSecurity extends SpeakeasyBase {
    option1?: ComputeInstanceGroupManagerResizeRequestsGetSecurityOption1;
    option2?: ComputeInstanceGroupManagerResizeRequestsGetSecurityOption2;
    option3?: ComputeInstanceGroupManagerResizeRequestsGetSecurityOption3;
}
export declare class ComputeInstanceGroupManagerResizeRequestsGetRequest extends SpeakeasyBase {
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
     * The name of the managed instance group. Name should conform to RFC1035 or be a resource ID.
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
     * The name of the resize request. Name should conform to RFC1035 or be a resource ID.
     */
    resizeRequest: string;
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
    /**
     * Name of the href="/compute/docs/regions-zones/#available">zone scoping this request. Name should conform to RFC1035.
     */
    zone: string;
}
export declare class ComputeInstanceGroupManagerResizeRequestsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    instanceGroupManagerResizeRequest?: shared.InstanceGroupManagerResizeRequest;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
