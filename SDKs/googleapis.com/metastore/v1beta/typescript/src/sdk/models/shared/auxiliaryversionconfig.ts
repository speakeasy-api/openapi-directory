import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkConfig } from "./networkconfig";
import { NetworkConfigInput } from "./networkconfig";



export class AuxiliaryVersionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configOverrides" })
  configOverrides?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class AuxiliaryVersionConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configOverrides" })
  configOverrides?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfigInput;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
