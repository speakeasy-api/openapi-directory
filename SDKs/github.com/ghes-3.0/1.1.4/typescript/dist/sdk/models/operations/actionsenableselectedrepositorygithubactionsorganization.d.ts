import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest extends SpeakeasyBase {
    org: string;
    repositoryId: number;
}
export declare class ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
