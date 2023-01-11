import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPhenotypeGeneByTaxonAssociationsPathParams extends SpeakeasyBase {
    id: string;
    taxid: string;
}
export declare class GetPhenotypeGeneByTaxonAssociationsQueryParams extends SpeakeasyBase {
    direct?: boolean;
    evidence?: string;
    excludeAutomaticAssertions?: boolean;
    facet?: boolean;
    facetFields?: string[];
    fetchObjects?: boolean;
    rows?: number;
    slim?: string[];
    start?: number;
    unselectEvidence?: boolean;
    useCompactAssociations?: boolean;
}
export declare class GetPhenotypeGeneByTaxonAssociationsRequest extends SpeakeasyBase {
    pathParams: GetPhenotypeGeneByTaxonAssociationsPathParams;
    queryParams: GetPhenotypeGeneByTaxonAssociationsQueryParams;
}
export declare class GetPhenotypeGeneByTaxonAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
