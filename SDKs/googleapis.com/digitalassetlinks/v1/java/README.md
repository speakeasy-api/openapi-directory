# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### assetlinks

* `digitalassetlinksAssetlinksBulkCheck` - Send a bundle of statement checks in a single RPC to minimize latency and service load. Statements need not be all for the same source and/or target. We recommend using this method when you need to check more than one statement in a short period of time.
* `digitalassetlinksAssetlinksCheck` - Determines whether the specified (directional) relationship exists between the specified source and target assets. The relation describes the intent of the link between the two assets as claimed by the source asset. An example for such relationships is the delegation of privileges or permissions. This command is most often used by infrastructure systems to check preconditions for an action. For example, a client may want to know if it is OK to send a web URL to a particular mobile app instead. The client can check for the relevant asset link from the website to the mobile app to decide if the operation should be allowed. A note about security: if you specify a secure asset as the source, such as an HTTPS website or an Android app, the API will ensure that any statements used to generate the response have been made in a secure way by the owner of that asset. Conversely, if the source asset is an insecure HTTP website (that is, the URL starts with `http://` instead of `https://`), the API cannot verify its statements securely, and it is not possible to ensure that the website's statements have not been altered by a third party. For more information, see the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).

### statements

* `digitalassetlinksStatementsList` - Retrieves a list of all statements from a given source that match the specified target and statement string. The API guarantees that all statements with secure source assets, such as HTTPS websites or Android apps, have been made in a secure way by the owner of those assets, as described in the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md). Specifically, you should consider that for insecure websites (that is, where the URL starts with `http://` instead of `https://`), this guarantee cannot be made. The `List` command is most useful in cases where the API client wants to know all the ways in which two assets are related, or enumerate all the relationships from a particular source asset. Example: a feature that helps users navigate to related items. When a mobile app is running on a device, the feature would make it easy to navigate to the corresponding web site or Google+ profile.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
