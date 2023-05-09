# services

### Available Operations

* [servicemanagementServicesConfigsCreate](#servicemanagementservicesconfigscreate) - Creates a new service configuration (version) for a managed service. This method only stores the service configuration. To roll out the service configuration to backend systems please call CreateServiceRollout. Only the 100 most recent service configurations and ones referenced by existing rollouts are kept for each service. The rest will be deleted eventually.
* [servicemanagementServicesConfigsGet](#servicemanagementservicesconfigsget) - Gets a service configuration (version) for a managed service.
* [servicemanagementServicesConfigsList](#servicemanagementservicesconfigslist) - Lists the history of the service configuration for a managed service, from the newest to the oldest.
* [servicemanagementServicesConfigsSubmit](#servicemanagementservicesconfigssubmit) - Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification). This method stores the source configurations as well as the generated service configuration. To rollout the service configuration to other services, please call CreateServiceRollout. Only the 100 most recent configuration sources and ones referenced by existing service configurtions are kept for each service. The rest will be deleted eventually. Operation
* [servicemanagementServicesConsumersGetIamPolicy](#servicemanagementservicesconsumersgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [servicemanagementServicesConsumersSetIamPolicy](#servicemanagementservicesconsumerssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [servicemanagementServicesConsumersTestIamPermissions](#servicemanagementservicesconsumerstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [servicemanagementServicesCreate](#servicemanagementservicescreate) - Creates a new managed service. A managed service is immutable, and is subject to mandatory 30-day data retention. You cannot move a service or recreate it within 30 days after deletion. One producer project can own no more than 500 services. For security and reliability purposes, a production service should be hosted in a dedicated producer project. Operation
* [servicemanagementServicesDelete](#servicemanagementservicesdelete) - Deletes a managed service. This method will change the service to the `Soft-Delete` state for 30 days. Within this period, service producers may call UndeleteService to restore the service. After 30 days, the service will be permanently deleted. Operation
* [servicemanagementServicesGenerateConfigReport](#servicemanagementservicesgenerateconfigreport) - Generates and returns a report (errors, warnings and changes from existing configurations) associated with GenerateConfigReportRequest.new_value If GenerateConfigReportRequest.old_value is specified, GenerateConfigReportRequest will contain a single ChangeReport based on the comparison between GenerateConfigReportRequest.new_value and GenerateConfigReportRequest.old_value. If GenerateConfigReportRequest.old_value is not specified, this method will compare GenerateConfigReportRequest.new_value with the last pushed service configuration.
* [servicemanagementServicesGet](#servicemanagementservicesget) - Gets a managed service. Authentication is required unless the service is public.
* [servicemanagementServicesGetConfig](#servicemanagementservicesgetconfig) - Gets a service configuration (version) for a managed service.
* [servicemanagementServicesList](#servicemanagementserviceslist) - Lists managed services. Returns all public services. For authenticated users, also returns all services the calling user has "servicemanagement.services.get" permission for.
* [servicemanagementServicesRolloutsCreate](#servicemanagementservicesrolloutscreate) - Creates a new service configuration rollout. Based on rollout, the Google Service Management will roll out the service configurations to different backend services. For example, the logging configuration will be pushed to Google Cloud Logging. Please note that any previous pending and running Rollouts and associated Operations will be automatically cancelled so that the latest Rollout will not be blocked by previous Rollouts. Only the 100 most recent (in any state) and the last 10 successful (if not already part of the set of 100 most recent) rollouts are kept for each service. The rest will be deleted eventually. Operation
* [servicemanagementServicesRolloutsGet](#servicemanagementservicesrolloutsget) - Gets a service configuration rollout.
* [servicemanagementServicesRolloutsList](#servicemanagementservicesrolloutslist) - Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.
* [servicemanagementServicesUndelete](#servicemanagementservicesundelete) - Revives a previously deleted managed service. The method restores the service using the configuration at the time the service was deleted. The target service must exist and must have been deleted within the last 30 days. Operation

## servicemanagementServicesConfigsCreate

Creates a new service configuration (version) for a managed service. This method only stores the service configuration. To roll out the service configuration to backend systems please call CreateServiceRollout. Only the 100 most recent service configurations and ones referenced by existing rollouts are kept for each service. The rest will be deleted eventually.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsCreateRequest;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsCreateResponse;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsCreateSecurity;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsCreateSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Api;
import org.openapis.openapi.models.shared.ApiSyntaxEnum;
import org.openapis.openapi.models.shared.AuthProvider;
import org.openapis.openapi.models.shared.AuthRequirement;
import org.openapis.openapi.models.shared.Authentication;
import org.openapis.openapi.models.shared.AuthenticationRule;
import org.openapis.openapi.models.shared.Backend;
import org.openapis.openapi.models.shared.BackendRule;
import org.openapis.openapi.models.shared.BackendRulePathTranslationEnum;
import org.openapis.openapi.models.shared.Billing;
import org.openapis.openapi.models.shared.BillingDestination;
import org.openapis.openapi.models.shared.ClientLibrarySettings;
import org.openapis.openapi.models.shared.ClientLibrarySettingsLaunchStageEnum;
import org.openapis.openapi.models.shared.CommonLanguageSettings;
import org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum;
import org.openapis.openapi.models.shared.Context;
import org.openapis.openapi.models.shared.ContextRule;
import org.openapis.openapi.models.shared.Control;
import org.openapis.openapi.models.shared.CppSettings;
import org.openapis.openapi.models.shared.CustomError;
import org.openapis.openapi.models.shared.CustomErrorRule;
import org.openapis.openapi.models.shared.CustomHttpPattern;
import org.openapis.openapi.models.shared.Documentation;
import org.openapis.openapi.models.shared.DocumentationRule;
import org.openapis.openapi.models.shared.DotnetSettings;
import org.openapis.openapi.models.shared.Endpoint;
import org.openapis.openapi.models.shared.Enum;
import org.openapis.openapi.models.shared.EnumSyntaxEnum;
import org.openapis.openapi.models.shared.EnumValue;
import org.openapis.openapi.models.shared.Field;
import org.openapis.openapi.models.shared.FieldCardinalityEnum;
import org.openapis.openapi.models.shared.FieldKindEnum;
import org.openapis.openapi.models.shared.GoSettings;
import org.openapis.openapi.models.shared.Http;
import org.openapis.openapi.models.shared.HttpRule;
import org.openapis.openapi.models.shared.JavaSettings;
import org.openapis.openapi.models.shared.JwtLocation;
import org.openapis.openapi.models.shared.LabelDescriptor;
import org.openapis.openapi.models.shared.LabelDescriptorValueTypeEnum;
import org.openapis.openapi.models.shared.LogDescriptor;
import org.openapis.openapi.models.shared.Logging;
import org.openapis.openapi.models.shared.LoggingDestination;
import org.openapis.openapi.models.shared.LongRunning;
import org.openapis.openapi.models.shared.Method;
import org.openapis.openapi.models.shared.MethodSettings;
import org.openapis.openapi.models.shared.MethodSyntaxEnum;
import org.openapis.openapi.models.shared.MetricDescriptor;
import org.openapis.openapi.models.shared.MetricDescriptorLaunchStageEnum;
import org.openapis.openapi.models.shared.MetricDescriptorMetadata;
import org.openapis.openapi.models.shared.MetricDescriptorMetadataLaunchStageEnum;
import org.openapis.openapi.models.shared.MetricDescriptorMetricKindEnum;
import org.openapis.openapi.models.shared.MetricDescriptorValueTypeEnum;
import org.openapis.openapi.models.shared.MetricRule;
import org.openapis.openapi.models.shared.Mixin;
import org.openapis.openapi.models.shared.MonitoredResourceDescriptor;
import org.openapis.openapi.models.shared.MonitoredResourceDescriptorLaunchStageEnum;
import org.openapis.openapi.models.shared.Monitoring;
import org.openapis.openapi.models.shared.MonitoringDestination;
import org.openapis.openapi.models.shared.NodeSettings;
import org.openapis.openapi.models.shared.OAuthRequirements;
import org.openapis.openapi.models.shared.Option;
import org.openapis.openapi.models.shared.Page;
import org.openapis.openapi.models.shared.PhpSettings;
import org.openapis.openapi.models.shared.Publishing;
import org.openapis.openapi.models.shared.PublishingOrganizationEnum;
import org.openapis.openapi.models.shared.PythonSettings;
import org.openapis.openapi.models.shared.Quota;
import org.openapis.openapi.models.shared.QuotaLimit;
import org.openapis.openapi.models.shared.RubySettings;
import org.openapis.openapi.models.shared.Service;
import org.openapis.openapi.models.shared.SourceContext;
import org.openapis.openapi.models.shared.SourceInfo;
import org.openapis.openapi.models.shared.SystemParameter;
import org.openapis.openapi.models.shared.SystemParameterRule;
import org.openapis.openapi.models.shared.SystemParameters;
import org.openapis.openapi.models.shared.Type;
import org.openapis.openapi.models.shared.TypeSyntaxEnum;
import org.openapis.openapi.models.shared.Usage;
import org.openapis.openapi.models.shared.UsageRule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementServicesConfigsCreateRequest req = new ServicemanagementServicesConfigsCreateRequest("porro") {{
                dollarXgafv = XgafvEnum.TWO;
                service = new Service() {{
                    apis = new org.openapis.openapi.models.shared.Api[]{{
                        add(new Api() {{
                            methods = new org.openapis.openapi.models.shared.Method[]{{
                                add(new Method() {{
                                    name = "Seth Conroy";
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Jack Johns";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("impedit", "cum");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Edna Mante II";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("sed", "iste");
                                                put("dolor", "natus");
                                                put("laboriosam", "hic");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Wilbur Kirlin";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("saepe", "quidem");
                                                put("architecto", "ipsa");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Carlton O'Hara";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("corporis", "explicabo");
                                            }};
                                        }}),
                                    }};
                                    requestStreaming = false;
                                    requestTypeUrl = "nobis";
                                    responseStreaming = false;
                                    responseTypeUrl = "enim";
                                    syntax = MethodSyntaxEnum.SYNTAX_PROTO3;
                                }}),
                                add(new Method() {{
                                    name = "Ms. Cathy Marks";
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Juan O'Hara";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("repellat", "mollitia");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Francis Jerde";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("error", "quia");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Gloria Padberg";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("quo", "sequi");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Vernon Ondricka Sr.";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("temporibus", "laborum");
                                                put("quasi", "reiciendis");
                                                put("voluptatibus", "vero");
                                            }};
                                        }}),
                                    }};
                                    requestStreaming = false;
                                    requestTypeUrl = "nihil";
                                    responseStreaming = false;
                                    responseTypeUrl = "praesentium";
                                    syntax = MethodSyntaxEnum.SYNTAX_EDITIONS;
                                }}),
                                add(new Method() {{
                                    name = "Geneva Klein Jr.";
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Shawna Carter";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("dicta", "harum");
                                                put("enim", "accusamus");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Elvira Bergnaum";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("excepturi", "pariatur");
                                                put("modi", "praesentium");
                                                put("rem", "voluptates");
                                            }};
                                        }}),
                                    }};
                                    requestStreaming = false;
                                    requestTypeUrl = "quasi";
                                    responseStreaming = false;
                                    responseTypeUrl = "repudiandae";
                                    syntax = MethodSyntaxEnum.SYNTAX_PROTO3;
                                }}),
                            }};
                            mixins = new org.openapis.openapi.models.shared.Mixin[]{{
                                add(new Mixin() {{
                                    name = "Miss Randall Hamill";
                                    root = "explicabo";
                                }}),
                            }};
                            name = "Rudy Spencer";
                            options = new org.openapis.openapi.models.shared.Option[]{{
                                add(new Option() {{
                                    name = "Mr. Shelly Lueilwitz";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("alias", "fugit");
                                        put("dolorum", "excepturi");
                                    }};
                                }}),
                            }};
                            sourceContext = new SourceContext() {{
                                fileName = "tempora";
                            }};
                            syntax = ApiSyntaxEnum.SYNTAX_EDITIONS;
                            version = "tempore";
                        }}),
                    }};
                    authentication = new Authentication() {{
                        providers = new org.openapis.openapi.models.shared.AuthProvider[]{{
                            add(new AuthProvider() {{
                                audiences = "delectus";
                                authorizationUrl = "eum";
                                id = "3c969e9a-3efa-477d-bb14-cd66ae395efb";
                                issuer = "provident";
                                jwksUri = "nam";
                                jwtLocations = new org.openapis.openapi.models.shared.JwtLocation[]{{
                                    add(new JwtLocation() {{
                                        cookie = "blanditiis";
                                        header = "deleniti";
                                        query = "sapiente";
                                        valuePrefix = "amet";
                                    }}),
                                    add(new JwtLocation() {{
                                        cookie = "deserunt";
                                        header = "nisi";
                                        query = "vel";
                                        valuePrefix = "natus";
                                    }}),
                                    add(new JwtLocation() {{
                                        cookie = "omnis";
                                        header = "molestiae";
                                        query = "perferendis";
                                        valuePrefix = "nihil";
                                    }}),
                                }};
                            }}),
                            add(new AuthProvider() {{
                                audiences = "magnam";
                                authorizationUrl = "distinctio";
                                id = "a4469b6e-2141-4959-890a-fa563e2516fe";
                                issuer = "eius";
                                jwksUri = "maxime";
                                jwtLocations = new org.openapis.openapi.models.shared.JwtLocation[]{{
                                    add(new JwtLocation() {{
                                        cookie = "facilis";
                                        header = "in";
                                        query = "architecto";
                                        valuePrefix = "architecto";
                                    }}),
                                    add(new JwtLocation() {{
                                        cookie = "repudiandae";
                                        header = "ullam";
                                        query = "expedita";
                                        valuePrefix = "nihil";
                                    }}),
                                    add(new JwtLocation() {{
                                        cookie = "repellat";
                                        header = "quibusdam";
                                        query = "sed";
                                        valuePrefix = "saepe";
                                    }}),
                                }};
                            }}),
                        }};
                        rules = new org.openapis.openapi.models.shared.AuthenticationRule[]{{
                            add(new AuthenticationRule() {{
                                allowWithoutCredential = false;
                                oauth = new OAuthRequirements() {{
                                    canonicalScopes = "accusantium";
                                }};
                                requirements = new org.openapis.openapi.models.shared.AuthRequirement[]{{
                                    add(new AuthRequirement() {{
                                        audiences = "praesentium";
                                        providerId = "natus";
                                    }}),
                                }};
                                selector = "magni";
                            }}),
                            add(new AuthenticationRule() {{
                                allowWithoutCredential = false;
                                oauth = new OAuthRequirements() {{
                                    canonicalScopes = "sunt";
                                }};
                                requirements = new org.openapis.openapi.models.shared.AuthRequirement[]{{
                                    add(new AuthRequirement() {{
                                        audiences = "illum";
                                        providerId = "pariatur";
                                    }}),
                                    add(new AuthRequirement() {{
                                        audiences = "maxime";
                                        providerId = "ea";
                                    }}),
                                    add(new AuthRequirement() {{
                                        audiences = "excepturi";
                                        providerId = "odit";
                                    }}),
                                    add(new AuthRequirement() {{
                                        audiences = "ea";
                                        providerId = "accusantium";
                                    }}),
                                }};
                                selector = "ab";
                            }}),
                            add(new AuthenticationRule() {{
                                allowWithoutCredential = false;
                                oauth = new OAuthRequirements() {{
                                    canonicalScopes = "maiores";
                                }};
                                requirements = new org.openapis.openapi.models.shared.AuthRequirement[]{{
                                    add(new AuthRequirement() {{
                                        audiences = "ipsam";
                                        providerId = "voluptate";
                                    }}),
                                    add(new AuthRequirement() {{
                                        audiences = "autem";
                                        providerId = "nam";
                                    }}),
                                    add(new AuthRequirement() {{
                                        audiences = "eaque";
                                        providerId = "pariatur";
                                    }}),
                                }};
                                selector = "nemo";
                            }}),
                            add(new AuthenticationRule() {{
                                allowWithoutCredential = false;
                                oauth = new OAuthRequirements() {{
                                    canonicalScopes = "voluptatibus";
                                }};
                                requirements = new org.openapis.openapi.models.shared.AuthRequirement[]{{
                                    add(new AuthRequirement() {{
                                        audiences = "fugiat";
                                        providerId = "amet";
                                    }}),
                                }};
                                selector = "aut";
                            }}),
                        }};
                    }};;
                    backend = new Backend() {{
                        rules = new org.openapis.openapi.models.shared.BackendRule[]{{
                            add(new BackendRule() {{
                                address = "9771 Jovani Lock";
                                deadline = 543.38;
                                disableAuth = false;
                                jwtAudience = "quis";
                                minDeadline = 1999.96;
                                operationDeadline = 1794.9;
                                overridesByRequestProtocol = new java.util.HashMap<String, org.openapis.openapi.models.shared.BackendRule>() {{
                                    put("dolores", new BackendRule() {{}});
                                }};
                                pathTranslation = BackendRulePathTranslationEnum.APPEND_PATH_TO_ADDRESS;
                                protocol = "quam";
                                selector = "dolor";
                            }}),
                            add(new BackendRule() {{
                                address = "399 Purdy Park";
                                deadline = 318.38;
                                disableAuth = false;
                                jwtAudience = "porro";
                                minDeadline = 1646.94;
                                operationDeadline = 5000.26;
                                overridesByRequestProtocol = new java.util.HashMap<String, org.openapis.openapi.models.shared.BackendRule>() {{
                                    put("eaque", new BackendRule() {{}});
                                    put("occaecati", new BackendRule() {{}});
                                    put("rerum", new BackendRule() {{}});
                                }};
                                pathTranslation = BackendRulePathTranslationEnum.PATH_TRANSLATION_UNSPECIFIED;
                                protocol = "asperiores";
                                selector = "earum";
                            }}),
                            add(new BackendRule() {{
                                address = "66585 Renner Walk";
                                deadline = 3119.45;
                                disableAuth = false;
                                jwtAudience = "quos";
                                minDeadline = 3982.21;
                                operationDeadline = 2123.9;
                                overridesByRequestProtocol = new java.util.HashMap<String, org.openapis.openapi.models.shared.BackendRule>() {{
                                    put("dolor", new BackendRule() {{}});
                                }};
                                pathTranslation = BackendRulePathTranslationEnum.PATH_TRANSLATION_UNSPECIFIED;
                                protocol = "ipsum";
                                selector = "hic";
                            }}),
                            add(new BackendRule() {{
                                address = "7449 Marina Flat";
                                deadline = 852.95;
                                disableAuth = false;
                                jwtAudience = "ipsa";
                                minDeadline = 564.18;
                                operationDeadline = 4344.17;
                                overridesByRequestProtocol = new java.util.HashMap<String, org.openapis.openapi.models.shared.BackendRule>() {{
                                    put("quaerat", new BackendRule() {{}});
                                    put("accusamus", new BackendRule() {{}});
                                }};
                                pathTranslation = BackendRulePathTranslationEnum.APPEND_PATH_TO_ADDRESS;
                                protocol = "voluptatibus";
                                selector = "voluptas";
                            }}),
                        }};
                    }};;
                    billing = new Billing() {{
                        consumerDestinations = new org.openapis.openapi.models.shared.BillingDestination[]{{
                            add(new BillingDestination() {{
                                metrics = new String[]{{
                                    add("atque"),
                                }};
                                monitoredResource = "sit";
                            }}),
                            add(new BillingDestination() {{
                                metrics = new String[]{{
                                    add("ab"),
                                    add("soluta"),
                                    add("dolorum"),
                                    add("iusto"),
                                }};
                                monitoredResource = "voluptate";
                            }}),
                            add(new BillingDestination() {{
                                metrics = new String[]{{
                                    add("deleniti"),
                                    add("omnis"),
                                    add("necessitatibus"),
                                }};
                                monitoredResource = "distinctio";
                            }}),
                        }};
                    }};;
                    configVersion = 990339L;
                    context = new Context() {{
                        rules = new org.openapis.openapi.models.shared.ContextRule[]{{
                            add(new ContextRule() {{
                                allowedRequestExtensions = new String[]{{
                                    add("voluptate"),
                                }};
                                allowedResponseExtensions = new String[]{{
                                    add("saepe"),
                                    add("eius"),
                                    add("aspernatur"),
                                }};
                                provided = new String[]{{
                                    add("amet"),
                                }};
                                requested = new String[]{{
                                    add("accusamus"),
                                    add("ad"),
                                    add("saepe"),
                                    add("suscipit"),
                                }};
                                selector = "deserunt";
                            }}),
                            add(new ContextRule() {{
                                allowedRequestExtensions = new String[]{{
                                    add("minima"),
                                    add("repellendus"),
                                    add("totam"),
                                }};
                                allowedResponseExtensions = new String[]{{
                                    add("alias"),
                                    add("at"),
                                    add("quaerat"),
                                }};
                                provided = new String[]{{
                                    add("vel"),
                                    add("quod"),
                                }};
                                requested = new String[]{{
                                    add("qui"),
                                    add("dolorum"),
                                    add("a"),
                                    add("esse"),
                                }};
                                selector = "harum";
                            }}),
                        }};
                    }};;
                    control = new Control() {{
                        environment = "iusto";
                    }};;
                    customError = new CustomError() {{
                        rules = new org.openapis.openapi.models.shared.CustomErrorRule[]{{
                            add(new CustomErrorRule() {{
                                isErrorType = false;
                                selector = "quisquam";
                            }}),
                        }};
                        types = new String[]{{
                            add("amet"),
                            add("tempore"),
                            add("accusamus"),
                            add("numquam"),
                        }};
                    }};;
                    documentation = new Documentation() {{
                        documentationRootUrl = "enim";
                        overview = "dolorem";
                        pages = new org.openapis.openapi.models.shared.Page[]{{
                            add(new Page() {{
                                content = "totam";
                                name = "Karen Rath";
                                subpages = new org.openapis.openapi.models.shared.Page[]{{
                                    add(new Page() {{}}),
                                    add(new Page() {{}}),
                                }};
                            }}),
                            add(new Page() {{
                                content = "libero";
                                name = "Joanna Kohler";
                                subpages = new org.openapis.openapi.models.shared.Page[]{{
                                    add(new Page() {{}}),
                                }};
                            }}),
                            add(new Page() {{
                                content = "cupiditate";
                                name = "Miss Jody Rogahn";
                                subpages = new org.openapis.openapi.models.shared.Page[]{{
                                    add(new Page() {{}}),
                                    add(new Page() {{}}),
                                }};
                            }}),
                            add(new Page() {{
                                content = "aspernatur";
                                name = "Verna Purdy";
                                subpages = new org.openapis.openapi.models.shared.Page[]{{
                                    add(new Page() {{}}),
                                    add(new Page() {{}}),
                                    add(new Page() {{}}),
                                }};
                            }}),
                        }};
                        rules = new org.openapis.openapi.models.shared.DocumentationRule[]{{
                            add(new DocumentationRule() {{
                                deprecationDescription = "qui";
                                description = "neque";
                                disableReplacementWords = "fugit";
                                selector = "magni";
                            }}),
                            add(new DocumentationRule() {{
                                deprecationDescription = "odio";
                                description = "sunt";
                                disableReplacementWords = "ullam";
                                selector = "nam";
                            }}),
                            add(new DocumentationRule() {{
                                deprecationDescription = "hic";
                                description = "voluptatem";
                                disableReplacementWords = "cumque";
                                selector = "soluta";
                            }}),
                            add(new DocumentationRule() {{
                                deprecationDescription = "nobis";
                                description = "et";
                                disableReplacementWords = "saepe";
                                selector = "ipsum";
                            }}),
                        }};
                        serviceRootUrl = "veritatis";
                        summary = "nobis";
                    }};;
                    endpoints = new org.openapis.openapi.models.shared.Endpoint[]{{
                        add(new Endpoint() {{
                            aliases = new String[]{{
                                add("cupiditate"),
                                add("aperiam"),
                                add("delectus"),
                            }};
                            allowCors = false;
                            name = "Joanne Grant";
                            target = "architecto";
                        }}),
                        add(new Endpoint() {{
                            aliases = new String[]{{
                                add("aut"),
                            }};
                            allowCors = false;
                            name = "Percy Altenwerth";
                            target = "porro";
                        }}),
                        add(new Endpoint() {{
                            aliases = new String[]{{
                                add("ut"),
                                add("facilis"),
                                add("cupiditate"),
                                add("qui"),
                            }};
                            allowCors = false;
                            name = "Marsha Kuhic";
                            target = "quisquam";
                        }}),
                    }};
                    enums = new org.openapis.openapi.models.shared.Enum[]{{
                        add(new Enum() {{
                            edition = "omnis";
                            enumvalue = new org.openapis.openapi.models.shared.EnumValue[]{{
                                add(new EnumValue() {{
                                    name = "Dixie Klocko";
                                    number = 949319;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Kelvin Schmidt";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("vero", "ducimus");
                                                put("dolore", "quibusdam");
                                                put("illum", "sequi");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Edmund Ankunding";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("fugit", "porro");
                                                put("maiores", "doloribus");
                                                put("iusto", "eligendi");
                                                put("ducimus", "alias");
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new EnumValue() {{
                                    name = "Don Hills";
                                    number = 428224;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Paula Jacobs I";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("quasi", "ex");
                                                put("nulla", "excepturi");
                                                put("voluptatibus", "nostrum");
                                                put("sapiente", "quisquam");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Nathaniel Ryan";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("inventore", "magnam");
                                                put("ea", "quo");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Kate Cole DVM";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("aut", "aut");
                                                put("deleniti", "impedit");
                                                put("aliquam", "fugit");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Miss Dennis Friesen";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("velit", "eum");
                                                put("autem", "nobis");
                                                put("quas", "assumenda");
                                                put("nulla", "voluptas");
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "Ryan Glover";
                            options = new org.openapis.openapi.models.shared.Option[]{{
                                add(new Option() {{
                                    name = "Minnie Gutkowski";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("esse", "rem");
                                        put("fuga", "reprehenderit");
                                    }};
                                }}),
                                add(new Option() {{
                                    name = "Nicolas Graham";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("eos", "praesentium");
                                        put("quisquam", "veritatis");
                                        put("ipsa", "id");
                                        put("quidem", "neque");
                                    }};
                                }}),
                                add(new Option() {{
                                    name = "Dallas Sanford";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("voluptas", "ab");
                                    }};
                                }}),
                            }};
                            sourceContext = new SourceContext() {{
                                fileName = "cupiditate";
                            }};
                            syntax = EnumSyntaxEnum.SYNTAX_PROTO2;
                        }}),
                        add(new Enum() {{
                            edition = "tempora";
                            enumvalue = new org.openapis.openapi.models.shared.EnumValue[]{{
                                add(new EnumValue() {{
                                    name = "Kelly Donnelly";
                                    number = 925164;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Ms. Jermaine Kulas";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("aliquam", "odio");
                                                put("occaecati", "commodi");
                                                put("sapiente", "dolores");
                                                put("deserunt", "molestiae");
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new EnumValue() {{
                                    name = "Robyn Keeling";
                                    number = 159867;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Lee O'Conner";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("minima", "nisi");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Jeannie Cronin";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("occaecati", "atque");
                                                put("et", "esse");
                                                put("eveniet", "accusamus");
                                                put("veritatis", "esse");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Marco Terry PhD";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("harum", "molestiae");
                                                put("rerum", "occaecati");
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new EnumValue() {{
                                    name = "Miss Verna Roob";
                                    number = 240020;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Elizabeth Schinner";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("esse", "blanditiis");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Randal Stiedemann";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("a", "error");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Jody Schuster";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("facere", "veritatis");
                                                put("consequuntur", "quasi");
                                                put("similique", "culpa");
                                                put("aliquid", "tenetur");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Lila Kassulke";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("illum", "soluta");
                                                put("accusantium", "aliquam");
                                                put("sapiente", "dicta");
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new EnumValue() {{
                                    name = "Delores Hermiston IV";
                                    number = 185232;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Cassandra Ward V";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("quasi", "at");
                                                put("et", "voluptate");
                                                put("ipsa", "minima");
                                                put("veritatis", "consectetur");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Ms. Cora Spencer IV";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("mollitia", "ab");
                                                put("corrupti", "non");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Carmen McClure";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("voluptas", "aut");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Jean Wunsch";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("voluptas", "asperiores");
                                                put("aperiam", "ea");
                                                put("quaerat", "consequuntur");
                                                put("repellendus", "officia");
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "Cody Nikolaus";
                            options = new org.openapis.openapi.models.shared.Option[]{{
                                add(new Option() {{
                                    name = "Robyn Schmitt I";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("id", "suscipit");
                                        put("velit", "culpa");
                                        put("est", "recusandae");
                                    }};
                                }}),
                            }};
                            sourceContext = new SourceContext() {{
                                fileName = "totam";
                            }};
                            syntax = EnumSyntaxEnum.SYNTAX_EDITIONS;
                        }}),
                        add(new Enum() {{
                            edition = "vel";
                            enumvalue = new org.openapis.openapi.models.shared.EnumValue[]{{
                                add(new EnumValue() {{
                                    name = "Cecil Grant";
                                    number = 738227;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Ana Wisozk";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("aliquid", "aperiam");
                                                put("cum", "consectetur");
                                                put("in", "exercitationem");
                                                put("earum", "facere");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Melba Homenick";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("necessitatibus", "dolore");
                                                put("sunt", "asperiores");
                                                put("adipisci", "non");
                                                put("amet", "beatae");
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new EnumValue() {{
                                    name = "Lorene Toy";
                                    number = 689768;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Dr. Silvia Renner";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("aspernatur", "voluptas");
                                                put("voluptas", "voluptas");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Gayle Parisian";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("blanditiis", "in");
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "Suzanne Torphy";
                            options = new org.openapis.openapi.models.shared.Option[]{{
                                add(new Option() {{
                                    name = "Guy Luettgen";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("corrupti", "pariatur");
                                        put("totam", "hic");
                                        put("exercitationem", "nobis");
                                    }};
                                }}),
                            }};
                            sourceContext = new SourceContext() {{
                                fileName = "sit";
                            }};
                            syntax = EnumSyntaxEnum.SYNTAX_EDITIONS;
                        }}),
                        add(new Enum() {{
                            edition = "sed";
                            enumvalue = new org.openapis.openapi.models.shared.EnumValue[]{{
                                add(new EnumValue() {{
                                    name = "Jaime Quigley";
                                    number = 70869;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Janie Cremin";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("explicabo", "voluptas");
                                                put("unde", "architecto");
                                                put("suscipit", "sapiente");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Ms. Gregory Wisoky";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("sed", "provident");
                                                put("eius", "necessitatibus");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Rosemary McClure";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("tempora", "voluptate");
                                                put("reiciendis", "ex");
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new EnumValue() {{
                                    name = "Ethel Towne";
                                    number = 310381;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Miss Alyssa Leffler";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("minima", "recusandae");
                                                put("reiciendis", "nulla");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Deborah Turcotte";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("officiis", "beatae");
                                                put("laudantium", "exercitationem");
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new EnumValue() {{
                                    name = "Bennie Howe";
                                    number = 622385;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Darrel Doyle";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("dolorum", "corrupti");
                                                put("accusamus", "tempora");
                                                put("atque", "fugit");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Janis Bartell";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("consequatur", "esse");
                                                put("ipsam", "sit");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Willard Walker IV";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("sed", "sit");
                                                put("vel", "nostrum");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Evan Altenwerth";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("harum", "dicta");
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new EnumValue() {{
                                    name = "Violet Greenfelder";
                                    number = 671957;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Brent Abernathy";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("unde", "reiciendis");
                                                put("provident", "repellendus");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Noah Armstrong";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("facere", "fuga");
                                                put("praesentium", "mollitia");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Helen Schiller IV";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("asperiores", "totam");
                                                put("suscipit", "quidem");
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "Henry Koepp";
                            options = new org.openapis.openapi.models.shared.Option[]{{
                                add(new Option() {{
                                    name = "Evan Torphy";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("minima", "aspernatur");
                                        put("ex", "maiores");
                                        put("corrupti", "at");
                                    }};
                                }}),
                                add(new Option() {{
                                    name = "Guy Hoeger";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("sunt", "recusandae");
                                        put("dolorum", "repellendus");
                                        put("labore", "reiciendis");
                                    }};
                                }}),
                            }};
                            sourceContext = new SourceContext() {{
                                fileName = "doloremque";
                            }};
                            syntax = EnumSyntaxEnum.SYNTAX_EDITIONS;
                        }}),
                    }};
                    http = new Http() {{
                        fullyDecodeReservedExpansion = false;
                        rules = new org.openapis.openapi.models.shared.HttpRule[]{{
                            add(new HttpRule() {{
                                additionalBindings = new org.openapis.openapi.models.shared.HttpRule[]{{
                                    add(new HttpRule() {{}}),
                                }};
                                body = "beatae";
                                custom = new CustomHttpPattern() {{
                                    kind = "dolores";
                                    path = "enim";
                                }};
                                delete = "laboriosam";
                                get = "velit";
                                patch = "a";
                                post = "molestias";
                                put = "magnam";
                                responseBody = "saepe";
                                selector = "consequuntur";
                            }}),
                        }};
                    }};;
                    id = "9e973e92-2a57-4a15-be3e-060807e2b6e3";
                    logging = new Logging() {{
                        consumerDestinations = new org.openapis.openapi.models.shared.LoggingDestination[]{{
                            add(new LoggingDestination() {{
                                logs = new String[]{{
                                    add("voluptatum"),
                                    add("rem"),
                                    add("aliquam"),
                                }};
                                monitoredResource = "ad";
                            }}),
                            add(new LoggingDestination() {{
                                logs = new String[]{{
                                    add("alias"),
                                    add("corporis"),
                                    add("perspiciatis"),
                                    add("nihil"),
                                }};
                                monitoredResource = "mollitia";
                            }}),
                            add(new LoggingDestination() {{
                                logs = new String[]{{
                                    add("alias"),
                                    add("maiores"),
                                }};
                                monitoredResource = "reiciendis";
                            }}),
                        }};
                        producerDestinations = new org.openapis.openapi.models.shared.LoggingDestination[]{{
                            add(new LoggingDestination() {{
                                logs = new String[]{{
                                    add("minima"),
                                    add("dolore"),
                                    add("dolorum"),
                                }};
                                monitoredResource = "nesciunt";
                            }}),
                        }};
                    }};;
                    logs = new org.openapis.openapi.models.shared.LogDescriptor[]{{
                        add(new LogDescriptor() {{
                            description = "recusandae";
                            displayName = "omnis";
                            labels = new org.openapis.openapi.models.shared.LabelDescriptor[]{{
                                add(new LabelDescriptor() {{
                                    description = "molestiae";
                                    key = "ex";
                                    valueType = LabelDescriptorValueTypeEnum.STRING;
                                }}),
                                add(new LabelDescriptor() {{
                                    description = "culpa";
                                    key = "adipisci";
                                    valueType = LabelDescriptorValueTypeEnum.INT64;
                                }}),
                            }};
                            name = "Andre Hills";
                        }}),
                    }};
                    metrics = new org.openapis.openapi.models.shared.MetricDescriptor[]{{
                        add(new MetricDescriptor() {{
                            description = "quis";
                            displayName = "eum";
                            labels = new org.openapis.openapi.models.shared.LabelDescriptor[]{{
                                add(new LabelDescriptor() {{
                                    description = "provident";
                                    key = "aspernatur";
                                    valueType = LabelDescriptorValueTypeEnum.BOOL;
                                }}),
                                add(new LabelDescriptor() {{
                                    description = "quasi";
                                    key = "animi";
                                    valueType = LabelDescriptorValueTypeEnum.BOOL;
                                }}),
                                add(new LabelDescriptor() {{
                                    description = "mollitia";
                                    key = "provident";
                                    valueType = LabelDescriptorValueTypeEnum.INT64;
                                }}),
                                add(new LabelDescriptor() {{
                                    description = "animi";
                                    key = "ex";
                                    valueType = LabelDescriptorValueTypeEnum.BOOL;
                                }}),
                            }};
                            launchStage = MetricDescriptorLaunchStageEnum.LAUNCH_STAGE_UNSPECIFIED;
                            metadata = new MetricDescriptorMetadata() {{
                                ingestDelay = "repellat";
                                launchStage = MetricDescriptorMetadataLaunchStageEnum.DEPRECATED;
                                samplePeriod = "ullam";
                            }};
                            metricKind = MetricDescriptorMetricKindEnum.GAUGE;
                            monitoredResourceTypes = new String[]{{
                                add("earum"),
                                add("officia"),
                                add("laborum"),
                            }};
                            name = "Edwin Wolf";
                            type = "sapiente";
                            unit = "cumque";
                            valueType = MetricDescriptorValueTypeEnum.VALUE_TYPE_UNSPECIFIED;
                        }}),
                        add(new MetricDescriptor() {{
                            description = "rerum";
                            displayName = "tempora";
                            labels = new org.openapis.openapi.models.shared.LabelDescriptor[]{{
                                add(new LabelDescriptor() {{
                                    description = "inventore";
                                    key = "fugit";
                                    valueType = LabelDescriptorValueTypeEnum.INT64;
                                }}),
                                add(new LabelDescriptor() {{
                                    description = "quae";
                                    key = "perferendis";
                                    valueType = LabelDescriptorValueTypeEnum.STRING;
                                }}),
                            }};
                            launchStage = MetricDescriptorLaunchStageEnum.UNIMPLEMENTED;
                            metadata = new MetricDescriptorMetadata() {{
                                ingestDelay = "eum";
                                launchStage = MetricDescriptorMetadataLaunchStageEnum.PRELAUNCH;
                                samplePeriod = "rem";
                            }};
                            metricKind = MetricDescriptorMetricKindEnum.CUMULATIVE;
                            monitoredResourceTypes = new String[]{{
                                add("eos"),
                                add("sapiente"),
                                add("eum"),
                                add("dicta"),
                            }};
                            name = "Teresa McCullough";
                            type = "soluta";
                            unit = "hic";
                            valueType = MetricDescriptorValueTypeEnum.DISTRIBUTION;
                        }}),
                        add(new MetricDescriptor() {{
                            description = "eaque";
                            displayName = "earum";
                            labels = new org.openapis.openapi.models.shared.LabelDescriptor[]{{
                                add(new LabelDescriptor() {{
                                    description = "maiores";
                                    key = "debitis";
                                    valueType = LabelDescriptorValueTypeEnum.BOOL;
                                }}),
                                add(new LabelDescriptor() {{
                                    description = "porro";
                                    key = "suscipit";
                                    valueType = LabelDescriptorValueTypeEnum.STRING;
                                }}),
                                add(new LabelDescriptor() {{
                                    description = "fugit";
                                    key = "cumque";
                                    valueType = LabelDescriptorValueTypeEnum.INT64;
                                }}),
                            }};
                            launchStage = MetricDescriptorLaunchStageEnum.UNIMPLEMENTED;
                            metadata = new MetricDescriptorMetadata() {{
                                ingestDelay = "animi";
                                launchStage = MetricDescriptorMetadataLaunchStageEnum.DEPRECATED;
                                samplePeriod = "nulla";
                            }};
                            metricKind = MetricDescriptorMetricKindEnum.METRIC_KIND_UNSPECIFIED;
                            monitoredResourceTypes = new String[]{{
                                add("et"),
                            }};
                            name = "Ada McClure";
                            type = "quasi";
                            unit = "magni";
                            valueType = MetricDescriptorValueTypeEnum.MONEY;
                        }}),
                    }};
                    monitoredResources = new org.openapis.openapi.models.shared.MonitoredResourceDescriptor[]{{
                        add(new MonitoredResourceDescriptor() {{
                            description = "necessitatibus";
                            displayName = "ipsa";
                            labels = new org.openapis.openapi.models.shared.LabelDescriptor[]{{
                                add(new LabelDescriptor() {{
                                    description = "nihil";
                                    key = "molestiae";
                                    valueType = LabelDescriptorValueTypeEnum.STRING;
                                }}),
                                add(new LabelDescriptor() {{
                                    description = "iusto";
                                    key = "esse";
                                    valueType = LabelDescriptorValueTypeEnum.BOOL;
                                }}),
                            }};
                            launchStage = MonitoredResourceDescriptorLaunchStageEnum.DEPRECATED;
                            name = "Ben Bradtke Sr.";
                            type = "odio";
                        }}),
                        add(new MonitoredResourceDescriptor() {{
                            description = "tempora";
                            displayName = "esse";
                            labels = new org.openapis.openapi.models.shared.LabelDescriptor[]{{
                                add(new LabelDescriptor() {{
                                    description = "consectetur";
                                    key = "aliquid";
                                    valueType = LabelDescriptorValueTypeEnum.STRING;
                                }}),
                                add(new LabelDescriptor() {{
                                    description = "laborum";
                                    key = "sunt";
                                    valueType = LabelDescriptorValueTypeEnum.BOOL;
                                }}),
                            }};
                            launchStage = MonitoredResourceDescriptorLaunchStageEnum.GA;
                            name = "Gene Nikolaus";
                            type = "perferendis";
                        }}),
                        add(new MonitoredResourceDescriptor() {{
                            description = "eum";
                            displayName = "voluptas";
                            labels = new org.openapis.openapi.models.shared.LabelDescriptor[]{{
                                add(new LabelDescriptor() {{
                                    description = "id";
                                    key = "ab";
                                    valueType = LabelDescriptorValueTypeEnum.BOOL;
                                }}),
                                add(new LabelDescriptor() {{
                                    description = "possimus";
                                    key = "voluptates";
                                    valueType = LabelDescriptorValueTypeEnum.BOOL;
                                }}),
                                add(new LabelDescriptor() {{
                                    description = "laborum";
                                    key = "libero";
                                    valueType = LabelDescriptorValueTypeEnum.STRING;
                                }}),
                            }};
                            launchStage = MonitoredResourceDescriptorLaunchStageEnum.ALPHA;
                            name = "Gloria Skiles";
                            type = "ex";
                        }}),
                        add(new MonitoredResourceDescriptor() {{
                            description = "ut";
                            displayName = "ad";
                            labels = new org.openapis.openapi.models.shared.LabelDescriptor[]{{
                                add(new LabelDescriptor() {{
                                    description = "voluptatem";
                                    key = "molestias";
                                    valueType = LabelDescriptorValueTypeEnum.INT64;
                                }}),
                                add(new LabelDescriptor() {{
                                    description = "aliquid";
                                    key = "beatae";
                                    valueType = LabelDescriptorValueTypeEnum.BOOL;
                                }}),
                                add(new LabelDescriptor() {{
                                    description = "omnis";
                                    key = "veritatis";
                                    valueType = LabelDescriptorValueTypeEnum.INT64;
                                }}),
                            }};
                            launchStage = MonitoredResourceDescriptorLaunchStageEnum.BETA;
                            name = "Donald Williamson MD";
                            type = "pariatur";
                        }}),
                    }};
                    monitoring = new Monitoring() {{
                        consumerDestinations = new org.openapis.openapi.models.shared.MonitoringDestination[]{{
                            add(new MonitoringDestination() {{
                                metrics = new String[]{{
                                    add("alias"),
                                }};
                                monitoredResource = "deleniti";
                            }}),
                            add(new MonitoringDestination() {{
                                metrics = new String[]{{
                                    add("ex"),
                                    add("sapiente"),
                                    add("rem"),
                                    add("minus"),
                                }};
                                monitoredResource = "nemo";
                            }}),
                            add(new MonitoringDestination() {{
                                metrics = new String[]{{
                                    add("ratione"),
                                    add("ullam"),
                                    add("perferendis"),
                                    add("illum"),
                                }};
                                monitoredResource = "totam";
                            }}),
                            add(new MonitoringDestination() {{
                                metrics = new String[]{{
                                    add("quibusdam"),
                                    add("nam"),
                                    add("ipsam"),
                                    add("culpa"),
                                }};
                                monitoredResource = "dolor";
                            }}),
                        }};
                        producerDestinations = new org.openapis.openapi.models.shared.MonitoringDestination[]{{
                            add(new MonitoringDestination() {{
                                metrics = new String[]{{
                                    add("deleniti"),
                                }};
                                monitoredResource = "veritatis";
                            }}),
                            add(new MonitoringDestination() {{
                                metrics = new String[]{{
                                    add("dolor"),
                                    add("consequatur"),
                                }};
                                monitoredResource = "architecto";
                            }}),
                        }};
                    }};;
                    name = "Ms. Pauline Considine I";
                    producerProjectId = "fugiat";
                    publishing = new Publishing() {{
                        apiShortName = "ipsam";
                        codeownerGithubTeams = new String[]{{
                            add("ipsa"),
                        }};
                        docTagPrefix = "quas";
                        documentationUri = "eveniet";
                        githubLabel = "impedit";
                        librarySettings = new org.openapis.openapi.models.shared.ClientLibrarySettings[]{{
                            add(new ClientLibrarySettings() {{
                                cppSettings = new CppSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                        }};
                                        referenceDocsUri = "veniam";
                                    }};
                                }};
                                dotnetSettings = new DotnetSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                        }};
                                        referenceDocsUri = "eum";
                                    }};
                                    forcedNamespaceAliases = new String[]{{
                                        add("voluptatum"),
                                        add("magnam"),
                                    }};
                                    handwrittenSignatures = new String[]{{
                                        add("ab"),
                                        add("porro"),
                                    }};
                                    ignoredResources = new String[]{{
                                        add("nobis"),
                                        add("laboriosam"),
                                    }};
                                    renamedResources = new java.util.HashMap<String, String>() {{
                                        put("consequuntur", "voluptatem");
                                        put("exercitationem", "necessitatibus");
                                        put("quasi", "nisi");
                                        put("at", "vero");
                                    }};
                                    renamedServices = new java.util.HashMap<String, String>() {{
                                        put("harum", "sequi");
                                        put("doloribus", "repudiandae");
                                        put("optio", "occaecati");
                                    }};
                                }};
                                goSettings = new GoSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                        }};
                                        referenceDocsUri = "officia";
                                    }};
                                }};
                                javaSettings = new JavaSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                        }};
                                        referenceDocsUri = "quos";
                                    }};
                                    libraryPackage = "eius";
                                    serviceClassNames = new java.util.HashMap<String, String>() {{
                                        put("ducimus", "nesciunt");
                                    }};
                                }};
                                launchStage = ClientLibrarySettingsLaunchStageEnum.BETA;
                                nodeSettings = new NodeSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                        }};
                                        referenceDocsUri = "fugiat";
                                    }};
                                }};
                                phpSettings = new PhpSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                        }};
                                        referenceDocsUri = "consequuntur";
                                    }};
                                }};
                                pythonSettings = new PythonSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                        }};
                                        referenceDocsUri = "cupiditate";
                                    }};
                                }};
                                restNumericEnums = false;
                                rubySettings = new RubySettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                        }};
                                        referenceDocsUri = "occaecati";
                                    }};
                                }};
                                version = "iste";
                            }}),
                            add(new ClientLibrarySettings() {{
                                cppSettings = new CppSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                        }};
                                        referenceDocsUri = "fuga";
                                    }};
                                }};
                                dotnetSettings = new DotnetSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                        }};
                                        referenceDocsUri = "minima";
                                    }};
                                    forcedNamespaceAliases = new String[]{{
                                        add("maxime"),
                                        add("magnam"),
                                        add("temporibus"),
                                    }};
                                    handwrittenSignatures = new String[]{{
                                        add("commodi"),
                                        add("itaque"),
                                        add("commodi"),
                                    }};
                                    ignoredResources = new String[]{{
                                        add("earum"),
                                        add("modi"),
                                        add("nam"),
                                    }};
                                    renamedResources = new java.util.HashMap<String, String>() {{
                                        put("voluptatem", "ipsam");
                                        put("vel", "alias");
                                        put("quasi", "non");
                                        put("maiores", "enim");
                                    }};
                                    renamedServices = new java.util.HashMap<String, String>() {{
                                        put("nulla", "deserunt");
                                        put("esse", "nemo");
                                        put("reprehenderit", "est");
                                    }};
                                }};
                                goSettings = new GoSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                        }};
                                        referenceDocsUri = "impedit";
                                    }};
                                }};
                                javaSettings = new JavaSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                        }};
                                        referenceDocsUri = "debitis";
                                    }};
                                    libraryPackage = "delectus";
                                    serviceClassNames = new java.util.HashMap<String, String>() {{
                                        put("minus", "fuga");
                                    }};
                                }};
                                launchStage = ClientLibrarySettingsLaunchStageEnum.BETA;
                                nodeSettings = new NodeSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                        }};
                                        referenceDocsUri = "atque";
                                    }};
                                }};
                                phpSettings = new PhpSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                        }};
                                        referenceDocsUri = "magni";
                                    }};
                                }};
                                pythonSettings = new PythonSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                        }};
                                        referenceDocsUri = "iusto";
                                    }};
                                }};
                                restNumericEnums = false;
                                rubySettings = new RubySettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                        }};
                                        referenceDocsUri = "neque";
                                    }};
                                }};
                                version = "quo";
                            }}),
                            add(new ClientLibrarySettings() {{
                                cppSettings = new CppSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                        }};
                                        referenceDocsUri = "voluptatibus";
                                    }};
                                }};
                                dotnetSettings = new DotnetSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                        }};
                                        referenceDocsUri = "inventore";
                                    }};
                                    forcedNamespaceAliases = new String[]{{
                                        add("libero"),
                                        add("architecto"),
                                        add("voluptatibus"),
                                        add("quia"),
                                    }};
                                    handwrittenSignatures = new String[]{{
                                        add("aliquam"),
                                        add("velit"),
                                        add("illo"),
                                        add("accusantium"),
                                    }};
                                    ignoredResources = new String[]{{
                                        add("ea"),
                                        add("beatae"),
                                    }};
                                    renamedResources = new java.util.HashMap<String, String>() {{
                                        put("excepturi", "eum");
                                        put("velit", "ut");
                                        put("perspiciatis", "earum");
                                        put("dicta", "impedit");
                                    }};
                                    renamedServices = new java.util.HashMap<String, String>() {{
                                        put("iste", "itaque");
                                        put("alias", "nisi");
                                        put("itaque", "velit");
                                        put("laborum", "non");
                                    }};
                                }};
                                goSettings = new GoSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                        }};
                                        referenceDocsUri = "sit";
                                    }};
                                }};
                                javaSettings = new JavaSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                        }};
                                        referenceDocsUri = "officia";
                                    }};
                                    libraryPackage = "recusandae";
                                    serviceClassNames = new java.util.HashMap<String, String>() {{
                                        put("quidem", "voluptas");
                                        put("facilis", "placeat");
                                    }};
                                }};
                                launchStage = ClientLibrarySettingsLaunchStageEnum.ALPHA;
                                nodeSettings = new NodeSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                        }};
                                        referenceDocsUri = "ullam";
                                    }};
                                }};
                                phpSettings = new PhpSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                        }};
                                        referenceDocsUri = "ipsam";
                                    }};
                                }};
                                pythonSettings = new PythonSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                        }};
                                        referenceDocsUri = "esse";
                                    }};
                                }};
                                restNumericEnums = false;
                                rubySettings = new RubySettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                        }};
                                        referenceDocsUri = "consectetur";
                                    }};
                                }};
                                version = "vitae";
                            }}),
                            add(new ClientLibrarySettings() {{
                                cppSettings = new CppSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                        }};
                                        referenceDocsUri = "ad";
                                    }};
                                }};
                                dotnetSettings = new DotnetSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                        }};
                                        referenceDocsUri = "ex";
                                    }};
                                    forcedNamespaceAliases = new String[]{{
                                        add("soluta"),
                                        add("libero"),
                                    }};
                                    handwrittenSignatures = new String[]{{
                                        add("dolorum"),
                                        add("odio"),
                                        add("fugit"),
                                    }};
                                    ignoredResources = new String[]{{
                                        add("magni"),
                                    }};
                                    renamedResources = new java.util.HashMap<String, String>() {{
                                        put("quae", "quae");
                                        put("modi", "neque");
                                    }};
                                    renamedServices = new java.util.HashMap<String, String>() {{
                                        put("itaque", "et");
                                        put("ipsum", "unde");
                                    }};
                                }};
                                goSettings = new GoSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                        }};
                                        referenceDocsUri = "nostrum";
                                    }};
                                }};
                                javaSettings = new JavaSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                        }};
                                        referenceDocsUri = "libero";
                                    }};
                                    libraryPackage = "fugiat";
                                    serviceClassNames = new java.util.HashMap<String, String>() {{
                                        put("quos", "placeat");
                                        put("sit", "iusto");
                                        put("ipsa", "voluptates");
                                    }};
                                }};
                                launchStage = ClientLibrarySettingsLaunchStageEnum.LAUNCH_STAGE_UNSPECIFIED;
                                nodeSettings = new NodeSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                        }};
                                        referenceDocsUri = "dolore";
                                    }};
                                }};
                                phpSettings = new PhpSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                        }};
                                        referenceDocsUri = "dolores";
                                    }};
                                }};
                                pythonSettings = new PythonSettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED),
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.GITHUB),
                                        }};
                                        referenceDocsUri = "molestiae";
                                    }};
                                }};
                                restNumericEnums = false;
                                rubySettings = new RubySettings() {{
                                    common = new CommonLanguageSettings() {{
                                        destinations = new org.openapis.openapi.models.shared.CommonLanguageSettingsDestinationsEnum[]{{
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                            add(CommonLanguageSettingsDestinationsEnum.PACKAGE_MANAGER),
                                        }};
                                        referenceDocsUri = "sint";
                                    }};
                                }};
                                version = "ea";
                            }}),
                        }};
                        methodSettings = new org.openapis.openapi.models.shared.MethodSettings[]{{
                            add(new MethodSettings() {{
                                longRunning = new LongRunning() {{
                                    initialPollDelay = "ipsam";
                                    maxPollDelay = "rerum";
                                    pollDelayMultiplier = 5156.38;
                                    totalPollTimeout = "corporis";
                                }};
                                selector = "officiis";
                            }}),
                            add(new MethodSettings() {{
                                longRunning = new LongRunning() {{
                                    initialPollDelay = "voluptatibus";
                                    maxPollDelay = "cum";
                                    pollDelayMultiplier = 8723.03;
                                    totalPollTimeout = "alias";
                                }};
                                selector = "quia";
                            }}),
                        }};
                        newIssueUri = "quidem";
                        organization = PublishingOrganizationEnum.SHOPPING;
                        protoReferenceDocumentationUri = "repudiandae";
                    }};;
                    quota = new Quota() {{
                        limits = new org.openapis.openapi.models.shared.QuotaLimit[]{{
                            add(new QuotaLimit() {{
                                defaultLimit = "expedita";
                                description = "officiis";
                                displayName = "eos";
                                duration = "quibusdam";
                                freeTier = "odio";
                                maxLimit = "praesentium";
                                metric = "odit";
                                name = "Stacy Mraz";
                                unit = "recusandae";
                                values = new java.util.HashMap<String, String>() {{
                                    put("ut", "quidem");
                                    put("quis", "beatae");
                                    put("unde", "molestiae");
                                }};
                            }}),
                        }};
                        metricRules = new org.openapis.openapi.models.shared.MetricRule[]{{
                            add(new MetricRule() {{
                                metricCosts = new java.util.HashMap<String, String>() {{
                                    put("fugit", "numquam");
                                    put("numquam", "nesciunt");
                                    put("at", "officia");
                                }};
                                selector = "dignissimos";
                            }}),
                            add(new MetricRule() {{
                                metricCosts = new java.util.HashMap<String, String>() {{
                                    put("necessitatibus", "corporis");
                                    put("qui", "expedita");
                                    put("voluptatum", "cupiditate");
                                    put("minima", "placeat");
                                }};
                                selector = "enim";
                            }}),
                            add(new MetricRule() {{
                                metricCosts = new java.util.HashMap<String, String>() {{
                                    put("in", "minus");
                                }};
                                selector = "eum";
                            }}),
                            add(new MetricRule() {{
                                metricCosts = new java.util.HashMap<String, String>() {{
                                    put("corporis", "magnam");
                                    put("voluptates", "maiores");
                                }};
                                selector = "tempore";
                            }}),
                        }};
                    }};;
                    sourceInfo = new SourceInfo() {{
                        sourceFiles = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("ratione", "labore");
                                put("totam", "occaecati");
                                put("voluptas", "quo");
                            }}),
                        }};
                    }};;
                    systemParameters = new SystemParameters() {{
                        rules = new org.openapis.openapi.models.shared.SystemParameterRule[]{{
                            add(new SystemParameterRule() {{
                                parameters = new org.openapis.openapi.models.shared.SystemParameter[]{{
                                    add(new SystemParameter() {{
                                        httpHeader = "fuga";
                                        name = "Jodi Russel";
                                        urlQueryParameter = "vero";
                                    }}),
                                    add(new SystemParameter() {{
                                        httpHeader = "odit";
                                        name = "Ervin Hettinger IV";
                                        urlQueryParameter = "minima";
                                    }}),
                                    add(new SystemParameter() {{
                                        httpHeader = "in";
                                        name = "Sonia D'Amore IV";
                                        urlQueryParameter = "voluptate";
                                    }}),
                                    add(new SystemParameter() {{
                                        httpHeader = "pariatur";
                                        name = "Dana Ruecker";
                                        urlQueryParameter = "commodi";
                                    }}),
                                }};
                                selector = "officiis";
                            }}),
                        }};
                    }};;
                    systemTypes = new org.openapis.openapi.models.shared.Type[]{{
                        add(new Type() {{
                            edition = "quidem";
                            fields = new org.openapis.openapi.models.shared.Field[]{{
                                add(new Field() {{
                                    cardinality = FieldCardinalityEnum.CARDINALITY_OPTIONAL;
                                    defaultValue = "dolorem";
                                    jsonName = "modi";
                                    kind = FieldKindEnum.TYPE_DOUBLE;
                                    name = "Ignacio Dietrich";
                                    number = 120120;
                                    oneofIndex = 936928;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Mr. Todd Reilly";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("ipsa", "ducimus");
                                                put("maiores", "veritatis");
                                                put("quasi", "laboriosam");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Pete Mann";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("nostrum", "doloribus");
                                                put("eligendi", "sint");
                                            }};
                                        }}),
                                    }};
                                    packed = false;
                                    typeUrl = "enim";
                                }}),
                                add(new Field() {{
                                    cardinality = FieldCardinalityEnum.CARDINALITY_REPEATED;
                                    defaultValue = "animi";
                                    jsonName = "quas";
                                    kind = FieldKindEnum.TYPE_STRING;
                                    name = "Darren Bechtelar V";
                                    number = 614438;
                                    oneofIndex = 826862;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Lee Batz";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("ipsum", "adipisci");
                                                put("saepe", "deserunt");
                                                put("doloremque", "quis");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Jeannette Bradtke";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("possimus", "non");
                                                put("magnam", "itaque");
                                                put("sed", "asperiores");
                                                put("veniam", "consequuntur");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Dwight Connelly";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("ab", "velit");
                                                put("facilis", "tempore");
                                            }};
                                        }}),
                                    }};
                                    packed = false;
                                    typeUrl = "nisi";
                                }}),
                            }};
                            name = "Alex Labadie";
                            oneofs = new String[]{{
                                add("nisi"),
                                add("libero"),
                            }};
                            options = new org.openapis.openapi.models.shared.Option[]{{
                                add(new Option() {{
                                    name = "Johnathan Emmerich";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("consequuntur", "debitis");
                                        put("labore", "rerum");
                                        put("eos", "reprehenderit");
                                        put("nostrum", "neque");
                                    }};
                                }}),
                                add(new Option() {{
                                    name = "Genevieve Lebsack";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("officiis", "ducimus");
                                        put("dolor", "dicta");
                                        put("error", "porro");
                                    }};
                                }}),
                                add(new Option() {{
                                    name = "Marian Koelpin";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("enim", "delectus");
                                    }};
                                }}),
                                add(new Option() {{
                                    name = "Mr. Marian Renner";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("saepe", "tempore");
                                        put("veniam", "eos");
                                        put("reiciendis", "earum");
                                        put("reprehenderit", "praesentium");
                                    }};
                                }}),
                            }};
                            sourceContext = new SourceContext() {{
                                fileName = "nemo";
                            }};
                            syntax = TypeSyntaxEnum.SYNTAX_EDITIONS;
                        }}),
                        add(new Type() {{
                            edition = "quisquam";
                            fields = new org.openapis.openapi.models.shared.Field[]{{
                                add(new Field() {{
                                    cardinality = FieldCardinalityEnum.CARDINALITY_OPTIONAL;
                                    defaultValue = "deleniti";
                                    jsonName = "illo";
                                    kind = FieldKindEnum.TYPE_INT32;
                                    name = "Jim Schamberger";
                                    number = 921719;
                                    oneofIndex = 9683;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Candice Rath";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("rerum", "dignissimos");
                                                put("corporis", "vero");
                                                put("similique", "repellendus");
                                                put("iure", "dolorem");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Mr. Leticia Johns";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("amet", "illum");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Willis Rippin Sr.";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("doloremque", "earum");
                                                put("iusto", "amet");
                                                put("provident", "dolorum");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Mrs. Terrence Waelchi";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("facilis", "corrupti");
                                                put("aperiam", "sint");
                                                put("accusamus", "eos");
                                                put("totam", "dicta");
                                            }};
                                        }}),
                                    }};
                                    packed = false;
                                    typeUrl = "voluptatem";
                                }}),
                            }};
                            name = "Cindy Casper";
                            oneofs = new String[]{{
                                add("atque"),
                                add("beatae"),
                                add("at"),
                            }};
                            options = new org.openapis.openapi.models.shared.Option[]{{
                                add(new Option() {{
                                    name = "Miss Cory Bartoletti";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("dignissimos", "repellat");
                                    }};
                                }}),
                                add(new Option() {{
                                    name = "Francis McKenzie";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("consectetur", "soluta");
                                        put("natus", "temporibus");
                                    }};
                                }}),
                            }};
                            sourceContext = new SourceContext() {{
                                fileName = "officia";
                            }};
                            syntax = TypeSyntaxEnum.SYNTAX_PROTO2;
                        }}),
                        add(new Type() {{
                            edition = "tenetur";
                            fields = new org.openapis.openapi.models.shared.Field[]{{
                                add(new Field() {{
                                    cardinality = FieldCardinalityEnum.CARDINALITY_REPEATED;
                                    defaultValue = "itaque";
                                    jsonName = "illum";
                                    kind = FieldKindEnum.TYPE_BYTES;
                                    name = "Leigh Denesik";
                                    number = 128696;
                                    oneofIndex = 129355;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Dr. Elaine Bernhard";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("non", "distinctio");
                                                put("in", "exercitationem");
                                                put("labore", "numquam");
                                                put("repudiandae", "modi");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Judith Thompson Sr.";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("enim", "voluptate");
                                                put("similique", "minima");
                                                put("libero", "magnam");
                                            }};
                                        }}),
                                    }};
                                    packed = false;
                                    typeUrl = "sit";
                                }}),
                            }};
                            name = "Natalie Dooley";
                            oneofs = new String[]{{
                                add("nostrum"),
                                add("molestiae"),
                                add("veniam"),
                                add("reiciendis"),
                            }};
                            options = new org.openapis.openapi.models.shared.Option[]{{
                                add(new Option() {{
                                    name = "Maria Ankunding";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("numquam", "dolorum");
                                        put("possimus", "voluptate");
                                    }};
                                }}),
                            }};
                            sourceContext = new SourceContext() {{
                                fileName = "consectetur";
                            }};
                            syntax = TypeSyntaxEnum.SYNTAX_PROTO2;
                        }}),
                        add(new Type() {{
                            edition = "quaerat";
                            fields = new org.openapis.openapi.models.shared.Field[]{{
                                add(new Field() {{
                                    cardinality = FieldCardinalityEnum.CARDINALITY_REPEATED;
                                    defaultValue = "sunt";
                                    jsonName = "distinctio";
                                    kind = FieldKindEnum.TYPE_STRING;
                                    name = "Henry Purdy";
                                    number = 685415;
                                    oneofIndex = 5310;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Brandy Langosh Jr.";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("saepe", "delectus");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Orville Nitzsche Jr.";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("hic", "voluptatem");
                                                put("incidunt", "qui");
                                                put("qui", "necessitatibus");
                                                put("harum", "explicabo");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Beth Gleason";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("officia", "libero");
                                                put("totam", "sequi");
                                                put("aliquid", "ea");
                                            }};
                                        }}),
                                    }};
                                    packed = false;
                                    typeUrl = "impedit";
                                }}),
                                add(new Field() {{
                                    cardinality = FieldCardinalityEnum.CARDINALITY_OPTIONAL;
                                    defaultValue = "odit";
                                    jsonName = "velit";
                                    kind = FieldKindEnum.TYPE_SINT64;
                                    name = "Drew Osinski";
                                    number = 42906;
                                    oneofIndex = 392967;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Pat Fritsch";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("quisquam", "dicta");
                                                put("voluptatibus", "eligendi");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Mrs. Rochelle Bradtke";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("perferendis", "facilis");
                                                put("reiciendis", "a");
                                                put("iste", "dicta");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Dan Grimes";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("modi", "consequuntur");
                                                put("assumenda", "vero");
                                                put("doloribus", "impedit");
                                                put("porro", "accusamus");
                                            }};
                                        }}),
                                    }};
                                    packed = false;
                                    typeUrl = "totam";
                                }}),
                                add(new Field() {{
                                    cardinality = FieldCardinalityEnum.CARDINALITY_REPEATED;
                                    defaultValue = "ab";
                                    jsonName = "sint";
                                    kind = FieldKindEnum.TYPE_BOOL;
                                    name = "Charlene Kuhic";
                                    number = 423588;
                                    oneofIndex = 208683;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Kathryn Nitzsche";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("ipsa", "rem");
                                                put("maiores", "accusantium");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Tricia DuBuque";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("doloribus", "fugiat");
                                                put("est", "delectus");
                                                put("velit", "vitae");
                                            }};
                                        }}),
                                    }};
                                    packed = false;
                                    typeUrl = "nesciunt";
                                }}),
                                add(new Field() {{
                                    cardinality = FieldCardinalityEnum.CARDINALITY_REQUIRED;
                                    defaultValue = "illo";
                                    jsonName = "repellat";
                                    kind = FieldKindEnum.TYPE_FIXED64;
                                    name = "Woodrow Mitchell III";
                                    number = 583193;
                                    oneofIndex = 761437;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Antonio Jerde";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("debitis", "officia");
                                                put("sint", "ut");
                                            }};
                                        }}),
                                    }};
                                    packed = false;
                                    typeUrl = "numquam";
                                }}),
                            }};
                            name = "Travis Rempel";
                            oneofs = new String[]{{
                                add("minus"),
                                add("ab"),
                            }};
                            options = new org.openapis.openapi.models.shared.Option[]{{
                                add(new Option() {{
                                    name = "Charlie Schaefer";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("minima", "architecto");
                                        put("qui", "aliquid");
                                        put("magni", "incidunt");
                                    }};
                                }}),
                            }};
                            sourceContext = new SourceContext() {{
                                fileName = "adipisci";
                            }};
                            syntax = TypeSyntaxEnum.SYNTAX_PROTO3;
                        }}),
                    }};
                    title = "Mrs.";
                    types = new org.openapis.openapi.models.shared.Type[]{{
                        add(new Type() {{
                            edition = "expedita";
                            fields = new org.openapis.openapi.models.shared.Field[]{{
                                add(new Field() {{
                                    cardinality = FieldCardinalityEnum.CARDINALITY_REPEATED;
                                    defaultValue = "sit";
                                    jsonName = "nemo";
                                    kind = FieldKindEnum.TYPE_BYTES;
                                    name = "Victoria Nolan";
                                    number = 800256;
                                    oneofIndex = 932250;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Bill Yundt";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("alias", "culpa");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Della Treutel III";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("debitis", "ullam");
                                                put("architecto", "accusantium");
                                                put("perferendis", "veritatis");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Noel Kertzmann";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("recusandae", "velit");
                                                put("magnam", "dignissimos");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Jane Kuhlman";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("doloribus", "facilis");
                                                put("quidem", "itaque");
                                                put("laboriosam", "unde");
                                            }};
                                        }}),
                                    }};
                                    packed = false;
                                    typeUrl = "modi";
                                }}),
                                add(new Field() {{
                                    cardinality = FieldCardinalityEnum.CARDINALITY_REQUIRED;
                                    defaultValue = "hic";
                                    jsonName = "cum";
                                    kind = FieldKindEnum.TYPE_FLOAT;
                                    name = "Alton Goyette";
                                    number = 664666;
                                    oneofIndex = 904440;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Antonio Stanton";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("non", "mollitia");
                                                put("assumenda", "recusandae");
                                                put("distinctio", "pariatur");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Ernestine Padberg";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("maxime", "ipsam");
                                                put("alias", "suscipit");
                                            }};
                                        }}),
                                    }};
                                    packed = false;
                                    typeUrl = "deserunt";
                                }}),
                                add(new Field() {{
                                    cardinality = FieldCardinalityEnum.CARDINALITY_REQUIRED;
                                    defaultValue = "laborum";
                                    jsonName = "est";
                                    kind = FieldKindEnum.TYPE_GROUP;
                                    name = "Roxanne Aufderhar";
                                    number = 301309;
                                    oneofIndex = 308528;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Gordon Towne";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("mollitia", "magnam");
                                                put("nostrum", "esse");
                                                put("corrupti", "fuga");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Edmund Boyle";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("doloremque", "voluptatem");
                                                put("facere", "necessitatibus");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Miss William Bechtelar";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("quae", "magni");
                                                put("officiis", "sed");
                                                put("necessitatibus", "impedit");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Sonia Wiegand";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("alias", "asperiores");
                                                put("rem", "dicta");
                                                put("suscipit", "earum");
                                                put("doloribus", "velit");
                                            }};
                                        }}),
                                    }};
                                    packed = false;
                                    typeUrl = "eius";
                                }}),
                            }};
                            name = "Mrs. Pearl Rosenbaum";
                            oneofs = new String[]{{
                                add("accusantium"),
                                add("qui"),
                                add("impedit"),
                            }};
                            options = new org.openapis.openapi.models.shared.Option[]{{
                                add(new Option() {{
                                    name = "Cheryl Conn";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("error", "vel");
                                    }};
                                }}),
                            }};
                            sourceContext = new SourceContext() {{
                                fileName = "accusantium";
                            }};
                            syntax = TypeSyntaxEnum.SYNTAX_PROTO3;
                        }}),
                        add(new Type() {{
                            edition = "laboriosam";
                            fields = new org.openapis.openapi.models.shared.Field[]{{
                                add(new Field() {{
                                    cardinality = FieldCardinalityEnum.CARDINALITY_REQUIRED;
                                    defaultValue = "veritatis";
                                    jsonName = "ullam";
                                    kind = FieldKindEnum.TYPE_DOUBLE;
                                    name = "Barry Koepp";
                                    number = 965095;
                                    oneofIndex = 609537;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Kendra Hauck";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("maiores", "laudantium");
                                                put("velit", "reiciendis");
                                                put("amet", "nemo");
                                            }};
                                        }}),
                                    }};
                                    packed = false;
                                    typeUrl = "ipsa";
                                }}),
                                add(new Field() {{
                                    cardinality = FieldCardinalityEnum.CARDINALITY_REPEATED;
                                    defaultValue = "tenetur";
                                    jsonName = "quas";
                                    kind = FieldKindEnum.TYPE_STRING;
                                    name = "Nettie Wilkinson";
                                    number = 34245;
                                    oneofIndex = 118917;
                                    options = new org.openapis.openapi.models.shared.Option[]{{
                                        add(new Option() {{
                                            name = "Laverne Sauer";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("voluptates", "fugit");
                                                put("eius", "sequi");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Marlon Koelpin";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("a", "animi");
                                                put("maiores", "itaque");
                                                put("nulla", "deserunt");
                                                put("corporis", "velit");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Ronnie Nikolaus";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("accusantium", "officia");
                                                put("impedit", "quasi");
                                                put("blanditiis", "eius");
                                                put("quisquam", "eos");
                                            }};
                                        }}),
                                        add(new Option() {{
                                            name = "Jeremiah Schimmel";
                                            value = new java.util.HashMap<String, Object>() {{
                                                put("quod", "quos");
                                                put("corrupti", "amet");
                                            }};
                                        }}),
                                    }};
                                    packed = false;
                                    typeUrl = "molestiae";
                                }}),
                            }};
                            name = "Dr. Kayla Gleichner V";
                            oneofs = new String[]{{
                                add("sunt"),
                                add("maiores"),
                            }};
                            options = new org.openapis.openapi.models.shared.Option[]{{
                                add(new Option() {{
                                    name = "Lila Harris II";
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("nihil", "ad");
                                        put("nisi", "tenetur");
                                    }};
                                }}),
                            }};
                            sourceContext = new SourceContext() {{
                                fileName = "quis";
                            }};
                            syntax = TypeSyntaxEnum.SYNTAX_EDITIONS;
                        }}),
                    }};
                    usage = new Usage() {{
                        producerNotificationChannel = "nemo";
                        requirements = new String[]{{
                            add("pariatur"),
                            add("sit"),
                        }};
                        rules = new org.openapis.openapi.models.shared.UsageRule[]{{
                            add(new UsageRule() {{
                                allowUnregisteredCalls = false;
                                selector = "repellendus";
                                skipServiceControl = false;
                            }}),
                            add(new UsageRule() {{
                                allowUnregisteredCalls = false;
                                selector = "perferendis";
                                skipServiceControl = false;
                            }}),
                            add(new UsageRule() {{
                                allowUnregisteredCalls = false;
                                selector = "id";
                                skipServiceControl = false;
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "possimus";
                fields = "repellat";
                key = "repudiandae";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "pariatur";
                uploadProtocol = "harum";
            }};            

            ServicemanagementServicesConfigsCreateResponse res = sdk.services.servicemanagementServicesConfigsCreate(req, new ServicemanagementServicesConfigsCreateSecurity() {{
                option1 = new ServicemanagementServicesConfigsCreateSecurityOption1("dolore", "voluptatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicemanagementServicesConfigsGet

Gets a service configuration (version) for a managed service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsGetRequest;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsGetResponse;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsGetSecurity;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsGetSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsGetSecurityOption2;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsGetSecurityOption3;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsGetSecurityOption4;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementServicesConfigsGetRequest req = new ServicemanagementServicesConfigsGetRequest("iure", "explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "velit";
                fields = "earum";
                key = "praesentium";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "quasi";
                uploadProtocol = "mollitia";
                view = ServicemanagementServicesConfigsGetViewEnum.FULL;
            }};            

            ServicemanagementServicesConfigsGetResponse res = sdk.services.servicemanagementServicesConfigsGet(req, new ServicemanagementServicesConfigsGetSecurity() {{
                option1 = new ServicemanagementServicesConfigsGetSecurityOption1("harum", "cumque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicemanagementServicesConfigsList

Lists the history of the service configuration for a managed service, from the newest to the oldest.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsListRequest;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsListResponse;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsListSecurity;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsListSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsListSecurityOption2;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsListSecurityOption3;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementServicesConfigsListRequest req = new ServicemanagementServicesConfigsListRequest("doloremque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corrupti";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "aliquid";
                key = "excepturi";
                oauthToken = "magni";
                pageSize = 273677L;
                pageToken = "possimus";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "rerum";
                uploadProtocol = "sed";
            }};            

            ServicemanagementServicesConfigsListResponse res = sdk.services.servicemanagementServicesConfigsList(req, new ServicemanagementServicesConfigsListSecurity() {{
                option1 = new ServicemanagementServicesConfigsListSecurityOption1("accusamus", "optio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listServiceConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicemanagementServicesConfigsSubmit

Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification). This method stores the source configurations as well as the generated service configuration. To rollout the service configuration to other services, please call CreateServiceRollout. Only the 100 most recent configuration sources and ones referenced by existing service configurtions are kept for each service. The rest will be deleted eventually. Operation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsSubmitRequest;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsSubmitResponse;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsSubmitSecurity;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsSubmitSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementServicesConfigsSubmitSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConfigFile;
import org.openapis.openapi.models.shared.ConfigFileFileTypeEnum;
import org.openapis.openapi.models.shared.ConfigSource;
import org.openapis.openapi.models.shared.SubmitConfigSourceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementServicesConfigsSubmitRequest req = new ServicemanagementServicesConfigsSubmitRequest("delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                submitConfigSourceRequest = new SubmitConfigSourceRequest() {{
                    configSource = new ConfigSource() {{
                        files = new org.openapis.openapi.models.shared.ConfigFile[]{{
                            add(new ConfigFile() {{
                                fileContents = "quos";
                                filePath = "asperiores";
                                fileType = ConfigFileFileTypeEnum.OPEN_API_YAML;
                            }}),
                            add(new ConfigFile() {{
                                fileContents = "iste";
                                filePath = "corporis";
                                fileType = ConfigFileFileTypeEnum.FILE_TYPE_UNSPECIFIED;
                            }}),
                            add(new ConfigFile() {{
                                fileContents = "illo";
                                filePath = "aut";
                                fileType = ConfigFileFileTypeEnum.PROTO_FILE;
                            }}),
                            add(new ConfigFile() {{
                                fileContents = "nostrum";
                                filePath = "at";
                                fileType = ConfigFileFileTypeEnum.FILE_DESCRIPTOR_SET_PROTO;
                            }}),
                        }};
                        id = "3d6fa180-4e54-4c82-b168-a363c8873e48";
                    }};;
                    validateOnly = false;
                }};;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "voluptatum";
                fields = "sit";
                key = "rerum";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "autem";
                uploadProtocol = "quidem";
            }};            

            ServicemanagementServicesConfigsSubmitResponse res = sdk.services.servicemanagementServicesConfigsSubmit(req, new ServicemanagementServicesConfigsSubmitSecurity() {{
                option1 = new ServicemanagementServicesConfigsSubmitSecurityOption1("totam", "porro") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## servicemanagementServicesConsumersGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersGetIamPolicySecurityOption3;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersGetIamPolicySecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementServicesConsumersGetIamPolicyRequest req = new ServicemanagementServicesConsumersGetIamPolicyRequest("deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 471207;
                    }};;
                }};;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "alias";
                key = "fuga";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "maxime";
                uploadProtocol = "aliquam";
            }};            

            ServicemanagementServicesConsumersGetIamPolicyResponse res = sdk.services.servicemanagementServicesConsumersGetIamPolicy(req, new ServicemanagementServicesConsumersGetIamPolicySecurity() {{
                option1 = new ServicemanagementServicesConsumersGetIamPolicySecurityOption1("iste", "ullam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicemanagementServicesConsumersSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementServicesConsumersSetIamPolicyRequest req = new ServicemanagementServicesConsumersSetIamPolicyRequest("eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("illo"),
                                            add("nihil"),
                                            add("inventore"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quasi"),
                                            add("cumque"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("facere"),
                                            add("facilis"),
                                            add("beatae"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "delectus";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("corrupti"),
                                            add("rem"),
                                            add("atque"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("pariatur"),
                                            add("sapiente"),
                                            add("quo"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "quod";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "porro";
                                    expression = "id";
                                    location = "excepturi";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("quo"),
                                    add("esse"),
                                    add("hic"),
                                }};
                                role = "maxime";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "accusantium";
                                    expression = "soluta";
                                    location = "fugit";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("recusandae"),
                                    add("veritatis"),
                                    add("aut"),
                                    add("laudantium"),
                                }};
                                role = "iusto";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "dolor";
                                    expression = "voluptates";
                                    location = "tempora";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("doloremque"),
                                    add("voluptatem"),
                                    add("eum"),
                                }};
                                role = "at";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "eum";
                                    expression = "reprehenderit";
                                    location = "voluptatum";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("atque"),
                                    add("rerum"),
                                }};
                                role = "deserunt";
                            }}),
                        }};
                        etag = "atque";
                        version = 344856;
                    }};;
                    updateMask = "atque";
                }};;
                accessToken = "architecto";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "rem";
                key = "magni";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "placeat";
                uploadProtocol = "enim";
            }};            

            ServicemanagementServicesConsumersSetIamPolicyResponse res = sdk.services.servicemanagementServicesConsumersSetIamPolicy(req, new ServicemanagementServicesConsumersSetIamPolicySecurity() {{
                option1 = new ServicemanagementServicesConsumersSetIamPolicySecurityOption1("labore", "sapiente") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicemanagementServicesConsumersTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.operations.ServicemanagementServicesConsumersTestIamPermissionsSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementServicesConsumersTestIamPermissionsRequest req = new ServicemanagementServicesConsumersTestIamPermissionsRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("natus"),
                        add("cumque"),
                        add("natus"),
                    }};
                }};;
                accessToken = "quaerat";
                alt = AltEnum.PROTO;
                callback = "quia";
                fields = "officiis";
                key = "mollitia";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "enim";
                uploadProtocol = "eum";
            }};            

            ServicemanagementServicesConsumersTestIamPermissionsResponse res = sdk.services.servicemanagementServicesConsumersTestIamPermissions(req, new ServicemanagementServicesConsumersTestIamPermissionsSecurity() {{
                option1 = new ServicemanagementServicesConsumersTestIamPermissionsSecurityOption1("nemo", "illum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicemanagementServicesCreate

Creates a new managed service. A managed service is immutable, and is subject to mandatory 30-day data retention. You cannot move a service or recreate it within 30 days after deletion. One producer project can own no more than 500 services. For security and reliability purposes, a production service should be hosted in a dedicated producer project. Operation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementServicesCreateRequest;
import org.openapis.openapi.models.operations.ServicemanagementServicesCreateResponse;
import org.openapis.openapi.models.operations.ServicemanagementServicesCreateSecurity;
import org.openapis.openapi.models.operations.ServicemanagementServicesCreateSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementServicesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ManagedService;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementServicesCreateRequest req = new ServicemanagementServicesCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                managedService = new ManagedService() {{
                    producerProjectId = "sit";
                    serviceName = "odio";
                }};;
                accessToken = "minus";
                alt = AltEnum.PROTO;
                callback = "recusandae";
                fields = "voluptates";
                key = "praesentium";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "sit";
                uploadProtocol = "aliquid";
            }};            

            ServicemanagementServicesCreateResponse res = sdk.services.servicemanagementServicesCreate(req, new ServicemanagementServicesCreateSecurity() {{
                option1 = new ServicemanagementServicesCreateSecurityOption1("necessitatibus", "sed") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## servicemanagementServicesDelete

Deletes a managed service. This method will change the service to the `Soft-Delete` state for 30 days. Within this period, service producers may call UndeleteService to restore the service. After 30 days, the service will be permanently deleted. Operation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementServicesDeleteRequest;
import org.openapis.openapi.models.operations.ServicemanagementServicesDeleteResponse;
import org.openapis.openapi.models.operations.ServicemanagementServicesDeleteSecurity;
import org.openapis.openapi.models.operations.ServicemanagementServicesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementServicesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementServicesDeleteRequest req = new ServicemanagementServicesDeleteRequest("deleniti") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nesciunt";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "aliquam";
                key = "deserunt";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "impedit";
                uploadProtocol = "eius";
            }};            

            ServicemanagementServicesDeleteResponse res = sdk.services.servicemanagementServicesDelete(req, new ServicemanagementServicesDeleteSecurity() {{
                option1 = new ServicemanagementServicesDeleteSecurityOption1("voluptatum", "ipsa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## servicemanagementServicesGenerateConfigReport

Generates and returns a report (errors, warnings and changes from existing configurations) associated with GenerateConfigReportRequest.new_value If GenerateConfigReportRequest.old_value is specified, GenerateConfigReportRequest will contain a single ChangeReport based on the comparison between GenerateConfigReportRequest.new_value and GenerateConfigReportRequest.old_value. If GenerateConfigReportRequest.old_value is not specified, this method will compare GenerateConfigReportRequest.new_value with the last pushed service configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementServicesGenerateConfigReportRequest;
import org.openapis.openapi.models.operations.ServicemanagementServicesGenerateConfigReportResponse;
import org.openapis.openapi.models.operations.ServicemanagementServicesGenerateConfigReportSecurity;
import org.openapis.openapi.models.operations.ServicemanagementServicesGenerateConfigReportSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementServicesGenerateConfigReportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GenerateConfigReportRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementServicesGenerateConfigReportRequest req = new ServicemanagementServicesGenerateConfigReportRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                generateConfigReportRequest = new GenerateConfigReportRequest() {{
                    newConfig = new java.util.HashMap<String, Object>() {{
                        put("repellat", "aspernatur");
                    }};
                    oldConfig = new java.util.HashMap<String, Object>() {{
                        put("sequi", "fugit");
                    }};
                }};;
                accessToken = "fuga";
                alt = AltEnum.PROTO;
                callback = "eaque";
                fields = "dolorem";
                key = "architecto";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "nulla";
                uploadProtocol = "enim";
            }};            

            ServicemanagementServicesGenerateConfigReportResponse res = sdk.services.servicemanagementServicesGenerateConfigReport(req, new ServicemanagementServicesGenerateConfigReportSecurity() {{
                option1 = new ServicemanagementServicesGenerateConfigReportSecurityOption1("illo", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.generateConfigReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicemanagementServicesGet

Gets a managed service. Authentication is required unless the service is public.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementServicesGetRequest;
import org.openapis.openapi.models.operations.ServicemanagementServicesGetResponse;
import org.openapis.openapi.models.operations.ServicemanagementServicesGetSecurity;
import org.openapis.openapi.models.operations.ServicemanagementServicesGetSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementServicesGetSecurityOption2;
import org.openapis.openapi.models.operations.ServicemanagementServicesGetSecurityOption3;
import org.openapis.openapi.models.operations.ServicemanagementServicesGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementServicesGetRequest req = new ServicemanagementServicesGetRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "optio";
                alt = AltEnum.PROTO;
                callback = "ex";
                fields = "repellat";
                key = "quae";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "hic";
                uploadProtocol = "excepturi";
            }};            

            ServicemanagementServicesGetResponse res = sdk.services.servicemanagementServicesGet(req, new ServicemanagementServicesGetSecurity() {{
                option1 = new ServicemanagementServicesGetSecurityOption1("aliquid", "sed") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.managedService != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicemanagementServicesGetConfig

Gets a service configuration (version) for a managed service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementServicesGetConfigRequest;
import org.openapis.openapi.models.operations.ServicemanagementServicesGetConfigResponse;
import org.openapis.openapi.models.operations.ServicemanagementServicesGetConfigSecurity;
import org.openapis.openapi.models.operations.ServicemanagementServicesGetConfigSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementServicesGetConfigSecurityOption2;
import org.openapis.openapi.models.operations.ServicemanagementServicesGetConfigSecurityOption3;
import org.openapis.openapi.models.operations.ServicemanagementServicesGetConfigSecurityOption4;
import org.openapis.openapi.models.operations.ServicemanagementServicesGetConfigViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementServicesGetConfigRequest req = new ServicemanagementServicesGetConfigRequest("beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                configId = "tenetur";
                fields = "dignissimos";
                key = "esse";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "esse";
                uploadProtocol = "eveniet";
                view = ServicemanagementServicesGetConfigViewEnum.FULL;
            }};            

            ServicemanagementServicesGetConfigResponse res = sdk.services.servicemanagementServicesGetConfig(req, new ServicemanagementServicesGetConfigSecurity() {{
                option1 = new ServicemanagementServicesGetConfigSecurityOption1("velit", "officiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicemanagementServicesList

Lists managed services. Returns all public services. For authenticated users, also returns all services the calling user has "servicemanagement.services.get" permission for.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementServicesListRequest;
import org.openapis.openapi.models.operations.ServicemanagementServicesListResponse;
import org.openapis.openapi.models.operations.ServicemanagementServicesListSecurity;
import org.openapis.openapi.models.operations.ServicemanagementServicesListSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementServicesListSecurityOption2;
import org.openapis.openapi.models.operations.ServicemanagementServicesListSecurityOption3;
import org.openapis.openapi.models.operations.ServicemanagementServicesListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementServicesListRequest req = new ServicemanagementServicesListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "rerum";
                alt = AltEnum.PROTO;
                callback = "dignissimos";
                consumerId = "ipsam";
                fields = "explicabo";
                key = "impedit";
                oauthToken = "aliquid";
                pageSize = 339843L;
                pageToken = "facilis";
                prettyPrint = false;
                producerProjectId = "ipsum";
                quotaUser = "ut";
                uploadType = "quaerat";
                uploadProtocol = "architecto";
            }};            

            ServicemanagementServicesListResponse res = sdk.services.servicemanagementServicesList(req, new ServicemanagementServicesListSecurity() {{
                option1 = new ServicemanagementServicesListSecurityOption1("praesentium", "eveniet") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicemanagementServicesRolloutsCreate

Creates a new service configuration rollout. Based on rollout, the Google Service Management will roll out the service configurations to different backend services. For example, the logging configuration will be pushed to Google Cloud Logging. Please note that any previous pending and running Rollouts and associated Operations will be automatically cancelled so that the latest Rollout will not be blocked by previous Rollouts. Only the 100 most recent (in any state) and the last 10 successful (if not already part of the set of 100 most recent) rollouts are kept for each service. The rest will be deleted eventually. Operation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsCreateRequest;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsCreateResponse;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsCreateSecurity;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsCreateSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Rollout;
import org.openapis.openapi.models.shared.RolloutStatusEnum;
import org.openapis.openapi.models.shared.TrafficPercentStrategy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementServicesRolloutsCreateRequest req = new ServicemanagementServicesRolloutsCreateRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                rollout = new Rollout() {{
                    createTime = "libero";
                    createdBy = "iste";
                    deleteServiceStrategy = new java.util.HashMap<String, Object>() {{
                        put("minus", "quos");
                    }};
                    rolloutId = "temporibus";
                    serviceName = "sint";
                    status = RolloutStatusEnum.CANCELLED;
                    trafficPercentStrategy = new TrafficPercentStrategy() {{
                        percentages = new java.util.HashMap<String, Double>() {{
                            put("accusamus", 444.67);
                            put("voluptates", 5123.1);
                        }};
                    }};;
                }};;
                accessToken = "tempora";
                alt = AltEnum.JSON;
                callback = "omnis";
                fields = "illum";
                key = "rem";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "modi";
                uploadProtocol = "earum";
            }};            

            ServicemanagementServicesRolloutsCreateResponse res = sdk.services.servicemanagementServicesRolloutsCreate(req, new ServicemanagementServicesRolloutsCreateSecurity() {{
                option1 = new ServicemanagementServicesRolloutsCreateSecurityOption1("architecto", "aliquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## servicemanagementServicesRolloutsGet

Gets a service configuration rollout.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsGetRequest;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsGetResponse;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsGetSecurity;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsGetSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsGetSecurityOption2;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsGetSecurityOption3;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementServicesRolloutsGetRequest req = new ServicemanagementServicesRolloutsGetRequest("labore", "maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.JSON;
                callback = "esse";
                fields = "debitis";
                key = "facere";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "aliquam";
                uploadProtocol = "dolorum";
            }};            

            ServicemanagementServicesRolloutsGetResponse res = sdk.services.servicemanagementServicesRolloutsGet(req, new ServicemanagementServicesRolloutsGetSecurity() {{
                option1 = new ServicemanagementServicesRolloutsGetSecurityOption1("deserunt", "ad") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.rollout != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicemanagementServicesRolloutsList

Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsListRequest;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsListResponse;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsListSecurity;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsListSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsListSecurityOption2;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsListSecurityOption3;
import org.openapis.openapi.models.operations.ServicemanagementServicesRolloutsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementServicesRolloutsListRequest req = new ServicemanagementServicesRolloutsListRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "nobis";
                fields = "quibusdam";
                filter = "omnis";
                key = "aut";
                oauthToken = "ipsam";
                pageSize = 642804L;
                pageToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "quia";
                uploadProtocol = "necessitatibus";
            }};            

            ServicemanagementServicesRolloutsListResponse res = sdk.services.servicemanagementServicesRolloutsList(req, new ServicemanagementServicesRolloutsListSecurity() {{
                option1 = new ServicemanagementServicesRolloutsListSecurityOption1("accusantium", "ad") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listServiceRolloutsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicemanagementServicesUndelete

Revives a previously deleted managed service. The method restores the service using the configuration at the time the service was deleted. The target service must exist and must have been deleted within the last 30 days. Operation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementServicesUndeleteRequest;
import org.openapis.openapi.models.operations.ServicemanagementServicesUndeleteResponse;
import org.openapis.openapi.models.operations.ServicemanagementServicesUndeleteSecurity;
import org.openapis.openapi.models.operations.ServicemanagementServicesUndeleteSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementServicesUndeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementServicesUndeleteRequest req = new ServicemanagementServicesUndeleteRequest("nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "sed";
                fields = "odit";
                key = "iusto";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "repellendus";
                uploadProtocol = "nesciunt";
            }};            

            ServicemanagementServicesUndeleteResponse res = sdk.services.servicemanagementServicesUndelete(req, new ServicemanagementServicesUndeleteSecurity() {{
                option1 = new ServicemanagementServicesUndeleteSecurityOption1("ipsa", "sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
