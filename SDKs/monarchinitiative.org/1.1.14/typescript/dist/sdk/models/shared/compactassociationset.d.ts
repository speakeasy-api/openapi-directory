import { SpeakeasyBase } from "../../../internal/utils";
export declare class CompactAssociationSet extends SpeakeasyBase {
    /**
     * List of O, for a given (S,R) pair, yielding (S,R,O) triples. E.g. list of MPs for (MGI:nnn, has_phenotype)
     */
    objects: string[];
    /**
     * Relationship type connecting subject and object list
     */
    relation: string;
    /**
     * Subject of association (what it is about), e.g. MGI:1201606
     */
    subject: string;
}
