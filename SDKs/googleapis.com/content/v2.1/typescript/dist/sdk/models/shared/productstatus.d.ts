import { SpeakeasyBase } from "../../../internal/utils";
import { ProductStatusDestinationStatus } from "./productstatusdestinationstatus";
import { ProductStatusItemLevelIssue } from "./productstatusitemlevelissue";
/**
 * The status of a product, that is, information about a product computed asynchronously.
 */
export declare class ProductStatus extends SpeakeasyBase {
    /**
     * Date on which the item has been created, in ISO 8601 format.
     */
    creationDate?: string;
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
     * The ID of the product for which status is reported.
     */
    productId?: string;
    /**
     * The title of the product.
     */
    title?: string;
}
