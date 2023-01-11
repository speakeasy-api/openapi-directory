import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Material extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=digest" })
  digest?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
