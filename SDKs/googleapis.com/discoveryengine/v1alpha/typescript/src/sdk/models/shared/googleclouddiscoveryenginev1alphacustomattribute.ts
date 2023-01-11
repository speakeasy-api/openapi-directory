import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleCloudDiscoveryengineV1alphaCustomAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numbers" })
  numbers?: number[];

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string[];
}
