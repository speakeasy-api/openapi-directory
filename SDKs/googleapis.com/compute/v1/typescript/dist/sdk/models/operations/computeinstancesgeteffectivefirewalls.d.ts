import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ComputeInstancesGetEffectiveFirewallsSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeInstancesGetEffectiveFirewallsSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeInstancesGetEffectiveFirewallsSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeInstancesGetEffectiveFirewallsSecurity extends SpeakeasyBase {
    option1?: ComputeInstancesGetEffectiveFirewallsSecurityOption1;
    option2?: ComputeInstancesGetEffectiveFirewallsSecurityOption2;
    option3?: ComputeInstancesGetEffectiveFirewallsSecurityOption3;
}
export declare class ComputeInstancesGetEffectiveFirewallsRequest extends SpeakeasyBase {
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
     * Name of the instance scoping this request.
     */
    instance: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The name of the network interface to get the effective firewalls.
     */
    networkInterface: string;
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
     * The name of the zone for this request.
     */
    zone: string;
}
export declare class ComputeInstancesGetEffectiveFirewallsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    instancesGetEffectiveFirewallsResponse?: shared.InstancesGetEffectiveFirewallsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
