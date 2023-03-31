<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateActionRequest;
import org.openapis.openapi.models.operations.CreateActionResponse;
import org.openapis.openapi.models.shared.CreateActionRequestInput;
import org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnum;
import org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoalWeeks;
import org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoal;
import org.openapis.openapi.models.shared.ActionResourceAttributesTypeEnum;
import org.openapis.openapi.models.shared.ActionResourceAttributesInput;
import org.openapis.openapi.models.shared.ActionResourceRelationshipsPlanData;
import org.openapis.openapi.models.shared.ActionResourceRelationshipsPlan;
import org.openapis.openapi.models.shared.ActionResourceRelationships;
import org.openapis.openapi.models.shared.ActionResourceInput;
import org.openapis.openapi.models.shared.ActionWindow;
import org.openapis.openapi.models.shared.ActionMetricValidationsMaximum;
import org.openapis.openapi.models.shared.ActionMetricValidationsMinimum;
import org.openapis.openapi.models.shared.ActionMetricValidations;
import org.openapis.openapi.models.shared.ActionMetric;
import org.openapis.openapi.models.shared.Identifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateActionRequest req = new CreateActionRequest() {{
                request = new CreateActionRequestInput() {{
                    data = new ActionResourceInput() {{
                        attributes = new ActionResourceAttributesInput() {{
                            thread = "corrupti";
                            details = new java.util.HashMap<String, Object>() {{
                                put("distinctio", "quibusdam");
                                put("unde", "nulla");
                                put("corrupti", "illum");
                            }};
                            effectiveFrom = "vel";
                            effectiveTo = "error";
                            frequencyGoal = new ActionResourceAttributesFrequencyGoal() {{
                                weeks = new ActionResourceAttributesFrequencyGoalWeeks() {{
                                    days = new org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnum[]{{
                                        add("2"),
                                        add("3"),
                                        add("2"),
                                    }};
                                }};
                            }};
                            identifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                add(new Identifier() {{
                                    label = "ipsa";
                                    system = "delectus";
                                    value = "tempora";
                                }}),
                                add(new Identifier() {{
                                    label = "suscipit";
                                    system = "molestiae";
                                    value = "minus";
                                }}),
                                add(new Identifier() {{
                                    label = "placeat";
                                    system = "voluptatum";
                                    value = "iusto";
                                }}),
                                add(new Identifier() {{
                                    label = "excepturi";
                                    system = "nisi";
                                    value = "recusandae";
                                }}),
                            }};
                            intake = new java.util.HashMap<String, Object>() {{
                                put("ab", "quis");
                                put("veritatis", "deserunt");
                                put("perferendis", "ipsam");
                                put("repellendus", "sapiente");
                            }};
                            metricRequired = false;
                            metrics = new org.openapis.openapi.models.shared.ActionMetric[]{{
                                add(new ActionMetric() {{
                                    goal = new java.util.HashMap<String, Object>() {{
                                        put("at", "at");
                                    }};
                                    metricType = "maiores";
                                    unit = "molestiae";
                                    validations = new ActionMetricValidations() {{
                                        maximum = new ActionMetricValidationsMaximum() {{
                                            unit = "quod";
                                            value = 8009.11;
                                        }};
                                        minimum = new ActionMetricValidationsMinimum() {{
                                            unit = "esse";
                                            value = 5204.78;
                                        }};
                                    }};
                                }}),
                                add(new ActionMetric() {{
                                    goal = new java.util.HashMap<String, Object>() {{
                                        put("dolorum", "dicta");
                                        put("nam", "officia");
                                        put("occaecati", "fugit");
                                        put("deleniti", "hic");
                                    }};
                                    metricType = "optio";
                                    unit = "totam";
                                    validations = new ActionMetricValidations() {{
                                        maximum = new ActionMetricValidationsMaximum() {{
                                            unit = "beatae";
                                            value = 4146.62;
                                        }};
                                        minimum = new ActionMetricValidationsMinimum() {{
                                            unit = "molestiae";
                                            value = 2645.55;
                                        }};
                                    }};
                                }}),
                                add(new ActionMetric() {{
                                    goal = new java.util.HashMap<String, Object>() {{
                                        put("impedit", "cum");
                                    }};
                                    metricType = "esse";
                                    unit = "ipsum";
                                    validations = new ActionMetricValidations() {{
                                        maximum = new ActionMetricValidationsMaximum() {{
                                            unit = "excepturi";
                                            value = 1352.18;
                                        }};
                                        minimum = new ActionMetricValidationsMinimum() {{
                                            unit = "perferendis";
                                            value = 3241.41;
                                        }};
                                    }};
                                }}),
                                add(new ActionMetric() {{
                                    goal = new java.util.HashMap<String, Object>() {{
                                        put("sed", "iste");
                                        put("dolor", "natus");
                                        put("laboriosam", "hic");
                                    }};
                                    metricType = "saepe";
                                    unit = "fuga";
                                    validations = new ActionMetricValidations() {{
                                        maximum = new ActionMetricValidationsMaximum() {{
                                            unit = "in";
                                            value = 3595.08;
                                        }};
                                        minimum = new ActionMetricValidationsMinimum() {{
                                            unit = "iste";
                                            value = 4370.32;
                                        }};
                                    }};
                                }}),
                            }};
                            title = "Dr.";
                            tracking = false;
                            type = "other_lifestyle";
                            windows = new org.openapis.openapi.models.shared.ActionWindow[]{{
                                add(new ActionWindow() {{
                                    id = "architecto";
                                    title = "Mr.";
                                    type = "reiciendis";
                                }}),
                                add(new ActionWindow() {{
                                    id = "est";
                                    title = "Miss";
                                    type = "laborum";
                                }}),
                                add(new ActionWindow() {{
                                    id = "dolores";
                                    title = "Mrs.";
                                    type = "corporis";
                                }}),
                            }};
                        }};
                        id = "explicabo";
                        relationships = new ActionResourceRelationships() {{
                            plan = new ActionResourceRelationshipsPlan() {{
                                data = new ActionResourceRelationshipsPlanData() {{
                                    id = "nobis";
                                    type = "enim";
                                }};
                                links = new java.util.HashMap<String, Object>() {{
                                    put("nemo", "minima");
                                    put("excepturi", "accusantium");
                                    put("iure", "culpa");
                                }};
                            }};
                        }};
                        type = "doloribus";
                    }};
                }};
            }};            

            CreateActionResponse res = sdk.action.createAction(req);

            if (res.createActionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->