import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsScriptTypeUser } from "./googleappsscripttypeuser";
/**
 * The script project resource.
 */
export declare class Project extends SpeakeasyBase {
    /**
     * When the script was created.
     */
    createTime?: string;
    /**
     * A simple user profile resource.
     */
    creator?: GoogleAppsScriptTypeUser;
    /**
     * A simple user profile resource.
     */
    lastModifyUser?: GoogleAppsScriptTypeUser;
    /**
     * The parent's Drive ID that the script will be attached to. This is usually the ID of a Google Document or Google Sheet. This filed is optional, and if not set, a stand-alone script will be created.
     */
    parentId?: string;
    /**
     * The script project's Drive ID.
     */
    scriptId?: string;
    /**
     * The title for the project.
     */
    title?: string;
    /**
     * When the script was last updated.
     */
    updateTime?: string;
}
