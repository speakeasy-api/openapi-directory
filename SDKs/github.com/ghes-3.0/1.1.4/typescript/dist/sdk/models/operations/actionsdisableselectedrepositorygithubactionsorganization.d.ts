import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest extends SpeakeasyBase {
    org: string;
    repositoryId: number;
}
export declare class ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
