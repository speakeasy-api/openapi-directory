import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The uplink observed for the alert.  interface must be one of the following: wan1, wan2, cellular
 */
export declare enum UpdateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum {
    Cellular = "cellular",
    Wan1 = "wan1",
    Wan2 = "wan2"
}
/**
 * The conditions that determine if the alert triggers
 */
export declare class UpdateOrganizationAlertsProfileRequestBodyAlertCondition extends SpeakeasyBase {
    /**
     * The threshold the metric must cross to be valid for alerting. Used only for WAN Utilization alerts.
     */
    bitRateBps?: number;
    /**
     * The total duration in seconds that the threshold should be crossed before alerting
     */
    duration?: number;
    /**
     * The uplink observed for the alert.  interface must be one of the following: wan1, wan2, cellular
     */
    interface?: UpdateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum;
    /**
     * The threshold the metric must cross to be valid for alerting. Used only for VoIP Jitter alerts.
     */
    jitterMs?: number;
    /**
     * The threshold the metric must cross to be valid for alerting. Used only for WAN Latency alerts.
     */
    latencyMs?: number;
    /**
     * The threshold the metric must cross to be valid for alerting. Used only for Packet Loss alerts.
     */
    lossRatio?: number;
    /**
     * The threshold the metric must drop below to be valid for alerting. Used only for VoIP MOS alerts.
     */
    mos?: number;
    /**
     * The look back period in seconds for sensing the alert
     */
    window?: number;
}
/**
 * List of recipients that will recieve the alert.
 */
export declare class UpdateOrganizationAlertsProfileRequestBodyRecipients extends SpeakeasyBase {
    /**
     * A list of emails that will receive information about the alert
     */
    emails?: string[];
    /**
     * A list base64 encoded urls of webhook endpoints that will receive information about the alert
     */
    httpServerIds?: string[];
}
/**
 * The alert type
 */
export declare enum UpdateOrganizationAlertsProfileRequestBodyTypeEnum {
    AppOutage = "appOutage",
    VoipJitter = "voipJitter",
    VoipMos = "voipMos",
    VoipPacketLoss = "voipPacketLoss",
    WanLatency = "wanLatency",
    WanPacketLoss = "wanPacketLoss",
    WanStatus = "wanStatus",
    WanUtilization = "wanUtilization"
}
export declare class UpdateOrganizationAlertsProfileRequestBody extends SpeakeasyBase {
    /**
     * The conditions that determine if the alert triggers
     */
    alertCondition?: UpdateOrganizationAlertsProfileRequestBodyAlertCondition;
    /**
     * User supplied description of the alert
     */
    description?: string;
    /**
     * Is the alert config enabled
     */
    enabled?: boolean;
    /**
     * Networks with these tags will be monitored for the alert
     */
    networkTags?: string[];
    /**
     * List of recipients that will recieve the alert.
     */
    recipients?: UpdateOrganizationAlertsProfileRequestBodyRecipients;
    /**
     * The alert type
     */
    type?: UpdateOrganizationAlertsProfileRequestBodyTypeEnum;
}
export declare class UpdateOrganizationAlertsProfileRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationAlertsProfileRequestBody;
    alertConfigId: string;
    organizationId: string;
}
export declare class UpdateOrganizationAlertsProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationAlertsProfile200ApplicationJSONObject?: Record<string, any>;
}
