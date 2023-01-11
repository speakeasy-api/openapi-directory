import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImageResizeRequestBody extends SpeakeasyBase {
    format?: string;
    height: number;
    imageUrl: string;
    width: number;
}
export declare class ImageResizeRequest extends SpeakeasyBase {
    request: ImageResizeRequestBody;
}
export declare class ImageResizeResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    imageResize200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
}
