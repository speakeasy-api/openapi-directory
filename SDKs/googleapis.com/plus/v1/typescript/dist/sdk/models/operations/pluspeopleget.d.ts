import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PlusPeopleGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class PlusPeopleGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class PlusPeopleGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class PlusPeopleGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class PlusPeopleGetSecurity extends SpeakeasyBase {
    option1?: PlusPeopleGetSecurityOption1;
    option2?: PlusPeopleGetSecurityOption2;
    option3?: PlusPeopleGetSecurityOption3;
    option4?: PlusPeopleGetSecurityOption4;
}
export declare class PlusPeopleGetRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.
     */
    userId: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class PlusPeopleGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    person?: shared.Person;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
