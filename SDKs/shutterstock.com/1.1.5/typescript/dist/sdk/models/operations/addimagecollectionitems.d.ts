import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddImageCollectionItemsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AddImageCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class AddImageCollectionItemsRequest extends SpeakeasyBase {
    pathParams: AddImageCollectionItemsPathParams;
    request: shared.CollectionItemRequest;
    security: AddImageCollectionItemsSecurity;
}
export declare class AddImageCollectionItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
