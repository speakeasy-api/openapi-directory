import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkAlertsHistoryRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    networkId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.
     */
    perPage?: number;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
}
/**
 * email destinations for this alert
 */
export declare class GetNetworkAlertsHistory200ApplicationJSONDestinationsEmail extends SpeakeasyBase {
    /**
     * time when the alert was sent to the user(s) for this channel
     */
    sentAt?: string;
}
/**
 * push destinations for this alert
 */
export declare class GetNetworkAlertsHistory200ApplicationJSONDestinationsPush extends SpeakeasyBase {
    /**
     * time when the alert was sent to the user(s) for this channel
     */
    sentAt?: string;
}
/**
 * sms destinations for this alert
 */
export declare class GetNetworkAlertsHistory200ApplicationJSONDestinationsSms extends SpeakeasyBase {
    /**
     * time when the alert was sent to the user(s) for this channel
     */
    sentAt?: string;
}
/**
 * webhook destinations for this alert
 */
export declare class GetNetworkAlertsHistory200ApplicationJSONDestinationsWebhook extends SpeakeasyBase {
    /**
     * time when the alert was sent to the user(s) for this channel
     */
    sentAt?: string;
}
/**
 * the destinations this alert is configured to be delivered to
 */
export declare class GetNetworkAlertsHistory200ApplicationJSONDestinations extends SpeakeasyBase {
    /**
     * email destinations for this alert
     */
    email?: GetNetworkAlertsHistory200ApplicationJSONDestinationsEmail;
    /**
     * push destinations for this alert
     */
    push?: GetNetworkAlertsHistory200ApplicationJSONDestinationsPush;
    /**
     * sms destinations for this alert
     */
    sms?: GetNetworkAlertsHistory200ApplicationJSONDestinationsSms;
    /**
     * webhook destinations for this alert
     */
    webhook?: GetNetworkAlertsHistory200ApplicationJSONDestinationsWebhook;
}
/**
 * info related to the device that caused the alert
 */
export declare class GetNetworkAlertsHistory200ApplicationJSONDevice extends SpeakeasyBase {
    /**
     * device serial
     */
    serial?: string;
}
export declare class GetNetworkAlertsHistory200ApplicationJSON extends SpeakeasyBase {
    /**
     * relevant data about the event that caused the alert
     */
    alertData?: Record<string, any>;
    /**
     * user friendly alert type
     */
    alertType?: string;
    /**
     * type of alert
     */
    alertTypeId?: string;
    /**
     * the destinations this alert is configured to be delivered to
     */
    destinations?: GetNetworkAlertsHistory200ApplicationJSONDestinations;
    /**
     * info related to the device that caused the alert
     */
    device?: GetNetworkAlertsHistory200ApplicationJSONDevice;
    /**
     * time when the event occurred
     */
    occurredAt?: string;
}
export declare class GetNetworkAlertsHistoryResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkAlertsHistory200ApplicationJSONObjects?: GetNetworkAlertsHistory200ApplicationJSON[];
}
