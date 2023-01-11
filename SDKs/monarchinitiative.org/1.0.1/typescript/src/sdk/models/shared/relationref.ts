import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RelationRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=inverse" })
  inverse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=iri" })
  iri?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}
