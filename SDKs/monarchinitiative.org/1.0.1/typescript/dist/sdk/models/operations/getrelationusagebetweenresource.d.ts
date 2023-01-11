import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRelationUsageBetweenResourcePathParams extends SpeakeasyBase {
    objectCategory: string;
    subjectCategory: string;
}
export declare class GetRelationUsageBetweenResourceQueryParams extends SpeakeasyBase {
    evidence?: string;
    subjectTaxon?: string;
}
export declare class GetRelationUsageBetweenResourceRequest extends SpeakeasyBase {
    pathParams: GetRelationUsageBetweenResourcePathParams;
    queryParams: GetRelationUsageBetweenResourceQueryParams;
}
export declare class GetRelationUsageBetweenResourceResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
}
