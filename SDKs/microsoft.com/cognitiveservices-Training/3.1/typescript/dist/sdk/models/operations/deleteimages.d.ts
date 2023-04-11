import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteImagesRequest extends SpeakeasyBase {
    /**
     * API key.
     */
    trainingKey: string;
    /**
     * Flag to specify delete all images, specify this flag or a list of images. Using this flag will return a 202 response to indicate the images are being deleted.
     */
    allImages?: boolean;
    /**
     * Removes these images from all iterations, not just the current workspace. Using this flag will return a 202 response to indicate the images are being deleted.
     */
    allIterations?: boolean;
    /**
     * Ids of the images to be deleted. Limited to 256 images per batch.
     */
    imageIds?: string[];
    /**
     * The project id.
     */
    projectId: string;
}
export declare class DeleteImagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
