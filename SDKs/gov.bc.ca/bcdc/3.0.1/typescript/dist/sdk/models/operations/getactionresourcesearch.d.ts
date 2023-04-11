import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionResourceSearchRequest extends SpeakeasyBase {
    /**
     * Depreciated
     */
    fields?: string;
    /**
     * Apply a limit to the query
     */
    limit?: number;
    /**
     * Apply an offset to the query
     */
    offset?: number;
    /**
     * A field on the resource model that orders the results
     */
    orderBy?: string;
    /**
     * The search criteria string or list of strings of the form ``{field}:{term1}``
     */
    query?: string;
}
export declare class GetActionResourceSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
