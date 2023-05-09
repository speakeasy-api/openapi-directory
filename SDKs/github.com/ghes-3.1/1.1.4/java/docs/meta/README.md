# meta

## Overview

Endpoints that give information about the API.

### Available Operations

* [metaGet](#metaget) - Get GitHub Enterprise Server meta information
* [metaGetOctocat](#metagetoctocat) - Get Octocat
* [metaGetZen](#metagetzen) - Get the Zen of GitHub
* [metaRoot](#metaroot) - GitHub API Root

## metaGet

Get GitHub Enterprise Server meta information

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/meta#get-github-meta-information>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetaGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetaGetResponse res = sdk.meta.metaGet();

            if (res.apiOverview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metaGetOctocat

Get the octocat as ASCII art

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/meta#get-octocat>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetaGetOctocatRequest;
import org.openapis.openapi.models.operations.MetaGetOctocatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetaGetOctocatRequest req = new MetaGetOctocatRequest() {{
                s = "vitae";
            }};            

            MetaGetOctocatResponse res = sdk.meta.metaGetOctocat(req);

            if (res.metaGetOctocat200ApplicationOctocatStreamString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metaGetZen

Get a random sentence from the Zen of GitHub

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetaGetZenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetaGetZenResponse res = sdk.meta.metaGetZen();

            if (res.metaGetZen200TextPlainString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metaRoot

Get Hypermedia links to resources accessible in GitHub's REST API

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#root-endpoint>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetaRootResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetaRootResponse res = sdk.meta.metaRoot();

            if (res.root != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
