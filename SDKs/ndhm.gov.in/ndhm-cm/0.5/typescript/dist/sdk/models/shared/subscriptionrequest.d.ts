import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentManagerPatientID } from "./consentmanagerpatientid";
import { OrganizationRepresentation } from "./organizationrepresentation";
import { SubscriptionCategoryEnum } from "./subscriptioncategoryenum";
import { SubscriptionPeriod } from "./subscriptionperiod";
import { UsePurpose } from "./usepurpose";
export declare class SubscriptionRequestSubscription extends SpeakeasyBase {
    categories: SubscriptionCategoryEnum[];
    hips?: OrganizationRepresentation[];
    hiu: OrganizationRepresentation;
    patient: ConsentManagerPatientID;
    period: SubscriptionPeriod;
    purpose: UsePurpose;
}
export declare class SubscriptionRequest extends SpeakeasyBase {
    /**
     * a nonce, unique for each HTTP request.
     */
    requestId: string;
    subscription: SubscriptionRequestSubscription;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
