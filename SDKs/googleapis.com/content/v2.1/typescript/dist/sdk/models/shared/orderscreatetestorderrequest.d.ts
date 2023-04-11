import { SpeakeasyBase } from "../../../internal/utils";
import { TestOrder } from "./testorder";
export declare class OrdersCreateTestOrderRequest extends SpeakeasyBase {
    /**
     * The CLDR territory code of the country of the test order to create. Affects the currency and addresses of orders created through `template_name`, or the addresses of orders created through `test_order`. Acceptable values are: - "`US`" - "`FR`" Defaults to "`US`".
     */
    country?: string;
    /**
     * The test order template to use. Specify as an alternative to `testOrder` as a shortcut for retrieving a template and then creating an order using that template. Acceptable values are: - "`template1`" - "`template1a`" - "`template1b`" - "`template2`" - "`template3`"
     */
    templateName?: string;
    testOrder?: TestOrder;
}
