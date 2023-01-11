import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SequencePosition } from "./sequenceposition";
import { SynonymPropertyValue } from "./synonympropertyvalue";
import { Taxon } from "./taxon";



export class SequenceLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=association_counts" })
  associationCounts?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string[];

  @SpeakeasyMetadata({ data: "json, name=consider" })
  consider?: string[];

  @SpeakeasyMetadata({ data: "json, name=deprecated" })
  deprecated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: SequencePosition;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=iri" })
  iri?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=phase" })
  phase?: number;

  @SpeakeasyMetadata({ data: "json, name=replaced_by" })
  replacedBy?: string[];

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: SequencePosition;

  @SpeakeasyMetadata({ data: "json, name=strand" })
  strand?: number;

  @SpeakeasyMetadata({ data: "json, name=synonyms", elemType: SynonymPropertyValue })
  synonyms?: SynonymPropertyValue[];

  @SpeakeasyMetadata({ data: "json, name=taxon" })
  taxon?: Taxon;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: string[];

  @SpeakeasyMetadata({ data: "json, name=xrefs" })
  xrefs?: string[];
}
