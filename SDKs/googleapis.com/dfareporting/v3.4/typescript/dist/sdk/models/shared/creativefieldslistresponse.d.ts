import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeField } from "./creativefield";
/**
 * Creative Field List Response
 */
export declare class CreativeFieldsListResponse extends SpeakeasyBase {
    /**
     * Creative field collection.
     */
    creativeFields?: CreativeField[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldsListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
