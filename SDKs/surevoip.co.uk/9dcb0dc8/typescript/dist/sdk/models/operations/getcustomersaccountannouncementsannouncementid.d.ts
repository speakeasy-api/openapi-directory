import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomersAccountAnnouncementsAnnouncementIdRequest extends SpeakeasyBase {
    /**
     * Account ID of customer
     */
    account: number;
    /**
     * Announcement ID of audio file
     */
    announcementId: string;
}
/**
 * Not found
 */
export declare class GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJSON extends SpeakeasyBase {
    error?: string;
}
export declare class GetCustomersAccountAnnouncementsAnnouncementIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Not found
     */
    getCustomersAccountAnnouncementsAnnouncementId404ApplicationJSONObject?: GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJSON;
    /**
     * OK
     */
    oneannouncementsPostResponses201ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses201ContentApplication1jsonSchema;
}
