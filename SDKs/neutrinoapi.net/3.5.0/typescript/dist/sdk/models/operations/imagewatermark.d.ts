import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImageWatermarkRequestBody extends SpeakeasyBase {
    format?: string;
    height?: number;
    imageUrl: string;
    opacity?: number;
    position?: string;
    watermarkUrl: string;
    width?: number;
}
export declare class ImageWatermarkRequest extends SpeakeasyBase {
    request: ImageWatermarkRequestBody;
}
export declare class ImageWatermarkResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    imageWatermark200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
}
