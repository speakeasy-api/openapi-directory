import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



export class VendorProjectPair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=is_proofreader" })
  isProofreader?: boolean;

  @SpeakeasyMetadata({ data: "json, name=proofreader" })
  proofreader?: User;

  @SpeakeasyMetadata({ data: "json, name=proofreading_rate" })
  proofreadingRate?: number;

  @SpeakeasyMetadata({ data: "json, name=source_language" })
  sourceLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=target_language" })
  targetLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=translation_rate" })
  translationRate?: number;
}
