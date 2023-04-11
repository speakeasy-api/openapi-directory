import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status to move the dispute to.
 */
export declare enum SimulatesAdvancingTheStateOfACardDisputeParametersStatusEnum {
    Accepted = "accepted",
    Rejected = "rejected"
}
export declare class SimulatesAdvancingTheStateOfACardDisputeParameters extends SpeakeasyBase {
    /**
     * Why the dispute was rejected. Not required for accepting disputes.
     */
    explanation?: string;
    /**
     * The status to move the dispute to.
     */
    status: SimulatesAdvancingTheStateOfACardDisputeParametersStatusEnum;
}
