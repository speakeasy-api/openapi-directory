import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity extends SpeakeasyBase {
    oauth2Legacy?: string;
    privateAppsLegacy?: string;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest extends SpeakeasyBase {
    marketingEventCompleteRequestParams: shared.MarketingEventCompleteRequestParams;
    externalAccountId: string;
    externalEventId: string;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    marketingEventDefaultResponse?: shared.MarketingEventDefaultResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
