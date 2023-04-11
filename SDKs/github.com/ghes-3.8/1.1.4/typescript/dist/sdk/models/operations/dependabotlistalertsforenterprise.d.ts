import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DependabotListAlertsForEnterpriseRequest extends SpeakeasyBase {
    /**
     * A cursor, as given in the [Link header](https://docs.github.com/enterprise-server@3.8/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results after this cursor.
     */
    after?: string;
    /**
     * A cursor, as given in the [Link header](https://docs.github.com/enterprise-server@3.8/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results before this cursor.
     */
    before?: string;
    /**
     * The direction to sort the results by.
     */
    direction?: shared.DirectionEnum;
    /**
     * A comma-separated list of ecosystems. If specified, only alerts for these ecosystems will be returned.
     *
     * @remarks
     *
     * Can be: `composer`, `go`, `maven`, `npm`, `nuget`, `pip`, `pub`, `rubygems`, `rust`
     */
    ecosystem?: string;
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * **Deprecated**. The number of results per page (max 100), starting from the first matching result.
     *
     * @remarks
     * This parameter must not be used in combination with `last`.
     * Instead, use `per_page` in combination with `after` to fetch the first page of results.
     */
    first?: number;
    /**
     * **Deprecated**. The number of results per page (max 100), starting from the last matching result.
     *
     * @remarks
     * This parameter must not be used in combination with `first`.
     * Instead, use `per_page` in combination with `before` to fetch the last page of results.
     */
    last?: number;
    /**
     * A comma-separated list of package names. If specified, only alerts for these packages will be returned.
     */
    package?: string;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The scope of the vulnerable dependency. If specified, only alerts with this scope will be returned.
     */
    scope?: shared.DependabotAlertScopeEnum;
    /**
     * A comma-separated list of severities. If specified, only alerts with these severities will be returned.
     *
     * @remarks
     *
     * Can be: `low`, `medium`, `high`, `critical`
     */
    severity?: string;
    /**
     * The property by which to sort the results.
     *
     * @remarks
     * `created` means when the alert was created.
     * `updated` means when the alert's state last changed.
     */
    sort?: shared.DependabotAlertSortEnum;
    /**
     * A comma-separated list of states. If specified, only alerts with these states will be returned.
     *
     * @remarks
     *
     * Can be: `dismissed`, `fixed`, `open`
     */
    state?: string;
}
export declare class DependabotListAlertsForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    dependabotAlertWithRepositories?: shared.DependabotAlertWithRepository[];
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
