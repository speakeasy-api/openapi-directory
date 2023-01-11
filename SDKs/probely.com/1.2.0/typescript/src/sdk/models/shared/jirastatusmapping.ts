import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JiraStatusMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accepted" })
  accepted?: string;

  @SpeakeasyMetadata({ data: "json, name=fixed" })
  fixed?: string;

  @SpeakeasyMetadata({ data: "json, name=invalid" })
  invalid?: string;

  @SpeakeasyMetadata({ data: "json, name=notfixed" })
  notfixed?: string;
}
