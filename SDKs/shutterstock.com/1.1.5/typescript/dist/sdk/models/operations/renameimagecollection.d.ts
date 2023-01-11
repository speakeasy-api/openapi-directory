import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RenameImageCollectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class RenameImageCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class RenameImageCollectionRequest extends SpeakeasyBase {
    pathParams: RenameImageCollectionPathParams;
    request: shared.CollectionUpdateRequest;
    security: RenameImageCollectionSecurity;
}
export declare class RenameImageCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
