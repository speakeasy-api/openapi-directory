import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRelatedSearchesRequest extends SpeakeasyBase {
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
    /**
     * Search term, e.g., person, place, topic...
     *
     * @remarks
     *
     */
    q: string;
}
export declare class GetRelatedSearchesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * OK
     */
    relatedSearchesResponse?: shared.RelatedSearchesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
