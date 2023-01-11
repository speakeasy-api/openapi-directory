import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Filtering extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclude" })
  exclude?: Record<string, string>[];

  @SpeakeasyMetadata({ data: "json, name=include" })
  include?: Record<string, string>[];
}
