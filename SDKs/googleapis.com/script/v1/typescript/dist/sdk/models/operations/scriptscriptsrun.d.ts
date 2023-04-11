import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ScriptScriptsRunSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ScriptScriptsRunSecurityOption10 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ScriptScriptsRunSecurityOption11 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ScriptScriptsRunSecurityOption12 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ScriptScriptsRunSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ScriptScriptsRunSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ScriptScriptsRunSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ScriptScriptsRunSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ScriptScriptsRunSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ScriptScriptsRunSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ScriptScriptsRunSecurityOption8 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ScriptScriptsRunSecurityOption9 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ScriptScriptsRunSecurity extends SpeakeasyBase {
    option1?: ScriptScriptsRunSecurityOption1;
    option10?: ScriptScriptsRunSecurityOption10;
    option11?: ScriptScriptsRunSecurityOption11;
    option12?: ScriptScriptsRunSecurityOption12;
    option2?: ScriptScriptsRunSecurityOption2;
    option3?: ScriptScriptsRunSecurityOption3;
    option4?: ScriptScriptsRunSecurityOption4;
    option5?: ScriptScriptsRunSecurityOption5;
    option6?: ScriptScriptsRunSecurityOption6;
    option7?: ScriptScriptsRunSecurityOption7;
    option8?: ScriptScriptsRunSecurityOption8;
    option9?: ScriptScriptsRunSecurityOption9;
}
export declare class ScriptScriptsRunRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    executionRequest?: shared.ExecutionRequest;
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
     * The script ID of the script to be executed. Find the script ID on the **Project settings** page under "IDs."
     */
    scriptId: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class ScriptScriptsRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    operation?: shared.Operation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
