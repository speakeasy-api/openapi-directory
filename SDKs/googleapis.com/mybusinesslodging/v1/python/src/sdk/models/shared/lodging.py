import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accessibility as shared_accessibility
from ..shared import activities as shared_activities
from ..shared import guestunitfeatures as shared_guestunitfeatures
from ..shared import business as shared_business
from ..shared import livingarea as shared_livingarea
from ..shared import connectivity as shared_connectivity
from ..shared import families as shared_families
from ..shared import foodanddrink as shared_foodanddrink
from ..shared import guestunittype as shared_guestunittype
from ..shared import healthandsafety as shared_healthandsafety
from ..shared import housekeeping as shared_housekeeping
from ..shared import lodgingmetadata as shared_lodgingmetadata
from ..shared import parking as shared_parking
from ..shared import pets as shared_pets
from ..shared import policies as shared_policies
from ..shared import pools as shared_pools
from ..shared import property as shared_property
from ..shared import services as shared_services
from ..shared import sustainability as shared_sustainability
from ..shared import transportation as shared_transportation
from ..shared import wellness as shared_wellness
from ..shared import sustainability as shared_sustainability


@dataclass_json
@dataclasses.dataclass
class Lodging:
    r"""Lodging
    Lodging of a location that provides accomodations.
    """
    
    accessibility: Optional[shared_accessibility.Accessibility] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessibility') }})
    activities: Optional[shared_activities.Activities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activities') }})
    all_units: Optional[shared_guestunitfeatures.GuestUnitFeatures] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allUnits') }})
    business: Optional[shared_business.Business] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business') }})
    common_living_area: Optional[shared_livingarea.LivingArea] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonLivingArea') }})
    connectivity: Optional[shared_connectivity.Connectivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectivity') }})
    families: Optional[shared_families.Families] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('families') }})
    food_and_drink: Optional[shared_foodanddrink.FoodAndDrink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foodAndDrink') }})
    guest_units: Optional[list[shared_guestunittype.GuestUnitType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestUnits') }})
    health_and_safety: Optional[shared_healthandsafety.HealthAndSafety] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthAndSafety') }})
    housekeeping: Optional[shared_housekeeping.Housekeeping] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('housekeeping') }})
    metadata: Optional[shared_lodgingmetadata.LodgingMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parking: Optional[shared_parking.Parking] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parking') }})
    pets: Optional[shared_pets.Pets] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pets') }})
    policies: Optional[shared_policies.Policies] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    pools: Optional[shared_pools.Pools] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pools') }})
    property: Optional[shared_property.Property] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    services: Optional[shared_services.Services] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    some_units: Optional[shared_guestunitfeatures.GuestUnitFeatures] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('someUnits') }})
    sustainability: Optional[shared_sustainability.Sustainability] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sustainability') }})
    transportation: Optional[shared_transportation.Transportation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transportation') }})
    wellness: Optional[shared_wellness.Wellness] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wellness') }})
    

@dataclass_json
@dataclasses.dataclass
class LodgingInput:
    r"""LodgingInput
    Lodging of a location that provides accomodations.
    """
    
    accessibility: Optional[shared_accessibility.Accessibility] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessibility') }})
    activities: Optional[shared_activities.Activities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activities') }})
    all_units: Optional[shared_guestunitfeatures.GuestUnitFeatures] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allUnits') }})
    business: Optional[shared_business.Business] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business') }})
    common_living_area: Optional[shared_livingarea.LivingArea] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonLivingArea') }})
    connectivity: Optional[shared_connectivity.Connectivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectivity') }})
    families: Optional[shared_families.Families] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('families') }})
    food_and_drink: Optional[shared_foodanddrink.FoodAndDrink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foodAndDrink') }})
    guest_units: Optional[list[shared_guestunittype.GuestUnitType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestUnits') }})
    health_and_safety: Optional[shared_healthandsafety.HealthAndSafety] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthAndSafety') }})
    housekeeping: Optional[shared_housekeeping.Housekeeping] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('housekeeping') }})
    metadata: Optional[shared_lodgingmetadata.LodgingMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parking: Optional[shared_parking.Parking] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parking') }})
    pets: Optional[shared_pets.Pets] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pets') }})
    policies: Optional[shared_policies.Policies] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    pools: Optional[shared_pools.Pools] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pools') }})
    property: Optional[shared_property.Property] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    services: Optional[shared_services.Services] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    some_units: Optional[shared_guestunitfeatures.GuestUnitFeatures] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('someUnits') }})
    sustainability: Optional[shared_sustainability.SustainabilityInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sustainability') }})
    transportation: Optional[shared_transportation.Transportation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transportation') }})
    wellness: Optional[shared_wellness.Wellness] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wellness') }})
    
