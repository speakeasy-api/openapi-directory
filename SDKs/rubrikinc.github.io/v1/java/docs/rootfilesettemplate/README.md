# rootFilesetTemplate

## Overview

File system fileset templates.

### Available Operations

* [createFilesetTemplate](#createfilesettemplate) - Create a fileset template
* [deleteFilesetTemplate](#deletefilesettemplate) - Delete a fileset template
* [getFilesetTemplate](#getfilesettemplate) - Get information for a fileset template
* [queryFilesetTemplate](#queryfilesettemplate) - Get summary information for all fileset templates
* [updateFilesetTemplate](#updatefilesettemplate) - Modify a fileset template

## createFilesetTemplate

Create a fileset template. The template is applied to the host.  Each template is a set of paths on the host.

A template uses full paths and wildcards to define the objects to include, exclude, and exempt from exclusion.

The **_exceptions_** value specifies paths that should not be excluded from the fileset by the **_exclude_** value.

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
import org.openapis.openapi.models.operations.CreateFilesetTemplateResponse;
import org.openapis.openapi.models.shared.FilesetTemplateCreate;
import org.openapis.openapi.models.shared.FilesetTemplateCreateOperatingSystemTypeEnum;
import org.openapis.openapi.models.shared.FilesetTemplateCreateShareTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("praesentium", "cum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.FilesetTemplateCreate req = new FilesetTemplateCreate(                new String[]{{
                                add("dolorum"),
                                add("voluptatum"),
                            }}, "error") {{
                allowBackupHiddenFoldersInNetworkMounts = false;
                allowBackupNetworkMounts = false;
                backupScriptErrorHandling = "hic";
                backupScriptTimeout = 710529L;
                exceptions = new String[]{{
                    add("neque"),
                    add("dolorum"),
                    add("nostrum"),
                    add("officia"),
                }};
                excludes = new String[]{{
                    add("corrupti"),
                    add("accusamus"),
                    add("tempora"),
                }};
                isArrayEnabled = false;
                operatingSystemType = FilesetTemplateCreateOperatingSystemTypeEnum.WINDOWS;
                postBackupScript = "fugit";
                preBackupScript = "ut";
                shareType = FilesetTemplateCreateShareTypeEnum.SMB;
                useWindowsVss = false;
            }};            

            CreateFilesetTemplateResponse res = sdk.rootFilesetTemplate.createFilesetTemplate(req);

            if (res.filesetTemplateDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFilesetTemplate

Deletes the specfied fileset template. All associated filesets are deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFilesetTemplateRequest;
import org.openapis.openapi.models.operations.DeleteFilesetTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("voluptatem", "culpa") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteFilesetTemplateRequest req = new DeleteFilesetTemplateRequest("expedita") {{
                preserveSnapshots = false;
            }};            

            DeleteFilesetTemplateResponse res = sdk.rootFilesetTemplate.deleteFilesetTemplate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFilesetTemplate

Retrieve summary information for a specified fileset template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilesetTemplateRequest;
import org.openapis.openapi.models.operations.GetFilesetTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("magnam", "consequatur") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetFilesetTemplateRequest req = new GetFilesetTemplateRequest("esse");            

            GetFilesetTemplateResponse res = sdk.rootFilesetTemplate.getFilesetTemplate(req);

            if (res.filesetTemplateDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryFilesetTemplate

Retrieve summary information for all fileset templates, including: ID and name of the fileset template, fileset template creation timestamp, array of the included filepaths, array of the excluded filepaths.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryFilesetTemplateOperatingSystemTypeEnum;
import org.openapis.openapi.models.operations.QueryFilesetTemplateRequest;
import org.openapis.openapi.models.operations.QueryFilesetTemplateResponse;
import org.openapis.openapi.models.operations.QueryFilesetTemplateShareTypeEnum;
import org.openapis.openapi.models.operations.QueryFilesetTemplateSortByEnum;
import org.openapis.openapi.models.operations.QueryFilesetTemplateSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ipsam", "sit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryFilesetTemplateRequest req = new QueryFilesetTemplateRequest() {{
                name = "Willard Walker IV";
                operatingSystemType = QueryFilesetTemplateOperatingSystemTypeEnum.WINDOWS;
                primaryClusterId = "sed";
                shareType = QueryFilesetTemplateShareTypeEnum.NFS;
                sortBy = QueryFilesetTemplateSortByEnum.INCLUDES;
                sortOrder = QueryFilesetTemplateSortOrderEnum.ASC;
            }};            

            QueryFilesetTemplateResponse res = sdk.rootFilesetTemplate.queryFilesetTemplate(req);

            if (res.filesetTemplateDetailListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFilesetTemplate

Modify the values of specified fileset template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFilesetTemplateRequest;
import org.openapis.openapi.models.operations.UpdateFilesetTemplateResponse;
import org.openapis.openapi.models.shared.FilesetTemplatePatch;
import org.openapis.openapi.models.shared.FilesetTemplatePatchOperatingSystemTypeEnum;
import org.openapis.openapi.models.shared.FilesetTemplatePatchShareTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("saepe", "error") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateFilesetTemplateRequest req = new UpdateFilesetTemplateRequest(                new FilesetTemplatePatch("consequatur") {{
                                allowBackupHiddenFoldersInNetworkMounts = false;
                                allowBackupNetworkMounts = false;
                                backupScriptErrorHandling = "incidunt";
                                backupScriptTimeout = 968865L;
                                exceptions = new String[]{{
                                    add("harum"),
                                }};
                                excludes = new String[]{{
                                    add("architecto"),
                                }};
                                includes = new String[]{{
                                    add("labore"),
                                    add("quidem"),
                                    add("atque"),
                                }};
                                name = "Marco White I";
                                operatingSystemType = FilesetTemplatePatchOperatingSystemTypeEnum.WINDOWS;
                                postBackupScript = "voluptate";
                                preBackupScript = "unde";
                                shareType = FilesetTemplatePatchShareTypeEnum.SMB;
                                useWindowsVss = false;
                            }};, "provident");            

            UpdateFilesetTemplateResponse res = sdk.rootFilesetTemplate.updateFilesetTemplate(req);

            if (res.filesetTemplateDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
