import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListHostedNumbersDependentHostedNumberOrderServerList: readonly ["https://preview.twilio.com"];
export declare class ListHostedNumbersDependentHostedNumberOrderSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListHostedNumbersDependentHostedNumberOrderRequest extends SpeakeasyBase {
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
    signingDocumentSid: string;
    /**
     * Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents#status-values) for more information on each of these statuses.
     */
    status?: shared.DependentHostedNumberOrderEnumStatusEnum;
    /**
     * Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
     */
    uniqueName?: string;
}
export declare class ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta extends SpeakeasyBase {
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
export declare class ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse extends SpeakeasyBase {
    items?: shared.PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder[];
    meta?: ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta;
}
export declare class ListHostedNumbersDependentHostedNumberOrderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listHostedNumbersDependentHostedNumberOrderResponse?: ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
