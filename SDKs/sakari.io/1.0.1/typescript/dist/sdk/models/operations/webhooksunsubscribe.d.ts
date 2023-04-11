import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebhooksUnsubscribeSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class WebhooksUnsubscribeRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * Account to apply operations to
     */
    url: string;
}
export declare class WebhooksUnsubscribeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
