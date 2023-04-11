import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSearchRequest extends SpeakeasyBase {
    /**
     * Restrict the search to the type requested. Eg. `target` or `disease`.
     */
    filter?: string;
    /**
     * How many initial results should be skipped. Defaults to 0.
     */
    from?: string;
    /**
     * A full text query.
     */
    q: string;
    /**
     * Maximum amount of results to return. Defaults to 10, max is 10000.
     */
    size?: string;
}
export declare class GetSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
