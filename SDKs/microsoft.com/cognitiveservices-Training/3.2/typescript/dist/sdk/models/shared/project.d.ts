import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectSettings, ProjectSettingsInput } from "./projectsettings";
/**
 * Gets the status of the project.
 */
export declare enum ProjectStatusEnum {
    Succeeded = "Succeeded",
    Importing = "Importing",
    Failed = "Failed"
}
/**
 * Represents a project.
 */
export declare class ProjectInput extends SpeakeasyBase {
    /**
     * Gets or sets the description of the project.
     */
    description: string;
    /**
     * Gets or sets the name of the project.
     */
    name: string;
    /**
     * Represents settings associated with a project.
     */
    settings: ProjectSettingsInput;
    /**
     * Gets the status of the project.
     */
    status?: ProjectStatusEnum;
}
/**
 * Represents a project.
 */
export declare class Project extends SpeakeasyBase {
    /**
     * Gets the date this project was created.
     */
    created?: Date;
    /**
     * Gets or sets the description of the project.
     */
    description: string;
    /**
     * Gets if the Disaster Recovery (DR) mode is on, indicating the project is temporarily read-only.
     */
    drModeEnabled?: boolean;
    /**
     * Gets the project id.
     */
    id?: string;
    /**
     * Gets the date this project was last modified.
     */
    lastModified?: Date;
    /**
     * Gets or sets the name of the project.
     */
    name: string;
    /**
     * Represents settings associated with a project.
     */
    settings: ProjectSettings;
    /**
     * Gets the status of the project.
     */
    status?: ProjectStatusEnum;
    /**
     * Gets the thumbnail url representing the image.
     */
    thumbnailUri?: string;
}
