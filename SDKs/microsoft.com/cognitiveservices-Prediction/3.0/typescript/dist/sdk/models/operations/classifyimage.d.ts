import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassifyImagePathParams extends SpeakeasyBase {
    projectId: string;
    publishedName: string;
}
export declare class ClassifyImageQueryParams extends SpeakeasyBase {
    application?: string;
}
export declare class ClassifyImageRequestBodyImageData extends SpeakeasyBase {
    content: Uint8Array;
    imageData: string;
}
export declare class ClassifyImageRequestBody extends SpeakeasyBase {
    imageData: ClassifyImageRequestBodyImageData;
}
export declare class ClassifyImageRequest extends SpeakeasyBase {
    pathParams: ClassifyImagePathParams;
    queryParams: ClassifyImageQueryParams;
    request: ClassifyImageRequestBody;
}
export declare class ClassifyImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    imagePrediction?: shared.ImagePrediction;
    statusCode: number;
}
