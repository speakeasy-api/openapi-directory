import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddTrackCollectionItemsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AddTrackCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class AddTrackCollectionItemsRequest extends SpeakeasyBase {
    pathParams: AddTrackCollectionItemsPathParams;
    request: shared.CollectionItemRequest;
    security: AddTrackCollectionItemsSecurity;
}
export declare class AddTrackCollectionItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
