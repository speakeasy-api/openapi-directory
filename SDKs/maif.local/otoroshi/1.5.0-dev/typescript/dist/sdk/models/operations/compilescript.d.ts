import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CompileScriptSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CompileScriptResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    scriptCompilationResult?: shared.ScriptCompilationResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
