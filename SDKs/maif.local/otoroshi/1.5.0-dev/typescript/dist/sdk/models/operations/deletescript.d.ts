import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteScriptSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteScriptRequest extends SpeakeasyBase {
    /**
     * The script id
     */
    scriptId: string;
}
export declare class DeleteScriptResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    deleted?: shared.Deleted;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
