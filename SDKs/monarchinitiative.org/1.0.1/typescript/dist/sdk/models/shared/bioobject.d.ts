import { SpeakeasyBase } from "../../../internal/utils";
import { SynonymPropertyValue } from "./synonympropertyvalue";
import { Taxon } from "./taxon";
export declare class BioObject extends SpeakeasyBase {
    associationCounts?: Record<string, any>;
    category?: string[];
    consider?: string[];
    deprecated?: boolean;
    description?: string;
    id: string;
    iri?: string;
    label?: string;
    replacedBy?: string[];
    synonyms?: SynonymPropertyValue[];
    taxon?: Taxon;
    types?: string[];
    xrefs?: string[];
}
