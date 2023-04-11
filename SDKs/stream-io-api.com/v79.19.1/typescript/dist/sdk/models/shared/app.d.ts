import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelConfig } from "./channelconfig";
import { Config } from "./config";
import { FileUploadConfig } from "./fileuploadconfig";
import { Policy } from "./policy";
import { PushNotificationFields } from "./pushnotificationfields";
/**
 * Backend implementation used for search
 */
export declare enum AppSearchBackendEnum {
    Elasticsearch = "elasticsearch",
    Postgres = "postgres",
    Disabled = "disabled"
}
export declare class App extends SpeakeasyBase {
    agoraOptions?: Config;
    asyncUrlEnrichEnabled: boolean;
    autoTranslationEnabled?: boolean;
    beforeMessageSendHookUrl?: string;
    campaignEnabled: boolean;
    cdnExpirationSeconds: number;
    /**
     * Object with channel configs
     */
    channelConfigs: Record<string, ChannelConfig>;
    customActionHandlerUrl: string;
    disableAuthChecks: boolean;
    disablePermissionsChecks: boolean;
    enforceUniqueUsernames: string;
    fileUploadConfig: FileUploadConfig;
    grants: Record<string, string[]>;
    hmsOptions?: Config;
    imageModerationEnabled: boolean;
    imageModerationLabels?: string[];
    imageUploadConfig: FileUploadConfig;
    multiTenantEnabled: boolean;
    name: string;
    organization: string;
    permissionVersion: string;
    policies: Record<string, Policy[]>;
    pushNotifications: PushNotificationFields;
    remindersInterval: number;
    revokeTokensIssuedBefore?: Date;
    /**
     * Backend implementation used for search
     */
    searchBackend: AppSearchBackendEnum;
    sqsKey: string;
    sqsSecret: string;
    sqsUrl: string;
    suspended: boolean;
    suspendedExplanation: string;
    userSearchDisallowedRoles: string[];
    videoProvider: string;
    webhookEvents: string[];
    webhookUrl: string;
}
