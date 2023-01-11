import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assembly as shared_assembly
from ..shared import species as shared_species


@dataclass_json
@dataclasses.dataclass
class StructureResourceAttributes:
    r"""StructureResourceAttributes
    This class contains the Field for the attributes used to represent a structure, e.g. unit cell, atoms, positions.
    """
    
    cartesian_site_positions: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cartesian_site_positions') }})
    chemical_formula_anonymous: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('chemical_formula_anonymous') }})
    chemical_formula_descriptive: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('chemical_formula_descriptive') }})
    chemical_formula_reduced: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('chemical_formula_reduced') }})
    dimension_types: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension_types') }})
    elements: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('elements') }})
    elements_ratios: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('elements_ratios') }})
    last_modified: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_modified'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lattice_vectors: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lattice_vectors') }})
    nelements: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nelements') }})
    nperiodic_dimensions: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nperiodic_dimensions') }})
    nsites: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nsites') }})
    species: list[shared_species.Species] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('species') }})
    species_at_sites: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('species_at_sites') }})
    structure_features: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('structure_features') }})
    assemblies: Optional[list[shared_assembly.Assembly]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assemblies') }})
    chemical_formula_hill: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chemical_formula_hill') }})
    immutable_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('immutable_id') }})
    
