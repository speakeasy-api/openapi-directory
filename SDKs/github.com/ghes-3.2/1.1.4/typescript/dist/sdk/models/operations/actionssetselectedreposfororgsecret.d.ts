import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsSetSelectedReposForOrgSecretRequestBody extends SpeakeasyBase {
    /**
     * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Add selected repository to an organization secret](https://docs.github.com/enterprise-server@3.2/rest/actions/secrets#add-selected-repository-to-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/enterprise-server@3.2/rest/reference/actions#remove-selected-repository-from-an-organization-secret) endpoints.
     */
    selectedRepositoryIds: number[];
}
export declare class ActionsSetSelectedReposForOrgSecretRequest extends SpeakeasyBase {
    requestBody: ActionsSetSelectedReposForOrgSecretRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The name of the secret.
     */
    secretName: string;
}
export declare class ActionsSetSelectedReposForOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
