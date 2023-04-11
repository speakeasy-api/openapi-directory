import { SpeakeasyBase } from "../../../internal/utils";
import { QueryRequestRerankingConfig } from "./queryrequestrerankingconfig";
import { ServingCorpusKey } from "./servingcorpuskey";
export declare class ServingQueryRequest extends SpeakeasyBase {
    corpusKey?: ServingCorpusKey[];
    /**
     * The number of results to return.
     */
    numResults?: number;
    /**
     * The query text to use from the end user.
     */
    query?: string;
    /**
     * Configuration options to apply to the reranking.
     */
    rerankingConfig?: QueryRequestRerankingConfig;
    start?: number;
}
