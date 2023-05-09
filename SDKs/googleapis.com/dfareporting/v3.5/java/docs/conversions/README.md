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

            DfareportingConversionsBatchinsertRequest req = new DfareportingConversionsBatchinsertRequest("mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                conversionsBatchInsertRequest = new ConversionsBatchInsertRequest() {{
                    conversions = new org.openapis.openapi.models.shared.Conversion[]{{
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "inventore";
                                    type = CustomFloodlightVariableTypeEnum.U43;
                                    value = "modi";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "dicta";
                                    type = CustomFloodlightVariableTypeEnum.U59;
                                    value = "non";
                                }}),
                            }};
                            dclid = "dolore";
                            encryptedUserId = "soluta";
                            encryptedUserIdCandidates = new String[]{{
                                add("sit"),
                                add("asperiores"),
                                add("aspernatur"),
                            }};
                            floodlightActivityId = "officiis";
                            floodlightConfigurationId = "sit";
                            gclid = "occaecati";
                            kind = "nulla";
                            limitAdTracking = false;
                            matchId = "ab";
                            mobileDeviceId = "natus";
                            nonPersonalizedAd = false;
                            ordinal = "possimus";
                            quantity = "magni";
                            timestampMicros = "a";
                            treatmentForUnderage = false;
                            value = 7687.72;
                        }}),
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "delectus";
                                    type = CustomFloodlightVariableTypeEnum.U62;
                                    value = "earum";
                                }}),
                            }};
                            dclid = "fugit";
                            encryptedUserId = "repudiandae";
                            encryptedUserIdCandidates = new String[]{{
                                add("consequatur"),
                            }};
                            floodlightActivityId = "nemo";
                            floodlightConfigurationId = "provident";
                            gclid = "numquam";
                            kind = "numquam";
                            limitAdTracking = false;
                            matchId = "tempore";
                            mobileDeviceId = "molestias";
                            nonPersonalizedAd = false;
                            ordinal = "amet";
                            quantity = "enim";
                            timestampMicros = "illum";
                            treatmentForUnderage = false;
                            value = 1536.66;
                        }}),
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "reprehenderit";
                                    type = CustomFloodlightVariableTypeEnum.U66;
                                    value = "ducimus";
                                }}),
                            }};
                            dclid = "dolores";
                            encryptedUserId = "asperiores";
                            encryptedUserIdCandidates = new String[]{{
                                add("doloremque"),
                                add("blanditiis"),
                                add("magnam"),
                            }};
                            floodlightActivityId = "excepturi";
                            floodlightConfigurationId = "fugiat";
                            gclid = "laboriosam";
                            kind = "id";
                            limitAdTracking = false;
                            matchId = "itaque";
                            mobileDeviceId = "assumenda";
                            nonPersonalizedAd = false;
                            ordinal = "quaerat";
                            quantity = "id";
                            timestampMicros = "eveniet";
                            treatmentForUnderage = false;
                            value = 7595.37;
                        }}),
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "dignissimos";
                                    type = CustomFloodlightVariableTypeEnum.U37;
                                    value = "neque";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "esse";
                                    type = CustomFloodlightVariableTypeEnum.U82;
                                    value = "at";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "excepturi";
                                    type = CustomFloodlightVariableTypeEnum.U19;
                                    value = "odit";
                                }}),
                            }};
                            dclid = "quia";
                            encryptedUserId = "maxime";
                            encryptedUserIdCandidates = new String[]{{
                                add("sapiente"),
                                add("maiores"),
                                add("exercitationem"),
                            }};
                            floodlightActivityId = "ducimus";
                            floodlightConfigurationId = "dolore";
                            gclid = "iste";
                            kind = "inventore";
                            limitAdTracking = false;
                            matchId = "error";
                            mobileDeviceId = "id";
                            nonPersonalizedAd = false;
                            ordinal = "harum";
                            quantity = "sapiente";
                            timestampMicros = "laborum";
                            treatmentForUnderage = false;
                            value = 1359.92;
                        }}),
                    }};
                    encryptionInfo = new EncryptionInfo() {{
                        encryptionEntityId = "vero";
                        encryptionEntityType = EncryptionInfoEncryptionEntityTypeEnum.DBM_PARTNER;
                        encryptionSource = EncryptionInfoEncryptionSourceEnum.AD_SERVING;
                        kind = "quasi";
                    }};;
                    kind = "tenetur";
                }};;
                accessToken = "accusantium";
                alt = AltEnum.PROTO;
                callback = "id";
                fields = "tempora";
                key = "pariatur";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "aliquid";
                uploadProtocol = "vero";
            }};            

            DfareportingConversionsBatchinsertResponse res = sdk.conversions.dfareportingConversionsBatchinsert(req, new DfareportingConversionsBatchinsertSecurity("reiciendis", "dicta") {{
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

            DfareportingConversionsBatchupdateRequest req = new DfareportingConversionsBatchupdateRequest("sit") {{
                dollarXgafv = XgafvEnum.ONE;
                conversionsBatchUpdateRequest = new ConversionsBatchUpdateRequest() {{
                    conversions = new org.openapis.openapi.models.shared.Conversion[]{{
                        add(new Conversion() {{
                            childDirectedTreatment = false;
                            customVariables = new org.openapis.openapi.models.shared.CustomFloodlightVariable[]{{
                                add(new CustomFloodlightVariable() {{
                                    kind = "iure";
                                    type = CustomFloodlightVariableTypeEnum.U51;
                                    value = "perspiciatis";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "omnis";
                                    type = CustomFloodlightVariableTypeEnum.U95;
                                    value = "accusantium";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "minus";
                                    type = CustomFloodlightVariableTypeEnum.U13;
                                    value = "accusantium";
                                }}),
                                add(new CustomFloodlightVariable() {{
                                    kind = "ipsa";
                                    type = CustomFloodlightVariableTypeEnum.U10;
                                    value = "saepe";
                                }}),
                            }};
                            dclid = "quia";
                            encryptedUserId = "aspernatur";
                            encryptedUserIdCandidates = new String[]{{
                                add("illum"),
                                add("veniam"),
                                add("exercitationem"),
                                add("quod"),
                            }};
                            floodlightActivityId = "quod";
                            floodlightConfigurationId = "alias";
                            gclid = "nemo";
                            kind = "molestias";
                            limitAdTracking = false;
                            matchId = "modi";
                            mobileDeviceId = "similique";
                            nonPersonalizedAd = false;
                            ordinal = "quasi";
                            quantity = "laudantium";
                            timestampMicros = "ut";
                            treatmentForUnderage = false;
                            value = 8214.87;
                        }}),
                    }};
                    encryptionInfo = new EncryptionInfo() {{
                        encryptionEntityId = "nihil";
                        encryptionEntityType = EncryptionInfoEncryptionEntityTypeEnum.DCM_ADVERTISER;
                        encryptionSource = EncryptionInfoEncryptionSourceEnum.DATA_TRANSFER;
                        kind = "omnis";
                    }};;
                    kind = "voluptate";
                }};;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                callback = "cumque";
                fields = "atque";
                key = "explicabo";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "commodi";
                uploadProtocol = "enim";
            }};            

            DfareportingConversionsBatchupdateResponse res = sdk.conversions.dfareportingConversionsBatchupdate(req, new DfareportingConversionsBatchupdateSecurity("harum", "aut") {{
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
