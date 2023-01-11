import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutocompleteResult } from "./autocompleteresult";



export class AutocompleteResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=docs", elemType: AutocompleteResult })
  docs?: AutocompleteResult[];
}
