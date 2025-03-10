/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Source } from "./source";
import { SourceProvenance } from "./sourceprovenance";
import { Expose, Type } from "class-transformer";

/**
 * Optional. Docker Registry to use for this deployment. This configuration is only applicable to 1st Gen functions, 2nd Gen functions can only use Artifact Registry. If `docker_repository` field is specified, this field will be automatically set as `ARTIFACT_REGISTRY`. If unspecified, it currently defaults to `CONTAINER_REGISTRY`. This field may be overridden by the backend for eligible deployments.
 */
export enum BuildConfigDockerRegistryEnum {
  DockerRegistryUnspecified = "DOCKER_REGISTRY_UNSPECIFIED",
  ContainerRegistry = "CONTAINER_REGISTRY",
  ArtifactRegistry = "ARTIFACT_REGISTRY",
}

/**
 * Describes the Build step of the function that builds a container from the given source.
 */
export class BuildConfigInput extends SpeakeasyBase {
  /**
   * Specifies one of the Google provided buildpack stacks.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "buildpackStack" })
  buildpackStack?: string;

  /**
   * Optional. Docker Registry to use for this deployment. This configuration is only applicable to 1st Gen functions, 2nd Gen functions can only use Artifact Registry. If `docker_repository` field is specified, this field will be automatically set as `ARTIFACT_REGISTRY`. If unspecified, it currently defaults to `CONTAINER_REGISTRY`. This field may be overridden by the backend for eligible deployments.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dockerRegistry" })
  dockerRegistry?: BuildConfigDockerRegistryEnum;

  /**
   * User managed repository created in Artifact Registry optionally with a customer managed encryption key. This is the repository to which the function docker image will be pushed after it is built by Cloud Build. If unspecified, GCF will create and use a repository named 'gcf-artifacts' for every deployed region. It must match the pattern `projects/{project}/locations/{location}/repositories/{repository}`. Cross-project repositories are not supported. Cross-location repositories are not supported. Repository format must be 'DOCKER'.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dockerRepository" })
  dockerRepository?: string;

  /**
   * The name of the function (as defined in source code) that will be executed. Defaults to the resource name suffix, if not specified. For backward compatibility, if function with given name is not found, then the system will try to use function named "function". For Node.js this is name of a function exported by the module specified in `source_location`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "entryPoint" })
  entryPoint?: string;

  /**
   * User-provided build-time environment variables for the function
   */
  @SpeakeasyMetadata()
  @Expose({ name: "environmentVariables" })
  environmentVariables?: Record<string, string>;

  /**
   * The runtime in which to run the function. Required when deploying a new function, optional when updating an existing function. For a complete list of possible choices, see the [`gcloud` command reference](https://cloud.google.com/sdk/gcloud/reference/functions/deploy#--runtime).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "runtime" })
  runtime?: string;

  /**
   * The location of the function source code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  @Type(() => Source)
  source?: Source;

  /**
   * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceProvenance" })
  @Type(() => SourceProvenance)
  sourceProvenance?: SourceProvenance;

  /**
   * Name of the Cloud Build Custom Worker Pool that should be used to build the function. The format of this field is `projects/{project}/locations/{region}/workerPools/{workerPool}` where {project} and {region} are the project id and region respectively where the worker pool is defined and {workerPool} is the short name of the worker pool. If the project id is not the same as the function, then the Cloud Functions Service Agent (service-@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role Cloud Build Custom Workers Builder (roles/cloudbuild.customworkers.builder) in the project.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "workerPool" })
  workerPool?: string;
}

/**
 * Describes the Build step of the function that builds a container from the given source.
 */
export class BuildConfig extends SpeakeasyBase {
  /**
   * Output only. The Cloud Build name of the latest successful deployment of the function.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "build" })
  build?: string;

  /**
   * Specifies one of the Google provided buildpack stacks.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "buildpackStack" })
  buildpackStack?: string;

  /**
   * Optional. Docker Registry to use for this deployment. This configuration is only applicable to 1st Gen functions, 2nd Gen functions can only use Artifact Registry. If `docker_repository` field is specified, this field will be automatically set as `ARTIFACT_REGISTRY`. If unspecified, it currently defaults to `CONTAINER_REGISTRY`. This field may be overridden by the backend for eligible deployments.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dockerRegistry" })
  dockerRegistry?: BuildConfigDockerRegistryEnum;

  /**
   * User managed repository created in Artifact Registry optionally with a customer managed encryption key. This is the repository to which the function docker image will be pushed after it is built by Cloud Build. If unspecified, GCF will create and use a repository named 'gcf-artifacts' for every deployed region. It must match the pattern `projects/{project}/locations/{location}/repositories/{repository}`. Cross-project repositories are not supported. Cross-location repositories are not supported. Repository format must be 'DOCKER'.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dockerRepository" })
  dockerRepository?: string;

  /**
   * The name of the function (as defined in source code) that will be executed. Defaults to the resource name suffix, if not specified. For backward compatibility, if function with given name is not found, then the system will try to use function named "function". For Node.js this is name of a function exported by the module specified in `source_location`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "entryPoint" })
  entryPoint?: string;

  /**
   * User-provided build-time environment variables for the function
   */
  @SpeakeasyMetadata()
  @Expose({ name: "environmentVariables" })
  environmentVariables?: Record<string, string>;

  /**
   * The runtime in which to run the function. Required when deploying a new function, optional when updating an existing function. For a complete list of possible choices, see the [`gcloud` command reference](https://cloud.google.com/sdk/gcloud/reference/functions/deploy#--runtime).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "runtime" })
  runtime?: string;

  /**
   * The location of the function source code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  @Type(() => Source)
  source?: Source;

  /**
   * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceProvenance" })
  @Type(() => SourceProvenance)
  sourceProvenance?: SourceProvenance;

  /**
   * Name of the Cloud Build Custom Worker Pool that should be used to build the function. The format of this field is `projects/{project}/locations/{region}/workerPools/{workerPool}` where {project} and {region} are the project id and region respectively where the worker pool is defined and {workerPool} is the short name of the worker pool. If the project id is not the same as the function, then the Cloud Functions Service Agent (service-@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role Cloud Build Custom Workers Builder (roles/cloudbuild.customworkers.builder) in the project.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "workerPool" })
  workerPool?: string;
}
