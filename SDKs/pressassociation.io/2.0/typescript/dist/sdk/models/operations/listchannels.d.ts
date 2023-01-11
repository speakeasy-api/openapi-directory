import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListChannelsQueryParams extends SpeakeasyBase {
    aliases?: boolean;
    date?: string;
    platformId?: string;
    regionId?: string;
    scheduleEnd?: string;
    scheduleStart?: string;
    scheduleUpdatedSince?: string;
}
export declare class ListChannelsSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class ListChannelsRequest extends SpeakeasyBase {
    queryParams: ListChannelsQueryParams;
    security: ListChannelsSecurity;
}
export declare class ListChannelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listChannels200ApplicationJSONObject?: Record<string, any>;
}
