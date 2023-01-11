import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoCollectionItemsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteVideoCollectionItemsQueryParams extends SpeakeasyBase {
    itemId?: string[];
}
export declare class DeleteVideoCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class DeleteVideoCollectionItemsRequest extends SpeakeasyBase {
    pathParams: DeleteVideoCollectionItemsPathParams;
    queryParams: DeleteVideoCollectionItemsQueryParams;
    security: DeleteVideoCollectionItemsSecurity;
}
export declare class DeleteVideoCollectionItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
