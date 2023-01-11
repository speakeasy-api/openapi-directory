<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        bearer=shared.SchemeBearer(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CircuitsCircuitTerminationsCreateRequest(
    request=shared.WritableCircuitTerminationInput(
        cable=shared.NestedCableInput(
            label="nemo",
        ),
        circuit=7890651243899766706,
        connection_status=True,
        description="hic",
        port_speed=4398235907993438713,
        pp_info="cupiditate",
        site=8328236888456191330,
        term_side="A",
        upstream_speed=8250179090128807741,
        xconnect_id="quis",
    ),
)
    
res = s.circuits.circuits_circuit_terminations_create(req)

if res.circuit_termination is not None:
    # handle response
```
<!-- End SDK Example Usage -->