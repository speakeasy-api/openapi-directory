import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Carbon free energy sources exception.
 */
export declare enum EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Energy conservation program exception.
 */
export declare enum EnergyEfficiencyEnergyConservationProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Energy efficient heating and cooling systems exception.
 */
export declare enum EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Energy efficient lighting exception.
 */
export declare enum EnergyEfficiencyEnergyEfficientLightingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Energy saving thermostats exception.
 */
export declare enum EnergyEfficiencyEnergySavingThermostatsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Independent organization audits energy use exception.
 */
export declare enum EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Energy efficiency practices implemented at the hotel.
 */
export declare class EnergyEfficiencyInput extends SpeakeasyBase {
    /**
     * Carbon free energy sources. Property sources carbon-free electricity via at least one of the following methods: on-site clean energy generation, power purchase agreement(s) with clean energy generators, green power provided by electricity supplier, or purchases of Energy Attribute Certificates (such as Renewable Energy Certificates or Guarantees of Origin).
     */
    carbonFreeEnergySources?: boolean;
    /**
     * Carbon free energy sources exception.
     */
    carbonFreeEnergySourcesException?: EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum;
    /**
     * Energy conservation program. The property tracks corporate-level Scope 1 and 2 GHG emissions, and Scope 3 emissions if available. The property has a commitment to implement initiatives that reduce GHG emissions year over year. The property has shown an absolute reduction in emissions for at least 2 years. Emissions are either verfied by a third-party and/or published in external communications.
     */
    energyConservationProgram?: boolean;
    /**
     * Energy conservation program exception.
     */
    energyConservationProgramException?: EnergyEfficiencyEnergyConservationProgramExceptionEnum;
    /**
     * Energy efficient heating and cooling systems. The property doesn't use chlorofluorocarbon (CFC)-based refrigerants in heating, ventilating, and air-conditioning systems unless a third-party audit shows it's not economically feasible. The CFC-based refrigerants which are used should have a Global Warming Potential (GWP) ≤ 10. The property uses occupancy sensors on HVAC systems in back-of-house spaces, meeting rooms, and other low-traffic areas.
     */
    energyEfficientHeatingAndCoolingSystems?: boolean;
    /**
     * Energy efficient heating and cooling systems exception.
     */
    energyEfficientHeatingAndCoolingSystemsException?: EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum;
    /**
     * Energy efficient lighting. At least 75% of the property's lighting is energy efficient, using lighting that is more than 45 lumens per watt – typically LED or CFL lightbulbs.
     */
    energyEfficientLighting?: boolean;
    /**
     * Energy efficient lighting exception.
     */
    energyEfficientLightingException?: EnergyEfficiencyEnergyEfficientLightingExceptionEnum;
    /**
     * Energy saving thermostats. The property installed energy-saving thermostats throughout the building to conserve energy when rooms or areas are not in use. Energy-saving thermostats are devices that control heating/cooling in the building by learning temperature preferences and automatically adjusting to energy-saving temperatures as the default. The thermostats are automatically set to a temperature between 68-78 degrees F (20-26 °C), depending on seasonality. In the winter, set the thermostat to 68°F (20°C) when the room is occupied, lowering room temperature when unoccupied. In the summer, set the thermostat to 78°F (26°C) when the room is occupied.
     */
    energySavingThermostats?: boolean;
    /**
     * Energy saving thermostats exception.
     */
    energySavingThermostatsException?: EnergyEfficiencyEnergySavingThermostatsExceptionEnum;
    /**
     * Independent organization audits energy use. The property conducts an energy audit at least every 5 years, the results of which are either verified by a third-party and/or published in external communications. An energy audit is a detailed assessment of the facility which provides recommendations to existing operations and procedures to improve energy efficiency, available incentives or rebates,and opportunities for improvements through renovations or upgrades. Examples of organizations that conduct credible third party audits include: Engie Impact, DNV GL (EU), Dexma, and local utility providers (they often provide energy and water audits).
     */
    independentOrganizationAuditsEnergyUse?: boolean;
    /**
     * Independent organization audits energy use exception.
     */
    independentOrganizationAuditsEnergyUseException?: EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum;
}
/**
 * Output only. Green building design exception.
 */
