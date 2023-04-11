import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyResourcePackageResourceAPT } from "./ospolicyresourcepackageresourceapt";
import { OSPolicyResourcePackageResourceDeb } from "./ospolicyresourcepackageresourcedeb";
import { OSPolicyResourcePackageResourceGooGet } from "./ospolicyresourcepackageresourcegooget";
import { OSPolicyResourcePackageResourceMSI } from "./ospolicyresourcepackageresourcemsi";
import { OSPolicyResourcePackageResourceRPM } from "./ospolicyresourcepackageresourcerpm";
import { OSPolicyResourcePackageResourceYUM } from "./ospolicyresourcepackageresourceyum";
import { OSPolicyResourcePackageResourceZypper } from "./ospolicyresourcepackageresourcezypper";
/**
 * Required. The desired state the agent should maintain for this package.
 */
export declare enum OSPolicyResourcePackageResourceDesiredStateEnum {
    DesiredStateUnspecified = "DESIRED_STATE_UNSPECIFIED",
    Installed = "INSTALLED",
    Removed = "REMOVED"
}
/**
 * A resource that manages a system package.
 */
export declare class OSPolicyResourcePackageResource extends SpeakeasyBase {
    /**
     * A package managed by APT. - install: `apt-get update && apt-get -y install [name]` - remove: `apt-get -y remove [name]`
     */
    apt?: OSPolicyResourcePackageResourceAPT;
    /**
     * A deb package file. dpkg packages only support INSTALLED state.
     */
    deb?: OSPolicyResourcePackageResourceDeb;
    /**
     * Required. The desired state the agent should maintain for this package.
     */
    desiredState?: OSPolicyResourcePackageResourceDesiredStateEnum;
    /**
     * A package managed by GooGet. - install: `googet -noconfirm install package` - remove: `googet -noconfirm remove package`
     */
    googet?: OSPolicyResourcePackageResourceGooGet;
    /**
     * An MSI package. MSI packages only support INSTALLED state.
     */
    msi?: OSPolicyResourcePackageResourceMSI;
    /**
     * An RPM package file. RPM packages only support INSTALLED state.
     */
    rpm?: OSPolicyResourcePackageResourceRPM;
    /**
     * A package managed by YUM. - install: `yum -y install package` - remove: `yum -y remove package`
     */
    yum?: OSPolicyResourcePackageResourceYUM;
    /**
     * A package managed by Zypper. - install: `zypper -y install package` - remove: `zypper -y rm package`
     */
    zypper?: OSPolicyResourcePackageResourceZypper;
}
