# alias

## Overview

**Operations:** Create, Get, Update, Delete, Get List

### Available Operations

* [createAlias](#createalias) - Create alias
* [deleteAlias](#deletealias) - Delete alias
* [getAlias](#getalias) - Get alias
* [getAliases](#getaliases) - Get aliases by domain
* [updateAlias](#updatealias) - Update alias

## createAlias

This POST method creates a new alias under a specified domain. If no domain is specified in the request the alias will be attached to the default domain Short.fyi 

 **NOTE:** You can override the domain level Meta Tags and Tracking Snippets by specifying them for each URL. Any variables you add to a specific URL will always override domain level settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAliasRequest;
import org.openapis.openapi.models.operations.CreateAliasResponse;
import org.openapis.openapi.models.operations.CreateAliasSecurity;
import org.openapis.openapi.models.shared.CreateAliasModel;
import org.openapis.openapi.models.shared.DestinationModel;
import org.openapis.openapi.models.shared.MetaTagModel;
import org.openapis.openapi.models.shared.SnippetModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAliasRequest req = new CreateAliasRequest(                new CreateAliasModel() {{
                                destinations = new org.openapis.openapi.models.shared.DestinationModel[]{{
                                    add(new DestinationModel("in") {{
                                        country = "United States of America";
                                        os = "saepe";
                                        url = "fuga";
                                    }}),
                                    add(new DestinationModel("saepe") {{
                                        country = "Guernsey";
                                        os = "iste";
                                        url = "iure";
                                    }}),
                                }};
                                metatags = new org.openapis.openapi.models.shared.MetaTagModel[]{{
                                    add(new MetaTagModel("dolores", "dolorem") {{
                                        content = "architecto";
                                        name = "Lela Orn";
                                    }}),
                                    add(new MetaTagModel("minima", "excepturi") {{
                                        content = "corporis";
                                        name = "Della Halvorson";
                                    }}),
                                    add(new MetaTagModel("dolorem", "culpa") {{
                                        content = "accusantium";
                                        name = "Cecilia Yundt MD";
                                    }}),
                                }};
                                snippets = new org.openapis.openapi.models.shared.SnippetModel[]{{
                                    add(new SnippetModel("voluptate") {{
                                        id = "fa946773-9251-4aa5-ac3f-5ad019da1ffe";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("praesentium", "voluptatibus");
                                            put("ipsa", "omnis");
                                        }};
                                    }}),
                                }};
                            }};) {{
                aliasName = "cum";
                domainName = "perferendis";
            }};            

            CreateAliasResponse res = sdk.alias.createAlias(req, new CreateAliasSecurity("doloremque") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.createAliasResponseModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAlias

Deletes a single alias by providing alias and domain. If no domain is provided the API will search for the matching alias within the Short.fyi domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAliasRequest;
import org.openapis.openapi.models.operations.DeleteAliasResponse;
import org.openapis.openapi.models.operations.DeleteAliasSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAliasRequest req = new DeleteAliasRequest("reprehenderit") {{
                domainName = "ut";
            }};            

            DeleteAliasResponse res = sdk.alias.deleteAlias(req, new DeleteAliasSecurity("maiores") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAlias

Get detailed information for a single alias by providing its alias and domain name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAliasRequest;
import org.openapis.openapi.models.operations.GetAliasResponse;
import org.openapis.openapi.models.operations.GetAliasSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAliasRequest req = new GetAliasRequest("dicta") {{
                domainName = "corporis";
            }};            

            GetAliasResponse res = sdk.alias.getAlias(req, new GetAliasSecurity("dolore") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.aliasModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAliases

Obtain a list of all alias names associated with your account and given domain. Result array is in descending order by creation date. 

 If no domain is specified you will receive a list of all the alias names you have created using the Short.fyi domain. 

 If there are more results than the limit for the request the response will return you a value in lastId property you can specify it in the continueFrom query parameter to get the next batch of records.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAliasesRequest;
import org.openapis.openapi.models.operations.GetAliasesResponse;
import org.openapis.openapi.models.operations.GetAliasesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAliasesRequest req = new GetAliasesRequest() {{
                continueFrom = "iusto";
                domainName = "dicta";
                limit = 688661L;
            }};            

            GetAliasesResponse res = sdk.alias.getAliases(req, new GetAliasesSecurity("enim") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getAliasesModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAlias

Update a single short URL by providing its alias and domain as a parameter, and the data you wish to update in the body of the request. If no domain is provided you will receive the alias found attached to the Short.fyi domain (if it exists and is linked to your account!)

 ### NOTE: 

 ( * )If you add a metatag or a snippet with a same name to an alias and the domain it's related to, the value will be taken from the alias and not the domain 

 ( ** ) When you update any array property (like destinations) the block is updated **completely** so you have to specify the old records to avoid deleting them

 ( *** ) The method updates only the specified properties so if there was no change in one of them you don't have to send it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAliasRequest;
import org.openapis.openapi.models.operations.UpdateAliasResponse;
import org.openapis.openapi.models.operations.UpdateAliasSecurity;
import org.openapis.openapi.models.shared.CreateAliasModel;
import org.openapis.openapi.models.shared.DestinationModel;
import org.openapis.openapi.models.shared.MetaTagModel;
import org.openapis.openapi.models.shared.SnippetModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAliasRequest req = new UpdateAliasRequest(                new CreateAliasModel() {{
                                destinations = new org.openapis.openapi.models.shared.DestinationModel[]{{
                                    add(new DestinationModel("ipsum") {{
                                        country = "Iraq";
                                        os = "repudiandae";
                                        url = "quae";
                                    }}),
                                    add(new DestinationModel("pariatur") {{
                                        country = "Papua New Guinea";
                                        os = "molestias";
                                        url = "excepturi";
                                    }}),
                                    add(new DestinationModel("voluptates") {{
                                        country = "Eritrea";
                                        os = "praesentium";
                                        url = "rem";
                                    }}),
                                    add(new DestinationModel("veritatis") {{
                                        country = "Benin";
                                        os = "repudiandae";
                                        url = "sint";
                                    }}),
                                }};
                                metatags = new org.openapis.openapi.models.shared.MetaTagModel[]{{
                                    add(new MetaTagModel("deserunt", "distinctio") {{
                                        content = "incidunt";
                                        name = "Elizabeth Orn";
                                    }}),
                                    add(new MetaTagModel("quos", "perferendis") {{
                                        content = "quibusdam";
                                        name = "Pauline Deckow";
                                    }}),
                                    add(new MetaTagModel("excepturi", "tempora") {{
                                        content = "magni";
                                        name = "Vernon Abshire";
                                    }}),
                                    add(new MetaTagModel("eligendi", "sint") {{
                                        content = "facilis";
                                        name = "Francisco Windler";
                                    }}),
                                }};
                                snippets = new org.openapis.openapi.models.shared.SnippetModel[]{{
                                    add(new SnippetModel("omnis") {{
                                        id = "9e9a3efa-77df-4b14-8d66-ae395efb9ba8";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("sapiente", "amet");
                                            put("deserunt", "nisi");
                                            put("vel", "natus");
                                        }};
                                    }}),
                                    add(new SnippetModel("eius") {{
                                        id = "7074ba44-69b6-4e21-8195-9890afa563e2";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("quasi", "iure");
                                            put("doloribus", "debitis");
                                        }};
                                    }}),
                                }};
                            }};, "maxime") {{
                domainName = "deleniti";
            }};            

            UpdateAliasResponse res = sdk.alias.updateAlias(req, new UpdateAliasSecurity("facilis") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
