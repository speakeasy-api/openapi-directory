import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity extends SpeakeasyBase {
    oauth2Legacy?: string;
    privateAppsLegacy?: string;
}
export declare class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest extends SpeakeasyBase {
    externalAccountId: string;
    externalEventId: string;
}
export declare class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    marketingEventPublicReadResponse?: shared.MarketingEventPublicReadResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
