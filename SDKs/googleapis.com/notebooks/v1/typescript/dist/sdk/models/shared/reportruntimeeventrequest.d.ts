import { SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";
/**
 * Request for reporting a Managed Notebook Event.
 */
export declare class ReportRuntimeEventRequest extends SpeakeasyBase {
    /**
     * The definition of an Event for a managed / semi-managed notebook instance.
     */
    event?: Event;
    /**
     * Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity
     */
    vmId?: string;
}
