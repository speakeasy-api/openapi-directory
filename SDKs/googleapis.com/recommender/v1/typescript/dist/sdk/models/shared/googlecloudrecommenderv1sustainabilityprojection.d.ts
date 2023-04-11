import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains metadata about how much sustainability a recommendation can save or incur.
 */
export declare class GoogleCloudRecommenderV1SustainabilityProjection extends SpeakeasyBase {
    /**
     * Duration for which this sustainability applies.
     */
    duration?: string;
    /**
     * Carbon Footprint generated in kg of CO2 equivalent. Chose kg_c_o2e so that the name renders correctly in camelCase (kgCO2e).
     */
    kgCo2e?: number;
}
