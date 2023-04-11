import { SpeakeasyBase } from "../../../internal/utils";
export declare class ImageClassificationRequest extends SpeakeasyBase {
    /**
     * ID of the model that makes the prediction.
     */
    modelId: string;
    /**
     * Number of probabilities to return.
     */
    numResults?: number;
    /**
     * The image contained in a base64 string.
     */
    sampleBase64Content?: string;
    /**
     * String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.
     */
    sampleId?: string;
    /**
     * URL of the image file.
     */
    sampleLocation?: string;
}
