import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The uplink observed for the alert.  interface must be one of the following: wan1, wan2, cellular
 */
export declare enum CreateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum {
    Cellular = "cellular",
    Wan1 = "wan1",
    Wan2 = "wan2"
}
/**
 * The conditions that determine if the alert triggers
 */
export declare class CreateOrganizationAlertsProfileRequestBodyAlertCondition extends SpeakeasyBase {
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
    interface?: CreateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum;
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
export declare class CreateOrganizationAlertsProfileRequestBodyRecipients extends SpeakeasyBase {
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
export declare enum CreateOrganizationAlertsProfileRequestBodyTypeEnum {
    AppOutage = "appOutage",
    VoipJitter = "voipJitter",
    VoipMos = "voipMos",
    VoipPacketLoss = "voipPacketLoss",
    WanLatency = "wanLatency",
    WanPacketLoss = "wanPacketLoss",
    WanStatus = "wanStatus",
    WanUtilization = "wanUtilization"
}
export declare class CreateOrganizationAlertsProfileRequestBody extends SpeakeasyBase {
    /**
     * The conditions that determine if the alert triggers
     */
    alertCondition: CreateOrganizationAlertsProfileRequestBodyAlertCondition;
    /**
     * User supplied description of the alert
     */
    description?: string;
    /**
     * Networks with these tags will be monitored for the alert
     */
    networkTags: string[];
    /**
     * List of recipients that will recieve the alert.
     */
    recipients: CreateOrganizationAlertsProfileRequestBodyRecipients;
    /**
     * The alert type
     */
    type: CreateOrganizationAlertsProfileRequestBodyTypeEnum;
}
export declare class CreateOrganizationAlertsProfileRequest extends SpeakeasyBase {
    requestBody: CreateOrganizationAlertsProfileRequestBody;
    organizationId: string;
}
export declare class CreateOrganizationAlertsProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationAlertsProfile201ApplicationJSONObject?: Record<string, any>;
}
