import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeFieldValue } from "./creativefieldvalue";
/**
 * Creative Field Value List Response
 */
export declare class CreativeFieldValuesListResponse extends SpeakeasyBase {
    /**
     * Creative field value collection.
     */
    creativeFieldValues?: CreativeFieldValue[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValuesListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
