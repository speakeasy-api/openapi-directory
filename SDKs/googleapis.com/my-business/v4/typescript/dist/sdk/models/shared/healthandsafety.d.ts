import { SpeakeasyBase } from "../../../internal/utils";
import { EnhancedCleaning } from "./enhancedcleaning";
import { IncreasedFoodSafety } from "./increasedfoodsafety";
import { MinimizedContact } from "./minimizedcontact";
import { PersonalProtection } from "./personalprotection";
import { PhysicalDistancing } from "./physicaldistancing";
/**
 * Health and safety measures implemented by the hotel during COVID-19.
 */
export declare class HealthAndSafety extends SpeakeasyBase {
    /**
     * Enhanced cleaning measures implemented by the hotel during COVID-19.
     */
    enhancedCleaning?: EnhancedCleaning;
    /**
     * Increased food safety measures implemented by the hotel during COVID-19.
     */
    increasedFoodSafety?: IncreasedFoodSafety;
    /**
     * Minimized contact measures implemented by the hotel during COVID-19.
     */
    minimizedContact?: MinimizedContact;
    /**
     * Personal protection measures implemented by the hotel during COVID-19.
     */
    personalProtection?: PersonalProtection;
    /**
     * Physical distancing measures implemented by the hotel during COVID-19.
     */
    physicalDistancing?: PhysicalDistancing;
}
