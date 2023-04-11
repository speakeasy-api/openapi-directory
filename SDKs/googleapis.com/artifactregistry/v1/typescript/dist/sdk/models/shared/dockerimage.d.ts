import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DockerImage represents a docker artifact. The following fields are returned as untyped metadata in the Version resource, using camelcase keys (i.e. metadata.imageSizeBytes): * imageSizeBytes * mediaType * buildTime
 */
export declare class DockerImage extends SpeakeasyBase {
    /**
     * The time this image was built. This field is returned as the 'metadata.buildTime' field in the Version resource. The build time is returned to the client as an RFC 3339 string, which can be easily used with the JavaScript Date constructor.
     */
    buildTime?: string;
    /**
     * Calculated size of the image. This field is returned as the 'metadata.imageSizeBytes' field in the Version resource.
     */
    imageSizeBytes?: string;
    /**
     * Media type of this image, e.g. "application/vnd.docker.distribution.manifest.v2+json". This field is returned as the 'metadata.mediaType' field in the Version resource.
     */
    mediaType?: string;
    /**
     * Required. registry_location, project_id, repository_name and image id forms a unique image name:`projects//locations//repository//dockerImages/`. For example, "projects/test-project/locations/us-west4/repositories/test-repo/dockerImages/ nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and "nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf" is the image's digest.
     */
    name?: string;
    /**
     * Tags attached to this image.
     */
    tags?: string[];
    /**
     * Output only. The time when the docker image was last updated.
     */
    updateTime?: string;
    /**
     * Time the image was uploaded.
     */
    uploadTime?: string;
    /**
     * Required. URL to access the image. Example: us-west4-docker.pkg.dev/test-project/test-repo/nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf
     */
    uri?: string;
}
