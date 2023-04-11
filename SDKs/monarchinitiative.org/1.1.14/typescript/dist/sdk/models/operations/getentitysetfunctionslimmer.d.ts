import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * relationship type ('involved_in' or 'acts_upstream_of_or_within')
 */
export declare enum GetEntitySetFunctionSlimmerRelationshipTypeEnum {
    InvolvedIn = "involved_in",
    ActsUpstreamOfOrWithin = "acts_upstream_of_or_within"
}
export declare class GetEntitySetFunctionSlimmerRequest extends SpeakeasyBase {
    /**
     * If set, excludes associations that involve IEAs (ECO:0000501)
     */
    excludeAutomaticAssertions?: boolean;
    /**
     * relationship type ('involved_in' or 'acts_upstream_of_or_within')
     */
    relationshipType?: GetEntitySetFunctionSlimmerRelationshipTypeEnum;
    /**
     * number of rows
     */
    rows?: number;
    /**
     * Map objects up (slim) to a higher level category. Value can be ontology class ID (IMPLEMENTED) or subset ID (TODO)
     */
    slim: string[];
    /**
     * beginning row
     */
    start?: number;
    /**
     * Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
     */
    subject: string[];
}
export declare class GetEntitySetFunctionSlimmerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
