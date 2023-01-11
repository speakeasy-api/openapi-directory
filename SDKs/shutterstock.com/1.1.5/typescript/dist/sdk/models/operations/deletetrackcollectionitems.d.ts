import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTrackCollectionItemsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteTrackCollectionItemsQueryParams extends SpeakeasyBase {
    itemId?: string[];
}
export declare class DeleteTrackCollectionItemsSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class DeleteTrackCollectionItemsRequest extends SpeakeasyBase {
    pathParams: DeleteTrackCollectionItemsPathParams;
    queryParams: DeleteTrackCollectionItemsQueryParams;
    security: DeleteTrackCollectionItemsSecurity;
}
export declare class DeleteTrackCollectionItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
