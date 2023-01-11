import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlogArticleLinks } from "./blogarticlelinks";


export enum BlogArticleAnnouncementTypeEnum {
    Article = "article",
    Case = "case",
    FamousTranslators = "famous-translators",
    Sales = "sales"
}


export class BlogArticle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=announcement_type" })
  announcementType?: BlogArticleAnnouncementTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=excerpt" })
  excerpt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: BlogArticleLinks;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
