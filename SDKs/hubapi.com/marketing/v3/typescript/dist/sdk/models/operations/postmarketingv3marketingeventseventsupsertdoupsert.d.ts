import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity extends SpeakeasyBase {
    oauth2Legacy?: string;
    privateAppsLegacy?: string;
}
export declare class PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    batchResponseMarketingEventPublicDefaultResponse?: shared.BatchResponseMarketingEventPublicDefaultResponse;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
