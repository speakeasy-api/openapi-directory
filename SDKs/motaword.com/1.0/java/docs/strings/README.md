# strings

### Available Operations

* [clearTranslationCache](#cleartranslationcache) - Clear translation cache
* [getContinuousProjectFileStrings](#getcontinuousprojectfilestrings) - View strings their translations in a continuous document
* [getContinuousProjectStrings](#getcontinuousprojectstrings) - View strings and translations in continuous project
* [getDocumentTranslations](#getdocumenttranslations) - View strings and translations of a document
* [getDocumentTranslationsForLanguage](#getdocumenttranslationsforlanguage) - View strings and translations of a document for target language
* [getProjectStrings](#getprojectstrings) - View project strings and translations
* [getProjectStringsForLanguage](#getprojectstringsforlanguage) - View strings and translations for target language
* [~~getProjectTranslations~~](#getprojecttranslations) - Deprecated. Use /projects/{projectId}/strings instead. :warning: **Deprecated**
* [~~getProjectTranslationsForLanguage~~](#getprojecttranslationsforlanguage) - Deprecated. use /projects/{projectId}/strings/{language} instead. :warning: **Deprecated**
* [getStrings](#getstrings) - View account strings (translation memory)
* [getTranslationCache](#gettranslationcache) - View cached strings translations in continuous project
* [packageProjectTranslationMemory](#packageprojecttranslationmemory) - Download project translation memory
* [packageProjectTranslationMemoryForLanguage](#packageprojecttranslationmemoryforlanguage) - Download language-specific project translation memory
* [packageProjectTranslationMemoryForLanguageStatus](#packageprojecttranslationmemoryforlanguagestatus) - Check language-specific translation memory packaging status
* [packageProjectTranslationMemoryStatus](#packageprojecttranslationmemorystatus) - Check translation memory packaging status
* [packageUserTranslationMemory](#packageusertranslationmemory) - Download account translation memory
* [packageUserTranslationMemoryForLanguageStatus](#packageusertranslationmemoryforlanguagestatus) - Check account translation memory packaging status
* [postContinuousProjectFileStrings](#postcontinuousprojectfilestrings) - Get a list of strings and its translations in the project.
* [~~postStrings~~](#poststrings) - Translate Strings with MT :warning: **Deprecated**
* [recacheTranslations](#recachetranslations) - Recache translations
* [updateTranslationMemoryUnit](#updatetranslationmemoryunit) - Update string translation

## clearTranslationCache

Clear/delete continuous project translation cache.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClearTranslationCacheRequest;
import org.openapis.openapi.models.operations.ClearTranslationCacheResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ClearTranslationCacheRequest req = new ClearTranslationCacheRequest(895386L) {{
                fileId = 72434L;
                locale = "reiciendis";
            }};            

            ClearTranslationCacheResponse res = sdk.strings.clearTranslationCache(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContinuousProjectFileStrings

View the strings from a document and their translations in your continuous translation project, for all target languages. If you need the translated version of your source document/file, then you need to use package and download endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContinuousProjectFileStringsRequest;
import org.openapis.openapi.models.operations.GetContinuousProjectFileStringsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetContinuousProjectFileStringsRequest req = new GetContinuousProjectFileStringsRequest(546885L, 979574L);            

            GetContinuousProjectFileStringsResponse res = sdk.strings.getContinuousProjectFileStrings(req);

            if (res.stringList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContinuousProjectStrings

View the strings and their translations in your continuous translation project, for all target languages. If you need the translated version of your source document/file, then you need to use package and download endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContinuousProjectStringsRequest;
import org.openapis.openapi.models.operations.GetContinuousProjectStringsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetContinuousProjectStringsRequest req = new GetContinuousProjectStringsRequest(148478L);            

            GetContinuousProjectStringsResponse res = sdk.strings.getContinuousProjectStrings(req);

            if (res.stringList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocumentTranslations

View the strings and their translations in your translation project for the specified source document. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentTranslationsRequest;
import org.openapis.openapi.models.operations.GetDocumentTranslationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDocumentTranslationsRequest req = new GetDocumentTranslationsRequest(258702L, 896762L);            

            GetDocumentTranslationsResponse res = sdk.strings.getDocumentTranslations(req);

            if (res.stringList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocumentTranslationsForLanguage

View the strings and their translations in the given target language for the specified source document. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentTranslationsForLanguageRequest;
import org.openapis.openapi.models.operations.GetDocumentTranslationsForLanguageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDocumentTranslationsForLanguageRequest req = new GetDocumentTranslationsForLanguageRequest(406733L, "occaecati", 552078L);            

            GetDocumentTranslationsForLanguageResponse res = sdk.strings.getDocumentTranslationsForLanguage(req);

            if (res.stringList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectStrings

View the strings and their translations in your translation project, for all target languages. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectStringsRequest;
import org.openapis.openapi.models.operations.GetProjectStringsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectStringsRequest req = new GetProjectStringsRequest(271653L);            

            GetProjectStringsResponse res = sdk.strings.getProjectStrings(req);

            if (res.stringList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectStringsForLanguage

View the strings and their translations in your translation project for the specified target language. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectStringsForLanguageRequest;
import org.openapis.openapi.models.operations.GetProjectStringsForLanguageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectStringsForLanguageRequest req = new GetProjectStringsForLanguageRequest("voluptate", 970076L);            

            GetProjectStringsForLanguageResponse res = sdk.strings.getProjectStringsForLanguage(req);

            if (res.stringList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getProjectTranslations~~

Deprecated. Use /projects/{projectId}/strings instead.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectTranslationsRequest;
import org.openapis.openapi.models.operations.GetProjectTranslationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectTranslationsRequest req = new GetProjectTranslationsRequest(25497L);            

            GetProjectTranslationsResponse res = sdk.strings.getProjectTranslations(req);

            if (res.stringList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getProjectTranslationsForLanguage~~

Deprecated. use /projects/{projectId}/strings/{language} instead.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectTranslationsForLanguageRequest;
import org.openapis.openapi.models.operations.GetProjectTranslationsForLanguageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectTranslationsForLanguageRequest req = new GetProjectTranslationsForLanguageRequest("officiis", 505866L);            

            GetProjectTranslationsForLanguageResponse res = sdk.strings.getProjectTranslationsForLanguage(req);

            if (res.stringList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStrings

Get a list of all strings and their translations under your account, from all projects. This is your MotaWord translation memory. If you have the related permission, this endpoint will also return strings from your company account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStringsRequest;
import org.openapis.openapi.models.operations.GetStringsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetStringsRequest req = new GetStringsRequest() {{
                page = 310381L;
                sourceLanguage = "incidunt";
            }};            

            GetStringsResponse res = sdk.strings.getStrings(req);

            if (res.clientStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTranslationCache

MotaWord caches your account intensively (and in a smart way) in real-time translation environments. This endpoint will return the currently cached strings and translations in your continuous translation project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTranslationCacheRequest;
import org.openapis.openapi.models.operations.GetTranslationCacheResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTranslationCacheRequest req = new GetTranslationCacheRequest(894864L) {{
                flatten = false;
            }};            

            GetTranslationCacheResponse res = sdk.strings.getTranslationCache(req);

            if (res.continuousProjectCache != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## packageProjectTranslationMemory

Package and download project translation memory in TMX format

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PackageProjectTranslationMemoryRequest;
import org.openapis.openapi.models.operations.PackageProjectTranslationMemoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PackageProjectTranslationMemoryRequest req = new PackageProjectTranslationMemoryRequest(26522L) {{
                async = 750595L;
                format = "error";
            }};            

            PackageProjectTranslationMemoryResponse res = sdk.strings.packageProjectTranslationMemory(req);

            if (res.asyncOperationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## packageProjectTranslationMemoryForLanguage

Package and download project translation memory in TMX format for a specific target language.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PackageProjectTranslationMemoryForLanguageRequest;
import org.openapis.openapi.models.operations.PackageProjectTranslationMemoryForLanguageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PackageProjectTranslationMemoryForLanguageRequest req = new PackageProjectTranslationMemoryForLanguageRequest("minima", 924159L) {{
                async = 967122L;
                format = "nulla";
            }};            

            PackageProjectTranslationMemoryForLanguageResponse res = sdk.strings.packageProjectTranslationMemoryForLanguage(req);

            if (res.asyncOperationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## packageProjectTranslationMemoryForLanguageStatus

Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PackageProjectTranslationMemoryForLanguageStatusRequest;
import org.openapis.openapi.models.operations.PackageProjectTranslationMemoryForLanguageStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PackageProjectTranslationMemoryForLanguageStatusRequest req = new PackageProjectTranslationMemoryForLanguageStatusRequest("aperiam", "saepe", 253642L);            

            PackageProjectTranslationMemoryForLanguageStatusResponse res = sdk.strings.packageProjectTranslationMemoryForLanguageStatus(req);

            if (res.asyncOperationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## packageProjectTranslationMemoryStatus

Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PackageProjectTranslationMemoryStatusRequest;
import org.openapis.openapi.models.operations.PackageProjectTranslationMemoryStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PackageProjectTranslationMemoryStatusRequest req = new PackageProjectTranslationMemoryStatusRequest("in", 889234L);            

            PackageProjectTranslationMemoryStatusResponse res = sdk.strings.packageProjectTranslationMemoryStatus(req);

            if (res.asyncOperationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## packageUserTranslationMemory

Package and download account translation memory in TMX format. If you have the related permission, this will also download your company translation memory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PackageUserTranslationMemoryRequest;
import org.openapis.openapi.models.operations.PackageUserTranslationMemoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PackageUserTranslationMemoryRequest req = new PackageUserTranslationMemoryRequest("laudantium") {{
                async = 348476L;
                email = 510629L;
            }};            

            PackageUserTranslationMemoryResponse res = sdk.strings.packageUserTranslationMemory(req);

            if (res.asyncOperationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## packageUserTranslationMemoryForLanguageStatus

Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PackageUserTranslationMemoryForLanguageStatusRequest;
import org.openapis.openapi.models.operations.PackageUserTranslationMemoryForLanguageStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PackageUserTranslationMemoryForLanguageStatusRequest req = new PackageUserTranslationMemoryForLanguageStatusRequest("laboriosam", "dolorum");            

            PackageUserTranslationMemoryForLanguageStatusResponse res = sdk.strings.packageUserTranslationMemoryForLanguageStatus(req);

            if (res.asyncOperationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContinuousProjectFileStrings

Get a list of strings and its translations in the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContinuousProjectFileStringsRequest;
import org.openapis.openapi.models.operations.PostContinuousProjectFileStringsResponse;
import org.openapis.openapi.models.shared.ContinuousProjectDocumentStringsBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostContinuousProjectFileStringsRequest req = new PostContinuousProjectFileStringsRequest(622385L) {{
                continuousProjectDocumentStringsBody = new ContinuousProjectDocumentStringsBody() {{
                    documentName = "hic";
                }};;
            }};            

            PostContinuousProjectFileStringsResponse res = sdk.strings.postContinuousProjectFileStrings(req);

            if (res.stringList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~postStrings~~

Deprecated, use instant translation mechanism for continuous projects.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostStringsResponse;
import org.openapis.openapi.models.shared.DeprecatedStringTranslationContent;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.DeprecatedStringTranslationContent req = new DeprecatedStringTranslationContent() {{
                contents = new String[]{{
                    add("neque"),
                    add("dolorum"),
                    add("nostrum"),
                    add("officia"),
                }};
                sourceLanguage = "dolorum";
                targetLanguages = new String[]{{
                    add("accusamus"),
                    add("tempora"),
                    add("atque"),
                }};
            }};            

            PostStringsResponse res = sdk.strings.postStrings(req);

            if (res.machineTranslatedStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recacheTranslations

Recache translations for the continuous project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecacheTranslationsRequest;
import org.openapis.openapi.models.operations.RecacheTranslationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RecacheTranslationsRequest req = new RecacheTranslationsRequest(282699L) {{
                fileId = 856303L;
                locale = "voluptatem";
            }};            

            RecacheTranslationsResponse res = sdk.strings.recacheTranslations(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTranslationMemoryUnit

Update the translation of a string from your account strings/translation memory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTranslationMemoryUnitResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TranslationMemoryUnit;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TranslationMemoryUnit req = new TranslationMemoryUnit() {{
                sourceLanguage = "expedita";
                sourceText = "magnam";
                targetLanguage = "consequatur";
                targetText = "esse";
            }};            

            UpdateTranslationMemoryUnitResponse res = sdk.strings.updateTranslationMemoryUnit(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
