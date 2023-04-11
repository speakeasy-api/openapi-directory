import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteImagesRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * Ids of the images to be deleted. Limited to 256 images per batch.
     */
    imageIds: string[];
    /**
     * The project id.
     */
    projectId: string;
}
export declare class DeleteImagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
