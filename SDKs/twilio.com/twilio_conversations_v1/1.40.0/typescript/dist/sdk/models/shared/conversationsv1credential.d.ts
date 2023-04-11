import { SpeakeasyBase } from "../../../internal/utils";
import { CredentialEnumPushTypeEnum } from "./credentialenumpushtypeenum";
/**
 * Created
 */
export declare class ConversationsV1Credential extends SpeakeasyBase {
    /**
     * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this credential.
     */
    accountSid?: string;
    /**
     * The date that this resource was created.
     */
    dateCreated?: Date;
    /**
     * The date that this resource was last updated.
     */
    dateUpdated?: Date;
    /**
     * The human-readable name of this credential, limited to 64 characters. Optional.
     */
    friendlyName?: string;
    /**
     * [APN only] Whether to send the credential to sandbox APNs. Can be `true` to send to sandbox APNs or `false` to send to production.
     */
    sandbox?: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    type?: CredentialEnumPushTypeEnum;
    /**
     * An absolute API resource URL for this credential.
     */
    url?: string;
}
