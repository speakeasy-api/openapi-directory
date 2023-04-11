import { SpeakeasyBase } from "../../../internal/utils";
import { PackageRepository } from "./packagerepository";
/**
 * A guest policy package repository including its source.
 */
export declare class EffectiveGuestPolicySourcedPackageRepository extends SpeakeasyBase {
    /**
     * A package repository.
     */
    packageRepository?: PackageRepository;
    /**
     * Name of the guest policy providing this config.
     */
    source?: string;
}
