import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListScheduleQueryParams extends SpeakeasyBase {
    aliases?: boolean;
    channelId: string;
    end?: string;
    start: string;
}
export declare class ListScheduleSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class ListScheduleRequest extends SpeakeasyBase {
    queryParams: ListScheduleQueryParams;
    security: ListScheduleSecurity;
}
export declare class ListScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listSchedule200ApplicationJSONObject?: Record<string, any>;
}
