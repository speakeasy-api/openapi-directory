import { SpeakeasyBase } from "../../../internal/utils";
import { AccessKeyCredentials } from "./accesskeycredentials";
import { Status } from "./status";
import { Tag } from "./tag";
export declare enum AwsSourceDetailsStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Failed = "FAILED",
    Active = "ACTIVE"
}
/**
 * AwsSourceDetails message describes a specific source details for the AWS source type.
**/
export declare class AwsSourceDetails extends SpeakeasyBase {
    accessKeyCreds?: AccessKeyCredentials;
    accessKeyId?: string;
    awsRegion?: string;
    error?: Status;
    inventorySecurityGroupNames?: string[];
    inventoryTagList?: Tag[];
    inventoryTags?: Record<string, string>;
    migrationResourcesUserTags?: Record<string, string>;
    publicIp?: string;
    secretAccessKey?: string;
    state?: AwsSourceDetailsStateEnum;
}
/**
 * AwsSourceDetails message describes a specific source details for the AWS source type.
**/
export declare class AwsSourceDetailsInput extends SpeakeasyBase {
    accessKeyCreds?: AccessKeyCredentials;
    accessKeyId?: string;
    awsRegion?: string;
    error?: Status;
    inventorySecurityGroupNames?: string[];
    inventoryTagList?: Tag[];
    inventoryTags?: Record<string, string>;
    migrationResourcesUserTags?: Record<string, string>;
    secretAccessKey?: string;
}
