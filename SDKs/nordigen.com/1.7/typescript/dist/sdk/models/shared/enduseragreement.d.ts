import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an end-user agreement.
**/
export declare class EndUserAgreement extends SpeakeasyBase {
    accepted?: Date;
    accessScope?: string[];
    accessValidForDays?: number;
    aspspId: string;
    created?: Date;
    enduserId: string;
    id?: string;
    maxHistoricalDays: number;
}
/**
 * Represents an end-user agreement.
**/
export declare class EndUserAgreementInput extends SpeakeasyBase {
    accessScope?: string[];
    aspspId: string;
    enduserId: string;
    maxHistoricalDays: number;
}
