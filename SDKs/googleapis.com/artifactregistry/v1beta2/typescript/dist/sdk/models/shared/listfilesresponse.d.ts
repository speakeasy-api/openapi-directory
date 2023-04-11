import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsArtifactregistryV1beta2File } from "./googledevtoolsartifactregistryv1beta2file";
/**
 * The response from listing files.
 */
export declare class ListFilesResponse extends SpeakeasyBase {
    /**
     * The files returned.
     */
    files?: GoogleDevtoolsArtifactregistryV1beta2File[];
    /**
     * The token to retrieve the next page of files, or empty if there are no more files to return.
     */
    nextPageToken?: string;
}
