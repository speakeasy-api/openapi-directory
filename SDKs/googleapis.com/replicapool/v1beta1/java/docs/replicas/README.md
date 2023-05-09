# replicas

### Available Operations

* [replicapoolReplicasDelete](#replicapoolreplicasdelete) - Deletes a replica from the pool.
* [replicapoolReplicasGet](#replicapoolreplicasget) - Gets information about a specific replica.
* [replicapoolReplicasList](#replicapoolreplicaslist) - Lists all replicas in a pool.
* [replicapoolReplicasRestart](#replicapoolreplicasrestart) - Restarts a replica in a pool.

## replicapoolReplicasDelete

Deletes a replica from the pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReplicapoolReplicasDeleteRequest;
import org.openapis.openapi.models.operations.ReplicapoolReplicasDeleteResponse;
import org.openapis.openapi.models.operations.ReplicapoolReplicasDeleteSecurity;
import org.openapis.openapi.models.operations.ReplicapoolReplicasDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ReplicapoolReplicasDeleteSecurityOption2;
import org.openapis.openapi.models.operations.ReplicapoolReplicasDeleteSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReplicasDeleteRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReplicapoolReplicasDeleteRequest req = new ReplicapoolReplicasDeleteRequest("numquam", "enim", "dolorem", "sapiente") {{
                replicasDeleteRequest = new ReplicasDeleteRequest() {{
                    abandonInstance = false;
                }};;
                alt = AltEnum.JSON;
                fields = "totam";
                key = "nihil";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "expedita";
                userIp = "neque";
            }};            

            ReplicapoolReplicasDeleteResponse res = sdk.replicas.replicapoolReplicasDelete(req, new ReplicapoolReplicasDeleteSecurity() {{
                option1 = new ReplicapoolReplicasDeleteSecurityOption1("sed", "vel") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## replicapoolReplicasGet

Gets information about a specific replica.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReplicapoolReplicasGetRequest;
import org.openapis.openapi.models.operations.ReplicapoolReplicasGetResponse;
import org.openapis.openapi.models.operations.ReplicapoolReplicasGetSecurity;
import org.openapis.openapi.models.operations.ReplicapoolReplicasGetSecurityOption1;
import org.openapis.openapi.models.operations.ReplicapoolReplicasGetSecurityOption2;
import org.openapis.openapi.models.operations.ReplicapoolReplicasGetSecurityOption3;
import org.openapis.openapi.models.operations.ReplicapoolReplicasGetSecurityOption4;
import org.openapis.openapi.models.operations.ReplicapoolReplicasGetSecurityOption5;
import org.openapis.openapi.models.operations.ReplicapoolReplicasGetSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReplicapoolReplicasGetRequest req = new ReplicapoolReplicasGetRequest("libero", "voluptas", "deserunt", "quam") {{
                alt = AltEnum.JSON;
                fields = "ipsum";
                key = "incidunt";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "cupiditate";
                userIp = "maxime";
            }};            

            ReplicapoolReplicasGetResponse res = sdk.replicas.replicapoolReplicasGet(req, new ReplicapoolReplicasGetSecurity() {{
                option1 = new ReplicapoolReplicasGetSecurityOption1("pariatur", "soluta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## replicapoolReplicasList

Lists all replicas in a pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReplicapoolReplicasListRequest;
import org.openapis.openapi.models.operations.ReplicapoolReplicasListResponse;
import org.openapis.openapi.models.operations.ReplicapoolReplicasListSecurity;
import org.openapis.openapi.models.operations.ReplicapoolReplicasListSecurityOption1;
import org.openapis.openapi.models.operations.ReplicapoolReplicasListSecurityOption2;
import org.openapis.openapi.models.operations.ReplicapoolReplicasListSecurityOption3;
import org.openapis.openapi.models.operations.ReplicapoolReplicasListSecurityOption4;
import org.openapis.openapi.models.operations.ReplicapoolReplicasListSecurityOption5;
import org.openapis.openapi.models.operations.ReplicapoolReplicasListSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReplicapoolReplicasListRequest req = new ReplicapoolReplicasListRequest("dicta", "laborum", "totam") {{
                alt = AltEnum.JSON;
                fields = "incidunt";
                key = "aspernatur";
                maxResults = 174909L;
                oauthToken = "distinctio";
                pageToken = "facilis";
                prettyPrint = false;
                quotaUser = "aliquid";
                userIp = "quam";
            }};            

            ReplicapoolReplicasListResponse res = sdk.replicas.replicapoolReplicasList(req, new ReplicapoolReplicasListSecurity() {{
                option1 = new ReplicapoolReplicasListSecurityOption1("molestias", "temporibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## replicapoolReplicasRestart

Restarts a replica in a pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReplicapoolReplicasRestartRequest;
import org.openapis.openapi.models.operations.ReplicapoolReplicasRestartResponse;
import org.openapis.openapi.models.operations.ReplicapoolReplicasRestartSecurity;
import org.openapis.openapi.models.operations.ReplicapoolReplicasRestartSecurityOption1;
import org.openapis.openapi.models.operations.ReplicapoolReplicasRestartSecurityOption2;
import org.openapis.openapi.models.operations.ReplicapoolReplicasRestartSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReplicapoolReplicasRestartRequest req = new ReplicapoolReplicasRestartRequest("qui", "neque", "fugit", "magni") {{
                alt = AltEnum.JSON;
                fields = "odio";
                key = "sunt";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "nam";
                userIp = "hic";
            }};            

            ReplicapoolReplicasRestartResponse res = sdk.replicas.replicapoolReplicasRestart(req, new ReplicapoolReplicasRestartSecurity() {{
                option1 = new ReplicapoolReplicasRestartSecurityOption1("voluptatem", "cumque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
