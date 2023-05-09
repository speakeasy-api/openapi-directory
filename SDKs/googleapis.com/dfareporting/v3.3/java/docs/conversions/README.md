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
                            encryptedUserId = "earum";
                            encryptedUserIdCandidates = new String[]{{
                                add("impedit"),
                                add("reiciendis"),
                                add("ex"),
                                add("tempore"),
                            }};
                            floodlightActivityId = "provident";
                            floodlightConfigurationId = "provident";
                            gclid = "soluta";
                            kind = "maxime";
                            limitAdTracking = false;
                            matchId = "commodi";
                            mobileDeviceId = "consectetur";
                            nonPersonalizedAd = false;
                            ordinal = "corporis";
                            quantity = "nisi";
                            timestampMicros = "aspernatur";
                            treatmentForUnderage = false;
                            value = 9104.28;
                        }}),
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "asperiores";
                                    type = CustomFloodlightVariableTypeEnum.U84;
                                    value = "delectus";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "enim";
                                    type = CustomFloodlightVariableTypeEnum.U37;
                                    value = "porro";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "dolores";
                                    type = CustomFloodlightVariableTypeEnum.U62;
                                    value = "labore";
                                }}),
                            }};
                            encryptedUserId = "porro";
                            encryptedUserIdCandidates = new String[]{{
                                add("ea"),
                            }};
                            floodlightActivityId = "consequatur";
                            floodlightConfigurationId = "nobis";
                            gclid = "accusantium";
                            kind = "ea";
                            limitAdTracking = false;
                            matchId = "laborum";
                            mobileDeviceId = "et";
                            nonPersonalizedAd = false;
                            ordinal = "fugit";
                            quantity = "quos";
                            timestampMicros = "molestiae";
                            treatmentForUnderage = false;
                            value = 4543.29;
                        }}),
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "numquam";
                                    type = CustomFloodlightVariableTypeEnum.U92;
                                    value = "debitis";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "earum";
                                    type = CustomFloodlightVariableTypeEnum.U39;
                                    value = "assumenda";
                                }}),
                            }};
                            encryptedUserId = "doloremque";
                            encryptedUserIdCandidates = new String[]{{
                                add("suscipit"),
                                add("temporibus"),
                                add("vel"),
                                add("itaque"),
                            }};
                            floodlightActivityId = "nulla";
                            floodlightConfigurationId = "excepturi";
                            gclid = "quod";
                            kind = "in";
                            limitAdTracking = false;
                            matchId = "nesciunt";
                            mobileDeviceId = "temporibus";
                            nonPersonalizedAd = false;
                            ordinal = "temporibus";
                            quantity = "eum";
                            timestampMicros = "non";
                            treatmentForUnderage = false;
                            value = 2855.44;
                        }}),
                    }};
                    encryptionInfo = new EncryptionInfo() {{
                        encryptionEntityId = "nostrum";
                        encryptionEntityType = EncryptionInfoEncryptionEntityTypeEnum.DBM_PARTNER;
                        encryptionSource = EncryptionInfoEncryptionSourceEnum.ENCRYPTION_SCOPE_UNKNOWN;
                        kind = "corporis";
                    }};;
                    kind = "ipsa";
                }};;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "blanditiis";
                fields = "recusandae";
                key = "deleniti";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "quibusdam";
                uploadProtocol = "adipisci";
            }};            

            DfareportingConversionsBatchinsertResponse res = sdk.conversions.dfareportingConversionsBatchinsert(req, new DfareportingConversionsBatchinsertSecurity("minus", "veniam") {{
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

            DfareportingConversionsBatchupdateRequest req = new DfareportingConversionsBatchupdateRequest("id") {{
                dollarXgafv = XgafvEnum.ONE;
                conversionsBatchUpdateRequest = new ConversionsBatchUpdateRequest() {{
                    conversions = new org.openapis.openapi.models.shared.Conversion[]{{
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "quod";
                                    type = CustomFloodlightVariableTypeEnum.U17;
                                    value = "incidunt";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "fugit";
                                    type = CustomFloodlightVariableTypeEnum.U79;
                                    value = "odio";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "quidem";
                                    type = CustomFloodlightVariableTypeEnum.U44;
                                    value = "aliquid";
                                }}),
                            }};
                            encryptedUserId = "culpa";
                            encryptedUserIdCandidates = new String[]{{
                                add("reiciendis"),
                            }};
                            floodlightActivityId = "ipsum";
                            floodlightConfigurationId = "doloremque";
                            gclid = "quod";
                            kind = "dignissimos";
                            limitAdTracking = false;
                            matchId = "non";
                            mobileDeviceId = "facere";
                            nonPersonalizedAd = false;
                            ordinal = "repellat";
                            quantity = "exercitationem";
                            timestampMicros = "quidem";
                            treatmentForUnderage = false;
                            value = 4082.08;
                        }}),
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "vitae";
                                    type = CustomFloodlightVariableTypeEnum.U58;
                                    value = "voluptatum";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "iste";
                                    type = CustomFloodlightVariableTypeEnum.U6;
                                    value = "reiciendis";
                                }}),
                            }};
                            encryptedUserId = "magnam";
                            encryptedUserIdCandidates = new String[]{{
                                add("est"),
                            }};
                            floodlightActivityId = "tempora";
                            floodlightConfigurationId = "nobis";
                            gclid = "expedita";
                            kind = "modi";
                            limitAdTracking = false;
                            matchId = "adipisci";
                            mobileDeviceId = "atque";
                            nonPersonalizedAd = false;
                            ordinal = "at";
                            quantity = "rem";
                            timestampMicros = "exercitationem";
                            treatmentForUnderage = false;
                            value = 7311.86;
                        }}),
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "laboriosam";
                                    type = CustomFloodlightVariableTypeEnum.U5;
                                    value = "minima";
                                }}),
                            }};
                            encryptedUserId = "perspiciatis";
                            encryptedUserIdCandidates = new String[]{{
                                add("assumenda"),
                            }};
                            floodlightActivityId = "reprehenderit";
                            floodlightConfigurationId = "tempora";
                            gclid = "ad";
                            kind = "voluptates";
                            limitAdTracking = false;
                            matchId = "sequi";
                            mobileDeviceId = "eligendi";
                            nonPersonalizedAd = false;
                            ordinal = "consequuntur";
                            quantity = "quae";
                            timestampMicros = "veniam";
                            treatmentForUnderage = false;
                            value = 5726.33;
                        }}),
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "excepturi";
                                    type = CustomFloodlightVariableTypeEnum.U79;
                                    value = "nesciunt";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "maiores";
                                    type = CustomFloodlightVariableTypeEnum.U34;
                                    value = "autem";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "esse";
                                    type = CustomFloodlightVariableTypeEnum.U89;
                                    value = "aperiam";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "itaque";
                                    type = CustomFloodlightVariableTypeEnum.U15;
                                    value = "corporis";
                                }}),
                            }};
                            encryptedUserId = "consequuntur";
                            encryptedUserIdCandidates = new String[]{{
                                add("suscipit"),
                                add("quis"),
                            }};
                            floodlightActivityId = "nobis";
                            floodlightConfigurationId = "beatae";
                            gclid = "repellendus";
                            kind = "ex";
                            limitAdTracking = false;
                            matchId = "consequuntur";
                            mobileDeviceId = "delectus";
                            nonPersonalizedAd = false;
                            ordinal = "nobis";
                            quantity = "possimus";
                            timestampMicros = "laborum";
                            treatmentForUnderage = false;
                            value = 7618.35;
                        }}),
                    }};
                    encryptionInfo = new EncryptionInfo() {{
                        encryptionEntityId = "debitis";
                        encryptionEntityType = EncryptionInfoEncryptionEntityTypeEnum.ENCRYPTION_ENTITY_TYPE_UNKNOWN;
                        encryptionSource = EncryptionInfoEncryptionSourceEnum.DATA_TRANSFER;
                        kind = "consequatur";
                    }};;
                    kind = "sunt";
                }};;
                accessToken = "odit";
                alt = AltEnum.JSON;
                callback = "laboriosam";
                fields = "quod";
                key = "repudiandae";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "sequi";
                uploadProtocol = "sint";
            }};            

            DfareportingConversionsBatchupdateResponse res = sdk.conversions.dfareportingConversionsBatchupdate(req, new DfareportingConversionsBatchupdateSecurity("accusamus", "deleniti") {{
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
