import { AEAssessment } from "./aeassessment";
import { Application } from "./application";
import { Cis } from "./cis";
import { DpsMessage } from "./dpsmessage";
import { Employee } from "./employee";
import { Employer } from "./employer";
import { Healthcheck } from "./healthcheck";
import { HolidayScheme } from "./holidayscheme";
import { Jobs } from "./jobs";
import { JournalLine } from "./journalline";
import { Journals } from "./journals";
import { NominalCode } from "./nominalcode";
import { PayCode } from "./paycode";
import { PayInstruction } from "./payinstruction";
import { PayLine } from "./payline";
import { PayRun } from "./payrun";
import { PaySchedule } from "./payschedule";
import { Pension } from "./pension";
import { Permission } from "./permission";
import { Query } from "./query";
import { Reference } from "./reference";
import { ReportLine } from "./reportline";
import { ReportLineInstruction } from "./reportlineinstruction";
import { Reports } from "./reports";
import { Rti } from "./rti";
import { Schemas } from "./schemas";
import { SubContractor } from "./subcontractor";
import { Tagging } from "./tagging";
import { Templates } from "./templates";
import { ThirdPartyTransaction } from "./thirdpartytransaction";
import { ThirdPartyTransmission } from "./thirdpartytransmission";
import { User } from "./user";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.test.payrun.io"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
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
 * Open, scableable, transparent payroll API.
 *
 * @see {@link https://developer.test.payrun.io/docs} - External Documents
 */
export declare class SDK {
    aeAssessment: AEAssessment;
    application: Application;
    cis: Cis;
    dpsMessage: DpsMessage;
    employee: Employee;
    employer: Employer;
    healthcheck: Healthcheck;
    holidayScheme: HolidayScheme;
    jobs: Jobs;
    journalLine: JournalLine;
    journals: Journals;
    nominalCode: NominalCode;
    payCode: PayCode;
    payInstruction: PayInstruction;
    payLine: PayLine;
    payRun: PayRun;
    paySchedule: PaySchedule;
    pension: Pension;
    permission: Permission;
    query: Query;
    rti: Rti;
    reference: Reference;
    reportLine: ReportLine;
    reportLineInstruction: ReportLineInstruction;
    reports: Reports;
    schemas: Schemas;
    subContractor: SubContractor;
    tagging: Tagging;
    templates: Templates;
    thirdPartyTransaction: ThirdPartyTransaction;
    thirdPartyTransmission: ThirdPartyTransmission;
    user: User;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
