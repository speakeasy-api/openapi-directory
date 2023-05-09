# projects

## Overview

Interact with GitHub Projects.

### Available Operations

* [projectsAddCollaborator](#projectsaddcollaborator) - Add project collaborator
* [projectsCreateCard](#projectscreatecard) - Create a project card
* [projectsCreateColumn](#projectscreatecolumn) - Create a project column
* [projectsCreateForAuthenticatedUser](#projectscreateforauthenticateduser) - Create a user project
* [projectsCreateForOrg](#projectscreatefororg) - Create an organization project
* [projectsCreateForRepo](#projectscreateforrepo) - Create a repository project
* [projectsDelete](#projectsdelete) - Delete a project
* [projectsDeleteCard](#projectsdeletecard) - Delete a project card
* [projectsDeleteColumn](#projectsdeletecolumn) - Delete a project column
* [projectsGet](#projectsget) - Get a project
* [projectsGetCard](#projectsgetcard) - Get a project card
* [projectsGetColumn](#projectsgetcolumn) - Get a project column
* [projectsGetPermissionForUser](#projectsgetpermissionforuser) - Get project permission for a user
* [projectsListCards](#projectslistcards) - List project cards
* [projectsListCollaborators](#projectslistcollaborators) - List project collaborators
* [projectsListColumns](#projectslistcolumns) - List project columns
* [projectsListForOrg](#projectslistfororg) - List organization projects
* [projectsListForRepo](#projectslistforrepo) - List repository projects
* [projectsListForUser](#projectslistforuser) - List user projects
* [projectsMoveCard](#projectsmovecard) - Move a project card
* [projectsMoveColumn](#projectsmovecolumn) - Move a project column
* [projectsRemoveCollaborator](#projectsremovecollaborator) - Remove user as a collaborator
* [projectsUpdate](#projectsupdate) - Update a project
* [projectsUpdateCard](#projectsupdatecard) - Update an existing project card
* [projectsUpdateColumn](#projectsupdatecolumn) - Update an existing project column

## projectsAddCollaborator

Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#add-project-collaborator>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsAddCollaboratorRequest;
import org.openapis.openapi.models.operations.ProjectsAddCollaboratorRequestBody;
import org.openapis.openapi.models.operations.ProjectsAddCollaboratorRequestBodyPermissionEnum;
import org.openapis.openapi.models.operations.ProjectsAddCollaboratorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsAddCollaboratorRequest req = new ProjectsAddCollaboratorRequest(976802L, "distinctio") {{
                requestBody = new ProjectsAddCollaboratorRequestBody() {{
                    permission = ProjectsAddCollaboratorRequestBodyPermissionEnum.WRITE;
                }};;
            }};            

            ProjectsAddCollaboratorResponse res = sdk.projects.projectsAddCollaborator(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsCreateCard

Create a project card

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#create-a-project-card>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsCreateCardRequest;
import org.openapis.openapi.models.operations.ProjectsCreateCardRequestBody1;
import org.openapis.openapi.models.operations.ProjectsCreateCardRequestBody2;
import org.openapis.openapi.models.operations.ProjectsCreateCardResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsCreateCardRequest req = new ProjectsCreateCardRequest(                new ProjectsCreateCardRequestBody2(42L, "PullRequest") {{
                                contentId = 42L;
                                contentType = "PullRequest";
                            }}, 966390L);            

            ProjectsCreateCardResponse res = sdk.projects.projectsCreateCard(req);

            if (res.projectCard != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsCreateColumn

Create a project column

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#create-a-project-column>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsCreateColumnRequest;
import org.openapis.openapi.models.operations.ProjectsCreateColumnRequestBody;
import org.openapis.openapi.models.operations.ProjectsCreateColumnResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsCreateColumnRequest req = new ProjectsCreateColumnRequest(                new ProjectsCreateColumnRequestBody("Remaining tasks");, 328379L);            

            ProjectsCreateColumnResponse res = sdk.projects.projectsCreateColumn(req);

            if (res.projectColumn != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsCreateForAuthenticatedUser

Creates a user project board. Returns a `410 Gone` status if the user does not have existing classic projects. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#create-a-user-project>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsCreateForAuthenticatedUserRequestBody;
import org.openapis.openapi.models.operations.ProjectsCreateForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsCreateForAuthenticatedUserRequestBody req = new ProjectsCreateForAuthenticatedUserRequestBody("Week One Sprint") {{
                body = "This project represents the sprint of the first week in January";
            }};            

            ProjectsCreateForAuthenticatedUserResponse res = sdk.projects.projectsCreateForAuthenticatedUser(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsCreateForOrg

Creates an organization project board. Returns a `410 Gone` status if projects are disabled in the organization or if the organization does not have existing classic projects. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#create-an-organization-project>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsCreateForOrgRequest;
import org.openapis.openapi.models.operations.ProjectsCreateForOrgRequestBody;
import org.openapis.openapi.models.operations.ProjectsCreateForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsCreateForOrgRequest req = new ProjectsCreateForOrgRequest(                new ProjectsCreateForOrgRequestBody("praesentium") {{
                                body = "maxime";
                            }};, "magnam");            

            ProjectsCreateForOrgResponse res = sdk.projects.projectsCreateForOrg(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsCreateForRepo

Creates a repository project board. Returns a `410 Gone` status if projects are disabled in the repository or if the repository does not have existing classic projects. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#create-a-repository-project>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsCreateForRepoRequest;
import org.openapis.openapi.models.operations.ProjectsCreateForRepoRequestBody;
import org.openapis.openapi.models.operations.ProjectsCreateForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsCreateForRepoRequest req = new ProjectsCreateForRepoRequest(                new ProjectsCreateForRepoRequestBody("temporibus") {{
                                body = "quos";
                            }};, "commodi", "itaque");            

            ProjectsCreateForRepoResponse res = sdk.projects.projectsCreateForRepo(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsDelete

Deletes a project board. Returns a `404 Not Found` status if projects are disabled.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#delete-a-project>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsDeleteRequest;
import org.openapis.openapi.models.operations.ProjectsDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsDeleteRequest req = new ProjectsDeleteRequest(415608L);            

            ProjectsDeleteResponse res = sdk.projects.projectsDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsDeleteCard

Delete a project card

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#delete-a-project-card>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsDeleteCardRequest;
import org.openapis.openapi.models.operations.ProjectsDeleteCardResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsDeleteCardRequest req = new ProjectsDeleteCardRequest(520761L);            

            ProjectsDeleteCardResponse res = sdk.projects.projectsDeleteCard(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsDeleteColumn

Delete a project column

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#delete-a-project-column>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsDeleteColumnRequest;
import org.openapis.openapi.models.operations.ProjectsDeleteColumnResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsDeleteColumnRequest req = new ProjectsDeleteColumnRequest(936618L);            

            ProjectsDeleteColumnResponse res = sdk.projects.projectsDeleteColumn(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsGet

Gets a project by its `id`. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#get-a-project>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsGetRequest;
import org.openapis.openapi.models.operations.ProjectsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsGetRequest req = new ProjectsGetRequest(267207L);            

            ProjectsGetResponse res = sdk.projects.projectsGet(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsGetCard

Get a project card

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#get-a-project-card>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsGetCardRequest;
import org.openapis.openapi.models.operations.ProjectsGetCardResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsGetCardRequest req = new ProjectsGetCardRequest(722184L);            

            ProjectsGetCardResponse res = sdk.projects.projectsGetCard(req);

            if (res.projectCard != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsGetColumn

Get a project column

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#get-a-project-column>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsGetColumnRequest;
import org.openapis.openapi.models.operations.ProjectsGetColumnResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsGetColumnRequest req = new ProjectsGetColumnRequest(877399L);            

            ProjectsGetColumnResponse res = sdk.projects.projectsGetColumn(req);

            if (res.projectColumn != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsGetPermissionForUser

Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#get-project-permission-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsGetPermissionForUserRequest;
import org.openapis.openapi.models.operations.ProjectsGetPermissionForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsGetPermissionForUserRequest req = new ProjectsGetPermissionForUserRequest(32901L, "ipsam");            

            ProjectsGetPermissionForUserResponse res = sdk.projects.projectsGetPermissionForUser(req);

            if (res.projectCollaboratorPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsListCards

List project cards

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#list-project-cards>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsListCardsArchivedStateEnum;
import org.openapis.openapi.models.operations.ProjectsListCardsRequest;
import org.openapis.openapi.models.operations.ProjectsListCardsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsListCardsRequest req = new ProjectsListCardsRequest(425946L) {{
                archivedState = ProjectsListCardsArchivedStateEnum.ALL;
                page = 93894L;
                perPage = 247685L;
            }};            

            ProjectsListCardsResponse res = sdk.projects.projectsListCards(req);

            if (res.projectCards != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsListCollaborators

Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#list-project-collaborators>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsListCollaboratorsAffiliationEnum;
import org.openapis.openapi.models.operations.ProjectsListCollaboratorsRequest;
import org.openapis.openapi.models.operations.ProjectsListCollaboratorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsListCollaboratorsRequest req = new ProjectsListCollaboratorsRequest(978548L) {{
                affiliation = ProjectsListCollaboratorsAffiliationEnum.OUTSIDE;
                page = 575213L;
                perPage = 858778L;
            }};            

            ProjectsListCollaboratorsResponse res = sdk.projects.projectsListCollaborators(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsListColumns

List project columns

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#list-project-columns>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsListColumnsRequest;
import org.openapis.openapi.models.operations.ProjectsListColumnsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsListColumnsRequest req = new ProjectsListColumnsRequest(643678L) {{
                page = 458503L;
                perPage = 364463L;
            }};            

            ProjectsListColumnsResponse res = sdk.projects.projectsListColumns(req);

            if (res.projectColumns != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsListForOrg

Lists the projects in an organization. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#list-organization-projects>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsListForOrgRequest;
import org.openapis.openapi.models.operations.ProjectsListForOrgResponse;
import org.openapis.openapi.models.operations.ProjectsListForOrgStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsListForOrgRequest req = new ProjectsListForOrgRequest("reprehenderit") {{
                page = 667715L;
                perPage = 336102L;
                state = ProjectsListForOrgStateEnum.CLOSED;
            }};            

            ProjectsListForOrgResponse res = sdk.projects.projectsListForOrg(req);

            if (res.projects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsListForRepo

Lists the projects in a repository. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#list-repository-projects>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsListForRepoRequest;
import org.openapis.openapi.models.operations.ProjectsListForRepoResponse;
import org.openapis.openapi.models.operations.ProjectsListForRepoStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsListForRepoRequest req = new ProjectsListForRepoRequest("accusamus", "impedit") {{
                page = 945027L;
                perPage = 900103L;
                state = ProjectsListForRepoStateEnum.ALL;
            }};            

            ProjectsListForRepoResponse res = sdk.projects.projectsListForRepo(req);

            if (res.projects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsListForUser

List user projects

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#list-user-projects>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsListForUserRequest;
import org.openapis.openapi.models.operations.ProjectsListForUserResponse;
import org.openapis.openapi.models.operations.ProjectsListForUserStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsListForUserRequest req = new ProjectsListForUserRequest("ex") {{
                page = 376741L;
                perPage = 895346L;
                state = ProjectsListForUserStateEnum.ALL;
            }};            

            ProjectsListForUserResponse res = sdk.projects.projectsListForUser(req);

            if (res.projects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsMoveCard

Move a project card

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#move-a-project-card>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsMoveCardRequest;
import org.openapis.openapi.models.operations.ProjectsMoveCardRequestBody;
import org.openapis.openapi.models.operations.ProjectsMoveCardResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsMoveCardRequest req = new ProjectsMoveCardRequest(                new ProjectsMoveCardRequestBody("bottom") {{
                                columnId = 42L;
                            }};, 65082L);            

            ProjectsMoveCardResponse res = sdk.projects.projectsMoveCard(req);

            if (res.projectsMoveCard201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsMoveColumn

Move a project column

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#move-a-project-column>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsMoveColumnRequest;
import org.openapis.openapi.models.operations.ProjectsMoveColumnRequestBody;
import org.openapis.openapi.models.operations.ProjectsMoveColumnResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsMoveColumnRequest req = new ProjectsMoveColumnRequest(                new ProjectsMoveColumnRequestBody("last");, 791880L);            

            ProjectsMoveColumnResponse res = sdk.projects.projectsMoveColumn(req);

            if (res.projectsMoveColumn201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsRemoveCollaborator

Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#remove-project-collaborator>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsRemoveCollaboratorRequest;
import org.openapis.openapi.models.operations.ProjectsRemoveCollaboratorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsRemoveCollaboratorRequest req = new ProjectsRemoveCollaboratorRequest(685478L, "laborum");            

            ProjectsRemoveCollaboratorResponse res = sdk.projects.projectsRemoveCollaborator(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsUpdate

Updates a project board's information. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#update-a-project>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsUpdateRequest;
import org.openapis.openapi.models.operations.ProjectsUpdateRequestBody;
import org.openapis.openapi.models.operations.ProjectsUpdateRequestBodyOrganizationPermissionEnum;
import org.openapis.openapi.models.operations.ProjectsUpdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsUpdateRequest req = new ProjectsUpdateRequest(231070L) {{
                requestBody = new ProjectsUpdateRequestBody() {{
                    body = "This project represents the sprint of the first week in January";
                    name = "Week One Sprint";
                    organizationPermission = ProjectsUpdateRequestBodyOrganizationPermissionEnum.READ;
                    private_ = false;
                    state = "open";
                }};;
            }};            

            ProjectsUpdateResponse res = sdk.projects.projectsUpdate(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsUpdateCard

Update an existing project card

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#update-a-project-card>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsUpdateCardRequest;
import org.openapis.openapi.models.operations.ProjectsUpdateCardRequestBody;
import org.openapis.openapi.models.operations.ProjectsUpdateCardResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsUpdateCardRequest req = new ProjectsUpdateCardRequest(538869L) {{
                requestBody = new ProjectsUpdateCardRequestBody() {{
                    archived = false;
                    note = "Update all gems";
                }};;
            }};            

            ProjectsUpdateCardResponse res = sdk.projects.projectsUpdateCard(req);

            if (res.projectCard != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsUpdateColumn

Update an existing project column

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/projects#update-a-project-column>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsUpdateColumnRequest;
import org.openapis.openapi.models.operations.ProjectsUpdateColumnRequestBody;
import org.openapis.openapi.models.operations.ProjectsUpdateColumnResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsUpdateColumnRequest req = new ProjectsUpdateColumnRequest(                new ProjectsUpdateColumnRequestBody("Remaining tasks");, 216457L);            

            ProjectsUpdateColumnResponse res = sdk.projects.projectsUpdateColumn(req);

            if (res.projectColumn != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
