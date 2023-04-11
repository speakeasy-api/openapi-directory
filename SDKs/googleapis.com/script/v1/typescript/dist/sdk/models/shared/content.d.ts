import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
/**
 * The Content resource.
 */
export declare class Content extends SpeakeasyBase {
    /**
     * The list of script project files. One of the files is a script manifest; it must be named "appsscript", must have type of JSON, and include the manifest configurations for the project.
     */
    files?: File[];
    /**
     * The script project's Drive ID.
     */
    scriptId?: string;
}
