import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WellsTagsListRequest extends SpeakeasyBase {
    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    /**
     * A search term.
     */
    search?: string;
}
export declare class WellsTagsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    wellTagSearches?: shared.WellTagSearch[];
}
