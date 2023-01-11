import { SpeakeasyBase } from "../../../internal/utils";
import { Association } from "./association";
import { SequenceLocation } from "./sequencelocation";
import { Seq } from "./seq";
import { SynonymPropertyValue } from "./synonympropertyvalue";
import { Taxon } from "./taxon";
export declare class SequenceFeature extends SpeakeasyBase {
    associationCounts?: Record<string, any>;
    category?: string[];
    consider?: string[];
    deprecated?: boolean;
    description?: string;
    homologyAssociations?: Association[];
    id: string;
    iri?: string;
    label?: string;
    locations?: SequenceLocation[];
    replacedBy?: string[];
    seq?: Seq;
    synonyms?: SynonymPropertyValue[];
    taxon?: Taxon;
    types?: string[];
    xrefs?: string[];
}
