import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DriveChildrenDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveChildrenDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveChildrenDeleteSecurity extends SpeakeasyBase {
    option1?: DriveChildrenDeleteSecurityOption1;
    option2?: DriveChildrenDeleteSecurityOption2;
}
export declare class DriveChildrenDeleteRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * The ID of the child.
     */
    childId: string;
    /**
     * Deprecated. If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root.
     */
    enforceSingleParent?: boolean;
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
export declare class DriveChildrenDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
