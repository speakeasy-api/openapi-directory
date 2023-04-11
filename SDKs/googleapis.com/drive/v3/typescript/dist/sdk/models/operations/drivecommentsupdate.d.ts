import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DriveCommentsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveCommentsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveCommentsUpdateSecurity extends SpeakeasyBase {
    option1?: DriveCommentsUpdateSecurityOption1;
    option2?: DriveCommentsUpdateSecurityOption2;
}
export declare class DriveCommentsUpdateRequest extends SpeakeasyBase {
    comment?: shared.Comment;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * The ID of the comment.
     */
    commentId: string;
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
export declare class DriveCommentsUpdateResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    comment?: shared.Comment;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
