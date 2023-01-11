import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LocalisationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;
}
