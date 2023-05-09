# SDK

## Overview

API of the Patch application on [cloud.redhat.com](cloud.redhat.com)

Syntax of the `filter[name]` query parameters is described in  [Filters documentation](https://github.com/RedHatInsights/patchman-engine/wiki/API-custom-filters)

### Available Operations

* [latestPackage](#latestpackage) - Show me metadata of selected package
* [deletesystem](#deletesystem) - Delete system by inventory id
* [detailAdvisory](#detailadvisory) - Show me details an advisory by given advisory name
* [detailSystem](#detailsystem) - Show me details about a system by given inventory id
* [exportAdvisories](#exportadvisories) - Export applicable advisories for all my systems
* [exportAdvisorySystems](#exportadvisorysystems) - Export systems for my account
* [exportPackageSystems](#exportpackagesystems) - Show me all my systems which have a package installed
* [exportPackages](#exportpackages) - Show me all installed packages across my systems
* [exportSystemAdvisories](#exportsystemadvisories) - Export applicable advisories for all my systems
* [exportSystemPackages](#exportsystempackages) - Show me details about a system packages by given inventory id
* [exportSystems](#exportsystems) - Export systems for my account
* [listAdvisories](#listadvisories) - Show me all applicable advisories for all my systems
* [listAdvisorySystems](#listadvisorysystems) - Show me systems on which the given advisory is applicable
* [listPackages](#listpackages) - Show me all installed packages across my systems
* [listSystemAdvisories](#listsystemadvisories) - Show me advisories for a system by given inventory id
* [listSystems](#listsystems) - Show me all my systems
* [packageSystems](#packagesystems) - Show me all my systems which have a package installed
* [packageVersions](#packageversions) - Show me all package versions installed on some system
* [systemPackages](#systempackages) - Show me details about a system packages by given inventory id
* [viewAdvisoriesSystems](#viewadvisoriessystems) - View advisory-system pairs for selected systems and advisories
* [viewSystemsAdvisories](#viewsystemsadvisories) - View system-advisory pairs for selected systems and advisories

## latestPackage

Show me metadata of selected package

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LatestPackageRequest;
import org.openapis.openapi.models.operations.LatestPackageResponse;
import org.openapis.openapi.models.operations.LatestPackageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LatestPackageRequest req = new LatestPackageRequest("distinctio");            

            LatestPackageResponse res = sdk.sdk.latestPackage(req, new LatestPackageSecurity("quibusdam") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersPackageDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletesystem

Delete system by inventory id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletesystemRequest;
import org.openapis.openapi.models.operations.DeletesystemResponse;
import org.openapis.openapi.models.operations.DeletesystemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletesystemRequest req = new DeletesystemRequest("unde");            

            DeletesystemResponse res = sdk.sdk.deletesystem(req, new DeletesystemSecurity("nulla") {{
                rhIdentity = "YOUR_API_KEY_HERE";
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

## detailAdvisory

Show me details an advisory by given advisory name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetailAdvisoryRequest;
import org.openapis.openapi.models.operations.DetailAdvisoryResponse;
import org.openapis.openapi.models.operations.DetailAdvisorySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DetailAdvisoryRequest req = new DetailAdvisoryRequest("corrupti");            

            DetailAdvisoryResponse res = sdk.sdk.detailAdvisory(req, new DetailAdvisorySecurity("illum") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersAdvisoryDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detailSystem

Show me details about a system by given inventory id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetailSystemRequest;
import org.openapis.openapi.models.operations.DetailSystemResponse;
import org.openapis.openapi.models.operations.DetailSystemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DetailSystemRequest req = new DetailSystemRequest("vel");            

            DetailSystemResponse res = sdk.sdk.detailSystem(req, new DetailSystemSecurity("error") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersSystemDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportAdvisories

Export applicable advisories for all my systems

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportAdvisoriesRequest;
import org.openapis.openapi.models.operations.ExportAdvisoriesResponse;
import org.openapis.openapi.models.operations.ExportAdvisoriesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportAdvisoriesRequest req = new ExportAdvisoriesRequest() {{
                filterAdvisoryType = "deserunt";
                filterApplicableSystems = "suscipit";
                filterDescription = "iure";
                filterId = "magnam";
                filterPublicDate = "debitis";
                filterSeverity = "ipsa";
                filterSynopsis = "delectus";
                search = "tempora";
            }};            

            ExportAdvisoriesResponse res = sdk.sdk.exportAdvisories(req, new ExportAdvisoriesSecurity("suscipit") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersAdvisoryInlineItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportAdvisorySystems

Export systems for my account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportAdvisorySystemsRequest;
import org.openapis.openapi.models.operations.ExportAdvisorySystemsResponse;
import org.openapis.openapi.models.operations.ExportAdvisorySystemsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportAdvisorySystemsRequest req = new ExportAdvisorySystemsRequest("molestiae") {{
                filterDisplayName = "minus";
                filterId = "placeat";
                filterLastEvaluation = "voluptatum";
                filterLastUpload = "iusto";
                filterOtherCount = "excepturi";
                filterPackagesInstalled = "nisi";
                filterPackagesUpdatable = "recusandae";
                filterRhbaCount = "temporibus";
                filterRheaCount = "ab";
                filterRhsaCount = "quis";
                filterStale = "veritatis";
                filterSystemProfileSapSidsIn = new String[]{{
                    add("perferendis"),
                    add("ipsam"),
                    add("repellendus"),
                }};
                filterSystemProfileSapSystem = "sapiente";
                search = "quo";
                tags = new String[]{{
                    add("at"),
                }};
            }};            

            ExportAdvisorySystemsResponse res = sdk.sdk.exportAdvisorySystems(req, new ExportAdvisorySystemsSecurity("at") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersSystemInlineItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportPackageSystems

Show me all my systems which have a package installed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportPackageSystemsRequest;
import org.openapis.openapi.models.operations.ExportPackageSystemsResponse;
import org.openapis.openapi.models.operations.ExportPackageSystemsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportPackageSystemsRequest req = new ExportPackageSystemsRequest("maiores") {{
                filterSystemProfileSapSidsIn = new String[]{{
                    add("quod"),
                    add("quod"),
                }};
                filterSystemProfileSapSystem = "esse";
                tags = new String[]{{
                    add("porro"),
                    add("dolorum"),
                    add("dicta"),
                }};
            }};            

            ExportPackageSystemsResponse res = sdk.sdk.exportPackageSystems(req, new ExportPackageSystemsSecurity("nam") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersPackageSystemItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportPackages

Show me all installed packages across my systems

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportPackagesRequest;
import org.openapis.openapi.models.operations.ExportPackagesResponse;
import org.openapis.openapi.models.operations.ExportPackagesSecurity;
import org.openapis.openapi.models.operations.ExportPackagesSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportPackagesRequest req = new ExportPackagesRequest() {{
                filterName = "officia";
                filterSummary = "occaecati";
                filterSystemsInstalled = "fugit";
                filterSystemsUpdatable = "deleniti";
                search = "hic";
                sort = ExportPackagesSortEnum.SYSTEMS_UPDATABLE;
            }};            

            ExportPackagesResponse res = sdk.sdk.exportPackages(req, new ExportPackagesSecurity("totam") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersPackageItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportSystemAdvisories

Export applicable advisories for all my systems

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportSystemAdvisoriesRequest;
import org.openapis.openapi.models.operations.ExportSystemAdvisoriesResponse;
import org.openapis.openapi.models.operations.ExportSystemAdvisoriesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportSystemAdvisoriesRequest req = new ExportSystemAdvisoriesRequest("beatae") {{
                filterAdvisoryType = "commodi";
                filterDescription = "molestiae";
                filterId = "modi";
                filterPublicDate = "qui";
                filterSeverity = "impedit";
                filterSynopsis = "cum";
                search = "esse";
            }};            

            ExportSystemAdvisoriesResponse res = sdk.sdk.exportSystemAdvisories(req, new ExportSystemAdvisoriesSecurity("ipsum") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersSystemAdvisoriesDBLookups != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportSystemPackages

Show me details about a system packages by given inventory id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportSystemPackagesRequest;
import org.openapis.openapi.models.operations.ExportSystemPackagesResponse;
import org.openapis.openapi.models.operations.ExportSystemPackagesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportSystemPackagesRequest req = new ExportSystemPackagesRequest("excepturi") {{
                filterDescription = "aspernatur";
                filterEvra = "perferendis";
                filterName = "ad";
                filterSummary = "natus";
                filterUpdatable = false;
                search = "sed";
            }};            

            ExportSystemPackagesResponse res = sdk.sdk.exportSystemPackages(req, new ExportSystemPackagesSecurity("iste") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersSystemPackageInlines != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportSystems

Export systems for my account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportSystemsRequest;
import org.openapis.openapi.models.operations.ExportSystemsResponse;
import org.openapis.openapi.models.operations.ExportSystemsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportSystemsRequest req = new ExportSystemsRequest() {{
                filterDisplayName = "dolor";
                filterId = "natus";
                filterLastEvaluation = "laboriosam";
                filterLastUpload = "hic";
                filterOtherCount = "saepe";
                filterPackagesInstalled = "fuga";
                filterPackagesUpdatable = "in";
                filterRhbaCount = "corporis";
                filterRheaCount = "iste";
                filterRhsaCount = "iure";
                filterStale = "saepe";
                filterSystemProfileSapSidsIn = new String[]{{
                    add("architecto"),
                    add("ipsa"),
                    add("reiciendis"),
                }};
                filterSystemProfileSapSystem = "est";
                search = "mollitia";
                tags = new String[]{{
                    add("dolores"),
                    add("dolorem"),
                    add("corporis"),
                }};
            }};            

            ExportSystemsResponse res = sdk.sdk.exportSystems(req, new ExportSystemsSecurity("explicabo") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersSystemInlineItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAdvisories

Show me all applicable advisories for all my systems

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAdvisoriesRequest;
import org.openapis.openapi.models.operations.ListAdvisoriesResponse;
import org.openapis.openapi.models.operations.ListAdvisoriesSecurity;
import org.openapis.openapi.models.operations.ListAdvisoriesSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAdvisoriesRequest req = new ListAdvisoriesRequest() {{
                filterAdvisoryType = "nobis";
                filterApplicableSystems = "enim";
                filterDescription = "omnis";
                filterId = "nemo";
                filterPublicDate = "minima";
                filterSeverity = "excepturi";
                filterSynopsis = "accusantium";
                filterSystemProfileSapSidsIn = new String[]{{
                    add("culpa"),
                    add("doloribus"),
                }};
                filterSystemProfileSapSystem = "sapiente";
                limit = 102044L;
                offset = 652790L;
                search = "dolorem";
                sort = ListAdvisoriesSortEnum.SYNOPSIS;
                tags = new String[]{{
                    add("repellat"),
                }};
            }};            

            ListAdvisoriesResponse res = sdk.sdk.listAdvisories(req, new ListAdvisoriesSecurity("mollitia") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersAdvisoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAdvisorySystems

Show me systems on which the given advisory is applicable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAdvisorySystemsRequest;
import org.openapis.openapi.models.operations.ListAdvisorySystemsResponse;
import org.openapis.openapi.models.operations.ListAdvisorySystemsSecurity;
import org.openapis.openapi.models.operations.ListAdvisorySystemsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAdvisorySystemsRequest req = new ListAdvisorySystemsRequest("occaecati") {{
                filterCreated = "numquam";
                filterCulledTimestamp = "commodi";
                filterDisplayName = "quam";
                filterId = "molestiae";
                filterInsightsId = "velit";
                filterLastEvaluation = "error";
                filterLastUpload = "quia";
                filterOtherCount = "quis";
                filterRhbaCount = "vitae";
                filterRheaCount = "laborum";
                filterRhsaCount = "animi";
                filterStale = "enim";
                filterStaleTimestamp = "odit";
                filterStaleWarningTimestamp = "quo";
                filterSystemProfileSapSidsIn = new String[]{{
                    add("tenetur"),
                }};
                filterSystemProfileSapSystem = "ipsam";
                limit = 662527L;
                offset = 820994L;
                search = "aut";
                sort = ListAdvisorySystemsSortEnum.ID;
                tags = new String[]{{
                    add("temporibus"),
                    add("laborum"),
                    add("quasi"),
                }};
            }};            

            ListAdvisorySystemsResponse res = sdk.sdk.listAdvisorySystems(req, new ListAdvisorySystemsSecurity("reiciendis") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersAdvisorySystemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPackages

Show me all installed packages across my systems

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPackagesRequest;
import org.openapis.openapi.models.operations.ListPackagesResponse;
import org.openapis.openapi.models.operations.ListPackagesSecurity;
import org.openapis.openapi.models.operations.ListPackagesSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListPackagesRequest req = new ListPackagesRequest() {{
                filterName = "voluptatibus";
                filterSummary = "vero";
                filterSystemProfileSapSidsIn = new String[]{{
                    add("praesentium"),
                    add("voluptatibus"),
                }};
                filterSystemProfileSapSystem = "ipsa";
                filterSystemsInstalled = "omnis";
                filterSystemsUpdatable = "voluptate";
                limit = 739264L;
                offset = 19987L;
                search = "doloremque";
                sort = ListPackagesSortEnum.NAME;
                tags = new String[]{{
                    add("maiores"),
                    add("dicta"),
                }};
            }};            

            ListPackagesResponse res = sdk.sdk.listPackages(req, new ListPackagesSecurity("corporis") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersPackagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSystemAdvisories

Show me advisories for a system by given inventory id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSystemAdvisoriesRequest;
import org.openapis.openapi.models.operations.ListSystemAdvisoriesResponse;
import org.openapis.openapi.models.operations.ListSystemAdvisoriesSecurity;
import org.openapis.openapi.models.operations.ListSystemAdvisoriesSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSystemAdvisoriesRequest req = new ListSystemAdvisoriesRequest("dolore") {{
                filterAdvisoryType = "iusto";
                filterDescription = "dicta";
                filterId = "harum";
                filterPublicDate = "enim";
                filterSeverity = "accusamus";
                filterSynopsis = "commodi";
                limit = 918236L;
                offset = 64147L;
                search = "ipsum";
                sort = ListSystemAdvisoriesSortEnum.SYNOPSIS;
            }};            

            ListSystemAdvisoriesResponse res = sdk.sdk.listSystemAdvisories(req, new ListSystemAdvisoriesSecurity("molestias") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersSystemAdvisoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSystems

Show me all my systems

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSystemsRequest;
import org.openapis.openapi.models.operations.ListSystemsResponse;
import org.openapis.openapi.models.operations.ListSystemsSecurity;
import org.openapis.openapi.models.operations.ListSystemsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSystemsRequest req = new ListSystemsRequest() {{
                filterCreated = "excepturi";
                filterCulledTimestamp = "pariatur";
                filterDisplayName = "modi";
                filterId = "praesentium";
                filterInsightsId = "rem";
                filterLastEvaluation = "voluptates";
                filterLastUpload = "quasi";
                filterOtherCount = "repudiandae";
                filterPackagesInstalled = "sint";
                filterPackagesUpdatable = "veritatis";
                filterRhbaCount = "itaque";
                filterRheaCount = "incidunt";
                filterRhsaCount = "enim";
                filterStale = "consequatur";
                filterStaleTimestamp = "est";
                filterStaleWarningTimestamp = "quibusdam";
                filterSystemProfileSapSidsIn = new String[]{{
                    add("deserunt"),
                }};
                filterSystemProfileSapSystem = "distinctio";
                limit = 841386L;
                offset = 289406L;
                search = "modi";
                sort = ListSystemsSortEnum.LAST_EVALUATION;
                tags = new String[]{{
                    add("cupiditate"),
                    add("quos"),
                }};
            }};            

            ListSystemsResponse res = sdk.sdk.listSystems(req, new ListSystemsSecurity("perferendis") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersSystemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## packageSystems

Show me all my systems which have a package installed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PackageSystemsRequest;
import org.openapis.openapi.models.operations.PackageSystemsResponse;
import org.openapis.openapi.models.operations.PackageSystemsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PackageSystemsRequest req = new PackageSystemsRequest("magni") {{
                filterSystemProfileSapSidsIn = new String[]{{
                    add("ipsam"),
                    add("alias"),
                    add("fugit"),
                    add("dolorum"),
                }};
                filterSystemProfileSapSystem = "excepturi";
                limit = 270008L;
                offset = 703737L;
                tags = new String[]{{
                    add("labore"),
                    add("delectus"),
                    add("eum"),
                }};
            }};            

            PackageSystemsResponse res = sdk.sdk.packageSystems(req, new PackageSystemsSecurity("non") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersPackageSystemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## packageVersions

Show me all package versions installed on some system

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PackageVersionsRequest;
import org.openapis.openapi.models.operations.PackageVersionsResponse;
import org.openapis.openapi.models.operations.PackageVersionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PackageVersionsRequest req = new PackageVersionsRequest("eligendi") {{
                limit = 576157L;
                offset = 396098L;
            }};            

            PackageVersionsResponse res = sdk.sdk.packageVersions(req, new PackageVersionsSecurity("provident") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersPackageVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## systemPackages

Show me details about a system packages by given inventory id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SystemPackagesRequest;
import org.openapis.openapi.models.operations.SystemPackagesResponse;
import org.openapis.openapi.models.operations.SystemPackagesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SystemPackagesRequest req = new SystemPackagesRequest("necessitatibus") {{
                filterDescription = "sint";
                filterEvra = "officia";
                filterName = "dolor";
                filterSummary = "debitis";
                filterUpdatable = false;
                limit = 952749L;
                offset = 680056L;
                search = "in";
            }};            

            SystemPackagesResponse res = sdk.sdk.systemPackages(req, new SystemPackagesSecurity("in") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersSystemPackageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## viewAdvisoriesSystems

View advisory-system pairs for selected systems and advisories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ViewAdvisoriesSystemsResponse;
import org.openapis.openapi.models.operations.ViewAdvisoriesSystemsSecurity;
import org.openapis.openapi.models.shared.ControllersSystemsAdvisoriesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ControllersSystemsAdvisoriesRequest req = new ControllersSystemsAdvisoriesRequest() {{
                advisories = new String[]{{
                    add("maiores"),
                    add("rerum"),
                    add("dicta"),
                    add("magnam"),
                }};
                systems = new String[]{{
                    add("facere"),
                    add("ea"),
                    add("aliquid"),
                    add("laborum"),
                }};
            }};            

            ViewAdvisoriesSystemsResponse res = sdk.sdk.viewAdvisoriesSystems(req, new ViewAdvisoriesSystemsSecurity("accusamus") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersAdvisoriesSystemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## viewSystemsAdvisories

View system-advisory pairs for selected systems and advisories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ViewSystemsAdvisoriesResponse;
import org.openapis.openapi.models.operations.ViewSystemsAdvisoriesSecurity;
import org.openapis.openapi.models.shared.ControllersSystemsAdvisoriesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ControllersSystemsAdvisoriesRequest req = new ControllersSystemsAdvisoriesRequest() {{
                advisories = new String[]{{
                    add("occaecati"),
                }};
                systems = new String[]{{
                    add("accusamus"),
                    add("delectus"),
                }};
            }};            

            ViewSystemsAdvisoriesResponse res = sdk.sdk.viewSystemsAdvisories(req, new ViewSystemsAdvisoriesSecurity("quidem") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersSystemsAdvisoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
