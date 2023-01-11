import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetsAllTopVulns200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=0" })
  zero?: string;

  @SpeakeasyMetadata({ data: "json, name=1" })
  one?: string;
}


export class GetTargetsAllTopVulnsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetTargetsAllTopVulns200ApplicationJson })
  getTargetsAllTopVulns200ApplicationJSONObjects?: GetTargetsAllTopVulns200ApplicationJson[];
}
