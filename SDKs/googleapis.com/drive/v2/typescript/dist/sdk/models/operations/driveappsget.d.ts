import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DriveAppsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveAppsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveAppsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveAppsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveAppsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveAppsGetSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveAppsGetSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveAppsGetSecurity extends SpeakeasyBase {
    option1?: DriveAppsGetSecurityOption1;
    option2?: DriveAppsGetSecurityOption2;
    option3?: DriveAppsGetSecurityOption3;
    option4?: DriveAppsGetSecurityOption4;
    option5?: DriveAppsGetSecurityOption5;
    option6?: DriveAppsGetSecurityOption6;
    option7?: DriveAppsGetSecurityOption7;
}
export declare class DriveAppsGetRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * The ID of the app.
     */
    appId: string;
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
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class DriveAppsGetResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    app?: shared.App;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
