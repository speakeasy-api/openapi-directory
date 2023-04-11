import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The type of repositories in the organization that can access the variable. `selected` means only the repositories specified by `selected_repository_ids` can access the variable.
 */
export declare enum ActionsCreateOrgVariableRequestBodyVisibilityEnum {
    All = "all",
    Private = "private",
    Selected = "selected"
}
export declare class ActionsCreateOrgVariableRequestBody extends SpeakeasyBase {
    /**
     * The name of the variable.
     */
    name: string;
    /**
     * An array of repository ids that can access the organization variable. You can only provide a list of repository ids when the `visibility` is set to `selected`.
     */
    selectedRepositoryIds?: number[];
    /**
     * The value of the variable.
     */
    value: string;
    /**
     * The type of repositories in the organization that can access the variable. `selected` means only the repositories specified by `selected_repository_ids` can access the variable.
     */
    visibility: ActionsCreateOrgVariableRequestBodyVisibilityEnum;
}
export declare class ActionsCreateOrgVariableRequest extends SpeakeasyBase {
    requestBody: ActionsCreateOrgVariableRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class ActionsCreateOrgVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response when creating a variable
     */
    emptyObject?: Record<string, any>;
}
