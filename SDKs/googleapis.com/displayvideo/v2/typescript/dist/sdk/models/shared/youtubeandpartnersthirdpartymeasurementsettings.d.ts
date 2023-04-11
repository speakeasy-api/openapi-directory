import { SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyVendorConfig } from "./thirdpartyvendorconfig";
/**
 * Settings that control what third-party vendors are measuring specific line item metrics.
 */
export declare class YoutubeAndPartnersThirdPartyMeasurementSettings extends SpeakeasyBase {
    /**
     * The third-party vendors measuring brand lift. The following third-party vendors are applicable: * `THIRD_PARTY_VENDOR_DYNATA` * `THIRD_PARTY_VENDOR_KANTAR`
     */
    brandLiftVendorConfigs?: ThirdPartyVendorConfig[];
    /**
     * The third-party vendors measuring brand safety. The following third-party vendors are applicable: * `THIRD_PARTY_VENDOR_ZERF` * `THIRD_PARTY_VENDOR_DOUBLE_VERIFY` * `THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE`
     */
    brandSafetyVendorConfigs?: ThirdPartyVendorConfig[];
    /**
     * The third-party vendors measuring reach. The following third-party vendors are applicable: * `THIRD_PARTY_VENDOR_NIELSEN` * `THIRD_PARTY_VENDOR_COMSCORE` * `THIRD_PARTY_VENDOR_KANTAR`
     */
    reachVendorConfigs?: ThirdPartyVendorConfig[];
    /**
     * The third-party vendors measuring viewability. The following third-party vendors are applicable: * `THIRD_PARTY_VENDOR_MOAT` * `THIRD_PARTY_VENDOR_DOUBLE_VERIFY` * `THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE` * `THIRD_PARTY_VENDOR_COMSCORE` * `THIRD_PARTY_VENDOR_TELEMETRY` * `THIRD_PARTY_VENDOR_MEETRICS`
     */
    viewabilityVendorConfigs?: ThirdPartyVendorConfig[];
}
