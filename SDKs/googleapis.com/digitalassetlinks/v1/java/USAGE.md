<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DigitalassetlinksAssetlinksBulkCheckRequest;
import org.openapis.openapi.models.operations.DigitalassetlinksAssetlinksBulkCheckResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BulkCheckRequest;
import org.openapis.openapi.models.shared.StatementTemplate;
import org.openapis.openapi.models.shared.Asset;
import org.openapis.openapi.models.shared.WebAsset;
import org.openapis.openapi.models.shared.AndroidAppAsset;
import org.openapis.openapi.models.shared.CertificateInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DigitalassetlinksAssetlinksBulkCheckRequest req = new DigitalassetlinksAssetlinksBulkCheckRequest() {{
                dollarXgafv = "2";
                bulkCheckRequest = new BulkCheckRequest() {{
                    allowGoogleInternalDataSources = false;
                    defaultRelation = "provident";
                    defaultSource = new Asset() {{
                        androidApp = new AndroidAppAsset() {{
                            certificate = new CertificateInfo() {{
                                sha256Fingerprint = "distinctio";
                            }};
                            packageName = "quibusdam";
                        }};
                        web = new WebAsset() {{
                            site = "unde";
                        }};
                    }};
                    defaultTarget = new Asset() {{
                        androidApp = new AndroidAppAsset() {{
                            certificate = new CertificateInfo() {{
                                sha256Fingerprint = "nulla";
                            }};
                            packageName = "corrupti";
                        }};
                        web = new WebAsset() {{
                            site = "illum";
                        }};
                    }};
                    skipCacheLookup = false;
                    statements = new org.openapis.openapi.models.shared.StatementTemplate[]{{
                        add(new StatementTemplate() {{
                            relation = "error";
                            source = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "deserunt";
                                    }};
                                    packageName = "suscipit";
                                }};
                                web = new WebAsset() {{
                                    site = "iure";
                                }};
                            }};
                            target = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "magnam";
                                    }};
                                    packageName = "debitis";
                                }};
                                web = new WebAsset() {{
                                    site = "ipsa";
                                }};
                            }};
                        }}),
                        add(new StatementTemplate() {{
                            relation = "delectus";
                            source = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "tempora";
                                    }};
                                    packageName = "suscipit";
                                }};
                                web = new WebAsset() {{
                                    site = "molestiae";
                                }};
                            }};
                            target = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "minus";
                                    }};
                                    packageName = "placeat";
                                }};
                                web = new WebAsset() {{
                                    site = "voluptatum";
                                }};
                            }};
                        }}),
                    }};
                }};
                accessToken = "iusto";
                alt = "media";
                callback = "nisi";
                fields = "recusandae";
                key = "temporibus";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "veritatis";
                uploadProtocol = "deserunt";
            }}            

            DigitalassetlinksAssetlinksBulkCheckResponse res = sdk.assetlinks.digitalassetlinksAssetlinksBulkCheck(req);

            if (res.bulkCheckResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->