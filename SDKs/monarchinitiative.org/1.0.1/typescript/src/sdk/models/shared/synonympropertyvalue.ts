import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SynonymPropertyValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pred" })
  pred?: string;

  @SpeakeasyMetadata({ data: "json, name=val" })
  val?: string;

  @SpeakeasyMetadata({ data: "json, name=xrefs" })
  xrefs?: string[];
}
