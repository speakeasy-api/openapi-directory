import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadPhotoRequestBodyPhoto extends SpeakeasyBase {
    content: Uint8Array;
    photo: string;
}
export declare class UploadPhotoRequestBody extends SpeakeasyBase {
    /**
     * Client device pixel ratio used to determine thumbnail size (default 1.0).
     */
    devicePixelRatio?: number;
    /**
     * Photo to upload.
     */
    photo: UploadPhotoRequestBodyPhoto;
}
export declare class UploadPhotoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Photo created.
     */
    photoResult?: shared.PhotoResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
