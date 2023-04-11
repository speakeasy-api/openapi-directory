import { SpeakeasyBase } from "../../../internal/utils";
import { V3Run } from "./v3run";
import { V3Status } from "./v3status";
/**
 * The trip/service run details for the run_ref and route type specified.
 */
export declare class V3RunResponse extends SpeakeasyBase {
    run?: V3Run;
    status?: V3Status;
}
