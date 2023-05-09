# dataExporterConfigs

## Overview

Everything about Otoroshi data exporters

### Available Operations

* [dataExporterTemplate](#dataexportertemplate) - Get all data exporter configs
* [createBulkDataExporterConfigs](#createbulkdataexporterconfigs) - Create a new data exporter configs
* [createDataExporterConfig](#createdataexporterconfig) - Create a new data exporter config
* [deleteDataExporterConfig](#deletedataexporterconfig) - Delete a data exporter config
* [deletebulkDataExporterConfig](#deletebulkdataexporterconfig) - Delete a data exporter config
* [findAllDataExporters](#findalldataexporters) - Get all data exporter configs
* [findDataExporterConfigById](#finddataexporterconfigbyid) - Get a data exporter config
* [patchBulkDataExporterConfig](#patchbulkdataexporterconfig) - Update a data exporter configs with a diff
* [patchDataExporterConfig](#patchdataexporterconfig) - Update a data exporter config with a diff
* [updateBulkDataExporterConfig](#updatebulkdataexporterconfig) - Update a data exporter configs
* [updateDataExporterConfig](#updatedataexporterconfig) - Update a data exporter config

## dataExporterTemplate

Get all data exporter configs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataExporterTemplateRequest;
import org.openapis.openapi.models.operations.DataExporterTemplateResponse;
import org.openapis.openapi.models.operations.DataExporterTemplateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataExporterTemplateRequest req = new DataExporterTemplateRequest() {{
                type = "quo";
            }};            

            DataExporterTemplateResponse res = sdk.dataExporterConfigs.dataExporterTemplate(req, new DataExporterTemplateSecurity("illum", "pariatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.dataExporterConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBulkDataExporterConfigs

Create a new data exporter configs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBulkDataExporterConfigsResponse;
import org.openapis.openapi.models.operations.CreateBulkDataExporterConfigsSecurity;
import org.openapis.openapi.models.shared.CustomDataExporterConfig;
import org.openapis.openapi.models.shared.DataExporterConfig;
import org.openapis.openapi.models.shared.DataExporterConfigTypEnum;
import org.openapis.openapi.models.shared.ElasticConfig;
import org.openapis.openapi.models.shared.FileDataExporterConfig;
import org.openapis.openapi.models.shared.Filtering;
import org.openapis.openapi.models.shared.KafkaConfig;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.MailerConsoleExporterConfig;
import org.openapis.openapi.models.shared.MailerConsoleExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.MailerGenericExporterConfig;
import org.openapis.openapi.models.shared.MailerGenericExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.MailerMailgunExporterConfig;
import org.openapis.openapi.models.shared.MailerMailgunExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.MailerMailjetExporterConfig;
import org.openapis.openapi.models.shared.MailerMailjetExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.MailerSendgridExporterConfig;
import org.openapis.openapi.models.shared.MailerSendgridExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.PulsarDataExporterConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DataExporterConfig req = new DataExporterConfig() {{
                bufferSize = 123123;
                config = new MailerSendgridExporterConfig(MailerSendgridExporterConfigTypeEnum.SENDGRID) {{
                    apiKeyPublic = "a string value";
                    to = new String[]{{
                        add("admin@otoroshi.io"),
                        add("admin@otoroshi.io"),
                    }};
                }};;
                desc = "a string value";
                enabled = "a string value";
                filtering = new Filtering() {{
                    exclude = new java.util.HashMap<String, String>[]{{
                        add(new java.util.HashMap<String, String>() {{
                            put("ea", "accusantium");
                        }}),
                        add(new java.util.HashMap<String, String>() {{
                            put("maiores", "quidem");
                        }}),
                        add(new java.util.HashMap<String, String>() {{
                            put("voluptate", "autem");
                            put("nam", "eaque");
                        }}),
                    }};
                    include = new java.util.HashMap<String, String>[]{{
                        add(new java.util.HashMap<String, String>() {{
                            put("voluptatibus", "perferendis");
                            put("fugiat", "amet");
                        }}),
                        add(new java.util.HashMap<String, String>() {{
                            put("cumque", "corporis");
                        }}),
                        add(new java.util.HashMap<String, String>() {{
                            put("libero", "nobis");
                            put("dolores", "quis");
                            put("totam", "dignissimos");
                            put("eaque", "quis");
                        }}),
                        add(new java.util.HashMap<String, String>() {{
                            put("eos", "perferendis");
                        }}),
                    }};
                }};;
                groupDuration = 123L;
                groupSize = 123123;
                id = "a string value";
                jsonWorkers = 123123;
                location = new Location(                new java.util.HashMap<String, String>[]{{
                                    add(new java.util.HashMap<String, String>() {{
                                        put("quam", "dolor");
                                        put("vero", "nostrum");
                                        put("hic", "recusandae");
                                        put("omnis", "facilis");
                                    }}),
                                }}, "a string value");;
                metadata = new java.util.HashMap<String, String>() {{
                    put("voluptatem", "porro");
                    put("consequuntur", "blanditiis");
                    put("error", "eaque");
                }};
                name = "a string value";
                projection = new java.util.HashMap<String, String>() {{
                    put("rerum", "adipisci");
                    put("asperiores", "earum");
                    put("modi", "iste");
                }};
                sendWorkers = 123123;
                typ = DataExporterConfigTypEnum.ELASTIC;
            }};            

            CreateBulkDataExporterConfigsResponse res = sdk.dataExporterConfigs.createBulkDataExporterConfigs(req, new CreateBulkDataExporterConfigsSecurity("deleniti", "pariatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.createBulkDataExporterConfigs200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDataExporterConfig

Create a new data exporter config

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDataExporterConfigResponse;
import org.openapis.openapi.models.operations.CreateDataExporterConfigSecurity;
import org.openapis.openapi.models.shared.CustomDataExporterConfig;
import org.openapis.openapi.models.shared.DataExporterConfig;
import org.openapis.openapi.models.shared.DataExporterConfigTypEnum;
import org.openapis.openapi.models.shared.ElasticConfig;
import org.openapis.openapi.models.shared.FileDataExporterConfig;
import org.openapis.openapi.models.shared.Filtering;
import org.openapis.openapi.models.shared.KafkaConfig;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.MailerConsoleExporterConfig;
import org.openapis.openapi.models.shared.MailerConsoleExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.MailerGenericExporterConfig;
import org.openapis.openapi.models.shared.MailerGenericExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.MailerMailgunExporterConfig;
import org.openapis.openapi.models.shared.MailerMailgunExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.MailerMailjetExporterConfig;
import org.openapis.openapi.models.shared.MailerMailjetExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.MailerSendgridExporterConfig;
import org.openapis.openapi.models.shared.MailerSendgridExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.PulsarDataExporterConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DataExporterConfig req = new DataExporterConfig() {{
                bufferSize = 123123;
                config = new MailerMailgunExporterConfig(MailerMailgunExporterConfigTypeEnum.MAILGUN) {{
                    apiKey = "a string value";
                    domain = "a string value";
                    eu = true;
                    to = new String[]{{
                        add("admin@otoroshi.io"),
                        add("admin@otoroshi.io"),
                        add("admin@otoroshi.io"),
                        add("admin@otoroshi.io"),
                    }};
                }};;
                desc = "a string value";
                enabled = "a string value";
                filtering = new Filtering() {{
                    exclude = new java.util.HashMap<String, String>[]{{
                        add(new java.util.HashMap<String, String>() {{
                            put("quaerat", "quos");
                            put("aliquid", "dolorem");
                            put("dolorem", "dolor");
                            put("qui", "ipsum");
                        }}),
                        add(new java.util.HashMap<String, String>() {{
                            put("excepturi", "cum");
                            put("voluptate", "dignissimos");
                            put("reiciendis", "amet");
                            put("dolorum", "numquam");
                        }}),
                        add(new java.util.HashMap<String, String>() {{
                            put("ipsa", "ipsa");
                        }}),
                    }};
                    include = new java.util.HashMap<String, String>[]{{
                        add(new java.util.HashMap<String, String>() {{
                            put("quaerat", "accusamus");
                            put("quidem", "voluptatibus");
                        }}),
                        add(new java.util.HashMap<String, String>() {{
                            put("natus", "eos");
                            put("atque", "sit");
                        }}),
                    }};
                }};;
                groupDuration = 123L;
                groupSize = 123123;
                id = "a string value";
                jsonWorkers = 123123;
                location = new Location(                new java.util.HashMap<String, String>[]{{
                                    add(new java.util.HashMap<String, String>() {{
                                        put("soluta", "dolorum");
                                    }}),
                                    add(new java.util.HashMap<String, String>() {{
                                        put("voluptate", "dolorum");
                                        put("deleniti", "omnis");
                                    }}),
                                    add(new java.util.HashMap<String, String>() {{
                                        put("distinctio", "asperiores");
                                        put("nihil", "ipsum");
                                        put("voluptate", "id");
                                        put("saepe", "eius");
                                    }}),
                                    add(new java.util.HashMap<String, String>() {{
                                        put("perferendis", "amet");
                                    }}),
                                }}, "a string value");;
                metadata = new java.util.HashMap<String, String>() {{
                    put("accusamus", "ad");
                    put("saepe", "suscipit");
                    put("deserunt", "provident");
                    put("minima", "repellendus");
                }};
                name = "a string value";
                projection = new java.util.HashMap<String, String>() {{
                    put("similique", "alias");
                    put("at", "quaerat");
                    put("tempora", "vel");
                }};
                sendWorkers = 123123;
                typ = DataExporterConfigTypEnum.CONSOLE;
            }};            

            CreateDataExporterConfigResponse res = sdk.dataExporterConfigs.createDataExporterConfig(req, new CreateDataExporterConfigSecurity("officiis", "qui") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.dataExporterConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDataExporterConfig

Delete a data exporter config

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDataExporterConfigRequest;
import org.openapis.openapi.models.operations.DeleteDataExporterConfigResponse;
import org.openapis.openapi.models.operations.DeleteDataExporterConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDataExporterConfigRequest req = new DeleteDataExporterConfigRequest("dolorum");            

            DeleteDataExporterConfigResponse res = sdk.dataExporterConfigs.deleteDataExporterConfig(req, new DeleteDataExporterConfigSecurity("a", "esse") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.deleted != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletebulkDataExporterConfig

Delete a data exporter config

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletebulkDataExporterConfigResponse;
import org.openapis.openapi.models.operations.DeletebulkDataExporterConfigSecurity;
import org.openapis.openapi.models.shared.Patch;
import org.openapis.openapi.models.shared.PatchOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.Patch[]{{
                add(new Patch(PatchOpEnum.COPY, "a string value") {{
                    op = PatchOpEnum.REMOVE;
                    path = "a string value";
                    value = "ipsum";
                }}),
                add(new Patch(PatchOpEnum.COPY, "a string value") {{
                    op = PatchOpEnum.TEST;
                    path = "a string value";
                    value = "amet";
                }}),
                add(new Patch(PatchOpEnum.REPLACE, "a string value") {{
                    op = PatchOpEnum.TEST;
                    path = "a string value";
                    value = "numquam";
                }}),
            }}            

            DeletebulkDataExporterConfigResponse res = sdk.dataExporterConfigs.deletebulkDataExporterConfig(req, new DeletebulkDataExporterConfigSecurity("dolorem", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.deletebulkDataExporterConfig200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findAllDataExporters

Get all data exporter configs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindAllDataExportersResponse;
import org.openapis.openapi.models.operations.FindAllDataExportersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindAllDataExportersResponse res = sdk.dataExporterConfigs.findAllDataExporters(new FindAllDataExportersSecurity("totam", "nihil") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.dataExporterConfigs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findDataExporterConfigById

Get a data exporter config

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindDataExporterConfigByIdRequest;
import org.openapis.openapi.models.operations.FindDataExporterConfigByIdResponse;
import org.openapis.openapi.models.operations.FindDataExporterConfigByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindDataExporterConfigByIdRequest req = new FindDataExporterConfigByIdRequest("sit");            

            FindDataExporterConfigByIdResponse res = sdk.dataExporterConfigs.findDataExporterConfigById(req, new FindDataExporterConfigByIdSecurity("expedita", "neque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.dataExporterConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchBulkDataExporterConfig

Update a data exporter configs with a diff

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchBulkDataExporterConfigResponse;
import org.openapis.openapi.models.operations.PatchBulkDataExporterConfigSecurity;
import org.openapis.openapi.models.shared.Patch;
import org.openapis.openapi.models.shared.PatchOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.Patch[]{{
                add(new Patch(PatchOpEnum.REPLACE, "a string value") {{
                    op = PatchOpEnum.REMOVE;
                    path = "a string value";
                    value = "libero";
                }}),
            }}            

            PatchBulkDataExporterConfigResponse res = sdk.dataExporterConfigs.patchBulkDataExporterConfig(req, new PatchBulkDataExporterConfigSecurity("deserunt", "quam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.patchBulkDataExporterConfig200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchDataExporterConfig

Update a data exporter config with a diff

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchDataExporterConfigRequest;
import org.openapis.openapi.models.operations.PatchDataExporterConfigResponse;
import org.openapis.openapi.models.operations.PatchDataExporterConfigSecurity;
import org.openapis.openapi.models.shared.Patch;
import org.openapis.openapi.models.shared.PatchOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchDataExporterConfigRequest req = new PatchDataExporterConfigRequest("ipsum") {{
                requestBody = new org.openapis.openapi.models.shared.Patch[]{{
                    add(new Patch(PatchOpEnum.TEST, "a string value") {{
                        op = PatchOpEnum.ADD;
                        path = "a string value";
                        value = "cupiditate";
                    }}),
                    add(new Patch(PatchOpEnum.ADD, "a string value") {{
                        op = PatchOpEnum.TEST;
                        path = "a string value";
                        value = "soluta";
                    }}),
                }};
            }};            

            PatchDataExporterConfigResponse res = sdk.dataExporterConfigs.patchDataExporterConfig(req, new PatchDataExporterConfigSecurity("laborum", "totam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.dataExporterConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBulkDataExporterConfig

Update a data exporter configs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBulkDataExporterConfigResponse;
import org.openapis.openapi.models.operations.UpdateBulkDataExporterConfigSecurity;
import org.openapis.openapi.models.shared.CustomDataExporterConfig;
import org.openapis.openapi.models.shared.DataExporterConfig;
import org.openapis.openapi.models.shared.DataExporterConfigTypEnum;
import org.openapis.openapi.models.shared.ElasticConfig;
import org.openapis.openapi.models.shared.FileDataExporterConfig;
import org.openapis.openapi.models.shared.Filtering;
import org.openapis.openapi.models.shared.KafkaConfig;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.MailerConsoleExporterConfig;
import org.openapis.openapi.models.shared.MailerConsoleExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.MailerGenericExporterConfig;
import org.openapis.openapi.models.shared.MailerGenericExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.MailerMailgunExporterConfig;
import org.openapis.openapi.models.shared.MailerMailgunExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.MailerMailjetExporterConfig;
import org.openapis.openapi.models.shared.MailerMailjetExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.MailerSendgridExporterConfig;
import org.openapis.openapi.models.shared.MailerSendgridExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.PulsarDataExporterConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DataExporterConfig req = new DataExporterConfig() {{
                bufferSize = 123123;
                config = new FileDataExporterConfig("a string value");;
                desc = "a string value";
                enabled = "a string value";
                filtering = new Filtering() {{
                    exclude = new java.util.HashMap<String, String>[]{{
                        add(new java.util.HashMap<String, String>() {{
                            put("distinctio", "facilis");
                        }}),
                    }};
                    include = new java.util.HashMap<String, String>[]{{
                        add(new java.util.HashMap<String, String>() {{
                            put("molestias", "temporibus");
                            put("qui", "neque");
                        }}),
                        add(new java.util.HashMap<String, String>() {{
                            put("magni", "odio");
                        }}),
                    }};
                }};;
                groupDuration = 123L;
                groupSize = 123123;
                id = "a string value";
                jsonWorkers = 123123;
                location = new Location(                new java.util.HashMap<String, String>[]{{
                                    add(new java.util.HashMap<String, String>() {{
                                        put("nam", "hic");
                                        put("voluptatem", "cumque");
                                    }}),
                                }}, "a string value");;
                metadata = new java.util.HashMap<String, String>() {{
                    put("nobis", "et");
                    put("saepe", "ipsum");
                    put("veritatis", "nobis");
                }};
                name = "a string value";
                projection = new java.util.HashMap<String, String>() {{
                    put("tempore", "cupiditate");
                    put("aperiam", "delectus");
                    put("dolorem", "dolore");
                }};
                sendWorkers = 123123;
                typ = DataExporterConfigTypEnum.FILE;
            }};            

            UpdateBulkDataExporterConfigResponse res = sdk.dataExporterConfigs.updateBulkDataExporterConfig(req, new UpdateBulkDataExporterConfigSecurity("adipisci", "dolorum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.updateBulkDataExporterConfig200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDataExporterConfig

Update a data exporter config

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDataExporterConfigRequest;
import org.openapis.openapi.models.operations.UpdateDataExporterConfigResponse;
import org.openapis.openapi.models.operations.UpdateDataExporterConfigSecurity;
import org.openapis.openapi.models.shared.CustomDataExporterConfig;
import org.openapis.openapi.models.shared.DataExporterConfig;
import org.openapis.openapi.models.shared.DataExporterConfigTypEnum;
import org.openapis.openapi.models.shared.ElasticConfig;
import org.openapis.openapi.models.shared.FileDataExporterConfig;
import org.openapis.openapi.models.shared.Filtering;
import org.openapis.openapi.models.shared.KafkaConfig;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.MailerConsoleExporterConfig;
import org.openapis.openapi.models.shared.MailerConsoleExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.MailerGenericExporterConfig;
import org.openapis.openapi.models.shared.MailerGenericExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.MailerMailgunExporterConfig;
import org.openapis.openapi.models.shared.MailerMailgunExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.MailerMailjetExporterConfig;
import org.openapis.openapi.models.shared.MailerMailjetExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.MailerSendgridExporterConfig;
import org.openapis.openapi.models.shared.MailerSendgridExporterConfigTypeEnum;
import org.openapis.openapi.models.shared.PulsarDataExporterConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDataExporterConfigRequest req = new UpdateDataExporterConfigRequest("architecto") {{
                dataExporterConfig = new DataExporterConfig() {{
                    bufferSize = 123123;
                    config = new ElasticConfig("a string value",                 new java.util.HashMap<String, String>() {{
                                        put("quas", "itaque");
                                    }}, "a string value", "a string value", "a string value", "a string value");;
                    desc = "a string value";
                    enabled = "a string value";
                    filtering = new Filtering() {{
                        exclude = new java.util.HashMap<String, String>[]{{
                            add(new java.util.HashMap<String, String>() {{
                                put("repellendus", "porro");
                                put("doloribus", "ut");
                                put("facilis", "cupiditate");
                            }}),
                        }};
                        include = new java.util.HashMap<String, String>[]{{
                            add(new java.util.HashMap<String, String>() {{
                                put("laudantium", "odio");
                            }}),
                        }};
                    }};;
                    groupDuration = 123L;
                    groupSize = 123123;
                    id = "a string value";
                    jsonWorkers = 123123;
                    location = new Location(                new java.util.HashMap<String, String>[]{{
                                        add(new java.util.HashMap<String, String>() {{
                                            put("quisquam", "vero");
                                            put("omnis", "quis");
                                            put("ipsum", "delectus");
                                            put("voluptate", "consectetur");
                                        }}),
                                        add(new java.util.HashMap<String, String>() {{
                                            put("tenetur", "dignissimos");
                                            put("hic", "distinctio");
                                            put("quod", "odio");
                                            put("similique", "facilis");
                                        }}),
                                        add(new java.util.HashMap<String, String>() {{
                                            put("ducimus", "dolore");
                                            put("quibusdam", "illum");
                                            put("sequi", "natus");
                                            put("impedit", "aut");
                                        }}),
                                    }}, "a string value");;
                    metadata = new java.util.HashMap<String, String>() {{
                        put("exercitationem", "nulla");
                        put("fugit", "porro");
                        put("maiores", "doloribus");
                        put("iusto", "eligendi");
                    }};
                    name = "a string value";
                    projection = new java.util.HashMap<String, String>() {{
                        put("alias", "officia");
                        put("tempora", "ipsam");
                    }};
                    sendWorkers = 123123;
                    typ = DataExporterConfigTypEnum.FILE;
                }};;
            }};            

            UpdateDataExporterConfigResponse res = sdk.dataExporterConfigs.updateDataExporterConfig(req, new UpdateDataExporterConfigSecurity("aspernatur", "vel") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.dataExporterConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
