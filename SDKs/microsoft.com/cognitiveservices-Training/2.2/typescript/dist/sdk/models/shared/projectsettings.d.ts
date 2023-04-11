import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Gets or sets the classification type of the project.
 */
export declare enum ProjectSettingsClassificationTypeEnum {
    Multiclass = "Multiclass",
    Multilabel = "Multilabel"
}
/**
 * Represents settings associated with a project.
 */
export declare class ProjectSettings extends SpeakeasyBase {
    /**
     * Gets or sets the classification type of the project.
     */
    classificationType?: ProjectSettingsClassificationTypeEnum;
    /**
     * Gets or sets the id of the Domain to use with this project.
     */
    domainId?: string;
}
