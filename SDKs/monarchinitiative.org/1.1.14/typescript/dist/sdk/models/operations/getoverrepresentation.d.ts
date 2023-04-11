import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOverRepresentationRequest extends SpeakeasyBase {
    /**
     * Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests
     */
    background?: string[];
    /**
     * Exclude results with p-value greater than this
     */
    maxPValue?: string;
    /**
     * E.g. phenotype, function
     */
    objectCategory?: string;
    /**
     * ontology id. Must be obo id. Examples: go, mp, hp, uberon (optional: will be inferred if left blank)
     */
    ontology?: string;
    /**
     * Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
     */
    subject?: string[];
    /**
     * Default: gene. Other types may be used e.g. disease but statistics may not make sense
     */
    subjectCategory?: string;
    /**
     * must be NCBITaxon CURIE. Example: NCBITaxon:9606
     */
    taxon?: string;
}
export declare class GetOverRepresentationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
