import { SpeakeasyBase } from "../../../internal/utils";
/**
 * NpmPackage represents an npm artifact.
 */
export declare class NpmPackage extends SpeakeasyBase {
    /**
     * Output only. Time the package was created.
     */
    createTime?: string;
    /**
     * Required. registry_location, project_id, repository_name and npm_package forms a unique package For example, "projects/test-project/locations/us-west4/repositories/test-repo/npmPackages/ npm_test:1.0.0", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and npm_test:1.0.0" is the npm package.
     */
    name?: string;
    /**
     * Package for the artifact.
     */
    packageName?: string;
    /**
     * Tags attached to this package.
     */
    tags?: string[];
    /**
     * Output only. Time the package was updated.
     */
    updateTime?: string;
    /**
     * Version of this package.
     */
    version?: string;
}
