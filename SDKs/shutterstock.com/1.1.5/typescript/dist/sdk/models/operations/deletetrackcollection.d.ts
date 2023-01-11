import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTrackCollectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteTrackCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class DeleteTrackCollectionRequest extends SpeakeasyBase {
    pathParams: DeleteTrackCollectionPathParams;
    security: DeleteTrackCollectionSecurity;
}
export declare class DeleteTrackCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
