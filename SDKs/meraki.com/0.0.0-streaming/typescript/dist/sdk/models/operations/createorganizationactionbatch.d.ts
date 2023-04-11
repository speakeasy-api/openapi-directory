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
export declare class CreateOrganizationActionBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationActionBatch201ApplicationJSONObject?: Record<string, any>;
}
