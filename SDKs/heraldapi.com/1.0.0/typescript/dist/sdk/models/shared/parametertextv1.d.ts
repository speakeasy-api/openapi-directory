import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object containing text for the parameter that you can render on a front-end.
 */
export declare class ParameterTextV1 extends SpeakeasyBase {
    /**
     * Text to display on a front-end when you are agent-facing.
     */
    agentFacingText?: string;
    /**
     * Text to display on a front-end when you are applicant-facing.
     */
    applicantFacingText?: string;
}
