import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class IpMessagingV2Service extends SpeakeasyBase {
    accountSid?: string;
    consumptionReportInterval?: number;
    dateCreated?: Date;
    dateUpdated?: Date;
    defaultChannelCreatorRoleSid?: string;
    defaultChannelRoleSid?: string;
    defaultServiceRoleSid?: string;
    friendlyName?: string;
    limits?: any;
    links?: Record<string, any>;
    media?: any;
    notifications?: any;
    postWebhookRetryCount?: number;
    postWebhookUrl?: string;
    preWebhookRetryCount?: number;
    preWebhookUrl?: string;
    reachabilityEnabled?: boolean;
    readStatusEnabled?: boolean;
    sid?: string;
    typingIndicatorTimeout?: number;
    url?: string;
    webhookFilters?: string[];
    webhookMethod?: string;
}
