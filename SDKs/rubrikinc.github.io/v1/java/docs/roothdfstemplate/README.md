# rootHdfsTemplate

## Overview

HDFS templates.

### Available Operations

* [createHdfsTemplate](#createhdfstemplate) - Create a HDFS directory template
* [deleteHdfsTemplate](#deletehdfstemplate) - Delete a HDFS directory template
* [getHdfsTemplate](#gethdfstemplate) - Get information for a HDFS directory template
* [queryHdfsTemplate](#queryhdfstemplate) - Get summary information for all HDFS directory templates
* [updateHdfsTemplate](#updatehdfstemplate) - Modify a HDFS directory template

## createHdfsTemplate

Create a HDFS directory template. The template is applied to the host.  Each template is a set of paths on the host.
A template uses full paths and wildcards to define the objects to include, exclude, and exempt from exclusion.
The **_exceptions_** value specifies paths that should not be excluded from the HDFS directory by the **_exclude_** value.
Specify an array of full path descriptions for each property **_include_**, **_exclude_**, and **_exceptions_**.
Acceptable wildcard characters are.
+ **_\*_** Single asterisk matches zero or more characters up to a path deliminator.
+ **_\*\*_** Double asterisk matches zero or more characters.
The following rules apply to path descriptions.
+ Accepts UTF-8 characters.
+ Case sensitive.
+ Forward slash character **_/_** is the path deliminator.
+ Symbolic links must point to a subset of a non symbolic link path.
+ Paths that do not start with **_/_** are modified to start with **_\*\*/_**.
+ Paths that do not end with **_\*_** are modified to end with **_/\*\*_**.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateHdfsTemplateResponse;
import org.openapis.openapi.models.shared.HdfsTemplateCreate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("fugit", "id") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.HdfsTemplateCreate req = new HdfsTemplateCreate(                new String[]{{
                                add("reprehenderit"),
                                add("error"),
                            }}, "illo") {{
                exceptions = new String[]{{
                    add("quidem"),
                    add("eveniet"),
                }};
                excludes = new String[]{{
                    add("vero"),
                }};
            }};            

            CreateHdfsTemplateResponse res = sdk.rootHdfsTemplate.createHdfsTemplate(req);

            if (res.hdfsTemplateDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteHdfsTemplate

Deletes the specfied HDFS directory template. All associated HDFS directories are deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHdfsTemplateRequest;
import org.openapis.openapi.models.operations.DeleteHdfsTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("doloremque", "iure") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteHdfsTemplateRequest req = new DeleteHdfsTemplateRequest("ipsa") {{
                preserveSnapshots = false;
            }};            

            DeleteHdfsTemplateResponse res = sdk.rootHdfsTemplate.deleteHdfsTemplate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHdfsTemplate

Retrieve summary information for a specified HDFS directory template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHdfsTemplateRequest;
import org.openapis.openapi.models.operations.GetHdfsTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("totam", "quae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetHdfsTemplateRequest req = new GetHdfsTemplateRequest("molestiae");            

            GetHdfsTemplateResponse res = sdk.rootHdfsTemplate.getHdfsTemplate(req);

            if (res.hdfsTemplateDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryHdfsTemplate

Retrieve summary information for all HDFS directory templates, including: ID and name of the HDFS directory template, HDFS directory template creation timestamp, array of the included filepaths, array of the excluded filepaths.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryHdfsTemplateRequest;
import org.openapis.openapi.models.operations.QueryHdfsTemplateResponse;
import org.openapis.openapi.models.operations.QueryHdfsTemplateSortByEnum;
import org.openapis.openapi.models.operations.QueryHdfsTemplateSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("eveniet", "qui") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryHdfsTemplateRequest req = new QueryHdfsTemplateRequest() {{
                name = "Elmer Treutel";
                primaryClusterId = "distinctio";
                sortBy = QueryHdfsTemplateSortByEnum.INCLUDES;
                sortOrder = QueryHdfsTemplateSortOrderEnum.DESC;
            }};            

            QueryHdfsTemplateResponse res = sdk.rootHdfsTemplate.queryHdfsTemplate(req);

            if (res.hdfsTemplateDetailListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateHdfsTemplate

Modify the values of specified HDFS directory template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateHdfsTemplateRequest;
import org.openapis.openapi.models.operations.UpdateHdfsTemplateResponse;
import org.openapis.openapi.models.shared.HdfsTemplatePatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("aliquam", "ad") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateHdfsTemplateRequest req = new UpdateHdfsTemplateRequest(                new HdfsTemplatePatch("repellat") {{
                                exceptions = new String[]{{
                                    add("corporis"),
                                }};
                                excludes = new String[]{{
                                    add("nihil"),
                                    add("mollitia"),
                                    add("voluptas"),
                                }};
                                includes = new String[]{{
                                    add("maiores"),
                                }};
                                name = "Todd O'Reilly";
                            }};, "dolorum");            

            UpdateHdfsTemplateResponse res = sdk.rootHdfsTemplate.updateHdfsTemplate(req);

            if (res.hdfsTemplateDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
