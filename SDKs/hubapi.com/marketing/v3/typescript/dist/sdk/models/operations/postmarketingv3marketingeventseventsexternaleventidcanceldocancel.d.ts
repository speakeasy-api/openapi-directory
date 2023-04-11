import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity extends SpeakeasyBase {
    oauth2Legacy?: string;
    privateAppsLegacy?: string;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest extends SpeakeasyBase {
    externalAccountId: string;
    externalEventId: string;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    marketingEventDefaultResponse?: shared.MarketingEventDefaultResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
