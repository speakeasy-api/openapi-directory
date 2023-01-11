import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEvents200ApplicationJson extends SpeakeasyBase {
    count?: number;
    length?: number;
    page?: number;
    pageTotal?: number;
    results?: shared.Event[];
}
export declare class GetEvents401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetEvents403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getEvents200ApplicationJSONObject?: GetEvents200ApplicationJson;
    getEvents401ApplicationJSONObject?: GetEvents401ApplicationJson;
    getEvents403ApplicationJSONObject?: GetEvents403ApplicationJson;
}
