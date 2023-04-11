import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetABatchOfConsumerTransactionClassificationResultsRequest extends SpeakeasyBase {
    /**
     * (Required) Batch id.
     */
    id: string;
}
export declare class GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsContact extends SpeakeasyBase {
    email?: string;
    phone?: string;
}
export declare class GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsLocation extends SpeakeasyBase {
    address?: string;
    city?: string;
    country?: string;
    lat?: number;
    lon?: number;
    postalCode?: string;
}
export declare class GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsRating extends SpeakeasyBase {
    reviews?: number;
    value?: number;
}
export declare class GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResults extends SpeakeasyBase {
    contact?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsContact;
    labels?: string[];
    location?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsLocation;
    logo?: string;
    merchant?: string;
    person?: string;
    rating?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsRating;
    transactionId?: string;
    website?: string;
}
/**
 * Returned a batch of consumer transaction classification results.
 */
export declare class GetABatchOfConsumerTransactionClassificationResults200ApplicationJSON extends SpeakeasyBase {
    id?: string;
    progress?: number;
    results?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResults[];
    status?: string;
    updatedAt?: string;
}
export declare class GetABatchOfConsumerTransactionClassificationResultsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returned a batch of consumer transaction classification results.
     */
    getABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJSON;
}
