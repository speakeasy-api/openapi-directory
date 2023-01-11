import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssociationsFromPathParams extends SpeakeasyBase {
    subject: string;
}
export declare class GetAssociationsFromQueryParams extends SpeakeasyBase {
    evidence?: string;
    excludeAutomaticAssertions?: boolean;
    objectTaxon?: string;
    relation?: string;
    rows?: number;
    start?: number;
    unselectEvidence?: boolean;
    useCompactAssociations?: boolean;
}
export declare class GetAssociationsFromRequest extends SpeakeasyBase {
    pathParams: GetAssociationsFromPathParams;
    queryParams: GetAssociationsFromQueryParams;
}
export declare class GetAssociationsFromResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
}
