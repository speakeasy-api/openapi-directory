import { SpeakeasyBase } from "../../../internal/utils";
import { Workspace } from "./workspace";
/**
 * Response message for TablesService.ListWorkspaces.
 */
export declare class ListWorkspacesResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The list of workspaces.
     */
    workspaces?: Workspace[];
}
