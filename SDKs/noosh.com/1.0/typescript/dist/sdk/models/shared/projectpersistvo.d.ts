import { SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldPersistVO } from "./customfieldpersistvo";
/**
 * Java type: com.noosh.domain.nooshapi.persist.vo.ProjectPersistVO
 */
export declare class ProjectPersistVO extends SpeakeasyBase {
    clientAccount?: string;
    clientUserId?: number;
    clientWorkgroupId?: number;
    comments?: string;
    completionDate?: Date;
    customFields?: CustomFieldPersistVO[];
    deactivationReasonId?: number;
    isActive?: boolean;
    isHot?: boolean;
    isPaperDirect?: boolean;
    projectCategoryId?: number;
    projectDescription?: string;
    projectName?: string;
    projectNumber?: string;
    projectOwnerUserId?: number;
    projectStatusId: number;
}
