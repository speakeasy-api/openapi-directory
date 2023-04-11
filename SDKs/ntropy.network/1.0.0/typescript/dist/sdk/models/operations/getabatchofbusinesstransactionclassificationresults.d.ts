import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetABatchOfBusinessTransactionClassificationResultsRequest extends SpeakeasyBase {
    /**
     * (Required) Batch id.
     */
    id: string;
}
export declare class GetABatchOfBusinessTransactionClassificationResults200ApplicationJSONResults extends SpeakeasyBase {
    labels?: string[];
    logo?: string;
    merchant?: string;
    transactionId?: string;
    website?: string;
}
/**
 * Returned a batch of business transaction classification results.
 */
export declare class GetABatchOfBusinessTransactionClassificationResults200ApplicationJSON extends SpeakeasyBase {
    id?: string;
    progress?: number;
    results?: GetABatchOfBusinessTransactionClassificationResults200ApplicationJSONResults[];
    status?: string;
    updatedAt?: string;
}
export declare class GetABatchOfBusinessTransactionClassificationResultsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returned a batch of business transaction classification results.
     */
    getABatchOfBusinessTransactionClassificationResults200ApplicationJSONObject?: GetABatchOfBusinessTransactionClassificationResults200ApplicationJSON;
}
