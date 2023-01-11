import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssociationBySubjectAndAssocTypePathParams extends SpeakeasyBase {
    associationType: string;
}
export declare class GetAssociationBySubjectAndAssocTypeQueryParams extends SpeakeasyBase {
    evidence?: string;
    excludeAutomaticAssertions?: boolean;
    object?: string;
    rows?: number;
    start?: number;
    subject?: string;
    unselectEvidence?: boolean;
    useCompactAssociations?: boolean;
}
export declare class GetAssociationBySubjectAndAssocTypeRequest extends SpeakeasyBase {
    pathParams: GetAssociationBySubjectAndAssocTypePathParams;
    queryParams: GetAssociationBySubjectAndAssocTypeQueryParams;
}
export declare class GetAssociationBySubjectAndAssocTypeResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
}
