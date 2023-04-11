import { SpeakeasyBase } from "../../../internal/utils";
import { ProofreaderWithLanguage } from "./proofreaderwithlanguage";
/**
 * information for all nps survey that this client completed
 */
export declare class ClientProfileNpsAverage extends SpeakeasyBase {
    /**
     * total number of completed survey count by this client
     */
    completedSurveysCount?: number;
    /**
     * average score for all coompleted surveys
     */
    score?: number;
}
/**
 * last survey info
 */
export declare class ClientProfileNpsLast extends SpeakeasyBase {
    /**
     * last surveys completion date
     */
    completionDate?: Date;
    /**
     * score that the client gave us
     */
    score?: number;
}
/**
 * net promoter score info for this client
 */
export declare class ClientProfileNps extends SpeakeasyBase {
    /**
     * information for all nps survey that this client completed
     */
    average?: ClientProfileNpsAverage;
    /**
     * last survey info
     */
    last?: ClientProfileNpsLast;
}
/**
 * Client profile
 */
export declare class ClientProfile extends SpeakeasyBase {
    /**
     * the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
     */
    accountCreationDate?: Date;
    /**
     * total project count that this client sent
     */
    clientProjectCount?: number;
    /**
     * corporate name
     */
    corporate?: string;
    /**
     * corporate id
     */
    corporateId?: number;
    /**
     * total user count in a corporation
     */
    corporateUserCount?: number;
    /**
     * the file extension for the files that usually this client sent
     */
    frequentFileExtension?: string;
    /**
     * frequent language pairs
     */
    frequentLanguagePairs?: string[];
    /**
     * full name of the client
     */
    fullName?: string;
    /**
     * The answer for the question "Is there any growth for this corporate's spending". The values can be true, false or null if the corporate is oour client for less than 6 months
     */
    growth?: boolean;
    /**
     * the answer for the question "Is this client usually sent complex projects?"
     */
    isComplex?: boolean;
    /**
     * corporate's spending in twelve months
     */
    last12MonthsSpending?: number;
    /**
     * the quote number for the last project of this client
     */
    lastProject?: number;
    /**
     * the creation date of the last project that is sent by this client
     */
    lastProjectTime?: Date;
    /**
     * list of prooofreaders for the target languages of last project
     */
    lastProofreaders?: ProofreaderWithLanguage[];
    /**
     * notes that is submited for this client and/or with her projects
     */
    notes?: string[];
    /**
     * net promoter score info for this client
     */
    nps?: ClientProfileNps;
    /**
     * rank of the user in all corporate users for project count. If the user is the most active user foor sending projects her rank is 1
     */
    userRankInProjectCount?: number;
    /**
     * rank of the user in all corporate users for total spending. If the user is the most active user for spending her rank is 1
     */
    userRankInSpending?: number;
}
