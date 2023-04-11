import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Transfers the call in Telephony Gateway.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall extends SpeakeasyBase {
    /**
     * Required. The phone number to transfer the call to in [E.164 format](https://en.wikipedia.org/wiki/E.164). We currently only allow transferring to US numbers (+1xxxyyyzzzz).
     */
    phoneNumber?: string;
}
