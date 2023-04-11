import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity extends SpeakeasyBase {
    oauth2Legacy?: string;
    privateAppsLegacy?: string;
}
export declare class GetMarketingV3MarketingEventsEventsSearchDoSearchRequest extends SpeakeasyBase {
    /**
     * The id of the marketing event in the external event application
     */
    q: string;
}
export declare class GetMarketingV3MarketingEventsEventsSearchDoSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * successful operation
     */
    collectionResponseMarketingEventExternalUniqueIdentifierNoPaging?: shared.CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
