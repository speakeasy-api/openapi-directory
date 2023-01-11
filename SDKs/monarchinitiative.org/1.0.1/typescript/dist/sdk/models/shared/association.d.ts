import { SpeakeasyBase } from "../../../internal/utils";
import { Graph } from "./graph";
import { EntityReference } from "./entityreference";
import { BioObjectCore } from "./bioobjectcore";
import { AnnotationExtension } from "./annotationextension";
import { RelationRef } from "./relationref";
export declare class Association extends SpeakeasyBase {
    evidenceGraph?: Graph;
    evidenceTypes?: EntityReference[];
    id: string;
    negated?: boolean;
    object: BioObjectCore;
    objectEq?: string[];
    objectExtensions?: AnnotationExtension[];
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
