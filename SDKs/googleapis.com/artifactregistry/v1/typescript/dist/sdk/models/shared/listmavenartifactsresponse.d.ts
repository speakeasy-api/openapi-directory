import { SpeakeasyBase } from "../../../internal/utils";
import { MavenArtifact } from "./mavenartifact";
/**
 * The response from listing maven artifacts.
 */
export declare class ListMavenArtifactsResponse extends SpeakeasyBase {
    /**
     * The maven artifacts returned.
     */
    mavenArtifacts?: MavenArtifact[];
    /**
     * The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return.
     */
    nextPageToken?: string;
}
