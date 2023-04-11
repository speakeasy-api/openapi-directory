import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoSuspensionConfig } from "./enterprisecrmeventbusprotosuspensionconfig";
import { GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig, GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput } from "./googlecloudintegrationsv1alphasuspensionapprovalconfig";
import { GoogleCloudIntegrationsV1alphaSuspensionAudit } from "./googlecloudintegrationsv1alphasuspensionaudit";
/**
 * Required. State of this suspension, indicating what action a resolver has taken.
 */
export declare enum GoogleCloudIntegrationsV1alphaSuspensionStateEnum {
    ResolutionStateUnspecified = "RESOLUTION_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Rejected = "REJECTED",
    Lifted = "LIFTED"
}
/**
 * A record representing a suspension.
 */
export declare class GoogleCloudIntegrationsV1alphaSuspensionInput extends SpeakeasyBase {
    /**
     * Configurations for approving the Suspension.
     */
    approvalConfig?: GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput;
    /**
     * Contains when and by whom the suspension was resolved.
     */
    audit?: GoogleCloudIntegrationsV1alphaSuspensionAudit;
    /**
     * Required. ID of the associated execution.
     */
    eventExecutionInfoId?: string;
    /**
     * Required. The name of the originating integration.
     */
    integration?: string;
    /**
     * Resource name for suspensions suspension/{suspension_id}
     */
    name?: string;
    /**
     * Required. State of this suspension, indicating what action a resolver has taken.
     */
    state?: GoogleCloudIntegrationsV1alphaSuspensionStateEnum;
    suspensionConfig?: EnterpriseCrmEventbusProtoSuspensionConfig;
    /**
     * Required. Task id of the associated SuspensionTask.
     */
    taskId?: string;
}
/**
 * A record representing a suspension.
 */
export declare class GoogleCloudIntegrationsV1alphaSuspension extends SpeakeasyBase {
    /**
     * Configurations for approving the Suspension.
     */
    approvalConfig?: GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig;
    /**
     * Contains when and by whom the suspension was resolved.
     */
    audit?: GoogleCloudIntegrationsV1alphaSuspensionAudit;
    /**
     * Output only. Auto-generated.
     */
    createTime?: string;
    /**
     * Required. ID of the associated execution.
     */
    eventExecutionInfoId?: string;
    /**
     * Required. The name of the originating integration.
     */
    integration?: string;
    /**
     * Output only. Auto-generated.
     */
    lastModifyTime?: string;
    /**
     * Resource name for suspensions suspension/{suspension_id}
     */
    name?: string;
    /**
     * Required. State of this suspension, indicating what action a resolver has taken.
     */
    state?: GoogleCloudIntegrationsV1alphaSuspensionStateEnum;
    suspensionConfig?: EnterpriseCrmEventbusProtoSuspensionConfig;
    /**
     * Required. Task id of the associated SuspensionTask.
     */
    taskId?: string;
}
