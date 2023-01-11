import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectSettings } from "./projectsettings";
import { ProjectSettingsInput } from "./projectsettings";
export declare enum ProjectStatusEnum {
    Succeeded = "Succeeded",
    Importing = "Importing",
    Failed = "Failed"
}
/**
 * Represents a project.
**/
export declare class Project extends SpeakeasyBase {
    created?: Date;
    description: string;
    drModeEnabled?: boolean;
    id?: string;
    lastModified?: Date;
    name: string;
    settings: ProjectSettings;
    status?: ProjectStatusEnum;
    thumbnailUri?: string;
}
/**
 * Represents a project.
**/
export declare class ProjectInput extends SpeakeasyBase {
    description: string;
    name: string;
    settings: ProjectSettingsInput;
    status?: ProjectStatusEnum;
}
