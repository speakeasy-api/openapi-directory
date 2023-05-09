# mart

## Overview

Perform bulk operations

### Available Operations

* [getMartCaseAssociationsResource](#getmartcaseassociationsresource) - Bulk download of case associations
* [getMartDiseaseAssociationsResource](#getmartdiseaseassociationsresource) - Bulk download of disease associations
* [getMartGeneAssociationsResource](#getmartgeneassociationsresource) - Bulk download of gene associations
* [getMartOrthologAssociationsResource](#getmartorthologassociationsresource) - Bulk download of orthologs
* [getMartParalogAssociationsResource](#getmartparalogassociationsresource) - Bulk download of paralogs

## getMartCaseAssociationsResource

NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMartCaseAssociationsResourceRequest;
import org.openapis.openapi.models.operations.GetMartCaseAssociationsResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMartCaseAssociationsResourceRequest req = new GetMartCaseAssociationsResourceRequest("dolor", "fugiat") {{
                slim = new String[]{{
                    add("consequuntur"),
                    add("ipsa"),
                }};
            }};            

            GetMartCaseAssociationsResourceResponse res = sdk.mart.getMartCaseAssociationsResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMartDiseaseAssociationsResource

NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMartDiseaseAssociationsResourceRequest;
import org.openapis.openapi.models.operations.GetMartDiseaseAssociationsResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMartDiseaseAssociationsResourceRequest req = new GetMartDiseaseAssociationsResourceRequest("quas", "eveniet") {{
                slim = new String[]{{
                    add("officiis"),
                    add("esse"),
                    add("necessitatibus"),
                    add("sed"),
                }};
            }};            

            GetMartDiseaseAssociationsResourceResponse res = sdk.mart.getMartDiseaseAssociationsResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMartGeneAssociationsResource

NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMartGeneAssociationsResourceRequest;
import org.openapis.openapi.models.operations.GetMartGeneAssociationsResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMartGeneAssociationsResourceRequest req = new GetMartGeneAssociationsResourceRequest("veniam", "nesciunt") {{
                slim = new String[]{{
                    add("eum"),
                    add("vel"),
                    add("voluptatum"),
                }};
            }};            

            GetMartGeneAssociationsResourceResponse res = sdk.mart.getMartGeneAssociationsResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMartOrthologAssociationsResource

Bulk download of orthologs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMartOrthologAssociationsResourceRequest;
import org.openapis.openapi.models.operations.GetMartOrthologAssociationsResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMartOrthologAssociationsResourceRequest req = new GetMartOrthologAssociationsResourceRequest("magnam", "exercitationem");            

            GetMartOrthologAssociationsResourceResponse res = sdk.mart.getMartOrthologAssociationsResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMartParalogAssociationsResource

Bulk download of paralogs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMartParalogAssociationsResourceRequest;
import org.openapis.openapi.models.operations.GetMartParalogAssociationsResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMartParalogAssociationsResourceRequest req = new GetMartParalogAssociationsResourceRequest("ab", "porro");            

            GetMartParalogAssociationsResourceResponse res = sdk.mart.getMartParalogAssociationsResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
