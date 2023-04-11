import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A product line is a major category of commercial insurance that exists across institutions.
 */
export declare enum ProductV1ProductLineEnum {
    GeneralLiability = "general_liability",
    WorkersCompensation = "workers_compensation",
    BusinessOwnersPolicy = "business_owners_policy"
}
/**
 * A [product](https://www.heraldapi.com/docs/products) refers to a specific type of insurance policy provided by an institution.
 */
export declare class ProductV1 extends SpeakeasyBase {
    /**
     * `id` of a specific product.
     */
    id: string;
    /**
     * ID of the associated institution
     */
    institutionId: string;
    /**
     * The name of the product, defined by Herald.
     */
    name: string;
    /**
     * A product line is a major category of commercial insurance that exists across institutions.
     */
    productLine: ProductV1ProductLineEnum;
}
