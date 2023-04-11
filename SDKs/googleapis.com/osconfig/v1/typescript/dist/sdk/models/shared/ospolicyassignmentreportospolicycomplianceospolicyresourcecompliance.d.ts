import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceExecResourceOutput } from "./ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceexecresourceoutput";
import { OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep } from "./ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceospolicyresourceconfigstep";
/**
 * The compliance state of the resource.
 */
export declare enum OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceComplianceStateEnum {
    Unknown = "UNKNOWN",
    Compliant = "COMPLIANT",
    NonCompliant = "NON_COMPLIANT"
}
/**
 * Compliance data for an OS policy resource.
 */
export declare class OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance extends SpeakeasyBase {
    /**
     * The compliance state of the resource.
     */
    complianceState?: OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceComplianceStateEnum;
    /**
     * A reason for the resource to be in the given compliance state. This field is always populated when `compliance_state` is `UNKNOWN`. The following values are supported when `compliance_state == UNKNOWN` * `execution-errors`: Errors were encountered by the agent while executing the resource and the compliance state couldn't be determined. * `execution-skipped-by-agent`: Resource execution was skipped by the agent because errors were encountered while executing prior resources in the OS policy. * `os-policy-execution-attempt-failed`: The execution of the OS policy containing this resource failed and the compliance state couldn't be determined.
     */
    complianceStateReason?: string;
    /**
     * Ordered list of configuration completed by the agent for the OS policy resource.
     */
    configSteps?: OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep[];
    /**
     * ExecResource specific output.
     */
    execResourceOutput?: OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceExecResourceOutput;
    /**
     * The ID of the OS policy resource.
     */
    osPolicyResourceId?: string;
}
