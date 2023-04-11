import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DriveChangesGetStartPageTokenSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveChangesGetStartPageTokenSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveChangesGetStartPageTokenSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveChangesGetStartPageTokenSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveChangesGetStartPageTokenSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveChangesGetStartPageTokenSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveChangesGetStartPageTokenSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveChangesGetStartPageTokenSecurityOption8 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveChangesGetStartPageTokenSecurity extends SpeakeasyBase {
    option1?: DriveChangesGetStartPageTokenSecurityOption1;
    option2?: DriveChangesGetStartPageTokenSecurityOption2;
    option3?: DriveChangesGetStartPageTokenSecurityOption3;
    option4?: DriveChangesGetStartPageTokenSecurityOption4;
    option5?: DriveChangesGetStartPageTokenSecurityOption5;
    option6?: DriveChangesGetStartPageTokenSecurityOption6;
    option7?: DriveChangesGetStartPageTokenSecurityOption7;
    option8?: DriveChangesGetStartPageTokenSecurityOption8;
}
export declare class DriveChangesGetStartPageTokenRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive is returned.
     */
    driveId?: string;
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
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated use driveId instead.
     */
    teamDriveId?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class DriveChangesGetStartPageTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    startPageToken?: shared.StartPageToken;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
