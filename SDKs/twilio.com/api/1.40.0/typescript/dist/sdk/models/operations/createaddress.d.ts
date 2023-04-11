import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateAddressServerList: readonly ["https://api.twilio.com"];
export declare class CreateAddressSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateAddressCreateAddressRequest extends SpeakeasyBase {
    /**
     * Whether we should automatically correct the address. Can be: `true` or `false` and the default is `true`. If empty or `true`, we will correct the address you provide if necessary. If `false`, we won't alter the address you provide.
     */
    autoCorrectAddress?: boolean;
    /**
     * The city of the new address.
     */
    city: string;
    /**
     * The name to associate with the new address.
     */
    customerName: string;
    /**
     * Whether to enable emergency calling on the new address. Can be: `true` or `false`.
     */
    emergencyEnabled?: boolean;
    /**
     * A descriptive string that you create to describe the new address. It can be up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * The ISO country code of the new address.
     */
    isoCountry: string;
    /**
     * The postal code of the new address.
     */
    postalCode: string;
    /**
     * The state or region of the new address.
     */
    region: string;
    /**
     * The number and street address of the new address.
     */
    street: string;
    /**
     * The additional number and street address of the address.
     */
    streetSecondary?: string;
}
export declare class CreateAddressRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will be responsible for the new Address resource.
     */
    accountSid: string;
    requestBody?: CreateAddressCreateAddressRequest;
}
export declare class CreateAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountAddress?: shared.ApiV2010AccountAddress;
}
