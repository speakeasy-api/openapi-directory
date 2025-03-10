import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteImageTagsRequest extends SpeakeasyBase {
    /**
     * API key.
     */
    trainingKey: string;
    /**
     * Image ids. Limited to 64 images.
     */
    imageIds: string[];
    /**
     * The project id.
     */
    projectId: string;
    /**
     * Tags to be deleted from the specified images. Limited to 20 tags.
     */
    tagIds: string[];
}
export declare class DeleteImageTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
