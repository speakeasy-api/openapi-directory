import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OPR, DPR, and CCWM for teams at the event.
**/
export declare class EventOpRs extends SpeakeasyBase {
    ccwms?: Record<string, number>;
    dprs?: Record<string, number>;
    oprs?: Record<string, number>;
}
