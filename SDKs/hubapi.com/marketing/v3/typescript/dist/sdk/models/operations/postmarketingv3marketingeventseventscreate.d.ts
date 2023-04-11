import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMarketingV3MarketingEventsEventsCreateSecurity extends SpeakeasyBase {
    oauth2Legacy?: string;
    privateAppsLegacy?: string;
}
export declare class PostMarketingV3MarketingEventsEventsCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    marketingEventDefaultResponse?: shared.MarketingEventDefaultResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
