import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyResourceFile } from "./ospolicyresourcefile";
/**
 * A deb package file. dpkg packages only support INSTALLED state.
 */
export declare class OSPolicyResourcePackageResourceDeb extends SpeakeasyBase {
    /**
     * Whether dependencies should also be installed. - install when false: `dpkg -i package` - install when true: `apt-get update && apt-get -y install package.deb`
     */
    pullDeps?: boolean;
    /**
     * A remote or local file.
     */
    source?: OSPolicyResourceFile;
}
