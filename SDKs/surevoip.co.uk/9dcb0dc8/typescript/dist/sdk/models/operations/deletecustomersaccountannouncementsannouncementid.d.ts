import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCustomersAccountAnnouncementsAnnouncementIdRequest extends SpeakeasyBase {
    /**
     * Account ID of customer
     */
    account: number;
    /**
     * Announcement ID of audio file
     */
    announcementId: string;
}
export declare class DeleteCustomersAccountAnnouncementsAnnouncementIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Not found
     */
    oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
