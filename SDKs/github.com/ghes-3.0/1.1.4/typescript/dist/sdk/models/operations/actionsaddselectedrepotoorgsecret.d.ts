import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsAddSelectedRepoToOrgSecretRequest extends SpeakeasyBase {
    org: string;
    repositoryId: number;
    /**
     * secret_name parameter
     */
    secretName: string;
}
export declare class ActionsAddSelectedRepoToOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
