import { SpeakeasyBase } from "../../../internal/utils";
import { AccessKeyCredentials } from "./accesskeycredentials";
import { Status } from "./status";
import { Tag } from "./tag";
/**
 * Output only. State of the source as determined by the health check.
 */
export declare enum AwsSourceDetailsStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Failed = "FAILED",
    Active = "ACTIVE"
}
/**
 * AwsSourceDetails message describes a specific source details for the AWS source type.
 */
export declare class AwsSourceDetails extends SpeakeasyBase {
    /**
     * Message describing AWS Credentials using access key id and secret.
     */
    accessKeyCreds?: AccessKeyCredentials;
    /**
     * Immutable. The AWS region that the source VMs will be migrated from.
     */
    awsRegion?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * AWS security group names to limit the scope of the source inventory.
     */
    inventorySecurityGroupNames?: string[];
    /**
     * AWS resource tags to limit the scope of the source inventory.
     */
    inventoryTagList?: Tag[];
    /**
     * User specified tags to add to every M2VM generated resource in AWS. These tags will be set in addition to the default tags that are set as part of the migration process. The tags must not begin with the reserved prefix `m2vm`.
     */
    migrationResourcesUserTags?: Record<string, string>;
    /**
     * Output only. The source's public IP. All communication initiated by this source will originate from this IP.
     */
    publicIp?: string;
    /**
     * Output only. State of the source as determined by the health check.
     */
    state?: AwsSourceDetailsStateEnum;
}
/**
 * AwsSourceDetails message describes a specific source details for the AWS source type.
 */
export declare class AwsSourceDetailsInput extends SpeakeasyBase {
    /**
     * Message describing AWS Credentials using access key id and secret.
     */
    accessKeyCreds?: AccessKeyCredentials;
    /**
     * Immutable. The AWS region that the source VMs will be migrated from.
     */
    awsRegion?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * AWS security group names to limit the scope of the source inventory.
     */
    inventorySecurityGroupNames?: string[];
    /**
     * AWS resource tags to limit the scope of the source inventory.
     */
    inventoryTagList?: Tag[];
    /**
     * User specified tags to add to every M2VM generated resource in AWS. These tags will be set in addition to the default tags that are set as part of the migration process. The tags must not begin with the reserved prefix `m2vm`.
     */
    migrationResourcesUserTags?: Record<string, string>;
}
