import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DriveRevisionsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveRevisionsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveRevisionsPatchSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveRevisionsPatchSecurity extends SpeakeasyBase {
    option1?: DriveRevisionsPatchSecurityOption1;
    option2?: DriveRevisionsPatchSecurityOption2;
    option3?: DriveRevisionsPatchSecurityOption3;
}
export declare class DriveRevisionsPatchRequest extends SpeakeasyBase {
    revision?: shared.Revision;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The ID for the file.
     */
    fileId: string;
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
     * The ID for the revision.
     */
    revisionId: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class DriveRevisionsPatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    revision?: shared.Revision;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
