import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DetectImagePathParams extends SpeakeasyBase {
    projectId: string;
    publishedName: string;
}
export declare class DetectImageQueryParams extends SpeakeasyBase {
    application?: string;
}
export declare class DetectImageRequestBodyImageData extends SpeakeasyBase {
    content: Uint8Array;
    imageData: string;
}
export declare class DetectImageRequestBody extends SpeakeasyBase {
    imageData: DetectImageRequestBodyImageData;
}
export declare class DetectImageRequest extends SpeakeasyBase {
    pathParams: DetectImagePathParams;
    queryParams: DetectImageQueryParams;
    request: DetectImageRequestBody;
}
export declare class DetectImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    imagePrediction?: shared.ImagePrediction;
    statusCode: number;
}
