import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RenameVideoCollectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class RenameVideoCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class RenameVideoCollectionRequest extends SpeakeasyBase {
    pathParams: RenameVideoCollectionPathParams;
    request: shared.CollectionUpdateRequest;
    security: RenameVideoCollectionSecurity;
}
export declare class RenameVideoCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
