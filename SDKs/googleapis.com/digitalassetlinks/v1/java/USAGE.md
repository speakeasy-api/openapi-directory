<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DigitalassetlinksAssetlinksBulkCheckQueryParams;
import org.openapis.openapi.models.operations.DigitalassetlinksAssetlinksBulkCheckRequest;
import org.openapis.openapi.models.operations.DigitalassetlinksAssetlinksBulkCheckResponse;
import org.openapis.openapi.models.shared.BulkCheckRequest;
import org.openapis.openapi.models.shared.StatementTemplate;
import org.openapis.openapi.models.shared.Asset;
import org.openapis.openapi.models.shared.WebAsset;
import org.openapis.openapi.models.shared.AndroidAppAsset;
import org.openapis.openapi.models.shared.CertificateInfo;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DigitalassetlinksAssetlinksBulkCheckRequest req = new DigitalassetlinksAssetlinksBulkCheckRequest() {{
                queryParams = new DigitalassetlinksAssetlinksBulkCheckQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new BulkCheckRequest() {{
                    allowGoogleInternalDataSources = false;
                    defaultRelation = "deserunt";
                    defaultSource = new Asset() {{
                        androidApp = new AndroidAppAsset() {{
                            certificate = new CertificateInfo() {{
                                sha256Fingerprint = "suscipit";
                            }};
                            packageName = "iure";
                        }};
                        web = new WebAsset() {{
                            site = "magnam";
                        }};
                    }};
                    defaultTarget = new Asset() {{
                        androidApp = new AndroidAppAsset() {{
                            certificate = new CertificateInfo() {{
                                sha256Fingerprint = "debitis";
                            }};
                            packageName = "ipsa";
                        }};
                        web = new WebAsset() {{
                            site = "delectus";
                        }};
                    }};
                    skipCacheLookup = false;
                    statements = new org.openapis.openapi.models.shared.StatementTemplate[]{{
                        add(new StatementTemplate() {{
                            relation = "suscipit";
                            source = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "molestiae";
                                    }};
                                    packageName = "minus";
                                }};
                                web = new WebAsset() {{
                                    site = "placeat";
                                }};
                            }};
                            target = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "voluptatum";
                                    }};
                                    packageName = "iusto";
                                }};
                                web = new WebAsset() {{
                                    site = "excepturi";
                                }};
                            }};
                        }}),
                        add(new StatementTemplate() {{
                            relation = "nisi";
                            source = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "recusandae";
                                    }};
                                    packageName = "temporibus";
                                }};
                                web = new WebAsset() {{
                                    site = "ab";
                                }};
                            }};
                            target = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "quis";
                                    }};
                                    packageName = "veritatis";
                                }};
                                web = new WebAsset() {{
                                    site = "deserunt";
                                }};
                            }};
                        }}),
                    }};
                }};
            }};            

            DigitalassetlinksAssetlinksBulkCheckResponse res = sdk.assetlinks.digitalassetlinksAssetlinksBulkCheck(req);

            if (res.bulkCheckResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->