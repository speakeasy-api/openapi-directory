import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMartDiseaseAssociationsResourceRequest extends SpeakeasyBase {
    /**
     * Category of entity at link Object (target), e.g. phenotype, disease
     */
    objectCategory: string;
    /**
     * Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
     */
    slim?: string[];
    /**
     * taxon of disease, must be of form NCBITaxon:9606
     */
    taxon: string;
}
export declare class GetMartDiseaseAssociationsResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
