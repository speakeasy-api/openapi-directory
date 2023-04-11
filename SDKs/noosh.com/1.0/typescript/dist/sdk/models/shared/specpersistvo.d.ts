import { SpeakeasyBase } from "../../../internal/utils";
import { SpecVersionPersistVO } from "./specversionpersistvo";
/**
 * Java type: com.noosh.domain.nooshapi.persist.vo.SpecPersistVO
 */
export declare class SpecPersistVO extends SpeakeasyBase {
    jsonBody?: boolean;
    productTypeId?: number;
    quantity1?: number;
    quantity2?: number;
    quantity3?: number;
    quantity4?: number;
    quantity5?: number;
    sku?: string;
    specName?: string;
    specTemplateId?: number;
    specTypeId?: number;
    versions?: SpecVersionPersistVO[];
}