export declare enum EnergyEfficiencyGreenBuildingDesignExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Energy efficiency practices implemented at the hotel.
 */
export declare class EnergyEfficiency extends SpeakeasyBase {
    /**
     * Carbon free energy sources. Property sources carbon-free electricity via at least one of the following methods: on-site clean energy generation, power purchase agreement(s) with clean energy generators, green power provided by electricity supplier, or purchases of Energy Attribute Certificates (such as Renewable Energy Certificates or Guarantees of Origin).
     */
    carbonFreeEnergySources?: boolean;
    /**
     * Carbon free energy sources exception.
     */
    carbonFreeEnergySourcesException?: EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum;
    /**
     * Energy conservation program. The property tracks corporate-level Scope 1 and 2 GHG emissions, and Scope 3 emissions if available. The property has a commitment to implement initiatives that reduce GHG emissions year over year. The property has shown an absolute reduction in emissions for at least 2 years. Emissions are either verfied by a third-party and/or published in external communications.
     */
    energyConservationProgram?: boolean;
    /**
     * Energy conservation program exception.
     */
    energyConservationProgramException?: EnergyEfficiencyEnergyConservationProgramExceptionEnum;
    /**
     * Energy efficient heating and cooling systems. The property doesn't use chlorofluorocarbon (CFC)-based refrigerants in heating, ventilating, and air-conditioning systems unless a third-party audit shows it's not economically feasible. The CFC-based refrigerants which are used should have a Global Warming Potential (GWP) ≤ 10. The property uses occupancy sensors on HVAC systems in back-of-house spaces, meeting rooms, and other low-traffic areas.
     */
    energyEfficientHeatingAndCoolingSystems?: boolean;
    /**
     * Energy efficient heating and cooling systems exception.
     */
    energyEfficientHeatingAndCoolingSystemsException?: EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum;
    /**
     * Energy efficient lighting. At least 75% of the property's lighting is energy efficient, using lighting that is more than 45 lumens per watt – typically LED or CFL lightbulbs.
     */
    energyEfficientLighting?: boolean;
    /**
     * Energy efficient lighting exception.
     */
    energyEfficientLightingException?: EnergyEfficiencyEnergyEfficientLightingExceptionEnum;
    /**
     * Energy saving thermostats. The property installed energy-saving thermostats throughout the building to conserve energy when rooms or areas are not in use. Energy-saving thermostats are devices that control heating/cooling in the building by learning temperature preferences and automatically adjusting to energy-saving temperatures as the default. The thermostats are automatically set to a temperature between 68-78 degrees F (20-26 °C), depending on seasonality. In the winter, set the thermostat to 68°F (20°C) when the room is occupied, lowering room temperature when unoccupied. In the summer, set the thermostat to 78°F (26°C) when the room is occupied.
     */
    energySavingThermostats?: boolean;
    /**
     * Energy saving thermostats exception.
     */
    energySavingThermostatsException?: EnergyEfficiencyEnergySavingThermostatsExceptionEnum;
    /**
     * Output only. Green building design. True if BREEAM-* or LEED-* certified.
     */
    greenBuildingDesign?: boolean;
    /**
     * Output only. Green building design exception.
     */
    greenBuildingDesignException?: EnergyEfficiencyGreenBuildingDesignExceptionEnum;
    /**
     * Independent organization audits energy use. The property conducts an energy audit at least every 5 years, the results of which are either verified by a third-party and/or published in external communications. An energy audit is a detailed assessment of the facility which provides recommendations to existing operations and procedures to improve energy efficiency, available incentives or rebates,and opportunities for improvements through renovations or upgrades. Examples of organizations that conduct credible third party audits include: Engie Impact, DNV GL (EU), Dexma, and local utility providers (they often provide energy and water audits).
     */
    independentOrganizationAuditsEnergyUse?: boolean;
    /**
     * Independent organization audits energy use exception.
     */
    independentOrganizationAuditsEnergyUseException?: EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum;
}
