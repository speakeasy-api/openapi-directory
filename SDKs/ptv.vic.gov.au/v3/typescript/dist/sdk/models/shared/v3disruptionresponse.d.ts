import { SpeakeasyBase } from "../../../internal/utils";
import { V3Disruption } from "./v3disruption";
import { V3Status } from "./v3status";
/**
 * Disruption information for the specified disruption ID.
 */
export declare class V3DisruptionResponse extends SpeakeasyBase {
    disruption?: V3Disruption;
    status?: V3Status;
}
