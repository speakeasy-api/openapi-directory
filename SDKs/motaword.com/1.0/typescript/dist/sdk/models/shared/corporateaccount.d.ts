import { SpeakeasyBase } from "../../../internal/utils";
import { BillingAddress } from "./billingaddress";
export declare class CorporateAccount extends SpeakeasyBase {
    billing?: BillingAddress;
    domain?: string;
    email?: string;
    id?: number;
    logo?: string;
    name?: string;
    webSite?: string;
}
