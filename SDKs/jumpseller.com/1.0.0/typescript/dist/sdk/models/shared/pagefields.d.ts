import { SpeakeasyBase } from "../../../internal/utils";
import { PageCategory } from "./pagecategory";
import { PageTemplate } from "./pagetemplate";
/**
 * Image of the Page
 */
export declare class PageFieldsImage extends SpeakeasyBase {
    id?: number;
    url?: string;
}
/**
 * Status of the Page
 */
export declare enum PageFieldsStatusEnum {
    Public = "public",
    Draft = "draft",
    Hidden = "hidden"
}
export declare class PageFields extends SpeakeasyBase {
    /**
     * Body of the Page
     */
    body?: string;
    /**
     * Page categories to which the Page belongs to
     */
    categories?: PageCategory[];
    /**
     * Id of the Page
     */
    id?: number;
    /**
     * Image of the Page
     */
    image?: PageFieldsImage;
    /**
     * True if it is a legal page
     */
    legal?: boolean;
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
    status?: PageFieldsStatusEnum;
    /**
     * Template of the Page
     */
    template?: PageTemplate;
    /**
     * Title of the Page
     */
    title?: string;
}
