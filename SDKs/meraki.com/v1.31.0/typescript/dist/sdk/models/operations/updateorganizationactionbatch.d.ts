import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationActionBatchRequestBody extends SpeakeasyBase {
    /**
     * A boolean representing whether or not the batch has been confirmed. This property cannot be unset once it is true.
     */
    confirmed?: boolean;
    /**
     * Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch.
     */
    synchronous?: boolean;
}
export declare class UpdateOrganizationActionBatchRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationActionBatchRequestBody;
    actionBatchId: string;
    organizationId: string;
}
export declare class UpdateOrganizationActionBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationActionBatch200ApplicationJSONObject?: Record<string, any>;
}
