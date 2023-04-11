import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModelReference extends SpeakeasyBase {
    /**
     * [Required] The ID of the dataset containing this model.
     */
    datasetId?: string;
    /**
     * [Required] The ID of the model. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
     */
    modelId?: string;
    /**
     * [Required] The ID of the project containing this model.
     */
    projectId?: string;
}
