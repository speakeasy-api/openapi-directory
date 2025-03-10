/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Required. The allowed OS type.
 */
export enum GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum {
  OsUnspecified = "OS_UNSPECIFIED",
  DesktopMac = "DESKTOP_MAC",
  DesktopWindows = "DESKTOP_WINDOWS",
  DesktopLinux = "DESKTOP_LINUX",
  DesktopChromeOs = "DESKTOP_CHROME_OS",
  Android = "ANDROID",
  Ios = "IOS",
}

/**
 * A restriction on the OS type and version of devices making requests.
 */
export class GoogleIdentityAccesscontextmanagerV1OsConstraint extends SpeakeasyBase {
  /**
   * The minimum allowed OS version. If not set, any version of this OS satisfies the constraint. Format: `"major.minor.patch"`. Examples: `"10.5.301"`, `"9.2.1"`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "minimumVersion" })
  minimumVersion?: string;

  /**
   * Required. The allowed OS type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "osType" })
  osType?: GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum;

  /**
   * Only allows requests from devices with a verified Chrome OS. Verifications includes requirements that the device is enterprise-managed, conformant to domain policies, and the caller has permission to call the API targeted by the request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "requireVerifiedChromeOs" })
  requireVerifiedChromeOs?: boolean;
}
