import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationActionBatchRequest extends SpeakeasyBase {
    actionBatchId: string;
    organizationId: string;
}
export declare class GetOrganizationActionBatch200ApplicationJSONActions extends SpeakeasyBase {
    /**
     * The operation to be used by this action
     */
    operation: string;
    /**
     * Unique identifier for the resource to be acted on
     */
    resource: string;
}
export declare class GetOrganizationActionBatch200ApplicationJSONStatusCreatedResources extends SpeakeasyBase {
    /**
     * ID of the created resource
     */
    id?: string;
    /**
     * URI, not including base, of the created resource
     */
    uri?: string;
}
/**
 * Status of action batch
 */
export declare class GetOrganizationActionBatch200ApplicationJSONStatus extends SpeakeasyBase {
    /**
     * Flag describing whether all actions in the action batch have completed
     */
    completed?: boolean;
    /**
     * Resources created as a result of this action batch
     */
    createdResources: GetOrganizationActionBatch200ApplicationJSONStatusCreatedResources[];
    /**
     * List of errors encountered when running actions in the action batch
     */
    errors?: string[];
    /**
     * Flag describing whether any actions in the action batch failed
     */
    failed?: boolean;
}
/**
 * Successful operation
 */
export declare class GetOrganizationActionBatch200ApplicationJSON extends SpeakeasyBase {
    /**
     * A set of changes made as part of this action (<a href='https://developer.cisco.com/meraki/api/#/rest/guides/action-batches/'>more details</a>)
     */
    actions: GetOrganizationActionBatch200ApplicationJSONActions[];
    /**
     * Flag describing whether the action should be previewed before executing or not
     */
    confirmed?: boolean;
    /**
     * ID of the action batch. Can be used to check the status of the action batch at /organizations/{organizationId}/actionBatches/{actionBatchId}
     */
    id?: string;
    /**
     * ID of the organization this action batch belongs to
     */
    organizationId?: string;
    /**
     * Status of action batch
     */
    status?: GetOrganizationActionBatch200ApplicationJSONStatus;
    /**
     * Flag describing whether actions should run synchronously or asynchronously
     */
    synchronous?: boolean;
}
export declare class GetOrganizationActionBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationActionBatch200ApplicationJSONObject?: GetOrganizationActionBatch200ApplicationJSON;
}
