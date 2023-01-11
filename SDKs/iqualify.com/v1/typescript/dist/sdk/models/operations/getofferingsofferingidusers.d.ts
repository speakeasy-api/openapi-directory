import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdUsersPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class GetOfferingsOfferingIdUsersQueryParams extends SpeakeasyBase {
    facilitators?: shared.OfferingIdEnum1;
    learners?: shared.OfferingIdEnum1;
    markers?: shared.OfferingIdEnum1;
}
export declare class GetOfferingsOfferingIdUsersRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdUsersPathParams;
    queryParams: GetOfferingsOfferingIdUsersQueryParams;
}
export declare class GetOfferingsOfferingIdUsersResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    offeringUserResponses?: shared.OfferingUserResponse[];
    statusCode: number;
}
