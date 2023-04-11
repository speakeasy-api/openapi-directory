import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetAutolinkRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the autolink.
     */
    autolinkId: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposGetAutolinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    autolink?: shared.Autolink;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
