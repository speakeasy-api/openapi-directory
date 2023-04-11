import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetContentRequest extends SpeakeasyBase {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * path parameter
     */
    path: string;
    /**
     * The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)
     */
    ref?: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposGetContentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    reposGetContent200ApplicationJSONOneOf?: any;
}
