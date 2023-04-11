import { SpeakeasyBase } from "../../../internal/utils";
import { ManualTrigger } from "./manualtrigger";
/**
 * Successful response
 */
export declare class ListManualTriggersResponse extends SpeakeasyBase {
    /**
     * The list of manual triggers. This list will be absent if empty.
     */
    manualTriggers?: ManualTrigger[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListManualTriggers` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
