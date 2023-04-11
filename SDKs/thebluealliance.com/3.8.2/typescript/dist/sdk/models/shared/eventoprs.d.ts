import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OPR, DPR, and CCWM for teams at the event.
 */
export declare class EventOPRs extends SpeakeasyBase {
    /**
     * A key-value pair with team key (eg `frc254`) as key and CCWM as value.
     */
    ccwms?: Record<string, number>;
    /**
     * A key-value pair with team key (eg `frc254`) as key and DPR as value.
     */
    dprs?: Record<string, number>;
    /**
     * A key-value pair with team key (eg `frc254`) as key and OPR as value.
     */
    oprs?: Record<string, number>;
}
