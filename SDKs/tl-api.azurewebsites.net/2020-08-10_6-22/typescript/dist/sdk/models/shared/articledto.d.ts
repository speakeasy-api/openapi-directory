import { SpeakeasyBase } from "../../../internal/utils";
import { GymArticleDetailsDTO } from "./gymarticledetailsdto";
import { GymDTO } from "./gymdto";
/**
 * The ArticleDTO Class.
 *
 * @remarks
 * Contains relevant fields of Article DTO by masking actual Article entity's fields in application.
 *
 */
export declare class ArticleDTO extends SpeakeasyBase {
    /**
     * Active Status
     */
    activeStatus?: boolean;
    applyForAllGyms?: boolean;
    articleId?: number;
    availableGyms: GymDTO[];
    /**
     * Default AvailableQty
     */
    availableQty?: number;
    barcode?: string;
    createdDate?: Date;
    createdUser?: string;
    /**
     * Access Schedule CRON Expression
     */
    cronExpression?: string;
    description?: string;
    discount?: number;
    /**
     * Default EmployeeDiscount
     */
    employeeDiscount?: number;
    /**
     * Default EmployeePrice
     */
    employeePrice?: number;
    /**
     * Gym Customizations
     */
    gymArticles?: GymArticleDetailsDTO[];
    isAddOn?: boolean;
    /**
     * Default IsInventoryItem of the Article
     */
    isInventoryItem?: boolean;
    /**
     * Default IsObsolete of the Article
     */
    isObsolete?: boolean;
    measureUnit: string;
    modifiedDate?: Date;
    modifiedUser?: string;
    name: string;
    number?: number;
    price: number;
    /**
     * Deafault ReorderLevel
     */
    reorderLevel?: number;
    /**
     * Default Revenue account
     */
    revenueAccountId?: number;
    /**
     * Default SellingPrice
     */
    sellingPrice?: number;
    tags?: string;
    type: string;
    vat?: number;
    /**
     * VAT Applicable
     */
    vatApplicable?: boolean;
}
