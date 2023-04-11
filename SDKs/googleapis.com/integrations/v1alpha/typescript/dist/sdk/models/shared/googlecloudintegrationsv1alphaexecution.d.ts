import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoEventExecutionDetails } from "./enterprisecrmeventbusprotoeventexecutiondetails";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
import { GoogleCloudIntegrationsV1alphaExecutionDetails } from "./googlecloudintegrationsv1alphaexecutiondetails";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
/**
 * The ways user posts this event.
 */
export declare enum GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum {
    ExecutionMethodUnspecified = "EXECUTION_METHOD_UNSPECIFIED",
    Post = "POST",
    PostToQueue = "POST_TO_QUEUE",
    Schedule = "SCHEDULE"
}
/**
 * The Execution resource contains detailed information of an individual integration execution.
 */
export declare class GoogleCloudIntegrationsV1alphaExecution extends SpeakeasyBase {
    /**
     * Output only. Created time of the execution.
     */
    createTime?: string;
    /**
     * Direct sub executions of the following Execution.
     */
    directSubExecutions?: GoogleCloudIntegrationsV1alphaExecution[];
    /**
     * Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10
     */
    eventExecutionDetails?: EnterpriseCrmEventbusProtoEventExecutionDetails;
    /**
     * Contains the details of the execution info: this includes the tasks execution details plus the event execution statistics.
     */
    executionDetails?: GoogleCloudIntegrationsV1alphaExecutionDetails;
    /**
     * The ways user posts this event.
     */
    executionMethod?: GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum;
    /**
     * Auto-generated primary key.
     */
    name?: string;
    /**
     * Event parameters come in as part of the request.
     */
    requestParameters?: Record<string, GoogleCloudIntegrationsV1alphaValueType>;
    /**
     * Event parameters come in as part of the request.
     */
    requestParams?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];
    /**
     * Event parameters returned as part of the response.
     */
    responseParameters?: Record<string, GoogleCloudIntegrationsV1alphaValueType>;
    /**
     * Event parameters come out as part of the response.
     */
    responseParams?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];
    /**
     * The trigger id of the integration trigger config. If both trigger_id and client_id is present, the integration is executed from the start tasks provided by the matching trigger config otherwise it is executed from the default start tasks.
     */
    triggerId?: string;
    /**
     * Output only. Last modified time of the execution.
     */
    updateTime?: string;
}
