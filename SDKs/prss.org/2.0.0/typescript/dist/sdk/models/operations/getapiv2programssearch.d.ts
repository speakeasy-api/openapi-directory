import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2ProgramsSearchSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class GetApiV2ProgramsSearchRequest extends SpeakeasyBase {
    /**
     * Free text search that matches against the program title or description.
     */
    keywords?: string;
    /**
     * The number of items to return. Must be between 0 and 500, inclusive.
     */
    pageSize?: number;
    /**
     * The start page of the results to return. The first item is indexed at 0.
     */
    pageStart?: number;
}
export declare class GetApiV2ProgramsSearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Programs matching the search request sorted by relevance.
     */
    programs?: shared.Program[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
