# thirdPartyVPNPeers

### Available Operations

* [getOrganizationApplianceVPNThirdPartyVPNPeers](#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [updateOrganizationApplianceVPNThirdPartyVPNPeers](#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization

## getOrganizationApplianceVPNThirdPartyVPNPeers

Return the third party VPN peers for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVPNThirdPartyVPNPeersRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVPNThirdPartyVPNPeersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceVPNThirdPartyVPNPeersRequest req = new GetOrganizationApplianceVPNThirdPartyVPNPeersRequest("ut");            

            GetOrganizationApplianceVPNThirdPartyVPNPeersResponse res = sdk.thirdPartyVPNPeers.getOrganizationApplianceVPNThirdPartyVPNPeers(req);

            if (res.getOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationApplianceVPNThirdPartyVPNPeers

Update the third party VPN peers for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest req = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest(                new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody(                new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers[]{{
                                                add(new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers("a",                 new String[]{{
                                                                    add("mollitia"),
                                                                    add("unde"),
                                                                    add("sit"),
                                                                    add("et"),
                                                                }}, "architecto") {{
                                                    ikeVersion = UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum.TWO;
                                                    ipsecPolicies = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies() {{
                                                        childAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.MD5),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA1),
                                                        }};
                                                        childCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.TRIPLEDES),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.AES192),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.AES128),
                                                        }};
                                                        childLifetime = 555953L;
                                                        childPfsGroup = new String[]{{
                                                            add("distinctio"),
                                                        }};
                                                        ikeAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA1),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA256),
                                                        }};
                                                        ikeCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.AES256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.DES),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.TRIPLEDES),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.TRIPLEDES),
                                                        }};
                                                        ikeDiffieHellmanGroup = new String[]{{
                                                            add("excepturi"),
                                                            add("esse"),
                                                        }};
                                                        ikeLifetime = 74456L;
                                                        ikePrfAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFSHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFMD5),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFSHA256),
                                                        }};
                                                    }};
                                                    ipsecPoliciesPreset = "vitae";
                                                    localId = "neque";
                                                    name = "Allen Mitchell";
                                                    networkTags = new String[]{{
                                                        add("praesentium"),
                                                    }};
                                                    privateSubnets = new String[]{{
                                                        add("similique"),
                                                    }};
                                                    publicIp = "nostrum";
                                                    remoteId = "nulla";
                                                    secret = "voluptatum";
                                                }}),
                                                add(new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers("molestias",                 new String[]{{
                                                                    add("voluptatibus"),
                                                                    add("cumque"),
                                                                    add("ab"),
                                                                }}, "ab") {{
                                                    ikeVersion = UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum.TWO;
                                                    ipsecPolicies = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies() {{
                                                        childAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA1),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA1),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA1),
                                                        }};
                                                        childCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.AES192),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.DES),
                                                        }};
                                                        childLifetime = 315577L;
                                                        childPfsGroup = new String[]{{
                                                            add("distinctio"),
                                                            add("eos"),
                                                        }};
                                                        ikeAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA256),
                                                        }};
                                                        ikeCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.AES128),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.TRIPLEDES),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.AES128),
                                                        }};
                                                        ikeDiffieHellmanGroup = new String[]{{
                                                            add("nam"),
                                                        }};
                                                        ikeLifetime = 520225L;
                                                        ikePrfAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFMD5),
                                                        }};
                                                    }};
                                                    ipsecPoliciesPreset = "tempora";
                                                    localId = "fugiat";
                                                    name = "Jackie Jast";
                                                    networkTags = new String[]{{
                                                        add("beatae"),
                                                        add("deleniti"),
                                                        add("voluptatem"),
                                                        add("repellendus"),
                                                    }};
                                                    privateSubnets = new String[]{{
                                                        add("fugit"),
                                                        add("praesentium"),
                                                        add("nostrum"),
                                                    }};
                                                    publicIp = "cum";
                                                    remoteId = "tempore";
                                                    secret = "blanditiis";
                                                }}),
                                                add(new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers("magnam",                 new String[]{{
                                                                    add("optio"),
                                                                    add("consequatur"),
                                                                    add("commodi"),
                                                                }}, "explicabo") {{
                                                    ikeVersion = UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum.ONE;
                                                    ipsecPolicies = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies() {{
                                                        childAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA1),
                                                        }};
                                                        childCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.TRIPLEDES),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.AES128),
                                                        }};
                                                        childLifetime = 905803L;
                                                        childPfsGroup = new String[]{{
                                                            add("tenetur"),
                                                        }};
                                                        ikeAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA1),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA1),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA1),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.MD5),
                                                        }};
                                                        ikeCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.AES192),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.AES256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.TRIPLEDES),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.AES256),
                                                        }};
                                                        ikeDiffieHellmanGroup = new String[]{{
                                                            add("architecto"),
                                                            add("voluptate"),
                                                        }};
                                                        ikeLifetime = 609738L;
                                                        ikePrfAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFMD5),
                                                        }};
                                                    }};
                                                    ipsecPoliciesPreset = "ut";
                                                    localId = "repellat";
                                                    name = "Colleen O'Conner";
                                                    networkTags = new String[]{{
                                                        add("tempore"),
                                                        add("nobis"),
                                                    }};
                                                    privateSubnets = new String[]{{
                                                        add("amet"),
                                                        add("autem"),
                                                        add("beatae"),
                                                        add("velit"),
                                                    }};
                                                    publicIp = "debitis";
                                                    remoteId = "modi";
                                                    secret = "ex";
                                                }}),
                                            }});, "quas");            

            UpdateOrganizationApplianceVPNThirdPartyVPNPeersResponse res = sdk.thirdPartyVPNPeers.updateOrganizationApplianceVPNThirdPartyVPNPeers(req);

            if (res.updateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
