import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DriveFilesModifyLabelsSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesModifyLabelsSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesModifyLabelsSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesModifyLabelsSecurity extends SpeakeasyBase {
    option1?: DriveFilesModifyLabelsSecurityOption1;
    option2?: DriveFilesModifyLabelsSecurityOption2;
    option3?: DriveFilesModifyLabelsSecurityOption3;
}
export declare class DriveFilesModifyLabelsRequest extends SpeakeasyBase {
    modifyLabelsRequest?: shared.ModifyLabelsRequest;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The ID of the file for which the labels are modified.
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
export declare class DriveFilesModifyLabelsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    modifyLabelsResponse?: shared.ModifyLabelsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
