import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListTollfreeVerificationServerList: readonly ["https://messaging.twilio.com"];
export declare class ListTollfreeVerificationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListTollfreeVerificationRequest extends SpeakeasyBase {
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
     * The compliance status of the Tollfree Verification record.
     */
    status?: shared.TollfreeVerificationEnumStatusEnum;
    /**
     * The SID of the Phone Number associated with the Tollfree Verification.
     */
    tollfreePhoneNumberSid?: string;
}
export declare class ListTollfreeVerificationListTollfreeVerificationResponseMeta extends SpeakeasyBase {
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
export declare class ListTollfreeVerificationListTollfreeVerificationResponse extends SpeakeasyBase {
    meta?: ListTollfreeVerificationListTollfreeVerificationResponseMeta;
    verifications?: shared.MessagingV1TollfreeVerification[];
}
export declare class ListTollfreeVerificationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listTollfreeVerificationResponse?: ListTollfreeVerificationListTollfreeVerificationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
