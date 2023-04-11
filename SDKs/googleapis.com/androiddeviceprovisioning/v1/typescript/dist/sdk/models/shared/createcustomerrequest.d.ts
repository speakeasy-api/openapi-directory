import { SpeakeasyBase } from "../../../internal/utils";
import { CompanyInput } from "./company";
/**
 * Request message to create a customer.
 */
export declare class CreateCustomerRequestInput extends SpeakeasyBase {
    /**
     * A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
     */
    customer?: CompanyInput;
}
