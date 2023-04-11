import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The PackageItemDTO Class.
 *
 * @remarks
 * Contains relevant fields of PackageItem DTO by masking actual Package entity's fields in application.
 *
 */
export declare class PackageItemDTO extends SpeakeasyBase {
    /**
     * Refer to ArticleId in Article table in DB.
     *
     * @remarks
     *
     */
    articleId: number;
    /**
     * Name of the article(Addon) in a particular package.
     *
     * @remarks
     *              read only
     *
     */
    articleName?: string;
    /**
     * Number assigned the article(Addon) in a particular package.
     *
     * @remarks
     *              read only
     *
     */
    articleNumber?: number;
    /**
     * Price of the article determined from that package.
     *
     * @remarks
     * Price of a same article can be varied from package to package.
     *
     */
    articlePrice?: number;
    /**
     * Number of the installment this article is available to.
     *
     * @remarks
     *
     */
    endOrder?: number;
    /**
     * Is Included in service charge
     */
    isIncludeServiceInCharge?: boolean;
    measureUnit?: string;
    /**
     * How many article(Addon) is available for that package from that type.
     *
     * @remarks
     *
     */
    numberOfItems?: number;
    /**
     * Number of the installment this article is available from.
     *
     * @remarks
     *
     */
    startOrder?: number;
}
