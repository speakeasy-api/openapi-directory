# services

### Available Operations

* [serviceconsumermanagementServicesSearch](#serviceconsumermanagementservicessearch) - Search tenancy units for a managed service.
* [serviceconsumermanagementServicesTenancyUnitsAddProject](#serviceconsumermanagementservicestenancyunitsaddproject) - Add a new tenant project to the tenancy unit. There can be a maximum of 1024 tenant projects in a tenancy unit. If there are previously failed `AddTenantProject` calls, you might need to call `RemoveTenantProject` first to resolve them before you can make another call to `AddTenantProject` with the same tag. Operation.
* [serviceconsumermanagementServicesTenancyUnitsApplyProjectConfig](#serviceconsumermanagementservicestenancyunitsapplyprojectconfig) - Apply a configuration to an existing tenant project. This project must exist in an active state and have the original owner account. The caller must have permission to add a project to the given tenancy unit. The configuration is applied, but any existing settings on the project aren't modified. Specified policy bindings are applied. Existing bindings aren't modified. Specified services are activated. No service is deactivated. If specified, new billing configuration is applied. Omit a billing configuration to keep the existing one. A service account in the project is created if previously non existed. Specified labels will be appended to tenant project, note that the value of existing label key will be updated if the same label key is requested. The specified folder is ignored, as moving a tenant project to a different folder isn't supported. The operation fails if any of the steps fail, but no rollback of already applied configuration changes is attempted. Operation.
* [serviceconsumermanagementServicesTenancyUnitsAttachProject](#serviceconsumermanagementservicestenancyunitsattachproject) - Attach an existing project to the tenancy unit as a new tenant resource. The project could either be the tenant project reserved by calling `AddTenantProject` under a tenancy unit of a service producer's project of a managed service, or from a separate project. The caller is checked against a set of permissions as if calling `AddTenantProject` on the same service consumer. To trigger the attachment, the targeted tenant project must be in a folder. Make sure the ServiceConsumerManagement service account is the owner of that project. These two requirements are already met if the project is reserved by calling `AddTenantProject`. Operation.
* [serviceconsumermanagementServicesTenancyUnitsCreate](#serviceconsumermanagementservicestenancyunitscreate) - Creates a tenancy unit with no tenant resources. If tenancy unit already exists, it will be returned, however, in this case, returned TenancyUnit does not have tenant_resources field set and ListTenancyUnits has to be used to get a complete TenancyUnit with all fields populated.
* [serviceconsumermanagementServicesTenancyUnitsDelete](#serviceconsumermanagementservicestenancyunitsdelete) - Delete a tenancy unit. Before you delete the tenancy unit, there should be no tenant resources in it that aren't in a DELETED state. Operation.
* [serviceconsumermanagementServicesTenancyUnitsDeleteProject](#serviceconsumermanagementservicestenancyunitsdeleteproject) - Deletes the specified project resource identified by a tenant resource tag. The mothod removes a project lien with a 'TenantManager' origin if that was added. It will then attempt to delete the project. If that operation fails, this method also fails. After the project has been deleted, the tenant resource state is set to DELETED. To permanently remove resource metadata, call the `RemoveTenantProject` method. New resources with the same tag can't be added if there are existing resources in a DELETED state. Operation.
* [serviceconsumermanagementServicesTenancyUnitsList](#serviceconsumermanagementservicestenancyunitslist) - Find the tenancy unit for a managed service and service consumer. This method shouldn't be used in a service producer's runtime path, for example to find the tenant project number when creating VMs. Service producers must persist the tenant project's information after the project is created.
* [serviceconsumermanagementServicesTenancyUnitsRemoveProject](#serviceconsumermanagementservicestenancyunitsremoveproject) - Removes the specified project resource identified by a tenant resource tag. The method removes the project lien with 'TenantManager' origin if that was added. It then attempts to delete the project. If that operation fails, this method also fails. Calls to remove already removed or non-existent tenant project succeed. After the project has been deleted, or if was already in a DELETED state, resource metadata is permanently removed from the tenancy unit. Operation.
* [serviceconsumermanagementServicesTenancyUnitsUndeleteProject](#serviceconsumermanagementservicestenancyunitsundeleteproject) - Attempts to undelete a previously deleted tenant project. The project must be in a DELETED state. There are no guarantees that an undeleted project will be in a fully restored and functional state. Call the `ApplyTenantProjectConfig` method to update its configuration and then validate all managed service resources. Operation.

## serviceconsumermanagementServicesSearch

Search tenancy units for a managed service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesSearchRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesSearchResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesSearchRequest req = new ServiceconsumermanagementServicesSearchRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "modi";
                fields = "qui";
                key = "impedit";
                oauthToken = "cum";
                pageSize = 456150L;
                pageToken = "ipsum";
                prettyPrint = false;
                query = "excepturi";
                quotaUser = "aspernatur";
                uploadType = "perferendis";
                uploadProtocol = "ad";
            }};            

            ServiceconsumermanagementServicesSearchResponse res = sdk.services.serviceconsumermanagementServicesSearch(req, new ServiceconsumermanagementServicesSearchSecurity("natus", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchTenancyUnitsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceconsumermanagementServicesTenancyUnitsAddProject

Add a new tenant project to the tenancy unit. There can be a maximum of 1024 tenant projects in a tenancy unit. If there are previously failed `AddTenantProject` calls, you might need to call `RemoveTenantProject` first to resolve them before you can make another call to `AddTenantProject` with the same tag. Operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsAddProjectRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsAddProjectResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsAddProjectSecurity;
import org.openapis.openapi.models.shared.AddTenantProjectRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BillingConfig;
import org.openapis.openapi.models.shared.PolicyBinding;
import org.openapis.openapi.models.shared.ServiceAccountConfig;
import org.openapis.openapi.models.shared.TenantProjectConfig;
import org.openapis.openapi.models.shared.TenantProjectPolicy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesTenancyUnitsAddProjectRequest req = new ServiceconsumermanagementServicesTenancyUnitsAddProjectRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                addTenantProjectRequest = new AddTenantProjectRequest() {{
                    projectConfig = new TenantProjectConfig() {{
                        billingConfig = new BillingConfig() {{
                            billingAccount = "natus";
                        }};;
                        folder = "laboriosam";
                        labels = new java.util.HashMap<String, String>() {{
                            put("saepe", "fuga");
                            put("in", "corporis");
                            put("iste", "iure");
                            put("saepe", "quidem");
                        }};
                        serviceAccountConfig = new ServiceAccountConfig() {{
                            accountId = "architecto";
                            tenantProjectRoles = new String[]{{
                                add("reiciendis"),
                            }};
                        }};;
                        services = new String[]{{
                            add("mollitia"),
                            add("laborum"),
                            add("dolores"),
                        }};
                        tenantProjectPolicy = new TenantProjectPolicy() {{
                            policyBindings = new org.openapis.openapi.models.shared.PolicyBinding[]{{
                                add(new PolicyBinding() {{
                                    members = new String[]{{
                                        add("explicabo"),
                                        add("nobis"),
                                    }};
                                    role = "enim";
                                }}),
                            }};
                        }};;
                    }};;
                    tag = "omnis";
                }};;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "accusantium";
                key = "iure";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "sapiente";
                uploadProtocol = "architecto";
            }};            

            ServiceconsumermanagementServicesTenancyUnitsAddProjectResponse res = sdk.services.serviceconsumermanagementServicesTenancyUnitsAddProject(req, new ServiceconsumermanagementServicesTenancyUnitsAddProjectSecurity("mollitia", "dolorem") {{
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

## serviceconsumermanagementServicesTenancyUnitsApplyProjectConfig

Apply a configuration to an existing tenant project. This project must exist in an active state and have the original owner account. The caller must have permission to add a project to the given tenancy unit. The configuration is applied, but any existing settings on the project aren't modified. Specified policy bindings are applied. Existing bindings aren't modified. Specified services are activated. No service is deactivated. If specified, new billing configuration is applied. Omit a billing configuration to keep the existing one. A service account in the project is created if previously non existed. Specified labels will be appended to tenant project, note that the value of existing label key will be updated if the same label key is requested. The specified folder is ignored, as moving a tenant project to a different folder isn't supported. The operation fails if any of the steps fail, but no rollback of already applied configuration changes is attempted. Operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfigRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfigResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfigSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplyTenantProjectConfigRequest;
import org.openapis.openapi.models.shared.BillingConfig;
import org.openapis.openapi.models.shared.PolicyBinding;
import org.openapis.openapi.models.shared.ServiceAccountConfig;
import org.openapis.openapi.models.shared.TenantProjectConfig;
import org.openapis.openapi.models.shared.TenantProjectPolicy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfigRequest req = new ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfigRequest("culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                applyTenantProjectConfigRequest = new ApplyTenantProjectConfigRequest() {{
                    projectConfig = new TenantProjectConfig() {{
                        billingConfig = new BillingConfig() {{
                            billingAccount = "repellat";
                        }};;
                        folder = "mollitia";
                        labels = new java.util.HashMap<String, String>() {{
                            put("numquam", "commodi");
                            put("quam", "molestiae");
                            put("velit", "error");
                        }};
                        serviceAccountConfig = new ServiceAccountConfig() {{
                            accountId = "quia";
                            tenantProjectRoles = new String[]{{
                                add("vitae"),
                                add("laborum"),
                            }};
                        }};;
                        services = new String[]{{
                            add("enim"),
                            add("odit"),
                            add("quo"),
                        }};
                        tenantProjectPolicy = new TenantProjectPolicy() {{
                            policyBindings = new org.openapis.openapi.models.shared.PolicyBinding[]{{
                                add(new PolicyBinding() {{
                                    members = new String[]{{
                                        add("ipsam"),
                                        add("id"),
                                        add("possimus"),
                                        add("aut"),
                                    }};
                                    role = "quasi";
                                }}),
                            }};
                        }};;
                    }};;
                    tag = "error";
                }};;
                accessToken = "temporibus";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "reiciendis";
                key = "voluptatibus";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "praesentium";
                uploadProtocol = "voluptatibus";
            }};            

            ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfigResponse res = sdk.services.serviceconsumermanagementServicesTenancyUnitsApplyProjectConfig(req, new ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfigSecurity("ipsa", "omnis") {{
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

## serviceconsumermanagementServicesTenancyUnitsAttachProject

Attach an existing project to the tenancy unit as a new tenant resource. The project could either be the tenant project reserved by calling `AddTenantProject` under a tenancy unit of a service producer's project of a managed service, or from a separate project. The caller is checked against a set of permissions as if calling `AddTenantProject` on the same service consumer. To trigger the attachment, the targeted tenant project must be in a folder. Make sure the ServiceConsumerManagement service account is the owner of that project. These two requirements are already met if the project is reserved by calling `AddTenantProject`. Operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsAttachProjectRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsAttachProjectResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsAttachProjectSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttachTenantProjectRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesTenancyUnitsAttachProjectRequest req = new ServiceconsumermanagementServicesTenancyUnitsAttachProjectRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                attachTenantProjectRequest = new AttachTenantProjectRequest() {{
                    externalResource = "perferendis";
                    reservedResource = "doloremque";
                    tag = "reprehenderit";
                }};;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "corporis";
                key = "dolore";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "harum";
                uploadProtocol = "enim";
            }};            

            ServiceconsumermanagementServicesTenancyUnitsAttachProjectResponse res = sdk.services.serviceconsumermanagementServicesTenancyUnitsAttachProject(req, new ServiceconsumermanagementServicesTenancyUnitsAttachProjectSecurity("accusamus", "commodi") {{
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

## serviceconsumermanagementServicesTenancyUnitsCreate

Creates a tenancy unit with no tenant resources. If tenancy unit already exists, it will be returned, however, in this case, returned TenancyUnit does not have tenant_resources field set and ListTenancyUnits has to be used to get a complete TenancyUnit with all fields populated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsCreateRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsCreateResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreateTenancyUnitRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesTenancyUnitsCreateRequest req = new ServiceconsumermanagementServicesTenancyUnitsCreateRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                createTenancyUnitRequest = new CreateTenancyUnitRequest() {{
                    tenancyUnitId = "ipsum";
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "pariatur";
                key = "modi";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "voluptates";
                uploadProtocol = "quasi";
            }};            

            ServiceconsumermanagementServicesTenancyUnitsCreateResponse res = sdk.services.serviceconsumermanagementServicesTenancyUnitsCreate(req, new ServiceconsumermanagementServicesTenancyUnitsCreateSecurity("repudiandae", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.tenancyUnit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceconsumermanagementServicesTenancyUnitsDelete

Delete a tenancy unit. Before you delete the tenancy unit, there should be no tenant resources in it that aren't in a DELETED state. Operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsDeleteRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsDeleteResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesTenancyUnitsDeleteRequest req = new ServiceconsumermanagementServicesTenancyUnitsDeleteRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "incidunt";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "est";
                key = "quibusdam";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "distinctio";
                uploadProtocol = "quibusdam";
            }};            

            ServiceconsumermanagementServicesTenancyUnitsDeleteResponse res = sdk.services.serviceconsumermanagementServicesTenancyUnitsDelete(req, new ServiceconsumermanagementServicesTenancyUnitsDeleteSecurity("labore", "modi") {{
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

## serviceconsumermanagementServicesTenancyUnitsDeleteProject

Deletes the specified project resource identified by a tenant resource tag. The mothod removes a project lien with a 'TenantManager' origin if that was added. It will then attempt to delete the project. If that operation fails, this method also fails. After the project has been deleted, the tenant resource state is set to DELETED. To permanently remove resource metadata, call the `RemoveTenantProject` method. New resources with the same tag can't be added if there are existing resources in a DELETED state. Operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsDeleteProjectRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsDeleteProjectResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsDeleteProjectSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeleteTenantProjectRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesTenancyUnitsDeleteProjectRequest req = new ServiceconsumermanagementServicesTenancyUnitsDeleteProjectRequest("qui") {{
                dollarXgafv = XgafvEnum.ONE;
                deleteTenantProjectRequest = new DeleteTenantProjectRequest() {{
                    tag = "cupiditate";
                }};;
                accessToken = "quos";
                alt = AltEnum.JSON;
                callback = "magni";
                fields = "assumenda";
                key = "ipsam";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "dolorum";
                uploadProtocol = "excepturi";
            }};            

            ServiceconsumermanagementServicesTenancyUnitsDeleteProjectResponse res = sdk.services.serviceconsumermanagementServicesTenancyUnitsDeleteProject(req, new ServiceconsumermanagementServicesTenancyUnitsDeleteProjectSecurity("tempora", "facilis") {{
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

## serviceconsumermanagementServicesTenancyUnitsList

Find the tenancy unit for a managed service and service consumer. This method shouldn't be used in a service producer's runtime path, for example to find the tenant project number when creating VMs. Service producers must persist the tenant project's information after the project is created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsListRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsListResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesTenancyUnitsListRequest req = new ServiceconsumermanagementServicesTenancyUnitsListRequest("tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "non";
                fields = "eligendi";
                filter = "sint";
                key = "aliquid";
                oauthToken = "provident";
                pageSize = 896039L;
                pageToken = "sint";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "dolor";
                uploadProtocol = "debitis";
            }};            

            ServiceconsumermanagementServicesTenancyUnitsListResponse res = sdk.services.serviceconsumermanagementServicesTenancyUnitsList(req, new ServiceconsumermanagementServicesTenancyUnitsListSecurity("a", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTenancyUnitsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceconsumermanagementServicesTenancyUnitsRemoveProject

Removes the specified project resource identified by a tenant resource tag. The method removes the project lien with 'TenantManager' origin if that was added. It then attempts to delete the project. If that operation fails, this method also fails. Calls to remove already removed or non-existent tenant project succeed. After the project has been deleted, or if was already in a DELETED state, resource metadata is permanently removed from the tenancy unit. Operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsRemoveProjectRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsRemoveProjectResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsRemoveProjectSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RemoveTenantProjectRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesTenancyUnitsRemoveProjectRequest req = new ServiceconsumermanagementServicesTenancyUnitsRemoveProjectRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                removeTenantProjectRequest = new RemoveTenantProjectRequest() {{
                    tag = "illum";
                }};;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "magnam";
                key = "cumque";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "aliquid";
                uploadProtocol = "laborum";
            }};            

            ServiceconsumermanagementServicesTenancyUnitsRemoveProjectResponse res = sdk.services.serviceconsumermanagementServicesTenancyUnitsRemoveProject(req, new ServiceconsumermanagementServicesTenancyUnitsRemoveProjectSecurity("accusamus", "non") {{
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

## serviceconsumermanagementServicesTenancyUnitsUndeleteProject

Attempts to undelete a previously deleted tenant project. The project must be in a DELETED state. There are no guarantees that an undeleted project will be in a fully restored and functional state. Call the `ApplyTenantProjectConfig` method to update its configuration and then validate all managed service resources. Operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsUndeleteProjectRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsUndeleteProjectResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementServicesTenancyUnitsUndeleteProjectSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UndeleteTenantProjectRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementServicesTenancyUnitsUndeleteProjectRequest req = new ServiceconsumermanagementServicesTenancyUnitsUndeleteProjectRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                undeleteTenantProjectRequest = new UndeleteTenantProjectRequest() {{
                    tag = "accusamus";
                }};;
                accessToken = "delectus";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "nam";
                key = "id";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "sapiente";
                uploadProtocol = "amet";
            }};            

            ServiceconsumermanagementServicesTenancyUnitsUndeleteProjectResponse res = sdk.services.serviceconsumermanagementServicesTenancyUnitsUndeleteProject(req, new ServiceconsumermanagementServicesTenancyUnitsUndeleteProjectSecurity("deserunt", "nisi") {{
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
