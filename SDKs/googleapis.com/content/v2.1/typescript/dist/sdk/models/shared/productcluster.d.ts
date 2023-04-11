import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Tells if there is at least one product of the brand currently `IN_STOCK` in your product feed across multiple countries, all products are `OUT_OF_STOCK` in your product feed, or `NOT_IN_INVENTORY`. The field doesn't take the Best Sellers report country filter into account.
 */
export declare enum ProductClusterBrandInventoryStatusEnum {
    InventoryStatusUnspecified = "INVENTORY_STATUS_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    NotInInventory = "NOT_IN_INVENTORY"
}
/**
 * Tells whether the product cluster is `IN_STOCK` in your product feed across multiple countries, `OUT_OF_STOCK` in your product feed, or `NOT_IN_INVENTORY` at all. The field doesn't take the Best Sellers report country filter into account.
 */
export declare enum ProductClusterInventoryStatusEnum {
    InventoryStatusUnspecified = "INVENTORY_STATUS_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    NotInInventory = "NOT_IN_INVENTORY"
}
/**
 * Product cluster fields. A product cluster is a grouping for different offers that represent the same product. Values are only set for fields requested explicitly in the request's search query.
 */
export declare class ProductCluster extends SpeakeasyBase {
    /**
     * Brand of the product cluster.
     */
    brand?: string;
    /**
     * Tells if there is at least one product of the brand currently `IN_STOCK` in your product feed across multiple countries, all products are `OUT_OF_STOCK` in your product feed, or `NOT_IN_INVENTORY`. The field doesn't take the Best Sellers report country filter into account.
     */
    brandInventoryStatus?: ProductClusterBrandInventoryStatusEnum;
    /**
     * Product category (1st level) of the product cluster, represented in Google's product taxonomy.
     */
    categoryL1?: string;
    /**
     * Product category (2nd level) of the product cluster, represented in Google's product taxonomy.
     */
    categoryL2?: string;
    /**
     * Product category (3rd level) of the product cluster, represented in Google's product taxonomy.
     */
    categoryL3?: string;
    /**
     * Product category (4th level) of the product cluster, represented in Google's product taxonomy.
     */
    categoryL4?: string;
    /**
     * Product category (5th level) of the product cluster, represented in Google's product taxonomy.
     */
    categoryL5?: string;
    /**
     * Tells whether the product cluster is `IN_STOCK` in your product feed across multiple countries, `OUT_OF_STOCK` in your product feed, or `NOT_IN_INVENTORY` at all. The field doesn't take the Best Sellers report country filter into account.
     */
    inventoryStatus?: ProductClusterInventoryStatusEnum;
    /**
     * Title of the product cluster.
     */
    title?: string;
    /**
     * GTINs of example variants of the product cluster.
     */
    variantGtins?: string[];
}
