import { SpeakeasyBase } from "../../../internal/utils";
import { ShareSettingsProjectConfig } from "./sharesettingsprojectconfig";
/**
 * Type of sharing for this shared-reservation
 */
export declare enum ShareSettingsShareTypeEnum {
    Local = "LOCAL",
    Organization = "ORGANIZATION",
    ShareTypeUnspecified = "SHARE_TYPE_UNSPECIFIED",
    SpecificProjects = "SPECIFIC_PROJECTS"
}
/**
 * The share setting for reservations and sole tenancy node groups.
 */
export declare class ShareSettings extends SpeakeasyBase {
    /**
     * A map of project id and project config. This is only valid when share_type's value is SPECIFIC_PROJECTS.
     */
    projectMap?: Record<string, ShareSettingsProjectConfig>;
    /**
     * A List of Project names to specify consumer projects for this shared-reservation. This is only valid when share_type's value is SPECIFIC_PROJECTS.
     */
    projects?: string[];
    /**
     * Type of sharing for this shared-reservation
     */
    shareType?: ShareSettingsShareTypeEnum;
}
