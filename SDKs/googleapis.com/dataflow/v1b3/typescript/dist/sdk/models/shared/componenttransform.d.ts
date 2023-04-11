import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Description of a transform executed as part of an execution stage.
 */
export declare class ComponentTransform extends SpeakeasyBase {
    /**
     * Dataflow service generated name for this source.
     */
    name?: string;
    /**
     * User name for the original user transform with which this transform is most closely associated.
     */
    originalTransform?: string;
    /**
     * Human-readable name for this transform; may be user or system generated.
     */
    userName?: string;
}
