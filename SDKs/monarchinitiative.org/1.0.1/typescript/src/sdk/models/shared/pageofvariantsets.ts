import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VariantSet } from "./variantset";



export class PageOfVariantSets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: VariantSet })
  items?: VariantSet[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
