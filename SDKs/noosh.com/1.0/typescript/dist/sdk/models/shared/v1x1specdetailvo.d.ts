import { SpeakeasyBase } from "../../../internal/utils";
import { PersonVO } from "./personvo";
import { ProductTypeVO } from "./producttypevo";
import { SpecSimplestVO } from "./specsimplestvo";
import { SpecSimpleVO } from "./specsimplevo";
import { SpecTypeVO } from "./spectypevo";
import { UofmSimpleVO } from "./uofmsimplevo";
import { V1x1ProperyVO } from "./v1x1properyvo";
/**
 * Java type: com.noosh.nooshapi.vo.v1x1.V1x1SpecDetailVO
 */
export declare class V1x1SpecDetailVO extends SpeakeasyBase {
    clientStatus?: string;
    createDate?: Date;
    /**
     * Java type: com.noosh.nooshapi.vo.PersonVO
     */
    createdBy?: PersonVO;
    /**
     * Java type: com.noosh.nooshapi.vo.v1x1.V1x1ProperyVO
     */
    firstLevelCustomFields?: V1x1ProperyVO;
    /**
     * Java type: com.noosh.nooshapi.vo.v1x1.V1x1ProperyVO
     */
    headerCustomFields?: V1x1ProperyVO;
    jobId?: number;
    lastUpdated?: Date;
    productType?: string;
    /**
     * Java type: com.noosh.nooshapi.vo.ProductTypeVO
     */
    productTypeInfo?: ProductTypeVO;
    quantity1?: number;
    quantity2?: number;
    quantity3?: number;
    quantity4?: number;
    quantity5?: number;
    referenceNumber?: string;
    secondLevelCustomFields?: V1x1ProperyVO[];
    sku?: string;
    specId?: number;
    specName?: string;
    specOptions?: SpecSimplestVO[];
    specOptionsComplete?: SpecSimpleVO[];
    /**
     * Java type: com.noosh.nooshapi.vo.SpecSimplestVO
     */
    specOriginal?: SpecSimplestVO;
    /**
     * Java type: com.noosh.nooshapi.vo.SpecTypeVO
     */
    specType?: SpecTypeVO;
    supplierStatus?: string;
    uofms?: UofmSimpleVO[];
    userState?: string;
}
