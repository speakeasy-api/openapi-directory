import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserSubscriptionListSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class GetUserSubscriptionListRequest extends SpeakeasyBase {
    security: GetUserSubscriptionListSecurity;
}
export declare class GetUserSubscriptionListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscriptionDataList?: any;
}
