import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCasePhenotypeAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCasePhenotypeAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetCasePhenotypeAssociationsRequest extends SpeakeasyBase {
    pathParams: GetCasePhenotypeAssociationsPathParams;
    queryParams: GetCasePhenotypeAssociationsQueryParams;
}
export declare class GetCasePhenotypeAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
