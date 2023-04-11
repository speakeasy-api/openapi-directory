import { SpeakeasyBase } from "../../../internal/utils";
import { BlogArticle } from "./blogarticle";
import { PagingMeta } from "./pagingmeta";
/**
 * List of blog articles
 */
export declare class BlogArticleList extends SpeakeasyBase {
    articles?: BlogArticle[];
    meta?: PagingMeta;
}
