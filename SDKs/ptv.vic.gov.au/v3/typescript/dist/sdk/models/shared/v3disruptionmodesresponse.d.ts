import { SpeakeasyBase } from "../../../internal/utils";
import { V3DisruptionMode } from "./v3disruptionmode";
import { V3Status } from "./v3status";
/**
 * Disruption specific modes
 */
export declare class V3DisruptionModesResponse extends SpeakeasyBase {
    /**
     * Transport mode identifiers
     */
    disruptionModes?: V3DisruptionMode[];
    status?: V3Status;
}
