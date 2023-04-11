import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListChannelsSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class ListChannelsRequest extends SpeakeasyBase {
    /**
     * Flag to display Legacy and Provider Ids.
     */
    aliases?: boolean;
    /**
     * Date of the Channel State to select, this will display channel names and attributes in the future or past.
     */
    date?: string;
    /**
     * The identifier for the selected platform. Multiple platforms can be passed to the API without a region Id. Passing multiple platforms without a region will not return epg numbers as these are linked to a platform and region.
     */
    platformId?: string;
    /**
     * The platform region ID for the channel selection.
     */
    regionId?: string;
    /**
     * The End Date for the schedule.
     */
    scheduleEnd?: string;
    /**
     * The Start Date for the schedule.
     */
    scheduleStart?: string;
    /**
     * Schedule Updated Since
     */
    scheduleUpdatedSince?: string;
}
export declare class ListChannelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    listChannels200ApplicationJSONObject?: Record<string, any>;
}
