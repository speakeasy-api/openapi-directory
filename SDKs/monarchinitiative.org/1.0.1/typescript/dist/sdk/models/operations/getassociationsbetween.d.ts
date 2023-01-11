import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssociationsBetweenPathParams extends SpeakeasyBase {
    object: string;
    subject: string;
}
export declare class GetAssociationsBetweenQueryParams extends SpeakeasyBase {
    evidence?: string;
    excludeAutomaticAssertions?: boolean;
    rows?: number;
    start?: number;
    unselectEvidence?: boolean;
    useCompactAssociations?: boolean;
}
export declare class GetAssociationsBetweenRequest extends SpeakeasyBase {
    pathParams: GetAssociationsBetweenPathParams;
    queryParams: GetAssociationsBetweenQueryParams;
}
export declare class GetAssociationsBetweenResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
}
