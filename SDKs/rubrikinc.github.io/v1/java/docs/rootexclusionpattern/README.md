# rootExclusionPattern

## Overview

Exclusion patterns.

### Available Operations

* [bulkCreateExclusionPattern](#bulkcreateexclusionpattern) - Bulk create exclusion patterns
* [bulkDeleteExclusionPattern](#bulkdeleteexclusionpattern) - Bulk delete the provided mutable exclusion patterns
* [createExclusionPattern](#createexclusionpattern) - Create an exclusion pattern
* [deleteExclusionPattern](#deleteexclusionpattern) - Delete a mutable exclusion pattern
* [getExclusionPattern](#getexclusionpattern) - Get details of a exclusion pattern
* [queryExclusionPattern](#queryexclusionpattern) - Get a summary of all exclusion patterns
* [updateExclusionPattern](#updateexclusionpattern) - Update a mutable exclusion pattern

## bulkCreateExclusionPattern

Bulk create exclusion patterns.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkCreateExclusionPatternResponse;
import org.openapis.openapi.models.shared.ExclusionPatternCreateConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("consequatur", "minus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.ExclusionPatternCreateConfig[]{{
                add(new ExclusionPatternCreateConfig("esse", "blanditiis") {{
                    pattern = "sapiente";
                    sourceId = "consectetur";
                }}),
                add(new ExclusionPatternCreateConfig("nulla", "quas") {{
                    pattern = "provident";
                    sourceId = "a";
                }}),
            }}            

            BulkCreateExclusionPatternResponse res = sdk.rootExclusionPattern.bulkCreateExclusionPattern(req);

            if (res.exclusionPatternDetailList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bulkDeleteExclusionPattern

Bulk deletes the mutable patterns in a specified set of exclusion patterns.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkDeleteExclusionPatternRequest;
import org.openapis.openapi.models.operations.BulkDeleteExclusionPatternResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("esse", "quasi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            BulkDeleteExclusionPatternRequest req = new BulkDeleteExclusionPatternRequest(                new String[]{{
                                add("error"),
                                add("sint"),
                                add("pariatur"),
                                add("possimus"),
                            }});            

            BulkDeleteExclusionPatternResponse res = sdk.rootExclusionPattern.bulkDeleteExclusionPattern(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createExclusionPattern

Create a exclusion pattern.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExclusionPatternResponse;
import org.openapis.openapi.models.shared.ExclusionPatternCreateConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quia", "eveniet") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.ExclusionPatternCreateConfig req = new ExclusionPatternCreateConfig("asperiores", "facere");            

            CreateExclusionPatternResponse res = sdk.rootExclusionPattern.createExclusionPattern(req);

            if (res.exclusionPatternDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteExclusionPattern

Deletes an exclusion pattern if that pattern is mutable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteExclusionPatternRequest;
import org.openapis.openapi.models.operations.DeleteExclusionPatternResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("veritatis", "consequuntur") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteExclusionPatternRequest req = new DeleteExclusionPatternRequest("quasi");            

            DeleteExclusionPatternResponse res = sdk.rootExclusionPattern.deleteExclusionPattern(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExclusionPattern

Get details of a exclusion pattern.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExclusionPatternRequest;
import org.openapis.openapi.models.operations.GetExclusionPatternResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("similique", "culpa") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetExclusionPatternRequest req = new GetExclusionPatternRequest("aliquid");            

            GetExclusionPatternResponse res = sdk.rootExclusionPattern.getExclusionPattern(req);

            if (res.exclusionPatternDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryExclusionPattern

Get a summary of all exclusion patterns.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryExclusionPatternRequest;
import org.openapis.openapi.models.operations.QueryExclusionPatternResponse;
import org.openapis.openapi.models.operations.QueryExclusionPatternSortByEnum;
import org.openapis.openapi.models.operations.QueryExclusionPatternSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("tenetur", "quae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryExclusionPatternRequest req = new QueryExclusionPatternRequest() {{
                isMutable = false;
                limit = 936747;
                offset = 424032;
                pattern = "in";
                primaryClusterId = "eius";
                sortBy = QueryExclusionPatternSortByEnum.PATTERN;
                sortOrder = QueryExclusionPatternSortOrderEnum.DESC;
                sourceId = "illum";
            }};            

            QueryExclusionPatternResponse res = sdk.rootExclusionPattern.queryExclusionPattern(req);

            if (res.exclusionPatternDetailListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateExclusionPattern

Update mutable exclusion pattern with specified properties. The exclusion pattern which is mutable can be modified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateExclusionPatternRequest;
import org.openapis.openapi.models.operations.UpdateExclusionPatternResponse;
import org.openapis.openapi.models.shared.ExclusionPatternUpdateConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("soluta", "accusantium") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateExclusionPatternRequest req = new UpdateExclusionPatternRequest(                new ExclusionPatternUpdateConfig() {{
                                isActive = false;
                                isMutable = false;
                                pattern = "aliquam";
                            }};, "sapiente");            

            UpdateExclusionPatternResponse res = sdk.rootExclusionPattern.updateExclusionPattern(req);

            if (res.exclusionPatternDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
