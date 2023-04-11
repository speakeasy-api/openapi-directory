import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1FavouritesSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1FavouritesRequest extends SpeakeasyBase {
    limit?: string;
    maxId?: string;
    minId?: string;
}
export declare class GetApiV1FavouritesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    statuses?: shared.Status[];
}
