import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * A hash of destinations for this specific alert
 */
export declare class UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations extends SpeakeasyBase {
    /**
     * If true, then all network admins will receive emails for this alert
     */
    allAdmins?: boolean;
    /**
     * A list of emails that will receive information about the alert
     */
    emails?: string[];
    /**
     * A list of HTTP server IDs to send a Webhook to for this alert
     */
    httpServerIds?: string[];
    /**
     * If true, then an SNMP trap will be sent for this alert if there is an SNMP trap server configured for this network
     */
    snmp?: boolean;
}
export declare class UpdateNetworkAlertsSettingsRequestBodyAlerts extends SpeakeasyBase {
    /**
     * A hash of destinations for this specific alert
     */
    alertDestinations?: UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations;
    /**
     * A boolean depicting if the alert is turned on or off
     */
    enabled?: boolean;
    /**
     * A hash of specific configuration data for the alert. Only filters specific to the alert will be updated.
     */
    filters?: Record<string, any>;
    /**
     * The type of alert
     */
    type: string;
}
/**
 * The network-wide destinations for all alerts on the network.
 */
export declare class UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations extends SpeakeasyBase {
    /**
     * If true, then all network admins will receive emails.
     */
    allAdmins?: boolean;
    /**
     * A list of emails that will recieve the alert(s).
     */
    emails?: string[];
    /**
     * A list of HTTP server IDs to send a Webhook to
     */
    httpServerIds?: string[];
    /**
     * If true, then an SNMP trap will be sent if there is an SNMP trap server configured for this network.
     */
    snmp?: boolean;
}
export declare class UpdateNetworkAlertsSettingsRequestBody extends SpeakeasyBase {
    /**
     * Alert-specific configuration for each type. Only alerts that pertain to the network can be updated.
     */
    alerts?: UpdateNetworkAlertsSettingsRequestBodyAlerts[];
    /**
     * The network-wide destinations for all alerts on the network.
     */
    defaultDestinations?: UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations;
}
export declare class UpdateNetworkAlertsSettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkAlertsSettingsRequestBody;
    networkId: string;
}
export declare class UpdateNetworkAlertsSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkAlertsSettings200ApplicationJSONObject?: Record<string, any>;
}
