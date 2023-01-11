import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RuntimeAccessConfigAccessTypeEnum {
    RuntimeAccessTypeUnspecified = "RUNTIME_ACCESS_TYPE_UNSPECIFIED",
    SingleUser = "SINGLE_USER",
    ServiceAccount = "SERVICE_ACCOUNT"
}


// RuntimeAccessConfigInput
/** 
 * Specifies the login configuration for Runtime
**/
export class RuntimeAccessConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessType" })
  accessType?: RuntimeAccessConfigAccessTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=runtimeOwner" })
  runtimeOwner?: string;
}


// RuntimeAccessConfig
/** 
 * Specifies the login configuration for Runtime
**/
export class RuntimeAccessConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessType" })
  accessType?: RuntimeAccessConfigAccessTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=proxyUri" })
  proxyUri?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeOwner" })
  runtimeOwner?: string;
}
