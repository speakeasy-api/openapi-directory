import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations.
 */
export declare class GoogleCloudDocumentaiV1beta3DocumentProvenanceParent extends SpeakeasyBase {
    /**
     * The id of the parent provenance.
     */
    id?: number;
    /**
     * The index of the parent item in the corresponding item list (eg. list of entities, properties within entities, etc.) in the parent revision.
     */
    index?: number;
    /**
     * The index of the index into current revision's parent_ids list.
     */
    revision?: number;
}
