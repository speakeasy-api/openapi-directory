import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link)
 */
export declare enum DocTypeEnum {
    Basic = "basic",
    Error = "error",
    Link = "link"
}
/**
 * Doc object
 */
export declare class Doc extends SpeakeasyBase {
    /**
     * Body content of the page, formatted in ReadMe or Github flavored Markdown. Accepts long page content, for example, greater than 100k characters
     */
    body?: string;
    /**
     * Category ID of the page, which you can get through https://docs.readme.com/developers/reference/categories#getcategory
     */
    category: string;
    /**
     * Visibility of the page
     */
    hidden?: boolean;
    /**
     * For a subpage, specify the parent doc ID, which you can get through https://docs.readme.com/developers/reference/docs#getdoc
     */
    parentDoc?: string;
    /**
     * Title of the page
     */
    title: string;
    /**
     * Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link)
     */
    type?: DocTypeEnum;
}
