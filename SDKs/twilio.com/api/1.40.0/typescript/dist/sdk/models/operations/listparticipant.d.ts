import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListParticipantServerList: readonly ["https://api.twilio.com"];
export declare class ListParticipantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListParticipantRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Participant resources to read.
     */
    accountSid: string;
    /**
     * Whether to return only participants who are coaching another call. Can be: `true` or `false`.
     */
    coaching?: boolean;
    /**
     * The SID of the conference with the participants to read.
     */
    conferenceSid: string;
    /**
     * Whether to return only participants that are on hold. Can be: `true` or `false`.
     */
    hold?: boolean;
    /**
     * Whether to return only participants that are muted. Can be: `true` or `false`.
     */
    muted?: boolean;
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
}
/**
 * OK
 */
export declare class ListParticipantListParticipantResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    participants?: shared.ApiV2010AccountConferenceParticipant[];
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListParticipantResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listParticipantResponse?: ListParticipantListParticipantResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
