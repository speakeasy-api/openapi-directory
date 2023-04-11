import { SpeakeasyBase } from "../../../internal/utils";
import { TestOrderCustomerMarketingRightsInfo } from "./testordercustomermarketingrightsinfo";
export declare class TestOrderCustomer extends SpeakeasyBase {
    /**
     * Required. Email address of the customer. Acceptable values are: - "`pog.dwight.schrute@gmail.com`" - "`pog.jim.halpert@gmail.com`" - "`penpog.pam.beesly@gmail.comding`"
     */
    email?: string;
    /**
     * Deprecated. Please use marketingRightsInfo instead.
     */
    explicitMarketingPreference?: boolean;
    /**
     * Full name of the customer.
     */
    fullName?: string;
    marketingRightsInfo?: TestOrderCustomerMarketingRightsInfo;
}
