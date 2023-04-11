import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateImagesFromDataRequestBodyImageData extends SpeakeasyBase {
    content: Uint8Array;
    imageData: string;
}
export declare class CreateImagesFromDataRequestBody extends SpeakeasyBase {
    /**
     * Binary image data.
     */
    imageData: CreateImagesFromDataRequestBodyImageData;
}
export declare class CreateImagesFromDataRequest extends SpeakeasyBase {
    requestBody: CreateImagesFromDataRequestBody;
    trainingKey: string;
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
     * OK
     */
    imageCreateSummary?: shared.ImageCreateSummary;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
