import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGenericObjectByTypeTypeEnum {
    Gene = "gene",
    Variant = "variant",
    Genotype = "genotype",
    Phenotype = "phenotype",
    Disease = "disease",
    Goterm = "goterm",
    Pathway = "pathway",
    Anatomy = "anatomy",
    Substance = "substance",
    Individual = "individual",
    Publication = "publication",
    Model = "model",
    Case = "case"
}
export declare class GetGenericObjectByTypePathParams extends SpeakeasyBase {
    id: string;
    type: GetGenericObjectByTypeTypeEnum;
}
export declare class GetGenericObjectByTypeQueryParams extends SpeakeasyBase {
    direct?: boolean;
    distinctCounts?: boolean;
    evidence?: string;
    excludeAutomaticAssertions?: boolean;
    facet?: boolean;
    facetFields?: string[];
    fetchObjects?: boolean;
    getAssociationCounts?: boolean;
    rows?: number;
    slim?: string[];
    start?: number;
    unselectEvidence?: boolean;
    useCompactAssociations?: boolean;
}
export declare class GetGenericObjectByTypeRequest extends SpeakeasyBase {
    pathParams: GetGenericObjectByTypePathParams;
    queryParams: GetGenericObjectByTypeQueryParams;
}
export declare class GetGenericObjectByTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
