import { SpeakeasyBase } from "../../../internal/utils";
/**
 * One of the publicly available Python repositories supported by Artifact Registry.
 */
export declare enum PythonRepositoryPublicRepositoryEnum {
    PublicRepositoryUnspecified = "PUBLIC_REPOSITORY_UNSPECIFIED",
    Pypi = "PYPI"
}
/**
 * Configuration for a Python remote repository.
 */
export declare class PythonRepository extends SpeakeasyBase {
    /**
     * One of the publicly available Python repositories supported by Artifact Registry.
     */
    publicRepository?: PythonRepositoryPublicRepositoryEnum;
}
