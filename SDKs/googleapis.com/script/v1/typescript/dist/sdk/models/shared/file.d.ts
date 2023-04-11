import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsScriptTypeFunctionSet } from "./googleappsscripttypefunctionset";
import { GoogleAppsScriptTypeUser } from "./googleappsscripttypeuser";
/**
 * The type of the file.
 */
export declare enum FileTypeEnum {
    EnumTypeUnspecified = "ENUM_TYPE_UNSPECIFIED",
    ServerJs = "SERVER_JS",
    Html = "HTML",
    Json = "JSON"
}
/**
 * An individual file within a script project. A file is a third-party source code created by one or more developers. It can be a server-side JS code, HTML, or a configuration file. Each script project can contain multiple files.
 */
export declare class File extends SpeakeasyBase {
    /**
     * Creation date timestamp. This read-only field is only visible to users who have WRITER permission for the script project.
     */
    createTime?: string;
    /**
     * A set of functions. No duplicates are permitted.
     */
    functionSet?: GoogleAppsScriptTypeFunctionSet;
    /**
     * A simple user profile resource.
     */
    lastModifyUser?: GoogleAppsScriptTypeUser;
    /**
     * The name of the file. The file extension is not part of the file name, which can be identified from the type field.
     */
    name?: string;
    /**
     * The file content.
     */
    source?: string;
    /**
     * The type of the file.
     */
    type?: FileTypeEnum;
    /**
     * Last modified date timestamp. This read-only field is only visible to users who have WRITER permission for the script project.
     */
    updateTime?: string;
}
