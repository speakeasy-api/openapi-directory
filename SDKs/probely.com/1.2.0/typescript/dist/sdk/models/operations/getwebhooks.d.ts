import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebhooks200ApplicationJson extends SpeakeasyBase {
    count?: number;
    length?: number;
    page?: number;
    pageTotal?: number;
    results?: shared.Webhook[];
}
export declare class GetWebhooks401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetWebhooks403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getWebhooks200ApplicationJSONObject?: GetWebhooks200ApplicationJson;
    getWebhooks401ApplicationJSONObject?: GetWebhooks401ApplicationJson;
    getWebhooks403ApplicationJSONObject?: GetWebhooks403ApplicationJson;
}
