import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostOfferingsOfferingIdUsersPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class PostOfferingsOfferingIdUsersRequest extends SpeakeasyBase {
    pathParams: PostOfferingsOfferingIdUsersPathParams;
    request: shared.OfferingUser[];
}
export declare class PostOfferingsOfferingIdUsersResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    offeringUserAddResponses?: shared.OfferingUserAddResponse[];
    statusCode: number;
    postOfferingsOfferingIdUsers207ApplicationJSONOneoves?: any[];
}
