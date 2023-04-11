import { SpeakeasyBase } from "../../../internal/utils";
import { ServingAttribute } from "./servingattribute";
import { ServingCorpusKey } from "./servingcorpuskey";
export declare class ServingResponse extends SpeakeasyBase {
    corpusKey?: ServingCorpusKey;
    /**
     * Use this ID to find the document in the ResponseSet.
     */
    documentIndex?: number;
    metadata?: ServingAttribute[];
    /**
     * The score used for ranking results.  The higher the score, the better the match.
     */
    score?: number;
    text?: string;
}
