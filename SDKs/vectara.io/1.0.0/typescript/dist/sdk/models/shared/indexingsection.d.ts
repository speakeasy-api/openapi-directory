import { SpeakeasyBase } from "../../../internal/utils";
import { VectaraindexingCustomDimension } from "./vectaraindexingcustomdimension";
/**
 * A section within a structured document.
 */
export declare class IndexingSection extends SpeakeasyBase {
    /**
     * A list of custom dimension values that are included in the generated
     *
     * @remarks
     * representation of all subsections (i.e. sections contains by this section).
     */
    customDims?: VectaraindexingCustomDimension[];
    /**
     * Optionally, the unique ID of this section. If set, it will be returned as
     *
     * @remarks
     * metadata in query results.
     */
    id?: number;
    /**
     * Metadata about this section. This should be a json string. It is passed
     *
     * @remarks
     * through the system, without being used at indexing time. It can be
     * retrieved at query time.
     */
    metadataJson?: string;
    /**
     * A list of subsections.
     */
    section?: IndexingSection[];
    /**
     * The text of the section. This should never be empty.
     */
    text?: string;
    /**
     * Optionally, the title of the section. This may be empty.
     */
    title?: string;
}
