import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An alert metadata.
 */
export declare class AlertMetadata extends SpeakeasyBase {
    /**
     * Output only. The alert identifier.
     */
    alertId?: string;
    /**
     * The email address of the user assigned to the alert.
     */
    assignee?: string;
    /**
     * Output only. The unique identifier of the Google Workspace account of the customer.
     */
    customerId?: string;
    /**
     * Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert metadata from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform metadata updates in order to avoid race conditions: An `etag` is returned in the response which contains alert metadata, and systems are expected to put that etag in the request to update alert metadata to ensure that their change will be applied to the same version of the alert metadata. If no `etag` is provided in the call to update alert metadata, then the existing alert metadata is overwritten blindly.
     */
    etag?: string;
    /**
     * The severity value of the alert. Alert Center will set this field at alert creation time, default's to an empty string when it could not be determined. The supported values for update actions on this field are the following: * HIGH * MEDIUM * LOW
     */
    severity?: string;
    /**
     * The current status of the alert. The supported values are the following: * NOT_STARTED * IN_PROGRESS * CLOSED
     */
    status?: string;
    /**
     * Output only. The time this metadata was last updated.
     */
    updateTime?: string;
}
