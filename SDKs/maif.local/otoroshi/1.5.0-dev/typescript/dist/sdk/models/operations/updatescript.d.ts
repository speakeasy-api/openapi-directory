import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateScriptSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateScriptRequest extends SpeakeasyBase {
    script?: shared.Script;
    /**
     * The script id
     */
    scriptId: string;
}
export declare class UpdateScriptResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    script?: shared.Script;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
