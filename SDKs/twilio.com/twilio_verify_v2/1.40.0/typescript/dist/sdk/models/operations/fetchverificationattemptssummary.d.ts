import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchVerificationAttemptsSummaryServerList: readonly ["https://verify.twilio.com"];
export declare class FetchVerificationAttemptsSummarySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchVerificationAttemptsSummaryRequest extends SpeakeasyBase {
    /**
     * Filter Verification Attempts considered on the summary aggregation by communication channel. Valid values are `SMS` and `CALL`
     */
    channel?: shared.VerificationAttemptsSummaryEnumChannelsEnum;
    /**
     * Filter used to consider only Verification Attempts sent to the specified destination country on the summary aggregation.
     */
    country?: string;
    /**
     * Datetime filter used to consider only Verification Attempts created after this datetime on the summary aggregation. Given as GMT in RFC 2822 format.
     */
    dateCreatedAfter?: Date;
    /**
     * Datetime filter used to consider only Verification Attempts created before this datetime on the summary aggregation. Given as GMT in RFC 2822 format.
     */
    dateCreatedBefore?: Date;
    /**
     * Filter the Verification Attempts considered on the summary aggregation by Destination prefix. It is the prefix of a phone number in E.164 format.
     */
    destinationPrefix?: string;
    /**
     * Filter used to consider only Verification Attempts of the given verify service on the summary aggregation.
     */
    verifyServiceSid?: string;
}
export declare class FetchVerificationAttemptsSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifyV2VerificationAttemptsSummary?: shared.VerifyV2VerificationAttemptsSummary;
}
