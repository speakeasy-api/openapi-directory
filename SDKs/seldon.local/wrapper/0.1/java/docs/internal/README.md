# internal

### Available Operations

* [aggregate2](#aggregate2)
* [route](#route)
* [sendFeedback](#sendfeedback)
* [transformInput](#transforminput)
* [transformInput3](#transforminput3)
* [transformOutput](#transformoutput)

## aggregate2

### Example Usage

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
                            binData = "ab";
                            data = new DefaultData() {{
                                names = new String[]{{
                                    add("dolorum"),
                                    add("iusto"),
                                    add("voluptate"),
                                }};
                                ndarry = new Object[]{{
                                    add("deleniti"),
                                    add("omnis"),
                                    add("necessitatibus"),
                                }};
                                tensor = new Tensor() {{
                                    shape = new Integer[]{{
                                        add(990339),
                                        add(469497),
                                        add(216897),
                                    }};
                                    values = new Double[]{{
                                        add(6630.78),
                                        add(9064.18),
                                    }};
                                }};
                                tftensor = new TensorflowTensorProto() {{
                                    boolVal = new Boolean[]{{
                                        add(false),
                                        add(false),
                                    }};
                                    dcomplexVal = new Double[]{{
                                        add(206.51),
                                    }};
                                    doubleVal = new Double[]{{
                                        add(7583.79),
                                    }};
                                    dtype = TensorflowDataTypeEnum.DT_COMPLEX128_REF;
                                    floatVal = new Float[]{{
                                        add(9044.25),
                                        add(3834.64),
                                    }};
                                    halfVal = new Integer[]{{
                                        add(588317),
                                        add(324683),
                                        add(831049),
                                    }};
                                    int64Val = new String[]{{
                                        add("similique"),
                                        add("alias"),
                                        add("at"),
                                    }};
                                    intVal = new Integer[]{{
                                        add(273542),
                                        add(425451),
                                    }};
                                    resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                        add(new TensorflowResourceHandleProto() {{
                                            container = "officiis";
                                            device = "qui";
                                            hashCode = "dolorum";
                                            maybeTypeName = "a";
                                            name = "Fannie Kub";
                                        }}),
                                        add(new TensorflowResourceHandleProto() {{
                                            container = "tenetur";
                                            device = "amet";
                                            hashCode = "tempore";
                                            maybeTypeName = "accusamus";
                                            name = "Darlene Effertz";
                                        }}),
                                        add(new TensorflowResourceHandleProto() {{
                                            container = "nihil";
                                            device = "sit";
                                            hashCode = "expedita";
                                            maybeTypeName = "neque";
                                            name = "Gina Renner";
                                        }}),
                                        add(new TensorflowResourceHandleProto() {{
                                            container = "quam";
                                            device = "ipsum";
                                            hashCode = "incidunt";
                                            maybeTypeName = "qui";
                                            name = "Simon Stracke MD";
                                        }}),
                                    }};
                                    scomplexVal = new Float[]{{
                                        add(2768.94),
                                        add(1320.68),
                                        add(1749.09),
                                    }};
                                    stringVal = new String[]{{
                                        add("facilis"),
                                        add("aliquid"),
                                        add("quam"),
                                    }};
                                    tensorContent = "molestias";
                                    tensorShape = new TensorflowTensorShapeProto() {{
                                        dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                            add(new TensorShapeProtoDim() {{
                                                name = "Gladys Considine";
                                                size = "sunt";
                                            }}),
                                            add(new TensorShapeProtoDim() {{
                                                name = "Miss Candice Weimann";
                                                size = "nobis";
                                            }}),
                                            add(new TensorShapeProtoDim() {{
                                                name = "Miss Kerry Emmerich";
                                                size = "tempore";
                                            }}),
                                            add(new TensorShapeProtoDim() {{
                                                name = "Kevin Willms";
                                                size = "labore";
                                            }}),
                                        }};
                                        unknownRank = false;
                                    }};
                                    uint32Val = new Long[]{{
                                        add(677263L),
                                    }};
                                    uint64Val = new String[]{{
                                        add("quae"),
                                    }};
                                    variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                        add(new TensorflowVariantTensorDataProto() {{
                                            metadata = "quas";
                                            tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                            }};
                                            typeName = "consequatur";
                                        }}),
                                    }};
                                    versionNumber = 669917;
                                }};
                            }};
                            meta = new Meta() {{
                                metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                    add(new Metric() {{
                                        key = "porro";
                                        type = MetricTypeEnum.TIMER;
                                        value = 2817.3;
                                    }}),
                                    add(new Metric() {{
                                        key = "facilis";
                                        type = MetricTypeEnum.GAUGE;
                                        value = 1816.31;
                                    }}),
                                    add(new Metric() {{
                                        key = "quae";
                                        type = MetricTypeEnum.GAUGE;
                                        value = 4856.28;
                                    }}),
                                    add(new Metric() {{
                                        key = "occaecati";
                                        type = MetricTypeEnum.TIMER;
                                        value = 7875.42;
                                    }}),
                                }};
                                puid = "vero";
                                requestPath = new java.util.HashMap<String, String>() {{
                                    put("quis", "ipsum");
                                    put("delectus", "voluptate");
                                    put("consectetur", "vero");
                                }};
                                routing = new java.util.HashMap<String, Integer>() {{
                                    put("dignissimos", 941378);
                                    put("distinctio", 799203);
                                    put("odio", 630448);
                                    put("facilis", 874288);
                                }};
                                tags = new java.util.HashMap<String, Object>() {{
                                    put("dolore", "quibusdam");
                                    put("illum", "sequi");
                                }};
                            }};
                            status = new Status() {{
                                code = 617877;
                                info = "impedit";
                                reason = "aut";
                                status = StatusStatusFlagEnum.FAILURE;
                            }};
                            strData = "exercitationem";
                        }}),
                        add(new SeldonMessage() {{
                            binData = "nulla";
                            data = new DefaultData() {{
                                names = new String[]{{
                                    add("porro"),
                                }};
                                ndarry = new Object[]{{
                                    add("doloribus"),
                                    add("iusto"),
                                    add("eligendi"),
                                    add("ducimus"),
                                }};
                                tensor = new Tensor() {{
                                    shape = new Integer[]{{
                                        add(639473),
                                    }};
                                    values = new Double[]{{
                                        add(3685.84),
                                        add(4104.92),
                                    }};
                                }};
                                tftensor = new TensorflowTensorProto() {{
                                    boolVal = new Boolean[]{{
                                        add(false),
                                    }};
                                    dcomplexVal = new Double[]{{
                                        add(8221.18),
                                        add(2978.42),
                                    }};
                                    doubleVal = new Double[]{{
                                        add(4011.32),
                                    }};
                                    dtype = TensorflowDataTypeEnum.DT_FLOAT_REF;
                                    floatVal = new Float[]{{
                                        add(2243.17),
                                    }};
                                    halfVal = new Integer[]{{
                                        add(97844),
                                        add(406120),
                                        add(862192),
                                        add(569211),
                                    }};
                                    int64Val = new String[]{{
                                        add("nostrum"),
                                        add("sapiente"),
                                        add("quisquam"),
                                        add("saepe"),
                                    }};
                                    intVal = new Integer[]{{
                                        add(774048),
                                        add(359271),
                                    }};
                                    resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                        add(new TensorflowResourceHandleProto() {{
                                            container = "aliquid";
                                            device = "inventore";
                                            hashCode = "magnam";
                                            maybeTypeName = "ea";
                                            name = "Glenn Walter";
                                        }}),
                                        add(new TensorflowResourceHandleProto() {{
                                            container = "eaque";
                                            device = "a";
                                            hashCode = "libero";
                                            maybeTypeName = "aut";
                                            name = "Margie Russel";
                                        }}),
                                    }};
                                    scomplexVal = new Float[]{{
                                        add(795.22),
                                        add(2506.22),
                                        add(896.03),
                                        add(6774.12),
                                    }};
                                    stringVal = new String[]{{
                                        add("placeat"),
                                        add("velit"),
                                        add("eum"),
                                    }};
                                    tensorContent = "autem";
                                    tensorShape = new TensorflowTensorShapeProto() {{
                                        dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                            add(new TensorShapeProtoDim() {{
                                                name = "Mack Stoltenberg";
                                                size = "quasi";
                                            }}),
                                            add(new TensorShapeProtoDim() {{
                                                name = "Carrie Cole IV";
                                                size = "magnam";
                                            }}),
                                            add(new TensorShapeProtoDim() {{
                                                name = "Esther Koch";
                                                size = "fuga";
                                            }}),
                                            add(new TensorShapeProtoDim() {{
                                                name = "Yvette Stehr";
                                                size = "suscipit";
                                            }}),
                                        }};
                                        unknownRank = false;
                                    }};
                                    uint32Val = new Long[]{{
                                        add(181151L),
                                        add(509342L),
                                        add(788546L),
                                        add(86377L),
                                    }};
                                    uint64Val = new String[]{{
                                        add("id"),
                                    }};
                                    variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                        add(new TensorflowVariantTensorDataProto() {{
                                            metadata = "neque";
                                            tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                            }};
                                            typeName = "illum";
                                        }}),
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
                                    }};
                                    versionNumber = 587600;
                                }};
                            }};
                            meta = new Meta() {{
                                metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                    add(new Metric() {{
                                        key = "tempora";
                                        type = MetricTypeEnum.TIMER;
                                        value = 3708.53;
                                    }}),
                                }};
                                puid = "aspernatur";
                                requestPath = new java.util.HashMap<String, String>() {{
                                    put("quo", "esse");
                                }};
                                routing = new java.util.HashMap<String, Integer>() {{
                                    put("aperiam", 715179);
                                    put("quod", 490819);
                                    put("inventore", 469498);
                                    put("totam", 882710);
                                }};
                                tags = new java.util.HashMap<String, Object>() {{
                                    put("odio", "occaecati");
                                    put("commodi", "sapiente");
                                }};
                            }};
                            status = new Status() {{
                                code = 174112;
                                info = "deserunt";
                                reason = "molestiae";
                                status = StatusStatusFlagEnum.SUCCESS;
                            }};
                            strData = "porro";
                        }}),
                        add(new SeldonMessage() {{
                            binData = "eum";
                            data = new DefaultData() {{
                                names = new String[]{{
                                    add("praesentium"),
                                    add("consequuntur"),
                                    add("deleniti"),
                                }};
                                ndarry = new Object[]{{
                                    add("fuga"),
                                }};
                                tensor = new Tensor() {{
                                    shape = new Integer[]{{
                                        add(277596),
                                        add(539224),
                                        add(128860),
                                    }};
                                    values = new Double[]{{
                                        add(3926.76),
                                        add(1470.14),
                                    }};
                                }};
                                tftensor = new TensorflowTensorProto() {{
                                    boolVal = new Boolean[]{{
                                        add(false),
                                        add(false),
                                        add(false),
                                        add(false),
                                    }};
                                    dcomplexVal = new Double[]{{
                                        add(1871.31),
                                    }};
                                    doubleVal = new Double[]{{
                                        add(9039.84),
                                    }};
                                    dtype = TensorflowDataTypeEnum.DT_UINT8_REF;
                                    floatVal = new Float[]{{
                                        add(922.6),
                                        add(4569.11),
                                        add(9105.45),
                                    }};
                                    halfVal = new Integer[]{{
                                        add(82971),
                                        add(458604),
                                        add(800379),
                                        add(724168),
                                    }};
                                    int64Val = new String[]{{
                                        add("aliquid"),
                                        add("quasi"),
                                        add("saepe"),
                                        add("vel"),
                                    }};
                                    intVal = new Integer[]{{
                                        add(473221),
                                        add(699622),
                                        add(580197),
                                    }};
                                    resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                        add(new TensorflowResourceHandleProto() {{
                                            container = "distinctio";
                                            device = "eligendi";
                                            hashCode = "sit";
                                            maybeTypeName = "culpa";
                                            name = "Chad Runolfsson DDS";
                                        }}),
                                        add(new TensorflowResourceHandleProto() {{
                                            container = "quaerat";
                                            device = "sapiente";
                                            hashCode = "consectetur";
                                            maybeTypeName = "esse";
                                            name = "Eduardo Wilkinson";
                                        }}),
                                    }};
                                    scomplexVal = new Float[]{{
                                        add(974.68),
                                        add(9518.75),
                                    }};
                                    stringVal = new String[]{{
                                        add("sint"),
                                        add("pariatur"),
                                        add("possimus"),
                                    }};
                                    tensorContent = "quia";
                                    tensorShape = new TensorflowTensorShapeProto() {{
                                        dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                            add(new TensorShapeProtoDim() {{
                                                name = "Carroll Bogan V";
                                                size = "culpa";
                                            }}),
                                            add(new TensorShapeProtoDim() {{
                                                name = "Mandy Berge";
                                                size = "in";
                                            }}),
                                            add(new TensorShapeProtoDim() {{
                                                name = "Jeannette Stanton II";
                                                size = "sapiente";
                                            }}),
                                            add(new TensorShapeProtoDim() {{
                                                name = "Marion Kihn";
                                                size = "aut";
                                            }}),
                                        }};
                                        unknownRank = false;
                                    }};
                                    uint32Val = new Long[]{{
                                        add(185232L),
                                        add(845358L),
                                        add(401259L),
                                    }};
                                    uint64Val = new String[]{{
                                        add("itaque"),
                                        add("dolorum"),
                                        add("architecto"),
                                    }};
                                    variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                        add(new TensorflowVariantTensorDataProto() {{
                                            metadata = "tenetur";
                                            tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                add(new TensorflowTensorProto() {{}}),
                                            }};
                                            typeName = "at";
                                        }}),
                                        add(new TensorflowVariantTensorDataProto() {{
                                            metadata = "et";
                                            tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                            }};
                                            typeName = "ipsa";
                                        }}),
                                        add(new TensorflowVariantTensorDataProto() {{
                                            metadata = "minima";
                                            tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                add(new TensorflowTensorProto() {{}}),
                                            }};
                                            typeName = "consectetur";
                                        }}),
                                    }};
                                    versionNumber = 237173;
                                }};
                            }};
                            meta = new Meta() {{
                                metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                    add(new Metric() {{
                                        key = "temporibus";
                                        type = MetricTypeEnum.COUNTER;
                                        value = 5223.71;
                                    }}),
                                    add(new Metric() {{
                                        key = "aut";
                                        type = MetricTypeEnum.GAUGE;
                                        value = 4287.96;
                                    }}),
                                    add(new Metric() {{
                                        key = "mollitia";
                                        type = MetricTypeEnum.COUNTER;
                                        value = 5445.91;
                                    }}),
                                }};
                                puid = "non";
                                requestPath = new java.util.HashMap<String, String>() {{
                                    put("dolor", "occaecati");
                                }};
                                routing = new java.util.HashMap<String, Integer>() {{
                                    put("impedit", 131055);
                                    put("voluptas", 12036);
                                }};
                                tags = new java.util.HashMap<String, Object>() {{
                                    put("dicta", "maiores");
                                    put("natus", "velit");
                                }};
                            }};
                            status = new Status() {{
                                code = 974257;
                                info = "voluptas";
                                reason = "asperiores";
                                status = StatusStatusFlagEnum.SUCCESS;
                            }};
                            strData = "ea";
                        }}),
                        add(new SeldonMessage() {{
                            binData = "quaerat";
                            data = new DefaultData() {{
                                names = new String[]{{
                                    add("repellendus"),
                                }};
                                ndarry = new Object[]{{
                                    add("maxime"),
                                    add("dignissimos"),
                                    add("officia"),
                                }};
                                tensor = new Tensor() {{
                                    shape = new Integer[]{{
                                        add(368102),
                                        add(65304),
                                        add(312753),
                                        add(783235),
                                    }};
                                    values = new Double[]{{
                                        add(2883.98),
                                        add(704.47),
                                        add(2414.18),
                                        add(6835.73),
                                    }};
                                }};
                                tftensor = new TensorflowTensorProto() {{
                                    boolVal = new Boolean[]{{
                                        add(false),
                                        add(false),
                                        add(false),
                                    }};
                                    dcomplexVal = new Double[]{{
                                        add(2460.63),
                                        add(6339.31),
                                    }};
                                    doubleVal = new Double[]{{
                                        add(9268.8),
                                        add(5173.09),
                                        add(8539.4),
                                    }};
                                    dtype = TensorflowDataTypeEnum.DT_HALF;
                                    floatVal = new Float[]{{
                                        add(5546.88),
                                        add(4278.34),
                                    }};
                                    halfVal = new Integer[]{{
                                        add(822560),
                                        add(706575),
                                    }};
                                    int64Val = new String[]{{
                                        add("commodi"),
                                        add("in"),
                                        add("corporis"),
                                    }};
                                    intVal = new Integer[]{{
                                        add(828657),
                                        add(363161),
                                        add(924967),
                                        add(397533),
                                    }};
                                    resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                        add(new TensorflowResourceHandleProto() {{
                                            container = "cum";
                                            device = "consectetur";
                                            hashCode = "in";
                                            maybeTypeName = "exercitationem";
                                            name = "Carroll Gerhold";
                                        }}),
                                    }};
                                    scomplexVal = new Float[]{{
                                        add(6971.42),
                                        add(9049.49),
                                        add(8970.71),
                                        add(2965.56),
                                    }};
                                    stringVal = new String[]{{
                                        add("asperiores"),
                                    }};
                                    tensorContent = "adipisci";
                                    tensorShape = new TensorflowTensorShapeProto() {{
                                        dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                            add(new TensorShapeProtoDim() {{
                                                name = "Heather Kuhn";
                                                size = "consectetur";
                                            }}),
                                        }};
                                        unknownRank = false;
                                    }};
                                    uint32Val = new Long[]{{
                                        add(689768L),
                                        add(385237L),
                                    }};
                                    uint64Val = new String[]{{
                                        add("voluptates"),
                                    }};
                                    variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                        add(new TensorflowVariantTensorDataProto() {{
                                            metadata = "vitae";
                                            tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                            }};
                                            typeName = "similique";
                                        }}),
                                        add(new TensorflowVariantTensorDataProto() {{
                                            metadata = "tempora";
                                            tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                add(new TensorflowTensorProto() {{}}),
                                            }};
                                            typeName = "voluptas";
                                        }}),
                                        add(new TensorflowVariantTensorDataProto() {{
                                            metadata = "voluptas";
                                            tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                                add(new TensorflowTensorProto() {{}}),
                                                add(new TensorflowTensorProto() {{}}),
                                            }};
                                            typeName = "minima";
                                        }}),
                                    }};
                                    versionNumber = 748789;
                                }};
                            }};
                            meta = new Meta() {{
                                metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                    add(new Metric() {{
                                        key = "adipisci";
                                        type = MetricTypeEnum.TIMER;
                                        value = 1718.53;
                                    }}),
                                    add(new Metric() {{
                                        key = "blanditiis";
                                        type = MetricTypeEnum.GAUGE;
                                        value = 2962.42;
                                    }}),
                                    add(new Metric() {{
                                        key = "aliquam";
                                        type = MetricTypeEnum.TIMER;
                                        value = 8391.89;
                                    }}),
                                }};
                                puid = "ullam";
                                requestPath = new java.util.HashMap<String, String>() {{
                                    put("cum", "blanditiis");
                                }};
                                routing = new java.util.HashMap<String, Integer>() {{
                                    put("hic", 201517);
                                    put("culpa", 548519);
                                    put("pariatur", 519643);
                                }};
                                tags = new java.util.HashMap<String, Object>() {{
                                    put("exercitationem", "nobis");
                                    put("sit", "rerum");
                                    put("sed", "reiciendis");
                                    put("explicabo", "asperiores");
                                }};
                            }};
                            status = new Status() {{
                                code = 707918;
                                info = "voluptate";
                                reason = "expedita";
                                status = StatusStatusFlagEnum.SUCCESS;
                            }};
                            strData = "iste";
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

