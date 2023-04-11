import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectSettings } from "./projectsettings";
/**
 * Represents a project
 */
export declare class ProjectInput extends SpeakeasyBase {
    /**
     * Gets or sets the description of the project
     */
    description?: string;
    /**
     * Gets or sets the name of the project
     */
    name?: string;
    /**
     * Represents settings associated with a project
     */
    settings?: ProjectSettings;
}
/**
 * Represents a project
 */
export declare class Project extends SpeakeasyBase {
    /**
     * Gets the date this project was created
     */
    created?: Date;
    /**
     * Gets or sets the description of the project
     */
    description?: string;
    /**
     * Gets the project id
     */
    id?: string;
    /**
     * Gets the date this project was last modified
     */
    lastModified?: Date;
    /**
     * Gets or sets the name of the project
     */
    name?: string;
    /**
     * Represents settings associated with a project
     */
    settings?: ProjectSettings;
    /**
     * Gets the thumbnail url representing the project
     */
    thumbnailUri?: string;
}
