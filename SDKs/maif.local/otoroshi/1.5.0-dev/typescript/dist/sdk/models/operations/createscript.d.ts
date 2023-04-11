import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateScriptSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateScriptResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    script?: shared.Script;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
