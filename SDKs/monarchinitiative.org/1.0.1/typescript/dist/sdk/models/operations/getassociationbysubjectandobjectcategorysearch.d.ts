import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssociationBySubjectAndObjectCategorySearchPathParams extends SpeakeasyBase {
    objectCategory: string;
    subjectCategory: string;
}
export declare class GetAssociationBySubjectAndObjectCategorySearchQueryParams extends SpeakeasyBase {
    evidence?: string;
    excludeAutomaticAssertions?: boolean;
    object?: string;
    objectTaxon?: string;
    relation?: string;
    rows?: number;
    start?: number;
    subject?: string;
    subjectTaxon?: string;
    unselectEvidence?: boolean;
    useCompactAssociations?: boolean;
}
export declare class GetAssociationBySubjectAndObjectCategorySearchRequest extends SpeakeasyBase {
    pathParams: GetAssociationBySubjectAndObjectCategorySearchPathParams;
    queryParams: GetAssociationBySubjectAndObjectCategorySearchQueryParams;
}
export declare class GetAssociationBySubjectAndObjectCategorySearchResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
}
