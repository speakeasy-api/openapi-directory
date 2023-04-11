import { SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldPersistVO } from "./customfieldpersistvo";
/**
 * Java type: com.noosh.domain.nooshapi.persist.po.ProjectPatchPO
 */
export declare class ProjectPatchPO extends SpeakeasyBase {
    clientUserId?: number;
    clientWorkgroupId?: number;
    comments?: string;
    completionDate?: Date;
    customFields?: CustomFieldPersistVO[];
    deactivationReasonId?: number;
    isActive?: boolean;
    isHot?: boolean;
    projectCategoryId?: number;
    projectDescription?: string;
    projectName?: string;
    projectNumber?: string;
    projectStatusId?: number;
}
