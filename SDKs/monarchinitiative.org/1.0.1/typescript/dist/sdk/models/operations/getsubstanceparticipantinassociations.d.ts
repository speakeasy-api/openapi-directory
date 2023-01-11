import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubstanceParticipantInAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSubstanceParticipantInAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetSubstanceParticipantInAssociationsRequest extends SpeakeasyBase {
    pathParams: GetSubstanceParticipantInAssociationsPathParams;
    queryParams: GetSubstanceParticipantInAssociationsQueryParams;
}
export declare class GetSubstanceParticipantInAssociationsResponse extends SpeakeasyBase {
    associations?: shared.Association[];
    contentType: string;
    statusCode: number;
}
