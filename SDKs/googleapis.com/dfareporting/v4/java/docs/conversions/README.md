# conversions

### Available Operations

* [dfareportingConversionsBatchinsert](#dfareportingconversionsbatchinsert) - Inserts conversions.
* [dfareportingConversionsBatchupdate](#dfareportingconversionsbatchupdate) - Updates existing conversions.

## dfareportingConversionsBatchinsert

Inserts conversions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingConversionsBatchinsertRequest;
import org.openapis.openapi.models.operations.DfareportingConversionsBatchinsertResponse;
import org.openapis.openapi.models.operations.DfareportingConversionsBatchinsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Conversion;
import org.openapis.openapi.models.shared.ConversionsBatchInsertRequest;
import org.openapis.openapi.models.shared.CustomFloodlightVariable;
import org.openapis.openapi.models.shared.CustomFloodlightVariableTypeEnum;
import org.openapis.openapi.models.shared.EncryptionInfo;
import org.openapis.openapi.models.shared.EncryptionInfoEncryptionEntityTypeEnum;
import org.openapis.openapi.models.shared.EncryptionInfoEncryptionSourceEnum;
import org.openapis.openapi.models.shared.OfflineUserAddressInfo;
import org.openapis.openapi.models.shared.UserIdentifier;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingConversionsBatchinsertRequest req = new DfareportingConversionsBatchinsertRequest("nesciunt") {{
                dollarXgafv = XgafvEnum.ONE;
                conversionsBatchInsertRequest = new ConversionsBatchInsertRequest() {{
                    conversions = new org.openapis.openapi.models.shared.Conversion[]{{
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "explicabo";
                                    type = CustomFloodlightVariableTypeEnum.U53;
                                    value = "ipsam";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "nemo";
                                    type = CustomFloodlightVariableTypeEnum.U20;
                                    value = "optio";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "libero";
                                    type = CustomFloodlightVariableTypeEnum.U7;
                                    value = "alias";
                                }}),
                            }};
                            dclid = "accusantium";
                            encryptedUserId = "doloremque";
                            encryptedUserIdCandidates = new String[]{{
                                add("tempore"),
                                add("necessitatibus"),
                            }};
                            floodlightActivityId = "reiciendis";
                            floodlightConfigurationId = "incidunt";
                            gclid = "provident";
                            impressionId = "dolores";
                            kind = "illo";
                            limitAdTracking = false;
                            matchId = "recusandae";
                            mobileDeviceId = "quod";
                            nonPersonalizedAd = false;
                            ordinal = "magni";
                            quantity = "sit";
                            timestampMicros = "voluptas";
                            treatmentForUnderage = false;
                            userIdentifiers = new org.openapis.openapi.models.shared.UserIdentifier[]{{
                                add(new UserIdentifier() {{
                                    addressInfo = new OfflineUserAddressInfo() {{
                                        city = "Krajcikboro";
                                        countryCode = "MQ";
                                        hashedFirstName = "amet";
                                        hashedLastName = "ex";
                                        hashedStreetAddress = "aliquid";
                                        postalCode = "75990-9179";
                                        state = "veritatis";
                                    }};
                                    hashedEmail = "provident";
                                    hashedPhoneNumber = "veniam";
                                }}),
                            }};
                            value = 5514.1;
                        }}),
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "facere";
                                    type = CustomFloodlightVariableTypeEnum.U27;
                                    value = "doloremque";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "vero";
                                    type = CustomFloodlightVariableTypeEnum.U2;
                                    value = "sequi";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "reiciendis";
                                    type = CustomFloodlightVariableTypeEnum.U21;
                                    value = "assumenda";
                                }}),
                            }};
                            dclid = "saepe";
                            encryptedUserId = "nobis";
                            encryptedUserIdCandidates = new String[]{{
                                add("quia"),
                                add("natus"),
                                add("molestiae"),
                            }};
                            floodlightActivityId = "facilis";
                            floodlightConfigurationId = "earum";
                            gclid = "ipsum";
                            impressionId = "itaque";
                            kind = "cupiditate";
                            limitAdTracking = false;
                            matchId = "consequatur";
                            mobileDeviceId = "harum";
                            nonPersonalizedAd = false;
                            ordinal = "nobis";
                            quantity = "numquam";
                            timestampMicros = "consequatur";
                            treatmentForUnderage = false;
                            userIdentifiers = new org.openapis.openapi.models.shared.UserIdentifier[]{{
                                add(new UserIdentifier() {{
                                    addressInfo = new OfflineUserAddressInfo() {{
                                        city = "Middletown";
                                        countryCode = "IM";
                                        hashedFirstName = "blanditiis";
                                        hashedLastName = "voluptatibus";
                                        hashedStreetAddress = "nulla";
                                        postalCode = "12037";
                                        state = "libero";
                                    }};
                                    hashedEmail = "dolor";
                                    hashedPhoneNumber = "nesciunt";
                                }}),
                                add(new UserIdentifier() {{
                                    addressInfo = new OfflineUserAddressInfo() {{
                                        city = "Port Deonstead";
                                        countryCode = "CD";
                                        hashedFirstName = "reiciendis";
                                        hashedLastName = "modi";
                                        hashedStreetAddress = "doloribus";
                                        postalCode = "14960";
                                        state = "saepe";
                                    }};
                                    hashedEmail = "voluptatem";
                                    hashedPhoneNumber = "soluta";
                                }}),
                                add(new UserIdentifier() {{
                                    addressInfo = new OfflineUserAddressInfo() {{
                                        city = "Bridgeport";
                                        countryCode = "VI";
                                        hashedFirstName = "deleniti";
                                        hashedLastName = "fugit";
                                        hashedStreetAddress = "inventore";
                                        postalCode = "54580";
                                        state = "similique";
                                    }};
                                    hashedEmail = "eligendi";
                                    hashedPhoneNumber = "impedit";
                                }}),
                                add(new UserIdentifier() {{
                                    addressInfo = new OfflineUserAddressInfo() {{
                                        city = "Kuhicport";
                                        countryCode = "NE";
                                        hashedFirstName = "repudiandae";
                                        hashedLastName = "tempore";
                                        hashedStreetAddress = "voluptate";
                                        postalCode = "40106-3103";
                                        state = "suscipit";
                                    }};
                                    hashedEmail = "rerum";
                                    hashedPhoneNumber = "laboriosam";
                                }}),
                            }};
                            value = 3060.58;
                        }}),
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "unde";
                                    type = CustomFloodlightVariableTypeEnum.U57;
                                    value = "voluptatibus";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "facilis";
                                    type = CustomFloodlightVariableTypeEnum.U5;
                                    value = "officiis";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "nisi";
                                    type = CustomFloodlightVariableTypeEnum.U45;
                                    value = "necessitatibus";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "alias";
                                    type = CustomFloodlightVariableTypeEnum.U59;
                                    value = "ut";
                                }}),
                            }};
                            dclid = "hic";
                            encryptedUserId = "facere";
                            encryptedUserIdCandidates = new String[]{{
                                add("saepe"),
                                add("assumenda"),
                                add("exercitationem"),
                                add("exercitationem"),
                            }};
                            floodlightActivityId = "dolore";
                            floodlightConfigurationId = "sit";
                            gclid = "recusandae";
                            impressionId = "a";
                            kind = "exercitationem";
                            limitAdTracking = false;
                            matchId = "neque";
                            mobileDeviceId = "mollitia";
                            nonPersonalizedAd = false;
                            ordinal = "velit";
                            quantity = "ut";
                            timestampMicros = "est";
                            treatmentForUnderage = false;
                            userIdentifiers = new org.openapis.openapi.models.shared.UserIdentifier[]{{
                                add(new UserIdentifier() {{
                                    addressInfo = new OfflineUserAddressInfo() {{
                                        city = "Kuvalisworth";
                                        countryCode = "UA";
                                        hashedFirstName = "perspiciatis";
                                        hashedLastName = "natus";
                                        hashedStreetAddress = "reprehenderit";
                                        postalCode = "16870";
                                        state = "ad";
                                    }};
                                    hashedEmail = "fugiat";
                                    hashedPhoneNumber = "quas";
                                }}),
                            }};
                            value = 3363.14;
                        }}),
                    }};
                    encryptionInfo = new EncryptionInfo() {{
                        encryptionEntityId = "fuga";
                        encryptionEntityType = EncryptionInfoEncryptionEntityTypeEnum.DFP_NETWORK_CODE;
                        encryptionSource = EncryptionInfoEncryptionSourceEnum.ENCRYPTION_SCOPE_UNKNOWN;
                        kind = "illum";
                    }};;
                    kind = "delectus";
                }};;
                accessToken = "rerum";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "maiores";
                key = "harum";
                oauthToken = "ratione";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "odio";
                uploadProtocol = "non";
            }};            

            DfareportingConversionsBatchinsertResponse res = sdk.conversions.dfareportingConversionsBatchinsert(req, new DfareportingConversionsBatchinsertSecurity("magni", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.conversionsBatchInsertResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingConversionsBatchupdate

Updates existing conversions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingConversionsBatchupdateRequest;
import org.openapis.openapi.models.operations.DfareportingConversionsBatchupdateResponse;
import org.openapis.openapi.models.operations.DfareportingConversionsBatchupdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Conversion;
import org.openapis.openapi.models.shared.ConversionsBatchUpdateRequest;
import org.openapis.openapi.models.shared.CustomFloodlightVariable;
import org.openapis.openapi.models.shared.CustomFloodlightVariableTypeEnum;
import org.openapis.openapi.models.shared.EncryptionInfo;
import org.openapis.openapi.models.shared.EncryptionInfoEncryptionEntityTypeEnum;
import org.openapis.openapi.models.shared.EncryptionInfoEncryptionSourceEnum;
import org.openapis.openapi.models.shared.OfflineUserAddressInfo;
import org.openapis.openapi.models.shared.UserIdentifier;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingConversionsBatchupdateRequest req = new DfareportingConversionsBatchupdateRequest("consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                conversionsBatchUpdateRequest = new ConversionsBatchUpdateRequest() {{
                    conversions = new org.openapis.openapi.models.shared.Conversion[]{{
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "ex";
                                    type = CustomFloodlightVariableTypeEnum.U34;
                                    value = "eum";
                                }}),
                            }};
                            dclid = "et";
                            encryptedUserId = "officiis";
                            encryptedUserIdCandidates = new String[]{{
                                add("culpa"),
                                add("architecto"),
                                add("iure"),
                                add("eveniet"),
                            }};
                            floodlightActivityId = "doloribus";
                            floodlightConfigurationId = "praesentium";
                            gclid = "iste";
                            impressionId = "tempora";
                            kind = "ad";
                            limitAdTracking = false;
                            matchId = "ab";
                            mobileDeviceId = "harum";
                            nonPersonalizedAd = false;
                            ordinal = "facere";
                            quantity = "ducimus";
                            timestampMicros = "nisi";
                            treatmentForUnderage = false;
                            userIdentifiers = new org.openapis.openapi.models.shared.UserIdentifier[]{{
                                add(new UserIdentifier() {{
                                    addressInfo = new OfflineUserAddressInfo() {{
                                        city = "Thousand Oaks";
                                        countryCode = "PM";
                                        hashedFirstName = "nemo";
                                        hashedLastName = "veritatis";
                                        hashedStreetAddress = "molestias";
                                        postalCode = "28619-6823";
                                        state = "quis";
                                    }};
                                    hashedEmail = "quasi";
                                    hashedPhoneNumber = "odit";
                                }}),
                                add(new UserIdentifier() {{
                                    addressInfo = new OfflineUserAddressInfo() {{
                                        city = "Athens-Clarke County";
                                        countryCode = "HR";
                                        hashedFirstName = "nulla";
                                        hashedLastName = "dolore";
                                        hashedStreetAddress = "itaque";
                                        postalCode = "74190";
                                        state = "doloribus";
                                    }};
                                    hashedEmail = "nemo";
                                    hashedPhoneNumber = "dolore";
                                }}),
                                add(new UserIdentifier() {{
                                    addressInfo = new OfflineUserAddressInfo() {{
                                        city = "Felipaview";
                                        countryCode = "LC";
                                        hashedFirstName = "est";
                                        hashedLastName = "consequatur";
                                        hashedStreetAddress = "incidunt";
                                        postalCode = "29006";
                                        state = "architecto";
                                    }};
                                    hashedEmail = "quibusdam";
                                    hashedPhoneNumber = "autem";
                                }}),
                                add(new UserIdentifier() {{
                                    addressInfo = new OfflineUserAddressInfo() {{
                                        city = "Redding";
                                        countryCode = "MN";
                                        hashedFirstName = "modi";
                                        hashedLastName = "ratione";
                                        hashedStreetAddress = "aliquam";
                                        postalCode = "33802";
                                        state = "aut";
                                    }};
                                    hashedEmail = "molestias";
                                    hashedPhoneNumber = "quaerat";
                                }}),
                            }};
                            value = 9999.32;
                        }}),
                    }};
                    encryptionInfo = new EncryptionInfo() {{
                        encryptionEntityId = "expedita";
                        encryptionEntityType = EncryptionInfoEncryptionEntityTypeEnum.ADWORDS_CUSTOMER;
                        encryptionSource = EncryptionInfoEncryptionSourceEnum.AD_SERVING;
                        kind = "quis";
                    }};;
                    kind = "cumque";
                }};;
                accessToken = "cumque";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "tenetur";
                key = "ipsam";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "doloremque";
                uploadProtocol = "illo";
            }};            

            DfareportingConversionsBatchupdateResponse res = sdk.conversions.dfareportingConversionsBatchupdate(req, new DfareportingConversionsBatchupdateSecurity("reiciendis", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.conversionsBatchUpdateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
