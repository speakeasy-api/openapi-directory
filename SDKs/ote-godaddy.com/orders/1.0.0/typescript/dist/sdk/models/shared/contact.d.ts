import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
export declare class Contact extends SpeakeasyBase {
    addressMailing: Address;
    email: string;
    fax?: string;
    jobTitle?: string;
    nameFirst: string;
    nameLast: string;
    nameMiddle?: string;
    organization?: string;
    phone: string;
}
