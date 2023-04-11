import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposCreateAutolinkRequestBody extends SpeakeasyBase {
    /**
     * Whether this autolink reference matches alphanumeric characters. If true, the `<num>` parameter of the `url_template` matches alphanumeric characters `A-Z` (case insensitive), `0-9`, and `-`. If false, this autolink reference only matches numeric characters.
     */
    isAlphanumeric?: boolean;
    /**
     * The prefix appended by a number will generate a link any time it is found in an issue, pull request, or commit.
     */
    keyPrefix: string;
    /**
     * The URL must contain `<num>` for the reference number.
     */
    urlTemplate: string;
}
export declare class ReposCreateAutolinkRequest extends SpeakeasyBase {
    requestBody: ReposCreateAutolinkRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposCreateAutolinkResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * response
     */
    autolink?: shared.Autolink;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
