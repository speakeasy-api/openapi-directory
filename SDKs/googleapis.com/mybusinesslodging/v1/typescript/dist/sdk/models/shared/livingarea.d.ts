import { SpeakeasyBase } from "../../../internal/utils";
import { LivingAreaAccessibility } from "./livingareaaccessibility";
import { LivingAreaEating } from "./livingareaeating";
import { LivingAreaFeatures } from "./livingareafeatures";
import { LivingAreaLayout } from "./livingarealayout";
import { LivingAreaSleeping } from "./livingareasleeping";
/**
 * An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit.
 */
export declare class LivingArea extends SpeakeasyBase {
    /**
     * Accessibility features of the living area.
     */
    accessibility?: LivingAreaAccessibility;
    /**
     * Information about eating features in the living area.
     */
    eating?: LivingAreaEating;
    /**
     * Features in the living area.
     */
    features?: LivingAreaFeatures;
    /**
     * Information about the layout of the living area.
     */
    layout?: LivingAreaLayout;
    /**
     * Information about sleeping features in the living area.
     */
    sleeping?: LivingAreaSleeping;
}
