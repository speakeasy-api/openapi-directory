import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteImagesPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DeleteImagesQueryParams extends SpeakeasyBase {
    allImages?: boolean;
    allIterations?: boolean;
    imageIds?: string[];
}
export declare class DeleteImagesHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class DeleteImagesRequest extends SpeakeasyBase {
    pathParams: DeleteImagesPathParams;
    queryParams: DeleteImagesQueryParams;
    headers: DeleteImagesHeaders;
}
export declare class DeleteImagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    statusCode: number;
}
