import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubstanceRoleAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSubstanceRoleAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetSubstanceRoleAssociationsRequest extends SpeakeasyBase {
    pathParams: GetSubstanceRoleAssociationsPathParams;
    queryParams: GetSubstanceRoleAssociationsQueryParams;
}
export declare class GetSubstanceRoleAssociationsResponse extends SpeakeasyBase {
    associations?: shared.Association[];
    contentType: string;
    statusCode: number;
}
