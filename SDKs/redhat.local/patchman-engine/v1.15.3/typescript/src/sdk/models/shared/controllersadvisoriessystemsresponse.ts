import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ControllersAdvisoriesSystemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, string[]>;
}
