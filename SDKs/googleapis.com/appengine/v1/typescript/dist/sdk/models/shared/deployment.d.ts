import { SpeakeasyBase } from "../../../internal/utils";
import { CloudBuildOptions } from "./cloudbuildoptions";
import { ContainerInfo } from "./containerinfo";
import { FileInfo } from "./fileinfo";
import { ZipInfo } from "./zipinfo";
/**
 * Code and application artifacts used to deploy a version to App Engine.
 */
export declare class Deployment extends SpeakeasyBase {
    /**
     * Options for the build operations performed as a part of the version deployment. Only applicable for App Engine flexible environment when creating a version using source code directly.
     */
    cloudBuildOptions?: CloudBuildOptions;
    /**
     * Docker image that is used to create a container and start a VM instance for the version that you deploy. Only applicable for instances running in the App Engine flexible environment.
     */
    container?: ContainerInfo;
    /**
     * Manifest of the files stored in Google Cloud Storage that are included as part of this version. All files must be readable using the credentials supplied with this call.
     */
    files?: Record<string, FileInfo>;
    /**
     * The zip file information for a zip deployment.
     */
    zip?: ZipInfo;
}
