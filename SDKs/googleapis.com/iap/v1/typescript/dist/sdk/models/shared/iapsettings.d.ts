import { SpeakeasyBase } from "../../../internal/utils";
import { AccessSettings } from "./accesssettings";
import { ApplicationSettings } from "./applicationsettings";
/**
 * The IAP configurable settings.
 */
export declare class IapSettings extends SpeakeasyBase {
    /**
     * Access related settings for IAP protected apps.
     */
    accessSettings?: AccessSettings;
    /**
     * Wrapper over application specific settings for IAP.
     */
    applicationSettings?: ApplicationSettings;
    /**
     * Required. The resource name of the IAP protected resource.
     */
    name?: string;
}
