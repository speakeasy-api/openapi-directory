import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the types of repositories to return. Can be one of `all` or `public`. Default: `public`. Note: For GitHub Enterprise Server and GitHub AE, this endpoint will only list repositories available to all users on the enterprise.
 */
export declare enum ReposListPublicVisibilityEnum {
    All = "all",
    Public = "public"
}
export declare class ReposListPublicRequest extends SpeakeasyBase {
    /**
     * A repository ID. Only return repositories with an ID greater than this ID.
     */
    since?: number;
    /**
     * Specifies the types of repositories to return. Can be one of `all` or `public`. Default: `public`. Note: For GitHub Enterprise Server and GitHub AE, this endpoint will only list repositories available to all users on the enterprise.
     */
    visibility?: ReposListPublicVisibilityEnum;
}
export declare class ReposListPublicResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    minimalRepositories?: shared.MinimalRepository[];
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
