import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateDatasetAsync1Security extends SpeakeasyBase {
    bearerToken: string;
}
export declare class UpdateDatasetAsync1RequestBody extends SpeakeasyBase {
    /**
     * Local .zip file to upload. The maximum .zip file size you can upload from a local drive is 50 MB.
     */
    data?: string;
    /**
     * ID of the model that misclassified the images. The feedback examples are added to the dataset associated with this model.
     */
    modelId?: string;
}
export declare class UpdateDatasetAsync1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Update success
     */
    dataset?: shared.Dataset;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
