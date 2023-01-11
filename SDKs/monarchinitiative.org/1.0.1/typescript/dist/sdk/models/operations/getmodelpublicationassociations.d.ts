import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetModelPublicationAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetModelPublicationAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetModelPublicationAssociationsRequest extends SpeakeasyBase {
    pathParams: GetModelPublicationAssociationsPathParams;
    queryParams: GetModelPublicationAssociationsQueryParams;
}
export declare class GetModelPublicationAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
