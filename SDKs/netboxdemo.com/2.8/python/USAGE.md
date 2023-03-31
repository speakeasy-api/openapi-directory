<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer="YOUR_API_KEY_HERE",
    ),
)


req = shared.WritableCircuitTerminationInput(
    cable=shared.NestedCableInput(
        label="corrupti",
    ),
    circuit=592845,
    connection_status="true",
    description="quibusdam",
    port_speed=602763,
    pp_info="nulla",
    site=544883,
    term_side="Z",
    upstream_speed=423655,
    xconnect_id="error",
)
    
res = s.circuits.circuits_circuit_terminations_create(req)

if res.circuit_termination is not None:
    # handle response
```
<!-- End SDK Example Usage -->