import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListScheduleSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class ListScheduleRequest extends SpeakeasyBase {
    /**
     * Flag to display Legacy and Provider Ids.
     */
    aliases?: boolean;
    /**
     * The identifier for the selected channel.
     */
    channelId: string;
    /**
     * The End Date for the schedule.
     */
    end?: string;
    /**
     * The Start Date for the schedule.
     */
    start: string;
}
export declare class ListScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    listSchedule200ApplicationJSONObject?: Record<string, any>;
}
