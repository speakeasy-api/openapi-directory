import { SpeakeasyBase } from "../../../internal/utils";
import { FlexTemplateRuntimeEnvironment } from "./flextemplateruntimeenvironment";
import { SDKInfo } from "./sdkinfo";
import { TemplateMetadata } from "./templatemetadata";
/**
 * Container Spec.
 */
export declare class ContainerSpec extends SpeakeasyBase {
    /**
     * The environment values to be set at runtime for flex template.
     */
    defaultEnvironment?: FlexTemplateRuntimeEnvironment;
    /**
     * Name of the docker container image. E.g., gcr.io/project/some-image
     */
    image?: string;
    /**
     * Cloud Storage path to self-signed certificate of private registry.
     */
    imageRepositoryCertPath?: string;
    /**
     * Secret Manager secret id for password to authenticate to private registry.
     */
    imageRepositoryPasswordSecretId?: string;
    /**
     * Secret Manager secret id for username to authenticate to private registry.
     */
    imageRepositoryUsernameSecretId?: string;
    /**
     * Metadata describing a template.
     */
    metadata?: TemplateMetadata;
    /**
     * SDK Information.
     */
    sdkInfo?: SDKInfo;
}
