import { SpeakeasyBase } from "../../../internal/utils";
import { CmHybridConfig } from "./cmhybridconfig";
import { ThirdPartyOnlyConfig } from "./thirdpartyonlyconfig";
/**
 * Ad server related settings of an advertiser.
 */
export declare class AdvertiserAdServerConfig extends SpeakeasyBase {
    /**
     * Settings for advertisers that use both Campaign Manager 360 (CM360) and third-party ad servers.
     */
    cmHybridConfig?: CmHybridConfig;
    /**
     * Settings for advertisers that use third-party ad servers only.
     */
    thirdPartyOnlyConfig?: ThirdPartyOnlyConfig;
}
