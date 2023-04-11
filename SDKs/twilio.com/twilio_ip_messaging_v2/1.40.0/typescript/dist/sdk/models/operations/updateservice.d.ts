import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateServiceServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class UpdateServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare enum UpdateServiceUpdateServiceRequestWebhookMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
    consumptionReportInterval?: number;
    defaultChannelCreatorRoleSid?: string;
    defaultChannelRoleSid?: string;
    defaultServiceRoleSid?: string;
    friendlyName?: string;
    limitsChannelMembers?: number;
    limitsUserChannels?: number;
    mediaCompatibilityMessage?: string;
    notificationsAddedToChannelEnabled?: boolean;
    notificationsAddedToChannelSound?: string;
    notificationsAddedToChannelTemplate?: string;
    notificationsInvitedToChannelEnabled?: boolean;
    notificationsInvitedToChannelSound?: string;
    notificationsInvitedToChannelTemplate?: string;
    notificationsLogEnabled?: boolean;
    notificationsNewMessageBadgeCountEnabled?: boolean;
    notificationsNewMessageEnabled?: boolean;
    notificationsNewMessageSound?: string;
    notificationsNewMessageTemplate?: string;
    notificationsRemovedFromChannelEnabled?: boolean;
    notificationsRemovedFromChannelSound?: string;
    notificationsRemovedFromChannelTemplate?: string;
    postWebhookRetryCount?: number;
    postWebhookUrl?: string;
    preWebhookRetryCount?: number;
    preWebhookUrl?: string;
    reachabilityEnabled?: boolean;
    readStatusEnabled?: boolean;
    typingIndicatorTimeout?: number;
    webhookFilters?: string[];
    webhookMethod?: UpdateServiceUpdateServiceRequestWebhookMethodEnum;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    requestBody?: UpdateServiceUpdateServiceRequest;
    sid: string;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ipMessagingV2Service?: shared.IpMessagingV2Service;
}
