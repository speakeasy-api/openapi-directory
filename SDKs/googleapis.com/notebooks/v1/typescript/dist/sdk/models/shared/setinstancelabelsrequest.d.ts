import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for setting instance labels.
 */
export declare class SetInstanceLabelsRequest extends SpeakeasyBase {
    /**
     * Labels to apply to this instance. These can be later modified by the setLabels method
     */
    labels?: Record<string, string>;
}
