# osdb

### Available Operations

* [actionHelp](#actionhelp) - Action help
* [describeAction](#describeaction) - Describe action
* [describeService](#describeservice) - Describe service
* [executeAction](#executeaction) - Execute action
* [listActions](#listactions) - List actions
* [listServices](#listservices) - List services
* [loadService](#loadservice) - Load service
* [login](#login) - Login
* [logout](#logout) - Logout
* [unloadService](#unloadservice) - Unload service

## actionHelp

Returns the help text for a given service action

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionHelpRequest;
import org.openapis.openapi.models.operations.ActionHelpResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionHelpRequest req = new ActionHelpRequest("distinctio", "quibusdam");            

            ActionHelpResponse res = sdk.osdb.actionHelp(req);

            if (res.actionHelpResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAction

Returns a description of a given service action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeActionRequest;
import org.openapis.openapi.models.operations.DescribeActionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DescribeActionRequest req = new DescribeActionRequest("unde", "nulla");            

            DescribeActionResponse res = sdk.osdb.describeAction(req);

            if (res.describeActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeService

Returns a description of a given service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeServiceRequest;
import org.openapis.openapi.models.operations.DescribeServiceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DescribeServiceRequest req = new DescribeServiceRequest("corrupti");            

            DescribeServiceResponse res = sdk.osdb.describeService(req);

            if (res.describeServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## executeAction

Executes a registered service action and returns any output from the action.
The data returned in the POST response body may be: 
* the raw action output, 
* a URL encapsulating the action request which executes the action when dereferenced  (only for actions using GET), 
* RDF generated from the action output,
* a URL to an RDF viewer's display of the generated RDF.

Any parameters required by the action are supplied as a JSON object in the POST body. The parameter types supported are: "query", "header", "uri", "path" and "body".  The parameter type determines where a supplied parameter value is inserted into the HTTP request constructed by OSDB to invoke the target service action. In addition to native parameters required by the service action, 'Execute action' accepts some OSDB-specific parameters.<br/><br/>

**Examples**
* ```curl -ik -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec```  
* ```curl -ikL -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"generate_rdf", "osdb:response_format":"application/rdf+xml" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec``` 
* ```curl -ikL -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"display_rdf" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec``` 
* ```curl -ik -X POST -d '{ "q":"skiing", "osdb:response_format": "application/rdf+xml" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec``` 
* ```curl -ik -X POST -d '{ "q":"skiing", "osdb:output_type": "url_only" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec``` 
* ```curl -ik -X POST -d '{ "Content-Location": "http://demo.openlinksw.co.uk/pubs", "osdb:body_data_src_url": "http://ods-qa.openlinksw.com/DAV/home/osdb/pubs.csv", "extractor": "csv", "osdb:response_format": "application/rdf+xml", "osdb:body_data_encoding": "text/csv" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/csv_transformer/transform/exec```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExecuteActionRequest;
import org.openapis.openapi.models.operations.ExecuteActionResponse;
import org.openapis.openapi.models.shared.ExecBody;
import org.openapis.openapi.models.shared.ExecBodyOsdbOutputTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExecuteActionRequest req = new ExecuteActionRequest("illum", "vel") {{
                execBody = new ExecBody() {{
                    actionSpecificProperty1 = "error";
                    actionSpecificProperty2 = "deserunt";
                    osdbBodyDataEncoding = "suscipit";
                    osdbBodyDataRaw = "iure";
                    osdbBodyDataSrcUrl = "http://unique-baboon.org";
                    osdbOutputType = ExecBodyOsdbOutputTypeEnum.URL_ONLY;
                    osdbResponseFormat = "suscipit";
                }};;
            }};            

            ExecuteActionResponse res = sdk.osdb.executeAction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listActions

Returns an array of action descriptions for the actions supported by the given service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListActionsRequest;
import org.openapis.openapi.models.operations.ListActionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListActionsRequest req = new ListActionsRequest("molestiae");            

            ListActionsResponse res = sdk.osdb.listActions(req);

            if (res.listActionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServices

Returns descriptions of all services registered with the OSDB server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServicesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServicesResponse res = sdk.osdb.listServices();

            if (res.listServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## loadService

Loads a service description into the OSDB Service Registry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LoadServiceRequestBody;
import org.openapis.openapi.models.operations.LoadServiceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LoadServiceRequestBody req = new LoadServiceRequestBody("minus") {{
                serviceMoniker = "placeat";
            }};            

            LoadServiceResponse res = sdk.osdb.loadService(req);

            if (res.loadService200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## login

Logs a user into the OSDB server, authenticating them by their WebID and returning an OSDB session ID in cookie osdb.sid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LoginResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LoginResponse res = sdk.osdb.login();

            if (res.loginResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## logout

Logs a user out of the OSDB server, ending their OSDB session

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LogoutResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LogoutResponse res = sdk.osdb.logout();

            if (res.logoutResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unloadService

Removes a service description from the OSDB Service Registry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnloadServiceRequest;
import org.openapis.openapi.models.operations.UnloadServiceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UnloadServiceRequest req = new UnloadServiceRequest("voluptatum");            

            UnloadServiceResponse res = sdk.osdb.unloadService(req);

            if (res.unloadService200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
