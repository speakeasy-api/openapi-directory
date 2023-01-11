import { SpeakeasyBase } from "../../../internal/utils";
import { ChangedBy } from "./changedby";
import { Cookies } from "./cookies";
import { Headers } from "./headers";
import { VerificationMethodEnum } from "./verificationmethodenum";
/**
 * Secondary domain of a target
**/
export declare class Asset extends SpeakeasyBase {
    changed?: Date;
    changedBy?: ChangedBy;
    cookies?: Cookies[];
    desc?: string;
    headers?: Headers[];
    host?: string;
    id?: string;
    include?: boolean;
    name?: string;
    stack?: string[];
    verificationDate?: Date;
    verificationLastError?: string;
    verificationMethod?: VerificationMethodEnum;
    verificationToken?: string;
    verified?: boolean;
}
/**
 * Secondary domain of a target
**/
export declare class AssetInput extends SpeakeasyBase {
    cookies?: Cookies[];
    desc?: string;
    headers?: Headers[];
    host?: string;
    include?: boolean;
    name?: string;
}
