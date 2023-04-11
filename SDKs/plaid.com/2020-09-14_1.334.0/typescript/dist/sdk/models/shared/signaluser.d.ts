import { SpeakeasyBase } from "../../../internal/utils";
import { SignalPersonName } from "./signalpersonname";
/**
 * Details about the end user initiating the transaction (i.e., the account holder).
 */
export declare class SignalUser extends SpeakeasyBase {
    /**
     * Data about the components comprising an address.
     */
    address?: Record<string, any>;
    /**
     * The user's email address.
     */
    emailAddress?: string;
    /**
     * The user's legal name
     */
    name?: SignalPersonName;
    /**
     * The user's phone number, in E.164 format: +{countrycode}{number}. For example: "+14151234567"
     */
    phoneNumber?: string;
}
