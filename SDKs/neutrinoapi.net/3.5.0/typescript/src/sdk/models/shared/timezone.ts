import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Timezone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abbr" })
  abbr?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;
}
