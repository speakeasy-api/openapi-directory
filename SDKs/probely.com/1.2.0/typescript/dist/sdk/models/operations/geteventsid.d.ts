import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEventsId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetEventsId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetEventsId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetEventsIdRequest extends SpeakeasyBase {
    pathParams: GetEventsIdPathParams;
}
export declare class GetEventsIdResponse extends SpeakeasyBase {
    contentType: string;
    event?: shared.Event;
    statusCode: number;
    getEventsId401ApplicationJSONObject?: GetEventsId401ApplicationJson;
    getEventsId403ApplicationJSONObject?: GetEventsId403ApplicationJson;
    getEventsId404ApplicationJSONObject?: GetEventsId404ApplicationJson;
}
