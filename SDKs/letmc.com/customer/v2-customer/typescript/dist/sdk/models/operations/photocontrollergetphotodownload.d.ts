import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PhotoControllerGetPhotoDownloadRequest extends SpeakeasyBase {
    /**
     * An optional parameter specifying the image height
     */
    height?: number;
    /**
     * The unique ID of the photo on the property
     */
    photoID: string;
    /**
     * The unique client short-name
     */
    shortName: string;
    /**
     * The login token returned from the /session POST call
     */
    token: string;
    /**
     * An optional parameter specifying the image width
     */
    width?: number;
}
export declare class PhotoControllerGetPhotoDownloadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    object?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
