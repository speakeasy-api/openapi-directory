import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Docker container.
 */
export declare class Container extends SpeakeasyBase {
    /**
     * Arguments passed to the entrypoint.
     */
    args?: string[];
    /**
     * If set, overrides the default ENTRYPOINT specified by the image.
     */
    command?: string[];
    /**
     * Environment variables passed to the container.
     */
    env?: Record<string, string>;
    /**
     * Docker image defining the container. This image must be accessible by the config's service account.
     */
    image?: string;
    /**
     * If set, overrides the USER specified in the image with the given uid.
     */
    runAsUser?: number;
    /**
     * If set, overrides the default DIR specified by the image.
     */
    workingDir?: string;
}
