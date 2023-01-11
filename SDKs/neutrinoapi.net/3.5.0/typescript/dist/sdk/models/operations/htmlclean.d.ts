import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HtmlCleanRequestBody extends SpeakeasyBase {
    content: string;
    outputType: string;
}
export declare class HtmlCleanRequest extends SpeakeasyBase {
    request: HtmlCleanRequestBody;
}
export declare class HtmlCleanResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    htmlClean200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
}
