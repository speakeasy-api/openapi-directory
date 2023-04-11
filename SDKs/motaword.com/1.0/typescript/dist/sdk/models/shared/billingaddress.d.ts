import { SpeakeasyBase } from "../../../internal/utils";
export declare class BillingAddress extends SpeakeasyBase {
    city?: string;
    country?: string;
    /**
     * addressing name, such as company name. used in billing address.
     */
    name?: string;
    phone?: string;
    state?: string;
    street?: string;
    zip?: string;
}
