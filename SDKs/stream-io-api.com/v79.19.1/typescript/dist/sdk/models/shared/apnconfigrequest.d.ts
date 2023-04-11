import { SpeakeasyBase } from "../../../internal/utils";
export declare enum APNConfigRequestAuthTypeEnum {
    Certificate = "certificate",
    Token = "token"
}
export declare class APNConfigRequest extends SpeakeasyBase {
    disabled?: boolean;
    authKey?: string;
    authType?: APNConfigRequestAuthTypeEnum;
    bundleId?: string;
    development?: boolean;
    host?: string;
    keyId?: string;
    notificationTemplate?: string;
    p12Cert?: string;
    teamId?: string;
}
