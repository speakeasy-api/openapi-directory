import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DrivePropertiesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePropertiesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePropertiesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePropertiesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePropertiesGetSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePropertiesGetSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePropertiesGetSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePropertiesGetSecurity extends SpeakeasyBase {
    option1?: DrivePropertiesGetSecurityOption1;
    option2?: DrivePropertiesGetSecurityOption2;
    option3?: DrivePropertiesGetSecurityOption3;
    option4?: DrivePropertiesGetSecurityOption4;
    option5?: DrivePropertiesGetSecurityOption5;
    option6?: DrivePropertiesGetSecurityOption6;
    option7?: DrivePropertiesGetSecurityOption7;
}
export declare class DrivePropertiesGetRequest extends SpeakeasyBase {
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
     * The key of the property.
     */
    propertyKey: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * The visibility of the property.
     */
    visibility?: string;
}
export declare class DrivePropertiesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    property?: shared.Property;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
