import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity extends SpeakeasyBase {
    developerHapikey?: string;
    hapikey?: string;
}
export declare class GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest extends SpeakeasyBase {
    appId: number;
}
export declare class GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    eventDetailSettings?: shared.EventDetailSettings;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
