import { SpeakeasyBase } from "../../../internal/utils";
import { TargetingTemplate } from "./targetingtemplate";
/**
 * Targeting Template List Response
 */
export declare class TargetingTemplatesListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplatesListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Targeting template collection.
     */
    targetingTemplates?: TargetingTemplate[];
}
