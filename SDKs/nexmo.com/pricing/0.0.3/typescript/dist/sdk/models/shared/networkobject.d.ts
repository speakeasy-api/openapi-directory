import { SpeakeasyBase } from "../../../internal/utils";
export declare class NetworkObject extends SpeakeasyBase {
    /**
     * The currency used for prices for this network.
     */
    currency?: string;
    /**
     * The [Mobile Country Code](https://en.wikipedia.org/wiki/Mobile_country_code) of the operator.
     */
    mcc?: string;
    /**
     * The Mobile Network Code of the operator.
     */
    mnc?: string;
    /**
     * The Mobile Country Code and Mobile Network Code combined to give a unique reference for the operator.
     */
    networkCode?: string;
    /**
     * The company/organisational name of the operator.
     */
    networkName?: string;
    /**
     * The cost to send a message or make a call to this network
     */
    price?: string;
    /**
     * The type of network: mobile or landline.
     */
    type?: string;
}
