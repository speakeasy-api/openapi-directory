# mme

## Overview

Match patients with similar diseases and non-human genes based on their phenotypes

### Available Operations

* [postDiseaseMme](#postdiseasemme) - Match a patient to diseases based on their phenotypes
* [postFlyMme](#postflymme) - Match a patient to fruit fly genes based on similar phenotypes
* [postMouseMme](#postmousemme) - Match a patient to mouse genes based on similar phenotypes
* [postNematodeMme](#postnematodemme) - Match a patient to nematode genes based on similar phenotypes
* [postZebrafishMme](#postzebrafishmme) - Match a patient to zebrafish genes based on similar phenotypes

## postDiseaseMme

Match a patient to diseases based on their phenotypes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDiseaseMmeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("nobis", "laboriosam");
                put("recusandae", "consequuntur");
            }}            

            PostDiseaseMmeResponse res = sdk.mme.postDiseaseMme(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFlyMme

Match a patient to fruit fly genes based on similar phenotypes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFlyMmeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("exercitationem", "necessitatibus");
            }}            

            PostFlyMmeResponse res = sdk.mme.postFlyMme(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMouseMme

Match a patient to mouse genes based on similar phenotypes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMouseMmeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("nisi", "at");
            }}            

            PostMouseMmeResponse res = sdk.mme.postMouseMme(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNematodeMme

Match a patient to nematode genes based on similar phenotypes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNematodeMmeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("est", "harum");
                put("sequi", "doloribus");
                put("repudiandae", "optio");
                put("occaecati", "nemo");
            }}            

            PostNematodeMmeResponse res = sdk.mme.postNematodeMme(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postZebrafishMme

Match a patient to zebrafish genes based on similar phenotypes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostZebrafishMmeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("blanditiis", "officia");
                put("voluptas", "numquam");
            }}            

            PostZebrafishMmeResponse res = sdk.mme.postZebrafishMme(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
