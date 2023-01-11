import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Taxon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}
