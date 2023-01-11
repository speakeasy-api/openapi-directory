import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetConsumerV1CustomersSubscriptionsQueryParams extends SpeakeasyBase {
    limit?: number;
    locationId?: string;
    offset?: number;
}
export declare class GetConsumerV1CustomersSubscriptionsRequest extends SpeakeasyBase {
    queryParams: GetConsumerV1CustomersSubscriptionsQueryParams;
}
export declare class GetConsumerV1CustomersSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    customerSubscriptionListViewModel?: Record<string, any>;
    statusCode: number;
}
