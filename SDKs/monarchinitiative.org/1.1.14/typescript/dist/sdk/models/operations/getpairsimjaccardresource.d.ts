import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPairSimJaccardResourceRequest extends SpeakeasyBase {
    /**
     * id, e.g. NCBIGene:10891; ZFIN:ZDB-GENE-980526-166; UniProtKB:Q15465
     */
    id1: string;
    /**
     * id, e.g. NCBIGene:1200; ZFIN:ZDB-GENE-980528-2059; UniProtKB:P12644
     */
    id2: string;
    /**
     * e.g. disease, phenotype, gene. Two subjects will be compared based on overlap between associations to objects in this category
     */
    objectCategory?: string;
}
export declare class GetPairSimJaccardResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
