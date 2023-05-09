# externalAmbassadorAPI

### Available Operations

* [predictJson](#predictjson)
* [predictRaw](#predictraw)
* [predictString](#predictstring)
* [sendFeedback](#sendfeedback)

## predictJson

### Example Usage

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
                                binData = "laborum";
                                data = new DefaultData() {{
                                    names = new String[]{{
                                        add("reiciendis"),
                                    }};
                                    ndarray = new Object[]{{
                                        add("vero"),
                                        add("nihil"),
                                        add("praesentium"),
                                        add("voluptatibus"),
                                    }};
                                    tensor = new Tensor() {{
                                        shape = new Integer[]{{
                                            add(604846),
                                        }};
                                        values = new Double[]{{
                                            add(7392.64),
                                            add(199.87),
                                        }};
                                    }};;
                                    tftensor = new TensorflowTensorProto() {{
                                        boolVal = new Boolean[]{{
                                            add(false),
                                        }};
                                        dcomplexVal = new Double[]{{
                                            add(2828.07),
                                            add(9795.87),
                                        }};
                                        doubleVal = new Double[]{{
                                            add(3594.44),
                                        }};
                                        dtype = TensorflowDataTypeEnum.DT_QINT32;
                                        floatVal = new Float[]{{
                                            add(1187.27),
                                            add(6886.61),
                                        }};
                                        halfVal = new Integer[]{{
                                            add(880476),
                                            add(414263),
                                        }};
                                        int64Val = new String[]{{
                                            add("quae"),
                                            add("ipsum"),
                                            add("quidem"),
                                            add("molestias"),
                                        }};
                                        intVal = new Integer[]{{
                                            add(865103),
                                            add(265389),
                                            add(508969),
                                        }};
                                        resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                            add(new TensorflowResourceHandleProto() {{
                                                container = "voluptates";
                                                device = "quasi";
                                                hashCode = "repudiandae";
                                                maybeTypeName = "sint";
                                                name = "Patti Gottlieb MD";
                                            }}),
                                            add(new TensorflowResourceHandleProto() {{
                                                container = "quibusdam";
                                                device = "explicabo";
                                                hashCode = "deserunt";
                                                maybeTypeName = "distinctio";
                                                name = "Francisco Gleason";
                                            }}),
                                            add(new TensorflowResourceHandleProto() {{
                                                container = "cupiditate";
                                                device = "quos";
                                                hashCode = "perferendis";
                                                maybeTypeName = "magni";
                                                name = "Vernon Abshire";
                                            }}),
                                        }};
                                        scomplexVal = new Float[]{{
                                            add(2700.08),
                                            add(7037.37),
                                            add(7351.94),
                                        }};
                                        stringVal = new String[]{{
                                            add("delectus"),
                                            add("eum"),
                                        }};
                                        tensorContent = "non";
                                        tensorShape = new TensorflowTensorShapeProto() {{
                                            dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                                add(new TensorShapeProtoDim() {{
                                                    name = "Gilbert Medhurst";
                                                    size = "officia";
                                                }}),
                                                add(new TensorShapeProtoDim() {{
                                                    name = "Raquel Wilderman";
                                                    size = "in";
                                                }}),
                                                add(new TensorShapeProtoDim() {{
                                                    name = "Mrs. Emilio Price";
                                                    size = "facere";
                                                }}),
                                                add(new TensorShapeProtoDim() {{
                                                    name = "Beth Padberg";
                                                    size = "occaecati";
                                                }}),
                                            }};
                                            unknownRank = false;
                                        }};;
                                        uint32Val = new Long[]{{
                                            add(881736L),
                                            add(965417L),
                                        }};
                                        uint64Val = new String[]{{
                                            add("provident"),
                                            add("nam"),
                                            add("id"),
                                        }};
                                        variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                            add(new TensorflowVariantTensorDataProto() {{
                                                metadata = "deleniti";
                                                tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                    add(new TensorflowTensorProto() {{}}),
                                                    add(new TensorflowTensorProto() {{}}),
                                                    add(new TensorflowTensorProto() {{}}),
                                                    add(new TensorflowTensorProto() {{}}),
                                                }};
                                                typeName = "amet";
                                            }}),
                                            add(new TensorflowVariantTensorDataProto() {{
                                                metadata = "deserunt";
                                                tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                    add(new TensorflowTensorProto() {{}}),
                                                    add(new TensorflowTensorProto() {{}}),
                                                }};
                                                typeName = "vel";
                                            }}),
                                            add(new TensorflowVariantTensorDataProto() {{
                                                metadata = "natus";
                                                tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                    add(new TensorflowTensorProto() {{}}),
                                                    add(new TensorflowTensorProto() {{}}),
                                                    add(new TensorflowTensorProto() {{}}),
                                                }};
                                                typeName = "molestiae";
                                            }}),
                                        }};
                                        versionNumber = 19193;
                                    }};;
                                }};;
                                meta = new Meta() {{
                                    metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                        add(new Metric() {{
                                            key = "magnam";
                                            type = MetricTypeEnum.TIMER;
                                            value = 6601.74;
                                        }}),
                                        add(new Metric() {{
                                            key = "labore";
                                            type = MetricTypeEnum.COUNTER;
                                            value = 3834.62;
                                        }}),
                                    }};
                                    puid = "natus";
                                    requestPath = new java.util.HashMap<String, String>() {{
                                        put("eum", "vero");
                                        put("aspernatur", "architecto");
                                        put("magnam", "et");
                                    }};
                                    routing = new java.util.HashMap<String, Integer>() {{
                                        put("ullam", 590873);
                                        put("quos", 574325);
                                        put("accusantium", 653201);
                                    }};
                                    tags = new java.util.HashMap<String, Object>() {{
                                        put("mollitia", "ad");
                                        put("eum", "dolor");
                                        put("necessitatibus", "odit");
                                        put("nemo", "quasi");
                                    }};
                                }};;
                                status = new Status() {{
                                    code = 435865;
                                    info = "doloribus";
                                    reason = "debitis";
                                    status = StatusStatusFlagEnum.SUCCESS;
                                }};;
                                strData = "maxime";
                            }};, "deleniti", "facilis");            

            PredictJsonResponse res = sdk.externalAmbassadorAPI.predictJson(req, new PredictJsonSecurity("in") {{
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

## predictRaw

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PredictRawRequest;
import org.openapis.openapi.models.operations.PredictRawResponse;
import org.openapis.openapi.models.operations.PredictRawSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PredictRawRequest req = new PredictRawRequest("architecto".getBytes(), "architecto", "repudiandae");            

            PredictRawResponse res = sdk.externalAmbassadorAPI.predictRaw(req, new PredictRawSecurity("ullam") {{
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

## predictString

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PredictStringRequest;
import org.openapis.openapi.models.operations.PredictStringResponse;
import org.openapis.openapi.models.operations.PredictStringSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PredictStringRequest req = new PredictStringRequest("expedita", "nihil", "repellat");            

            PredictStringResponse res = sdk.externalAmbassadorAPI.predictString(req, new PredictStringSecurity("quibusdam") {{
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

## sendFeedback

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendFeedbackRequest;
import org.openapis.openapi.models.operations.SendFeedbackResponse;
import org.openapis.openapi.models.operations.SendFeedbackSecurity;
import org.openapis.openapi.models.shared.DefaultData;
import org.openapis.openapi.models.shared.Feedback;
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

            SendFeedbackRequest req = new SendFeedbackRequest(                new Feedback() {{
                                request = new SeldonMessage() {{
                                    binData = "sed";
                                    data = new DefaultData() {{
                                        names = new String[]{{
                                            add("pariatur"),
                                            add("accusantium"),
                                            add("consequuntur"),
                                            add("praesentium"),
                                        }};
                                        ndarray = new Object[]{{
                                            add("magni"),
                                            add("sunt"),
                                            add("quo"),
                                        }};
                                        tensor = new Tensor() {{
                                            shape = new Integer[]{{
                                                add(864934),
                                                add(807319),
                                                add(411397),
                                                add(569101),
                                            }};
                                            values = new Double[]{{
                                                add(4071.83),
                                            }};
                                        }};;
                                        tftensor = new TensorflowTensorProto() {{
                                            boolVal = new Boolean[]{{
                                                add(false),
                                            }};
                                            dcomplexVal = new Double[]{{
                                                add(9825.75),
                                            }};
                                            doubleVal = new Double[]{{
                                                add(3732.91),
                                                add(4535.43),
                                                add(4200.75),
                                            }};
                                            dtype = TensorflowDataTypeEnum.DT_BOOL_REF;
                                            floatVal = new Float[]{{
                                                add(8663.83),
                                            }};
                                            halfVal = new Integer[]{{
                                                add(975522),
                                                add(16627),
                                            }};
                                            int64Val = new String[]{{
                                                add("amet"),
                                                add("aut"),
                                                add("cumque"),
                                                add("corporis"),
                                            }};
                                            intVal = new Integer[]{{
                                                add(729991),
                                                add(749999),
                                                add(171629),
                                                add(339404),
                                            }};
                                            resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                                add(new TensorflowResourceHandleProto() {{
                                                    container = "dignissimos";
                                                    device = "eaque";
                                                    hashCode = "quis";
                                                    maybeTypeName = "nesciunt";
                                                    name = "Dorothy Dach";
                                                }}),
                                                add(new TensorflowResourceHandleProto() {{
                                                    container = "dolor";
                                                    device = "vero";
                                                    hashCode = "nostrum";
                                                    maybeTypeName = "hic";
                                                    name = "Alejandro Purdy DDS";
                                                }}),
                                                add(new TensorflowResourceHandleProto() {{
                                                    container = "consequuntur";
                                                    device = "blanditiis";
                                                    hashCode = "error";
                                                    maybeTypeName = "eaque";
                                                    name = "Jean Ferry";
                                                }}),
                                            }};
                                            scomplexVal = new Float[]{{
                                                add(6139.66),
                                                add(6790.91),
                                            }};
                                            stringVal = new String[]{{
                                                add("pariatur"),
                                                add("provident"),
                                                add("nobis"),
                                            }};
                                            tensorContent = "libero";
                                            tensorShape = new TensorflowTensorShapeProto() {{
                                                dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                                    add(new TensorShapeProtoDim() {{
                                                        name = "Billie Jacobi";
                                                        size = "dolor";
                                                    }}),
                                                    add(new TensorShapeProtoDim() {{
                                                        name = "Tiffany Welch";
                                                        size = "voluptate";
                                                    }}),
                                                    add(new TensorShapeProtoDim() {{
                                                        name = "Johanna Farrell";
                                                        size = "veritatis";
                                                    }}),
                                                    add(new TensorShapeProtoDim() {{
                                                        name = "Angela Kerluke";
                                                        size = "accusamus";
                                                    }}),
                                                }};
                                                unknownRank = false;
                                            }};;
                                            uint32Val = new Long[]{{
                                                add(976405L),
                                                add(377752L),
                                                add(617658L),
                                            }};
                                            uint64Val = new String[]{{
                                                add("atque"),
                                            }};
                                            variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                                add(new TensorflowVariantTensorDataProto() {{
                                                    metadata = "fugiat";
                                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                        add(new TensorflowTensorProto() {{}}),
                                                    }};
                                                    typeName = "soluta";
                                                }}),
                                            }};
                                            versionNumber = 679393;
                                        }};;
                                    }};;
                                    meta = new Meta() {{
                                        metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                            add(new Metric() {{
                                                key = "voluptate";
                                                type = MetricTypeEnum.TIMER;
                                                value = 5365.79;
                                            }}),
                                            add(new Metric() {{
                                                key = "omnis";
                                                type = MetricTypeEnum.TIMER;
                                                value = 7146.97;
                                            }}),
                                        }};
                                        puid = "asperiores";
                                        requestPath = new java.util.HashMap<String, String>() {{
                                            put("ipsum", "voluptate");
                                            put("id", "saepe");
                                        }};
                                        routing = new java.util.HashMap<String, Integer>() {{
                                            put("aspernatur", 20651);
                                            put("amet", 758379);
                                        }};
                                        tags = new java.util.HashMap<String, Object>() {{
                                            put("ad", "saepe");
                                            put("suscipit", "deserunt");
                                            put("provident", "minima");
                                            put("repellendus", "totam");
                                        }};
                                    }};;
                                    status = new Status() {{
                                        code = 628982;
                                        info = "alias";
                                        reason = "at";
                                        status = StatusStatusFlagEnum.SUCCESS;
                                    }};;
                                    strData = "tempora";
                                }};;
                                response = new SeldonMessage() {{
                                    binData = "vel";
                                    data = new DefaultData() {{
                                        names = new String[]{{
                                            add("officiis"),
                                            add("qui"),
                                            add("dolorum"),
                                            add("a"),
                                        }};
                                        ndarray = new Object[]{{
                                            add("harum"),
                                            add("iusto"),
                                        }};
                                        tensor = new Tensor() {{
                                            shape = new Integer[]{{
                                                add(788740),
                                            }};
                                            values = new Double[]{{
                                                add(2294.42),
                                                add(7308.56),
                                                add(8802.98),
                                                add(2539.41),
                                            }};
                                        }};;
                                        tftensor = new TensorflowTensorProto() {{
                                            boolVal = new Boolean[]{{
                                                add(false),
                                                add(false),
                                            }};
                                            dcomplexVal = new Double[]{{
                                                add(9574.51),
                                            }};
                                            doubleVal = new Double[]{{
                                                add(4717.52),
                                                add(256.62),
                                                add(7115.84),
                                            }};
                                            dtype = TensorflowDataTypeEnum.DT_INT64;
                                            floatVal = new Float[]{{
                                                add(4246.85),
                                            }};
                                            halfVal = new Integer[]{{
                                                add(374170),
                                                add(646265),
                                                add(463575),
                                            }};
                                            int64Val = new String[]{{
                                                add("incidunt"),
                                            }};
                                            intVal = new Integer[]{{
                                                add(586784),
                                            }};
                                            resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                                add(new TensorflowResourceHandleProto() {{
                                                    container = "pariatur";
                                                    device = "soluta";
                                                    hashCode = "dicta";
                                                    maybeTypeName = "laborum";
                                                    name = "Randall Cole";
                                                }}),
                                                add(new TensorflowResourceHandleProto() {{
                                                    container = "facilis";
                                                    device = "aliquid";
                                                    hashCode = "quam";
                                                    maybeTypeName = "molestias";
                                                    name = "Shawn Doyle";
                                                }}),
                                                add(new TensorflowResourceHandleProto() {{
                                                    container = "odio";
                                                    device = "sunt";
                                                    hashCode = "ullam";
                                                    maybeTypeName = "nam";
                                                    name = "George Runolfsdottir";
                                                }}),
                                                add(new TensorflowResourceHandleProto() {{
                                                    container = "et";
                                                    device = "saepe";
                                                    hashCode = "ipsum";
                                                    maybeTypeName = "veritatis";
                                                    name = "Isaac Reynolds DVM";
                                                }}),
                                            }};
                                            scomplexVal = new Float[]{{
                                                add(2921.47),
                                            }};
                                            stringVal = new String[]{{
                                                add("adipisci"),
                                                add("dolorum"),
                                            }};
                                            tensorContent = "architecto";
                                            tensorShape = new TensorflowTensorShapeProto() {{
                                                dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                                    add(new TensorShapeProtoDim() {{
                                                        name = "Miss Billie Ward";
                                                        size = "porro";
                                                    }}),
                                                }};
                                                unknownRank = false;
                                            }};;
                                            uint32Val = new Long[]{{
                                                add(281730L),
                                                add(703495L),
                                                add(586410L),
                                                add(181631L),
                                            }};
                                            uint64Val = new String[]{{
                                                add("laudantium"),
                                            }};
                                            variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                                add(new TensorflowVariantTensorDataProto() {{
                                                    metadata = "occaecati";
                                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                        add(new TensorflowTensorProto() {{}}),
                                                        add(new TensorflowTensorProto() {{}}),
                                                        add(new TensorflowTensorProto() {{}}),
                                                        add(new TensorflowTensorProto() {{}}),
                                                    }};
                                                    typeName = "quisquam";
                                                }}),
                                                add(new TensorflowVariantTensorDataProto() {{
                                                    metadata = "vero";
                                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                        add(new TensorflowTensorProto() {{}}),
                                                        add(new TensorflowTensorProto() {{}}),
                                                        add(new TensorflowTensorProto() {{}}),
                                                    }};
                                                    typeName = "quis";
                                                }}),
                                            }};
                                            versionNumber = 218403;
                                        }};;
                                    }};;
                                    meta = new Meta() {{
                                        metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                            add(new Metric() {{
                                                key = "voluptate";
                                                type = MetricTypeEnum.COUNTER;
                                                value = 8788.7;
                                            }}),
                                            add(new Metric() {{
                                                key = "tenetur";
                                                type = MetricTypeEnum.GAUGE;
                                                value = 9413.78;
                                            }}),
                                            add(new Metric() {{
                                                key = "distinctio";
                                                type = MetricTypeEnum.TIMER;
                                                value = 4861.6;
                                            }}),
                                            add(new Metric() {{
                                                key = "similique";
                                                type = MetricTypeEnum.TIMER;
                                                value = 8742.88;
                                            }}),
                                        }};
                                        puid = "ducimus";
                                        requestPath = new java.util.HashMap<String, String>() {{
                                            put("quibusdam", "illum");
                                            put("sequi", "natus");
                                        }};
                                        routing = new java.util.HashMap<String, Integer>() {{
                                            put("aut", 974259);
                                            put("exercitationem", 862310);
                                            put("fugit", 780427);
                                            put("maiores", 985033);
                                        }};
                                        tags = new java.util.HashMap<String, Object>() {{
                                            put("eligendi", "ducimus");
                                            put("alias", "officia");
                                        }};
                                    }};;
                                    status = new Status() {{
                                        code = 269479;
                                        info = "ipsam";
                                        reason = "ea";
                                        status = StatusStatusFlagEnum.SUCCESS;
                                    }};;
                                    strData = "vel";
                                }};;
                                reward = 8221.18;
                                truth = new SeldonMessage() {{
                                    binData = "magnam";
                                    data = new DefaultData() {{
                                        names = new String[]{{
                                            add("ex"),
                                        }};
                                        ndarray = new Object[]{{
                                            add("dicta"),
                                            add("dolor"),
                                            add("maiores"),
                                        }};
                                        tensor = new Tensor() {{
                                            shape = new Integer[]{{
                                                add(406120),
                                            }};
                                            values = new Double[]{{
                                                add(5692.11),
                                                add(9729.2),
                                                add(3436.05),
                                                add(9608.35),
                                            }};
                                        }};;
                                        tftensor = new TensorflowTensorProto() {{
                                            boolVal = new Boolean[]{{
                                                add(false),
                                                add(false),
                                                add(false),
                                                add(false),
                                            }};
                                            dcomplexVal = new Double[]{{
                                                add(4113.72),
                                                add(7740.48),
                                                add(3592.71),
                                                add(3331.45),
                                            }};
                                            doubleVal = new Double[]{{
                                                add(811.01),
                                                add(3018.31),
                                            }};
                                            dtype = TensorflowDataTypeEnum.DT_HALF;
                                            floatVal = new Float[]{{
                                                add(2322.34),
                                                add(9262.13),
                                                add(1324.87),
                                                add(3253.1),
                                            }};
                                            halfVal = new Integer[]{{
                                                add(952871),
                                            }};
                                            int64Val = new String[]{{
                                                add("aut"),
                                                add("aut"),
                                                add("deleniti"),
                                            }};
                                            intVal = new Integer[]{{
                                                add(304582),
                                                add(146946),
                                                add(882860),
                                                add(79522),
                                            }};
                                            resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                                add(new TensorflowResourceHandleProto() {{
                                                    container = "et";
                                                    device = "dolorum";
                                                    hashCode = "laborum";
                                                    maybeTypeName = "placeat";
                                                    name = "Agnes Johnston";
                                                }}),
                                                add(new TensorflowResourceHandleProto() {{
                                                    container = "assumenda";
                                                    device = "nulla";
                                                    hashCode = "voluptas";
                                                    maybeTypeName = "libero";
                                                    name = "Anita Gerhold";
                                                }}),
                                            }};
                                            scomplexVal = new Float[]{{
                                                add(4764.77),
                                            }};
                                            stringVal = new String[]{{
                                                add("odio"),
                                                add("eius"),
                                            }};
                                            tensorContent = "esse";
                                            tensorShape = new TensorflowTensorShapeProto() {{
                                                dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                                    add(new TensorShapeProtoDim() {{
                                                        name = "Blake Kihn";
                                                        size = "ut";
                                                    }}),
                                                    add(new TensorShapeProtoDim() {{
                                                        name = "Yolanda Shields";
                                                        size = "quisquam";
                                                    }}),
                                                }};
                                                unknownRank = false;
                                            }};;
                                            uint32Val = new Long[]{{
                                                add(56848L),
                                            }};
                                            uint64Val = new String[]{{
                                                add("quidem"),
                                                add("neque"),
                                                add("quo"),
                                            }};
                                            variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                                add(new TensorflowVariantTensorDataProto() {{
                                                    metadata = "quo";
                                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                        add(new TensorflowTensorProto() {{}}),
                                                        add(new TensorflowTensorProto() {{}}),
                                                        add(new TensorflowTensorProto() {{}}),
                                                    }};
                                                    typeName = "eius";
                                                }}),
                                                add(new TensorflowVariantTensorDataProto() {{
                                                    metadata = "eos";
                                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                        add(new TensorflowTensorProto() {{}}),
                                                        add(new TensorflowTensorProto() {{}}),
                                                    }};
                                                    typeName = "ab";
                                                }}),
                                                add(new TensorflowVariantTensorDataProto() {{
                                                    metadata = "cupiditate";
                                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                        add(new TensorflowTensorProto() {{}}),
                                                    }};
                                                    typeName = "tempora";
                                                }}),
                                                add(new TensorflowVariantTensorDataProto() {{
                                                    metadata = "debitis";
                                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                        add(new TensorflowTensorProto() {{}}),
                                                        add(new TensorflowTensorProto() {{}}),
                                                    }};
                                                    typeName = "aspernatur";
                                                }}),
                                            }};
                                            versionNumber = 197054;
                                        }};;
                                    }};;
                                    meta = new Meta() {{
                                        metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                            add(new Metric() {{
                                                key = "esse";
                                                type = MetricTypeEnum.TIMER;
                                                value = 446.12;
                                            }}),
                                            add(new Metric() {{
                                                key = "distinctio";
                                                type = MetricTypeEnum.TIMER;
                                                value = 4908.19;
                                            }}),
                                            add(new Metric() {{
                                                key = "inventore";
                                                type = MetricTypeEnum.GAUGE;
                                                value = 5188.35;
                                            }}),
                                            add(new Metric() {{
                                                key = "accusamus";
                                                type = MetricTypeEnum.COUNTER;
                                                value = 4884.1;
                                            }}),
                                        }};
                                        puid = "occaecati";
                                        requestPath = new java.util.HashMap<String, String>() {{
                                            put("sapiente", "dolores");
                                            put("deserunt", "molestiae");
                                        }};
                                        routing = new java.util.HashMap<String, Integer>() {{
                                            put("porro", 430402);
                                        }};
                                        tags = new java.util.HashMap<String, Object>() {{
                                            put("praesentium", "consequuntur");
                                            put("deleniti", "fugit");
                                            put("fuga", "mollitia");
                                        }};
                                    }};;
                                    status = new Status() {{
                                        code = 277596;
                                        info = "atque";
                                        reason = "explicabo";
                                        status = StatusStatusFlagEnum.SUCCESS;
                                    }};;
                                    strData = "nisi";
                                }};;
                            }};, "fugit", "sapiente");            

            SendFeedbackResponse res = sdk.externalAmbassadorAPI.sendFeedback(req, new SendFeedbackSecurity("consequuntur") {{
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
