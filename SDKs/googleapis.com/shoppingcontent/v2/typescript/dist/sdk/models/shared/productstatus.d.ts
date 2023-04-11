import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
import { ProductStatusDataQualityIssue } from "./productstatusdataqualityissue";
import { ProductStatusDestinationStatus } from "./productstatusdestinationstatus";
import { ProductStatusItemLevelIssue } from "./productstatusitemlevelissue";
/**
 * The status of a product, i.e., information about a product computed asynchronously.
 */
export declare class ProductStatus extends SpeakeasyBase {
    /**
     * Date on which the item has been created, in ISO 8601 format.
     */
    creationDate?: string;
    /**
     * DEPRECATED - never populated
     */
    dataQualityIssues?: ProductStatusDataQualityIssue[];
    /**
     * The intended destinations for the product.
     */
    destinationStatuses?: ProductStatusDestinationStatus[];
    /**
     * Date on which the item expires in Google Shopping, in ISO 8601 format.
     */
    googleExpirationDate?: string;
    /**
     * A list of all issues associated with the product.
     */
    itemLevelIssues?: ProductStatusItemLevelIssue[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#productStatus`"
     */
    kind?: string;
    /**
     * Date on which the item has been last updated, in ISO 8601 format.
     */
    lastUpdateDate?: string;
    /**
     * The link to the product.
     */
    link?: string;
    /**
     *  Required product attributes are primarily defined by the products data specification. See the Products Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
     */
    product?: Product;
    /**
     * The ID of the product for which status is reported.
     */
    productId?: string;
    /**
     * The title of the product.
     */
    title?: string;
}
