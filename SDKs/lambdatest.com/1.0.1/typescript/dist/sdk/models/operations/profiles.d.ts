import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProfilesResponse extends SpeakeasyBase {
    /**
     * Access denied. Auth error.
     */
    accessDenied?: shared.AccessDenied;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    profiles?: shared.Profiles;
}
