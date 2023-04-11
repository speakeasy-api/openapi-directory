import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { ProjectLinks } from "./projectlinks";
import { ProjectSourceEnum } from "./projectsourceenum";
import { ProjectStatusEnum } from "./projectstatusenum";
import { User } from "./user";
import { VendorProjectPair } from "./vendorprojectpair";
import { VendorProjectRoleEnum } from "./vendorprojectroleenum";
export declare class ProjectInSearchPrice extends SpeakeasyBase {
    amount?: number;
    baseAmount?: number;
    baseCurrency?: string;
    currency?: string;
    /**
     * USD is our base pricing currency. If `currency` is different, this will help.
     */
    usdAmount?: number;
}
export declare class ProjectInSearchPriceWithoutDiscount extends SpeakeasyBase {
    amount?: number;
    baseAmount?: number;
    baseCurrency?: string;
    currency?: string;
    /**
     * USD is our base pricing currency. If `currency` is different, this will help.
     */
    usdAmount?: number;
}
export declare class ProjectInSearchWordCountAnalysis extends SpeakeasyBase {
    base?: number;
    duplicate?: number;
    exclusion?: number;
    final?: number;
    tm?: number;
}
export declare class ProjectInSearch extends SpeakeasyBase {
    averageScores?: Record<string, number>;
    budgetCode?: string;
    /**
     * Callback URL to notify when project status changed.
     */
    callbackUrl?: string;
    canPamManage?: boolean;
    client?: User;
    /**
     * Assigned admin's id
     */
    cmId?: number;
    /**
     * the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
     */
    completedOn?: Date;
    continuousProjectType?: string;
    /**
     * Unix epoch time
     */
    createdAt?: number;
    /**
     * Custom data provided while creating a new project.
     */
    custom?: Record<string, any>;
    /**
     * Unix epoch time
     */
    deliveryAt?: number;
    /**
     * A list of errors. Visible when creating a project and uploading your documents at the same time, in case of multiple errors.
     */
    errors?: ErrorT[];
    id?: number;
    isApiProject?: boolean;
    isCertified?: boolean;
    isContinuous?: boolean;
    isManual?: boolean;
    links?: ProjectLinks;
    /**
     * Currently authed vendor's available working language pairs in this project. Includes rates per language pair. Includes complex pair logic such as bilingualism, project reverse pair enforcement etc.
     */
    pairs?: VendorProjectPair[];
    /**
     * Quote IDs of pivots
     */
    pivotedProjects?: number[];
    price?: ProjectInSearchPrice;
    priceWithoutDiscount?: ProjectInSearchPriceWithoutDiscount;
    /**
     * Currently authed vendor's role in this project. If vendor has already joined, this contains the role they joined the project with. If not joined yet, this is the role that they can join the project with.
     */
    role?: VendorProjectRoleEnum;
    searchResultReason?: string;
    shouldSendClientSurvey?: boolean;
    source?: ProjectSourceEnum;
    sourceLanguage?: string;
    status?: ProjectStatusEnum;
    subjects?: string[];
    targetLanguages?: string[];
    /**
     * TMS project name for this MW project. Requires privileged scope.
     */
    tmsName?: string;
    /**
     * Unix epoch time. Available only if status is `pending`.
     */
    validUntil?: number;
    vendorWordCount?: number;
    wordCount?: number;
    wordCountAnalysis?: ProjectInSearchWordCountAnalysis;
}
