import { SpeakeasyBase } from "../../../internal/utils";
import { Escalation } from "./escalation";
/**
 * The request message for the EscalateCase endpoint.
 */
export declare class EscalateCaseRequest extends SpeakeasyBase {
    /**
     * An escalation of a support case.
     */
    escalation?: Escalation;
}
