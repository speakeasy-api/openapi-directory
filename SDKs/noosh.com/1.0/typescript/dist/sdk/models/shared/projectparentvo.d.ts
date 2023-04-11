import { SpeakeasyBase } from "../../../internal/utils";
import { PersonVO } from "./personvo";
/**
 * Java type: com.noosh.nooshapi.vo.ProjectParentVO
 */
export declare class ProjectParentVO extends SpeakeasyBase {
    clientAccount?: string;
    clientUser?: string;
    clientUserId?: number;
    clientWorkgroupId?: number;
    comments?: string;
    /**
     * Java type: com.noosh.nooshapi.vo.PersonVO
     */
    createdBy?: PersonVO;
    projectCreateDate?: Date;
    projectDescription?: string;
    projectId?: number;
    projectName?: string;
    projectNumber?: string;
}
