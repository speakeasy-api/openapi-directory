import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVideoCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class CreateVideoCollectionRequest extends SpeakeasyBase {
    request: shared.CollectionCreateRequest;
    security: CreateVideoCollectionSecurity;
}
export declare class CreateVideoCollectionResponse extends SpeakeasyBase {
    collectionCreateResponse?: shared.CollectionCreateResponse;
    contentType: string;
    statusCode: number;
}
