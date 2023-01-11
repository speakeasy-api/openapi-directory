import { SpeakeasyBase } from "../../../internal/utils";
export declare class PhotoControllerGetPhotoDownloadPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class PhotoControllerGetPhotoDownloadQueryParams extends SpeakeasyBase {
    height?: number;
    photoID: string;
    token: string;
    width?: number;
}
export declare class PhotoControllerGetPhotoDownloadRequest extends SpeakeasyBase {
    pathParams: PhotoControllerGetPhotoDownloadPathParams;
    queryParams: PhotoControllerGetPhotoDownloadQueryParams;
}
export declare class PhotoControllerGetPhotoDownloadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    object?: Record<string, any>;
    statusCode: number;
}
