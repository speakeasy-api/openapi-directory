import { SpeakeasyBase } from "../../../internal/utils";
import { Taxon } from "./taxon";
export declare class BioObjectCore extends SpeakeasyBase {
    category?: string[];
    id: string;
    iri?: string;
    label?: string;
    taxon?: Taxon;
}
