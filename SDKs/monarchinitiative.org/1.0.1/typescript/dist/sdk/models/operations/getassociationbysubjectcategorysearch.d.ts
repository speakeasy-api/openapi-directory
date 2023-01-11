import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssociationBySubjectCategorySearchPathParams extends SpeakeasyBase {
    subjectCategory: string;
}
export declare class GetAssociationBySubjectCategorySearchQueryParams extends SpeakeasyBase {
    evidence?: string;
    excludeAutomaticAssertions?: boolean;
    objectTaxon?: string;
    relation?: string;
    rows?: number;
    start?: number;
    subjectTaxon?: string;
    unselectEvidence?: boolean;
    useCompactAssociations?: boolean;
}
export declare class GetAssociationBySubjectCategorySearchRequest extends SpeakeasyBase {
    pathParams: GetAssociationBySubjectCategorySearchPathParams;
    queryParams: GetAssociationBySubjectCategorySearchQueryParams;
}
export declare class GetAssociationBySubjectCategorySearchResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
}
