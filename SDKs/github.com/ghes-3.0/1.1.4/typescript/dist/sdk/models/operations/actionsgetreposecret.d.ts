import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetRepoSecretRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
    /**
     * secret_name parameter
     */
    secretName: string;
}
export declare class ActionsGetRepoSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsSecret?: shared.ActionsSecret;
}
