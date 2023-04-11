import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ComputeInstancesGetShieldedInstanceIdentitySecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeInstancesGetShieldedInstanceIdentitySecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeInstancesGetShieldedInstanceIdentitySecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeInstancesGetShieldedInstanceIdentitySecurity extends SpeakeasyBase {
    option1?: ComputeInstancesGetShieldedInstanceIdentitySecurityOption1;
    option2?: ComputeInstancesGetShieldedInstanceIdentitySecurityOption2;
    option3?: ComputeInstancesGetShieldedInstanceIdentitySecurityOption3;
}
export declare class ComputeInstancesGetShieldedInstanceIdentityRequest extends SpeakeasyBase {
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
     * Name or id of the instance scoping this request.
     */
    instance: string;
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
export declare class ComputeInstancesGetShieldedInstanceIdentityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    shieldedInstanceIdentity?: shared.ShieldedInstanceIdentity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
