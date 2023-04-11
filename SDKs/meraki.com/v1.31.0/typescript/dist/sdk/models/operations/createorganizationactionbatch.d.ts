import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateOrganizationActionBatchRequestBodyActions extends SpeakeasyBase {
    /**
     * The body of the action
     */
    body?: Record<string, any>;
    /**
     * The operation to be used
     */
    operation: string;
    /**
     * Unique identifier for the resource to be acted on
     */
    resource: string;
}
export declare class CreateOrganizationActionBatchRequestBody extends SpeakeasyBase {
    /**
     * A set of changes to make as part of this action (<a href='https://developer.cisco.com/meraki/api/#/rest/guides/action-batches/'>more details</a>)
     */
    actions: CreateOrganizationActionBatchRequestBodyActions[];
    /**
     * Set to true for immediate execution. Set to false if the action should be previewed before executing. This property cannot be unset once it is true. Defaults to false.
     */
    confirmed?: boolean;
    /**
     * Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch. Defaults to false.
     */
    synchronous?: boolean;
}
export declare class CreateOrganizationActionBatchRequest extends SpeakeasyBase {
    requestBody: CreateOrganizationActionBatchRequestBody;
    organizationId: string;
}
export declare class CreateOrganizationActionBatch201ApplicationJSONActions extends SpeakeasyBase {
    /**
     * The operation to be used by this action
     */
    operation: string;
    /**
     * Unique identifier for the resource to be acted on
     */
    resource: string;
}
export declare class CreateOrganizationActionBatch201ApplicationJSONStatusCreatedResources extends SpeakeasyBase {
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
export declare class CreateOrganizationActionBatch201ApplicationJSONStatus extends SpeakeasyBase {
    /**
     * Flag describing whether all actions in the action batch have completed
     */
    completed?: boolean;
    /**
     * Resources created as a result of this action batch
     */
    createdResources: CreateOrganizationActionBatch201ApplicationJSONStatusCreatedResources[];
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
export declare class CreateOrganizationActionBatch201ApplicationJSON extends SpeakeasyBase {
    /**
     * A set of changes made as part of this action (<a href='https://developer.cisco.com/meraki/api/#/rest/guides/action-batches/'>more details</a>)
     */
    actions: CreateOrganizationActionBatch201ApplicationJSONActions[];
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
    status?: CreateOrganizationActionBatch201ApplicationJSONStatus;
    /**
     * Flag describing whether actions should run synchronously or asynchronously
     */
    synchronous?: boolean;
}
export declare class CreateOrganizationActionBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationActionBatch201ApplicationJSONObject?: CreateOrganizationActionBatch201ApplicationJSON;
}
