import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConferenceParametersAddOnParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Record<string, string>;
}
