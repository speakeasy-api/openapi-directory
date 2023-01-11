import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContinuousProjectLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=is_enabled" })
  isEnabled?: boolean;
}
