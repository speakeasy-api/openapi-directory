import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Description of an input or output of an execution stage.
 */
export declare class StageSource extends SpeakeasyBase {
    /**
     * Dataflow service generated name for this source.
     */
    name?: string;
    /**
     * User name for the original user transform or collection with which this source is most closely associated.
     */
    originalTransformOrCollection?: string;
    /**
     * Size of the source, if measurable.
     */
    sizeBytes?: string;
    /**
     * Human-readable name for this source; may be user or system generated.
     */
    userName?: string;
}
