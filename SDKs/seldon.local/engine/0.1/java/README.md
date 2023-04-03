# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PredictJsonSecurity;
import org.openapis.openapi.models.operations.PredictJsonRequest;
import org.openapis.openapi.models.operations.PredictJsonResponse;
import org.openapis.openapi.models.shared.SeldonMessage;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.StatusStatusFlagEnum;
import org.openapis.openapi.models.shared.Meta;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricTypeEnum;
import org.openapis.openapi.models.shared.DefaultData;
import org.openapis.openapi.models.shared.TensorflowTensorProto;
import org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto;
import org.openapis.openapi.models.shared.TensorflowTensorShapeProto;
import org.openapis.openapi.models.shared.TensorShapeProtoDim;
import org.openapis.openapi.models.shared.TensorflowResourceHandleProto;
import org.openapis.openapi.models.shared.TensorflowDataTypeEnum;
import org.openapis.openapi.models.shared.Tensor;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PredictJsonRequest req = new PredictJsonRequest() {{
                seldonMessage = new SeldonMessage() {{
                    binData = "corrupti";
                    data = new DefaultData() {{
                        names = new String[]{{
                            add("distinctio"),
                            add("quibusdam"),
                            add("unde"),
                        }};
                        ndarray = new Object[]{{
                            add("corrupti"),
                            add("illum"),
                            add("vel"),
                            add("error"),
                        }};
                        tensor = new Tensor() {{
                            shape = new Integer[]{{
                                add(384382),
                                add(437587),
                                add(297534),
                            }};
                            values = new Double[]{{
                                add(567.13),
                                add(9636.63),
                                add(2726.56),
                                add(3834.41),
                            }};
                        }};
                        tftensor = new TensorflowTensorProto() {{
                            boolVal = new Boolean[]{{
                                add(false),
                                add(false),
                            }};
                            dcomplexVal = new Double[]{{
                                add(8121.69),
                                add(5288.95),
                                add(4799.77),
                                add(5680.45),
                            }};
                            doubleVal = new Double[]{{
                                add(9255.97),
                                add(8360.79),
                            }};
                            dtype = "DT_INT32";
                            floatVal = new Float[]{{
                                add(871.29),
                                add(6481.72),
                            }};
                            halfVal = new Integer[]{{
                                add(368241),
                            }};
                            int64Val = new String[]{{
                                add("sapiente"),
                                add("quo"),
                                add("odit"),
                                add("at"),
                            }};
                            intVal = new Integer[]{{
                                add(978619),
                                add(473608),
                                add(799159),
                                add(800911),
                            }};
                            resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                add(new TensorflowResourceHandleProto() {{
                                    container = "totam";
                                    device = "porro";
                                    hashCode = "dolorum";
                                    maybeTypeName = "dicta";
                                    name = "nam";
                                }}),
                                add(new TensorflowResourceHandleProto() {{
                                    container = "officia";
                                    device = "occaecati";
                                    hashCode = "fugit";
                                    maybeTypeName = "deleniti";
                                    name = "hic";
                                }}),
                            }};
                            scomplexVal = new Float[]{{
                                add(5218.48),
                                add(1059.07),
                                add(4146.62),
                                add(4736),
                            }};
                            stringVal = new String[]{{
                                add("qui"),
                                add("impedit"),
                            }};
                            tensorContent = "cum";
                            tensorShape = new TensorflowTensorShapeProto() {{
                                dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                    add(new TensorShapeProtoDim() {{
                                        name = "ipsum";
                                        size = "excepturi";
                                    }}),
                                    add(new TensorShapeProtoDim() {{
                                        name = "aspernatur";
                                        size = "perferendis";
                                    }}),
                                }};
                                unknownRank = false;
                            }};
                            uint32Val = new Long[]{{
                                add(617636),
                                add(149675),
                            }};
                            uint64Val = new String[]{{
                                add("dolor"),
                                add("natus"),
                                add("laboriosam"),
                            }};
                            variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                add(new TensorflowVariantTensorDataProto() {{
                                    metadata = "saepe";
                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                    }};
                                    typeName = "in";
                                }}),
                                add(new TensorflowVariantTensorDataProto() {{
                                    metadata = "corporis";
                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                    }};
                                    typeName = "iure";
                                }}),
                                add(new TensorflowVariantTensorDataProto() {{
                                    metadata = "saepe";
                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                    }};
                                    typeName = "architecto";
                                }}),
                                add(new TensorflowVariantTensorDataProto() {{
                                    metadata = "ipsa";
                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                    }};
                                    typeName = "est";
                                }}),
                            }};
                            versionNumber = 653140;
                        }};
                    }};
                    meta = new Meta() {{
                        metrics = new org.openapis.openapi.models.shared.Metric[]{{
                            add(new Metric() {{
                                key = "dolores";
                                type = "COUNTER";
                                value = 3581.52;
                            }}),
                            add(new Metric() {{
                                key = "explicabo";
                                type = "TIMER";
                                value = 3154.28;
                            }}),
                            add(new Metric() {{
                                key = "omnis";
                                type = "GAUGE";
                                value = 3250.47;
                            }}),
                        }};
                        puid = "excepturi";
                        requestPath = new java.util.HashMap<String, String>() {{
                            put("iure", "culpa");
                        }};
                        routing = new java.util.HashMap<String, Integer>() {{
                            put("sapiente", 102044);
                            put("mollitia", 208876);
                            put("culpa", 161309);
                            put("repellat", 653108);
                        }};
                        tags = new java.util.HashMap<String, Object>() {{
                            put("numquam", "commodi");
                            put("quam", "molestiae");
                            put("velit", "error");
                        }};
                    }};
                    status = new Status() {{
                        code = 158969;
                        info = "quis";
                        reason = "vitae";
                        status = "FAILURE";
                    }};
                    strData = "animi";
                }};
                deployment = "enim";
                namespace = "odit";
            }}            

            PredictJsonResponse res = sdk.externalAmbassadorAPI.predictJson(req, new PredictJsonSecurity() {{
                httpBearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.seldonMessage.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### externalAmbassadorAPI

* `predictJson`
* `predictRaw`
* `predictString`
* `sendFeedback`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
