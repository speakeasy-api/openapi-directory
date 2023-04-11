import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HTMLCleanRequestBody extends SpeakeasyBase {
    /**
     * The HTML content. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string
     */
    content: string;
    /**
     * The level of sanitization, possible values are: <br><b>plain-text</b>: reduce the content to plain text only (no HTML tags at all) <br><b>simple-text</b>: allow only very basic text formatting tags like b, em, i, strong, u <br><b>basic-html</b>: allow advanced text formatting and hyper links <br><b>basic-html-with-images</b>: same as basic html but also allows image tags <br><b>advanced-html</b>: same as basic html with images but also allows many more common HTML tags like table, ul, dl, pre <br>
     */
    outputType: string;
}
export declare class HTMLCleanResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    htmlClean200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
