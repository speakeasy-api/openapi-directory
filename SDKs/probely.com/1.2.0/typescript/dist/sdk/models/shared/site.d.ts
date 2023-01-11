import { SpeakeasyBase } from "../../../internal/utils";
import { BasicAuth } from "./basicauth";
import { ChangedBy } from "./changedby";
import { Cookies } from "./cookies";
import { FormLogin } from "./formlogin";
import { Headers } from "./headers";
import { VerificationMethodEnum } from "./verificationmethodenum";
/**
 * Main resource associated with a target
**/
export declare class Site extends SpeakeasyBase {
    basicAuth?: BasicAuth;
    changed?: Date;
    changedBy?: ChangedBy;
    cookies?: Cookies[];
    desc?: string;
    formLogin?: FormLogin[];
    formLoginCheckPattern?: string;
    formLoginUrl?: string;
    hasBasicAuth?: boolean;
    hasFormLogin?: boolean;
    headers?: Headers[];
    host?: string;
    id?: string;
    name?: string;
    stack?: string[];
    url?: string;
    verificationDate?: Date;
    verificationLastError?: string;
    verificationMethod?: VerificationMethodEnum;
    verificationToken?: string;
    verified?: boolean;
    whitelist?: string[];
}
/**
 * Main resource associated with a target
**/
export declare class SiteInput extends SpeakeasyBase {
    basicAuth?: BasicAuth;
    cookies?: Cookies[];
    desc?: string;
    formLogin?: FormLogin[];
    formLoginCheckPattern?: string;
    formLoginUrl?: string;
    hasBasicAuth?: boolean;
    hasFormLogin?: boolean;
    headers?: Headers[];
    name?: string;
    url?: string;
    whitelist?: string[];
}
