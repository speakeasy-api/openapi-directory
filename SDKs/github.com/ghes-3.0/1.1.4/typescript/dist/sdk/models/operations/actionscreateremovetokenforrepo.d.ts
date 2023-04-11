import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsCreateRemoveTokenForRepoRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActionsCreateRemoveTokenForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    authenticationToken?: shared.AuthenticationToken;
}
