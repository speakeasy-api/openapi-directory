# policyObjects

### Available Operations

* [createOrganizationPolicyObject](#createorganizationpolicyobject) - Creates a new Policy Object.
* [createOrganizationPolicyObjectsGroup](#createorganizationpolicyobjectsgroup) - Creates a new Policy Object Group.
* [deleteOrganizationPolicyObject](#deleteorganizationpolicyobject) - Deletes a Policy Object.
* [deleteOrganizationPolicyObjectsGroup](#deleteorganizationpolicyobjectsgroup) - Deletes a Policy Object Group.
* [getOrganizationPolicyObject](#getorganizationpolicyobject) - Shows details of a Policy Object.
* [getOrganizationPolicyObjects](#getorganizationpolicyobjects) - Lists Policy Objects belonging to the organization.
* [getOrganizationPolicyObjectsGroup](#getorganizationpolicyobjectsgroup) - Shows details of a Policy Object Group.
* [getOrganizationPolicyObjectsGroups](#getorganizationpolicyobjectsgroups) - Lists Policy Object Groups belonging to the organization.
* [updateOrganizationPolicyObject](#updateorganizationpolicyobject) - Updates a Policy Object.
* [updateOrganizationPolicyObjectsGroup](#updateorganizationpolicyobjectsgroup) - Updates a Policy Object Group.

## createOrganizationPolicyObject

Creates a new Policy Object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationPolicyObjectRequest;
import org.openapis.openapi.models.operations.CreateOrganizationPolicyObjectRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationPolicyObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationPolicyObjectRequest req = new CreateOrganizationPolicyObjectRequest(                new CreateOrganizationPolicyObjectRequestBody("alias", "maxime", "ipsa") {{
                                cidr = "culpa";
                                fqdn = "excepturi";
                                groupIds = new Long[]{{
                                    add(549314L),
                                    add(706030L),
                                }};
                                ip = "expedita";
                                mask = "placeat";
                            }};, "unde");            

            CreateOrganizationPolicyObjectResponse res = sdk.policyObjects.createOrganizationPolicyObject(req);

            if (res.createOrganizationPolicyObject201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOrganizationPolicyObjectsGroup

Creates a new Policy Object Group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationPolicyObjectsGroupRequest;
import org.openapis.openapi.models.operations.CreateOrganizationPolicyObjectsGroupRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationPolicyObjectsGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationPolicyObjectsGroupRequest req = new CreateOrganizationPolicyObjectsGroupRequest(                new CreateOrganizationPolicyObjectsGroupRequestBody("ratione") {{
                                category = "delectus";
                                objectIds = new Long[]{{
                                    add(39108L),
                                    add(761400L),
                                    add(790607L),
                                }};
                            }};, "perferendis");            

            CreateOrganizationPolicyObjectsGroupResponse res = sdk.policyObjects.createOrganizationPolicyObjectsGroup(req);

            if (res.createOrganizationPolicyObjectsGroup201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationPolicyObject

Deletes a Policy Object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationPolicyObjectRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationPolicyObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationPolicyObjectRequest req = new DeleteOrganizationPolicyObjectRequest("sint", "veniam");            

            DeleteOrganizationPolicyObjectResponse res = sdk.policyObjects.deleteOrganizationPolicyObject(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationPolicyObjectsGroup

Deletes a Policy Object Group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationPolicyObjectsGroupRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationPolicyObjectsGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationPolicyObjectsGroupRequest req = new DeleteOrganizationPolicyObjectsGroupRequest("provident", "ab");            

            DeleteOrganizationPolicyObjectsGroupResponse res = sdk.policyObjects.deleteOrganizationPolicyObjectsGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationPolicyObject

Shows details of a Policy Object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationPolicyObjectRequest;
import org.openapis.openapi.models.operations.GetOrganizationPolicyObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationPolicyObjectRequest req = new GetOrganizationPolicyObjectRequest("enim", "recusandae");            

            GetOrganizationPolicyObjectResponse res = sdk.policyObjects.getOrganizationPolicyObject(req);

            if (res.getOrganizationPolicyObject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationPolicyObjects

Lists Policy Objects belonging to the organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationPolicyObjectsRequest;
import org.openapis.openapi.models.operations.GetOrganizationPolicyObjectsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationPolicyObjectsRequest req = new GetOrganizationPolicyObjectsRequest("quis") {{
                endingBefore = "sint";
                perPage = 647556L;
                startingAfter = "assumenda";
            }};            

            GetOrganizationPolicyObjectsResponse res = sdk.policyObjects.getOrganizationPolicyObjects(req);

            if (res.getOrganizationPolicyObjects200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationPolicyObjectsGroup

Shows details of a Policy Object Group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationPolicyObjectsGroupRequest;
import org.openapis.openapi.models.operations.GetOrganizationPolicyObjectsGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationPolicyObjectsGroupRequest req = new GetOrganizationPolicyObjectsGroupRequest("temporibus", "tempore");            

            GetOrganizationPolicyObjectsGroupResponse res = sdk.policyObjects.getOrganizationPolicyObjectsGroup(req);

            if (res.getOrganizationPolicyObjectsGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationPolicyObjectsGroups

Lists Policy Object Groups belonging to the organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationPolicyObjectsGroupsRequest;
import org.openapis.openapi.models.operations.GetOrganizationPolicyObjectsGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationPolicyObjectsGroupsRequest req = new GetOrganizationPolicyObjectsGroupsRequest("sed") {{
                endingBefore = "harum";
                perPage = 815340L;
                startingAfter = "similique";
            }};            

            GetOrganizationPolicyObjectsGroupsResponse res = sdk.policyObjects.getOrganizationPolicyObjectsGroups(req);

            if (res.getOrganizationPolicyObjectsGroups200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationPolicyObject

Updates a Policy Object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationPolicyObjectRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationPolicyObjectRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationPolicyObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationPolicyObjectRequest req = new UpdateOrganizationPolicyObjectRequest("amet", "est") {{
                requestBody = new UpdateOrganizationPolicyObjectRequestBody() {{
                    cidr = "adipisci";
                    fqdn = "ut";
                    groupIds = new Long[]{{
                        add(294274L),
                        add(96967L),
                        add(718864L),
                    }};
                    ip = "labore";
                    mask = "qui";
                    name = "Lawrence Bernier";
                }};;
            }};            

            UpdateOrganizationPolicyObjectResponse res = sdk.policyObjects.updateOrganizationPolicyObject(req);

            if (res.updateOrganizationPolicyObject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationPolicyObjectsGroup

Updates a Policy Object Group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationPolicyObjectsGroupRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationPolicyObjectsGroupRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationPolicyObjectsGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationPolicyObjectsGroupRequest req = new UpdateOrganizationPolicyObjectsGroupRequest("tempore", "ad") {{
                requestBody = new UpdateOrganizationPolicyObjectsGroupRequestBody() {{
                    name = "Ervin Littel";
                    objectIds = new Long[]{{
                        add(789839L),
                        add(696355L),
                        add(126568L),
                        add(460824L),
                    }};
                }};;
            }};            

            UpdateOrganizationPolicyObjectsGroupResponse res = sdk.policyObjects.updateOrganizationPolicyObjectsGroup(req);

            if (res.updateOrganizationPolicyObjectsGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
