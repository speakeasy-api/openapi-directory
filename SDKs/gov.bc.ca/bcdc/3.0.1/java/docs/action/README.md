# action

## Overview

CKAN's Action API is a powerful, RPC-style API that exposes all of CKAN's core features to API clients.

Find out more
<http://docs.ckan.org/en/ckan-2.5.3/api/index.html>
### Available Operations

* [getActionOrganizationActivityList](#getactionorganizationactivitylist) - Get the activity stream of an organization
* [getActionOrganizationActivityListHtml](#getactionorganizationactivitylisthtml) - Get the activity stream of an organization, HTML format
* [getActionOrganizationAutocomplete](#getactionorganizationautocomplete) - Get names of organizations that match a query string
* [getActionOrganizationFollowerCount](#getactionorganizationfollowercount) - Get number of followers of an organization
* [getActionOrganizationFollowerList](#getactionorganizationfollowerlist) - Get users following an organization
* [getActionOrganizationList](#getactionorganizationlist) - Get names of all organizations
* [getActionOrganizationListForUser](#getactionorganizationlistforuser) - Get organizations that a user has a given permission for
* [getActionOrganizationRevisionList](#getactionorganizationrevisionlist) - Get organization revisions
* [getActionOrganizationShow](#getactionorganizationshow) - Get details of a specific organization
* [getActionPackageActivityList](#getactionpackageactivitylist) - Get the activity stream of a package (dataset)
* [getActionPackageActivityListHtml](#getactionpackageactivitylisthtml) - Get the activity stream of a package (dataset), HTML format
* [getActionPackageAutocomplete](#getactionpackageautocomplete) - Find packages (datasets) matching a query
* [getActionPackageList](#getactionpackagelist) - Get a list of all packages (datasets)
* [getActionPackageRelationshipsList](#getactionpackagerelationshipslist) - Get package (dataset) relationships
* [getActionPackageRevisionList](#getactionpackagerevisionlist) - Get list of revisions for a package (dataset)
* [getActionPackageSearch](#getactionpackagesearch) - Find packages (datasets) matching query terms
* [getActionPackageShow](#getactionpackageshow) - Get metadata about one specific package (dataset)
* [getActionRelatedList](#getactionrelatedlist) - Gets items related to a package (dataset)
* [getActionResourceSearch](#getactionresourcesearch) - Find resources
* [getActionResourceShow](#getactionresourceshow) - Get metadata for a specific resource
* [getActionStatusShow](#getactionstatusshow) - Get the site status
* [getActionTagList](#getactiontaglist) - Get a list of tags

## getActionOrganizationActivityList

Return an organization's activity stream

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionOrganizationActivityListRequest;
import org.openapis.openapi.models.operations.GetActionOrganizationActivityListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionOrganizationActivityListRequest req = new GetActionOrganizationActivityListRequest() {{
                id = "a05dfc2d-df7c-4c78-8a1b-a928fc816742";
            }};            

            GetActionOrganizationActivityListResponse res = sdk.action.getActionOrganizationActivityList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionOrganizationActivityListHtml

Return an organization's activity stream as HTML

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionOrganizationActivityListHtmlRequest;
import org.openapis.openapi.models.operations.GetActionOrganizationActivityListHtmlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionOrganizationActivityListHtmlRequest req = new GetActionOrganizationActivityListHtmlRequest() {{
                id = "cb739205-9293-496f-aa75-96eb10faaa23";
            }};            

            GetActionOrganizationActivityListHtmlResponse res = sdk.action.getActionOrganizationActivityListHtml(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionOrganizationAutocomplete

Return a list of organization names that contain a string

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionOrganizationAutocompleteRequest;
import org.openapis.openapi.models.operations.GetActionOrganizationAutocompleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionOrganizationAutocompleteRequest req = new GetActionOrganizationAutocompleteRequest() {{
                limit = 358152L;
                q = "explicabo";
            }};            

            GetActionOrganizationAutocompleteResponse res = sdk.action.getActionOrganizationAutocomplete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionOrganizationFollowerCount

Return the number of followers of an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionOrganizationFollowerCountRequest;
import org.openapis.openapi.models.operations.GetActionOrganizationFollowerCountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionOrganizationFollowerCountRequest req = new GetActionOrganizationFollowerCountRequest() {{
                id = "c5955907-aff1-4a3a-afa9-467739251aa5";
            }};            

            GetActionOrganizationFollowerCountResponse res = sdk.action.getActionOrganizationFollowerCount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionOrganizationFollowerList

Return a list of users that are following a given organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionOrganizationFollowerListRequest;
import org.openapis.openapi.models.operations.GetActionOrganizationFollowerListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionOrganizationFollowerListRequest req = new GetActionOrganizationFollowerListRequest() {{
                id = "2c3f5ad0-19da-41ff-a78f-097b0074f154";
            }};            

            GetActionOrganizationFollowerListResponse res = sdk.action.getActionOrganizationFollowerList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionOrganizationList

Returns the names of all indexed organizations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionOrganizationListRequest;
import org.openapis.openapi.models.operations.GetActionOrganizationListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionOrganizationListRequest req = new GetActionOrganizationListRequest() {{
                limit = 480894L;
                offset = 118727L;
            }};            

            GetActionOrganizationListResponse res = sdk.action.getActionOrganizationList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionOrganizationListForUser

Return the organizations that the user has a given permission for

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionOrganizationListForUserRequest;
import org.openapis.openapi.models.operations.GetActionOrganizationListForUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionOrganizationListForUserRequest req = new GetActionOrganizationListForUserRequest() {{
                permission = "harum";
            }};            

            GetActionOrganizationListForUserResponse res = sdk.action.getActionOrganizationListForUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionOrganizationRevisionList

Return an organization's revisions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionOrganizationRevisionListRequest;
import org.openapis.openapi.models.operations.GetActionOrganizationRevisionListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionOrganizationRevisionListRequest req = new GetActionOrganizationRevisionListRequest() {{
                id = "5e6e13b9-9d48-48e1-a91e-450ad2abd442";
            }};            

            GetActionOrganizationRevisionListResponse res = sdk.action.getActionOrganizationRevisionList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionOrganizationShow

Return the details of an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionOrganizationShowRequest;
import org.openapis.openapi.models.operations.GetActionOrganizationShowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionOrganizationShowRequest req = new GetActionOrganizationShowRequest() {{
                id = "69802d50-2a94-4bb4-b63c-969e9a3efa77";
                includeDatasets = false;
            }};            

            GetActionOrganizationShowResponse res = sdk.action.getActionOrganizationShow(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionPackageActivityList

Returns a package's activity stream

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionPackageActivityListRequest;
import org.openapis.openapi.models.operations.GetActionPackageActivityListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionPackageActivityListRequest req = new GetActionPackageActivityListRequest() {{
                id = "dfb14cd6-6ae3-495e-bb9b-a88f3a669970";
                limit = 470132L;
                offset = 301575L;
            }};            

            GetActionPackageActivityListResponse res = sdk.action.getActionPackageActivityList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionPackageActivityListHtml

The activity stream is rendered as a snippet of HTML meant to be included in an HTML pag, i.e it doesn't have any header or footer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionPackageActivityListHtmlRequest;
import org.openapis.openapi.models.operations.GetActionPackageActivityListHtmlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionPackageActivityListHtmlRequest req = new GetActionPackageActivityListHtmlRequest() {{
                id = "ba4469b6-e214-4195-9890-afa563e2516f";
                limit = 891924L;
                offset = 260341L;
            }};            

            GetActionPackageActivityListHtmlResponse res = sdk.action.getActionPackageActivityListHtml(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionPackageAutocomplete

Return a list of datasets that match a string

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionPackageAutocompleteRequest;
import org.openapis.openapi.models.operations.GetActionPackageAutocompleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionPackageAutocompleteRequest req = new GetActionPackageAutocompleteRequest() {{
                limit = 806194L;
                q = "deleniti";
            }};            

            GetActionPackageAutocompleteResponse res = sdk.action.getActionPackageAutocomplete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionPackageList

Returns the names of all indexed packages (datasets)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionPackageListRequest;
import org.openapis.openapi.models.operations.GetActionPackageListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionPackageListRequest req = new GetActionPackageListRequest() {{
                limit = 703889L;
                offset = 447926L;
            }};            

            GetActionPackageListResponse res = sdk.action.getActionPackageList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionPackageRelationshipsList

Return a dataset's relationships

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionPackageRelationshipsListRequest;
import org.openapis.openapi.models.operations.GetActionPackageRelationshipsListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionPackageRelationshipsListRequest req = new GetActionPackageRelationshipsListRequest() {{
                id = "11e5b7fd-2ed0-4289-a1cd-dc692601fb57";
                id2 = "autem";
                rel = "nam";
            }};            

            GetActionPackageRelationshipsListResponse res = sdk.action.getActionPackageRelationshipsList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionPackageRevisionList

Return a dataset's revision as a list of dictionaries

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionPackageRevisionListRequest;
import org.openapis.openapi.models.operations.GetActionPackageRevisionListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionPackageRevisionListRequest req = new GetActionPackageRevisionListRequest() {{
                id = "0d5f0d30-c5fb-4b25-8705-3202c73d5fe9";
            }};            

            GetActionPackageRevisionListResponse res = sdk.action.getActionPackageRevisionList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionPackageSearch

Searches for packages (datasets) matching the specified query terms

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionPackageSearchRequest;
import org.openapis.openapi.models.operations.GetActionPackageSearchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionPackageSearchRequest req = new GetActionPackageSearchRequest() {{
                q = "facilis";
            }};            

            GetActionPackageSearchResponse res = sdk.action.getActionPackageSearch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionPackageShow

Returns metadata about the package (dataset) corresponding to the specified unique name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionPackageShowRequest;
import org.openapis.openapi.models.operations.GetActionPackageShowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionPackageShowRequest req = new GetActionPackageShowRequest() {{
                id = "90c28909-b3fe-449a-8d9c-bf48633323f9";
            }};            

            GetActionPackageShowResponse res = sdk.action.getActionPackageShow(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionRelatedList

Returns a dataset's related items.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionRelatedListRequest;
import org.openapis.openapi.models.operations.GetActionRelatedListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionRelatedListRequest req = new GetActionRelatedListRequest() {{
                dataset = "cum";
                featured = "voluptate";
                id = "7f3a4100-674e-4bf6-9280-d1ba77a89ebf";
                sort = "nihil";
                typeFilter = "ipsum";
            }};            

            GetActionRelatedListResponse res = sdk.action.getActionRelatedList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionResourceSearch

Returns a dictionary with two fields ``count`` and ``results``.             The ``count`` field contains the total number of Resources                found without the limit or query parameters having an effect.             The ``results`` field is a list of dictized Resource objects.             The query parameter is a required field. It is a string in                the form ``{field}:{term}`` or a list of strings, each of the             same form. Within each string, ``{field}`` is a field or extra             field on the Resource domain object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionResourceSearchRequest;
import org.openapis.openapi.models.operations.GetActionResourceSearchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionResourceSearchRequest req = new GetActionResourceSearchRequest() {{
                fields = "voluptate";
                limit = 663078L;
                offset = 906418L;
                orderBy = "eius";
                query = "aspernatur";
            }};            

            GetActionResourceSearchResponse res = sdk.action.getActionResourceSearch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionResourceShow

Return the metadata of a resource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionResourceShowRequest;
import org.openapis.openapi.models.operations.GetActionResourceShowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionResourceShowRequest req = new GetActionResourceShowRequest() {{
                id = "03ce5e6a-95d8-4a0d-846c-e2af7a73cf3b";
                includeTracking = false;
            }};            

            GetActionResourceShowResponse res = sdk.action.getActionResourceShow(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionStatusShow

Returns the site status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionStatusShowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionStatusShowResponse res = sdk.action.getActionStatusShow();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionTagList

Returns the names of all indexed tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionTagListRequest;
import org.openapis.openapi.models.operations.GetActionTagListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActionTagListRequest req = new GetActionTagListRequest() {{
                limit = 880298L;
                offset = 253941L;
            }};            

            GetActionTagListResponse res = sdk.action.getActionTagList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
