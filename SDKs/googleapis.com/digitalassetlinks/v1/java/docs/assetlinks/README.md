# assetlinks

### Available Operations

* [digitalassetlinksAssetlinksBulkCheck](#digitalassetlinksassetlinksbulkcheck) - Send a bundle of statement checks in a single RPC to minimize latency and service load. Statements need not be all for the same source and/or target. We recommend using this method when you need to check more than one statement in a short period of time.
* [digitalassetlinksAssetlinksCheck](#digitalassetlinksassetlinkscheck) - Determines whether the specified (directional) relationship exists between the specified source and target assets. The relation describes the intent of the link between the two assets as claimed by the source asset. An example for such relationships is the delegation of privileges or permissions. This command is most often used by infrastructure systems to check preconditions for an action. For example, a client may want to know if it is OK to send a web URL to a particular mobile app instead. The client can check for the relevant asset link from the website to the mobile app to decide if the operation should be allowed. A note about security: if you specify a secure asset as the source, such as an HTTPS website or an Android app, the API will ensure that any statements used to generate the response have been made in a secure way by the owner of that asset. Conversely, if the source asset is an insecure HTTP website (that is, the URL starts with `http://` instead of `https://`), the API cannot verify its statements securely, and it is not possible to ensure that the website's statements have not been altered by a third party. For more information, see the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).

## digitalassetlinksAssetlinksBulkCheck

Send a bundle of statement checks in a single RPC to minimize latency and service load. Statements need not be all for the same source and/or target. We recommend using this method when you need to check more than one statement in a short period of time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DigitalassetlinksAssetlinksBulkCheckRequest;
import org.openapis.openapi.models.operations.DigitalassetlinksAssetlinksBulkCheckResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AndroidAppAsset;
import org.openapis.openapi.models.shared.Asset;
import org.openapis.openapi.models.shared.BulkCheckRequest;
import org.openapis.openapi.models.shared.CertificateInfo;
import org.openapis.openapi.models.shared.StatementTemplate;
import org.openapis.openapi.models.shared.WebAsset;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DigitalassetlinksAssetlinksBulkCheckRequest req = new DigitalassetlinksAssetlinksBulkCheckRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                bulkCheckRequest = new BulkCheckRequest() {{
                    allowGoogleInternalDataSources = false;
                    defaultRelation = "ipsam";
                    defaultSource = new Asset() {{
                        androidApp = new AndroidAppAsset() {{
                            certificate = new CertificateInfo() {{
                                sha256Fingerprint = "repellendus";
                            }};;
                            packageName = "sapiente";
                        }};;
                        web = new WebAsset() {{
                            site = "quo";
                        }};;
                    }};;
                    defaultTarget = new Asset() {{
                        androidApp = new AndroidAppAsset() {{
                            certificate = new CertificateInfo() {{
                                sha256Fingerprint = "odit";
                            }};;
                            packageName = "at";
                        }};;
                        web = new WebAsset() {{
                            site = "at";
                        }};;
                    }};;
                    skipCacheLookup = false;
                    statements = new org.openapis.openapi.models.shared.StatementTemplate[]{{
                        add(new StatementTemplate() {{
                            relation = "molestiae";
                            source = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "quod";
                                    }};
                                    packageName = "quod";
                                }};
                                web = new WebAsset() {{
                                    site = "esse";
                                }};
                            }};
                            target = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "totam";
                                    }};
                                    packageName = "porro";
                                }};
                                web = new WebAsset() {{
                                    site = "dolorum";
                                }};
                            }};
                        }}),
                        add(new StatementTemplate() {{
                            relation = "dicta";
                            source = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "nam";
                                    }};
                                    packageName = "officia";
                                }};
                                web = new WebAsset() {{
                                    site = "occaecati";
                                }};
                            }};
                            target = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "fugit";
                                    }};
                                    packageName = "deleniti";
                                }};
                                web = new WebAsset() {{
                                    site = "hic";
                                }};
                            }};
                        }}),
                        add(new StatementTemplate() {{
                            relation = "optio";
                            source = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "totam";
                                    }};
                                    packageName = "beatae";
                                }};
                                web = new WebAsset() {{
                                    site = "commodi";
                                }};
                            }};
                            target = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "molestiae";
                                    }};
                                    packageName = "modi";
                                }};
                                web = new WebAsset() {{
                                    site = "qui";
                                }};
                            }};
                        }}),
                        add(new StatementTemplate() {{
                            relation = "impedit";
                            source = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "cum";
                                    }};
                                    packageName = "esse";
                                }};
                                web = new WebAsset() {{
                                    site = "ipsum";
                                }};
                            }};
                            target = new Asset() {{
                                androidApp = new AndroidAppAsset() {{
                                    certificate = new CertificateInfo() {{
                                        sha256Fingerprint = "excepturi";
                                    }};
                                    packageName = "aspernatur";
                                }};
                                web = new WebAsset() {{
                                    site = "perferendis";
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "sed";
                fields = "iste";
                key = "dolor";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "hic";
                uploadProtocol = "saepe";
            }};            

            DigitalassetlinksAssetlinksBulkCheckResponse res = sdk.assetlinks.digitalassetlinksAssetlinksBulkCheck(req);

            if (res.bulkCheckResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## digitalassetlinksAssetlinksCheck

Determines whether the specified (directional) relationship exists between the specified source and target assets. The relation describes the intent of the link between the two assets as claimed by the source asset. An example for such relationships is the delegation of privileges or permissions. This command is most often used by infrastructure systems to check preconditions for an action. For example, a client may want to know if it is OK to send a web URL to a particular mobile app instead. The client can check for the relevant asset link from the website to the mobile app to decide if the operation should be allowed. A note about security: if you specify a secure asset as the source, such as an HTTPS website or an Android app, the API will ensure that any statements used to generate the response have been made in a secure way by the owner of that asset. Conversely, if the source asset is an insecure HTTP website (that is, the URL starts with `http://` instead of `https://`), the API cannot verify its statements securely, and it is not possible to ensure that the website's statements have not been altered by a third party. For more information, see the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DigitalassetlinksAssetlinksCheckRequest;
import org.openapis.openapi.models.operations.DigitalassetlinksAssetlinksCheckResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DigitalassetlinksAssetlinksCheckRequest req = new DigitalassetlinksAssetlinksCheckRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "iste";
                fields = "iure";
                key = "saepe";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "architecto";
                relation = "ipsa";
                sourceAndroidAppCertificateSha256Fingerprint = "reiciendis";
                sourceAndroidAppPackageName = "est";
                sourceWebSite = "mollitia";
                targetAndroidAppCertificateSha256Fingerprint = "laborum";
                targetAndroidAppPackageName = "dolores";
                targetWebSite = "dolorem";
                uploadType = "corporis";
                uploadProtocol = "explicabo";
            }};            

            DigitalassetlinksAssetlinksCheckResponse res = sdk.assetlinks.digitalassetlinksAssetlinksCheck(req);

            if (res.checkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
