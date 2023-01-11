import { SpeakeasyBase } from "../../../internal/utils";
import { ProofreaderWithLanguage } from "./proofreaderwithlanguage";
/**
 * information for all nps survey that this client completed
**/
export declare class ClientProfileNpsAverage extends SpeakeasyBase {
    completedSurveysCount?: number;
    score?: number;
}
/**
 * last survey info
**/
export declare class ClientProfileNpsLast extends SpeakeasyBase {
    completionDate?: Date;
    score?: number;
}
/**
 * net promoter score info for this client
**/
export declare class ClientProfileNps extends SpeakeasyBase {
    average?: ClientProfileNpsAverage;
    last?: ClientProfileNpsLast;
}
export declare class ClientProfile extends SpeakeasyBase {
    accountCreationDate?: Date;
    clientProjectCount?: number;
    corporate?: string;
    corporateId?: number;
    corporateUserCount?: number;
    frequentFileExtension?: string;
    frequentLanguagePairs?: string[];
    fullName?: string;
    growth?: boolean;
    isComplex?: boolean;
    last12MonthsSpending?: number;
    lastProject?: number;
    lastProjectTime?: Date;
    lastProofreaders?: ProofreaderWithLanguage[];
    notes?: string[];
    nps?: ClientProfileNps;
    userRankInProjectCount?: number;
    userRankInSpending?: number;
}
