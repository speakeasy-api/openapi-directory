# elections

### Available Operations

* [civicinfoElectionsElectionQuery](#civicinfoelectionselectionquery) - List of available elections to query.
* [civicinfoElectionsVoterInfoQuery](#civicinfoelectionsvoterinfoquery) - Looks up information relevant to a voter based on the voter's registered address.

## civicinfoElectionsElectionQuery

List of available elections to query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CivicinfoElectionsElectionQueryRequest;
import org.openapis.openapi.models.operations.CivicinfoElectionsElectionQueryResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CivicinfoElectionsElectionQueryRequest req = new CivicinfoElectionsElectionQueryRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                fields = "recusandae";
                key = "temporibus";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "veritatis";
                uploadProtocol = "deserunt";
            }};            

            CivicinfoElectionsElectionQueryResponse res = sdk.elections.civicinfoElectionsElectionQuery(req);

            if (res.electionsQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## civicinfoElectionsVoterInfoQuery

Looks up information relevant to a voter based on the voter's registered address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CivicinfoElectionsVoterInfoQueryRequest;
import org.openapis.openapi.models.operations.CivicinfoElectionsVoterInfoQueryResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CivicinfoElectionsVoterInfoQueryRequest req = new CivicinfoElectionsVoterInfoQueryRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quo";
                electionId = "odit";
                fields = "at";
                key = "at";
                oauthToken = "maiores";
                officialOnly = false;
                prettyPrint = false;
                quotaUser = "molestiae";
                returnAllAvailableData = false;
                uploadType = "quod";
                uploadProtocol = "quod";
            }};            

            CivicinfoElectionsVoterInfoQueryResponse res = sdk.elections.civicinfoElectionsVoterInfoQuery(req);

            if (res.voterInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
