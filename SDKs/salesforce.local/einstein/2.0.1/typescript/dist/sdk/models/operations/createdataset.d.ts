import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateDatasetSecurity extends SpeakeasyBase {
    bearerToken: string;
}
/**
 * Type of dataset data
 */
export declare enum CreateDatasetRequestBodyTypeEnum {
    Image = "image",
    ImageMultiLabel = "image-multi-label"
}
export declare class CreateDatasetRequestBody extends SpeakeasyBase {
    /**
     * Optional comma-separated list of labels. If specified, creates the labels in the dataset. Maximum number of labels per dataset is 250.
     */
    labels?: string;
    /**
     * Name of the dataset. Maximum length is 180 characters.
     */
    name?: string;
    /**
     * Type of dataset data
     */
    type?: CreateDatasetRequestBodyTypeEnum;
}
export declare class CreateDatasetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Creation success
     */
    dataset?: shared.Dataset;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
