import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DrivePropertiesInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePropertiesInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePropertiesInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePropertiesInsertSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePropertiesInsertSecurity extends SpeakeasyBase {
    option1?: DrivePropertiesInsertSecurityOption1;
    option2?: DrivePropertiesInsertSecurityOption2;
    option3?: DrivePropertiesInsertSecurityOption3;
    option4?: DrivePropertiesInsertSecurityOption4;
}
export declare class DrivePropertiesInsertRequest extends SpeakeasyBase {
    property?: shared.Property;
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
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class DrivePropertiesInsertResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    property?: shared.Property;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
