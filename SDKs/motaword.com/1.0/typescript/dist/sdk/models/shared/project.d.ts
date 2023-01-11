import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
import { ErrorT } from "./error";
import { ProjectLinks } from "./projectlinks";
import { VendorProjectPair } from "./vendorprojectpair";
import { VendorProjectRoleEnum } from "./vendorprojectroleenum";
import { ProjectSourceEnum } from "./projectsourceenum";
import { ProjectStatusEnum } from "./projectstatusenum";
export declare class ProjectPrice extends SpeakeasyBase {
    amount?: number;
    currency?: string;
    usdAmount?: number;
}
export declare class ProjectPriceWithoutDiscount extends SpeakeasyBase {
    amount?: number;
    currency?: string;
    usdAmount?: number;
}
export declare class Project extends SpeakeasyBase {
    averageScores?: Record<string, number>;
    budgetCode?: string;
    callbackUrl?: string;
    client?: User;
    completedOn?: Date;
    continuousProjectType?: string;
    createdAt?: number;
    custom?: Record<string, any>;
    deliveryAt?: number;
    errors?: ErrorT[];
    id?: number;
    isApiProject?: boolean;
    isCertified?: boolean;
    isContinuous?: boolean;
    isManual?: boolean;
    links?: ProjectLinks;
    pairs?: VendorProjectPair[];
    price?: ProjectPrice;
    priceWithoutDiscount?: ProjectPriceWithoutDiscount;
    role?: VendorProjectRoleEnum;
    shouldSendClientSurvey?: boolean;
    source?: ProjectSourceEnum;
    sourceLanguage?: string;
    status?: ProjectStatusEnum;
    subjects?: string[];
    targetLanguages?: string[];
    tmsName?: string;
    validUntil?: number;
    vendorWordCount?: number;
    wordCount?: number;
}
