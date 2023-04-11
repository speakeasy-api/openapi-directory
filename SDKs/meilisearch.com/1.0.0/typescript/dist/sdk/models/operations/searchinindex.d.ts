import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchInIndexRequest extends SpeakeasyBase {
    attributesToCrop?: string;
    attributesToHighlight?: string;
    attributesToRetrieve?: string;
    cropLength?: string;
    cropMarker?: string;
    facets?: string;
    filter?: string;
    highlightPostTag?: string;
    highlightPreTag?: string;
    hitsPerPage?: string;
    limit?: string;
    matchingStrategy?: string;
    offset?: string;
    page?: string;
    q?: string;
    showMatchesPosition?: string;
    sort?: string;
}
export declare class SearchInIndexResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
