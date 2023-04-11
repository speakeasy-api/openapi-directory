import { SpeakeasyBase } from "../../../internal/utils";
import { RecordingTranscriptionEnumStatusEnum } from "./recordingtranscriptionenumstatusenum";
/**
 * OK
 */
export declare class ApiV2010AccountRecordingRecordingTranscription extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resource.
     */
    accountSid?: string;
    /**
     * The API version used to create the transcription.
     */
    apiVersion?: string;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * The duration of the transcribed audio in seconds.
     */
    duration?: string;
    /**
     * The charge for the transcript in the currency associated with the account. This value is populated after the transcript is complete so it may not be available immediately.
     */
    price?: number;
    /**
     * The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
     */
    priceUnit?: string;
    /**
     * The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) from which the transcription was created.
     */
    recordingSid?: string;
    /**
     * The unique string that that we created to identify the Transcription resource.
     */
    sid?: string;
    status?: RecordingTranscriptionEnumStatusEnum;
    /**
     * The text content of the transcription.
     */
    transcriptionText?: string;
    /**
     * The transcription type.
     */
    type?: string;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
