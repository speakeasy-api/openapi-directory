import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ComputePublicAdvertisedPrefixesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputePublicAdvertisedPrefixesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputePublicAdvertisedPrefixesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputePublicAdvertisedPrefixesGetSecurity extends SpeakeasyBase {
    option1?: ComputePublicAdvertisedPrefixesGetSecurityOption1;
    option2?: ComputePublicAdvertisedPrefixesGetSecurityOption2;
    option3?: ComputePublicAdvertisedPrefixesGetSecurityOption3;
}
export declare class ComputePublicAdvertisedPrefixesGetRequest extends SpeakeasyBase {
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
     * Name of the PublicAdvertisedPrefix resource to return.
     */
    publicAdvertisedPrefix: string;
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
}
export declare class ComputePublicAdvertisedPrefixesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    publicAdvertisedPrefix?: shared.PublicAdvertisedPrefix;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
