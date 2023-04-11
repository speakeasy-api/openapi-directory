import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateAddressServerList: readonly ["https://api.twilio.com"];
export declare class UpdateAddressSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateAddressUpdateAddressRequest extends SpeakeasyBase {
    /**
     * Whether we should automatically correct the address. Can be: `true` or `false` and the default is `true`. If empty or `true`, we will correct the address you provide if necessary. If `false`, we won't alter the address you provide.
     */
    autoCorrectAddress?: boolean;
    /**
     * The city of the address.
     */
    city?: string;
    /**
     * The name to associate with the address.
     */
    customerName?: string;
    /**
     * Whether to enable emergency calling on the address. Can be: `true` or `false`.
     */
    emergencyEnabled?: boolean;
    /**
     * A descriptive string that you create to describe the address. It can be up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * The postal code of the address.
     */
    postalCode?: string;
    /**
     * The state or region of the address.
     */
    region?: string;
    /**
     * The number and street address of the address.
     */
    street?: string;
    /**
     * The additional number and street address of the address.
     */
    streetSecondary?: string;
}
export declare class UpdateAddressRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for the Address resource to update.
     */
    accountSid: string;
    requestBody?: UpdateAddressUpdateAddressRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Address resource to update.
     */
    sid: string;
}
export declare class UpdateAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountAddress?: shared.ApiV2010AccountAddress;
}
