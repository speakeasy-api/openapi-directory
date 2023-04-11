import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest extends SpeakeasyBase {
    batchInputSubscriptionBatchUpdateRequest: shared.BatchInputSubscriptionBatchUpdateRequest;
    appId: number;
}
export declare class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    batchResponseSubscriptionResponse?: shared.BatchResponseSubscriptionResponse;
    /**
     * multiple statuses
     */
    batchResponseSubscriptionResponseWithErrors?: shared.BatchResponseSubscriptionResponseWithErrors;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
