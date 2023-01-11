import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessKeyCredentials } from "./accesskeycredentials";
import { Status } from "./status";
import { Tag } from "./tag";


export enum AwsSourceDetailsStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Failed = "FAILED",
    Active = "ACTIVE"
}


// AwsSourceDetails
/** 
 * AwsSourceDetails message describes a specific source details for the AWS source type.
**/
export class AwsSourceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKeyCreds" })
  accessKeyCreds?: AccessKeyCredentials;

  @SpeakeasyMetadata({ data: "json, name=accessKeyId" })
  accessKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=inventorySecurityGroupNames" })
  inventorySecurityGroupNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=inventoryTagList", elemType: Tag })
  inventoryTagList?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=inventoryTags" })
  inventoryTags?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=migrationResourcesUserTags" })
  migrationResourcesUserTags?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=publicIp" })
  publicIp?: string;

  @SpeakeasyMetadata({ data: "json, name=secretAccessKey" })
  secretAccessKey?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: AwsSourceDetailsStateEnum;
}


// AwsSourceDetailsInput
/** 
 * AwsSourceDetails message describes a specific source details for the AWS source type.
**/
export class AwsSourceDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKeyCreds" })
  accessKeyCreds?: AccessKeyCredentials;

  @SpeakeasyMetadata({ data: "json, name=accessKeyId" })
  accessKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=inventorySecurityGroupNames" })
  inventorySecurityGroupNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=inventoryTagList", elemType: Tag })
  inventoryTagList?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=inventoryTags" })
  inventoryTags?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=migrationResourcesUserTags" })
  migrationResourcesUserTags?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=secretAccessKey" })
  secretAccessKey?: string;
}
