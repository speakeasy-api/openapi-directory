import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Allows to anonymously report a person behavior. This information is fed to our machine learning platform to determine the reputational score of a person and produces a dataset; thus helping identify easily whether a candidate is reliable or not, based on all of their reputation against feedback reporters, visible via check API or user interface.
 */
export declare class Behavior {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Report Behavior
     *
     * @remarks
     * Creates a behavior item to report employee conducts that do not or might not be included in their background check. This report includes both possitive and negative behaviors and sorts them by severity.
     *
     * ### Reasons to report a person
     *
     * <table>
     *   <tr>
     *     <td style="width: 100px"><center><b>Very High</b><br>(Score: 1)</td>
     *     <td>Rape, Drug Dealing, Sexual Harassment</td>
     *   </tr>
     *   <tr>
     *     <td><center><b>High</b><br>(Score: 0.8)</td>
     *     <td>Theft, Fights, Aggressive Behaviour, Identity Fraud, Drunk, Drug Possession</td>
     *   </tr>
     *   <tr>
     *     <td><center><b>Medium</b><br>(Score: 0.6)</td>
     *     <td>Absences</td>
     *   </tr>
     *   <tr>
     *     <td><center><b>Low</b><br>(Score: 0.4)</td>
     *     <td>Tardiness, Confidentiality Breach</td>
     *   </tr>
     *   <tr>
     *     <td><center><b>None</b><br>(Score: 0)</td>
     *     <td>Good Reputation</td>
     *   </tr>
     *   <tr>
     *     <td><center><b>Unknown</b></td>
     *     <td>No information</td>
     *   </tr>
     * </table>
     *
     * **NOTE:** If the reason of your report is not here, please contact Truora support team.
     *
     */
    reportBehavior(req: shared.CreateBehaviorInput, security: operations.ReportBehaviorSecurity, config?: AxiosRequestConfig): Promise<operations.ReportBehaviorResponse>;
}
