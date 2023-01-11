import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RenameTrackCollectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class RenameTrackCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class RenameTrackCollectionRequest extends SpeakeasyBase {
    pathParams: RenameTrackCollectionPathParams;
    request: shared.CollectionUpdateRequest;
    security: RenameTrackCollectionSecurity;
}
export declare class RenameTrackCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
