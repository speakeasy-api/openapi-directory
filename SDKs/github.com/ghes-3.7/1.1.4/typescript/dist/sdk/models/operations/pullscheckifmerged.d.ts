import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PullsCheckIfMergedRequest extends SpeakeasyBase {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The number that identifies the pull request.
     */
    pullNumber: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class PullsCheckIfMergedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
