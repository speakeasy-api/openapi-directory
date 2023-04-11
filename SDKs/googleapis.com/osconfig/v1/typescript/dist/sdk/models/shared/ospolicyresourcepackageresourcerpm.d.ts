import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyResourceFile } from "./ospolicyresourcefile";
/**
 * An RPM package file. RPM packages only support INSTALLED state.
 */
export declare class OSPolicyResourcePackageResourceRPM extends SpeakeasyBase {
    /**
     * Whether dependencies should also be installed. - install when false: `rpm --upgrade --replacepkgs package.rpm` - install when true: `yum -y install package.rpm` or `zypper -y install package.rpm`
     */
    pullDeps?: boolean;
    /**
     * A remote or local file.
     */
    source?: OSPolicyResourceFile;
}
