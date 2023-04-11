import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrgsConvertMemberToOutsideCollaboratorRequestBody extends SpeakeasyBase {
    /**
     * When set to `true`, the request will be performed asynchronously. Returns a 202 status code when the job is successfully queued.
     */
    async?: boolean;
}
export declare class OrgsConvertMemberToOutsideCollaboratorRequest extends SpeakeasyBase {
    requestBody?: OrgsConvertMemberToOutsideCollaboratorRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class OrgsConvertMemberToOutsideCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * User is getting converted asynchronously
     */
    orgsConvertMemberToOutsideCollaborator202ApplicationJSONObject?: Record<string, any>;
}
