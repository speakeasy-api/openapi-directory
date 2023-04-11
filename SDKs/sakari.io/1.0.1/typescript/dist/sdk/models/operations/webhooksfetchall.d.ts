import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WebhooksFetchAllSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class WebhooksFetchAllRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
}
export declare class WebhooksFetchAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    webhooksResponse?: shared.WebhooksResponse;
}
