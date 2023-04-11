import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Description of an interstitial value between transforms in an execution stage.
 */
export declare class ComponentSource extends SpeakeasyBase {
    /**
     * Dataflow service generated name for this source.
     */
    name?: string;
    /**
     * User name for the original user transform or collection with which this source is most closely associated.
     */
    originalTransformOrCollection?: string;
    /**
     * Human-readable name for this transform; may be user or system generated.
     */
    userName?: string;
}
