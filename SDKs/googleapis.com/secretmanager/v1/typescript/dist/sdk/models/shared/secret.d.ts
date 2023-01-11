import { SpeakeasyBase } from "../../../internal/utils";
import { Replication } from "./replication";
import { Rotation } from "./rotation";
import { Topic } from "./topic";
/**
 * A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
**/
export declare class SecretInput extends SpeakeasyBase {
    annotations?: Record<string, string>;
    etag?: string;
    expireTime?: string;
    labels?: Record<string, string>;
    replication?: Replication;
    rotation?: Rotation;
    topics?: Topic[];
    ttl?: string;
    versionAliases?: Record<string, string>;
}
/**
 * A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
**/
export declare class Secret extends SpeakeasyBase {
    annotations?: Record<string, string>;
    createTime?: string;
    etag?: string;
    expireTime?: string;
    labels?: Record<string, string>;
    name?: string;
    replication?: Replication;
    rotation?: Rotation;
    topics?: Topic[];
    ttl?: string;
    versionAliases?: Record<string, string>;
}
