import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A package managed by YUM. - install: `yum -y install package` - remove: `yum -y remove package`
 */
export declare class OSPolicyResourcePackageResourceYUM extends SpeakeasyBase {
    /**
     * Required. Package name.
     */
    name?: string;
}
