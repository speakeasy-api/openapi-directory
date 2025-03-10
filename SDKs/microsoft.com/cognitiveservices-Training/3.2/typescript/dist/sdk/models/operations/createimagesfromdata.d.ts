import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateImagesFromDataRequestBodyImageData extends SpeakeasyBase {
    content: Uint8Array;
    imageData: string;
}
export declare class CreateImagesFromDataRequestBody extends SpeakeasyBase {
    /**
     * Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 6MB.
     */
    imageData: CreateImagesFromDataRequestBodyImageData;
}
export declare class CreateImagesFromDataRequest extends SpeakeasyBase {
    requestBody: CreateImagesFromDataRequestBody;
    /**
     * The project id.
     */
    projectId: string;
    /**
     * The tags ids with which to tag each image. Limited to 20.
     */
    tagIds?: string[];
}
export declare class CreateImagesFromDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    imageCreateSummary?: shared.ImageCreateSummary;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
