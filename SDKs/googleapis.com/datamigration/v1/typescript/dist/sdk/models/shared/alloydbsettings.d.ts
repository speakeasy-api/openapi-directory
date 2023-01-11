import { SpeakeasyBase } from "../../../internal/utils";
import { UserPassword } from "./userpassword";
import { PrimaryInstanceSettings } from "./primaryinstancesettings";
import { UserPasswordInput } from "./userpassword";
import { PrimaryInstanceSettingsInput } from "./primaryinstancesettings";
/**
 * Settings for creating an AlloyDB cluster.
**/
export declare class AlloyDbSettings extends SpeakeasyBase {
    initialUser?: UserPassword;
    labels?: Record<string, string>;
    primaryInstanceSettings?: PrimaryInstanceSettings;
    vpcNetwork?: string;
}
/**
 * Settings for creating an AlloyDB cluster.
**/
export declare class AlloyDbSettingsInput extends SpeakeasyBase {
    initialUser?: UserPasswordInput;
    labels?: Record<string, string>;
    primaryInstanceSettings?: PrimaryInstanceSettingsInput;
    vpcNetwork?: string;
}
