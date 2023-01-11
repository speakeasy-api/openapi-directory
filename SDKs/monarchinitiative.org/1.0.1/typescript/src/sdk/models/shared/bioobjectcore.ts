import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Taxon } from "./taxon";



export class BioObjectCore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=iri" })
  iri?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=taxon" })
  taxon?: Taxon;
}
