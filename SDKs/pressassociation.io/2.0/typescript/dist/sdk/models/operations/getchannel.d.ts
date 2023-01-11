import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelPathParams extends SpeakeasyBase {
    channelId: string;
}
export declare class GetChannelQueryParams extends SpeakeasyBase {
    aliases?: boolean;
}
export declare class GetChannelSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class GetChannelRequest extends SpeakeasyBase {
    pathParams: GetChannelPathParams;
    queryParams: GetChannelQueryParams;
    security: GetChannelSecurity;
}
export declare class GetChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getChannel200ApplicationJSONObject?: Record<string, any>;
}
