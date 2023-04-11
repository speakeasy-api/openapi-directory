import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConfigRequestDefaultRoleEnum {
    Attendee = "attendee",
    Publisher = "publisher",
    Subscriber = "subscriber",
    Admin = "admin"
}
export declare class ConfigRequest extends SpeakeasyBase {
    appCertificate: string;
    appId: string;
    defaultRole?: ConfigRequestDefaultRoleEnum;
    roleMap?: Record<string, string>;
}
