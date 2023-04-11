import { SpeakeasyBase } from "../../../internal/utils";
import { CallRecordingEnumSourceEnum } from "./callrecordingenumsourceenum";
import { CallRecordingEnumStatusEnum } from "./callrecordingenumstatusenum";
/**
 * Created
 */
export declare class ApiV2010AccountCallCallRecording extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resource.
     */
    accountSid?: string;
    /**
     * The API version used to make the recording.
     */
    apiVersion?: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Recording resource is associated with.
     */
    callSid?: string;
    /**
     * The number of channels in the final recording file.  Can be: `1`, or `2`. Separating a two leg call into two separate channels of the recording file is supported in [Dial](https://www.twilio.com/docs/voice/twiml/dial#attributes-record) and [Outbound Rest API](https://www.twilio.com/docs/voice/make-calls) record options.
     */
    channels?: number;
    /**
     * The Conference SID that identifies the conference associated with the recording, if a conference recording.
     */
    conferenceSid?: string;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that the resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * The length of the recording in seconds.
     */
    duration?: string;
    /**
     * How to decrypt the recording if it was encrypted using [Call Recording Encryption](https://www.twilio.com/docs/voice/tutorials/voice-recording-encryption) feature.
     */
    encryptionDetails?: any;
    /**
     * The error code that describes why the recording is `absent`. The error code is described in our [Error Dictionary](https://www.twilio.com/docs/api/errors). This value is null if the recording `status` is not `absent`.
     */
    errorCode?: number;
    /**
     * The one-time cost of creating the recording in the `price_unit` currency.
     */
    price?: number;
    /**
     * The currency used in the `price` property. Example: `USD`.
     */
    priceUnit?: string;
    /**
     * The unique string that that we created to identify the Recording resource.
     */
    sid?: string;
    source?: CallRecordingEnumSourceEnum;
    /**
     * The start time of the recording in GMT and in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
     */
    startTime?: string;
    status?: CallRecordingEnumStatusEnum;
    /**
     * The recorded track. Can be: `inbound`, `outbound`, or `both`.
     */
    track?: string;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
