import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SoftwareConfig
/** 
 * Specifies the selection and configuration of software inside the environment.
**/
export class SoftwareConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=airflowConfigOverrides" })
  airflowConfigOverrides?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=envVariables" })
  envVariables?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=imageVersion" })
  imageVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=pypiPackages" })
  pypiPackages?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=pythonVersion" })
  pythonVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=schedulerCount" })
  schedulerCount?: number;
}
