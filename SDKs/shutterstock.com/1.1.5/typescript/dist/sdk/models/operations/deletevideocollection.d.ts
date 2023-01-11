import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoCollectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteVideoCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class DeleteVideoCollectionRequest extends SpeakeasyBase {
    pathParams: DeleteVideoCollectionPathParams;
    security: DeleteVideoCollectionSecurity;
}
export declare class DeleteVideoCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
