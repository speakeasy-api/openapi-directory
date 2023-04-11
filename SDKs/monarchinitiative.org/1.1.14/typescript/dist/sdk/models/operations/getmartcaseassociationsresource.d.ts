import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMartCaseAssociationsResourceRequest extends SpeakeasyBase {
    /**
     * Category of entity at link Subject (target), e.g. phenotype, disease
     */
    objectCategory: string;
    /**
     * Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
     */
    slim?: string[];
    /**
     * taxon of case, must be of form NCBITaxon:9606
     */
    taxon: string;
}
export declare class GetMartCaseAssociationsResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
