import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
 */
export declare class InventoryVersionedPackage extends SpeakeasyBase {
    /**
     * The system architecture this package is intended for.
     */
    architecture?: string;
    /**
     * The name of the package.
     */
    packageName?: string;
    /**
     * The version of the package.
     */
    version?: string;
}
