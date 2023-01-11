import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateImageCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class CreateImageCollectionRequest extends SpeakeasyBase {
    request: shared.CollectionCreateRequest;
    security: CreateImageCollectionSecurity;
}
export declare class CreateImageCollectionResponse extends SpeakeasyBase {
    collectionCreateResponse?: shared.CollectionCreateResponse;
    contentType: string;
    statusCode: number;
}
