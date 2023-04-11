import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo } from "./enterprisecrmfrontendseventbusprotoeventexecutioninfo";
import { GoogleCloudIntegrationsV1alphaExecution } from "./googlecloudintegrationsv1alphaexecution";
/**
 * Response for listing the integration execution data.
 */
export declare class GoogleCloudIntegrationsV1alphaListExecutionsResponse extends SpeakeasyBase {
    /**
     * Required. The detailed information of requested executions.
     */
    executionInfos?: EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo[];
    /**
     * The detailed information of requested executions
     */
    executions?: GoogleCloudIntegrationsV1alphaExecution[];
    /**
     * The token used to retrieve the next page results.
     */
    nextPageToken?: string;
}
