import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The allowed OS type.
 */
export declare enum OsConstraintOsTypeEnum {
    OsUnspecified = "OS_UNSPECIFIED",
    DesktopMac = "DESKTOP_MAC",
    DesktopWindows = "DESKTOP_WINDOWS",
    DesktopLinux = "DESKTOP_LINUX",
    DesktopChromeOs = "DESKTOP_CHROME_OS",
    Android = "ANDROID",
    Ios = "IOS"
}
/**
 * A restriction on the OS type and version of devices making requests.
 */
export declare class OsConstraint extends SpeakeasyBase {
    /**
     * The minimum allowed OS version. If not set, any version of this OS satisfies the constraint. Format: `"major.minor.patch"`. Examples: `"10.5.301"`, `"9.2.1"`.
     */
    minimumVersion?: string;
    /**
     * Required. The allowed OS type.
     */
    osType?: OsConstraintOsTypeEnum;
    /**
     * Only allows requests from devices with a verified Chrome OS. Verifications includes requirements that the device is enterprise-managed, conformant to domain policies, and the caller has permission to call the API targeted by the request.
     */
    requireVerifiedChromeOs?: boolean;
}
