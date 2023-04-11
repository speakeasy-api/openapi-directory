import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DrillersListRequest extends SpeakeasyBase {
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    /**
     * A search term.
     */
    search?: string;
}
export declare class DrillersListResponse extends SpeakeasyBase {
    contentType: string;
    personLists?: shared.PersonList[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
