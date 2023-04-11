import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DependabotSetSelectedReposForOrgSecretRequestBody extends SpeakeasyBase {
    /**
     * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Set selected repositories for an organization secret](https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#remove-selected-repository-from-an-organization-secret) endpoints.
     */
    selectedRepositoryIds: number[];
}
export declare class DependabotSetSelectedReposForOrgSecretRequest extends SpeakeasyBase {
    requestBody: DependabotSetSelectedReposForOrgSecretRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The name of the secret.
     */
    secretName: string;
}
export declare class DependabotSetSelectedReposForOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
