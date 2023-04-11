import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container runnable.
 */
export declare class Container extends SpeakeasyBase {
    /**
     * If set to true, external network access to and from container will be blocked, containers that are with block_external_network as true can still communicate with each other, network cannot be specified in the `container.options` field.
     */
    blockExternalNetwork?: boolean;
    /**
     * Overrides the `CMD` specified in the container. If there is an ENTRYPOINT (either in the container image or with the entrypoint field below) then commands are appended as arguments to the ENTRYPOINT.
     */
    commands?: string[];
    /**
     * Overrides the `ENTRYPOINT` specified in the container.
     */
    entrypoint?: string;
    /**
     * The URI to pull the container image from.
     */
    imageUri?: string;
    /**
     * Arbitrary additional options to include in the "docker run" command when running this container, e.g. "--network host".
     */
    options?: string;
    /**
     * Optional password for logging in to a docker registry. If password matches `projects/* /secrets/* /versions/*` then Batch will read the password from the Secret Manager;
     */
    password?: string;
    /**
     * Optional username for logging in to a docker registry. If username matches `projects/* /secrets/* /versions/*` then Batch will read the username from the Secret Manager.
     */
    username?: string;
    /**
     * Volumes to mount (bind mount) from the host machine files or directories into the container, formatted to match docker run's --volume option, e.g. /foo:/bar, or /foo:/bar:ro
     */
    volumes?: string[];
}
