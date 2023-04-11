import { SpeakeasyBase } from "../../../internal/utils";
import { ComvectaraStatus } from "./comvectarastatus";
/**
 * A successful response.
 */
export declare class AdminCreateCorpusResponse extends SpeakeasyBase {
    /**
     * The Corpus ID that was created.
     */
    corpusId?: number;
    status?: ComvectaraStatus;
}
