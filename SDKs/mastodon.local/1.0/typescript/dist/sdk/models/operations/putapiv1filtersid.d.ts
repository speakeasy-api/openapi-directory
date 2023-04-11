import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutApiV1FiltersIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare enum PutApiV1FiltersIdRequestBodyContextEnum {
    Home = "home",
    Notifications = "notifications",
    Public = "public",
    Thread = "thread"
}
export declare class PutApiV1FiltersIdRequestBody extends SpeakeasyBase {
    /**
     * Array of enumerable strings `home`, `notifications`, `public`, `thread`. At least one context must be specified.
     */
    context: PutApiV1FiltersIdRequestBodyContextEnum[];
    /**
     * Number of seconds from now the filter should expire. Otherwise, null for a filter that doesn't expire.
     */
    expiresIn?: number;
    /**
     * Should the server irreversibly drop matching entities from home and notifications?
     */
    irreversible?: boolean;
    /**
     * Text to be filtered.
     */
    phrase: string;
    /**
     * Consider word boundaries?
     */
    wholeWord?: boolean;
}
export declare class PutApiV1FiltersIdRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    /**
     * The id of the account in the database
     */
    id: string;
}
export declare class PutApiV1FiltersIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Filter updated successfully.
     */
    filter?: shared.Filter;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
