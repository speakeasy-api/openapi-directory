import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The GymArticleDetailsDTO Class.
 *
 * @remarks
 * Contains fields of GymArticleDetails DTO in application.
 *
 */
export declare class GymArticleDetailsDTO extends SpeakeasyBase {
    articleId?: number;
    availableQty?: number;
    /**
     * Created User
     */
    createdUser?: string;
    employeeDiscount?: number;
    employeePrice?: number;
    /**
     * Gym Id where article is related
     */
    gymId?: number;
    /**
     * GymId - Gym Id string with comma separated GymIds
     */
    gymIdList?: string;
    /**
     * Gym Name
     */
    gymName?: string;
    id?: number;
    /**
     * Set as the default values for the article
     */
    isDefault?: boolean;
    isInventoryItem?: boolean;
    isObsolete?: boolean;
    /**
     * Modified user
     */
    modifiedUser?: string;
    reorderLevel?: number;
    /**
     * Revenue account Id
     */
    revenueAccountId?: number;
    sellingPrice?: number;
}
