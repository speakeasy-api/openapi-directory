import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCaseGenotypeAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCaseGenotypeAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetCaseGenotypeAssociationsRequest extends SpeakeasyBase {
    pathParams: GetCaseGenotypeAssociationsPathParams;
    queryParams: GetCaseGenotypeAssociationsQueryParams;
}
export declare class GetCaseGenotypeAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
