import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PhoneNumberTypeEnum {
    Other = "OTHER",
    Mobile = "MOBILE",
    Office = "OFFICE"
}
/**
 * A person's Phone Number
 */
export declare class PhoneNumber extends SpeakeasyBase {
    /**
     * The phone number of the person.
     */
    phoneNumber?: string;
    type?: PhoneNumberTypeEnum;
}
