import { SpeakeasyBase } from "../../../internal/utils";
import { LabelThresholds } from "./labelthresholds";
/**
 * Sets thresholds for AI moderation
 */
export declare class Thresholds extends SpeakeasyBase {
    explicit?: LabelThresholds;
    spam?: LabelThresholds;
    toxic?: LabelThresholds;
}
