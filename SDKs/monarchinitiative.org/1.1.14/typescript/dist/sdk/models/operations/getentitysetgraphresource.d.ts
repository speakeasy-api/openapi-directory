import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetEntitySetGraphResourceRequest extends SpeakeasyBase {
    /**
     * Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests
     */
    background?: string[];
    /**
     * E.g. phenotype, function
     */
    objectCategory?: string;
    /**
     * Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED
     */
    objectSlim?: string;
    /**
     * Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
     */
    subject?: string[];
}
export declare class GetEntitySetGraphResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
