import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TargetSimple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=stack" })
  stack?: string[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
