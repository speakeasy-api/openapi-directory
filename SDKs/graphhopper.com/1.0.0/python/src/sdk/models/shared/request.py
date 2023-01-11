import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import algorithm as shared_algorithm
from ..shared import configuration as shared_configuration
from ..shared import costmatrix as shared_costmatrix
from ..shared import objective as shared_objective
from ..shared import jobrelation as shared_jobrelation
from ..shared import grouprelation as shared_grouprelation
from ..shared import service as shared_service
from ..shared import shipment as shared_shipment
from ..shared import vehicletype as shared_vehicletype
from ..shared import vehicle as shared_vehicle


@dataclass_json
@dataclasses.dataclass
class Request:
    algorithm: Optional[shared_algorithm.Algorithm] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    configuration: Optional[shared_configuration.Configuration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    cost_matrices: Optional[list[shared_costmatrix.CostMatrix]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost_matrices') }})
    objectives: Optional[list[shared_objective.Objective]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectives') }})
    relations: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relations') }})
    services: Optional[list[shared_service.Service]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    shipments: Optional[list[shared_shipment.Shipment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipments') }})
    vehicle_types: Optional[list[shared_vehicletype.VehicleType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicle_types') }})
    vehicles: Optional[list[shared_vehicle.Vehicle]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicles') }})
    
