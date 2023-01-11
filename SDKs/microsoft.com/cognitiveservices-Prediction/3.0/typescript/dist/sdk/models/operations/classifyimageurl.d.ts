import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassifyImageUrlPathParams extends SpeakeasyBase {
    projectId: string;
    publishedName: string;
}
export declare class ClassifyImageUrlQueryParams extends SpeakeasyBase {
    application?: string;
}
export declare class ClassifyImageUrlRequests extends SpeakeasyBase {
    applicationXML: Uint8Array;
    imageUrl?: shared.ImageUrl;
    imageUrl1?: shared.ImageUrl;
    textXML: Uint8Array;
}
export declare class ClassifyImageUrlRequest extends SpeakeasyBase {
    pathParams: ClassifyImageUrlPathParams;
    queryParams: ClassifyImageUrlQueryParams;
    request: ClassifyImageUrlRequests;
}
export declare class ClassifyImageUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    imagePrediction?: shared.ImagePrediction;
    statusCode: number;
}
