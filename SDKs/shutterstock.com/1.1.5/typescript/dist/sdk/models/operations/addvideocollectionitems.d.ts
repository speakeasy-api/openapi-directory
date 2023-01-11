import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoCollectionItemsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AddVideoCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class AddVideoCollectionItemsRequest extends SpeakeasyBase {
    pathParams: AddVideoCollectionItemsPathParams;
    request: shared.CollectionItemRequest;
    security: AddVideoCollectionItemsSecurity;
}
export declare class AddVideoCollectionItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
