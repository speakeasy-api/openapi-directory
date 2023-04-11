import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks extends SpeakeasyBase {
    /**
     * The `id` of the GitHub App.
     */
    appId: number;
    /**
     * Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository, or `false` to disable them.
     */
    setting: boolean;
}
export declare class ChecksSetSuitesPreferencesRequestBody extends SpeakeasyBase {
    /**
     * Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default. See the [`auto_trigger_checks` object](https://docs.github.com/enterprise-server@3.1/rest/reference/checks#auto_trigger_checks-object) description for details.
     */
    autoTriggerChecks?: ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks[];
}
export declare class ChecksSetSuitesPreferencesRequest extends SpeakeasyBase {
    requestBody: ChecksSetSuitesPreferencesRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ChecksSetSuitesPreferencesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    checkSuitePreference?: shared.CheckSuitePreference;
}
