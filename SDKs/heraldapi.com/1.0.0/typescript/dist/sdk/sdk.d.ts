import { Applications } from "./applications";
import { Auth } from "./auth";
import { Classifications } from "./classifications";
import { CoverageParameters } from "./coverageparameters";
import { Files } from "./files";
import { Institutions } from "./institutions";
import * as shared from "./models/shared";
import { Policies } from "./policies";
import { Producers } from "./producers";
import { Products } from "./products";
import { Quotes } from "./quotes";
import { RiskParameters } from "./riskparameters";
import { Submissions } from "./submissions";
import { WelcomeAndHealthCheck } from "./welcomeandhealthcheck";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://sandbox.heraldapi.com", "https://production.heraldapi.com"];
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
 * HeraldAPI is the API for commercial insurance.
 *
 * @remarks
 *
 * Below are the available endpoints:
 *
 * <b>Welcome & Health Check</b>
 * <br><tt>[GET&nbsp;/](/b3A6ODY5Mzc1MA-)</tt>
 * <hr>
 *
 * <b>Submissions</b>
 * <br><tt>[POST&nbsp;/submissions](/b3A6OTQ1Mjg5Nw-submissions)</tt>
 * <br><tt>[GET&nbsp;&nbsp;/submissions/{submission_id}](/b3A6OTQ1ODY3Mg-submissions-submission-id)</tt>
 * <hr>
 *
 * <b>Quotes</b>
 * <br><tt>[GET&nbsp;/quotes/{quote_id}](/b3A6ODc3NjcwMg-quotes-quote-id)</tt>
 * <hr>
 *
 * <b>Producers</b>
 * <br><tt>[GET&nbsp;/producers](/b3A6ODc3NjcwMQ-producers)</tt>
 * <hr>
 *
 * <b>Products</b>
 * <br><tt>[GET&nbsp;/products](/b3A6ODc3NjcwNg-products)</tt>
 * <hr>
 *
 * <b>Institutions</b>
 * <br><tt>[GET&nbsp;/institutions](/b3A6ODc3NjcwNw-institutions)</tt>
 * <hr>
 *
 * <b>Coverage Parameters</b>
 * <br><tt>[GET&nbsp;/coverage_parameters](/b3A6MTA0MDgyNzc-coverage-parameters)</tt>
 * <hr>
 *
 * <b>Risk Parameters</b>
 * <br><tt>[GET&nbsp;/risk_parameters](/b3A6MTA0MDgyNzg-risk-parameters)</tt>
 */
export declare class SDK {
    applications: Applications;
    auth: Auth;
    classifications: Classifications;
    coverageParameters: CoverageParameters;
    files: Files;
    institutions: Institutions;
    policies: Policies;
    producers: Producers;
    products: Products;
    quotes: Quotes;
    riskParameters: RiskParameters;
    submissions: Submissions;
    welcomeAndHealthCheck: WelcomeAndHealthCheck;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
