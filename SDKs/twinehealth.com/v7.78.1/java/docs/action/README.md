# action

## Overview

An action is an actionable item in a patient's plan.

### Available Operations

* [createAction](#createaction) - Create action
* [fetchAction](#fetchaction) - Get an action
* [updateAction](#updateaction) - Update an action

## createAction

Create a plan action

### Example Usage

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

            org.openapis.openapi.models.shared.CreateActionRequestInput req = new CreateActionRequestInput(                new ActionResourceInput("id", "possimus") {{
                                attributes = new ActionResourceAttributesInput("aut", "quasi", ActionResourceAttributesTypeEnum.OTHER_LIFESTYLE) {{
                                    thread = "error";
                                    details = new java.util.HashMap<String, Object>() {{
                                        put("laborum", "quasi");
                                        put("reiciendis", "voluptatibus");
                                        put("vero", "nihil");
                                        put("praesentium", "voluptatibus");
                                    }};
                                    effectiveTo = "ipsa";
                                    frequencyGoal = new ActionResourceAttributesFrequencyGoal() {{
                                        weeks = new ActionResourceAttributesFrequencyGoalWeeks() {{
                                            days = new org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnum[]{{
                                                add(ActionResourceAttributesFrequencyGoalWeeksDaysEnum.THREE),
                                                add(ActionResourceAttributesFrequencyGoalWeeksDaysEnum.FIVE),
                                                add(ActionResourceAttributesFrequencyGoalWeeksDaysEnum.ZERO),
                                            }};
                                        }};;
                                    }};;
                                    identifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                        add(new Identifier("dicta", "corporis") {{
                                            label = "reprehenderit";
                                            system = "ut";
                                            value = "maiores";
                                        }}),
                                    }};
                                    intake = new java.util.HashMap<String, Object>() {{
                                        put("iusto", "dicta");
                                        put("harum", "enim");
                                    }};
                                    metricRequired = false;
                                    metrics = new org.openapis.openapi.models.shared.ActionMetric[]{{
                                        add(new ActionMetric() {{
                                            goal = new java.util.HashMap<String, Object>() {{
                                                put("repudiandae", "quae");
                                                put("ipsum", "quidem");
                                            }};
                                            metricType = "molestias";
                                            unit = "excepturi";
                                            validations = new ActionMetricValidations() {{
                                                maximum = new ActionMetricValidationsMaximum() {{
                                                    unit = "pariatur";
                                                    value = 2653.89;
                                                }};
                                                minimum = new ActionMetricValidationsMinimum() {{
                                                    unit = "praesentium";
                                                    value = 5232.48;
                                                }};
                                            }};
                                        }}),
                                        add(new ActionMetric() {{
                                            goal = new java.util.HashMap<String, Object>() {{
                                                put("quasi", "repudiandae");
                                                put("sint", "veritatis");
                                                put("itaque", "incidunt");
                                                put("enim", "consequatur");
                                            }};
                                            metricType = "est";
                                            unit = "quibusdam";
                                            validations = new ActionMetricValidations() {{
                                                maximum = new ActionMetricValidationsMaximum() {{
                                                    unit = "explicabo";
                                                    value = 6471.74;
                                                }};
                                                minimum = new ActionMetricValidationsMinimum() {{
                                                    unit = "distinctio";
                                                    value = 8413.86;
                                                }};
                                            }};
                                        }}),
                                        add(new ActionMetric() {{
                                            goal = new java.util.HashMap<String, Object>() {{
                                                put("modi", "qui");
                                                put("aliquid", "cupiditate");
                                            }};
                                            metricType = "quos";
                                            unit = "perferendis";
                                            validations = new ActionMetricValidations() {{
                                                maximum = new ActionMetricValidationsMaximum() {{
                                                    unit = "magni";
                                                    value = 8289.4;
                                                }};
                                                minimum = new ActionMetricValidationsMinimum() {{
                                                    unit = "ipsam";
                                                    value = 46.95;
                                                }};
                                            }};
                                        }}),
                                        add(new ActionMetric() {{
                                            goal = new java.util.HashMap<String, Object>() {{
                                                put("dolorum", "excepturi");
                                            }};
                                            metricType = "tempora";
                                            unit = "facilis";
                                            validations = new ActionMetricValidations() {{
                                                maximum = new ActionMetricValidationsMaximum() {{
                                                    unit = "tempore";
                                                    value = 2884.76;
                                                }};
                                                minimum = new ActionMetricValidationsMinimum() {{
                                                    unit = "delectus";
                                                    value = 4332.88;
                                                }};
                                            }};
                                        }}),
                                    }};
                                    tracking = false;
                                    windows = new org.openapis.openapi.models.shared.ActionWindow[]{{
                                        add(new ActionWindow("blanditiis") {{
                                            id = "c969e9a3-efa7-47df-b14c-d66ae395efb9";
                                            title = "Miss";
                                            type = "id";
                                        }}),
                                    }};
                                }};;
                                relationships = new ActionResourceRelationships() {{
                                    plan = new ActionResourceRelationshipsPlan() {{
                                        data = new ActionResourceRelationshipsPlanData() {{
                                            id = "8f3a6699-7074-4ba4-869b-6e2141959890";
                                            type = "mollitia";
                                        }};;
                                        links = new java.util.HashMap<String, Object>() {{
                                            put("mollitia", "ad");
                                            put("eum", "dolor");
                                            put("necessitatibus", "odit");
                                            put("nemo", "quasi");
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

## fetchAction

Get a health action from a patient's plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchActionRequest;
import org.openapis.openapi.models.operations.FetchActionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchActionRequest req = new FetchActionRequest("iure");            

            FetchActionResponse res = sdk.action.fetchAction(req);

            if (res.fetchActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAction

Update a health action from a patient's plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateActionRequest;
import org.openapis.openapi.models.operations.UpdateActionResponse;
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
import org.openapis.openapi.models.shared.Identifier;
import org.openapis.openapi.models.shared.UpdateActionRequestInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateActionRequest req = new UpdateActionRequest(                new UpdateActionRequestInput(                new ActionResourceInput("doloribus", "debitis") {{
                                                attributes = new ActionResourceAttributesInput("eius", "maxime", ActionResourceAttributesTypeEnum.OTHER_LIFESTYLE) {{
                                                    thread = "deleniti";
                                                    details = new java.util.HashMap<String, Object>() {{
                                                        put("in", "architecto");
                                                        put("architecto", "repudiandae");
                                                        put("ullam", "expedita");
                                                    }};
                                                    effectiveTo = "nihil";
                                                    frequencyGoal = new ActionResourceAttributesFrequencyGoal() {{
                                                        weeks = new ActionResourceAttributesFrequencyGoalWeeks() {{
                                                            days = new org.openapis.openapi.models.shared.ActionResourceAttributesFrequencyGoalWeeksDaysEnum[]{{
                                                                add(ActionResourceAttributesFrequencyGoalWeeksDaysEnum.FIVE),
                                                                add(ActionResourceAttributesFrequencyGoalWeeksDaysEnum.ONE),
                                                                add(ActionResourceAttributesFrequencyGoalWeeksDaysEnum.SIX),
                                                                add(ActionResourceAttributesFrequencyGoalWeeksDaysEnum.SIX),
                                                            }};
                                                        }};;
                                                    }};;
                                                    identifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                                        add(new Identifier("magni", "sunt") {{
                                                            label = "consequuntur";
                                                            system = "praesentium";
                                                            value = "natus";
                                                        }}),
                                                    }};
                                                    intake = new java.util.HashMap<String, Object>() {{
                                                        put("illum", "pariatur");
                                                        put("maxime", "ea");
                                                        put("excepturi", "odit");
                                                        put("ea", "accusantium");
                                                    }};
                                                    metricRequired = false;
                                                    metrics = new org.openapis.openapi.models.shared.ActionMetric[]{{
                                                        add(new ActionMetric() {{
                                                            goal = new java.util.HashMap<String, Object>() {{
                                                                put("quidem", "ipsam");
                                                                put("voluptate", "autem");
                                                                put("nam", "eaque");
                                                                put("pariatur", "nemo");
                                                            }};
                                                            metricType = "voluptatibus";
                                                            unit = "perferendis";
                                                            validations = new ActionMetricValidations() {{
                                                                maximum = new ActionMetricValidationsMaximum() {{
                                                                    unit = "fugiat";
                                                                    value = 2307.42;
                                                                }};
                                                                minimum = new ActionMetricValidationsMinimum() {{
                                                                    unit = "aut";
                                                                    value = 7649.12;
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                    tracking = false;
                                                    windows = new org.openapis.openapi.models.shared.ActionWindow[]{{
                                                        add(new ActionWindow("earum") {{
                                                            id = "fbb25870-5320-42c7-bd5f-e9b90c28909b";
                                                            title = "Mrs.";
                                                            type = "asperiores";
                                                        }}),
                                                        add(new ActionWindow("quidem") {{
                                                            id = "49a8d9cb-f486-4333-a3f9-b77f3a410067";
                                                            title = "Mrs.";
                                                            type = "accusamus";
                                                        }}),
                                                    }};
                                                }};;
                                                relationships = new ActionResourceRelationships() {{
                                                    plan = new ActionResourceRelationshipsPlan() {{
                                                        data = new ActionResourceRelationshipsPlanData() {{
                                                            id = "f69280d1-ba77-4a89-abf7-37ae4203ce5e";
                                                            type = "suscipit";
                                                        }};;
                                                        links = new java.util.HashMap<String, Object>() {{
                                                            put("provident", "minima");
                                                            put("repellendus", "totam");
                                                            put("similique", "alias");
                                                        }};
                                                    }};;
                                                }};;
                                            }};);, "at");            

            UpdateActionResponse res = sdk.action.updateAction(req);

            if (res.updateActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
