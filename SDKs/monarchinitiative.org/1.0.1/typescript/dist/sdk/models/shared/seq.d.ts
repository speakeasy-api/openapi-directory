import { SpeakeasyBase } from "../../../internal/utils";
import { SynonymPropertyValue } from "./synonympropertyvalue";
import { Taxon } from "./taxon";
export declare class Seq extends SpeakeasyBase {
    alphabet?: string;
    associationCounts?: Record<string, any>;
    category?: string[];
    consider?: string[];
    deprecated?: boolean;
    description?: string;
    id: string;
    iri?: string;
    label?: string;
    md5checksum?: string;
    replacedBy?: string[];
    residues?: string;
    seqlen?: string;
    synonyms?: SynonymPropertyValue[];
    taxon?: Taxon;
    types?: string[];
    xrefs?: string[];
}
