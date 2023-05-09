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
import org.openapis.openapi.models.operations.PredictJsonRequest;
import org.openapis.openapi.models.operations.PredictJsonResponse;
import org.openapis.openapi.models.operations.PredictJsonSecurity;
import org.openapis.openapi.models.shared.DefaultData;
import org.openapis.openapi.models.shared.Meta;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricTypeEnum;
import org.openapis.openapi.models.shared.SeldonMessage;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.StatusStatusFlagEnum;
import org.openapis.openapi.models.shared.Tensor;
import org.openapis.openapi.models.shared.TensorShapeProtoDim;
import org.openapis.openapi.models.shared.TensorflowDataTypeEnum;
import org.openapis.openapi.models.shared.TensorflowResourceHandleProto;
import org.openapis.openapi.models.shared.TensorflowTensorProto;
import org.openapis.openapi.models.shared.TensorflowTensorShapeProto;
import org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PredictJsonRequest req = new PredictJsonRequest(                new SeldonMessage() {{
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
                                    }};;
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
                                        dtype = TensorflowDataTypeEnum.DT_INT32;
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
                                                name = "Luke McCullough";
                                            }}),
                                            add(new TensorflowResourceHandleProto() {{
                                                container = "hic";
                                                device = "optio";
                                                hashCode = "totam";
                                                maybeTypeName = "beatae";
                                                name = "Tanya Gleason";
                                            }}),
                                        }};
                                        scomplexVal = new Float[]{{
                                            add(4561.5),
                                            add(2165.5),
                                            add(5684.34),
                                        }};
                                        stringVal = new String[]{{
                                            add("perferendis"),
                                        }};
                                        tensorContent = "ad";
                                        tensorShape = new TensorflowTensorShapeProto() {{
                                            dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                                add(new TensorShapeProtoDim() {{
                                                    name = "Sheryl Fadel";
                                                    size = "hic";
                                                }}),
                                                add(new TensorShapeProtoDim() {{
                                                    name = "Wilbur Kirlin";
                                                    size = "iure";
                                                }}),
                                                add(new TensorShapeProtoDim() {{
                                                    name = "Dr. Rickey Boyle";
                                                    size = "mollitia";
                                                }}),
                                            }};
                                            unknownRank = false;
                                        }};;
                                        uint32Val = new Long[]{{
                                            add(170909L),
                                            add(210382L),
                                            add(358152L),
                                        }};
                                        uint64Val = new String[]{{
                                            add("nobis"),
                                        }};
                                        variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                            add(new TensorflowVariantTensorDataProto() {{
                                                metadata = "omnis";
                                                tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                    add(new TensorflowTensorProto() {{}}),
                                                    add(new TensorflowTensorProto() {{}}),
                                                }};
                                                typeName = "minima";
                                            }}),
                                            add(new TensorflowVariantTensorDataProto() {{
                                                metadata = "excepturi";
                                                tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                    add(new TensorflowTensorProto() {{}}),
                                                }};
                                                typeName = "iure";
                                            }}),
                                        }};
                                        versionNumber = 634274;
                                    }};;
                                }};;
                                meta = new Meta() {{
                                    metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                        add(new Metric() {{
                                            key = "sapiente";
                                            type = MetricTypeEnum.COUNTER;
                                            value = 6527.9;
                                        }}),
                                        add(new Metric() {{
                                            key = "dolorem";
                                            type = MetricTypeEnum.GAUGE;
                                            value = 1613.09;
                                        }}),
                                        add(new Metric() {{
                                            key = "repellat";
                                            type = MetricTypeEnum.GAUGE;
                                            value = 5818.5;
                                        }}),
                                        add(new Metric() {{
                                            key = "numquam";
                                            type = MetricTypeEnum.GAUGE;
                                            value = 4663.11;
                                        }}),
                                    }};
                                    puid = "molestiae";
                                    requestPath = new java.util.HashMap<String, String>() {{
                                        put("error", "quia");
                                    }};
                                    routing = new java.util.HashMap<String, Integer>() {{
                                        put("vitae", 674752);
                                        put("animi", 317202);
                                    }};
                                    tags = new java.util.HashMap<String, Object>() {{
                                        put("quo", "sequi");
                                    }};
                                }};;
                                status = new Status() {{
                                    code = 949572;
                                    info = "ipsam";
                                    reason = "id";
                                    status = StatusStatusFlagEnum.FAILURE;
                                }};;
                                strData = "aut";
                            }};, "quasi", "error");            

            PredictJsonResponse res = sdk.externalAmbassadorAPI.predictJson(req, new PredictJsonSecurity("temporibus") {{
                httpBearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.seldonMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [externalAmbassadorAPI](docs/externalambassadorapi/README.md)

* [predictJson](docs/externalambassadorapi/README.md#predictjson)
* [predictRaw](docs/externalambassadorapi/README.md#predictraw)
* [predictString](docs/externalambassadorapi/README.md#predictstring)
* [sendFeedback](docs/externalambassadorapi/README.md#sendfeedback)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
