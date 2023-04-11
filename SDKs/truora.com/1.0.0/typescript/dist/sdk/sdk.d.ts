import { Behavior } from "./behavior";
import { Checks } from "./checks";
import { Continuous } from "./continuous";
import { CustomType } from "./customtype";
import { Hooks } from "./hooks";
import * as shared from "./models/shared";
import { Pdf } from "./pdf";
import { Reports } from "./reports";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.truora.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * **NOTE:** This is a preview of the API and it is not considered stable since refinements are still being made.
 *
 * @remarks
 *
 * # Introduction
 *
 * Welcome to the  **Truora Check** [**RESTful API**](https://en.wikipedia.org/wiki/Representational_state_transfer) reference. You may also want to check out our [**Validations API docs**](https://docs.validations.truora.com/) or our [**Signals API docs**](https://docs.signals.truora.com/).
 *
 * Truora Check API allows performing full background checks on people, vehicles and companies. There are three main types of background checks:
 *
 * - **Personal background check**: Verifies national IDs in multiple databases of public and legal entities in the LATAM region. For every national ID, returns information on: personal identity, criminal records, international background check, and professional background.
 *
 * - **Vehicle background check**: Verifies the vehicle documents and the owner identity in multiple databases of public and legal entities in the LATAM region. For every vehicle and owner type, returns information on: personal identity, driving records, criminal records, and vehicle information.
 *
 * - **Company background check**: Verifies the tax ID or a company name in multiple databases of public and legal entities in the LATAM region. For every company, returns the associated: business status, legal and criminal records, and media reports.
 *
 * # API Key V1 is live!
 *
 * API key version 1 is now live. Users with version 0 API keys are not immediately required to upgrade to V1 but should plan to do so at their earliest convenience. The changes for integration with API keys v1 are as follows:
 *
 * - The field ``user_authorized`` is now required to perform person checks. This field indicates the API user has authorization to perform the check in compliance with data protection law.
 * - The field ``homonym_scores`` is no longer included in our person check response as its results are already included in the body of the check and keeping them duplicated is generating unnecessary confusion.
 *
 *
 * # API composition
 *
 * ## Endpoints
 *
 * - **Check endpoints**: Provide an easy way to create and search for a background check. They also allow inserting groups of checks into reports. Each check contains scores, datasets and databases.
 *
 * ```plain
 * https://api.truora.com/v1/checks
 * ```
 *
 * - **Report endpoints**: Support batch uploads and grouping multiple checks together. Excel and .csv files are supported for batch uploads.
 *
 * ```plain
 * https://api.truora.com/v1/reports
 * ```
 *
 * - **Configuration endpoints**: Allows personalizing data sets and scores for customized background checks.
 *
 * ```plain
 * https://api.truora.com/v1/config
 * ```
 *
 * - **Continuous check endpoints**: Allows creating recurring checks and get notified whenever a change in the check score occurs.
 *
 * ```plain
 * https://api.truora.com/v1/continuous_checks
 * ```
 *
 * - **Behavior endpoints**: Allows sharing anonymous feedback about a person behavior when interacting with the company.
 *
 * ```plain
 * https://api.truora.com/v1/behaviour
 * ```
 *
 * - **Hooks endpoints**: Allows sending notifications via requests to your service or another third-party service whenever certain events occur.
 *
 * ```plain
 * https://api.truora.com/v1/hooks
 * ```
 *
 * ## Datasets
 *
 * Categories that group the resulting information for background checks from databases are called datasets. Datasets are divided in:
 *
 * - **Personal identity**: Corroborates the existence and validates personal identity documents.
 *
 * - **Criminal record**: Checks for crimes according to each country penal code or criminal code. Keep in mind that data aged less than 10 years is usually more consistent.
 *
 * - **Legal background**: Checks for lawsuits filed. Keep in mind that data aged less than 10 years is usually more consistent.
 *
 * - **International background**: Checks international lists for crimes related to identity theft, money laundering, terrorist financing, and high crimes.
 *
 * - **Professional background**: Checks professional regulatory entities for relevant information.
 *
 * - **Affiliations and insurances**: Checks the history and status of social security affiliations.
 *
 * - **Alert in media**: Checks major media agencies for relevant news related to violent actions.
 *
 * - **Vehicle information**: Checks for the physical characteristics of the vehicle, technical status, insurance history, and other relevant information.
 *
 * - **Traffic fines**: Checks for outstanding traffic fines.
 *
 * - **Driving licenses**: Shows information relevant to the driver. Such as license status and driver certificates.
 *
 * - **Business background**: Checks for business status, legal and criminal history, and other relevant information.
 *
 * - **Taxes and Finances**: Checks for the information related to personal finances, liabilities, and taxes.
 *
 * ## Requests Format
 *
 * The POST requests receive a body that must be encoded in `www-x-form-urlencoded`, for instance:
 *
 * ```plain
 * type=person&national_id=123456&country=CO
 * ```
 *
 * The responses are always encoded in `JSON` format.
 *
 * ## Errors
 *
 * Whenever there is an error, a JSON with the following format is returned:
 *
 * ```json
 * {
 *     "code": <Truora error code>,
 *     "http_code": <The HTTP status of the response>,
 *     "message": <The error message>
 * }
 * ```
 *
 * for instance:
 *
 * ```json
 * {
 *     "code": 10404,
 *     "http_code": 404,
 *     "message": "The Check was not found"
 * }
 * ```
 *
 * ## SDKs
 *
 * If your favorite language was not on the next list, You can use our [OpenAPI 3 spec](https://docs.truora.com/openapi.json) to generate it using the [Open API Generator](https://openapi-generator.tech/docs/installation).
 *
 * To download the SDK click on the desired programming language:
 *
 * - [C# .Net Core](https://truora-sdk.s3.amazonaws.com/checks/checks_csharp-netcore_latest.zip)
 *
 * - [Elixir](https://truora-sdk.s3.amazonaws.com/checks/checks_elixir_latest.zip)
 *
 * - [Go](https://truora-sdk.s3.amazonaws.com/checks/checks_go_latest.zip)
 *
 * - [Java](https://truora-sdk.s3.amazonaws.com/checks/checks_java_latest.zip)
 *
 * - [JavaScript](https://truora-sdk.s3.amazonaws.com/checks/checks_javascript_latest.zip)
 *
 * - [Objc](https://truora-sdk.s3.amazonaws.com/checks/checks_objc_latest.zip)
 *
 * - [Php](https://truora-sdk.s3.amazonaws.com/checks/checks_php_latest.zip)
 *
 * - [Python](https://truora-sdk.s3.amazonaws.com/checks/checks_python_latest.zip)
 *
 * - [Ruby](https://truora-sdk.s3.amazonaws.com/checks/checks_ruby_latest.zip)
 *
 * You can see the full list of supported platforms here:
 *
 * https://openapi-generator.tech/docs/generators
 *
 *
 *
 */
export declare class SDK {
    /**
     * Allows to anonymously report a person behavior. This information is fed to our machine learning platform to determine the reputational score of a person and produces a dataset; thus helping identify easily whether a candidate is reliable or not, based on all of their reputation against feedback reporters, visible via check API or user interface.
     */
    behavior: Behavior;
    /**
     * Allows you to create and retrieve background checks. Consults multiple databases and delivers a comprehensive set of information to help assess the reliability of a person, vehicle, or company.
     */
    checks: Checks;
    /**
     * Allows creating recurring checks with customizable frequency that notify whenever there are changes in check scores.
     */
    continuous: Continuous;
    /**
     * The Custom Type API allows the creation of new products so only desired datasets are included in background checks.
     *
     * @remarks
     *
     * ## Score Configuration
     * The `ScoreConfig` object has `Rules` to apply to related *databases* which are summed up creating a `Score` which is associated to a *dataset* of a background `check`. All weights given to the configuration must sum up 1.
     *
     */
    customType: CustomType;
    /**
     * Hooks allows configuring Truora Platform to notify via requests to your service (or another third-party service) whenever an event occurs in Truora Platform. They are the easiest way to get a warning when something happens in another system, in this case, Truora platform. This service allows sending notifications via requests to your service or another third-party service whenever certain events occur.
     */
    hooks: Hooks;
    pdf: Pdf;
    /**
     * The reports API let you group checks into a single report and download the result as a PDF or CSV file.
     *
     * @remarks
     * It is also possible to upload a group of backgrounds check to be performed in batch and get a report about them later.
     */
    reports: Reports;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
