import { SpeakeasyBase } from "../../../internal/utils";
import { PageCategory } from "./pagecategory";
/**
 * Image of the Page
 */
export declare class PageModifyFieldsImage extends SpeakeasyBase {
    id?: number;
    url?: string;
}
/**
 * Status of the Page
 */
export declare enum PageModifyFieldsStatusEnum {
    Public = "public",
    Draft = "draft",
    Hidden = "hidden"
}
export declare class PageModifyFields extends SpeakeasyBase {
    /**
     * Body of the Page
     */
    body?: string;
    /**
     * Page categories to which the Page belongs to
     */
    categories?: PageCategory[];
    /**
     * Image of the Page
     */
    image?: PageModifyFieldsImage;
    /**
     * Meta description of the Page
     */
    metaDescription?: string;
    /**
     * Meta title of the Page
     */
    pageTitle?: string;
    /**
     * URL of the Page
     */
    permalink?: string;
    /**
     * Status of the Page
     */
    status?: PageModifyFieldsStatusEnum;
    /**
     * ID of the Page template. Use null for the blank layout ('None')
     */
    template?: number;
    /**
     * Title of the Page
     */
    title?: string;
}
