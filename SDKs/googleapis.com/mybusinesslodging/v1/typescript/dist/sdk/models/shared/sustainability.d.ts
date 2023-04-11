import { SpeakeasyBase } from "../../../internal/utils";
import { EnergyEfficiency, EnergyEfficiencyInput } from "./energyefficiency";
import { SustainabilityCertifications } from "./sustainabilitycertifications";
import { SustainableSourcing } from "./sustainablesourcing";
import { WasteReduction } from "./wastereduction";
import { WaterConservation } from "./waterconservation";
/**
 * Sustainability practices implemented at the hotel.
 */
export declare class SustainabilityInput extends SpeakeasyBase {
    /**
     * Energy efficiency practices implemented at the hotel.
     */
    energyEfficiency?: EnergyEfficiencyInput;
    /**
     * Sustainability certifications the hotel has been awarded.
     */
    sustainabilityCertifications?: SustainabilityCertifications;
    /**
     * Sustainable sourcing practices implemented at the hotel.
     */
    sustainableSourcing?: SustainableSourcing;
    /**
     * Waste reduction practices implemented at the hotel.
     */
    wasteReduction?: WasteReduction;
    /**
     * Water conservation practices implemented at the hotel.
     */
    waterConservation?: WaterConservation;
}
/**
 * Sustainability practices implemented at the hotel.
 */
export declare class Sustainability extends SpeakeasyBase {
    /**
     * Energy efficiency practices implemented at the hotel.
     */
    energyEfficiency?: EnergyEfficiency;
    /**
     * Sustainability certifications the hotel has been awarded.
     */
    sustainabilityCertifications?: SustainabilityCertifications;
    /**
     * Sustainable sourcing practices implemented at the hotel.
     */
    sustainableSourcing?: SustainableSourcing;
    /**
     * Waste reduction practices implemented at the hotel.
     */
    wasteReduction?: WasteReduction;
    /**
     * Water conservation practices implemented at the hotel.
     */
    waterConservation?: WaterConservation;
}
