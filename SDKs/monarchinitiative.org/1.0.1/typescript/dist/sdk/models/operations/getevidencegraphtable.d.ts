import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEvidenceGraphTablePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEvidenceGraphTableQueryParams extends SpeakeasyBase {
    isPublication?: boolean;
}
export declare class GetEvidenceGraphTableRequest extends SpeakeasyBase {
    pathParams: GetEvidenceGraphTablePathParams;
    queryParams: GetEvidenceGraphTableQueryParams;
}
export declare class GetEvidenceGraphTableResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
}
