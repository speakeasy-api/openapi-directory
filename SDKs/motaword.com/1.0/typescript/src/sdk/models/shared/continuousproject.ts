import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContinuousProject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analytics_enabled" })
  analyticsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_start_postedit" })
  autoStartPostedit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_enabled" })
  isEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mt_enabled" })
  mtEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=postedit_enabled" })
  posteditEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=source_language" })
  sourceLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=target_languages" })
  targetLanguages?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
