import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DetectImageUrlWithNoStorePathParams extends SpeakeasyBase {
    projectId: string;
    publishedName: string;
}
export declare class DetectImageUrlWithNoStoreQueryParams extends SpeakeasyBase {
    application?: string;
}
export declare class DetectImageUrlWithNoStoreRequests extends SpeakeasyBase {
    applicationXML: Uint8Array;
    imageUrl?: shared.ImageUrl;
    imageUrl1?: shared.ImageUrl;
    textXML: Uint8Array;
}
export declare class DetectImageUrlWithNoStoreRequest extends SpeakeasyBase {
    pathParams: DetectImageUrlWithNoStorePathParams;
    queryParams: DetectImageUrlWithNoStoreQueryParams;
    request: DetectImageUrlWithNoStoreRequests;
}
export declare class DetectImageUrlWithNoStoreResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    imagePrediction?: shared.ImagePrediction;
    statusCode: number;
}
