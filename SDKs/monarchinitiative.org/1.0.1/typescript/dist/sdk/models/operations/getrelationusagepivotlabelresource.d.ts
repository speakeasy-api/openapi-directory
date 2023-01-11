import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRelationUsagePivotLabelResourceQueryParams extends SpeakeasyBase {
    evidence?: string;
    subjectTaxon?: string;
}
export declare class GetRelationUsagePivotLabelResourceRequest extends SpeakeasyBase {
    queryParams: GetRelationUsagePivotLabelResourceQueryParams;
}
export declare class GetRelationUsagePivotLabelResourceResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
}
