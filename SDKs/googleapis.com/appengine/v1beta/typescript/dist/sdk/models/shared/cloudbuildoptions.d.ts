import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for the build operations performed as a part of the version deployment. Only applicable for App Engine flexible environment when creating a version using source code directly.
 */
export declare class CloudBuildOptions extends SpeakeasyBase {
    /**
     * Path to the yaml file used in deployment, used to determine runtime configuration details.Required for flexible environment builds.See https://cloud.google.com/appengine/docs/standard/python/config/appref for more details.
     */
    appYamlPath?: string;
    /**
     * The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes.
     */
    cloudBuildTimeout?: string;
}
