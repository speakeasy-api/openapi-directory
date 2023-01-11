import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDiseaseGenotypeAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDiseaseGenotypeAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetDiseaseGenotypeAssociationsRequest extends SpeakeasyBase {
    pathParams: GetDiseaseGenotypeAssociationsPathParams;
    queryParams: GetDiseaseGenotypeAssociationsQueryParams;
}
export declare class GetDiseaseGenotypeAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
