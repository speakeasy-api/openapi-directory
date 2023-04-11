import { SpeakeasyBase } from "../../../internal/utils";
import { PersonVO } from "./personvo";
/**
 * Java type: com.noosh.nooshapi.vo.SpecTemplateSimpleVO
 */
export declare class SpecTemplateSimpleVO extends SpeakeasyBase {
    /**
     * Java type: com.noosh.nooshapi.vo.PersonVO
     */
    createdBy?: PersonVO;
    createdDate?: Date;
    isActive?: boolean;
    isExternallyPublished?: boolean;
    isLocked?: boolean;
    lastUpdatedDate?: Date;
    specTemplateId?: number;
    specTemplateName?: string;
}
