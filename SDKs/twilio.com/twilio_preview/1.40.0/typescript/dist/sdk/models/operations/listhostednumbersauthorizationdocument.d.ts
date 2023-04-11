import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListHostedNumbersAuthorizationDocumentServerList: readonly ["https://preview.twilio.com"];
export declare class ListHostedNumbersAuthorizationDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
    /**
     * Email that this AuthorizationDocument will be sent to for signing.
     */
    email?: string;
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
     * Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents#status-values) for more information on each of these statuses.
     */
    status?: shared.AuthorizationDocumentEnumStatusEnum;
}
export declare class ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta extends SpeakeasyBase {
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
export declare class ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
    items?: shared.PreviewHostedNumbersAuthorizationDocument[];
    meta?: ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta;
}
export declare class ListHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listHostedNumbersAuthorizationDocumentResponse?: ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
