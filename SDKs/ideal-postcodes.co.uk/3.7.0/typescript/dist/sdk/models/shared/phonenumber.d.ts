import { SpeakeasyBase } from "../../../internal/utils";
import { Carrier } from "./carrier";
export declare enum PhoneNumberValidEnum {
    True = "true"
}
export declare class PhoneNumber extends SpeakeasyBase {
    /**
     * Full country name
     */
    country: string;
    currentCarrier: Carrier;
    /**
     * Phone number formatted to international standard
     */
    internationalFormat: string;
    /**
     * Country code in 3 letter ISO format
     */
    isoCountry: string;
    /**
     * Country code in 2 letter ISO format
     */
    isoCountry2: string;
    /**
     * Phone number formatted to local standard
     */
    nationalFormat: string;
    originalCarrier: Carrier;
    valid: PhoneNumberValidEnum;
}
