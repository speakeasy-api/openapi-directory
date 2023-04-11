import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsGetUserInstallationRequest extends SpeakeasyBase {
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class AppsGetUserInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    installation?: shared.Installation;
}
