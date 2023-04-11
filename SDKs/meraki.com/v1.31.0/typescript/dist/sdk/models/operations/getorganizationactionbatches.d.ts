import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Filter batches by status. Valid types are pending, completed, and failed.
 */
export declare enum GetOrganizationActionBatchesStatusEnum {
    Completed = "completed",
    Failed = "failed",
    Pending = "pending"
}
export declare class GetOrganizationActionBatchesRequest extends SpeakeasyBase {
    organizationId: string;
    /**
     * Filter batches by status. Valid types are pending, completed, and failed.
     */
    status?: GetOrganizationActionBatchesStatusEnum;
}
export declare class GetOrganizationActionBatchesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationActionBatches200ApplicationJSONObjects?: Record<string, any>[];
}
