import { SpeakeasyBase } from "../../../internal/utils";
import { Browser } from "./browser";
import { ConnectionType } from "./connectiontype";
import { MobileCarrier } from "./mobilecarrier";
import { OperatingSystem } from "./operatingsystem";
import { OperatingSystemVersion } from "./operatingsystemversion";
import { PlatformType } from "./platformtype";
/**
 * Technology Targeting.
 */
export declare class TechnologyTargeting extends SpeakeasyBase {
    /**
     * Browsers that this ad targets. For each browser either set browserVersionId or dartId along with the version numbers. If both are specified, only browserVersionId will be used. The other fields are populated automatically when the ad is inserted or updated.
     */
    browsers?: Browser[];
    /**
     * Connection types that this ad targets. For each connection type only id is required. The other fields are populated automatically when the ad is inserted or updated.
     */
    connectionTypes?: ConnectionType[];
    /**
     * Mobile carriers that this ad targets. For each mobile carrier only id is required, and the other fields are populated automatically when the ad is inserted or updated. If targeting a mobile carrier, do not set targeting for any zip codes.
     */
    mobileCarriers?: MobileCarrier[];
    /**
     * Operating system versions that this ad targets. To target all versions, use operatingSystems. For each operating system version, only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system version, do not set targeting for the corresponding operating system in operatingSystems.
     */
    operatingSystemVersions?: OperatingSystemVersion[];
    /**
     * Operating systems that this ad targets. To target specific versions, use operatingSystemVersions. For each operating system only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system, do not set targeting for operating system versions for the same operating system.
     */
    operatingSystems?: OperatingSystem[];
    /**
     * Platform types that this ad targets. For example, desktop, mobile, or tablet. For each platform type, only id is required, and the other fields are populated automatically when the ad is inserted or updated.
     */
    platformTypes?: PlatformType[];
}
