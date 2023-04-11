import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsDeleteArtifactRequest extends SpeakeasyBase {
    /**
     * artifact_id parameter
     */
    artifactId: number;
    owner: string;
    repo: string;
}
export declare class ActionsDeleteArtifactResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
