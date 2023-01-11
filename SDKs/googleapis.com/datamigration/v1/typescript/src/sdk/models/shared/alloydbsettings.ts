import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserPassword } from "./userpassword";
import { PrimaryInstanceSettings } from "./primaryinstancesettings";
import { UserPasswordInput } from "./userpassword";
import { PrimaryInstanceSettingsInput } from "./primaryinstancesettings";



// AlloyDbSettings
/** 
 * Settings for creating an AlloyDB cluster.
**/
export class AlloyDbSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initialUser" })
  initialUser?: UserPassword;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=primaryInstanceSettings" })
  primaryInstanceSettings?: PrimaryInstanceSettings;

  @SpeakeasyMetadata({ data: "json, name=vpcNetwork" })
  vpcNetwork?: string;
}


// AlloyDbSettingsInput
/** 
 * Settings for creating an AlloyDB cluster.
**/
export class AlloyDbSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initialUser" })
  initialUser?: UserPasswordInput;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=primaryInstanceSettings" })
  primaryInstanceSettings?: PrimaryInstanceSettingsInput;

  @SpeakeasyMetadata({ data: "json, name=vpcNetwork" })
  vpcNetwork?: string;
}
