# accountUserProfiles

### Available Operations

* [dfareportingAccountUserProfilesGet](#dfareportingaccountuserprofilesget) - Gets one account user profile by ID.
* [dfareportingAccountUserProfilesInsert](#dfareportingaccountuserprofilesinsert) - Inserts a new account user profile.
* [dfareportingAccountUserProfilesList](#dfareportingaccountuserprofileslist) - Retrieves a list of account user profiles, possibly filtered. This method supports paging.
* [dfareportingAccountUserProfilesPatch](#dfareportingaccountuserprofilespatch) - Updates an existing account user profile. This method supports patch semantics.
* [dfareportingAccountUserProfilesUpdate](#dfareportingaccountuserprofilesupdate) - Updates an existing account user profile.

## dfareportingAccountUserProfilesGet

Gets one account user profile by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAccountUserProfilesGetRequest;
import org.openapis.openapi.models.operations.DfareportingAccountUserProfilesGetResponse;
import org.openapis.openapi.models.operations.DfareportingAccountUserProfilesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAccountUserProfilesGetRequest req = new DfareportingAccountUserProfilesGetRequest("iure", "saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "est";
                key = "mollitia";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "dolorem";
                uploadProtocol = "corporis";
            }};            

            DfareportingAccountUserProfilesGetResponse res = sdk.accountUserProfiles.dfareportingAccountUserProfilesGet(req, new DfareportingAccountUserProfilesGetSecurity("explicabo", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountUserProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAccountUserProfilesInsert

Inserts a new account user profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAccountUserProfilesInsertRequest;
import org.openapis.openapi.models.operations.DfareportingAccountUserProfilesInsertResponse;
import org.openapis.openapi.models.operations.DfareportingAccountUserProfilesInsertSecurity;
import org.openapis.openapi.models.shared.AccountUserProfile;
import org.openapis.openapi.models.shared.AccountUserProfileTraffickerTypeEnum;
import org.openapis.openapi.models.shared.AccountUserProfileUserAccessTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ObjectFilter;
import org.openapis.openapi.models.shared.ObjectFilterStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAccountUserProfilesInsertRequest req = new DfareportingAccountUserProfilesInsertRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accountUserProfile = new AccountUserProfile() {{
                    accountId = "nemo";
                    active = false;
                    advertiserFilter = new ObjectFilter() {{
                        kind = "minima";
                        objectIds = new String[]{{
                            add("accusantium"),
                            add("iure"),
                            add("culpa"),
                        }};
                        status = ObjectFilterStatusEnum.ALL;
                    }};;
                    campaignFilter = new ObjectFilter() {{
                        kind = "sapiente";
                        objectIds = new String[]{{
                            add("mollitia"),
                        }};
                        status = ObjectFilterStatusEnum.NONE;
                    }};;
                    comments = "culpa";
                    email = "Zechariah.OHara@gmail.com";
                    id = "commodi";
                    kind = "quam";
                    locale = "molestiae";
                    name = "Sabrina Cronin MD";
                    siteFilter = new ObjectFilter() {{
                        kind = "animi";
                        objectIds = new String[]{{
                            add("odit"),
                            add("quo"),
                        }};
                        status = ObjectFilterStatusEnum.NONE;
                    }};;
                    subaccountId = "tenetur";
                    traffickerType = AccountUserProfileTraffickerTypeEnum.INTERNAL_TRAFFICKER;
                    userAccessType = AccountUserProfileUserAccessTypeEnum.INTERNAL_ADMINISTRATOR;
                    userRoleFilter = new ObjectFilter() {{
                        kind = "possimus";
                        objectIds = new String[]{{
                            add("quasi"),
                        }};
                        status = ObjectFilterStatusEnum.ASSIGNED;
                    }};;
                    userRoleId = "temporibus";
                }};;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "voluptatibus";
                key = "vero";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "voluptatibus";
                uploadProtocol = "ipsa";
            }};            

            DfareportingAccountUserProfilesInsertResponse res = sdk.accountUserProfiles.dfareportingAccountUserProfilesInsert(req, new DfareportingAccountUserProfilesInsertSecurity("omnis", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountUserProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAccountUserProfilesList

Retrieves a list of account user profiles, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAccountUserProfilesListRequest;
import org.openapis.openapi.models.operations.DfareportingAccountUserProfilesListResponse;
import org.openapis.openapi.models.operations.DfareportingAccountUserProfilesListSecurity;
import org.openapis.openapi.models.operations.DfareportingAccountUserProfilesListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingAccountUserProfilesListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAccountUserProfilesListRequest req = new DfareportingAccountUserProfilesListRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloremque";
                active = false;
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "maiores";
                ids = new String[]{{
                    add("corporis"),
                }};
                key = "dolore";
                maxResults = 480894L;
                oauthToken = "dicta";
                pageToken = "harum";
                prettyPrint = false;
                quotaUser = "enim";
                searchString = "accusamus";
                sortField = DfareportingAccountUserProfilesListSortFieldEnum.ID;
                sortOrder = DfareportingAccountUserProfilesListSortOrderEnum.DESCENDING;
                subaccountId = "quae";
                uploadType = "ipsum";
                uploadProtocol = "quidem";
                userRoleId = "molestias";
            }};            

            DfareportingAccountUserProfilesListResponse res = sdk.accountUserProfiles.dfareportingAccountUserProfilesList(req, new DfareportingAccountUserProfilesListSecurity("excepturi", "pariatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountUserProfilesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAccountUserProfilesPatch

Updates an existing account user profile. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAccountUserProfilesPatchRequest;
import org.openapis.openapi.models.operations.DfareportingAccountUserProfilesPatchResponse;
import org.openapis.openapi.models.operations.DfareportingAccountUserProfilesPatchSecurity;
import org.openapis.openapi.models.shared.AccountUserProfile;
import org.openapis.openapi.models.shared.AccountUserProfileTraffickerTypeEnum;
import org.openapis.openapi.models.shared.AccountUserProfileUserAccessTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ObjectFilter;
import org.openapis.openapi.models.shared.ObjectFilterStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAccountUserProfilesPatchRequest req = new DfareportingAccountUserProfilesPatchRequest("modi", "praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                accountUserProfile = new AccountUserProfile() {{
                    accountId = "voluptates";
                    active = false;
                    advertiserFilter = new ObjectFilter() {{
                        kind = "quasi";
                        objectIds = new String[]{{
                            add("sint"),
                            add("veritatis"),
                            add("itaque"),
                            add("incidunt"),
                        }};
                        status = ObjectFilterStatusEnum.NONE;
                    }};;
                    campaignFilter = new ObjectFilter() {{
                        kind = "consequatur";
                        objectIds = new String[]{{
                            add("quibusdam"),
                            add("explicabo"),
                            add("deserunt"),
                        }};
                        status = ObjectFilterStatusEnum.ALL;
                    }};;
                    comments = "quibusdam";
                    email = "Dillan_Deckow@gmail.com";
                    id = "quos";
                    kind = "perferendis";
                    locale = "magni";
                    name = "Vernon Abshire";
                    siteFilter = new ObjectFilter() {{
                        kind = "excepturi";
                        objectIds = new String[]{{
                            add("facilis"),
                            add("tempore"),
                        }};
                        status = ObjectFilterStatusEnum.NONE;
                    }};;
                    subaccountId = "delectus";
                    traffickerType = AccountUserProfileTraffickerTypeEnum.INTERNAL_TRAFFICKER;
                    userAccessType = AccountUserProfileUserAccessTypeEnum.NORMAL_USER;
                    userRoleFilter = new ObjectFilter() {{
                        kind = "eligendi";
                        objectIds = new String[]{{
                            add("aliquid"),
                            add("provident"),
                            add("necessitatibus"),
                        }};
                        status = ObjectFilterStatusEnum.ASSIGNED;
                    }};;
                    userRoleId = "officia";
                }};;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "dolorum";
                key = "in";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "maiores";
                uploadProtocol = "rerum";
            }};            

            DfareportingAccountUserProfilesPatchResponse res = sdk.accountUserProfiles.dfareportingAccountUserProfilesPatch(req, new DfareportingAccountUserProfilesPatchSecurity("dicta", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountUserProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAccountUserProfilesUpdate

Updates an existing account user profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAccountUserProfilesUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingAccountUserProfilesUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingAccountUserProfilesUpdateSecurity;
import org.openapis.openapi.models.shared.AccountUserProfile;
import org.openapis.openapi.models.shared.AccountUserProfileTraffickerTypeEnum;
import org.openapis.openapi.models.shared.AccountUserProfileUserAccessTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ObjectFilter;
import org.openapis.openapi.models.shared.ObjectFilterStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAccountUserProfilesUpdateRequest req = new DfareportingAccountUserProfilesUpdateRequest("cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                accountUserProfile = new AccountUserProfile() {{
                    accountId = "ea";
                    active = false;
                    advertiserFilter = new ObjectFilter() {{
                        kind = "aliquid";
                        objectIds = new String[]{{
                            add("accusamus"),
                            add("non"),
                            add("occaecati"),
                        }};
                        status = ObjectFilterStatusEnum.NONE;
                    }};;
                    campaignFilter = new ObjectFilter() {{
                        kind = "accusamus";
                        objectIds = new String[]{{
                            add("quidem"),
                            add("provident"),
                            add("nam"),
                            add("id"),
                        }};
                        status = ObjectFilterStatusEnum.ASSIGNED;
                    }};;
                    comments = "deleniti";
                    email = "Daren.Nolan@hotmail.com";
                    id = "natus";
                    kind = "omnis";
                    locale = "molestiae";
                    name = "Marcia Gutkowski";
                    siteFilter = new ObjectFilter() {{
                        kind = "labore";
                        objectIds = new String[]{{
                            add("suscipit"),
                            add("natus"),
                        }};
                        status = ObjectFilterStatusEnum.ALL;
                    }};;
                    subaccountId = "eum";
                    traffickerType = AccountUserProfileTraffickerTypeEnum.EXTERNAL_TRAFFICKER;
                    userAccessType = AccountUserProfileUserAccessTypeEnum.NORMAL_USER;
                    userRoleFilter = new ObjectFilter() {{
                        kind = "architecto";
                        objectIds = new String[]{{
                            add("et"),
                            add("excepturi"),
                        }};
                        status = ObjectFilterStatusEnum.ASSIGNED;
                    }};;
                    userRoleId = "provident";
                }};;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "mollitia";
                key = "reiciendis";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "eum";
                uploadProtocol = "dolor";
            }};            

            DfareportingAccountUserProfilesUpdateResponse res = sdk.accountUserProfiles.dfareportingAccountUserProfilesUpdate(req, new DfareportingAccountUserProfilesUpdateSecurity("necessitatibus", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountUserProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
