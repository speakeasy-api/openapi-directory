import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for notebook instances to report information to Notebooks API.
 */
export declare class ReportInstanceInfoRequest extends SpeakeasyBase {
    /**
     * The metadata reported to Notebooks API. This will be merged to the instance metadata store
     */
    metadata?: Record<string, string>;
    /**
     * Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity
     */
    vmId?: string;
}
