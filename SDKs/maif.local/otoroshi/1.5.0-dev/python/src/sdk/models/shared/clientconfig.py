import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ClientConfig:
    r"""ClientConfig
    The configuration of the circuit breaker for a service descriptor
    """
    
    backoff_factor: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('backoffFactor') }})
    call_timeout: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('callTimeout') }})
    global_timeout: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('globalTimeout') }})
    max_errors: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxErrors') }})
    retries: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    retry_initial_delay: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryInitialDelay') }})
    sample_interval: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleInterval') }})
    use_circuit_breaker: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('useCircuitBreaker') }})
    
