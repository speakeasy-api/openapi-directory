import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebhooksIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetWebhooksId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetWebhooksId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetWebhooksIdRequest extends SpeakeasyBase {
    pathParams: GetWebhooksIdPathParams;
}
export declare class GetWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhook?: shared.Webhook;
    getWebhooksId401ApplicationJSONObject?: GetWebhooksId401ApplicationJson;
    getWebhooksId403ApplicationJSONObject?: GetWebhooksId403ApplicationJson;
}
