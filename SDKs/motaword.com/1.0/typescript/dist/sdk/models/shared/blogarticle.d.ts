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
    content?: string;
    createdAt?: Date;
    excerpt?: string;
    id?: number;
    language?: string;
    links?: BlogArticleLinks;
    slug?: string;
    title?: string;
    topic?: string;
}
