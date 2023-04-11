import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrgsConvertMemberToOutsideCollaboratorRequest extends SpeakeasyBase {
    org: string;
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
