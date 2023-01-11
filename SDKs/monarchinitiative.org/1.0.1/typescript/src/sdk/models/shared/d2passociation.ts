import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Graph } from "./graph";
import { EntityReference } from "./entityreference";
import { BioObjectCore } from "./bioobjectcore";
import { AnnotationExtension } from "./annotationextension";
import { RelationRef } from "./relationref";



export class D2PAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evidence_graph" })
  evidenceGraph?: Graph;

  @SpeakeasyMetadata({ data: "json, name=evidence_types", elemType: EntityReference })
  evidenceTypes?: EntityReference[];

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: EntityReference;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=negated" })
  negated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: BioObjectCore;

  @SpeakeasyMetadata({ data: "json, name=object_eq" })
  objectEq?: string[];

  @SpeakeasyMetadata({ data: "json, name=object_extensions", elemType: AnnotationExtension })
  objectExtensions?: AnnotationExtension[];

  @SpeakeasyMetadata({ data: "json, name=onset" })
  onset?: EntityReference;

  @SpeakeasyMetadata({ data: "json, name=provided_by" })
  providedBy?: string[];

  @SpeakeasyMetadata({ data: "json, name=publications", elemType: EntityReference })
  publications?: EntityReference[];

  @SpeakeasyMetadata({ data: "json, name=qualifiers" })
  qualifiers?: string[];

  @SpeakeasyMetadata({ data: "json, name=relation" })
  relation: RelationRef;

  @SpeakeasyMetadata({ data: "json, name=slim" })
  slim?: string[];

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject: BioObjectCore;

  @SpeakeasyMetadata({ data: "json, name=subject_eq" })
  subjectEq?: string[];

  @SpeakeasyMetadata({ data: "json, name=subject_extensions", elemType: AnnotationExtension })
  subjectExtensions?: AnnotationExtension[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
