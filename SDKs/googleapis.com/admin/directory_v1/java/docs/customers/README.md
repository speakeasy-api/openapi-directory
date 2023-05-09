# customers

### Available Operations

* [adminCustomersChromePrintServersBatchCreatePrintServers](#admincustomerschromeprintserversbatchcreateprintservers) - Creates multiple print servers.
* [adminCustomersChromePrintServersBatchDeletePrintServers](#admincustomerschromeprintserversbatchdeleteprintservers) - Deletes multiple print servers.
* [adminCustomersChromePrintServersCreate](#admincustomerschromeprintserverscreate) - Creates a print server.
* [adminCustomersChromePrintServersDelete](#admincustomerschromeprintserversdelete) - Deletes a print server.
* [adminCustomersChromePrintServersGet](#admincustomerschromeprintserversget) - Returns a print server's configuration.
* [adminCustomersChromePrintServersList](#admincustomerschromeprintserverslist) - Lists print server configurations.
* [adminCustomersChromePrintServersPatch](#admincustomerschromeprintserverspatch) - Updates a print server's configuration.
* [adminCustomersChromePrintersBatchCreatePrinters](#admincustomerschromeprintersbatchcreateprinters) - Creates printers under given Organization Unit.
* [adminCustomersChromePrintersBatchDeletePrinters](#admincustomerschromeprintersbatchdeleteprinters) - Deletes printers in batch.
* [adminCustomersChromePrintersCreate](#admincustomerschromeprinterscreate) - Creates a printer under given Organization Unit.
* [adminCustomersChromePrintersList](#admincustomerschromeprinterslist) - List printers configs.
* [adminCustomersChromePrintersListPrinterModels](#admincustomerschromeprinterslistprintermodels) - Lists the supported printer models.
* [directoryCustomersGet](#directorycustomersget) - Retrieves a customer.
* [directoryCustomersPatch](#directorycustomerspatch) - Patches a customer.
* [directoryCustomersUpdate](#directorycustomersupdate) - Updates a customer.

## adminCustomersChromePrintServersBatchCreatePrintServers

Creates multiple print servers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersBatchCreatePrintServersRequest;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersBatchCreatePrintServersResponse;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersBatchCreatePrintServersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchCreatePrintServersRequestInput;
import org.openapis.openapi.models.shared.CreatePrintServerRequestInput;
import org.openapis.openapi.models.shared.PrintServerInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminCustomersChromePrintServersBatchCreatePrintServersRequest req = new AdminCustomersChromePrintServersBatchCreatePrintServersRequest("rerum") {{
                dollarXgafv = XgafvEnum.TWO;
                batchCreatePrintServersRequestInput = new BatchCreatePrintServersRequestInput() {{
                    requests = new org.openapis.openapi.models.shared.CreatePrintServerRequestInput[]{{
                        add(new CreatePrintServerRequestInput() {{
                            parent = "distinctio";
                            printServer = new PrintServerInput() {{
                                description = "eligendi";
                                displayName = "sit";
                                id = "ab3c20c4-f378-49fd-871f-99dd2efd121a";
                                name = "Dr. Gene Wiegand";
                                orgUnitId = "in";
                                uri = "http://second-statute.net";
                            }};
                        }}),
                        add(new CreatePrintServerRequestInput() {{
                            parent = "accusantium";
                            printServer = new PrintServerInput() {{
                                description = "aliquam";
                                displayName = "sapiente";
                                id = "15756082-d68e-4a19-b1d1-7051339d0808";
                                name = "Iris Bernhard";
                                orgUnitId = "voluptatem";
                                uri = "http://obedient-desire.net";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "aut";
                fields = "dignissimos";
                key = "dicta";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "velit";
                uploadProtocol = "voluptatibus";
            }};            

            AdminCustomersChromePrintServersBatchCreatePrintServersResponse res = sdk.customers.adminCustomersChromePrintServersBatchCreatePrintServers(req, new AdminCustomersChromePrintServersBatchCreatePrintServersSecurity("voluptas", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchCreatePrintServersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCustomersChromePrintServersBatchDeletePrintServers

Deletes multiple print servers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersBatchDeletePrintServersRequest;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersBatchDeletePrintServersResponse;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersBatchDeletePrintServersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchDeletePrintServersRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminCustomersChromePrintServersBatchDeletePrintServersRequest req = new AdminCustomersChromePrintServersBatchDeletePrintServersRequest("aperiam") {{
                dollarXgafv = XgafvEnum.ONE;
                batchDeletePrintServersRequest = new BatchDeletePrintServersRequest() {{
                    printServerIds = new String[]{{
                        add("consequuntur"),
                        add("repellendus"),
                    }};
                }};;
                accessToken = "officia";
                alt = AltEnum.PROTO;
                callback = "dignissimos";
                fields = "officia";
                key = "asperiores";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "quaerat";
                uploadProtocol = "porro";
            }};            

            AdminCustomersChromePrintServersBatchDeletePrintServersResponse res = sdk.customers.adminCustomersChromePrintServersBatchDeletePrintServers(req, new AdminCustomersChromePrintServersBatchDeletePrintServersSecurity("quod", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchDeletePrintServersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCustomersChromePrintServersCreate

Creates a print server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersCreateRequest;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersCreateResponse;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PrintServerInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminCustomersChromePrintServersCreateRequest req = new AdminCustomersChromePrintServersCreateRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                printServerInput = new PrintServerInput() {{
                    description = "fuga";
                    displayName = "id";
                    id = "63aae8d6-7864-4dbb-a75f-d5e60b375ed4";
                    name = "Ricardo Wisozk";
                    orgUnitId = "necessitatibus";
                    uri = "http://clever-wreck.biz";
                }};;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "beatae";
                fields = "dignissimos";
                key = "a";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "corporis";
                uploadProtocol = "harum";
            }};            

            AdminCustomersChromePrintServersCreateResponse res = sdk.customers.adminCustomersChromePrintServersCreate(req, new AdminCustomersChromePrintServersCreateSecurity("laboriosam", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.printServer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCustomersChromePrintServersDelete

Deletes a print server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersDeleteRequest;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersDeleteResponse;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminCustomersChromePrintServersDeleteRequest req = new AdminCustomersChromePrintServersDeleteRequest("voluptates") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                callback = "similique";
                fields = "tempora";
                key = "aspernatur";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "voluptas";
                uploadProtocol = "minima";
            }};            

            AdminCustomersChromePrintServersDeleteResponse res = sdk.customers.adminCustomersChromePrintServersDelete(req, new AdminCustomersChromePrintServersDeleteSecurity("nobis", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCustomersChromePrintServersGet

Returns a print server's configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersGetRequest;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersGetResponse;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersGetSecurity;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersGetSecurityOption1;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminCustomersChromePrintServersGetRequest req = new AdminCustomersChromePrintServersGetRequest("adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolores";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "dolore";
                key = "aliquam";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ullam";
                uploadProtocol = "adipisci";
            }};            

            AdminCustomersChromePrintServersGetResponse res = sdk.customers.adminCustomersChromePrintServersGet(req, new AdminCustomersChromePrintServersGetSecurity() {{
                option1 = new AdminCustomersChromePrintServersGetSecurityOption1("cum", "blanditiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.printServer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCustomersChromePrintServersList

Lists print server configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersListRequest;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersListResponse;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersListSecurity;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersListSecurityOption1;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminCustomersChromePrintServersListRequest req = new AdminCustomersChromePrintServersListRequest("quas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nesciunt";
                alt = AltEnum.MEDIA;
                callback = "corrupti";
                fields = "pariatur";
                filter = "totam";
                key = "hic";
                oauthToken = "exercitationem";
                orderBy = "nobis";
                orgUnitId = "sit";
                pageSize = 699575L;
                pageToken = "sed";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "explicabo";
                uploadProtocol = "asperiores";
            }};            

            AdminCustomersChromePrintServersListResponse res = sdk.customers.adminCustomersChromePrintServersList(req, new AdminCustomersChromePrintServersListSecurity() {{
                option1 = new AdminCustomersChromePrintServersListSecurityOption1("facilis", "voluptate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listPrintServersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCustomersChromePrintServersPatch

Updates a print server's configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersPatchRequest;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersPatchResponse;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintServersPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PrintServerInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminCustomersChromePrintServersPatchRequest req = new AdminCustomersChromePrintServersPatchRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                printServerInput = new PrintServerInput() {{
                    description = "iste";
                    displayName = "dolore";
                    id = "a276b269-16fe-41f0-8f42-94e3698f447f";
                    name = "Karen Franey";
                    orgUnitId = "facilis";
                    uri = "http://feline-futon.org";
                }};;
                accessToken = "rem";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "error";
                key = "veniam";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "recusandae";
                updateMask = "reiciendis";
                uploadType = "nulla";
                uploadProtocol = "magni";
            }};            

            AdminCustomersChromePrintServersPatchResponse res = sdk.customers.adminCustomersChromePrintServersPatch(req, new AdminCustomersChromePrintServersPatchSecurity("aperiam", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.printServer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCustomersChromePrintersBatchCreatePrinters

Creates printers under given Organization Unit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersBatchCreatePrintersRequest;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersBatchCreatePrintersResponse;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersBatchCreatePrintersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchCreatePrintersRequestInput;
import org.openapis.openapi.models.shared.CreatePrinterRequestInput;
import org.openapis.openapi.models.shared.PrinterInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminCustomersChromePrintersBatchCreatePrintersRequest req = new AdminCustomersChromePrintersBatchCreatePrintersRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                batchCreatePrintersRequestInput = new BatchCreatePrintersRequestInput() {{
                    requests = new org.openapis.openapi.models.shared.CreatePrinterRequestInput[]{{
                        add(new CreatePrinterRequestInput() {{
                            parent = "officiis";
                            printer = new PrinterInput() {{
                                description = "beatae";
                                displayName = "laudantium";
                                id = "58b6a89f-be3a-45aa-8e48-24d0ab407508";
                                makeAndModel = "quas";
                                name = "Zachary Borer";
                                orgUnitId = "sed";
                                uri = "http://impure-fibrosis.org";
                                useDriverlessConfig = false;
                            }};
                        }}),
                        add(new CreatePrinterRequestInput() {{
                            parent = "error";
                            printer = new PrinterInput() {{
                                description = "consequatur";
                                displayName = "incidunt";
                                id = "f3b1194b-8abf-4603-a79f-9dfe0ab7da8a";
                                makeAndModel = "veniam";
                                name = "Ms. Alexandra VonRueden";
                                orgUnitId = "asperiores";
                                uri = "https://hidden-probability.net";
                                useDriverlessConfig = false;
                            }};
                        }}),
                    }};
                }};;
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "amet";
                fields = "assumenda";
                key = "ea";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "officiis";
                uploadProtocol = "officiis";
            }};            

            AdminCustomersChromePrintersBatchCreatePrintersResponse res = sdk.customers.adminCustomersChromePrintersBatchCreatePrinters(req, new AdminCustomersChromePrintersBatchCreatePrintersSecurity("accusamus", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchCreatePrintersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCustomersChromePrintersBatchDeletePrinters

Deletes printers in batch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersBatchDeletePrintersRequest;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersBatchDeletePrintersResponse;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersBatchDeletePrintersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchDeletePrintersRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminCustomersChromePrintersBatchDeletePrintersRequest req = new AdminCustomersChromePrintersBatchDeletePrintersRequest("minima") {{
                dollarXgafv = XgafvEnum.ONE;
                batchDeletePrintersRequest = new BatchDeletePrintersRequest() {{
                    printerIds = new String[]{{
                        add("maiores"),
                        add("corrupti"),
                    }};
                }};;
                accessToken = "at";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "suscipit";
                key = "repudiandae";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "sunt";
                uploadProtocol = "recusandae";
            }};            

            AdminCustomersChromePrintersBatchDeletePrintersResponse res = sdk.customers.adminCustomersChromePrintersBatchDeletePrinters(req, new AdminCustomersChromePrintersBatchDeletePrintersSecurity("dolorum", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchDeletePrintersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCustomersChromePrintersCreate

Creates a printer under given Organization Unit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersCreateRequest;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersCreateResponse;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PrinterInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminCustomersChromePrintersCreateRequest req = new AdminCustomersChromePrintersCreateRequest("labore") {{
                dollarXgafv = XgafvEnum.TWO;
                printerInput = new PrinterInput() {{
                    description = "doloremque";
                    displayName = "repudiandae";
                    id = "1012563f-94e2-49e9-b3e9-22a57a15be3e";
                    makeAndModel = "doloremque";
                    name = "Ms. Melissa Larson";
                    orgUnitId = "qui";
                    uri = "https://inferior-terrorism.biz";
                    useDriverlessConfig = false;
                }};;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                fields = "rem";
                key = "aliquam";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "repellat";
                uploadType = "alias";
                uploadProtocol = "corporis";
            }};            

            AdminCustomersChromePrintersCreateResponse res = sdk.customers.adminCustomersChromePrintersCreate(req, new AdminCustomersChromePrintersCreateSecurity("perspiciatis", "nihil") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.printer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCustomersChromePrintersList

List printers configs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersListRequest;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersListResponse;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersListSecurity;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersListSecurityOption1;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminCustomersChromePrintersListRequest req = new AdminCustomersChromePrintersListRequest("mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "alias";
                alt = AltEnum.PROTO;
                callback = "reiciendis";
                fields = "dolores";
                filter = "id";
                key = "minima";
                oauthToken = "dolore";
                orderBy = "dolorum";
                orgUnitId = "nesciunt";
                pageSize = 63207L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "quaerat";
                uploadProtocol = "molestiae";
            }};            

            AdminCustomersChromePrintersListResponse res = sdk.customers.adminCustomersChromePrintersList(req, new AdminCustomersChromePrintersListSecurity() {{
                option1 = new AdminCustomersChromePrintersListSecurityOption1("ex", "ut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listPrintersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCustomersChromePrintersListPrinterModels

Lists the supported printer models.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersListPrinterModelsRequest;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersListPrinterModelsResponse;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersListPrinterModelsSecurity;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersListPrinterModelsSecurityOption1;
import org.openapis.openapi.models.operations.AdminCustomersChromePrintersListPrinterModelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminCustomersChromePrintersListPrinterModelsRequest req = new AdminCustomersChromePrintersListPrinterModelsRequest("culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "debitis";
                alt = AltEnum.MEDIA;
                callback = "eum";
                fields = "nemo";
                filter = "recusandae";
                key = "esse";
                oauthToken = "provident";
                pageSize = 337477L;
                pageToken = "eum";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "provident";
                uploadProtocol = "aspernatur";
            }};            

            AdminCustomersChromePrintersListPrinterModelsResponse res = sdk.customers.adminCustomersChromePrintersListPrinterModels(req, new AdminCustomersChromePrintersListPrinterModelsSecurity() {{
                option1 = new AdminCustomersChromePrintersListPrinterModelsSecurityOption1("ullam", "quasi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listPrinterModelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryCustomersGet

Retrieves a customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryCustomersGetRequest;
import org.openapis.openapi.models.operations.DirectoryCustomersGetResponse;
import org.openapis.openapi.models.operations.DirectoryCustomersGetSecurity;
import org.openapis.openapi.models.operations.DirectoryCustomersGetSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryCustomersGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryCustomersGetRequest req = new DirectoryCustomersGetRequest("animi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "mollitia";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                fields = "animi";
                key = "ex";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "repellat";
                uploadProtocol = "doloribus";
            }};            

            DirectoryCustomersGetResponse res = sdk.customers.directoryCustomersGet(req, new DirectoryCustomersGetSecurity() {{
                option1 = new DirectoryCustomersGetSecurityOption1("ullam", "in") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.customer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryCustomersPatch

Patches a customer.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryCustomersPatchRequest;
import org.openapis.openapi.models.operations.DirectoryCustomersPatchResponse;
import org.openapis.openapi.models.operations.DirectoryCustomersPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Customer;
import org.openapis.openapi.models.shared.CustomerPostalAddress;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryCustomersPatchRequest req = new DirectoryCustomersPatchRequest("nam") {{
                dollarXgafv = XgafvEnum.TWO;
                customer = new Customer() {{
                    alternateEmail = "officia";
                    customerCreationTime = OffsetDateTime.parse("2021-05-17T11:17:46.661Z");
                    customerDomain = "modi";
                    etag = "voluptatibus";
                    id = "9efc1b45-12c1-4032-a48d-c2f615199ebf";
                    kind = "illum";
                    language = "eaque";
                    phoneNumber = "earum";
                    postalAddress = new CustomerPostalAddress() {{
                        addressLine1 = "perspiciatis";
                        addressLine2 = "maiores";
                        addressLine3 = "debitis";
                        contactName = "aliquid";
                        countryCode = "SC";
                        locality = "suscipit";
                        organizationName = "dolorem";
                        postalCode = "76168";
                        region = "nulla";
                    }};;
                }};;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "et";
                fields = "ducimus";
                key = "natus";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "adipisci";
                uploadProtocol = "quasi";
            }};            

            DirectoryCustomersPatchResponse res = sdk.customers.directoryCustomersPatch(req, new DirectoryCustomersPatchSecurity("magni", "doloribus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryCustomersUpdate

Updates a customer.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryCustomersUpdateRequest;
import org.openapis.openapi.models.operations.DirectoryCustomersUpdateResponse;
import org.openapis.openapi.models.operations.DirectoryCustomersUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Customer;
import org.openapis.openapi.models.shared.CustomerPostalAddress;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryCustomersUpdateRequest req = new DirectoryCustomersUpdateRequest("nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                customer = new Customer() {{
                    alternateEmail = "ipsa";
                    customerCreationTime = OffsetDateTime.parse("2022-07-13T05:21:38.727Z");
                    customerDomain = "molestiae";
                    etag = "dicta";
                    id = "778ff61d-0174-4763-a0a1-5db6a660659a";
                    kind = "ab";
                    language = "error";
                    phoneNumber = "possimus";
                    postalAddress = new CustomerPostalAddress() {{
                        addressLine1 = "voluptates";
                        addressLine2 = "mollitia";
                        addressLine3 = "laborum";
                        contactName = "libero";
                        countryCode = "GG";
                        locality = "deleniti";
                        organizationName = "enim";
                        postalCode = "84742";
                        region = "ad";
                    }};;
                }};;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "molestias";
                fields = "cum";
                key = "aliquid";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "omnis";
                uploadProtocol = "veritatis";
            }};            

            DirectoryCustomersUpdateResponse res = sdk.customers.directoryCustomersUpdate(req, new DirectoryCustomersUpdateSecurity("rerum", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
