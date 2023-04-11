import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerPort } from "./containerport";
import { EnvFromSource } from "./envfromsource";
import { EnvVar } from "./envvar";
import { Probe } from "./probe";
import { ResourceRequirements } from "./resourcerequirements";
import { SecurityContext } from "./securitycontext";
import { VolumeMount } from "./volumemount";
/**
 * A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
 */
export declare class Container extends SpeakeasyBase {
    /**
     * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references are not supported in Cloud Run.
     */
    args?: string[];
    /**
     * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references are not supported in Cloud Run.
     */
    command?: string[];
    /**
     * List of environment variables to set in the container. EnvVar with duplicate names are generally allowed; if referencing a secret, the name must be unique for the container. For non-secret EnvVar names, the Container will only get the last-declared one.
     */
    env?: EnvVar[];
    /**
     * Not supported by Cloud Run.
     */
    envFrom?: EnvFromSource[];
    /**
     * Required. Name of the container image in Dockerhub, Google Artifact Registry, or Google Container Registry. If the host is not provided, Dockerhub is assumed. More info: https://kubernetes.io/docs/concepts/containers/images
     */
    image?: string;
    /**
     * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
     */
    imagePullPolicy?: string;
    /**
     * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
     */
    livenessProbe?: Probe;
    /**
     * Name of the container specified as a DNS_LABEL (RFC 1123). More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names
     */
    name?: string;
    /**
     * List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible. If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on.
     */
    ports?: ContainerPort[];
    /**
     * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
     */
    readinessProbe?: Probe;
    /**
     * ResourceRequirements describes the compute resource requirements.
     */
    resources?: ResourceRequirements;
    /**
     * Not supported by Cloud Run. SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext. When both are set, the values in SecurityContext take precedence.
     */
    securityContext?: SecurityContext;
    /**
     * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
     */
    startupProbe?: Probe;
    /**
     * Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log.
     */
    terminationMessagePath?: string;
    /**
     * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
     */
    terminationMessagePolicy?: string;
    /**
     * Volume to mount into the container's filesystem. Only supports SecretVolumeSources. Pod volumes to mount into the container's filesystem.
     */
    volumeMounts?: VolumeMount[];
    /**
     * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.
     */
    workingDir?: string;
}
