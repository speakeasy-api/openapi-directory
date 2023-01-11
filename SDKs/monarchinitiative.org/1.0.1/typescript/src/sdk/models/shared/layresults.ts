import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LayAutocomplete } from "./layautocomplete";



export class LayResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: LayAutocomplete })
  results?: LayAutocomplete[];
}
