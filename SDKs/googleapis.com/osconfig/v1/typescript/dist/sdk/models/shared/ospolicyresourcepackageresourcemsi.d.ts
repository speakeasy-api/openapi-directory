import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyResourceFile } from "./ospolicyresourcefile";
/**
 * An MSI package. MSI packages only support INSTALLED state.
 */
export declare class OSPolicyResourcePackageResourceMSI extends SpeakeasyBase {
    /**
     * Additional properties to use during installation. This should be in the format of Property=Setting. Appended to the defaults of `ACTION=INSTALL REBOOT=ReallySuppress`.
     */
    properties?: string[];
    /**
     * A remote or local file.
     */
    source?: OSPolicyResourceFile;
}
