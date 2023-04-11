import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity extends SpeakeasyBase {
    oauth2Legacy?: string;
    privateAppsLegacy?: string;
}
export declare class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest extends SpeakeasyBase {
    marketingEventCreateRequestParams: shared.MarketingEventCreateRequestParams;
    externalEventId: string;
}
export declare class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    marketingEventPublicDefaultResponse?: shared.MarketingEventPublicDefaultResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
