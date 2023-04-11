import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity extends SpeakeasyBase {
    oauth2Legacy?: string;
    privateAppsLegacy?: string;
}
export declare class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest extends SpeakeasyBase {
    externalAccountId: string;
    externalEventId: string;
}
export declare class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
