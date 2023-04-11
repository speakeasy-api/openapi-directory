import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectParentVO } from "./projectparentvo";
import { PropertyPaAndAttVO } from "./propertypaandattvo";
/**
 * Java type: com.noosh.nooshapi.vo.ProjectDetailVO
 */
export declare class ProjectDetailVO extends SpeakeasyBase {
    category?: string;
    clientAccount?: string;
    clientUser?: string;
    clientUserId?: number;
    clientWorkgroupId?: number;
    comments?: string;
    completionDate?: Date;
    customFields?: PropertyPaAndAttVO[];
    deactivationReason?: string;
    isActive?: boolean;
    isHot?: boolean;
    lastSpecUpdate?: Date;
    modDate?: Date;
    ownerWorkgroup?: string;
    /**
     * Java type: com.noosh.nooshapi.vo.ProjectParentVO
     */
    parentProject?: ProjectParentVO;
    projectCreateDate?: Date;
    projectDescription?: string;
    projectId?: number;
    projectName?: string;
    projectNumber?: string;
    projectStatus?: string;
    teamOwners?: string;
}
