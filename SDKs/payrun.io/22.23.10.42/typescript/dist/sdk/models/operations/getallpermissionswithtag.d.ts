import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllPermissionsWithTagRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The tag unique identifier. E.g. MyTag
     */
    tagId: string;
}
export declare class GetAllPermissionsWithTagResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The link collection object.
     */
    linkCollection?: shared.LinkCollection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
