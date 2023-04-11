import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListVideoParticipantSummaryServerList: readonly ["https://insights.twilio.com"];
export declare class ListVideoParticipantSummarySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListVideoParticipantSummaryRequest extends SpeakeasyBase {
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * The SID of the Room resource.
     */
    roomSid: string;
}
export declare class ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListVideoParticipantSummaryListVideoParticipantSummaryResponse extends SpeakeasyBase {
    meta?: ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta;
    participants?: shared.InsightsV1VideoRoomSummaryVideoParticipantSummary[];
}
export declare class ListVideoParticipantSummaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listVideoParticipantSummaryResponse?: ListVideoParticipantSummaryListVideoParticipantSummaryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
