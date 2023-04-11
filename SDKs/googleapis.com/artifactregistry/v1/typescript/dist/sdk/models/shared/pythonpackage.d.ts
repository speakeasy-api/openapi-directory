import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PythonPackage represents a python artifact.
 */
export declare class PythonPackage extends SpeakeasyBase {
    /**
     * Output only. Time the package was created.
     */
    createTime?: string;
    /**
     * Required. registry_location, project_id, repository_name and python_package forms a unique package name:`projects//locations//repository//pythonPackages/`. For example, "projects/test-project/locations/us-west4/repositories/test-repo/pythonPackages/ python_package:1.0.0", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and python_package:1.0.0" is the python package.
     */
    name?: string;
    /**
     * Package for the artifact.
     */
    packageName?: string;
    /**
     * Output only. Time the package was updated.
     */
    updateTime?: string;
    /**
     * Required. URL to access the package. Example: us-west4-python.pkg.dev/test-project/test-repo/python_package/file-name-1.0.0.tar.gz
     */
    uri?: string;
    /**
     * Version of this package.
     */
    version?: string;
}
