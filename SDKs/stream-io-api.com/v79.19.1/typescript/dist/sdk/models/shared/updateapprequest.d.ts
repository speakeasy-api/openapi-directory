import { SpeakeasyBase } from "../../../internal/utils";
import { APNConfigRequest } from "./apnconfigrequest";
import { AsyncModerationConfigurationRequest } from "./asyncmoderationconfigurationrequest";
import { ConfigRequest } from "./configrequest";
import { FileUploadConfigRequest } from "./fileuploadconfigrequest";
import { FirebaseConfigRequest } from "./firebaseconfigrequest";
import { HuaweiConfigRequest } from "./huaweiconfigrequest";
import { PushConfigRequest } from "./pushconfigrequest";
import { XiaomiConfigRequest } from "./xiaomiconfigrequest";
export declare enum UpdateAppRequestEnforceUniqueUsernamesEnum {
    No = "no",
    App = "app",
    Team = "team"
}
export declare enum UpdateAppRequestPermissionVersionEnum {
    V1 = "v1",
    V2 = "v2"
}
export declare enum UpdateAppRequestVideoProviderEnum {
    Agora = "agora",
    Hms = "hms"
}
export declare class UpdateAppRequest extends SpeakeasyBase {
    agoraOptions?: ConfigRequest;
    apnConfig?: APNConfigRequest;
    asyncModerationConfig?: AsyncModerationConfigurationRequest;
    asyncUrlEnrichEnabled?: boolean;
    autoTranslationEnabled?: boolean;
    beforeMessageSendHookUrl?: string;
    cdnExpirationSeconds?: number;
    channelHideMembersOnly?: boolean;
    customActionHandlerUrl?: string;
    disableAuthChecks?: boolean;
    disablePermissionsChecks?: boolean;
    enforceUniqueUsernames?: UpdateAppRequestEnforceUniqueUsernamesEnum;
    fileUploadConfig?: FileUploadConfigRequest;
    firebaseConfig?: FirebaseConfigRequest;
    grants?: Record<string, string[]>;
    hmsOptions?: ConfigRequest;
    huaweiConfig?: HuaweiConfigRequest;
    imageModerationBlockLabels?: string[];
    imageModerationEnabled?: boolean;
    imageModerationLabels?: string[];
    imageUploadConfig?: FileUploadConfigRequest;
    migratePermissionsToV2?: boolean;
    multiTenantEnabled?: boolean;
    permissionVersion?: UpdateAppRequestPermissionVersionEnum;
    pushConfig?: PushConfigRequest;
    remindersInterval?: number;
    revokeTokensIssuedBefore?: Date;
    sqsKey?: string;
    sqsSecret?: string;
    sqsUrl?: string;
    userSearchDisallowedRoles?: string[];
    videoProvider?: UpdateAppRequestVideoProviderEnum;
    webhookEvents?: string[];
    webhookUrl?: string;
    xiaomiConfig?: XiaomiConfigRequest;
}
