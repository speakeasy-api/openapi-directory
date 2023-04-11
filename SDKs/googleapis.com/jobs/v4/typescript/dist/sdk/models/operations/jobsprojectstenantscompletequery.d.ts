import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class JobsProjectsTenantsCompleteQuerySecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class JobsProjectsTenantsCompleteQuerySecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class JobsProjectsTenantsCompleteQuerySecurity extends SpeakeasyBase {
    option1?: JobsProjectsTenantsCompleteQuerySecurityOption1;
    option2?: JobsProjectsTenantsCompleteQuerySecurityOption2;
}
/**
 * The scope of the completion. The defaults is CompletionScope.PUBLIC.
 */
export declare enum JobsProjectsTenantsCompleteQueryScopeEnum {
    CompletionScopeUnspecified = "COMPLETION_SCOPE_UNSPECIFIED",
    Tenant = "TENANT",
    Public = "PUBLIC"
}
/**
 * The completion topic. The default is CompletionType.COMBINED.
 */
export declare enum JobsProjectsTenantsCompleteQueryTypeEnum {
    CompletionTypeUnspecified = "COMPLETION_TYPE_UNSPECIFIED",
    JobTitle = "JOB_TITLE",
    CompanyName = "COMPANY_NAME",
    Combined = "COMBINED"
}
export declare class JobsProjectsTenantsCompleteQueryRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * If provided, restricts completion to specified company. The format is "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for example, "projects/foo/tenants/bar/companies/baz".
     */
    company?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The list of languages of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). The maximum number of allowed characters is 255.
     */
    languageCodes?: string[];
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Required. Completion result count. The maximum allowed page size is 10.
     */
    pageSize?: number;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Required. The query used to generate suggestions. The maximum number of allowed characters is 255.
     */
    query?: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The scope of the completion. The defaults is CompletionScope.PUBLIC.
     */
    scope?: JobsProjectsTenantsCompleteQueryScopeEnum;
    /**
     * Required. Resource name of tenant the completion is performed within. The format is "projects/{project_id}/tenants/{tenant_id}", for example, "projects/foo/tenants/bar".
     */
    tenant: string;
    /**
     * The completion topic. The default is CompletionType.COMBINED.
     */
    type?: JobsProjectsTenantsCompleteQueryTypeEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class JobsProjectsTenantsCompleteQueryResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    completeQueryResponse?: shared.CompleteQueryResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
