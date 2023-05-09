# workers

### Available Operations

* [genomicsWorkersCheckIn](#genomicsworkerscheckin) - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

## genomicsWorkersCheckIn

The worker uses this method to retrieve the assigned operation and provide periodic status updates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenomicsWorkersCheckInRequest;
import org.openapis.openapi.models.operations.GenomicsWorkersCheckInResponse;
import org.openapis.openapi.models.operations.GenomicsWorkersCheckInSecurity;
import org.openapis.openapi.models.operations.GenomicsWorkersCheckInSecurityOption1;
import org.openapis.openapi.models.operations.GenomicsWorkersCheckInSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CheckInRequest;
import org.openapis.openapi.models.shared.DiskStatus;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.TimestampedEvent;
import org.openapis.openapi.models.shared.WorkerStatus;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenomicsWorkersCheckInRequest req = new GenomicsWorkersCheckInRequest("et") {{
                dollarXgafv = XgafvEnum.TWO;
                checkInRequest = new CheckInRequest() {{
                    deadlineExpired = new java.util.HashMap<String, Object>() {{
                        put("veritatis", "nobis");
                    }};
                    event = new java.util.HashMap<String, Object>() {{
                        put("tempore", "cupiditate");
                        put("aperiam", "delectus");
                        put("dolorem", "dolore");
                    }};
                    events = new org.openapis.openapi.models.shared.TimestampedEvent[]{{
                        add(new TimestampedEvent() {{
                            data = new java.util.HashMap<String, Object>() {{
                                put("dolorum", "architecto");
                            }};
                            timestamp = "quae";
                        }}),
                        add(new TimestampedEvent() {{
                            data = new java.util.HashMap<String, Object>() {{
                                put("quas", "itaque");
                            }};
                            timestamp = "consequatur";
                        }}),
                    }};
                    result = new Status() {{
                        code = 669917;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("doloribus", "ut");
                                put("facilis", "cupiditate");
                                put("qui", "quae");
                                put("laudantium", "odio");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("voluptatibus", "quisquam");
                                put("vero", "omnis");
                                put("quis", "ipsum");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("voluptate", "consectetur");
                                put("vero", "tenetur");
                                put("dignissimos", "hic");
                                put("distinctio", "quod");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("similique", "facilis");
                                put("vero", "ducimus");
                            }}),
                        }};
                        message = "dolore";
                    }};;
                    sosReport = "quibusdam";
                    workerStatus = new WorkerStatus() {{
                        attachedDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskStatus>() {{
                            put("sequi", new DiskStatus() {{
                                freeSpaceBytes = "natus";
                                totalSpaceBytes = "impedit";
                            }});
                            put("aut", new DiskStatus() {{
                                freeSpaceBytes = "voluptatibus";
                                totalSpaceBytes = "exercitationem";
                            }});
                            put("nulla", new DiskStatus() {{
                                freeSpaceBytes = "fugit";
                                totalSpaceBytes = "porro";
                            }});
                            put("maiores", new DiskStatus() {{
                                freeSpaceBytes = "doloribus";
                                totalSpaceBytes = "iusto";
                            }});
                        }};
                        bootDisk = new DiskStatus() {{
                            freeSpaceBytes = "eligendi";
                            totalSpaceBytes = "ducimus";
                        }};;
                        freeRamBytes = "alias";
                        totalRamBytes = "officia";
                        uptimeSeconds = "tempora";
                    }};;
                }};;
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "aspernatur";
                fields = "vel";
                key = "possimus";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "ex";
                uploadProtocol = "laudantium";
            }};            

            GenomicsWorkersCheckInResponse res = sdk.workers.genomicsWorkersCheckIn(req, new GenomicsWorkersCheckInSecurity() {{
                option1 = new GenomicsWorkersCheckInSecurityOption1("dicta", "dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.checkInResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
