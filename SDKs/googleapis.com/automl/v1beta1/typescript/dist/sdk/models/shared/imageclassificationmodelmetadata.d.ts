import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Model metadata for image classification.
 */
export declare class ImageClassificationModelMetadata extends SpeakeasyBase {
    /**
     * Optional. The ID of the `base` model. If it is specified, the new model will be created based on the `base` model. Otherwise, the new model will be created from scratch. The `base` model must be in the same `project` and `location` as the new model to create, and have the same `model_type`.
     */
    baseModelId?: string;
    /**
     * Optional. Type of the model. The available values are: * `cloud` - Model to be used via prediction calls to AutoML API. This is the default value. * `mobile-low-latency-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-versatile-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. * `mobile-high-accuracy-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have a higher latency, but should also have a higher prediction quality than other models. * `mobile-core-ml-low-latency-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-core-ml-versatile-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. * `mobile-core-ml-high-accuracy-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. Expected to have a higher latency, but should also have a higher prediction quality than other models.
     */
    modelType?: string;
    /**
     * Output only. The number of nodes this model is deployed on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the node_qps field.
     */
    nodeCount?: string;
    /**
     * Output only. An approximate number of online prediction QPS that can be supported by this model per each node on which it is deployed.
     */
    nodeQps?: number;
    /**
     * Output only. The reason that this create model operation stopped, e.g. `BUDGET_REACHED`, `MODEL_CONVERGED`.
     */
    stopReason?: string;
    /**
     * Required. The train budget of creating this model, expressed in hours. The actual `train_cost` will be equal or less than this value.
     */
    trainBudget?: string;
    /**
     * Output only. The actual train cost of creating this model, expressed in hours. If this model is created from a `base` model, the train cost used to create the `base` model are not included.
     */
    trainCost?: string;
}
