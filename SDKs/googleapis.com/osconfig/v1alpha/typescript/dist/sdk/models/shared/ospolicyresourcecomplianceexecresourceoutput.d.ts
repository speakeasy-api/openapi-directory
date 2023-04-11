import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ExecResource specific output.
 */
export declare class OSPolicyResourceComplianceExecResourceOutput extends SpeakeasyBase {
    /**
     * Output from Enforcement phase output file (if run). Output size is limited to 100K bytes.
     */
    enforcementOutput?: string;
}
