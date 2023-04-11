import { SpeakeasyBase } from "../../../internal/utils";
export declare class PortfolioActivationsMetadata extends SpeakeasyBase {
    rootContentId?: string;
}
export declare class PortfolioActivations extends SpeakeasyBase {
    contentId?: string;
    end?: Date;
    id?: string;
    info?: string;
    /**
     * number of learners in the offering, excluding facilitators and coaches
     */
    learnersCount?: number;
    metadata?: PortfolioActivationsMetadata;
    name?: string;
    start?: Date;
}
