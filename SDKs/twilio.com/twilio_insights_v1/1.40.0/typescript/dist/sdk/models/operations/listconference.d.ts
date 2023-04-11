import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListConferenceServerList: readonly ["https://insights.twilio.com"];
export declare class ListConferenceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListConferenceRequest extends SpeakeasyBase {
    /**
     * The SID of the conference.
     */
    conferenceSid?: string;
    /**
     * Conferences created after the provided timestamp specified in ISO 8601 format
     */
    createdAfter?: string;
    /**
     * Conferences created before the provided timestamp specified in ISO 8601 format.
     */
    createdBefore?: string;
    /**
     * Potential configuration, behavior, or performance issues detected during the conference.
     */
    detectedIssues?: string;
    /**
     * Conference end reason; e.g. last participant left, modified by API, etc.
     */
    endReason?: string;
    /**
     * Custom label for the conference resource, up to 64 characters.
     */
    friendlyName?: string;
    /**
     * Twilio region where the conference media was mixed.
     */
    mixerRegion?: string;
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
     * Conference status.
     */
    status?: string;
    /**
     * Account SID for the subaccount whose resources you wish to retrieve.
     */
    subaccount?: string;
    /**
     * Tags applied by Twilio for common potential configuration, quality, or performance issues.
     */
    tags?: string;
}
export declare class ListConferenceListConferenceResponseMeta extends SpeakeasyBase {
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
export declare class ListConferenceListConferenceResponse extends SpeakeasyBase {
    conferences?: shared.InsightsV1Conference[];
    meta?: ListConferenceListConferenceResponseMeta;
}
export declare class ListConferenceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listConferenceResponse?: ListConferenceListConferenceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
