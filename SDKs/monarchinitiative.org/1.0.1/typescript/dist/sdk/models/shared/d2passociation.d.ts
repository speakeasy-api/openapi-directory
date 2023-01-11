import { SpeakeasyBase } from "../../../internal/utils";
import { Graph } from "./graph";
import { EntityReference } from "./entityreference";
import { BioObjectCore } from "./bioobjectcore";
import { AnnotationExtension } from "./annotationextension";
import { RelationRef } from "./relationref";
export declare class D2PAssociation extends SpeakeasyBase {
    evidenceGraph?: Graph;
    evidenceTypes?: EntityReference[];
    frequency?: EntityReference;
    id: string;
    negated?: boolean;
    object: BioObjectCore;
    objectEq?: string[];
    objectExtensions?: AnnotationExtension[];
    onset?: EntityReference;
    providedBy?: string[];
    publications?: EntityReference[];
    qualifiers?: string[];
    relation: RelationRef;
    slim?: string[];
    subject: BioObjectCore;
    subjectEq?: string[];
    subjectExtensions?: AnnotationExtension[];
    type?: string;
}
