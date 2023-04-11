import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProvideFeedback1Security extends SpeakeasyBase {
    bearerToken: string;
}
export declare class ProvideFeedback1RequestBody extends SpeakeasyBase {
    /**
     * Local image file to upload.
     */
    data?: string;
    /**
     * Correct label for the example. Must be a label that exists in the dataset.
     */
    expectedLabel?: string;
    /**
     * ID of the model that misclassified the image. The feedback example is added to the dataset associated with this model.
     */
    modelId?: string;
    /**
     * Name of the example. Optional. Maximum length is 180 characters.
     */
    name?: string;
}
export declare class ProvideFeedback1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Upload success
     */
    example?: shared.Example;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
