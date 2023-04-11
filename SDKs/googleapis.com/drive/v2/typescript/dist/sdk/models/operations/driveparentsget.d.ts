import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DriveParentsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveParentsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveParentsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveParentsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveParentsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveParentsGetSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveParentsGetSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveParentsGetSecurity extends SpeakeasyBase {
    option1?: DriveParentsGetSecurityOption1;
    option2?: DriveParentsGetSecurityOption2;
    option3?: DriveParentsGetSecurityOption3;
    option4?: DriveParentsGetSecurityOption4;
    option5?: DriveParentsGetSecurityOption5;
    option6?: DriveParentsGetSecurityOption6;
    option7?: DriveParentsGetSecurityOption7;
}
export declare class DriveParentsGetRequest extends SpeakeasyBase {
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
     * The ID of the parent.
     */
    parentId: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class DriveParentsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    parentReference?: shared.ParentReference;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
