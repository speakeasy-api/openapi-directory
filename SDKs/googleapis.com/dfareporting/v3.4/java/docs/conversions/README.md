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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingConversionsBatchinsertRequest req = new DfareportingConversionsBatchinsertRequest("quia") {{
                dollarXgafv = XgafvEnum.TWO;
                conversionsBatchInsertRequest = new ConversionsBatchInsertRequest() {{
                    conversions = new org.openapis.openapi.models.shared.Conversion[]{{
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "eius";
                                    type = CustomFloodlightVariableTypeEnum.U59;
                                    value = "nisi";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "placeat";
                                    type = CustomFloodlightVariableTypeEnum.U74;
                                    value = "facere";
                                }}),
                            }};
                            dclid = "earum";
                            encryptedUserId = "debitis";
                            encryptedUserIdCandidates = new String[]{{
                                add("reiciendis"),
                                add("ex"),
                                add("tempore"),
                                add("provident"),
                            }};
                            floodlightActivityId = "provident";
                            floodlightConfigurationId = "soluta";
                            gclid = "maxime";
                            kind = "commodi";
                            limitAdTracking = false;
                            matchId = "consectetur";
                            mobileDeviceId = "corporis";
                            nonPersonalizedAd = false;
                            ordinal = "nisi";
                            quantity = "aspernatur";
                            timestampMicros = "eveniet";
                            treatmentForUnderage = false;
                            value = 7362.61;
                        }}),
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "temporibus";
                                    type = CustomFloodlightVariableTypeEnum.U97;
                                    value = "enim";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "ipsam";
                                    type = CustomFloodlightVariableTypeEnum.U79;
                                    value = "dolores";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "iste";
                                    type = CustomFloodlightVariableTypeEnum.U29;
                                    value = "porro";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "eaque";
                                    type = CustomFloodlightVariableTypeEnum.U42;
                                    value = "consequatur";
                                }}),
                            }};
                            dclid = "nobis";
                            encryptedUserId = "accusantium";
                            encryptedUserIdCandidates = new String[]{{
                                add("laborum"),
                                add("et"),
                            }};
                            floodlightActivityId = "fugit";
                            floodlightConfigurationId = "quos";
                            gclid = "molestiae";
                            kind = "voluptate";
                            limitAdTracking = false;
                            matchId = "autem";
                            mobileDeviceId = "numquam";
                            nonPersonalizedAd = false;
                            ordinal = "voluptates";
                            quantity = "debitis";
                            timestampMicros = "earum";
                            treatmentForUnderage = false;
                            value = 3828.53;
                        }}),
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "doloremque";
                                    type = CustomFloodlightVariableTypeEnum.U79;
                                    value = "suscipit";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "temporibus";
                                    type = CustomFloodlightVariableTypeEnum.U43;
                                    value = "itaque";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "nulla";
                                    type = CustomFloodlightVariableTypeEnum.U57;
                                    value = "quod";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "in";
                                    type = CustomFloodlightVariableTypeEnum.U20;
                                    value = "temporibus";
                                }}),
                            }};
                            dclid = "temporibus";
                            encryptedUserId = "eum";
                            encryptedUserIdCandidates = new String[]{{
                                add("ut"),
                            }};
                            floodlightActivityId = "nostrum";
                            floodlightConfigurationId = "dignissimos";
                            gclid = "illo";
                            kind = "corporis";
                            limitAdTracking = false;
                            matchId = "ipsa";
                            mobileDeviceId = "occaecati";
                            nonPersonalizedAd = false;
                            ordinal = "dolorum";
                            quantity = "blanditiis";
                            timestampMicros = "recusandae";
                            treatmentForUnderage = false;
                            value = 5335.63;
                        }}),
                    }};
                    encryptionInfo = new EncryptionInfo() {{
                        encryptionEntityId = "dignissimos";
                        encryptionEntityType = EncryptionInfoEncryptionEntityTypeEnum.ENCRYPTION_ENTITY_TYPE_UNKNOWN;
                        encryptionSource = EncryptionInfoEncryptionSourceEnum.DATA_TRANSFER;
                        kind = "adipisci";
                    }};;
                    kind = "minus";
                }};;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "architecto";
                fields = "maiores";
                key = "perspiciatis";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "incidunt";
                uploadProtocol = "fugit";
            }};            

            DfareportingConversionsBatchinsertResponse res = sdk.conversions.dfareportingConversionsBatchinsert(req, new DfareportingConversionsBatchinsertSecurity("quisquam", "odio") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingConversionsBatchupdateRequest req = new DfareportingConversionsBatchupdateRequest("quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                conversionsBatchUpdateRequest = new ConversionsBatchUpdateRequest() {{
                    conversions = new org.openapis.openapi.models.shared.Conversion[]{{
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "illo";
                                    type = CustomFloodlightVariableTypeEnum.U98;
                                    value = "ipsum";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "doloremque";
                                    type = CustomFloodlightVariableTypeEnum.U80;
                                    value = "dignissimos";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "non";
                                    type = CustomFloodlightVariableTypeEnum.U82;
                                    value = "repellat";
                                }}),
                            }};
                            dclid = "exercitationem";
                            encryptedUserId = "quidem";
                            encryptedUserIdCandidates = new String[]{{
                                add("molestiae"),
                                add("vitae"),
                            }};
                            floodlightActivityId = "excepturi";
                            floodlightConfigurationId = "voluptatum";
                            gclid = "iste";
                            kind = "eaque";
                            limitAdTracking = false;
                            matchId = "reiciendis";
                            mobileDeviceId = "magnam";
                            nonPersonalizedAd = false;
                            ordinal = "consequuntur";
                            quantity = "est";
                            timestampMicros = "tempora";
                            treatmentForUnderage = false;
                            value = 7498.63;
                        }}),
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "modi";
                                    type = CustomFloodlightVariableTypeEnum.U24;
                                    value = "atque";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "at";
                                    type = CustomFloodlightVariableTypeEnum.U53;
                                    value = "exercitationem";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "tempore";
                                    type = CustomFloodlightVariableTypeEnum.U19;
                                    value = "laboriosam";
                                }}),
                            }};
                            dclid = "aperiam";
                            encryptedUserId = "minima";
                            encryptedUserIdCandidates = new String[]{{
                                add("dicta"),
                                add("assumenda"),
                                add("reprehenderit"),
                            }};
                            floodlightActivityId = "tempora";
                            floodlightConfigurationId = "ad";
                            gclid = "voluptates";
                            kind = "sequi";
                            limitAdTracking = false;
                            matchId = "eligendi";
                            mobileDeviceId = "consequuntur";
                            nonPersonalizedAd = false;
                            ordinal = "quae";
                            quantity = "veniam";
                            timestampMicros = "sint";
                            treatmentForUnderage = false;
                            value = 7915.17;
                        }}),
                    }};
                    encryptionInfo = new EncryptionInfo() {{
                        encryptionEntityId = "excepturi";
                        encryptionEntityType = EncryptionInfoEncryptionEntityTypeEnum.ADWORDS_CUSTOMER;
                        encryptionSource = EncryptionInfoEncryptionSourceEnum.ENCRYPTION_SCOPE_UNKNOWN;
                        kind = "maiores";
                    }};;
                    kind = "veniam";
                }};;
                accessToken = "autem";
                alt = AltEnum.MEDIA;
                callback = "officiis";
                fields = "aperiam";
                key = "itaque";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "consequuntur";
                uploadProtocol = "odio";
            }};            

            DfareportingConversionsBatchupdateResponse res = sdk.conversions.dfareportingConversionsBatchupdate(req, new DfareportingConversionsBatchupdateSecurity("suscipit", "quis") {{
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
