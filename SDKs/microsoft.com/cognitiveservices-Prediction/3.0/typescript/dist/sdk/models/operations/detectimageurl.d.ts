import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DetectImageUrlPathParams extends SpeakeasyBase {
    projectId: string;
    publishedName: string;
}
export declare class DetectImageUrlQueryParams extends SpeakeasyBase {
    application?: string;
}
export declare class DetectImageUrlRequests extends SpeakeasyBase {
    applicationXML: Uint8Array;
    imageUrl?: shared.ImageUrl;
    imageUrl1?: shared.ImageUrl;
    textXML: Uint8Array;
}
export declare class DetectImageUrlRequest extends SpeakeasyBase {
    pathParams: DetectImageUrlPathParams;
    queryParams: DetectImageUrlQueryParams;
    request: DetectImageUrlRequests;
}
export declare class DetectImageUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    imagePrediction?: shared.ImagePrediction;
    statusCode: number;
}
