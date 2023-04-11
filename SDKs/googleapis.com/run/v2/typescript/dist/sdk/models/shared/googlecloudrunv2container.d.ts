import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2ContainerPort } from "./googlecloudrunv2containerport";
import { GoogleCloudRunV2EnvVar } from "./googlecloudrunv2envvar";
import { GoogleCloudRunV2Probe } from "./googlecloudrunv2probe";
import { GoogleCloudRunV2ResourceRequirements } from "./googlecloudrunv2resourcerequirements";
import { GoogleCloudRunV2VolumeMount } from "./googlecloudrunv2volumemount";
/**
 * A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
 */
export declare class GoogleCloudRunV2Container extends SpeakeasyBase {
    /**
     * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
     */
    args?: string[];
    /**
     * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
     */
    command?: string[];
    /**
     * List of environment variables to set in the container.
     */
    env?: GoogleCloudRunV2EnvVar[];
    /**
     * Required. Name of the container image in Dockerhub, Google Artifact Registry, or Google Container Registry. If the host is not provided, Dockerhub is assumed. More info: https://kubernetes.io/docs/concepts/containers/images
     */
    image?: string;
    /**
     * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
     */
    livenessProbe?: GoogleCloudRunV2Probe;
    /**
     * Name of the container specified as a DNS_LABEL (RFC 1123).
     */
    name?: string;
    /**
     * List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible. If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on.
     */
    ports?: GoogleCloudRunV2ContainerPort[];
    /**
     * ResourceRequirements describes the compute resource requirements.
     */
    resources?: GoogleCloudRunV2ResourceRequirements;
    /**
     * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
     */
    startupProbe?: GoogleCloudRunV2Probe;
    /**
     * Volume to mount into the container's filesystem.
     */
    volumeMounts?: GoogleCloudRunV2VolumeMount[];
    /**
     * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.
     */
    workingDir?: string;
}
