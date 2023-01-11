import { SpeakeasyBase } from "../../../internal/utils";
import { SynonymPropertyValue } from "./synonympropertyvalue";
export declare class Relation extends SpeakeasyBase {
    category?: string[];
    consider?: string[];
    deprecated?: boolean;
    description?: string;
    id: string;
    iri?: string;
    label?: string;
    replacedBy?: string[];
    synonyms?: SynonymPropertyValue[];
    types?: string[];
}
