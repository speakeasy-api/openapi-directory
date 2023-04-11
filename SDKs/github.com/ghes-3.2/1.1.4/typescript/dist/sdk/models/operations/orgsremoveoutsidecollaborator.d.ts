import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrgsRemoveOutsideCollaboratorRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
/**
 * Unprocessable Entity if user is a member of the organization
 */
export declare class OrgsRemoveOutsideCollaborator422ApplicationJSON extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
export declare class OrgsRemoveOutsideCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unprocessable Entity if user is a member of the organization
     */
    orgsRemoveOutsideCollaborator422ApplicationJSONObject?: OrgsRemoveOutsideCollaborator422ApplicationJSON;
}
