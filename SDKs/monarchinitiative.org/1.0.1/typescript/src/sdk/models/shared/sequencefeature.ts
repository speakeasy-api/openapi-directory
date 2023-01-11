import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Association } from "./association";
import { SequenceLocation } from "./sequencelocation";
import { Seq } from "./seq";
import { SynonymPropertyValue } from "./synonympropertyvalue";
import { Taxon } from "./taxon";



export class SequenceFeature extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=homology_associations", elemType: Association })
  homologyAssociations?: Association[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=iri" })
  iri?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=locations", elemType: SequenceLocation })
  locations?: SequenceLocation[];

  @SpeakeasyMetadata({ data: "json, name=replaced_by" })
  replacedBy?: string[];

  @SpeakeasyMetadata({ data: "json, name=seq" })
  seq?: Seq;

  @SpeakeasyMetadata({ data: "json, name=synonyms", elemType: SynonymPropertyValue })
  synonyms?: SynonymPropertyValue[];

  @SpeakeasyMetadata({ data: "json, name=taxon" })
  taxon?: Taxon;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: string[];

  @SpeakeasyMetadata({ data: "json, name=xrefs" })
  xrefs?: string[];
}
