import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1AnnouncementsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1AnnouncementsRequest extends SpeakeasyBase {
    /**
     * If true, response will include announcements dismissed by the user. Defaults to false.
     */
    withDismissed?: boolean;
}
export declare class GetApiV1AnnouncementsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    announcements?: shared.Announcement[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
