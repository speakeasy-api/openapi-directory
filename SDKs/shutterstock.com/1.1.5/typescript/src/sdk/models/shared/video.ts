import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoAssets } from "./videoassets";
import { Category } from "./category";
import { Contributor } from "./contributor";
import { Model } from "./model";



// Video
/** 
 * Information about a video
**/
export class Video extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added_date" })
  addedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=affiliate_url" })
  affiliateUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=aspect" })
  aspect?: number;

  @SpeakeasyMetadata({ data: "json, name=aspect_ratio" })
  aspectRatio?: string;

  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets?: VideoAssets;

  @SpeakeasyMetadata({ data: "json, name=categories", elemType: Category })
  categories?: Category[];

  @SpeakeasyMetadata({ data: "json, name=contributor" })
  contributor: Contributor;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=has_model_release" })
  hasModelRelease?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_property_release" })
  hasPropertyRelease?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=is_adult" })
  isAdult?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_editorial" })
  isEditorial?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=media_type" })
  mediaType: string;

  @SpeakeasyMetadata({ data: "json, name=models", elemType: Model })
  models?: Model[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
