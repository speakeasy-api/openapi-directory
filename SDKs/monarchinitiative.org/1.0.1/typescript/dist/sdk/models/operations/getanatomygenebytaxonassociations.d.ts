import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAnatomyGeneByTaxonAssociationsPathParams extends SpeakeasyBase {
    id: string;
    taxid: string;
}
export declare class GetAnatomyGeneByTaxonAssociationsQueryParams extends SpeakeasyBase {
    direct?: boolean;
    directTaxon?: boolean;
    evidence?: string;
    excludeAutomaticAssertions?: boolean;
    facet?: boolean;
    facetFields?: string[];
    fetchObjects?: boolean;
    q?: string;
    relation?: string;
    rows?: number;
    slim?: string[];
    sort?: string;
    start?: number;
    taxon?: string[];
    unselectEvidence?: boolean;
    useCompactAssociations?: boolean;
}
export declare class GetAnatomyGeneByTaxonAssociationsRequest extends SpeakeasyBase {
    pathParams: GetAnatomyGeneByTaxonAssociationsPathParams;
    queryParams: GetAnatomyGeneByTaxonAssociationsQueryParams;
}
export declare class GetAnatomyGeneByTaxonAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
