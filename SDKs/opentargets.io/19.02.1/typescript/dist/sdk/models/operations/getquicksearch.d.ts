import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQuickSearchRequest extends SpeakeasyBase {
    /**
     * A full text query.
     */
    q: string;
    /**
     * Maximum amount of results to return. Defaults to 5.
     */
    size?: string;
}
export declare class GetQuickSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
