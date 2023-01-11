import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class EnergyEfficiencyEnergyConservationProgramExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class EnergyEfficiencyEnergyEfficientLightingExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class EnergyEfficiencyEnergySavingThermostatsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class EnergyEfficiencyGreenBuildingDesignExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclasses.dataclass
class EnergyEfficiency:
    r"""EnergyEfficiency
    Energy efficiency practices implemented at the hotel.
    """
    
    carbon_free_energy_sources: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carbonFreeEnergySources') }})
    carbon_free_energy_sources_exception: Optional[EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carbonFreeEnergySourcesException') }})
    energy_conservation_program: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyConservationProgram') }})
    energy_conservation_program_exception: Optional[EnergyEfficiencyEnergyConservationProgramExceptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyConservationProgramException') }})
    energy_efficient_heating_and_cooling_systems: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyEfficientHeatingAndCoolingSystems') }})
    energy_efficient_heating_and_cooling_systems_exception: Optional[EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyEfficientHeatingAndCoolingSystemsException') }})
    energy_efficient_lighting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyEfficientLighting') }})
    energy_efficient_lighting_exception: Optional[EnergyEfficiencyEnergyEfficientLightingExceptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyEfficientLightingException') }})
    energy_saving_thermostats: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energySavingThermostats') }})
    energy_saving_thermostats_exception: Optional[EnergyEfficiencyEnergySavingThermostatsExceptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energySavingThermostatsException') }})
    green_building_design: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('greenBuildingDesign') }})
    green_building_design_exception: Optional[EnergyEfficiencyGreenBuildingDesignExceptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('greenBuildingDesignException') }})
    independent_organization_audits_energy_use: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('independentOrganizationAuditsEnergyUse') }})
    independent_organization_audits_energy_use_exception: Optional[EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('independentOrganizationAuditsEnergyUseException') }})
    

@dataclass_json
@dataclasses.dataclass
class EnergyEfficiencyInput:
    r"""EnergyEfficiencyInput
    Energy efficiency practices implemented at the hotel.
    """
    
    carbon_free_energy_sources: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carbonFreeEnergySources') }})
    carbon_free_energy_sources_exception: Optional[EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carbonFreeEnergySourcesException') }})
    energy_conservation_program: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyConservationProgram') }})
    energy_conservation_program_exception: Optional[EnergyEfficiencyEnergyConservationProgramExceptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyConservationProgramException') }})
    energy_efficient_heating_and_cooling_systems: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyEfficientHeatingAndCoolingSystems') }})
    energy_efficient_heating_and_cooling_systems_exception: Optional[EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyEfficientHeatingAndCoolingSystemsException') }})
    energy_efficient_lighting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyEfficientLighting') }})
    energy_efficient_lighting_exception: Optional[EnergyEfficiencyEnergyEfficientLightingExceptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyEfficientLightingException') }})
    energy_saving_thermostats: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energySavingThermostats') }})
    energy_saving_thermostats_exception: Optional[EnergyEfficiencyEnergySavingThermostatsExceptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energySavingThermostatsException') }})
    independent_organization_audits_energy_use: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('independentOrganizationAuditsEnergyUse') }})
    independent_organization_audits_energy_use_exception: Optional[EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('independentOrganizationAuditsEnergyUseException') }})
    
