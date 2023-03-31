# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/seldon.local/engine/0.1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PredictJSONRequest(
    seldon_message=shared.SeldonMessage(
        bin_data="corrupti",
        data=shared.DefaultData(
            names=[
                "distinctio",
                "quibusdam",
                "unde",
            ],
            ndarray=[
                "corrupti",
                "illum",
                "vel",
                "error",
            ],
            tensor=shared.Tensor(
                shape=[
                    384382,
                    437587,
                    297534,
                ],
                values=[
                    567.13,
                    9636.63,
                    2726.56,
                    3834.41,
                ],
            ),
            tftensor=shared.TensorflowTensorProto(
                bool_val=[
                    False,
                    False,
                ],
                dcomplex_val=[
                    8121.69,
                    5288.95,
                    4799.77,
                    5680.45,
                ],
                double_val=[
                    9255.97,
                    8360.79,
                ],
                dtype="DT_INT32",
                float_val=[
                    871.29,
                    6481.72,
                ],
                half_val=[
                    368241,
                ],
                int64_val=[
                    "sapiente",
                    "quo",
                    "odit",
                    "at",
                ],
                int_val=[
                    978619,
                    473608,
                    799159,
                    800911,
                ],
                resource_handle_val=[
                    shared.TensorflowResourceHandleProto(
                        container="totam",
                        device="porro",
                        hash_code="dolorum",
                        maybe_type_name="dicta",
                        name="nam",
                    ),
                    shared.TensorflowResourceHandleProto(
                        container="officia",
                        device="occaecati",
                        hash_code="fugit",
                        maybe_type_name="deleniti",
                        name="hic",
                    ),
                ],
                scomplex_val=[
                    5218.48,
                    1059.07,
                    4146.62,
                    4736,
                ],
                string_val=[
                    "qui",
                    "impedit",
                ],
                tensor_content="cum",
                tensor_shape=shared.TensorflowTensorShapeProto(
                    dim=[
                        shared.TensorShapeProtoDim(
                            name="ipsum",
                            size="excepturi",
                        ),
                        shared.TensorShapeProtoDim(
                            name="aspernatur",
                            size="perferendis",
                        ),
                    ],
                    unknown_rank=False,
                ),
                uint32_val=[
                    617636,
                    149675,
                ],
                uint64_val=[
                    "dolor",
                    "natus",
                    "laboriosam",
                ],
                variant_val=[
                    shared.TensorflowVariantTensorDataProto(
                        metadata="saepe",
                        tensors=[
                            shared.TensorflowTensorProto(),
                            shared.TensorflowTensorProto(),
                            shared.TensorflowTensorProto(),
                        ],
                        type_name="in",
                    ),
                    shared.TensorflowVariantTensorDataProto(
                        metadata="corporis",
                        tensors=[
                            shared.TensorflowTensorProto(),
                            shared.TensorflowTensorProto(),
                            shared.TensorflowTensorProto(),
                        ],
                        type_name="iure",
                    ),
                    shared.TensorflowVariantTensorDataProto(
                        metadata="saepe",
                        tensors=[
                            shared.TensorflowTensorProto(),
                            shared.TensorflowTensorProto(),
                            shared.TensorflowTensorProto(),
                        ],
                        type_name="architecto",
                    ),
                    shared.TensorflowVariantTensorDataProto(
                        metadata="ipsa",
                        tensors=[
                            shared.TensorflowTensorProto(),
                            shared.TensorflowTensorProto(),
                            shared.TensorflowTensorProto(),
                            shared.TensorflowTensorProto(),
                        ],
                        type_name="est",
                    ),
                ],
                version_number=653140,
            ),
        ),
        meta=shared.Meta(
            metrics=[
                shared.Metric(
                    key="dolores",
                    type="COUNTER",
                    value=3581.52,
                ),
                shared.Metric(
                    key="explicabo",
                    type="TIMER",
                    value=3154.28,
                ),
                shared.Metric(
                    key="omnis",
                    type="GAUGE",
                    value=3250.47,
                ),
            ],
            puid="excepturi",
            request_path={
                "iure": "culpa",
            },
            routing={
                "sapiente": 102044,
                "mollitia": 208876,
                "culpa": 161309,
                "repellat": 653108,
            },
            tags={
                "numquam": "commodi",
                "quam": "molestiae",
                "velit": "error",
            },
        ),
        status=shared.Status(
            code=158969,
            info="quis",
            reason="vitae",
            status="FAILURE",
        ),
        str_data="animi",
    ),
    deployment="enim",
    namespace="odit",
)
    
res = s.external_ambassador_api.predict_json(req, operations.PredictJSONSecurity(
    http_bearer="Bearer YOUR_BEARER_TOKEN_HERE",
))

if res.seldon_message is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### external_ambassador_api

* `predict_json`
* `predict_raw`
* `predict_string`
* `send_feedback`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
