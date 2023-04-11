import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindScriptByIdSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindScriptByIdRequest extends SpeakeasyBase {
    /**
     * The script id
     */
    scriptId: string;
}
export declare class FindScriptByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    script?: shared.Script;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
