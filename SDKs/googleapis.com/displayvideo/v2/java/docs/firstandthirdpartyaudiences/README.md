# firstAndThirdPartyAudiences

### Available Operations

* [displayvideoFirstAndThirdPartyAudiencesCreate](#displayvideofirstandthirdpartyaudiencescreate) - Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
* [displayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers](#displayvideofirstandthirdpartyaudienceseditcustomermatchmembers) - Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
* [displayvideoFirstAndThirdPartyAudiencesGet](#displayvideofirstandthirdpartyaudiencesget) - Gets a first and third party audience.
* [displayvideoFirstAndThirdPartyAudiencesList](#displayvideofirstandthirdpartyaudienceslist) - Lists first and third party audiences. The order is defined by the order_by parameter.
* [displayvideoFirstAndThirdPartyAudiencesPatch](#displayvideofirstandthirdpartyaudiencespatch) - Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

## displayvideoFirstAndThirdPartyAudiencesCreate

Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoFirstAndThirdPartyAudiencesCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoFirstAndThirdPartyAudiencesCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoFirstAndThirdPartyAudiencesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContactInfo;
import org.openapis.openapi.models.shared.ContactInfoList;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceAudienceTypeEnum;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceInput;
import org.openapis.openapi.models.shared.MobileDeviceIdList;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoFirstAndThirdPartyAudiencesCreateRequest req = new DisplayvideoFirstAndThirdPartyAudiencesCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                firstAndThirdPartyAudienceInput = new FirstAndThirdPartyAudienceInput() {{
                    appId = "a";
                    audienceType = FirstAndThirdPartyAudienceAudienceTypeEnum.YOUTUBE_USERS;
                    contactInfoList = new ContactInfoList() {{
                        contactInfos = new org.openapis.openapi.models.shared.ContactInfo[]{{
                            add(new ContactInfo() {{
                                countryCode = "LV";
                                hashedEmails = new String[]{{
                                    add("aperiam"),
                                    add("dignissimos"),
                                }};
                                hashedFirstName = "quam";
                                hashedLastName = "modi";
                                hashedPhoneNumbers = new String[]{{
                                    add("iure"),
                                    add("deleniti"),
                                    add("officia"),
                                }};
                                zipCodes = new String[]{{
                                    add("laborum"),
                                    add("dolor"),
                                    add("ad"),
                                }};
                            }}),
                            add(new ContactInfo() {{
                                countryCode = "SY";
                                hashedEmails = new String[]{{
                                    add("molestias"),
                                }};
                                hashedFirstName = "voluptas";
                                hashedLastName = "expedita";
                                hashedPhoneNumbers = new String[]{{
                                    add("maiores"),
                                    add("ea"),
                                }};
                                zipCodes = new String[]{{
                                    add("delectus"),
                                    add("accusamus"),
                                }};
                            }}),
                            add(new ContactInfo() {{
                                countryCode = "VU";
                                hashedEmails = new String[]{{
                                    add("sed"),
                                }};
                                hashedFirstName = "accusantium";
                                hashedLastName = "voluptates";
                                hashedPhoneNumbers = new String[]{{
                                    add("maiores"),
                                    add("quaerat"),
                                    add("numquam"),
                                }};
                                zipCodes = new String[]{{
                                    add("cum"),
                                }};
                            }}),
                        }};
                    }};;
                    description = "incidunt";
                    displayName = "dolores";
                    firstAndThirdPartyAudienceType = FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum.FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_UNSPECIFIED;
                    membershipDurationDays = "nihil";
                    mobileDeviceIdList = new MobileDeviceIdList() {{
                        mobileDeviceIds = new String[]{{
                            add("omnis"),
                            add("excepturi"),
                            add("eos"),
                        }};
                    }};;
                }};;
                accessToken = "quisquam";
                advertiserId = "corrupti";
                alt = AltEnum.PROTO;
                callback = "cum";
                fields = "quibusdam";
                key = "est";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "autem";
                uploadProtocol = "dicta";
            }};            

            DisplayvideoFirstAndThirdPartyAudiencesCreateResponse res = sdk.firstAndThirdPartyAudiences.displayvideoFirstAndThirdPartyAudiencesCreate(req, new DisplayvideoFirstAndThirdPartyAudiencesCreateSecurity("recusandae", "sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.firstAndThirdPartyAudience != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers

Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest;
import org.openapis.openapi.models.operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse;
import org.openapis.openapi.models.operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContactInfo;
import org.openapis.openapi.models.shared.ContactInfoList;
import org.openapis.openapi.models.shared.EditCustomerMatchMembersRequest;
import org.openapis.openapi.models.shared.MobileDeviceIdList;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest req = new DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest("id") {{
                dollarXgafv = XgafvEnum.ONE;
                editCustomerMatchMembersRequest = new EditCustomerMatchMembersRequest() {{
                    addedContactInfoList = new ContactInfoList() {{
                        contactInfos = new org.openapis.openapi.models.shared.ContactInfo[]{{
                            add(new ContactInfo() {{
                                countryCode = "MT";
                                hashedEmails = new String[]{{
                                    add("explicabo"),
                                    add("ullam"),
                                    add("atque"),
                                }};
                                hashedFirstName = "doloribus";
                                hashedLastName = "pariatur";
                                hashedPhoneNumbers = new String[]{{
                                    add("similique"),
                                }};
                                zipCodes = new String[]{{
                                    add("eveniet"),
                                    add("nam"),
                                    add("animi"),
                                }};
                            }}),
                        }};
                    }};;
                    addedMobileDeviceIdList = new MobileDeviceIdList() {{
                        mobileDeviceIds = new String[]{{
                            add("voluptate"),
                            add("voluptatibus"),
                        }};
                    }};;
                    advertiserId = "quam";
                }};;
                accessToken = "nulla";
                alt = AltEnum.JSON;
                callback = "voluptates";
                fields = "a";
                key = "perferendis";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "aliquid";
                uploadProtocol = "dolore";
            }};            

            DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse res = sdk.firstAndThirdPartyAudiences.displayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers(req, new DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity("voluptatem", "illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.editCustomerMatchMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoFirstAndThirdPartyAudiencesGet

Gets a first and third party audience.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoFirstAndThirdPartyAudiencesGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoFirstAndThirdPartyAudiencesGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoFirstAndThirdPartyAudiencesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoFirstAndThirdPartyAudiencesGetRequest req = new DisplayvideoFirstAndThirdPartyAudiencesGetRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                advertiserId = "atque";
                alt = AltEnum.JSON;
                callback = "vitae";
                fields = "quisquam";
                key = "atque";
                oauthToken = "nihil";
                partnerId = "culpa";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "a";
                uploadProtocol = "ad";
            }};            

            DisplayvideoFirstAndThirdPartyAudiencesGetResponse res = sdk.firstAndThirdPartyAudiences.displayvideoFirstAndThirdPartyAudiencesGet(req, new DisplayvideoFirstAndThirdPartyAudiencesGetSecurity("cupiditate", "suscipit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.firstAndThirdPartyAudience != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoFirstAndThirdPartyAudiencesList

Lists first and third party audiences. The order is defined by the order_by parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoFirstAndThirdPartyAudiencesListRequest;
import org.openapis.openapi.models.operations.DisplayvideoFirstAndThirdPartyAudiencesListResponse;
import org.openapis.openapi.models.operations.DisplayvideoFirstAndThirdPartyAudiencesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoFirstAndThirdPartyAudiencesListRequest req = new DisplayvideoFirstAndThirdPartyAudiencesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repellendus";
                advertiserId = "delectus";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "possimus";
                filter = "praesentium";
                key = "neque";
                oauthToken = "quam";
                orderBy = "animi";
                pageSize = 890379L;
                pageToken = "voluptatum";
                partnerId = "voluptatem";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "vitae";
                uploadProtocol = "cumque";
            }};            

            DisplayvideoFirstAndThirdPartyAudiencesListResponse res = sdk.firstAndThirdPartyAudiences.displayvideoFirstAndThirdPartyAudiencesList(req, new DisplayvideoFirstAndThirdPartyAudiencesListSecurity("architecto", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listFirstAndThirdPartyAudiencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoFirstAndThirdPartyAudiencesPatch

Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoFirstAndThirdPartyAudiencesPatchRequest;
import org.openapis.openapi.models.operations.DisplayvideoFirstAndThirdPartyAudiencesPatchResponse;
import org.openapis.openapi.models.operations.DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContactInfo;
import org.openapis.openapi.models.shared.ContactInfoList;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceAudienceTypeEnum;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceInput;
import org.openapis.openapi.models.shared.MobileDeviceIdList;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoFirstAndThirdPartyAudiencesPatchRequest req = new DisplayvideoFirstAndThirdPartyAudiencesPatchRequest("eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                firstAndThirdPartyAudienceInput = new FirstAndThirdPartyAudienceInput() {{
                    appId = "quis";
                    audienceType = FirstAndThirdPartyAudienceAudienceTypeEnum.TAG_BASED;
                    contactInfoList = new ContactInfoList() {{
                        contactInfos = new org.openapis.openapi.models.shared.ContactInfo[]{{
                            add(new ContactInfo() {{
                                countryCode = "MT";
                                hashedEmails = new String[]{{
                                    add("quas"),
                                    add("laboriosam"),
                                    add("ducimus"),
                                }};
                                hashedFirstName = "voluptatum";
                                hashedLastName = "sapiente";
                                hashedPhoneNumbers = new String[]{{
                                    add("dolor"),
                                    add("hic"),
                                    add("iure"),
                                }};
                                zipCodes = new String[]{{
                                    add("autem"),
                                    add("iste"),
                                    add("cupiditate"),
                                }};
                            }}),
                            add(new ContactInfo() {{
                                countryCode = "BA";
                                hashedEmails = new String[]{{
                                    add("a"),
                                    add("dolor"),
                                    add("voluptatum"),
                                }};
                                hashedFirstName = "molestias";
                                hashedLastName = "quod";
                                hashedPhoneNumbers = new String[]{{
                                    add("eaque"),
                                    add("consectetur"),
                                    add("autem"),
                                    add("vitae"),
                                }};
                                zipCodes = new String[]{{
                                    add("incidunt"),
                                    add("modi"),
                                }};
                            }}),
                            add(new ContactInfo() {{
                                countryCode = "MC";
                                hashedEmails = new String[]{{
                                    add("voluptate"),
                                    add("error"),
                                    add("reprehenderit"),
                                    add("reprehenderit"),
                                }};
                                hashedFirstName = "animi";
                                hashedLastName = "consequatur";
                                hashedPhoneNumbers = new String[]{{
                                    add("delectus"),
                                    add("qui"),
                                    add("delectus"),
                                    add("exercitationem"),
                                }};
                                zipCodes = new String[]{{
                                    add("laboriosam"),
                                }};
                            }}),
                        }};
                    }};;
                    description = "doloremque";
                    displayName = "sed";
                    firstAndThirdPartyAudienceType = FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum.FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_FIRST_PARTY;
                    membershipDurationDays = "debitis";
                    mobileDeviceIdList = new MobileDeviceIdList() {{
                        mobileDeviceIds = new String[]{{
                            add("itaque"),
                            add("eveniet"),
                            add("repellat"),
                            add("cupiditate"),
                        }};
                    }};;
                }};;
                accessToken = "adipisci";
                advertiserId = "aliquam";
                alt = AltEnum.JSON;
                callback = "veniam";
                fields = "sed";
                key = "necessitatibus";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "dignissimos";
                updateMask = "itaque";
                uploadType = "explicabo";
                uploadProtocol = "ullam";
            }};            

            DisplayvideoFirstAndThirdPartyAudiencesPatchResponse res = sdk.firstAndThirdPartyAudiences.displayvideoFirstAndThirdPartyAudiencesPatch(req, new DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity("non", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.firstAndThirdPartyAudience != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
