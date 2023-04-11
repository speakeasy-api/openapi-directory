import { SpeakeasyBase } from "../../../internal/utils";
import { AlertMetadata } from "./alertmetadata";
/**
 * An alert affecting a customer.
 */
export declare class Alert extends SpeakeasyBase {
    /**
     * Output only. The unique identifier for the alert.
     */
    alertId?: string;
    /**
     * Output only. The time this alert was created.
     */
    createTime?: string;
    /**
     * Output only. The unique identifier of the Google Workspace account of the customer.
     */
    customerId?: string;
    /**
     * Optional. The data associated with this alert, for example google.apps.alertcenter.type.DeviceCompromised.
     */
    data?: Record<string, any>;
    /**
     * Output only. `True` if this alert is marked for deletion.
     */
    deleted?: boolean;
    /**
     * Optional. The time the event that caused this alert ceased being active. If provided, the end time must not be earlier than the start time. If not provided, it indicates an ongoing alert.
     */
    endTime?: string;
    /**
     * Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform alert updates in order to avoid race conditions: An `etag` is returned in the response which contains alerts, and systems are expected to put that etag in the request to update alert to ensure that their change will be applied to the same version of the alert. If no `etag` is provided in the call to update alert, then the existing alert is overwritten blindly.
     */
    etag?: string;
    /**
     * An alert metadata.
     */
    metadata?: AlertMetadata;
    /**
     * Output only. An optional [Security Investigation Tool](https://support.google.com/a/answer/7575955) query for this alert.
     */
    securityInvestigationToolLink?: string;
    /**
     * Required. A unique identifier for the system that reported the alert. This is output only after alert is created. Supported sources are any of the following: * Google Operations * Mobile device management * Gmail phishing * Data Loss Prevention * Domain wide takeout * State sponsored attack * Google identity * Apps outage
     */
    source?: string;
    /**
     * Required. The time the event that caused this alert was started or detected.
     */
    startTime?: string;
    /**
     * Required. The type of the alert. This is output only after alert is created. For a list of available alert types see [Google Workspace Alert types](https://developers.google.com/admin-sdk/alertcenter/reference/alert-types).
     */
    type?: string;
    /**
     * Output only. The time this alert was last updated.
     */
    updateTime?: string;
}
