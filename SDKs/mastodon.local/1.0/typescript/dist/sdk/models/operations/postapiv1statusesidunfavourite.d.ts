import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1StatusesIdUnfavouriteSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1StatusesIdUnfavouriteRequest extends SpeakeasyBase {
    /**
     * Local ID of a status in the database.
     */
    id: string;
}
export declare class PostApiV1StatusesIdUnfavouriteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Success
     */
    status?: shared.Status;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
