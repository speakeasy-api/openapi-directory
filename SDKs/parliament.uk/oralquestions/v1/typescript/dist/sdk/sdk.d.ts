import { EarlyDayMotions } from "./earlydaymotions";
import { OralQuestions } from "./oralquestions";
import { OralQuestionTimes } from "./oralquestiontimes";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://oralquestionsandmotions-api.parliament.uk", "https://oralquestionsandmotions-api.parliament.uk"];
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
 * An API that allows querying all tabled oral and written questions, and motions for the House of Commons.
 */
export declare class SDK {
    earlyDayMotions: EarlyDayMotions;
    oralQuestionTimes: OralQuestionTimes;
    oralQuestions: OralQuestions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
