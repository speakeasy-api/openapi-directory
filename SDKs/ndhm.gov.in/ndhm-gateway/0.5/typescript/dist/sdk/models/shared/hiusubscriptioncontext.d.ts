import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationRepresentation } from "./organizationrepresentation";
import { SubscriptionCategoryEnum } from "./subscriptioncategoryenum";
import { SubscriptionPeriod } from "./subscriptionperiod";
export declare class HIUSubscriptionContext extends SpeakeasyBase {
    categories: SubscriptionCategoryEnum[];
    hip?: OrganizationRepresentation;
    period: SubscriptionPeriod;
}
