import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubscriptionsApiListRequest extends SpeakeasyBase {
    requestBody: any;
    page?: number;
}
export declare class SubscriptionsApiListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    subscriptionViews?: shared.SubscriptionView[];
}
