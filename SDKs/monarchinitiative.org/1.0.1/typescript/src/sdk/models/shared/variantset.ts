import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VariantSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=category_id" })
  categoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=pub_date" })
  pubDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
