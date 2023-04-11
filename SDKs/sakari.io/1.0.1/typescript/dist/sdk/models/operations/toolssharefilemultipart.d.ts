import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ToolsShareFileMultipartSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class ToolsShareFileMultipartFormDataMedia extends SpeakeasyBase {
    content: Uint8Array;
    media: string;
}
export declare class ToolsShareFileMultipartFormData extends SpeakeasyBase {
    media?: ToolsShareFileMultipartFormDataMedia;
}
export declare class ToolsShareFileMultipartResponse extends SpeakeasyBase {
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
