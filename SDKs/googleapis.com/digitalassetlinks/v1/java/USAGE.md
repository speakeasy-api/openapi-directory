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
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new BulkCheckRequest() {{
                    allowGoogleInternalDataSources = true;
                    defaultRelation = "dicta";
                    defaultSource = new Asset() {{
                        androidApp = new AndroidAppAsset() {{
                            certificate = new CertificateInfo() {{
                                sha256Fingerprint = "debitis";
                            }};
                            packageName = "voluptatum";
                        }};
                        web = new WebAsset() {{
                            site = "et";
                        }};
                    }};
                    defaultTarget = new Asset() {{
                        androidApp = new AndroidAppAsset() {{
                            certificate = new CertificateInfo() {{
                                sha256Fingerprint = "ut";
                            }};
                            packageName = "dolorem";
                        }};
                        web = new WebAsset() {{
                            site = "et";
                        }};
                    }};
                    skipCacheLookup = false;
                    statements = new openapisdk.models.shared.StatementTemplate[]() {{
                        add(new StatementTemplate() {{
                            relation = "vitae";
                            source = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "totam";
                                    }};
                                    packageName = "dolores";
                                }};
                                web = new WebAsset() {{
                                    site = "illum";
                                }};
                            }};
                            target = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "debitis";
                                    }};
                                    packageName = "vel";
                                }};
                                web = new WebAsset() {{
                                    site = "odio";
                                }};
                            }};
                        }}),
                        add(new StatementTemplate() {{
                            relation = "dolore";
                            source = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "id";
                                    }};
                                    packageName = "aspernatur";
                                }};
                                web = new WebAsset() {{
                                    site = "accusantium";
                                }};
                            }};
                            target = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "totam";
                                    }};
                                    packageName = "commodi";
                                }};
                                web = new WebAsset() {{
                                    site = "quis";
                                }};
                            }};
                        }}),
                        add(new StatementTemplate() {{
                            relation = "est";
                            source = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "aut";
                                    }};
                                    packageName = "odit";
                                }};
                                web = new WebAsset() {{
                                    site = "non";
                                }};
                            }};
                            target = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "voluptas";
                                    }};
                                    packageName = "omnis";
                                }};
                                web = new WebAsset() {{
                                    site = "aut";
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