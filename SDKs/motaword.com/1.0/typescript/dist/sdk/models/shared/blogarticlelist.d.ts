import { SpeakeasyBase } from "../../../internal/utils";
import { BlogArticle } from "./blogarticle";
import { PagingMeta } from "./pagingmeta";
export declare class BlogArticleList extends SpeakeasyBase {
    articles?: BlogArticle[];
    meta?: PagingMeta;
}
