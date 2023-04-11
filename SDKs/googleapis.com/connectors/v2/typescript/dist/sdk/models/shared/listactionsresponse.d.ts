import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
/**
 * Response message for ActionService.ListActions
 */
export declare class ListActionsResponse extends SpeakeasyBase {
    /**
     * List of action metadata.
     */
    actions?: Action[];
    /**
     * Next page token if more actions available.
     */
    nextPageToken?: string;
    /**
     * List of actions which contain unsupported Datatypes. Check datatype.proto for more information.
     */
    unsupportedActionNames?: string[];
}
