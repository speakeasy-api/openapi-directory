import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyPaAndAttVO } from "./propertypaandattvo";
/**
 * Java type: com.noosh.nooshapi.vo.WorkgroupDetailVO
 */
export declare class WorkgroupDetailVO extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
    city?: string;
    country?: string;
    countryCode?: string;
    customFields?: PropertyPaAndAttVO[];
    defaultCurrency?: string;
    portal?: string;
    postal?: string;
    state?: string;
    workgroupId?: number;
    workgroupName?: string;
}
