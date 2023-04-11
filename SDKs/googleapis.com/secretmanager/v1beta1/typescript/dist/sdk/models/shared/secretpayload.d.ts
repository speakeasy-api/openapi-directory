import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A secret payload resource in the Secret Manager API. This contains the sensitive secret data that is associated with a SecretVersion.
 */
export declare class SecretPayload extends SpeakeasyBase {
    /**
     * The secret data. Must be no larger than 64KiB.
     */
    data?: string;
}
