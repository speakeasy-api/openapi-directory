<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            DigitalassetlinksAssetlinksBulkCheckRequest req = new DigitalassetlinksAssetlinksBulkCheckRequest() {{
                queryParams = new DigitalassetlinksAssetlinksBulkCheckQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "beatae";
                    alt = "proto";
                    callback = "magnam";
                    fields = "et";
                    key = "fuga";
                    oauthToken = "tempore";
                    prettyPrint = false;
                    quotaUser = "sit";
                    uploadType = "accusamus";
                    uploadProtocol = "beatae";
                }};
                request = new BulkCheckRequest() {{
                    allowGoogleInternalDataSources = false;
                    defaultRelation = "aspernatur";
                    defaultSource = new Asset() {{
                        androidApp = new AndroidAppAsset() {{
                            certificate = new CertificateInfo() {{
                                sha256Fingerprint = "maxime";
                            }};
                            packageName = "facilis";
                        }};
                        web = new WebAsset() {{
                            site = "iure";
                        }};
                    }};
                    defaultTarget = new Asset() {{
                        androidApp = new AndroidAppAsset() {{
                            certificate = new CertificateInfo() {{
                                sha256Fingerprint = "quo";
                            }};
                            packageName = "nulla";
                        }};
                        web = new WebAsset() {{
                            site = "iste";
                        }};
                    }};
                    skipCacheLookup = true;
                    statements = new openapisdk.models.shared.StatementTemplate[]() {{
                        add(new StatementTemplate() {{
                            relation = "aut";
                            source = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "ea";
                                    }};
                                    packageName = "laborum";
                                }};
                                web = new WebAsset() {{
                                    site = "ipsum";
                                }};
                            }};
                            target = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "quae";
                                    }};
                                    packageName = "minima";
                                }};
                                web = new WebAsset() {{
                                    site = "eaque";
                                }};
                            }};
                        }}),
                        add(new StatementTemplate() {{
                            relation = "consequatur";
                            source = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "veritatis";
                                    }};
                                    packageName = "officia";
                                }};
                                web = new WebAsset() {{
                                    site = "nihil";
                                }};
                            }};
                            target = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "qui";
                                    }};
                                    packageName = "natus";
                                }};
                                web = new WebAsset() {{
                                    site = "et";
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