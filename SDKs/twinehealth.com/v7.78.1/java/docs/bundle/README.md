# bundle

## Overview

A bundle is a collection of actions (an action plan) in a patient's plan summary.

### Available Operations

* [createBundle](#createbundle) - Create bundle
* [fetchBundle](#fetchbundle) - Get a bundle
* [updateBundle](#updatebundle) - Update a bundle

## createBundle

Create a bundle in a patient's plan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBundleResponse;
import org.openapis.openapi.models.shared.BundleResource;
import org.openapis.openapi.models.shared.BundleResourceAttributes;
import org.openapis.openapi.models.shared.BundleResourceRelationships;
import org.openapis.openapi.models.shared.BundleResourceRelationshipsActions;
import org.openapis.openapi.models.shared.BundleResourceRelationshipsActionsData;
import org.openapis.openapi.models.shared.BundleResourceRelationshipsPlan;
import org.openapis.openapi.models.shared.BundleResourceRelationshipsPlanData;
import org.openapis.openapi.models.shared.CreateBundleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateBundleRequest req = new CreateBundleRequest(                new BundleResource("quaerat", "tempora") {{
                                attributes = new BundleResourceAttributes("vel", "quod", "officiis") {{
                                    thread = "qui";
                                    effectiveTo = "dolorum";
                                }};;
                                relationships = new BundleResourceRelationships() {{
                                    actions = new BundleResourceRelationshipsActions() {{
                                        data = new BundleResourceRelationshipsActionsData() {{
                                            id = "f7a73cf3-be45-43f8-b0b3-26b5a73429cd";
                                            type = "soluta";
                                        }};;
                                        links = new java.util.HashMap<String, Object>() {{
                                            put("laborum", "totam");
                                        }};
                                    }};;
                                    plan = new BundleResourceRelationshipsPlan() {{
                                        data = new BundleResourceRelationshipsPlanData() {{
                                            id = "422bb679-d232-4271-9bf0-cbb1e31b8b90";
                                            type = "delectus";
                                        }};;
                                        links = new java.util.HashMap<String, Object>() {{
                                            put("dolore", "labore");
                                        }};
                                    }};;
                                }};;
                            }};);            

            CreateBundleResponse res = sdk.bundle.createBundle(req);

            if (res.createBundleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchBundle

Get a bundle from a patient's plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchBundleRequest;
import org.openapis.openapi.models.operations.FetchBundleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchBundleRequest req = new FetchBundleRequest("adipisci");            

            FetchBundleResponse res = sdk.bundle.fetchBundle(req);

            if (res.fetchBundleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBundle

Updte a bundle from a patient's plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBundleRequest;
import org.openapis.openapi.models.operations.UpdateBundleResponse;
import org.openapis.openapi.models.shared.BundleResource;
import org.openapis.openapi.models.shared.BundleResourceAttributes;
import org.openapis.openapi.models.shared.BundleResourceRelationships;
import org.openapis.openapi.models.shared.BundleResourceRelationshipsActions;
import org.openapis.openapi.models.shared.BundleResourceRelationshipsActionsData;
import org.openapis.openapi.models.shared.BundleResourceRelationshipsPlan;
import org.openapis.openapi.models.shared.BundleResourceRelationshipsPlanData;
import org.openapis.openapi.models.shared.UpdateBundleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateBundleRequest req = new UpdateBundleRequest(                new UpdateBundleRequest(                new BundleResource("dolorum", "architecto") {{
                                                attributes = new BundleResourceAttributes("quae", "aut", "quas") {{
                                                    thread = "itaque";
                                                    effectiveTo = "consequatur";
                                                }};;
                                                relationships = new BundleResourceRelationships() {{
                                                    actions = new BundleResourceRelationshipsActions() {{
                                                        data = new BundleResourceRelationshipsActionsData() {{
                                                            id = "adcf4b92-1879-4fce-953f-73ef7fbc7abd";
                                                            type = "ducimus";
                                                        }};;
                                                        links = new java.util.HashMap<String, Object>() {{
                                                            put("quibusdam", "illum");
                                                            put("sequi", "natus");
                                                        }};
                                                    }};;
                                                    plan = new BundleResourceRelationshipsPlan() {{
                                                        data = new BundleResourceRelationshipsPlanData() {{
                                                            id = "c0f5d2cf-f7c7-40a4-9626-d436813f16d9";
                                                            type = "voluptatibus";
                                                        }};;
                                                        links = new java.util.HashMap<String, Object>() {{
                                                            put("sapiente", "quisquam");
                                                            put("saepe", "ea");
                                                        }};
                                                    }};;
                                                }};;
                                            }};);, "impedit");            

            UpdateBundleResponse res = sdk.bundle.updateBundle(req);

            if (res.updateBundleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
