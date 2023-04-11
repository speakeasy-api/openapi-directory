import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsDownloadArtifactRequest extends SpeakeasyBase {
    archiveFormat: string;
    /**
     * artifact_id parameter
     */
    artifactId: number;
    owner: string;
    repo: string;
}
export declare class ActionsDownloadArtifactResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
