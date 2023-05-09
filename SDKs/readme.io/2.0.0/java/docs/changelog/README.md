# changelog

### Available Operations

* [createChangelog](#createchangelog) - Create changelog
* [deleteChangelog](#deletechangelog) - Delete changelog
* [getChangelog](#getchangelog) - Get changelog
* [getChangelogs](#getchangelogs) - Get changelogs
* [updateChangelog](#updatechangelog) - Update changelog

## createChangelog

Create a new changelog inside of this project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateChangelogResponse;
import org.openapis.openapi.models.operations.CreateChangelogSecurity;
import org.openapis.openapi.models.shared.Changelog;
import org.openapis.openapi.models.shared.ChangelogTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Changelog req = new Changelog("quis", "veritatis") {{
                hidden = false;
                type = ChangelogTypeEnum.IMPROVED;
            }};            

            CreateChangelogResponse res = sdk.changelog.createChangelog(req, new CreateChangelogSecurity("perferendis", "ipsam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteChangelog

Delete the changelog with this slug

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteChangelogRequest;
import org.openapis.openapi.models.operations.DeleteChangelogResponse;
import org.openapis.openapi.models.operations.DeleteChangelogSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteChangelogRequest req = new DeleteChangelogRequest("repellendus");            

            DeleteChangelogResponse res = sdk.changelog.deleteChangelog(req, new DeleteChangelogSecurity("sapiente", "quo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChangelog

Returns the changelog with this slug

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChangelogRequest;
import org.openapis.openapi.models.operations.GetChangelogResponse;
import org.openapis.openapi.models.operations.GetChangelogSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChangelogRequest req = new GetChangelogRequest("odit");            

            GetChangelogResponse res = sdk.changelog.getChangelog(req, new GetChangelogSecurity("at", "at") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChangelogs

Returns a list of changelogs associated with the project API key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChangelogsRequest;
import org.openapis.openapi.models.operations.GetChangelogsResponse;
import org.openapis.openapi.models.operations.GetChangelogsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChangelogsRequest req = new GetChangelogsRequest() {{
                page = 978619L;
                perPage = 473608L;
            }};            

            GetChangelogsResponse res = sdk.changelog.getChangelogs(req, new GetChangelogsSecurity("quod", "quod") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateChangelog

Update a changelog with this slug

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateChangelogRequest;
import org.openapis.openapi.models.operations.UpdateChangelogResponse;
import org.openapis.openapi.models.operations.UpdateChangelogSecurity;
import org.openapis.openapi.models.shared.Changelog;
import org.openapis.openapi.models.shared.ChangelogTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateChangelogRequest req = new UpdateChangelogRequest(                new Changelog("esse", "totam") {{
                                hidden = false;
                                type = ChangelogTypeEnum.DEPRECATED;
                            }};, "dolorum");            

            UpdateChangelogResponse res = sdk.changelog.updateChangelog(req, new UpdateChangelogSecurity("dicta", "nam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
