import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssociationObjectPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetAssociationObjectRequest extends SpeakeasyBase {
    pathParams: GetAssociationObjectPathParams;
}
export declare class GetAssociationObjectResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
}
