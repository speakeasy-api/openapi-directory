import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.
 */
export declare class GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall extends SpeakeasyBase {
    /**
     * Transfer the call to a phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164).
     */
    phoneNumber?: string;
    /**
     * Transfer the call to a SIP endpoint.
     */
    sipUri?: string;
}
