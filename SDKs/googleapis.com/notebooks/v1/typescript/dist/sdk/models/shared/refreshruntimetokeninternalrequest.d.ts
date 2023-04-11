import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for getting a new access token.
 */
export declare class RefreshRuntimeTokenInternalRequest extends SpeakeasyBase {
    /**
     * Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity
     */
    vmId?: string;
}
