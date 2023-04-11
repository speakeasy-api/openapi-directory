import { SpeakeasyBase } from "../../../internal/utils";
import { DockerImage } from "./dockerimage";
/**
 * The response from listing docker images.
 */
export declare class ListDockerImagesResponse extends SpeakeasyBase {
    /**
     * The docker images returned.
     */
    dockerImages?: DockerImage[];
    /**
     * The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return.
     */
    nextPageToken?: string;
}
