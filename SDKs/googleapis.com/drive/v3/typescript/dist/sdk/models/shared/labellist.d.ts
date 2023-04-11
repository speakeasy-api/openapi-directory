import { SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
/**
 * A list of labels.
 */
export declare class LabelList extends SpeakeasyBase {
    /**
     * This is always drive#labelList
     */
    kind?: string;
    /**
     * The list of labels.
     */
    labels?: Label[];
    /**
     * The page token for the next page of labels. This field will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;
}
