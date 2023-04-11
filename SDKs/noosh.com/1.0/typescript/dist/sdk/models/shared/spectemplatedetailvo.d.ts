import { SpeakeasyBase } from "../../../internal/utils";
import { PersonVO } from "./personvo";
import { ProductTypeVO } from "./producttypevo";
import { SpecTypeVO } from "./spectypevo";
/**
 * Java type: com.noosh.nooshapi.vo.SpecTemplateDetailVO
 */
export declare class SpecTemplateDetailVO extends SpeakeasyBase {
    /**
     * Java type: com.noosh.nooshapi.vo.PersonVO
     */
    createdBy?: PersonVO;
    createdDate?: Date;
    isActive?: boolean;
    isExternallyPublished?: boolean;
    isLocked?: boolean;
    lastUpdatedDate?: Date;
    productType?: string;
    /**
     * Java type: com.noosh.nooshapi.vo.ProductTypeVO
     */
    productTypeInfo?: ProductTypeVO;
    specTemplateId?: number;
    specTemplateName?: string;
    /**
     * Java type: com.noosh.nooshapi.vo.SpecTypeVO
     */
    specType?: SpecTypeVO;
}
