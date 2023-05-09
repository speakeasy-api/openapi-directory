<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateActionResponse;
import org.openapis.openapi.models.shared.ActionMetric;
import org.openapis.openapi.models.shared.ActionMetricValidations;
import org.openapis.openapi.models.shared.ActionMetricValidationsMaximum;
import org.openapis.openapi.models.shared.ActionMetricValidationsMinimum;
import org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoal;
import org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoalWeeks;
import org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnum;
import org.openapis.openapi.models.shared.ActionResourceAttributesInput;
import org.openapis.openapi.models.shared.ActionResourceAttributesTypeEnum;
import org.openapis.openapi.models.shared.ActionResourceInput;
import org.openapis.openapi.models.shared.ActionResourceRelationships;
import org.openapis.openapi.models.shared.ActionResourceRelationshipsPlan;
import org.openapis.openapi.models.shared.ActionResourceRelationshipsPlanData;
import org.openapis.openapi.models.shared.ActionWindow;
import org.openapis.openapi.models.shared.CreateActionRequestInput;
import org.openapis.openapi.models.shared.Identifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateActionRequestInput req = new CreateActionRequestInput(                new ActionResourceInput("corrupti", "provident") {{
                                attributes = new ActionResourceAttributesInput("distinctio", "quibusdam", ActionResourceAttributesTypeEnum.OTHER_LIFESTYLE) {{
                                    thread = "unde";
                                    details = new java.util.HashMap<String, Object>() {{
                                        put("corrupti", "illum");
                                        put("vel", "error");
                                        put("deserunt", "suscipit");
                                        put("iure", "magnam");
                                    }};
                                    effectiveTo = "debitis";
                                    frequencyGoal = new ActionResourceAttributesFrequencyGoal() {{
                                        weeks = new ActionResourceAttributesFrequencyGoalWeeks() {{
                                            days = new org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnum[]{{
                                                add(ActionResourceAttributesFrequencyGoalWeeksDaysEnum.SIX),
                                            }};
                                        }};;
                                    }};;
                                    identifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                        add(new Identifier("placeat", "voluptatum") {{
                                            label = "suscipit";
                                            system = "molestiae";
                                            value = "minus";
                                        }}),
                                        add(new Identifier("recusandae", "temporibus") {{
                                            label = "iusto";
                                            system = "excepturi";
                                            value = "nisi";
                                        }}),
                                    }};
                                    intake = new java.util.HashMap<String, Object>() {{
                                        put("quis", "veritatis");
                                    }};
                                    metricRequired = false;
                                    metrics = new org.openapis.openapi.models.shared.ActionMetric[]{{
                                        add(new ActionMetric() {{
                                            goal = new java.util.HashMap<String, Object>() {{
                                                put("ipsam", "repellendus");
                                            }};
                                            metricType = "sapiente";
                                            unit = "quo";
                                            validations = new ActionMetricValidations() {{
                                                maximum = new ActionMetricValidationsMaximum() {{
                                                    unit = "odit";
                                                    value = 8700.13;
                                                }};
                                                minimum = new ActionMetricValidationsMinimum() {{
                                                    unit = "at";
                                                    value = 9786.19;
                                                }};
                                            }};
                                        }}),
                                        add(new ActionMetric() {{
                                            goal = new java.util.HashMap<String, Object>() {{
                                                put("quod", "quod");
                                                put("esse", "totam");
                                            }};
                                            metricType = "porro";
                                            unit = "dolorum";
                                            validations = new ActionMetricValidations() {{
                                                maximum = new ActionMetricValidationsMaximum() {{
                                                    unit = "dicta";
                                                    value = 7206.33;
                                                }};
                                                minimum = new ActionMetricValidationsMinimum() {{
                                                    unit = "officia";
                                                    value = 5820.2;
                                                }};
                                            }};
                                        }}),
                                        add(new ActionMetric() {{
                                            goal = new java.util.HashMap<String, Object>() {{
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
                                    }};
                                    tracking = false;
                                    windows = new org.openapis.openapi.models.shared.ActionWindow[]{{
                                        add(new ActionWindow("nobis") {{
                                            id = "cb739205-9293-496f-aa75-96eb10faaa23";
                                            title = "Mrs.";
                                            type = "explicabo";
                                        }}),
                                    }};
                                }};;
                                relationships = new ActionResourceRelationships() {{
                                    plan = new ActionResourceRelationshipsPlan() {{
                                        data = new ActionResourceRelationshipsPlanData() {{
                                            id = "5955907a-ff1a-43a2-ba94-67739251aa52";
                                            type = "quo";
                                        }};;
                                        links = new java.util.HashMap<String, Object>() {{
                                            put("tenetur", "ipsam");
                                        }};
                                    }};;
                                }};;
                            }};);            

            CreateActionResponse res = sdk.action.createAction(req);

            if (res.createActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->