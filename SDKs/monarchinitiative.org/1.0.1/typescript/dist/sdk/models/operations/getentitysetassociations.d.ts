import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEntitySetAssociationsQueryParams extends SpeakeasyBase {
    background?: string[];
    objectCategory?: string;
    objectSlim?: string;
    subject?: string[];
}
export declare class GetEntitySetAssociationsRequest extends SpeakeasyBase {
    queryParams: GetEntitySetAssociationsQueryParams;
}
export declare class GetEntitySetAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
}
