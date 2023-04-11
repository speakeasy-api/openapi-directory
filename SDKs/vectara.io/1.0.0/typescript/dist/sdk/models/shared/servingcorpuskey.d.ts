import { SpeakeasyBase } from "../../../internal/utils";
import { CorpusKeySemanticsEnum } from "./corpuskeysemanticsenum";
import { VectaraservingCustomDimension } from "./vectaraservingcustomdimension";
export declare class ServingCorpusKey extends SpeakeasyBase {
    /**
     * The Corpus ID.
     */
    corpusId?: number;
    /**
     * The Customer ID.
     */
    customerId?: number;
    /**
     * Weights on custom dimensions for the corpus.
     */
    dim?: VectaraservingCustomDimension[];
    metadataFilter?: string;
    /**
     * Semantics controls the interpretation of the query string by the
     *
     * @remarks
     * server, and can be used to override the default semantics assigned
     * in the corpus definition.
     *
     *
     *
     *
     *  - DEFAULT: Use corpus-assigned semantics.  This is the most common setting.
     *  - QUERY: Use query semantics.  This is also common.
     *  - RESPONSE: Use response semantics.  Usage of this is rare.
     */
    semantics?: CorpusKeySemanticsEnum;
}
