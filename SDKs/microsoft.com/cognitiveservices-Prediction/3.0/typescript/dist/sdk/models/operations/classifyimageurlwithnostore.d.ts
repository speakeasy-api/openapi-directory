import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassifyImageUrlWithNoStorePathParams extends SpeakeasyBase {
    projectId: string;
    publishedName: string;
}
export declare class ClassifyImageUrlWithNoStoreQueryParams extends SpeakeasyBase {
    application?: string;
}
export declare class ClassifyImageUrlWithNoStoreRequests extends SpeakeasyBase {
    applicationXML: Uint8Array;
    imageUrl?: shared.ImageUrl;
    imageUrl1?: shared.ImageUrl;
    textXML: Uint8Array;
}
export declare class ClassifyImageUrlWithNoStoreRequest extends SpeakeasyBase {
    pathParams: ClassifyImageUrlWithNoStorePathParams;
    queryParams: ClassifyImageUrlWithNoStoreQueryParams;
    request: ClassifyImageUrlWithNoStoreRequests;
}
export declare class ClassifyImageUrlWithNoStoreResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    imagePrediction?: shared.ImagePrediction;
    statusCode: number;
}
