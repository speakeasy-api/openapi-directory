import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetArtifactRequest extends SpeakeasyBase {
    /**
     * artifact_id parameter
     */
    artifactId: number;
    owner: string;
    repo: string;
}
export declare class ActionsGetArtifactResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    artifact?: shared.Artifact;
}
