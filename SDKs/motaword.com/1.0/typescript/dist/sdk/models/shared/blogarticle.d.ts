import { SpeakeasyBase } from "../../../internal/utils";
import { BlogArticleLinks } from "./blogarticlelinks";
export declare enum BlogArticleAnnouncementTypeEnum {
    Article = "article",
    Case = "case",
    FamousTranslators = "famous-translators",
    Sales = "sales"
}
export declare class BlogArticle extends SpeakeasyBase {
    announcementType?: BlogArticleAnnouncementTypeEnum;
    author?: string;
    /**
     * Article content
     */
    content?: string;
    /**
     * the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
     */
    createdAt?: Date;
    /**
     * Article excerpt
     */
    excerpt?: string;
    id?: number;
    /**
     * language code
     */
    language?: string;
    links?: BlogArticleLinks;
    slug?: string;
    title?: string;
    topic?: string;
}
