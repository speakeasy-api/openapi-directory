import { SpeakeasyBase } from "../../../internal/utils";
import { SpecVersionPersistVO } from "./specversionpersistvo";
import { V1x1ProperyPO } from "./v1x1properypo";
/**
 * Java type: com.noosh.domain.nooshapi.persist.po.v1x1.V1X1SpecUpdatingPO
 */
export declare class V1X1SpecUpdatingPO extends SpeakeasyBase {
    /**
     * Java type: com.noosh.domain.nooshapi.persist.po.v1x1.V1x1ProperyPO
     */
    firstLevelCustomFields?: V1x1ProperyPO;
    /**
     * Java type: com.noosh.domain.nooshapi.persist.po.v1x1.V1x1ProperyPO
     */
    headerCustomFields?: V1x1ProperyPO;
    productTypeId?: number;
    quantity1?: number;
    quantity2?: number;
    quantity3?: number;
    quantity4?: number;
    quantity5?: number;
    secondLevelCustomFields?: V1x1ProperyPO[];
    sku?: string;
    specName?: string;
    specTypeId?: number;
    versions?: SpecVersionPersistVO[];
}
