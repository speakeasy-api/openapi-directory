import { SpeakeasyBase } from "../../../internal/utils";
import { SequencePosition } from "./sequenceposition";
import { SynonymPropertyValue } from "./synonympropertyvalue";
import { Taxon } from "./taxon";
export declare class SequenceLocation extends SpeakeasyBase {
    associationCounts?: Record<string, any>;
    category?: string[];
    consider?: string[];
    deprecated?: boolean;
    description?: string;
    end?: SequencePosition;
    id: string;
    iri?: string;
    label?: string;
    phase?: number;
    replacedBy?: string[];
    score?: number;
    start?: SequencePosition;
    strand?: number;
    synonyms?: SynonymPropertyValue[];
    taxon?: Taxon;
    types?: string[];
    xrefs?: string[];
}
