import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteWebhooksIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteWebhooksId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteWebhooksId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteWebhooksId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteWebhooksIdRequest extends SpeakeasyBase {
    pathParams: DeleteWebhooksIdPathParams;
}
export declare class DeleteWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteWebhooksId401ApplicationJSONObject?: DeleteWebhooksId401ApplicationJson;
    deleteWebhooksId403ApplicationJSONObject?: DeleteWebhooksId403ApplicationJson;
    deleteWebhooksId404ApplicationJSONObject?: DeleteWebhooksId404ApplicationJson;
}
