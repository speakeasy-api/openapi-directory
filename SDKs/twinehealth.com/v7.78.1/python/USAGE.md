<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.CreateActionRequestInput(
    data=shared.ActionResourceInput(
        attributes=shared.ActionResourceAttributesInput(
            thread="corrupti",
            details={
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            effective_from="vel",
            effective_to="error",
            frequency_goal=shared.ActionResourceAttributesFrequencyGoal(
                weeks=shared.ActionResourceAttributesFrequencyGoalWeeks(
                    days=[
                        "2",
                        "3",
                        "2",
                    ],
                ),
            ),
            identifiers=[
                shared.Identifier(
                    label="ipsa",
                    system="delectus",
                    value="tempora",
                ),
                shared.Identifier(
                    label="suscipit",
                    system="molestiae",
                    value="minus",
                ),
                shared.Identifier(
                    label="placeat",
                    system="voluptatum",
                    value="iusto",
                ),
                shared.Identifier(
                    label="excepturi",
                    system="nisi",
                    value="recusandae",
                ),
            ],
            intake={
                "ab": "quis",
                "veritatis": "deserunt",
                "perferendis": "ipsam",
                "repellendus": "sapiente",
            },
            metric_required=False,
            metrics=[
                shared.ActionMetric(
                    goal={
                        "at": "at",
                    },
                    metric_type="maiores",
                    unit="molestiae",
                    validations=shared.ActionMetricValidations(
                        maximum=shared.ActionMetricValidationsMaximum(
                            unit="quod",
                            value=8009.11,
                        ),
                        minimum=shared.ActionMetricValidationsMinimum(
                            unit="esse",
                            value=5204.78,
                        ),
                    ),
                ),
                shared.ActionMetric(
                    goal={
                        "dolorum": "dicta",
                        "nam": "officia",
                        "occaecati": "fugit",
                        "deleniti": "hic",
                    },
                    metric_type="optio",
                    unit="totam",
                    validations=shared.ActionMetricValidations(
                        maximum=shared.ActionMetricValidationsMaximum(
                            unit="beatae",
                            value=4146.62,
                        ),
                        minimum=shared.ActionMetricValidationsMinimum(
                            unit="molestiae",
                            value=2645.55,
                        ),
                    ),
                ),
                shared.ActionMetric(
                    goal={
                        "impedit": "cum",
                    },
                    metric_type="esse",
                    unit="ipsum",
                    validations=shared.ActionMetricValidations(
                        maximum=shared.ActionMetricValidationsMaximum(
                            unit="excepturi",
                            value=1352.18,
                        ),
                        minimum=shared.ActionMetricValidationsMinimum(
                            unit="perferendis",
                            value=3241.41,
                        ),
                    ),
                ),
                shared.ActionMetric(
                    goal={
                        "sed": "iste",
                        "dolor": "natus",
                        "laboriosam": "hic",
                    },
                    metric_type="saepe",
                    unit="fuga",
                    validations=shared.ActionMetricValidations(
                        maximum=shared.ActionMetricValidationsMaximum(
                            unit="in",
                            value=3595.08,
                        ),
                        minimum=shared.ActionMetricValidationsMinimum(
                            unit="iste",
                            value=4370.32,
                        ),
                    ),
                ),
            ],
            title="Dr.",
            tracking=False,
            type="other_lifestyle",
            windows=[
                shared.ActionWindow(
                    id="architecto",
                    title="Mr.",
                    type="reiciendis",
                ),
                shared.ActionWindow(
                    id="est",
                    title="Miss",
                    type="laborum",
                ),
                shared.ActionWindow(
                    id="dolores",
                    title="Mrs.",
                    type="corporis",
                ),
            ],
        ),
        id="explicabo",
        relationships=shared.ActionResourceRelationships(
            plan=shared.ActionResourceRelationshipsPlan(
                data=shared.ActionResourceRelationshipsPlanData(
                    id="nobis",
                    type="enim",
                ),
                links={
                    "nemo": "minima",
                    "excepturi": "accusantium",
                    "iure": "culpa",
                },
            ),
        ),
        type="doloribus",
    ),
)
    
res = s.action.create_action(req)

if res.create_action_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->