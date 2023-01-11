import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EditorialAssets } from "./editorialassets";
import { EditorialCategory } from "./editorialcategory";



// EditorialContent
/** 
 * Metadata about editorial content
**/
export class EditorialContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspect" })
  aspect?: number;

  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets?: EditorialAssets;

  @SpeakeasyMetadata({ data: "json, name=byline" })
  byline?: string;

  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=categories", elemType: EditorialCategory })
  categories?: EditorialCategory[];

  @SpeakeasyMetadata({ data: "json, name=date_taken" })
  dateTaken?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=special_instructions" })
  specialInstructions?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
