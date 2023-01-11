import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebhooksUnsubscribePathParams extends SpeakeasyBase {
    accountId: string;
    url: string;
}
export declare class WebhooksUnsubscribeSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class WebhooksUnsubscribeRequest extends SpeakeasyBase {
    pathParams: WebhooksUnsubscribePathParams;
    security: WebhooksUnsubscribeSecurity;
}
export declare class WebhooksUnsubscribeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
