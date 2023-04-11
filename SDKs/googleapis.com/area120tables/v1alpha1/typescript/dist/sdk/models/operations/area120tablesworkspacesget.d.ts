import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Area120tablesWorkspacesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesWorkspacesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesWorkspacesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesWorkspacesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesWorkspacesGetSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesWorkspacesGetSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesWorkspacesGetSecurity extends SpeakeasyBase {
    option1?: Area120tablesWorkspacesGetSecurityOption1;
    option2?: Area120tablesWorkspacesGetSecurityOption2;
    option3?: Area120tablesWorkspacesGetSecurityOption3;
    option4?: Area120tablesWorkspacesGetSecurityOption4;
    option5?: Area120tablesWorkspacesGetSecurityOption5;
    option6?: Area120tablesWorkspacesGetSecurityOption6;
}
/**
 * Optional. Column key to use for values in the row. Defaults to user entered name.
 */
export declare enum Area120tablesWorkspacesGetViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    ColumnIdView = "COLUMN_ID_VIEW"
}
export declare class Area120tablesWorkspacesGetRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Required. The name of the workspace to retrieve. Format: workspaces/{workspace}
     */
    name: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Optional. Column key to use for values in the row. Defaults to user entered name.
     */
    view?: Area120tablesWorkspacesGetViewEnum;
}
export declare class Area120tablesWorkspacesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    workspace?: shared.Workspace;
}
