import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DetectImageWithNoStorePathParams extends SpeakeasyBase {
    projectId: string;
    publishedName: string;
}
export declare class DetectImageWithNoStoreQueryParams extends SpeakeasyBase {
    application?: string;
}
export declare class DetectImageWithNoStoreRequestBodyImageData extends SpeakeasyBase {
    content: Uint8Array;
    imageData: string;
}
export declare class DetectImageWithNoStoreRequestBody extends SpeakeasyBase {
    imageData: DetectImageWithNoStoreRequestBodyImageData;
}
export declare class DetectImageWithNoStoreRequest extends SpeakeasyBase {
    pathParams: DetectImageWithNoStorePathParams;
    queryParams: DetectImageWithNoStoreQueryParams;
    request: DetectImageWithNoStoreRequestBody;
}
export declare class DetectImageWithNoStoreResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    imagePrediction?: shared.ImagePrediction;
    statusCode: number;
}
