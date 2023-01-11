import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlogArticle } from "./blogarticle";
import { PagingMeta } from "./pagingmeta";



export class BlogArticleList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=articles", elemType: BlogArticle })
  articles?: BlogArticle[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PagingMeta;
}
