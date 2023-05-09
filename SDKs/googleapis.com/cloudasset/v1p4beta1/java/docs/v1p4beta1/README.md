# v1p4beta1

### Available Operations

* [cloudassetAnalyzeIamPolicy](#cloudassetanalyzeiampolicy) - Analyzes IAM policies to answer which identities have what accesses on which resources.
* [cloudassetExportIamPolicyAnalysis](#cloudassetexportiampolicyanalysis) - Exports the answers of which identities have what accesses on which resources to a Google Cloud Storage destination. The output format is the JSON format that represents a AnalyzeIamPolicyResponse in the JSON format. This method implements the google.longrunning.Operation, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. The metadata contains the request to help callers to map responses to requests.

## cloudassetAnalyzeIamPolicy

Analyzes IAM policies to answer which identities have what accesses on which resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetAnalyzeIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudassetAnalyzeIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudassetAnalyzeIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetAnalyzeIamPolicyRequest req = new CloudassetAnalyzeIamPolicyRequest("iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nisi";
                alt = AltEnum.PROTO;
                analysisQueryAccessSelectorPermissions = new String[]{{
                    add("ab"),
                    add("quis"),
                    add("veritatis"),
                    add("deserunt"),
                }};
                analysisQueryAccessSelectorRoles = new String[]{{
                    add("ipsam"),
                }};
                analysisQueryIdentitySelectorIdentity = "repellendus";
                analysisQueryResourceSelectorFullResourceName = "sapiente";
                callback = "quo";
                fields = "odit";
                key = "at";
                oauthToken = "at";
                optionsAnalyzeServiceAccountImpersonation = false;
                optionsExecutionTimeout = "maiores";
                optionsExpandGroups = false;
                optionsExpandResources = false;
                optionsExpandRoles = false;
                optionsOutputGroupEdges = false;
                optionsOutputResourceEdges = false;
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "quod";
                uploadProtocol = "quod";
            }};            

            CloudassetAnalyzeIamPolicyResponse res = sdk.v1p4beta1.cloudassetAnalyzeIamPolicy(req, new CloudassetAnalyzeIamPolicySecurity("esse", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.analyzeIamPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudassetExportIamPolicyAnalysis

Exports the answers of which identities have what accesses on which resources to a Google Cloud Storage destination. The output format is the JSON format that represents a AnalyzeIamPolicyResponse in the JSON format. This method implements the google.longrunning.Operation, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. The metadata contains the request to help callers to map responses to requests.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetExportIamPolicyAnalysisRequest;
import org.openapis.openapi.models.operations.CloudassetExportIamPolicyAnalysisResponse;
import org.openapis.openapi.models.operations.CloudassetExportIamPolicyAnalysisSecurity;
import org.openapis.openapi.models.shared.AccessSelector;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExportIamPolicyAnalysisRequest;
import org.openapis.openapi.models.shared.GcsDestination;
import org.openapis.openapi.models.shared.IamPolicyAnalysisOutputConfig;
import org.openapis.openapi.models.shared.IamPolicyAnalysisQuery;
import org.openapis.openapi.models.shared.IdentitySelector;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.ResourceSelector;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetExportIamPolicyAnalysisRequest req = new CloudassetExportIamPolicyAnalysisRequest("porro") {{
                dollarXgafv = XgafvEnum.TWO;
                exportIamPolicyAnalysisRequest = new ExportIamPolicyAnalysisRequest() {{
                    analysisQuery = new IamPolicyAnalysisQuery() {{
                        accessSelector = new AccessSelector() {{
                            permissions = new String[]{{
                                add("nam"),
                            }};
                            roles = new String[]{{
                                add("occaecati"),
                                add("fugit"),
                                add("deleniti"),
                            }};
                        }};;
                        identitySelector = new IdentitySelector() {{
                            identity = "hic";
                        }};;
                        parent = "optio";
                        resourceSelector = new ResourceSelector() {{
                            fullResourceName = "totam";
                        }};;
                    }};;
                    options = new Options() {{
                        analyzeServiceAccountImpersonation = false;
                        expandGroups = false;
                        expandResources = false;
                        expandRoles = false;
                        outputGroupEdges = false;
                        outputResourceEdges = false;
                    }};;
                    outputConfig = new IamPolicyAnalysisOutputConfig() {{
                        gcsDestination = new GcsDestination() {{
                            uri = "http://immense-investor.biz";
                        }};;
                    }};;
                }};;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "cum";
                fields = "esse";
                key = "ipsum";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "perferendis";
                uploadProtocol = "ad";
            }};            

            CloudassetExportIamPolicyAnalysisResponse res = sdk.v1p4beta1.cloudassetExportIamPolicyAnalysis(req, new CloudassetExportIamPolicyAnalysisSecurity("natus", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
