import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotationExtension } from "./annotationextension";
import { BioObjectCore } from "./bioobjectcore";
import { EntityReference } from "./entityreference";
import { Graph } from "./graph";
import { RelationRef } from "./relationref";
export declare class Association extends SpeakeasyBase {
    /**
     * An indirect association is a join between two or more direct assocations, e.g. gene to disease via ortholog. We record the full set of associations as a graph object
     */
    evidenceGraph?: Graph;
    /**
     * Evidence types (ECO classes)
     */
    evidenceTypes?: EntityReference[];
    /**
     * Association/annotation unique ID
     */
    id: string;
    /**
     * True if association is negated
     */
    negated?: boolean;
    /**
     * Object (sensu RDF), aka target, e.g. HP:0000448, MP:0002109, DOID:14330
     */
    object: BioObjectCore;
    /**
     * Equivalent identifiers to object node
     */
    objectEq?: string[];
    objectExtensions?: AnnotationExtension[];
    /**
     * Provider of association, e.g. Orphanet, ClinVar
     */
    providedBy?: string[];
    /**
     * Publications supporting association, extracted from evidence graph
     */
    publications?: EntityReference[];
    /**
     * Qualifier on the association
     */
    qualifiers?: string[];
    /**
     * Relationship type connecting subject and object
     */
    relation: RelationRef;
    /**
     * Objects mapped to a slim
     */
    slim?: string[];
    /**
     * Subject of association (what it is about), e.g. ClinVar:nnn, MGI:1201606
     */
    subject: BioObjectCore;
    /**
     * Equivalent identifiers to subject node
     */
    subjectEq?: string[];
    subjectExtensions?: AnnotationExtension[];
    /**
     * Type of association, e.g. gene-phenotype
     */
    type?: string;
}
