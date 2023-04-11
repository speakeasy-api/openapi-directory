import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeliveryPredictionInLanguage extends SpeakeasyBase {
    language?: string;
    /**
     * true for late, false for on-time delivery
     */
    late?: boolean;
    probability?: number;
}
