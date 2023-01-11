import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteImageCollectionItemsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteImageCollectionItemsQueryParams extends SpeakeasyBase {
    itemId?: string[];
}
export declare class DeleteImageCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class DeleteImageCollectionItemsRequest extends SpeakeasyBase {
    pathParams: DeleteImageCollectionItemsPathParams;
    queryParams: DeleteImageCollectionItemsQueryParams;
    security: DeleteImageCollectionItemsSecurity;
}
export declare class DeleteImageCollectionItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
