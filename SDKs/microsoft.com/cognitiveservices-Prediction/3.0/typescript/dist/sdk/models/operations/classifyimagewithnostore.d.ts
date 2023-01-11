import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassifyImageWithNoStorePathParams extends SpeakeasyBase {
    projectId: string;
    publishedName: string;
}
export declare class ClassifyImageWithNoStoreQueryParams extends SpeakeasyBase {
    application?: string;
}
export declare class ClassifyImageWithNoStoreRequestBodyImageData extends SpeakeasyBase {
    content: Uint8Array;
    imageData: string;
}
export declare class ClassifyImageWithNoStoreRequestBody extends SpeakeasyBase {
    imageData: ClassifyImageWithNoStoreRequestBodyImageData;
}
export declare class ClassifyImageWithNoStoreRequest extends SpeakeasyBase {
    pathParams: ClassifyImageWithNoStorePathParams;
    queryParams: ClassifyImageWithNoStoreQueryParams;
    request: ClassifyImageWithNoStoreRequestBody;
}
export declare class ClassifyImageWithNoStoreResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    imagePrediction?: shared.ImagePrediction;
    statusCode: number;
}
