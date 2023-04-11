import { SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";
/**
 * A single workspace.
 */
export declare class Workspace extends SpeakeasyBase {
    /**
     * Time when the workspace was created.
     */
    createTime?: string;
    /**
     * The human readable title of the workspace.
     */
    displayName?: string;
    /**
     * The resource name of the workspace. Workspace names have the form `workspaces/{workspace}`.
     */
    name?: string;
    /**
     * The list of tables in the workspace.
     */
    tables?: Table[];
    /**
     * Time when the workspace was last updated.
     */
    updateTime?: string;
}
