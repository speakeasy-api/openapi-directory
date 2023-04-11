import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchVideoParticipantSummaryServerList: readonly ["https://insights.twilio.com"];
export declare class FetchVideoParticipantSummarySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchVideoParticipantSummaryRequest extends SpeakeasyBase {
    /**
     * The SID of the Participant resource.
     */
    participantSid: string;
    /**
     * The SID of the Room resource.
     */
    roomSid: string;
}
export declare class FetchVideoParticipantSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    insightsV1VideoRoomSummaryVideoParticipantSummary?: shared.InsightsV1VideoRoomSummaryVideoParticipantSummary;
}
