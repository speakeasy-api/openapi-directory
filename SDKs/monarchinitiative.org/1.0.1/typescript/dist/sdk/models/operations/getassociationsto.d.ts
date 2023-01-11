import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssociationsToPathParams extends SpeakeasyBase {
    object: string;
}
export declare class GetAssociationsToQueryParams extends SpeakeasyBase {
    evidence?: string;
    excludeAutomaticAssertions?: boolean;
    rows?: number;
    start?: number;
    unselectEvidence?: boolean;
    useCompactAssociations?: boolean;
}
export declare class GetAssociationsToRequest extends SpeakeasyBase {
    pathParams: GetAssociationsToPathParams;
    queryParams: GetAssociationsToQueryParams;
}
export declare class GetAssociationsToResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
}
