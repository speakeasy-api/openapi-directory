import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ToolsShareFileRawSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class ToolsShareFileRawResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * invalid request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    shareFileResponse?: shared.ShareFileResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
