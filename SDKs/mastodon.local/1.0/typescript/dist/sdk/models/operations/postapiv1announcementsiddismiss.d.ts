import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostApiV1AnnouncementsIdDismissSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1AnnouncementsIdDismissRequest extends SpeakeasyBase {
    /**
     * Local ID of an announcement in the database.
     */
    id: string;
}
export declare class PostApiV1AnnouncementsIdDismissResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    postApiV1AnnouncementsIdDismiss200ApplicationJSONObject?: Record<string, any>;
}
