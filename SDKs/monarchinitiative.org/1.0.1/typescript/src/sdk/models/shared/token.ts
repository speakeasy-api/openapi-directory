import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Token extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: string[];
}
