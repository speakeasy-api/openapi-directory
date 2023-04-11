import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The [reaction type](https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#reaction-types) to add to the release.
 */
export declare enum ReactionsCreateForReleaseRequestBodyContentEnum {
    Plus1 = "+1",
    Laugh = "laugh",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForReleaseRequestBody extends SpeakeasyBase {
    /**
     * The [reaction type](https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#reaction-types) to add to the release.
     */
    content: ReactionsCreateForReleaseRequestBodyContentEnum;
}
export declare class ReactionsCreateForReleaseRequest extends SpeakeasyBase {
    requestBody: ReactionsCreateForReleaseRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The unique identifier of the release.
     */
    releaseId: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReactionsCreateForReleaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Reaction exists
     */
    reaction?: shared.Reaction;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
