import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRelationUsageResourceQueryParams extends SpeakeasyBase {
    evidence?: string;
    subjectTaxon?: string;
}
export declare class GetRelationUsageResourceRequest extends SpeakeasyBase {
    queryParams: GetRelationUsageResourceQueryParams;
}
export declare class GetRelationUsageResourceResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
}
