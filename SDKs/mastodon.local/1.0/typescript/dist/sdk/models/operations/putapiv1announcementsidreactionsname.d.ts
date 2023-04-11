import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutApiV1AnnouncementsIdReactionsNameSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PutApiV1AnnouncementsIdReactionsNameRequest extends SpeakeasyBase {
    /**
     * Local ID of an announcement in the database.
     */
    id: string;
    /**
     * Unicode emoji, or shortcode of custom emoji
     */
    name: string;
}
export declare class PutApiV1AnnouncementsIdReactionsNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unprocessable Entity
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    putApiV1AnnouncementsIdReactionsName200ApplicationJSONObject?: Record<string, any>;
}