## route

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RouteRequestBody;
import org.openapis.openapi.models.operations.RouteResponse;
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

            RouteRequestBody req = new RouteRequestBody() {{
                json = new SeldonMessage() {{
                    binData = "dolore";
                    data = new DefaultData() {{
                        names = new String[]{{
                            add("sed"),
                            add("in"),
                            add("commodi"),
                        }};
                        ndarry = new Object[]{{
                            add("explicabo"),
                            add("voluptas"),
                            add("unde"),
                        }};
                        tensor = new Tensor() {{
                            shape = new Integer[]{{
                                add(382808),
                            }};
                            values = new Double[]{{
                                add(8953.86),
                                add(724.34),
                                add(9677.95),
                                add(193),
                            }};
                        }};;
                        tftensor = new TensorflowTensorProto() {{
                            boolVal = new Boolean[]{{
                                add(false),
                                add(false),
                                add(false),
                            }};
                            dcomplexVal = new Double[]{{
                                add(2748.23),
                                add(1484.78),
                                add(5922.31),
                                add(2587.02),
                            }};
                            doubleVal = new Double[]{{
                                add(2155.29),
                                add(4067.33),
                                add(5799.12),
                                add(5520.78),
                            }};
                            dtype = TensorflowDataTypeEnum.DT_UINT32_REF;
                            floatVal = new Float[]{{
                                add(2730.09),
                                add(4554.44),
                            }};
                            halfVal = new Integer[]{{
                                add(401713),
                                add(25497),
                                add(248413),
                                add(888044),
                            }};
                            int64Val = new String[]{{
                                add("facilis"),
                                add("quaerat"),
                                add("incidunt"),
                            }};
                            intVal = new Integer[]{{
                                add(894864),
                                add(524970),
                            }};
                            resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                add(new TensorflowResourceHandleProto() {{
                                    container = "nobis";
                                    device = "error";
                                    hashCode = "veniam";
                                    maybeTypeName = "minima";
                                    name = "Van Stoltenberg PhD";
                                }}),
                            }};
                            scomplexVal = new Float[]{{
                                add(3299.35),
                                add(4461.35),
                            }};
                            stringVal = new String[]{{
                                add("beatae"),
                                add("laudantium"),
                                add("exercitationem"),
                                add("praesentium"),
                            }};
                            tensorContent = "cum";
                            tensorShape = new TensorflowTensorShapeProto() {{
                                dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                    add(new TensorShapeProtoDim() {{
                                        name = "Bob Mueller";
                                        size = "debitis";
                                    }}),
                                    add(new TensorShapeProtoDim() {{
                                        name = "Sonya Heaney";
                                        size = "corrupti";
                                    }}),
                                }};
                                unknownRank = false;
                            }};;
                            uint32Val = new Long[]{{
                                add(272683L),
                                add(543678L),
                                add(148268L),
                                add(282699L),
                            }};
                            uint64Val = new String[]{{
                                add("voluptatem"),
                                add("culpa"),
                                add("expedita"),
                                add("magnam"),
                            }};
                            variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                add(new TensorflowVariantTensorDataProto() {{
                                    metadata = "esse";
                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                    }};
                                    typeName = "sit";
                                }}),
                            }};
                            versionNumber = 530537;
                        }};;
                    }};;
                    meta = new Meta() {{
                        metrics = new org.openapis.openapi.models.shared.Metric[]{{
                            add(new Metric() {{
                                key = "repudiandae";
                                type = MetricTypeEnum.GAUGE;
                                value = 894.94;
                            }}),
                            add(new Metric() {{
                                key = "blanditiis";
                                type = MetricTypeEnum.GAUGE;
                                value = 1536.27;
                            }}),
                            add(new Metric() {{
                                key = "sit";
                                type = MetricTypeEnum.GAUGE;
                                value = 3426.11;
                            }}),
                        }};
                        puid = "saepe";
                        requestPath = new java.util.HashMap<String, String>() {{
                            put("consequatur", "incidunt");
                            put("reiciendis", "dolorem");
                            put("harum", "dicta");
                        }};
                        routing = new java.util.HashMap<String, Integer>() {{
                            put("occaecati", 289776);
                        }};
                        tags = new java.util.HashMap<String, Object>() {{
                            put("atque", "laborum");
                            put("nam", "tenetur");
                            put("laboriosam", "alias");
                        }};
                    }};;
                    status = new Status() {{
                        code = 227084;
                        info = "deserunt";
                        reason = "voluptate";
                        status = StatusStatusFlagEnum.FAILURE;
                    }};;
                    strData = "reiciendis";
                }};;
            }};            

            RouteResponse res = sdk.internal.route(req);

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
import org.openapis.openapi.models.operations.SendFeedbackRequestBody;
import org.openapis.openapi.models.operations.SendFeedbackResponse;
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

            SendFeedbackRequestBody req = new SendFeedbackRequestBody() {{
                json = new Feedback() {{
                    request = new SeldonMessage() {{
                        binData = "provident";
                        data = new DefaultData() {{
                            names = new String[]{{
                                add("delectus"),
                                add("voluptates"),
                                add("perferendis"),
                                add("est"),
                            }};
                            ndarry = new Object[]{{
                                add("reprehenderit"),
                                add("facere"),
                                add("fuga"),
                            }};
                            tensor = new Tensor() {{
                                shape = new Integer[]{{
                                    add(648598),
                                    add(333965),
                                    add(29100),
                                }};
                                values = new Double[]{{
                                    add(9195.32),
                                    add(972.43),
                                    add(5424.57),
                                    add(4420.36),
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
                                    add(3831.03),
                                    add(6939.57),
                                    add(8066.7),
                                }};
                                doubleVal = new Double[]{{
                                    add(4610.07),
                                }};
                                dtype = TensorflowDataTypeEnum.DT_BOOL;
                                floatVal = new Float[]{{
                                    add(4103.01),
                                    add(5391.18),
                                    add(6232.95),
                                    add(8872.65),
                                }};
                                halfVal = new Integer[]{{
                                    add(880107),
                                    add(618826),
                                    add(328303),
                                    add(133461),
                                }};
                                int64Val = new String[]{{
                                    add("maiores"),
                                    add("corrupti"),
                                }};
                                intVal = new Integer[]{{
                                    add(621693),
                                    add(502721),
                                    add(379356),
                                    add(922348),
                                }};
                                resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                    add(new TensorflowResourceHandleProto() {{
                                        container = "atque";
                                        device = "sunt";
                                        hashCode = "recusandae";
                                        maybeTypeName = "dolorum";
                                        name = "Dr. Leroy Wisoky Jr.";
                                    }}),
                                    add(new TensorflowResourceHandleProto() {{
                                        container = "beatae";
                                        device = "dolores";
                                        hashCode = "enim";
                                        maybeTypeName = "laboriosam";
                                        name = "Elsa Maggio";
                                    }}),
                                    add(new TensorflowResourceHandleProto() {{
                                        container = "consequuntur";
                                        device = "occaecati";
                                        hashCode = "officiis";
                                        maybeTypeName = "perspiciatis";
                                        name = "Sylvia Upton";
                                    }}),
                                }};
                                scomplexVal = new Float[]{{
                                    add(6611.18),
                                }};
                                stringVal = new String[]{{
                                    add("reprehenderit"),
                                    add("error"),
                                }};
                                tensorContent = "illo";
                                tensorShape = new TensorflowTensorShapeProto() {{
                                    dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                        add(new TensorShapeProtoDim() {{
                                            name = "Conrad Franey III";
                                            size = "ipsa";
                                        }}),
                                        add(new TensorShapeProtoDim() {{
                                            name = "Frank Krajcik";
                                            size = "cum";
                                        }}),
                                    }};
                                    unknownRank = false;
                                }};;
                                uint32Val = new Long[]{{
                                    add(898063L),
                                    add(187552L),
                                }};
                                uint64Val = new String[]{{
                                    add("distinctio"),
                                    add("voluptatum"),
                                    add("rem"),
                                }};
                                variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                    add(new TensorflowVariantTensorDataProto() {{
                                        metadata = "ad";
                                        tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                            add(new TensorflowTensorProto() {{}}),
                                            add(new TensorflowTensorProto() {{}}),
                                            add(new TensorflowTensorProto() {{}}),
                                            add(new TensorflowTensorProto() {{}}),
                                        }};
                                        typeName = "alias";
                                    }}),
                                    add(new TensorflowVariantTensorDataProto() {{
                                        metadata = "corporis";
                                        tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                            add(new TensorflowTensorProto() {{}}),
                                            add(new TensorflowTensorProto() {{}}),
                                            add(new TensorflowTensorProto() {{}}),
                                        }};
                                        typeName = "nihil";
                                    }}),
                                }};
                                versionNumber = 649078;
                            }};;
                        }};;
                        meta = new Meta() {{
                            metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                add(new Metric() {{
                                    key = "alias";
                                    type = MetricTypeEnum.TIMER;
                                    value = 9702.22;
                                }}),
                                add(new Metric() {{
                                    key = "dolores";
                                    type = MetricTypeEnum.GAUGE;
                                    value = 3279.88;
                                }}),
                            }};
                            puid = "dolore";
                            requestPath = new java.util.HashMap<String, String>() {{
                                put("nesciunt", "quae");
                                put("recusandae", "omnis");
                                put("quaerat", "molestiae");
                            }};
                            routing = new java.util.HashMap<String, Integer>() {{
                                put("ut", 633062);
                                put("adipisci", 890653);
                            }};
                            tags = new java.util.HashMap<String, Object>() {{
                                put("eum", "nemo");
                                put("recusandae", "esse");
                                put("provident", "quis");
                            }};
                        }};;
                        status = new Status() {{
                            code = 431785;
                            info = "reiciendis";
                            reason = "provident";
                            status = StatusStatusFlagEnum.SUCCESS;
                        }};;
                        strData = "ullam";
                    }};;
                    response = new SeldonMessage() {{
                        binData = "quasi";
                        data = new DefaultData() {{
                            names = new String[]{{
                                add("nostrum"),
                                add("mollitia"),
                                add("provident"),
                            }};
                            ndarry = new Object[]{{
                                add("animi"),
                                add("ex"),
                                add("aliquid"),
                                add("accusantium"),
                            }};
                            tensor = new Tensor() {{
                                shape = new Integer[]{{
                                    add(984632),
                                    add(351893),
                                    add(448143),
                                    add(721407),
                                }};
                                values = new Double[]{{
                                    add(6375.83),
                                    add(6720.41),
                                    add(8130.54),
                                    add(2666.97),
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
                                    add(8897.94),
                                    add(9569.33),
                                    add(7645.62),
                                }};
                                doubleVal = new Double[]{{
                                    add(6982.49),
                                }};
                                dtype = TensorflowDataTypeEnum.DT_QUINT8;
                                floatVal = new Float[]{{
                                    add(820.57),
                                    add(1476.85),
                                }};
                                halfVal = new Integer[]{{
                                    add(62636),
                                    add(21688),
                                    add(241901),
                                    add(137251),
                                }};
                                int64Val = new String[]{{
                                    add("eius"),
                                    add("rem"),
                                }};
                                intVal = new Integer[]{{
                                    add(773084),
                                    add(179410),
                                    add(958741),
                                    add(433279),
                                }};
                                resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                    add(new TensorflowResourceHandleProto() {{
                                        container = "minima";
                                        device = "beatae";
                                        hashCode = "cupiditate";
                                        maybeTypeName = "provident";
                                        name = "Ed Weimann DVM";
                                    }}),
                                }};
                                scomplexVal = new Float[]{{
                                    add(9834.27),
                                    add(8918.01),
                                    add(3998.02),
                                }};
                                stringVal = new String[]{{
                                    add("suscipit"),
                                    add("dolorem"),
                                    add("fugit"),
                                    add("cumque"),
                                }};
                                tensorContent = "fuga";
                                tensorShape = new TensorflowTensorShapeProto() {{
                                    dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                        add(new TensorShapeProtoDim() {{
                                            name = "Mr. Santiago Stoltenberg IV";
                                            size = "natus";
                                        }}),
                                    }};
                                    unknownRank = false;
                                }};;
                                uint32Val = new Long[]{{
                                    add(382440L),
                                    add(241557L),
                                    add(96562L),
                                }};
                                uint64Val = new String[]{{
                                    add("doloribus"),
                                }};
                                variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                    add(new TensorflowVariantTensorDataProto() {{
                                        metadata = "necessitatibus";
                                        tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                            add(new TensorflowTensorProto() {{}}),
                                        }};
                                        typeName = "tempora";
                                    }}),
                                    add(new TensorflowVariantTensorDataProto() {{
                                        metadata = "nihil";
                                        tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                            add(new TensorflowTensorProto() {{}}),
                                            add(new TensorflowTensorProto() {{}}),
                                        }};
                                        typeName = "dicta";
                                    }}),
                                    add(new TensorflowVariantTensorDataProto() {{
                                        metadata = "iusto";
                                        tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                            add(new TensorflowTensorProto() {{}}),
                                            add(new TensorflowTensorProto() {{}}),
                                        }};
                                        typeName = "praesentium";
                                    }}),
                                    add(new TensorflowVariantTensorDataProto() {{
                                        metadata = "maiores";
                                        tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                            add(new TensorflowTensorProto() {{}}),
                                            add(new TensorflowTensorProto() {{}}),
                                            add(new TensorflowTensorProto() {{}}),
                                            add(new TensorflowTensorProto() {{}}),
                                        }};
                                        typeName = "vel";
                                    }}),
                                }};
                                versionNumber = 99958;
                            }};;
                        }};;
                        meta = new Meta() {{
                            metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                add(new Metric() {{
                                    key = "doloremque";
                                    type = MetricTypeEnum.COUNTER;
                                    value = 4837.06;
                                }}),
                                add(new Metric() {{
                                    key = "tempora";
                                    type = MetricTypeEnum.GAUGE;
                                    value = 4037.93;
                                }}),
                                add(new Metric() {{
                                    key = "consectetur";
                                    type = MetricTypeEnum.GAUGE;
                                    value = 588.7;
                                }}),
                                add(new Metric() {{
                                    key = "laborum";
                                    type = MetricTypeEnum.COUNTER;
                                    value = 3447.18;
                                }}),
                            }};
                            puid = "fugiat";
                            requestPath = new java.util.HashMap<String, String>() {{
                                put("aliquid", "officia");
                                put("suscipit", "aliquid");
                                put("perferendis", "eum");
                            }};
                            routing = new java.util.HashMap<String, Integer>() {{
                                put("iste", 661607);
                                put("ab", 625358);
                            }};
                            tags = new java.util.HashMap<String, Object>() {{
                                put("voluptates", "mollitia");
                                put("laborum", "libero");
                                put("ad", "deleniti");
                                put("enim", "vitae");
                            }};
                        }};;
                        status = new Status() {{
                            code = 833316;
                            info = "ex";
                            reason = "quo";
                            status = StatusStatusFlagEnum.SUCCESS;
                        }};;
                        strData = "ut";
                    }};;
                    reward = 3210.43;
                    truth = new SeldonMessage() {{
                        binData = "expedita";
                        data = new DefaultData() {{
                            names = new String[]{{
                                add("molestias"),
                            }};
                            ndarry = new Object[]{{
                                add("aliquid"),
                                add("beatae"),
                                add("voluptatum"),
                            }};
                            tensor = new Tensor() {{
                                shape = new Integer[]{{
                                    add(85233),
                                    add(703218),
                                    add(665678),
                                }};
                                values = new Double[]{{
                                    add(296.34),
                                    add(9591.43),
                                    add(8892.88),
                                }};
                            }};;
                            tftensor = new TensorflowTensorProto() {{
                                boolVal = new Boolean[]{{
                                    add(false),
                                }};
                                dcomplexVal = new Double[]{{
                                    add(8671.68),
                                    add(8913.15),
                                    add(291.9),
                                }};
                                doubleVal = new Double[]{{
                                    add(5349.17),
                                }};
                                dtype = TensorflowDataTypeEnum.DT_VARIANT_REF;
                                floatVal = new Float[]{{
                                    add(9583.08),
                                    add(5241.84),
                                }};
                                halfVal = new Integer[]{{
                                    add(365100),
                                    add(992074),
                                    add(190567),
                                    add(355225),
                                }};
                                int64Val = new String[]{{
                                    add("illum"),
                                }};
                                intVal = new Integer[]{{
                                    add(770675),
                                    add(842777),
                                    add(720528),
                                }};
                                resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                    add(new TensorflowResourceHandleProto() {{
                                        container = "culpa";
                                        device = "dolor";
                                        hashCode = "aliquam";
                                        maybeTypeName = "inventore";
                                        name = "Peter Goodwin Sr.";
                                    }}),
                                    add(new TensorflowResourceHandleProto() {{
                                        container = "sit";
                                        device = "modi";
                                        hashCode = "fugit";
                                        maybeTypeName = "ab";
                                        name = "Eric Fadel";
                                    }}),
                                }};
                                scomplexVal = new Float[]{{
                                    add(551.07),
                                }};
                                stringVal = new String[]{{
                                    add("eveniet"),
                                    add("impedit"),
                                    add("officiis"),
                                }};
                                tensorContent = "esse";
                                tensorShape = new TensorflowTensorShapeProto() {{
                                    dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                        add(new TensorShapeProtoDim() {{
                                            name = "Sally Dooley";
                                            size = "vel";
                                        }}),
                                        add(new TensorShapeProtoDim() {{
                                            name = "Miss Oscar Heller";
                                            size = "nobis";
                                        }}),
                                        add(new TensorShapeProtoDim() {{
                                            name = "Mrs. Kate Cronin";
                                            size = "quasi";
                                        }}),
                                        add(new TensorShapeProtoDim() {{
                                            name = "Teri Thiel";
                                            size = "sequi";
                                        }}),
                                    }};
                                    unknownRank = false;
                                }};;
                                uint32Val = new Long[]{{
                                    add(918092L),
                                    add(759283L),
                                    add(579681L),
                                    add(364544L),
                                }};
                                uint64Val = new String[]{{
                                    add("blanditiis"),
                                    add("officia"),
                                }};
                                variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                    add(new TensorflowVariantTensorDataProto() {{
                                        metadata = "numquam";
                                        tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                            add(new TensorflowTensorProto() {{}}),
                                            add(new TensorflowTensorProto() {{}}),
                                        }};
                                        typeName = "quos";
                                    }}),
                                    add(new TensorflowVariantTensorDataProto() {{
                                        metadata = "eius";
                                        tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                            add(new TensorflowTensorProto() {{}}),
                                        }};
                                        typeName = "ducimus";
                                    }}),
                                }};
                                versionNumber = 200516;
                            }};;
                        }};;
                        meta = new Meta() {{
                            metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                add(new Metric() {{
                                    key = "laudantium";
                                    type = MetricTypeEnum.COUNTER;
                                    value = 974.93;
                                }}),
                                add(new Metric() {{
                                    key = "rem";
                                    type = MetricTypeEnum.TIMER;
                                    value = 1173.8;
                                }}),
                                add(new Metric() {{
                                    key = "nisi";
                                    type = MetricTypeEnum.COUNTER;
                                    value = 2330.78;
                                }}),
                            }};
                            puid = "aperiam";
                            requestPath = new java.util.HashMap<String, String>() {{
                                put("reiciendis", "soluta");
                                put("alias", "omnis");
                                put("eos", "occaecati");
                            }};
                            routing = new java.util.HashMap<String, Integer>() {{
                                put("magni", 81369);
                                put("fuga", 881897);
                                put("voluptatibus", 719620);
                            }};
                            tags = new java.util.HashMap<String, Object>() {{
                                put("delectus", "minima");
                                put("praesentium", "maxime");
                                put("magnam", "temporibus");
                            }};
                        }};;
                        status = new Status() {{
                            code = 549501;
                            info = "commodi";
                            reason = "itaque";
                            status = StatusStatusFlagEnum.SUCCESS;
                        }};;
                        strData = "totam";
                    }};;
                }};;
            }};            

            SendFeedbackResponse res = sdk.internal.sendFeedback(req);

            if (res.seldonMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transformInput

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransformInputRequestBody;
import org.openapis.openapi.models.operations.TransformInputResponse;
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

            TransformInputRequestBody req = new TransformInputRequestBody() {{
                json = new SeldonMessage() {{
                    binData = "earum";
                    data = new DefaultData() {{
                        names = new String[]{{
                            add("nam"),
                            add("vero"),
                        }};
                        ndarry = new Object[]{{
                            add("ipsam"),
                        }};
                        tensor = new Tensor() {{
                            shape = new Integer[]{{
                                add(1383),
                                add(93894),
                            }};
                            values = new Double[]{{
                                add(9785.48),
                            }};
                        }};;
                        tftensor = new TensorflowTensorProto() {{
                            boolVal = new Boolean[]{{
                                add(false),
                                add(false),
                            }};
                            dcomplexVal = new Double[]{{
                                add(8587.78),
                                add(6436.78),
                                add(4585.03),
                            }};
                            doubleVal = new Double[]{{
                                add(4445.87),
                                add(6677.15),
                            }};
                            dtype = TensorflowDataTypeEnum.DT_QINT16;
                            floatVal = new Float[]{{
                                add(8806.79),
                                add(7746.84),
                                add(9450.27),
                            }};
                            halfVal = new Integer[]{{
                                add(991891),
                                add(404306),
                                add(376741),
                                add(895346),
                            }};
                            int64Val = new String[]{{
                                add("quae"),
                                add("minus"),
                                add("fuga"),
                                add("laborum"),
                            }};
                            intVal = new Integer[]{{
                                add(244889),
                            }};
                            resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                add(new TensorflowResourceHandleProto() {{
                                    container = "ipsum";
                                    device = "impedit";
                                    hashCode = "magni";
                                    maybeTypeName = "soluta";
                                    name = "Alton Grimes";
                                }}),
                                add(new TensorflowResourceHandleProto() {{
                                    container = "sequi";
                                    device = "dignissimos";
                                    hashCode = "neque";
                                    maybeTypeName = "quo";
                                    name = "Ellis Kessler";
                                }}),
                                add(new TensorflowResourceHandleProto() {{
                                    container = "vel";
                                    device = "magnam";
                                    hashCode = "quibusdam";
                                    maybeTypeName = "inventore";
                                    name = "Wm Brakus";
                                }}),
                            }};
                            scomplexVal = new Float[]{{
                                add(3041.98),
                                add(2470.45),
                                add(753.59),
                                add(365.61),
                            }};
                            stringVal = new String[]{{
                                add("ea"),
                                add("beatae"),
                            }};
                            tensorContent = "vero";
                            tensorShape = new TensorflowTensorShapeProto() {{
                                dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                    add(new TensorShapeProtoDim() {{
                                        name = "Sheila Graham";
                                        size = "dicta";
                                    }}),
                                    add(new TensorShapeProtoDim() {{
                                        name = "Courtney Monahan III";
                                        size = "itaque";
                                    }}),
                                    add(new TensorShapeProtoDim() {{
                                        name = "Maggie Friesen";
                                        size = "sit";
                                    }}),
                                }};
                                unknownRank = false;
                            }};;
                            uint32Val = new Long[]{{
                                add(7468L),
                            }};
                            uint64Val = new String[]{{
                                add("recusandae"),
                                add("ea"),
                                add("quidem"),
                            }};
                            variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                add(new TensorflowVariantTensorDataProto() {{
                                    metadata = "facilis";
                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                    }};
                                    typeName = "perspiciatis";
                                }}),
                                add(new TensorflowVariantTensorDataProto() {{
                                    metadata = "expedita";
                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                    }};
                                    typeName = "a";
                                }}),
                            }};
                            versionNumber = 455579;
                        }};;
                    }};;
                    meta = new Meta() {{
                        metrics = new org.openapis.openapi.models.shared.Metric[]{{
                            add(new Metric() {{
                                key = "unde";
                                type = MetricTypeEnum.TIMER;
                                value = 6540.82;
                            }}),
                            add(new Metric() {{
                                key = "impedit";
                                type = MetricTypeEnum.GAUGE;
                                value = 3574.25;
                            }}),
                        }};
                        puid = "est";
                        requestPath = new java.util.HashMap<String, String>() {{
                            put("esse", "labore");
                            put("veritatis", "vero");
                            put("consectetur", "vitae");
                        }};
                        routing = new java.util.HashMap<String, Integer>() {{
                            put("dolorem", 322017);
                        }};
                        tags = new java.util.HashMap<String, Object>() {{
                            put("iste", "ex");
                        }};
                    }};;
                    status = new Status() {{
                        code = 367626;
                        info = "soluta";
                        reason = "libero";
                        status = StatusStatusFlagEnum.FAILURE;
                    }};;
                    strData = "dolorum";
                }};;
            }};            

            TransformInputResponse res = sdk.internal.transformInput(req);

            if (res.seldonMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transformInput3

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransformInput3RequestBody;
import org.openapis.openapi.models.operations.TransformInput3Response;
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

            TransformInput3RequestBody req = new TransformInput3RequestBody() {{
                json = new SeldonMessage() {{
                    binData = "odio";
                    data = new DefaultData() {{
                        names = new String[]{{
                            add("alias"),
                        }};
                        ndarry = new Object[]{{
                            add("vel"),
                        }};
                        tensor = new Tensor() {{
                            shape = new Integer[]{{
                                add(63553),
                            }};
                            values = new Double[]{{
                                add(2082.53),
                                add(3483.57),
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
                                add(2153.98),
                            }};
                            doubleVal = new Double[]{{
                                add(8583.38),
                                add(7143.76),
                                add(8028.94),
                            }};
                            dtype = TensorflowDataTypeEnum.DT_STRING;
                            floatVal = new Float[]{{
                                add(3421.37),
                            }};
                            halfVal = new Integer[]{{
                                add(727250),
                                add(115661),
                                add(663318),
                            }};
                            int64Val = new String[]{{
                                add("fugiat"),
                                add("officia"),
                                add("quos"),
                            }};
                            intVal = new Integer[]{{
                                add(25756),
                                add(479385),
                                add(57320),
                                add(914864),
                            }};
                            resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                add(new TensorflowResourceHandleProto() {{
                                    container = "aperiam";
                                    device = "totam";
                                    hashCode = "dolore";
                                    maybeTypeName = "eligendi";
                                    name = "Kenneth Johnson";
                                }}),
                            }};
                            scomplexVal = new Float[]{{
                                add(1072.1),
                                add(6686.06),
                                add(8173.39),
                                add(5459.18),
                            }};
                            stringVal = new String[]{{
                                add("provident"),
                                add("accusamus"),
                            }};
                            tensorContent = "necessitatibus";
                            tensorShape = new TensorflowTensorShapeProto() {{
                                dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                    add(new TensorShapeProtoDim() {{
                                        name = "Angel Jones";
                                        size = "laudantium";
                                    }}),
                                    add(new TensorShapeProtoDim() {{
                                        name = "Cecelia Wiza";
                                        size = "alias";
                                    }}),
                                    add(new TensorShapeProtoDim() {{
                                        name = "Yvette Paucek MD";
                                        size = "officiis";
                                    }}),
                                }};
                                unknownRank = false;
                            }};;
                            uint32Val = new Long[]{{
                                add(844854L),
                            }};
                            uint64Val = new String[]{{
                                add("praesentium"),
                                add("odit"),
                            }};
                            variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                add(new TensorflowVariantTensorDataProto() {{
                                    metadata = "corporis";
                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                    }};
                                    typeName = "earum";
                                }}),
                            }};
                            versionNumber = 239337;
                        }};;
                    }};;
                    meta = new Meta() {{
                        metrics = new org.openapis.openapi.models.shared.Metric[]{{
                            add(new Metric() {{
                                key = "similique";
                                type = MetricTypeEnum.COUNTER;
                                value = 6937.46;
                            }}),
                            add(new Metric() {{
                                key = "quis";
                                type = MetricTypeEnum.COUNTER;
                                value = 6002.13;
                            }}),
                            add(new Metric() {{
                                key = "molestiae";
                                type = MetricTypeEnum.TIMER;
                                value = 5855.93;
                            }}),
                            add(new Metric() {{
                                key = "fugit";
                                type = MetricTypeEnum.COUNTER;
                                value = 2569.16;
                            }}),
                        }};
                        puid = "nesciunt";
                        requestPath = new java.util.HashMap<String, String>() {{
                            put("officia", "dignissimos");
                            put("optio", "necessitatibus");
                            put("corporis", "qui");
                            put("expedita", "voluptatum");
                        }};
                        routing = new java.util.HashMap<String, Integer>() {{
                            put("minima", 809594);
                            put("enim", 204072);
                            put("in", 796397);
                        }};
                        tags = new java.util.HashMap<String, Object>() {{
                            put("modi", "corporis");
                            put("magnam", "voluptates");
                        }};
                    }};;
                    status = new Status() {{
                        code = 978173;
                        info = "tempore";
                        reason = "aperiam";
                        status = StatusStatusFlagEnum.FAILURE;
                    }};;
                    strData = "ratione";
                }};;
            }};            

            TransformInput3Response res = sdk.internal.transformInput3(req);

            if (res.seldonMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transformOutput

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransformOutputRequestBody;
import org.openapis.openapi.models.operations.TransformOutputResponse;
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

            TransformOutputRequestBody req = new TransformOutputRequestBody() {{
                json = new SeldonMessage() {{
                    binData = "labore";
                    data = new DefaultData() {{
                        names = new String[]{{
                            add("occaecati"),
                            add("voluptas"),
                            add("quo"),
                        }};
                        ndarry = new Object[]{{
                            add("minus"),
                        }};
                        tensor = new Tensor() {{
                            shape = new Integer[]{{
                                add(344530),
                                add(669237),
                                add(770873),
                            }};
                            values = new Double[]{{
                                add(7358.94),
                                add(8786.01),
                                add(1415.06),
                                add(9974.37),
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
                                add(4413.21),
                                add(452.34),
                            }};
                            doubleVal = new Double[]{{
                                add(3252.97),
                                add(4483.69),
                            }};
                            dtype = TensorflowDataTypeEnum.DT_UINT64;
                            floatVal = new Float[]{{
                                add(1721.95),
                                add(6211.69),
                                add(850.76),
                            }};
                            halfVal = new Integer[]{{
                                add(452729),
                                add(866789),
                            }};
                            int64Val = new String[]{{
                                add("similique"),
                                add("optio"),
                                add("ex"),
                                add("quaerat"),
                            }};
                            intVal = new Integer[]{{
                                add(888616),
                                add(810839),
                            }};
                            resourceHandleVal = new org.openapis.openapi.models.shared.TensorflowResourceHandleProto[]{{
                                add(new TensorflowResourceHandleProto() {{
                                    container = "exercitationem";
                                    device = "quam";
                                    hashCode = "dolorem";
                                    maybeTypeName = "modi";
                                    name = "Bobbie Terry";
                                }}),
                                add(new TensorflowResourceHandleProto() {{
                                    container = "cum";
                                    device = "dicta";
                                    hashCode = "earum";
                                    maybeTypeName = "veniam";
                                    name = "Mr. Todd Reilly";
                                }}),
                                add(new TensorflowResourceHandleProto() {{
                                    container = "nobis";
                                    device = "ipsa";
                                    hashCode = "ducimus";
                                    maybeTypeName = "maiores";
                                    name = "Joyce Howe";
                                }}),
                            }};
                            scomplexVal = new Float[]{{
                                add(5782.1),
                                add(3679.17),
                                add(3063.82),
                            }};
                            stringVal = new String[]{{
                                add("doloribus"),
                                add("eligendi"),
                            }};
                            tensorContent = "sint";
                            tensorShape = new TensorflowTensorShapeProto() {{
                                dim = new org.openapis.openapi.models.shared.TensorShapeProtoDim[]{{
                                    add(new TensorShapeProtoDim() {{
                                        name = "Matt Macejkovic";
                                        size = "odio";
                                    }}),
                                    add(new TensorShapeProtoDim() {{
                                        name = "Gwen Braun";
                                        size = "assumenda";
                                    }}),
                                }};
                                unknownRank = false;
                            }};;
                            uint32Val = new Long[]{{
                                add(725574L),
                                add(244032L),
                                add(38557L),
                            }};
                            uint64Val = new String[]{{
                                add("impedit"),
                                add("cum"),
                                add("ipsum"),
                                add("adipisci"),
                            }};
                            variantVal = new org.openapis.openapi.models.shared.TensorflowVariantTensorDataProto[]{{
                                add(new TensorflowVariantTensorDataProto() {{
                                    metadata = "deserunt";
                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                        add(new TensorflowTensorProto() {{}}),
                                    }};
                                    typeName = "quis";
                                }}),
                                add(new TensorflowVariantTensorDataProto() {{
                                    metadata = "veniam";
                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                    }};
                                    typeName = "architecto";
                                }}),
                                add(new TensorflowVariantTensorDataProto() {{
                                    metadata = "cupiditate";
                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                    }};
                                    typeName = "eligendi";
                                }}),
                                add(new TensorflowVariantTensorDataProto() {{
                                    metadata = "possimus";
                                    tensors = new org.openapis.openapi.models.shared.TensorflowTensorProto[]{{
                                        add(new TensorflowTensorProto() {{}}),
                                        add(new TensorflowTensorProto() {{}}),
                                    }};
                                    typeName = "magnam";
                                }}),
                            }};
                            versionNumber = 932296;
                        }};;
                    }};;
                    meta = new Meta() {{
                        metrics = new org.openapis.openapi.models.shared.Metric[]{{
                            add(new Metric() {{
                                key = "asperiores";
                                type = MetricTypeEnum.COUNTER;
                                value = 1645.32;
                            }}),
                        }};
                        puid = "facere";
                        requestPath = new java.util.HashMap<String, String>() {{
                            put("odit", "pariatur");
                            put("amet", "exercitationem");
                            put("ab", "velit");
                        }};
                        routing = new java.util.HashMap<String, Integer>() {{
                            put("tempore", 395233);
                            put("voluptatibus", 310840);
                            put("blanditiis", 718627);
                        }};
                        tags = new java.util.HashMap<String, Object>() {{
                            put("quis", "nisi");
                            put("libero", "minus");
                        }};
                    }};;
                    status = new Status() {{
                        code = 815200;
                        info = "facilis";
                        reason = "ipsum";
                        status = StatusStatusFlagEnum.SUCCESS;
                    }};;
                    strData = "voluptatibus";
                }};;
            }};            

            TransformOutputResponse res = sdk.internal.transformOutput(req);

            if (res.seldonMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
