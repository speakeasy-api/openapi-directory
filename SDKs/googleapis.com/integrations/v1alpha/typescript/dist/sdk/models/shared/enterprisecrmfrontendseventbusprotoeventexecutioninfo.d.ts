import { SpeakeasyBase } from "../../../internal/utils";
import { CrmlogErrorCode } from "./crmlogerrorcode";
import { EnterpriseCrmEventbusProtoErrorDetail } from "./enterprisecrmeventbusprotoerrordetail";
import { EnterpriseCrmEventbusProtoExecutionTraceInfo } from "./enterprisecrmeventbusprotoexecutiontraceinfo";
import { EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails } from "./enterprisecrmfrontendseventbusprotoeventexecutiondetails";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
/**
 * The ways user posts this event.
 */
export declare enum EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum {
    Unspecified = "UNSPECIFIED",
    Post = "POST",
    PostToQueue = "POST_TO_QUEUE",
    Schedule = "SCHEDULE",
    PostByEventConfigId = "POST_BY_EVENT_CONFIG_ID",
    PostWithEventDetails = "POST_WITH_EVENT_DETAILS"
}
/**
 * Which Google product the execution_info belongs to. If not set, the execution_info belongs to Integration Platform by default.
 */
export declare enum EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum {
    UnspecifiedProduct = "UNSPECIFIED_PRODUCT",
    Ip = "IP",
    Apigee = "APIGEE",
    Security = "SECURITY"
}
/**
 * Contains all the execution details for a workflow instance. Next available id: 24
 */
export declare class EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo extends SpeakeasyBase {
    /**
     * The event data user sends as request.
     */
    clientId?: string;
    /**
     * Auto-generated.
     */
    createTime?: string;
    /**
     * Registered ids for errors, as "oneof" enums. Each task or logical grouping of tasks may share the same enum.
     */
    errorCode?: CrmlogErrorCode;
    /**
     * Errors, warnings, and informationals associated with the workflow/task. The order in which the errors were added by the workflow/task is maintained.
     */
    errors?: EnterpriseCrmEventbusProtoErrorDetail[];
    /**
     * Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10
     */
    eventExecutionDetails?: EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails;
    /**
     * Auto-generated primary key.
     */
    eventExecutionInfoId?: string;
    /**
     * Message that helps aggregate all sub-executions triggered by one execution and keeps track of child-parent relationships.
     */
    executionTraceInfo?: EnterpriseCrmEventbusProtoExecutionTraceInfo;
    /**
     * Auto-generated.
     */
    lastModifiedTime?: string;
    /**
     * The ways user posts this event.
     */
    postMethod?: EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum;
    /**
     * Which Google product the execution_info belongs to. If not set, the execution_info belongs to Integration Platform by default.
     */
    product?: EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum;
    /**
     * Optional. This is used to de-dup incoming request.
     */
    requestId?: string;
    /**
     * LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see
     */
    requestParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;
    /**
     * LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see
     */
    responseParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;
    /**
     * Workflow snapshot number.
     */
    snapshotNumber?: string;
    /**
     * Tenant this event is created. Used to reschedule the event to correct tenant.
     */
    tenant?: string;
    /**
     * The trigger id of the workflow trigger config. If both trigger_id and client_id is present, the workflow is executed from the start tasks provided by the matching trigger config otherwise it is executed from the default start tasks.
     */
    triggerId?: string;
    /**
     * Required. Pointer to the workflow it is executing.
     */
    workflowId?: string;
    /**
     * Name of the workflow.
     */
    workflowName?: string;
    /**
     * Time interval in seconds to schedule retry of workflow in manifold when workflow is already running
     */
    workflowRetryBackoffIntervalSeconds?: string;
}
