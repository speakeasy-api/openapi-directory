import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity extends SpeakeasyBase {
    developerHapikey?: string;
    hapikey?: string;
}
export declare class PostMarketingV3MarketingEventsAppIdSettingsCreateRequest extends SpeakeasyBase {
    eventDetailSettingsUrl: shared.EventDetailSettingsUrl;
    appId: number;
}
export declare class PostMarketingV3MarketingEventsAppIdSettingsCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    eventDetailSettings?: shared.EventDetailSettings;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
