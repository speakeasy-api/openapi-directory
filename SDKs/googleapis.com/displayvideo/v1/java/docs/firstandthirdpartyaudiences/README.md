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
                    appId = "tempore";
                    audienceType = FirstAndThirdPartyAudienceAudienceTypeEnum.FREQUENCY_CAP;
                    contactInfoList = new ContactInfoList() {{
                        contactInfos = new org.openapis.openapi.models.shared.ContactInfo[]{{
                            add(new ContactInfo() {{
                                countryCode = "MR";
                                hashedEmails = new String[]{{
                                    add("laboriosam"),
                                    add("ducimus"),
                                    add("voluptatum"),
                                }};
                                hashedFirstName = "sapiente";
                                hashedLastName = "deserunt";
                                hashedPhoneNumbers = new String[]{{
                                    add("hic"),
                                }};
                                zipCodes = new String[]{{
                                    add("sint"),
                                    add("autem"),
                                }};
                            }}),
                            add(new ContactInfo() {{
                                countryCode = "MT";
                                hashedEmails = new String[]{{
                                    add("ab"),
                                    add("fuga"),
                                    add("a"),
                                }};
                                hashedFirstName = "dolor";
                                hashedLastName = "voluptatum";
                                hashedPhoneNumbers = new String[]{{
                                    add("quod"),
                                    add("repudiandae"),
                                    add("eaque"),
                                }};
                                zipCodes = new String[]{{
                                    add("autem"),
                                }};
                            }}),
                            add(new ContactInfo() {{
                                countryCode = "BN";
                                hashedEmails = new String[]{{
                                    add("incidunt"),
                                    add("modi"),
                                }};
                                hashedFirstName = "quos";
                                hashedLastName = "minus";
                                hashedPhoneNumbers = new String[]{{
                                    add("error"),
                                    add("reprehenderit"),
                                }};
                                zipCodes = new String[]{{
                                    add("animi"),
                                    add("consequatur"),
                                }};
                            }}),
                        }};
                    }};;
                    description = "voluptates";
                    displayName = "delectus";
                    firstAndThirdPartyAudienceType = FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum.FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_UNSPECIFIED;
                    membershipDurationDays = "delectus";
                    mobileDeviceIdList = new MobileDeviceIdList() {{
                        mobileDeviceIds = new String[]{{
                            add("ipsum"),
                            add("laboriosam"),
                        }};
                    }};;
                }};;
                accessToken = "doloremque";
                advertiserId = "sed";
                alt = AltEnum.MEDIA;
                callback = "debitis";
                fields = "a";
                key = "itaque";
                oauthToken = "eveniet";
                prettyPrint = false;
                quotaUser = "repellat";
                uploadType = "cupiditate";
                uploadProtocol = "adipisci";
            }};            

            DisplayvideoFirstAndThirdPartyAudiencesCreateResponse res = sdk.firstAndThirdPartyAudiences.displayvideoFirstAndThirdPartyAudiencesCreate(req, new DisplayvideoFirstAndThirdPartyAudiencesCreateSecurity("aliquam", "illo") {{
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

            DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest req = new DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest("veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                editCustomerMatchMembersRequest = new EditCustomerMatchMembersRequest() {{
                    addedContactInfoList = new ContactInfoList() {{
                        contactInfos = new org.openapis.openapi.models.shared.ContactInfo[]{{
                            add(new ContactInfo() {{
                                countryCode = "SN";
                                hashedEmails = new String[]{{
                                    add("itaque"),
                                    add("explicabo"),
                                }};
                                hashedFirstName = "ullam";
                                hashedLastName = "non";
                                hashedPhoneNumbers = new String[]{{
                                    add("incidunt"),
                                    add("quod"),
                                    add("sunt"),
                                    add("ullam"),
                                }};
                                zipCodes = new String[]{{
                                    add("illum"),
                                    add("voluptates"),
                                }};
                            }}),
                            add(new ContactInfo() {{
                                countryCode = "NA";
                                hashedEmails = new String[]{{
                                    add("in"),
                                    add("illo"),
                                    add("voluptate"),
                                }};
                                hashedFirstName = "consequatur";
                                hashedLastName = "delectus";
                                hashedPhoneNumbers = new String[]{{
                                    add("dolore"),
                                    add("nemo"),
                                }};
                                zipCodes = new String[]{{
                                    add("quo"),
                                    add("maxime"),
                                    add("delectus"),
                                }};
                            }}),
                            add(new ContactInfo() {{
                                countryCode = "HM";
                                hashedEmails = new String[]{{
                                    add("quam"),
                                    add("fuga"),
                                }};
                                hashedFirstName = "officia";
                                hashedLastName = "repellat";
                                hashedPhoneNumbers = new String[]{{
                                    add("soluta"),
                                    add("tempore"),
                                    add("culpa"),
                                }};
                                zipCodes = new String[]{{
                                    add("inventore"),
                                    add("atque"),
                                    add("ad"),
                                    add("sapiente"),
                                }};
                            }}),
                            add(new ContactInfo() {{
                                countryCode = "TW";
                                hashedEmails = new String[]{{
                                    add("nesciunt"),
                                    add("ab"),
                                }};
                                hashedFirstName = "quibusdam";
                                hashedLastName = "suscipit";
                                hashedPhoneNumbers = new String[]{{
                                    add("delectus"),
                                    add("nemo"),
                                    add("cumque"),
                                }};
                                zipCodes = new String[]{{
                                    add("sequi"),
                                    add("atque"),
                                    add("maiores"),
                                }};
                            }}),
                        }};
                    }};;
                    addedMobileDeviceIdList = new MobileDeviceIdList() {{
                        mobileDeviceIds = new String[]{{
                            add("rerum"),
                            add("totam"),
                            add("quod"),
                        }};
                    }};;
                    advertiserId = "aspernatur";
                }};;
                accessToken = "eaque";
                alt = AltEnum.PROTO;
                callback = "nam";
                fields = "ex";
                key = "odio";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "ut";
                uploadProtocol = "distinctio";
            }};            

            DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse res = sdk.firstAndThirdPartyAudiences.displayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers(req, new DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity("eius", "eos") {{
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

            DisplayvideoFirstAndThirdPartyAudiencesGetRequest req = new DisplayvideoFirstAndThirdPartyAudiencesGetRequest("veniam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                advertiserId = "occaecati";
                alt = AltEnum.PROTO;
                callback = "laboriosam";
                fields = "eos";
                key = "amet";
                oauthToken = "incidunt";
                partnerId = "porro";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "reiciendis";
                uploadProtocol = "voluptate";
            }};            

            DisplayvideoFirstAndThirdPartyAudiencesGetResponse res = sdk.firstAndThirdPartyAudiences.displayvideoFirstAndThirdPartyAudiencesGet(req, new DisplayvideoFirstAndThirdPartyAudiencesGetSecurity("tempore", "in") {{
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
                accessToken = "possimus";
                advertiserId = "tenetur";
                alt = AltEnum.PROTO;
                callback = "expedita";
                fields = "iusto";
                filter = "esse";
                key = "harum";
                oauthToken = "ad";
                orderBy = "quod";
                pageSize = 188705L;
                pageToken = "totam";
                partnerId = "vero";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "nam";
                uploadProtocol = "officia";
            }};            

            DisplayvideoFirstAndThirdPartyAudiencesListResponse res = sdk.firstAndThirdPartyAudiences.displayvideoFirstAndThirdPartyAudiencesList(req, new DisplayvideoFirstAndThirdPartyAudiencesListSecurity("maiores", "cupiditate") {{
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

            DisplayvideoFirstAndThirdPartyAudiencesPatchRequest req = new DisplayvideoFirstAndThirdPartyAudiencesPatchRequest("illo") {{
                dollarXgafv = XgafvEnum.TWO;
                firstAndThirdPartyAudienceInput = new FirstAndThirdPartyAudienceInput() {{
                    appId = "enim";
                    audienceType = FirstAndThirdPartyAudienceAudienceTypeEnum.AUDIENCE_TYPE_UNSPECIFIED;
                    contactInfoList = new ContactInfoList() {{
                        contactInfos = new org.openapis.openapi.models.shared.ContactInfo[]{{
                            add(new ContactInfo() {{
                                countryCode = "TV";
                                hashedEmails = new String[]{{
                                    add("deleniti"),
                                    add("provident"),
                                    add("aut"),
                                    add("dolorum"),
                                }};
                                hashedFirstName = "nostrum";
                                hashedLastName = "tempora";
                                hashedPhoneNumbers = new String[]{{
                                    add("numquam"),
                                    add("odio"),
                                    add("nostrum"),
                                }};
                                zipCodes = new String[]{{
                                    add("veritatis"),
                                    add("autem"),
                                    add("earum"),
                                    add("minima"),
                                }};
                            }}),
                            add(new ContactInfo() {{
                                countryCode = "ID";
                                hashedEmails = new String[]{{
                                    add("nesciunt"),
                                    add("corrupti"),
                                    add("nostrum"),
                                    add("fuga"),
                                }};
                                hashedFirstName = "sequi";
                                hashedLastName = "maxime";
                                hashedPhoneNumbers = new String[]{{
                                    add("laborum"),
                                    add("eligendi"),
                                }};
                                zipCodes = new String[]{{
                                    add("adipisci"),
                                    add("sunt"),
                                }};
                            }}),
                        }};
                    }};;
                    description = "rerum";
                    displayName = "occaecati";
                    firstAndThirdPartyAudienceType = FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum.FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_FIRST_PARTY;
                    membershipDurationDays = "necessitatibus";
                    mobileDeviceIdList = new MobileDeviceIdList() {{
                        mobileDeviceIds = new String[]{{
                            add("autem"),
                        }};
                    }};;
                }};;
                accessToken = "optio";
                advertiserId = "eveniet";
                alt = AltEnum.PROTO;
                callback = "blanditiis";
                fields = "a";
                key = "natus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "repellendus";
                updateMask = "facilis";
                uploadType = "molestias";
                uploadProtocol = "dolore";
            }};            

            DisplayvideoFirstAndThirdPartyAudiencesPatchResponse res = sdk.firstAndThirdPartyAudiences.displayvideoFirstAndThirdPartyAudiencesPatch(req, new DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity("et", "accusantium") {{
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
