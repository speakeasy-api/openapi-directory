# otherContacts

### Available Operations

* [peopleOtherContactsCopyOtherContactToMyContactsGroup](#peopleothercontactscopyothercontacttomycontactsgroup) - Copies an "Other contact" to a new contact in the user's "myContacts" group Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peopleOtherContactsList](#peopleothercontactslist) - List all "Other contacts", that is contacts that are not in a contact group. "Other contacts" are typically auto created contacts from interactions. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason "EXPIRED_SYNC_TOKEN". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's other contacts that have changed](/people/v1/other-contacts#list_the_users_other_contacts_that_have_changed).
* [peopleOtherContactsSearch](#peopleothercontactssearch) - Provides a list of contacts in the authenticated user's other contacts that matches the search query. The query matches on a contact's `names`, `emailAddresses`, and `phoneNumbers` fields that are from the OTHER_CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/other-contacts#search_the_users_other_contacts

## peopleOtherContactsCopyOtherContactToMyContactsGroup

Copies an "Other contact" to a new contact in the user's "myContacts" group Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest;
import org.openapis.openapi.models.operations.PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse;
import org.openapis.openapi.models.operations.PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity;
import org.openapis.openapi.models.operations.PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1;
import org.openapis.openapi.models.operations.PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CopyOtherContactToMyContactsGroupRequest;
import org.openapis.openapi.models.shared.CopyOtherContactToMyContactsGroupRequestSourcesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest req = new PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest("nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                copyOtherContactToMyContactsGroupRequest = new CopyOtherContactToMyContactsGroupRequest() {{
                    copyMask = "voluptatibus";
                    readMask = "ipsa";
                    sources = new org.openapis.openapi.models.shared.CopyOtherContactToMyContactsGroupRequestSourcesEnum[]{{
                        add(CopyOtherContactToMyContactsGroupRequestSourcesEnum.READ_SOURCE_TYPE_PROFILE),
                        add(CopyOtherContactToMyContactsGroupRequestSourcesEnum.READ_SOURCE_TYPE_CONTACT),
                        add(CopyOtherContactToMyContactsGroupRequestSourcesEnum.READ_SOURCE_TYPE_UNSPECIFIED),
                    }};
                }};;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "maiores";
                key = "dicta";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "iusto";
                uploadProtocol = "dicta";
            }};            

            PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse res = sdk.otherContacts.peopleOtherContactsCopyOtherContactToMyContactsGroup(req, new PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity() {{
                option1 = new PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1("harum", "enim") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.person != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peopleOtherContactsList

List all "Other contacts", that is contacts that are not in a contact group. "Other contacts" are typically auto created contacts from interactions. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason "EXPIRED_SYNC_TOKEN". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's other contacts that have changed](/people/v1/other-contacts#list_the_users_other_contacts_that_have_changed).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeopleOtherContactsListRequest;
import org.openapis.openapi.models.operations.PeopleOtherContactsListResponse;
import org.openapis.openapi.models.operations.PeopleOtherContactsListSecurity;
import org.openapis.openapi.models.operations.PeopleOtherContactsListSourcesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeopleOtherContactsListRequest req = new PeopleOtherContactsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "ipsum";
                key = "quidem";
                oauthToken = "molestias";
                pageSize = 566602L;
                pageToken = "pariatur";
                prettyPrint = false;
                quotaUser = "modi";
                readMask = "praesentium";
                requestSyncToken = false;
                sources = new org.openapis.openapi.models.operations.PeopleOtherContactsListSourcesEnum[]{{
                    add(PeopleOtherContactsListSourcesEnum.READ_SOURCE_TYPE_DOMAIN_CONTACT),
                    add(PeopleOtherContactsListSourcesEnum.READ_SOURCE_TYPE_UNSPECIFIED),
                    add(PeopleOtherContactsListSourcesEnum.READ_SOURCE_TYPE_DOMAIN_CONTACT),
                }};
                syncToken = "sint";
                uploadType = "veritatis";
                uploadProtocol = "itaque";
            }};            

            PeopleOtherContactsListResponse res = sdk.otherContacts.peopleOtherContactsList(req, new PeopleOtherContactsListSecurity("incidunt", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOtherContactsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peopleOtherContactsSearch

Provides a list of contacts in the authenticated user's other contacts that matches the search query. The query matches on a contact's `names`, `emailAddresses`, and `phoneNumbers` fields that are from the OTHER_CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/other-contacts#search_the_users_other_contacts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeopleOtherContactsSearchRequest;
import org.openapis.openapi.models.operations.PeopleOtherContactsSearchResponse;
import org.openapis.openapi.models.operations.PeopleOtherContactsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeopleOtherContactsSearchRequest req = new PeopleOtherContactsSearchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "deserunt";
                key = "distinctio";
                oauthToken = "quibusdam";
                pageSize = 289406L;
                prettyPrint = false;
                query = "modi";
                quotaUser = "qui";
                readMask = "aliquid";
                uploadType = "cupiditate";
                uploadProtocol = "quos";
            }};            

            PeopleOtherContactsSearchResponse res = sdk.otherContacts.peopleOtherContactsSearch(req, new PeopleOtherContactsSearchSecurity("perferendis", "magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
