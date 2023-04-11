import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConfigDefaultRoleEnum {
    Attendee = "attendee",
    Publisher = "publisher",
    Subscriber = "subscriber",
    Admin = "admin"
}
export declare class Config extends SpeakeasyBase {
    appCertificate: string;
    appId: string;
    defaultRole?: ConfigDefaultRoleEnum;
    roleMap?: Record<string, string>;
}
