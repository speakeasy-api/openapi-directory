import { SpeakeasyBase } from "../../../internal/utils";
export declare class PushProvider extends SpeakeasyBase {
    apnAuthKey?: string;
    apnAuthType?: string;
    apnDevelopment?: boolean;
    apnHost?: string;
    apnKeyId?: string;
    apnNotificationTemplate?: string;
    apnP12Cert?: string;
    apnTeamId?: string;
    apnTopic?: string;
    createdAt: Date;
    description?: string;
    disabledAt?: Date;
    disabledReason?: string;
    firebaseApnTemplate?: string;
    firebaseCredentials?: string;
    firebaseDataTemplate?: string;
    firebaseNotificationTemplate?: string;
    firebaseServerKey?: string;
    huaweiAppId?: string;
    huaweiAppSecret?: string;
    name: string;
    type: number;
    updatedAt: Date;
    xiaomiAppSecret?: string;
    xiaomiPackageName?: string;
}
