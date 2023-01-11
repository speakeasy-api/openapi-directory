import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FileAsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
