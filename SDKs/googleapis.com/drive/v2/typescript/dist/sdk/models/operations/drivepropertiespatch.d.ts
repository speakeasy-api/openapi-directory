import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DrivePropertiesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePropertiesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePropertiesPatchSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePropertiesPatchSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePropertiesPatchSecurity extends SpeakeasyBase {
    option1?: DrivePropertiesPatchSecurityOption1;
    option2?: DrivePropertiesPatchSecurityOption2;
    option3?: DrivePropertiesPatchSecurityOption3;
    option4?: DrivePropertiesPatchSecurityOption4;
}
export declare class DrivePropertiesPatchRequest extends SpeakeasyBase {
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
     * The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
     */
    visibility?: string;
}
export declare class DrivePropertiesPatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    property?: shared.Property;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
