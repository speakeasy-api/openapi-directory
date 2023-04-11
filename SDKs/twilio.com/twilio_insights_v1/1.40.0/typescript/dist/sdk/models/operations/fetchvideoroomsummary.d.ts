import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchVideoRoomSummaryServerList: readonly ["https://insights.twilio.com"];
export declare class FetchVideoRoomSummarySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchVideoRoomSummaryRequest extends SpeakeasyBase {
    /**
     * The SID of the Room resource.
     */
    roomSid: string;
}
export declare class FetchVideoRoomSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    insightsV1VideoRoomSummary?: shared.InsightsV1VideoRoomSummary;
}
