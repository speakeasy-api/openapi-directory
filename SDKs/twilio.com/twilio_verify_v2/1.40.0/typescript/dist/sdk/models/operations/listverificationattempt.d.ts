import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListVerificationAttemptServerList: readonly ["https://verify.twilio.com"];
export declare class ListVerificationAttemptSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListVerificationAttemptRequest extends SpeakeasyBase {
    /**
     * Filter used to query Verification Attempts by communication channel. Valid values are `SMS` and `CALL`
     */
    channel?: shared.VerificationAttemptEnumChannelsEnum;
    /**
     * Destination of a verification. It is phone number in E.164 format.
     */
    channelDataTo?: string;
    /**
     * Filter used to query Verification Attempts sent to the specified destination country.
     */
    country?: string;
    /**
     * Datetime filter used to query Verification Attempts created after this datetime. Given as GMT in RFC 2822 format.
     */
    dateCreatedAfter?: Date;
    /**
     * Datetime filter used to query Verification Attempts created before this datetime. Given as GMT in RFC 2822 format.
     */
    dateCreatedBefore?: Date;
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
     * Filter used to query Verification Attempts by conversion status. Valid values are `UNCONVERTED`, for attempts that were not converted, and `CONVERTED`, for attempts that were confirmed.
     */
    status?: shared.VerificationAttemptEnumConversionStatusEnum;
    /**
     * Filter used to return all the Verification Attempts of a single verification. Only attempts of the provided verification SID will be returned.
     */
    verificationSid?: string;
    /**
     * Filter used to query Verification Attempts by verify service. Only attempts of the provided SID will be returned.
     */
    verifyServiceSid?: string;
}
export declare class ListVerificationAttemptListVerificationAttemptResponseMeta extends SpeakeasyBase {
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
export declare class ListVerificationAttemptListVerificationAttemptResponse extends SpeakeasyBase {
    attempts?: shared.VerifyV2VerificationAttempt[];
    meta?: ListVerificationAttemptListVerificationAttemptResponseMeta;
}
export declare class ListVerificationAttemptResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listVerificationAttemptResponse?: ListVerificationAttemptListVerificationAttemptResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
