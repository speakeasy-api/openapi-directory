import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateModerationResponseResultsCategories extends SpeakeasyBase {
    hate: boolean;
    hateThreatening: boolean;
    selfHarm: boolean;
    sexual: boolean;
    sexualMinors: boolean;
    violence: boolean;
    violenceGraphic: boolean;
}
export declare class CreateModerationResponseResultsCategoryScores extends SpeakeasyBase {
    hate: number;
    hateThreatening: number;
    selfHarm: number;
    sexual: number;
    sexualMinors: number;
    violence: number;
    violenceGraphic: number;
}
export declare class CreateModerationResponseResults extends SpeakeasyBase {
    categories: CreateModerationResponseResultsCategories;
    categoryScores: CreateModerationResponseResultsCategoryScores;
    flagged: boolean;
}
/**
 * OK
 */
export declare class CreateModerationResponse extends SpeakeasyBase {
    id: string;
    model: string;
    results: CreateModerationResponseResults[];
}
