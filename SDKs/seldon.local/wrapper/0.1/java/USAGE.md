<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Aggregate2RequestBody;
import org.openapis.openapi.models.operations.Aggregate2Response;
import org.openapis.openapi.models.shared.DefaultData;
import org.openapis.openapi.models.shared.Meta;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricTypeEnum;
import org.openapis.openapi.models.shared.SeldonMessage;
import org.openapis.openapi.models.shared.SeldonMessageList;
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

            Aggregate2RequestBody req = new Aggregate2RequestBody() {{
                json = new SeldonMessageList() {{
                    seldonMessages = new org.openapis.openapi.models.shared.SeldonMessage[]{{
                        add(new SeldonMessage() {{
                            binData = "provident";
                            data = new DefaultData() {{
                                names = new String[]{{
                                    add("quibusdam"),
                                    add("unde"),
                                    add("nulla"),
                                }};
                                ndarry = new Object[]{{
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
                                    }};
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
                                }};
                            }};
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
                            }};
                            status = new Status() {{
                                code = 949572;
                                info = "ipsam";
                                reason = "id";
                                status = StatusStatusFlagEnum.FAILURE;
                            }};
                            strData = "aut";
                        }}),
                        add(new SeldonMessage() {{
                            binData = "quasi";
                            data = new DefaultData() {{
                                names = new String[]{{
                                    add("temporibus"),
                                    add("laborum"),
                                    add("quasi"),
                                }};
                                ndarry = new Object[]{{
                                    add("voluptatibus"),
                                    add("vero"),
                                    add("nihil"),
                                    add("praesentium"),
                                }};
                                tensor = new Tensor() {{
                                    shape = new Integer[]{{
                                        add(55714),
                                        add(604846),
                                        add(451159),
                                        add(739264),
                                    }};
                                    values = new Double[]{{
                                        add(391.87),
                                    }};
                                }};
                                tftensor = new TensorflowTensorProto() {{
                                    boolVal = new Boolean[]{{
                                        add(false),
                                        add(false),
                                    }};
                                    dcomplexVal = new Double[]{{
                                        add(9795.87),
                                        add(1201.96),
                                    }};
                                    doubleVal = new Double[]{{
                                        add(2961.4),
                                        add(4808.94),
                                    }};
                                    dtype = TensorflowDataTypeEnum.DT_INT16;
                                    floatVal = new Float[]{{
                                        add(3179.83),
                                        add(8804.76),
                                        add(4142.63),
                                    }};
                                    halfVal = new Integer[]{{
                                        add(64147),
                                        add(216822),
                                        add(692472),
                                        add(565189),
                                    }};
                                    int64Val = new String[]{{
                                        add("pariatur"),
                                        add("modi"),
                                        add("praesentium"),
                                    }};
                                    intVal = new Integer[]{{
                                        add(916723),
                                        add(93940),
                                        add(921158),
                                    }};
                                    resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                        add(new TensorflowResourceHandleProto() {{
                                            container = "veritatis";
                                            device = "itaque";
                                            hashCode = "incidunt";
                                            maybeTypeName = "enim";
                                            name = "Monique Spinka";
                                        }}),
                                        add(new TensorflowResourceHandleProto() {{
                                            container = "distinctio";
                                            device = "quibusdam";
                                            hashCode = "labore";
                                            maybeTypeName = "modi";
                                            name = "Beth McGlynn Sr.";
                                        }}),
                                        add(new TensorflowResourceHandleProto() {{
                                            container = "assumenda";
                                            device = "ipsam";
                                            hashCode = "alias";
                                            maybeTypeName = "fugit";
                                            name = "Marshall Glover";
                                        }}),
                                    }};
                                    scomplexVal = new Float[]{{
                                        add(9621.89),
                                        add(4332.88),
                                    }};
                                    stringVal = new String[]{{
                                        add("eligendi"),
                                    }};
                                    tensorContent = "sint";
                                    tensorShape = new TensorflowTensorShapeProto() {{
                                        dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                            add(new TensorShapeProtoDim() {{
                                                name = "Terence Marquardt";
                                                size = "debitis";
                                            }}),
                                            add(new TensorShapeProtoDim() {{
                                                name = "Wilbur King";
                                                size = "maiores";
                                            }}),
                                        }};
                                        unknownRank = false;
                                    }};
                                    uint32Val = new Long[]{{
                                        add(116202L),
                                        add(297437L),
                                        add(767024L),
                                    }};
                                    uint64Val = new String[]{{
                                        add("ea"),
                                        add("aliquid"),
                                        add("laborum"),
                                        add("accusamus"),
                                    }};
                                    variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                        add(new TensorflowVariantTensorDataProto() {{
                                            metadata = "occaecati";
                                            tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                            }};
                                            typeName = "accusamus";
                                        }}),
                                    }};
                                    versionNumber = 965417;
                                }};
                            }};
                            meta = new Meta() {{
                                metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                    add(new Metric() {{
                                        key = "provident";
                                        type = MetricTypeEnum.TIMER;
                                        value = 6596.69;
                                    }}),
                                    add(new Metric() {{
                                        key = "blanditiis";
                                        type = MetricTypeEnum.GAUGE;
                                        value = 9560.84;
                                    }}),
                                    add(new Metric() {{
                                        key = "amet";
                                        type = MetricTypeEnum.GAUGE;
                                        value = 3948.69;
                                    }}),
                                }};
                                puid = "vel";
                                requestPath = new java.util.HashMap<String, String>() {{
                                    put("omnis", "molestiae");
                                    put("perferendis", "nihil");
                                    put("magnam", "distinctio");
                                }};
                                routing = new java.util.HashMap<String, Integer>() {{
                                    put("labore", 290077);
                                    put("suscipit", 618016);
                                    put("nobis", 428769);
                                }};
                                tags = new java.util.HashMap<String, Object>() {{
                                    put("aspernatur", "architecto");
                                    put("magnam", "et");
                                    put("excepturi", "ullam");
                                    put("provident", "quos");
                                }};
                            }};
                            status = new Status() {{
                                code = 574325;
                                info = "accusantium";
                                reason = "mollitia";
                                status = StatusStatusFlagEnum.FAILURE;
                            }};
                            strData = "mollitia";
                        }}),
                        add(new SeldonMessage() {{
                            binData = "ad";
                            data = new DefaultData() {{
                                names = new String[]{{
                                    add("dolor"),
                                    add("necessitatibus"),
                                }};
                                ndarry = new Object[]{{
                                    add("nemo"),
                                }};
                                tensor = new Tensor() {{
                                    shape = new Integer[]{{
                                        add(435865),
                                    }};
                                    values = new Double[]{{
                                        add(8919.24),
                                        add(2603.41),
                                        add(8061.94),
                                        add(5370.23),
                                    }};
                                }};
                                tftensor = new TensorflowTensorProto() {{
                                    boolVal = new Boolean[]{{
                                        add(false),
                                        add(false),
                                        add(false),
                                    }};
                                    dcomplexVal = new Double[]{{
                                        add(1002.26),
                                        add(995.69),
                                    }};
                                    doubleVal = new Double[]{{
                                        add(3523.12),
                                        add(7142.42),
                                        add(4692.49),
                                        add(9988.48),
                                    }};
                                    dtype = TensorflowDataTypeEnum.DT_QUINT16_REF;
                                    floatVal = new Float[]{{
                                        add(9046.48),
                                    }};
                                    halfVal = new Integer[]{{
                                        add(37559),
                                        add(162493),
                                        add(508315),
                                        add(615560),
                                    }};
                                    int64Val = new String[]{{
                                        add("sunt"),
                                    }};
                                    intVal = new Integer[]{{
                                        add(848009),
                                        add(864934),
                                        add(807319),
                                        add(411397),
                                    }};
                                    resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                        add(new TensorflowResourceHandleProto() {{
                                            container = "odit";
                                            device = "ea";
                                            hashCode = "accusantium";
                                            maybeTypeName = "ab";
                                            name = "Rickey Hintz";
                                        }}),
                                        add(new TensorflowResourceHandleProto() {{
                                            container = "nam";
                                            device = "eaque";
                                            hashCode = "pariatur";
                                            maybeTypeName = "nemo";
                                            name = "Joseph Steuber DDS";
                                        }}),
                                        add(new TensorflowResourceHandleProto() {{
                                            container = "corporis";
                                            device = "hic";
                                            hashCode = "libero";
                                            maybeTypeName = "nobis";
                                            name = "Beatrice Lebsack II";
                                        }}),
                                    }};
                                    scomplexVal = new Float[]{{
                                        add(1794.9),
                                    }};
                                    stringVal = new String[]{{
                                        add("dolores"),
                                    }};
                                    tensorContent = "minus";
                                    tensorShape = new TensorflowTensorShapeProto() {{
                                        dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                            add(new TensorShapeProtoDim() {{
                                                name = "Eula Hegmann";
                                                size = "omnis";
                                            }}),
                                            add(new TensorShapeProtoDim() {{
                                                name = "Freddie Bartoletti";
                                                size = "blanditiis";
                                            }}),
                                        }};
                                        unknownRank = false;
                                    }};
                                    uint32Val = new Long[]{{
                                        add(50370L),
                                        add(577229L),
                                        add(699098L),
                                    }};
                                    uint64Val = new String[]{{
                                        add("asperiores"),
                                    }};
                                    variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                        add(new TensorflowVariantTensorDataProto() {{
                                            metadata = "modi";
                                            tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                            }};
                                            typeName = "dolorum";
                                        }}),
                                        add(new TensorflowVariantTensorDataProto() {{
                                            metadata = "deleniti";
                                            tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                            }};
                                            typeName = "provident";
                                        }}),
                                        add(new TensorflowVariantTensorDataProto() {{
                                            metadata = "nobis";
                                            tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                            }};
                                            typeName = "delectus";
                                        }}),
                                        add(new TensorflowVariantTensorDataProto() {{
                                            metadata = "quaerat";
                                            tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                            }};
                                            typeName = "aliquid";
                                        }}),
                                    }};
                                    versionNumber = 212390;
                                }};
                            }};
                            meta = new Meta() {{
                                metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                    add(new Metric() {{
                                        key = "dolor";
                                        type = MetricTypeEnum.COUNTER;
                                        value = 2187.49;
                                    }}),
                                }};
                                puid = "hic";
                                requestPath = new java.util.HashMap<String, String>() {{
                                    put("cum", "voluptate");
                                    put("dignissimos", "reiciendis");
                                    put("amet", "dolorum");
                                }};
                                routing = new java.util.HashMap<String, Integer>() {{
                                    put("veritatis", 58029);
                                    put("ipsa", 434417);
                                }};
                                tags = new java.util.HashMap<String, Object>() {{
                                    put("quaerat", "accusamus");
                                    put("quidem", "voluptatibus");
                                }};
                            }};
                            status = new Status() {{
                                code = 377752;
                                info = "natus";
                                reason = "eos";
                                status = StatusStatusFlagEnum.FAILURE;
                            }};
                            strData = "sit";
                        }}),
                    }};
                }};;
            }};            

            Aggregate2Response res = sdk.internal.aggregate2(req);

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