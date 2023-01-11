import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AnalyticsToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jwt" })
  jwt?: string;
}
