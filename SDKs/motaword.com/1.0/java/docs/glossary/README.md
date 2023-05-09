# glossary

### Available Operations

* [createGlossaryJson](#createglossaryjson) - Upload a glossary file
* [createGlossaryMultipart](#createglossarymultipart) - Upload a glossary file
* [deleteGlossary](#deleteglossary) - Delete a glossary
* [downloadGlobalGlossary](#downloadglobalglossary) - Download account glossary.
* [downloadGlossary](#downloadglossary) - Download a glossary
* [getGlossaries](#getglossaries) - View glossaries
* [getGlossary](#getglossary) - View a glossary
* [updateGlobalGlossaryJson](#updateglobalglossaryjson) - Create or update the account glossary
* [updateGlobalGlossaryMultipart](#updateglobalglossarymultipart) - Create or update the account glossary
* [updateGlossaryJson](#updateglossaryjson) - Update a glossary
* [updateGlossaryMultipart](#updateglossarymultipart) - Update a glossary

## createGlossaryJson

Upload a new glossary file to your project to be used during translation. Glossaries can be CSV or TBX files.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGlossaryJsonRequest;
import org.openapis.openapi.models.operations.CreateGlossaryJsonResponse;
import org.openapis.openapi.models.shared.GlossaryUploadRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateGlossaryJsonRequest req = new CreateGlossaryJsonRequest(903720L) {{
                glossaryUploadRequest = new GlossaryUploadRequest("ipsum".getBytes());;
            }};            

            CreateGlossaryJsonResponse res = sdk.glossary.createGlossaryJson(req);

            if (res.glossary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGlossaryMultipart

Upload a new glossary file to your project to be used during translation. Glossaries can be CSV or TBX files.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGlossaryMultipartRequest;
import org.openapis.openapi.models.operations.CreateGlossaryMultipartResponse;
import org.openapis.openapi.models.shared.GlossaryUploadRequest1;
import org.openapis.openapi.models.shared.GlossaryUploadRequestGlossaries;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateGlossaryMultipartRequest req = new CreateGlossaryMultipartRequest(749255L) {{
                glossaryUploadRequest1 = new GlossaryUploadRequest1(                new GlossaryUploadRequestGlossaries("quos".getBytes(), "tempore"););;
            }};            

            CreateGlossaryMultipartResponse res = sdk.glossary.createGlossaryMultipart(req);

            if (res.glossary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGlossary

Delete the existing glossary from the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGlossaryRequest;
import org.openapis.openapi.models.operations.DeleteGlossaryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteGlossaryRequest req = new DeleteGlossaryRequest(45614L, 961937L);            

            DeleteGlossaryResponse res = sdk.glossary.deleteGlossary(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## downloadGlobalGlossary

Download your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadGlobalGlossaryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DownloadGlobalGlossaryResponse res = sdk.glossary.downloadGlobalGlossary();

            if (res.downloadGlobalGlossary200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## downloadGlossary

Download a previously uploaded glossary file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadGlossaryRequest;
import org.openapis.openapi.models.operations.DownloadGlossaryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DownloadGlossaryRequest req = new DownloadGlossaryRequest(286915L, 240829L);            

            DownloadGlossaryResponse res = sdk.glossary.downloadGlossary(req);

            if (res.downloadGlossary200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGlossaries

View a list of glossaries previously uploaded to the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGlossariesRequest;
import org.openapis.openapi.models.operations.GetGlossariesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetGlossariesRequest req = new GetGlossariesRequest(100294L);            

            GetGlossariesResponse res = sdk.glossary.getGlossaries(req);

            if (res.glossaryList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGlossary

View the details of a glossary file uploaded to a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGlossaryRequest;
import org.openapis.openapi.models.operations.GetGlossaryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetGlossaryRequest req = new GetGlossaryRequest(16429L, 555649L);            

            GetGlossaryResponse res = sdk.glossary.getGlossary(req);

            if (res.glossary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGlobalGlossaryJson

Update your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGlobalGlossaryJsonResponse;
import org.openapis.openapi.models.shared.AccountGlossaryUploadRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AccountGlossaryUploadRequest req = new AccountGlossaryUploadRequest("consequatur".getBytes());            

            UpdateGlobalGlossaryJsonResponse res = sdk.glossary.updateGlobalGlossaryJson(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGlobalGlossaryMultipart

Update your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGlobalGlossaryMultipartResponse;
import org.openapis.openapi.models.shared.AccountGlossaryUploadRequest1;
import org.openapis.openapi.models.shared.AccountGlossaryUploadRequestGlossary;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AccountGlossaryUploadRequest1 req = new AccountGlossaryUploadRequest1(                new AccountGlossaryUploadRequestGlossary("repellendus".getBytes(), "porro"););            

            UpdateGlobalGlossaryMultipartResponse res = sdk.glossary.updateGlobalGlossaryMultipart(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGlossaryJson

Update the existing glossary file in the project. Public users are allowed to have only 1 glossary per project and file name and contents will replaced with the new glossary file that you are uploading via this endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGlossaryJsonRequest;
import org.openapis.openapi.models.operations.UpdateGlossaryJsonResponse;
import org.openapis.openapi.models.shared.GlossaryUploadRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateGlossaryJsonRequest req = new UpdateGlossaryJsonRequest(281730L, 703495L) {{
                glossaryUploadRequest = new GlossaryUploadRequest("cupiditate".getBytes());;
            }};            

            UpdateGlossaryJsonResponse res = sdk.glossary.updateGlossaryJson(req);

            if (res.glossary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGlossaryMultipart

Update the existing glossary file in the project. Public users are allowed to have only 1 glossary per project and file name and contents will replaced with the new glossary file that you are uploading via this endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGlossaryMultipartRequest;
import org.openapis.openapi.models.operations.UpdateGlossaryMultipartResponse;
import org.openapis.openapi.models.shared.GlossaryUploadRequest1;
import org.openapis.openapi.models.shared.GlossaryUploadRequestGlossaries;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateGlossaryMultipartRequest req = new UpdateGlossaryMultipartRequest(63955L, 512393L) {{
                glossaryUploadRequest1 = new GlossaryUploadRequest1(                new GlossaryUploadRequestGlossaries("odio".getBytes(), "occaecati"););;
            }};            

            UpdateGlossaryMultipartResponse res = sdk.glossary.updateGlossaryMultipart(req);

            if (res.glossary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
