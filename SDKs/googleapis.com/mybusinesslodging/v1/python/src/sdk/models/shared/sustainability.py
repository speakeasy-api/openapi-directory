import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import energyefficiency as shared_energyefficiency
from ..shared import sustainabilitycertifications as shared_sustainabilitycertifications
from ..shared import sustainablesourcing as shared_sustainablesourcing
from ..shared import wastereduction as shared_wastereduction
from ..shared import waterconservation as shared_waterconservation
from ..shared import energyefficiency as shared_energyefficiency


@dataclass_json
@dataclasses.dataclass
class Sustainability:
    r"""Sustainability
    Sustainability practices implemented at the hotel.
    """
    
    energy_efficiency: Optional[shared_energyefficiency.EnergyEfficiency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyEfficiency') }})
    sustainability_certifications: Optional[shared_sustainabilitycertifications.SustainabilityCertifications] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sustainabilityCertifications') }})
    sustainable_sourcing: Optional[shared_sustainablesourcing.SustainableSourcing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sustainableSourcing') }})
    waste_reduction: Optional[shared_wastereduction.WasteReduction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wasteReduction') }})
    water_conservation: Optional[shared_waterconservation.WaterConservation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waterConservation') }})
    

@dataclass_json
@dataclasses.dataclass
class SustainabilityInput:
    r"""SustainabilityInput
    Sustainability practices implemented at the hotel.
    """
    
    energy_efficiency: Optional[shared_energyefficiency.EnergyEfficiencyInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyEfficiency') }})
    sustainability_certifications: Optional[shared_sustainabilitycertifications.SustainabilityCertifications] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sustainabilityCertifications') }})
    sustainable_sourcing: Optional[shared_sustainablesourcing.SustainableSourcing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sustainableSourcing') }})
    waste_reduction: Optional[shared_wastereduction.WasteReduction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wasteReduction') }})
    water_conservation: Optional[shared_waterconservation.WaterConservation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waterConservation') }})
    
