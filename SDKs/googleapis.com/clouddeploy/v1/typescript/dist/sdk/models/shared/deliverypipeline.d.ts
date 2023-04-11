import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineCondition } from "./pipelinecondition";
import { SerialPipeline } from "./serialpipeline";
/**
 * A `DeliveryPipeline` resource in the Google Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.
 */
export declare class DeliveryPipeline extends SpeakeasyBase {
    /**
     * User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy.
     */
    annotations?: Record<string, string>;
    /**
     * PipelineCondition contains all conditions relevant to a Delivery Pipeline.
     */
    condition?: PipelineCondition;
    /**
     * Output only. Time at which the pipeline was created.
     */
    createTime?: string;
    /**
     * Description of the `DeliveryPipeline`. Max length is 255 characters.
     */
    description?: string;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
     */
    labels?: Record<string, string>;
    /**
     * Optional. Name of the `DeliveryPipeline`. Format is projects/{project}/ locations/{location}/deliveryPipelines/a-z{0,62}.
     */
    name?: string;
    /**
     * SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
     */
    serialPipeline?: SerialPipeline;
    /**
     * When suspended, no new releases or rollouts can be created, but in-progress ones will complete.
     */
    suspended?: boolean;
    /**
     * Output only. Unique identifier of the `DeliveryPipeline`.
     */
    uid?: string;
    /**
     * Output only. Most recent time at which the pipeline was updated.
     */
    updateTime?: string;
}
/**
 * A `DeliveryPipeline` resource in the Google Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.
 */
export declare class DeliveryPipelineInput extends SpeakeasyBase {
    /**
     * User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy.
     */
    annotations?: Record<string, string>;
    /**
     * PipelineCondition contains all conditions relevant to a Delivery Pipeline.
     */
    condition?: PipelineCondition;
    /**
     * Description of the `DeliveryPipeline`. Max length is 255 characters.
     */
    description?: string;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
     */
    labels?: Record<string, string>;
    /**
     * Optional. Name of the `DeliveryPipeline`. Format is projects/{project}/ locations/{location}/deliveryPipelines/a-z{0,62}.
     */
    name?: string;
    /**
     * SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
     */
    serialPipeline?: SerialPipeline;
    /**
     * When suspended, no new releases or rollouts can be created, but in-progress ones will complete.
     */
    suspended?: boolean;
}
