import { SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldPersistVO } from "./customfieldpersistvo";
/**
 * Java type: com.noosh.nooshapi.vo.WorkgroupUpdPersistVO
 */
export declare class WorkgroupUpdPersistVO extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
    city?: string;
    country?: string;
    customFields?: CustomFieldPersistVO[];
    decimalPlaces?: number;
    postal?: string;
    state?: string;
    workgroupName?: string;
}
