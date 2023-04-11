import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentChannelRule } from "./paymentchannelrule";
export declare class PaymentChannelCountry extends SpeakeasyBase {
    /**
     * The ISO code for the country
     */
    isoCountryCode: string;
    /**
     * The rules for the given country
     */
    rules: PaymentChannelRule[];
}
