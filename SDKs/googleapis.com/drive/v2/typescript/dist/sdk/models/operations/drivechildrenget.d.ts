import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DriveChildrenGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveChildrenGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveChildrenGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveChildrenGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveChildrenGetSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveChildrenGetSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveChildrenGetSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveChildrenGetSecurity extends SpeakeasyBase {
    option1?: DriveChildrenGetSecurityOption1;
    option2?: DriveChildrenGetSecurityOption2;
    option3?: DriveChildrenGetSecurityOption3;
    option4?: DriveChildrenGetSecurityOption4;
    option5?: DriveChildrenGetSecurityOption5;
    option6?: DriveChildrenGetSecurityOption6;
    option7?: DriveChildrenGetSecurityOption7;
}
export declare class DriveChildrenGetRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * The ID of the child.
     */
    childId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The ID of the folder.
     */
    folderId: string;
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
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class DriveChildrenGetResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    childReference?: shared.ChildReference;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
