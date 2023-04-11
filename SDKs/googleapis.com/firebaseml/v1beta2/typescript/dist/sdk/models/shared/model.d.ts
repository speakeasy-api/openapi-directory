import { SpeakeasyBase } from "../../../internal/utils";
import { ModelState } from "./modelstate";
import { Operation } from "./operation";
import { TfLiteModel, TfLiteModelInput } from "./tflitemodel";
/**
 * An ML model hosted in Firebase ML
 */
export declare class ModelInput extends SpeakeasyBase {
    /**
     * Required. The name of the model to create. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores(_) and ASCII digits 0-9. It must start with a letter.
     */
    displayName?: string;
    /**
     * The resource name of the Model. Model names have the form `projects/{project_id}/models/{model_id}` The name is ignored when creating a model.
     */
    name?: string;
    /**
     * State common to all model types. Includes publishing and validation information.
     */
    state?: ModelState;
    /**
     * User defined tags which can be used to group/filter models during listing
     */
    tags?: string[];
    /**
     * Information that is specific to TfLite models.
     */
    tfliteModel?: TfLiteModelInput;
}
/**
 * An ML model hosted in Firebase ML
 */
export declare class Model extends SpeakeasyBase {
    /**
     * Output only. Lists operation ids associated with this model whose status is NOT done.
     */
    activeOperations?: Operation[];
    /**
     * Output only. Timestamp when this model was created in Firebase ML.
     */
    createTime?: string;
    /**
     * Required. The name of the model to create. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores(_) and ASCII digits 0-9. It must start with a letter.
     */
    displayName?: string;
    /**
     * Output only. See RFC7232 https://tools.ietf.org/html/rfc7232#section-2.3
     */
    etag?: string;
    /**
     * Output only. The model_hash will change if a new file is available for download.
     */
    modelHash?: string;
    /**
     * The resource name of the Model. Model names have the form `projects/{project_id}/models/{model_id}` The name is ignored when creating a model.
     */
    name?: string;
    /**
     * State common to all model types. Includes publishing and validation information.
     */
    state?: ModelState;
    /**
     * User defined tags which can be used to group/filter models during listing
     */
    tags?: string[];
    /**
     * Information that is specific to TfLite models.
     */
    tfliteModel?: TfLiteModel;
    /**
     * Output only. Timestamp when this model was updated in Firebase ML.
     */
    updateTime?: string;
}
