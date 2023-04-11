import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The ArticleSearchDTO Class.
 *
 * @remarks
 * Contains relevant fields of ArticleSearch DTO by masking actual Article entity's fields in application.
 *
 */
export declare class ArticleSearchDTO extends SpeakeasyBase {
    /**
     * Active Status
     */
    activeStatus?: boolean;
    applyForAllGyms?: boolean;
    articleId?: number;
    createdDate?: Date;
    createdUser?: string;
    description?: string;
    /**
     * MeasureUnit
     */
    measureUnit?: string;
    modifiedDate?: Date;
    modifiedUser?: string;
    name?: string;
    number?: number;
    price?: number;
    /**
     * Actual Selling price of the article
     */
    sellingPrice?: number;
    tags?: string;
    /**
     * total number of recode for particular search
     */
    totalCount?: number;
    /**
     * article type
     */
    type?: string;
}
