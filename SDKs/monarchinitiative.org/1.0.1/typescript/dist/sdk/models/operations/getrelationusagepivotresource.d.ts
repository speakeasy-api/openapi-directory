import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRelationUsagePivotResourceQueryParams extends SpeakeasyBase {
    evidence?: string;
    subjectTaxon?: string;
}
export declare class GetRelationUsagePivotResourceRequest extends SpeakeasyBase {
    queryParams: GetRelationUsagePivotResourceQueryParams;
}
export declare class GetRelationUsagePivotResourceResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
}
