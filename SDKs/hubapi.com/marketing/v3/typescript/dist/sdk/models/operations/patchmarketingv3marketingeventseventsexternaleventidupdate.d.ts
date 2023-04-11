import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity extends SpeakeasyBase {
    oauth2Legacy?: string;
    privateAppsLegacy?: string;
}
export declare class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest extends SpeakeasyBase {
    marketingEventUpdateRequestParams: shared.MarketingEventUpdateRequestParams;
    externalAccountId: string;
    externalEventId: string;
}
export declare class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    marketingEventPublicDefaultResponse?: shared.MarketingEventPublicDefaultResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
