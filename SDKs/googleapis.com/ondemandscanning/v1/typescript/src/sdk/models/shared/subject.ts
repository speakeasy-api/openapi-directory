import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Subject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=digest" })
  digest?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
