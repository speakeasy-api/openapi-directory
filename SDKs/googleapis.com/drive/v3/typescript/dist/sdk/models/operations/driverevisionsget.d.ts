import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DriveRevisionsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveRevisionsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveRevisionsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveRevisionsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveRevisionsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveRevisionsGetSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveRevisionsGetSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveRevisionsGetSecurity extends SpeakeasyBase {
    option1?: DriveRevisionsGetSecurityOption1;
    option2?: DriveRevisionsGetSecurityOption2;
    option3?: DriveRevisionsGetSecurityOption3;
    option4?: DriveRevisionsGetSecurityOption4;
    option5?: DriveRevisionsGetSecurityOption5;
    option6?: DriveRevisionsGetSecurityOption6;
    option7?: DriveRevisionsGetSecurityOption7;
}
export declare class DriveRevisionsGetRequest extends SpeakeasyBase {
    /**
     * Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
     */
    acknowledgeAbuse?: boolean;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The ID of the file.
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
     * The ID of the revision.
     */
    revisionId: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class DriveRevisionsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    revision?: shared.Revision;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
