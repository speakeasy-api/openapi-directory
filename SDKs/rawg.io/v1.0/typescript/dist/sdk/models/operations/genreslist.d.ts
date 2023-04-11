import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenresListRequest extends SpeakeasyBase {
    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    /**
     * A page number within the paginated result set.
     */
    page?: number;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
}
export declare class GenresList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Genre[];
}
export declare class GenresListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    genresList200ApplicationJSONObject?: GenresList200ApplicationJSON;
}
