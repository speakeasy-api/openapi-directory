import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EditorialAssets } from "./editorialassets";
import { EditorialCategory } from "./editorialcategory";



export class EditorialUpdatedContentRights extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries" })
  countries?: string;
}


// EditorialUpdatedContent
/** 
 * Metadata about updated editorial content
**/
export class EditorialUpdatedContent extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=commercial_status" })
  commercialStatus?: any;

  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_taken" })
  dateTaken?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=rights" })
  rights?: EditorialUpdatedContentRights;

  @SpeakeasyMetadata({ data: "json, name=special_instructions" })
  specialInstructions?: string;

  @SpeakeasyMetadata({ data: "json, name=supplier_code" })
  supplierCode?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_time" })
  updatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=updates" })
  updates?: string[];
}
