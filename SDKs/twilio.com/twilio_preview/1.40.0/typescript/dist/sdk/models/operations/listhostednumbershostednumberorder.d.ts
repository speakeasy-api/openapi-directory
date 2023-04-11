import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListHostedNumbersHostedNumberOrderServerList: readonly ["https://preview.twilio.com"];
export declare class ListHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
    /**
     * A human readable description of this resource, up to 64 characters.
     */
    friendlyName?: string;
    /**
     * A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder.
     */
    incomingPhoneNumberSid?: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * An E164 formatted phone number hosted by this HostedNumberOrder.
     */
    phoneNumber?: string;
    /**
     * The Status of this HostedNumberOrder. One of `received`, `pending-verification`, `verified`, `pending-loa`, `carrier-processing`, `testing`, `completed`, `failed`, or `action-required`.
     */
    status?: shared.HostedNumberOrderEnumStatusEnum;
    /**
     * Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
     */
    uniqueName?: string;
}
export declare class ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
    items?: shared.PreviewHostedNumbersHostedNumberOrder[];
    meta?: ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta;
}
export declare class ListHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listHostedNumbersHostedNumberOrderResponse?: ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
