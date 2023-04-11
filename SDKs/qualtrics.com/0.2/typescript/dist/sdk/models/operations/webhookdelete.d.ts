import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WebhookDeleteResponse extends SpeakeasyBase {
    contentType: string;
    eventSubscriptionsResponse?: shared.EventSubscriptionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
