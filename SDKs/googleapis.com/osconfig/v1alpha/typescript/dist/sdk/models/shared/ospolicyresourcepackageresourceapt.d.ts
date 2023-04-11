import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A package managed by APT. - install: `apt-get update && apt-get -y install [name]` - remove: `apt-get -y remove [name]`
 */
export declare class OSPolicyResourcePackageResourceAPT extends SpeakeasyBase {
    /**
     * Required. Package name.
     */
    name?: string;
}
