import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchResult extends SpeakeasyBase {
    docs?: Record<string, any>[];
    facetCounts?: Record<string, any>;
    highlighting?: Record<string, any>;
    numFound?: number;
}
