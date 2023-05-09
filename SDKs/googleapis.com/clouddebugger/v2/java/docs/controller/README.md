# controller

### Available Operations

* [clouddebuggerControllerDebuggeesBreakpointsList](#clouddebuggercontrollerdebuggeesbreakpointslist) - Returns the list of all active breakpoints for the debuggee. The breakpoint specification (`location`, `condition`, and `expressions` fields) is semantically immutable, although the field values may change. For example, an agent may update the location line number to reflect the actual line where the breakpoint was set, but this doesn't change the breakpoint semantics. This means that an agent does not need to check if a breakpoint has changed when it encounters the same breakpoint on a successive call. Moreover, an agent should remember the breakpoints that are completed until the controller removes them from the active list to avoid setting those breakpoints again.
* [clouddebuggerControllerDebuggeesBreakpointsUpdate](#clouddebuggercontrollerdebuggeesbreakpointsupdate) - Updates the breakpoint state or mutable fields. The entire Breakpoint message must be sent back to the controller service. Updates to active breakpoint fields are only allowed if the new value does not change the breakpoint specification. Updates to the `location`, `condition` and `expressions` fields should not alter the breakpoint semantics. These may only make changes such as canonicalizing a value or snapping the location to the correct line of code.
* [clouddebuggerControllerDebuggeesRegister](#clouddebuggercontrollerdebuggeesregister) - Registers the debuggee with the controller service. All agents attached to the same application must call this method with exactly the same request content to get back the same stable `debuggee_id`. Agents should call this method again whenever `google.rpc.Code.NOT_FOUND` is returned from any controller method. This protocol allows the controller service to disable debuggees, recover from data loss, or change the `debuggee_id` format. Agents must handle `debuggee_id` value changing upon re-registration.

## clouddebuggerControllerDebuggeesBreakpointsList

Returns the list of all active breakpoints for the debuggee. The breakpoint specification (`location`, `condition`, and `expressions` fields) is semantically immutable, although the field values may change. For example, an agent may update the location line number to reflect the actual line where the breakpoint was set, but this doesn't change the breakpoint semantics. This means that an agent does not need to check if a breakpoint has changed when it encounters the same breakpoint on a successive call. Moreover, an agent should remember the breakpoints that are completed until the controller removes them from the active list to avoid setting those breakpoints again.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsListRequest;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsListResponse;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurity;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddebuggerControllerDebuggeesBreakpointsListRequest req = new ClouddebuggerControllerDebuggeesBreakpointsListRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                agentId = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                key = "voluptatum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "excepturi";
                successOnTimeout = false;
                uploadType = "nisi";
                uploadProtocol = "recusandae";
                waitToken = "temporibus";
            }};            

            ClouddebuggerControllerDebuggeesBreakpointsListResponse res = sdk.controller.clouddebuggerControllerDebuggeesBreakpointsList(req, new ClouddebuggerControllerDebuggeesBreakpointsListSecurity() {{
                option1 = new ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1("ab", "quis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listActiveBreakpointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddebuggerControllerDebuggeesBreakpointsUpdate

Updates the breakpoint state or mutable fields. The entire Breakpoint message must be sent back to the controller service. Updates to active breakpoint fields are only allowed if the new value does not change the breakpoint specification. Updates to the `location`, `condition` and `expressions` fields should not alter the breakpoint semantics. These may only make changes such as canonicalizing a value or snapping the location to the correct line of code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsUpdateResponse;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Breakpoint;
import org.openapis.openapi.models.shared.BreakpointActionEnum;
import org.openapis.openapi.models.shared.BreakpointLogLevelEnum;
import org.openapis.openapi.models.shared.BreakpointStateEnum;
import org.openapis.openapi.models.shared.FormatMessage;
import org.openapis.openapi.models.shared.SourceLocation;
import org.openapis.openapi.models.shared.StackFrame;
import org.openapis.openapi.models.shared.StatusMessage;
import org.openapis.openapi.models.shared.StatusMessageRefersToEnum;
import org.openapis.openapi.models.shared.UpdateActiveBreakpointRequest;
import org.openapis.openapi.models.shared.Variable;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest req = new ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest("veritatis", "deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                updateActiveBreakpointRequest = new UpdateActiveBreakpointRequest() {{
                    breakpoint = new Breakpoint() {{
                        action = BreakpointActionEnum.CAPTURE;
                        canaryExpireTime = "repellendus";
                        condition = "sapiente";
                        createTime = "quo";
                        evaluatedExpressions = new org.openapis.openapi.models.shared.Variable[]{{
                            add(new Variable() {{
                                members = new org.openapis.openapi.models.shared.Variable[]{{
                                    add(new Variable() {{}}),
                                    add(new Variable() {{}}),
                                    add(new Variable() {{}}),
                                    add(new Variable() {{}}),
                                }};
                                name = "Emilio Krajcik";
                                status = new StatusMessage() {{
                                    description = new FormatMessage() {{
                                        format = "esse";
                                        parameters = new String[]{{
                                            add("porro"),
                                            add("dolorum"),
                                            add("dicta"),
                                        }};
                                    }};
                                    isError = false;
                                    refersTo = StatusMessageRefersToEnum.BREAKPOINT_CANARY_FAILED;
                                }};
                                type = "officia";
                                value = "occaecati";
                                varTableIndex = 143353;
                            }}),
                        }};
                        expressions = new String[]{{
                            add("hic"),
                            add("optio"),
                            add("totam"),
                        }};
                        finalTime = "beatae";
                        id = "6742cb73-9205-4929-b96f-ea7596eb10fa";
                        isFinalState = false;
                        labels = new java.util.HashMap<String, String>() {{
                            put("laborum", "dolores");
                            put("dolorem", "corporis");
                            put("explicabo", "nobis");
                        }};
                        location = new SourceLocation() {{
                            column = 315428;
                            line = 607831;
                            path = "nemo";
                        }};;
                        logLevel = BreakpointLogLevelEnum.INFO;
                        logMessageFormat = "excepturi";
                        stackFrames = new org.openapis.openapi.models.shared.StackFrame[]{{
                            add(new StackFrame() {{
                                arguments = new org.openapis.openapi.models.shared.Variable[]{{
                                    add(new Variable() {{
                                        members = new org.openapis.openapi.models.shared.Variable[]{{
                                            add(new Variable() {{}}),
                                            add(new Variable() {{}}),
                                            add(new Variable() {{}}),
                                        }};
                                        name = "Darrin Brakus";
                                        status = new StatusMessage() {{
                                            description = new FormatMessage() {{
                                                format = "culpa";
                                                parameters = new String[]{{
                                                    add("repellat"),
                                                }};
                                            }};
                                            isError = false;
                                            refersTo = StatusMessageRefersToEnum.BREAKPOINT_CANARY_FAILED;
                                        }};
                                        type = "occaecati";
                                        value = "numquam";
                                        varTableIndex = 414369;
                                    }}),
                                    add(new Variable() {{
                                        members = new org.openapis.openapi.models.shared.Variable[]{{
                                            add(new Variable() {{}}),
                                            add(new Variable() {{}}),
                                        }};
                                        name = "Shannon Mueller";
                                        status = new StatusMessage() {{
                                            description = new FormatMessage() {{
                                                format = "vitae";
                                                parameters = new String[]{{
                                                    add("animi"),
                                                    add("enim"),
                                                    add("odit"),
                                                }};
                                            }};
                                            isError = false;
                                            refersTo = StatusMessageRefersToEnum.VARIABLE_NAME;
                                        }};
                                        type = "sequi";
                                        value = "tenetur";
                                        varTableIndex = 368725;
                                    }}),
                                }};
                                function = "id";
                                locals = new org.openapis.openapi.models.shared.Variable[]{{
                                    add(new Variable() {{
                                        members = new org.openapis.openapi.models.shared.Variable[]{{
                                            add(new Variable() {{}}),
                                        }};
                                        name = "Sabrina Smitham DVM";
                                        status = new StatusMessage() {{
                                            description = new FormatMessage() {{
                                                format = "voluptatibus";
                                                parameters = new String[]{{
                                                    add("nihil"),
                                                    add("praesentium"),
                                                    add("voluptatibus"),
                                                    add("ipsa"),
                                                }};
                                            }};
                                            isError = false;
                                            refersTo = StatusMessageRefersToEnum.BREAKPOINT_AGE;
                                        }};
                                        type = "voluptate";
                                        value = "cum";
                                        varTableIndex = 19987;
                                    }}),
                                    add(new Variable() {{
                                        members = new org.openapis.openapi.models.shared.Variable[]{{
                                            add(new Variable() {{}}),
                                        }};
                                        name = "Mrs. April Wuckert";
                                        status = new StatusMessage() {{
                                            description = new FormatMessage() {{
                                                format = "iusto";
                                                parameters = new String[]{{
                                                    add("harum"),
                                                }};
                                            }};
                                            isError = false;
                                            refersTo = StatusMessageRefersToEnum.BREAKPOINT_CONDITION;
                                        }};
                                        type = "accusamus";
                                        value = "commodi";
                                        varTableIndex = 918236;
                                    }}),
                                    add(new Variable() {{
                                        members = new org.openapis.openapi.models.shared.Variable[]{{
                                            add(new Variable() {{}}),
                                        }};
                                        name = "Alison Mann";
                                        status = new StatusMessage() {{
                                            description = new FormatMessage() {{
                                                format = "modi";
                                                parameters = new String[]{{
                                                    add("rem"),
                                                    add("voluptates"),
                                                    add("quasi"),
                                                }};
                                            }};
                                            isError = false;
                                            refersTo = StatusMessageRefersToEnum.VARIABLE_VALUE;
                                        }};
                                        type = "sint";
                                        value = "veritatis";
                                        varTableIndex = 929297;
                                    }}),
                                    add(new Variable() {{
                                        members = new org.openapis.openapi.models.shared.Variable[]{{
                                            add(new Variable() {{}}),
                                            add(new Variable() {{}}),
                                        }};
                                        name = "Elizabeth Orn";
                                        status = new StatusMessage() {{
                                            description = new FormatMessage() {{
                                                format = "deserunt";
                                                parameters = new String[]{{
                                                    add("quibusdam"),
                                                    add("labore"),
                                                    add("modi"),
                                                }};
                                            }};
                                            isError = false;
                                            refersTo = StatusMessageRefersToEnum.BREAKPOINT_SOURCE_LOCATION;
                                        }};
                                        type = "aliquid";
                                        value = "cupiditate";
                                        varTableIndex = 552822;
                                    }}),
                                }};
                                location = new SourceLocation() {{
                                    column = 20107;
                                    line = 164940;
                                    path = "assumenda";
                                }};
                            }}),
                        }};
                        state = BreakpointStateEnum.STATE_CANARY_PENDING_AGENTS;
                        status = new StatusMessage() {{
                            description = new FormatMessage() {{
                                format = "alias";
                                parameters = new String[]{{
                                    add("dolorum"),
                                }};
                            }};;
                            isError = false;
                            refersTo = StatusMessageRefersToEnum.BREAKPOINT_AGE;
                        }};;
                        userEmail = "tempora";
                        variableTable = new org.openapis.openapi.models.shared.Variable[]{{
                            add(new Variable() {{
                                members = new org.openapis.openapi.models.shared.Variable[]{{
                                    add(new Variable() {{}}),
                                    add(new Variable() {{}}),
                                    add(new Variable() {{}}),
                                }};
                                name = "Lucia Kemmer";
                                status = new StatusMessage() {{
                                    description = new FormatMessage() {{
                                        format = "sint";
                                        parameters = new String[]{{
                                            add("provident"),
                                            add("necessitatibus"),
                                        }};
                                    }};
                                    isError = false;
                                    refersTo = StatusMessageRefersToEnum.BREAKPOINT_AGE;
                                }};
                                type = "officia";
                                value = "dolor";
                                varTableIndex = 891555;
                            }}),
                            add(new Variable() {{
                                members = new org.openapis.openapi.models.shared.Variable[]{{
                                    add(new Variable() {{}}),
                                    add(new Variable() {{}}),
                                    add(new Variable() {{}}),
                                    add(new Variable() {{}}),
                                }};
                                name = "Arnold Kirlin";
                                status = new StatusMessage() {{
                                    description = new FormatMessage() {{
                                        format = "rerum";
                                        parameters = new String[]{{
                                            add("magnam"),
                                        }};
                                    }};
                                    isError = false;
                                    refersTo = StatusMessageRefersToEnum.VARIABLE_NAME;
                                }};
                                type = "facere";
                                value = "ea";
                                varTableIndex = 396506;
                            }}),
                            add(new Variable() {{
                                members = new org.openapis.openapi.models.shared.Variable[]{{
                                    add(new Variable() {{}}),
                                    add(new Variable() {{}}),
                                    add(new Variable() {{}}),
                                }};
                                name = "Alfred McClure";
                                status = new StatusMessage() {{
                                    description = new FormatMessage() {{
                                        format = "delectus";
                                        parameters = new String[]{{
                                            add("provident"),
                                            add("nam"),
                                            add("id"),
                                        }};
                                    }};
                                    isError = false;
                                    refersTo = StatusMessageRefersToEnum.BREAKPOINT_AGE;
                                }};
                                type = "deleniti";
                                value = "sapiente";
                                varTableIndex = 230533;
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "natus";
                key = "omnis";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "nihil";
                uploadProtocol = "magnam";
            }};            

            ClouddebuggerControllerDebuggeesBreakpointsUpdateResponse res = sdk.controller.clouddebuggerControllerDebuggeesBreakpointsUpdate(req, new ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity() {{
                option1 = new ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1("distinctio", "id") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.updateActiveBreakpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddebuggerControllerDebuggeesRegister

Registers the debuggee with the controller service. All agents attached to the same application must call this method with exactly the same request content to get back the same stable `debuggee_id`. Agents should call this method again whenever `google.rpc.Code.NOT_FOUND` is returned from any controller method. This protocol allows the controller service to disable debuggees, recover from data loss, or change the `debuggee_id` format. Agents must handle `debuggee_id` value changing upon re-registration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesRegisterRequest;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesRegisterResponse;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesRegisterSecurity;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesRegisterSecurityOption1;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesRegisterSecurityOption2;
import org.openapis.openapi.models.shared.AliasContext;
import org.openapis.openapi.models.shared.AliasContextKindEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudRepoSourceContext;
import org.openapis.openapi.models.shared.CloudWorkspaceId;
import org.openapis.openapi.models.shared.CloudWorkspaceSourceContext;
import org.openapis.openapi.models.shared.Debuggee;
import org.openapis.openapi.models.shared.DebuggeeCanaryModeEnum;
import org.openapis.openapi.models.shared.ExtendedSourceContext;
import org.openapis.openapi.models.shared.FormatMessage;
import org.openapis.openapi.models.shared.GerritSourceContext;
import org.openapis.openapi.models.shared.GitSourceContext;
import org.openapis.openapi.models.shared.ProjectRepoId;
import org.openapis.openapi.models.shared.RegisterDebuggeeRequest;
import org.openapis.openapi.models.shared.RepoId;
import org.openapis.openapi.models.shared.SourceContext;
import org.openapis.openapi.models.shared.StatusMessage;
import org.openapis.openapi.models.shared.StatusMessageRefersToEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddebuggerControllerDebuggeesRegisterRequest req = new ClouddebuggerControllerDebuggeesRegisterRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                registerDebuggeeRequest = new RegisterDebuggeeRequest() {{
                    debuggee = new Debuggee() {{
                        agentVersion = "labore";
                        canaryMode = DebuggeeCanaryModeEnum.CANARY_MODE_ALWAYS_ENABLED;
                        description = "natus";
                        extSourceContexts = new org.openapis.openapi.models.shared.ExtendedSourceContext[]{{
                            add(new ExtendedSourceContext() {{
                                context = new SourceContext() {{
                                    cloudRepo = new CloudRepoSourceContext() {{
                                        aliasContext = new AliasContext() {{
                                            kind = AliasContextKindEnum.FIXED;
                                            name = "Brandon Brakus V";
                                        }};
                                        aliasName = "ullam";
                                        repoId = new RepoId() {{
                                            projectRepoId = new ProjectRepoId() {{
                                                projectId = "provident";
                                                repoName = "quos";
                                            }};
                                            uid = "sint";
                                        }};
                                        revisionId = "accusantium";
                                    }};
                                    cloudWorkspace = new CloudWorkspaceSourceContext() {{
                                        snapshotId = "mollitia";
                                        workspaceId = new CloudWorkspaceId() {{
                                            name = "Shaun Hammes";
                                            repoId = new RepoId() {{
                                                projectRepoId = new ProjectRepoId() {{
                                                    projectId = "necessitatibus";
                                                    repoName = "odit";
                                                }};
                                                uid = "nemo";
                                            }};
                                        }};
                                    }};
                                    gerrit = new GerritSourceContext() {{
                                        aliasContext = new AliasContext() {{
                                            kind = AliasContextKindEnum.ANY;
                                            name = "Melba Toy";
                                        }};
                                        aliasName = "deleniti";
                                        gerritProject = "facilis";
                                        hostUri = "in";
                                        revisionId = "architecto";
                                    }};
                                    git = new GitSourceContext() {{
                                        revisionId = "architecto";
                                        url = "repudiandae";
                                    }};
                                }};
                                labels = new java.util.HashMap<String, String>() {{
                                    put("expedita", "nihil");
                                    put("repellat", "quibusdam");
                                }};
                            }}),
                            add(new ExtendedSourceContext() {{
                                context = new SourceContext() {{
                                    cloudRepo = new CloudRepoSourceContext() {{
                                        aliasContext = new AliasContext() {{
                                            kind = AliasContextKindEnum.ANY;
                                            name = "Al Bashirian";
                                        }};
                                        aliasName = "natus";
                                        repoId = new RepoId() {{
                                            projectRepoId = new ProjectRepoId() {{
                                                projectId = "magni";
                                                repoName = "sunt";
                                            }};
                                            uid = "quo";
                                        }};
                                        revisionId = "illum";
                                    }};
                                    cloudWorkspace = new CloudWorkspaceSourceContext() {{
                                        snapshotId = "pariatur";
                                        workspaceId = new CloudWorkspaceId() {{
                                            name = "Nathaniel Marks";
                                            repoId = new RepoId() {{
                                                projectRepoId = new ProjectRepoId() {{
                                                    projectId = "accusantium";
                                                    repoName = "ab";
                                                }};
                                                uid = "maiores";
                                            }};
                                        }};
                                    }};
                                    gerrit = new GerritSourceContext() {{
                                        aliasContext = new AliasContext() {{
                                            kind = AliasContextKindEnum.MOVABLE;
                                            name = "Colleen Johnston PhD";
                                        }};
                                        aliasName = "nemo";
                                        gerritProject = "voluptatibus";
                                        hostUri = "perferendis";
                                        revisionId = "fugiat";
                                    }};
                                    git = new GitSourceContext() {{
                                        revisionId = "amet";
                                        url = "aut";
                                    }};
                                }};
                                labels = new java.util.HashMap<String, String>() {{
                                    put("corporis", "hic");
                                    put("libero", "nobis");
                                    put("dolores", "quis");
                                    put("totam", "dignissimos");
                                }};
                            }}),
                            add(new ExtendedSourceContext() {{
                                context = new SourceContext() {{
                                    cloudRepo = new CloudRepoSourceContext() {{
                                        aliasContext = new AliasContext() {{
                                            kind = AliasContextKindEnum.ANY;
                                            name = "Mr. Robin Daugherty";
                                        }};
                                        aliasName = "quam";
                                        repoId = new RepoId() {{
                                            projectRepoId = new ProjectRepoId() {{
                                                projectId = "dolor";
                                                repoName = "vero";
                                            }};
                                            uid = "nostrum";
                                        }};
                                        revisionId = "hic";
                                    }};
                                    cloudWorkspace = new CloudWorkspaceSourceContext() {{
                                        snapshotId = "recusandae";
                                        workspaceId = new CloudWorkspaceId() {{
                                            name = "Miss Cesar Metz";
                                            repoId = new RepoId() {{
                                                projectRepoId = new ProjectRepoId() {{
                                                    projectId = "blanditiis";
                                                    repoName = "error";
                                                }};
                                                uid = "eaque";
                                            }};
                                        }};
                                    }};
                                    gerrit = new GerritSourceContext() {{
                                        aliasContext = new AliasContext() {{
                                            kind = AliasContextKindEnum.MOVABLE;
                                            name = "Travis Zemlak";
                                        }};
                                        aliasName = "iste";
                                        gerritProject = "dolorum";
                                        hostUri = "deleniti";
                                        revisionId = "pariatur";
                                    }};
                                    git = new GitSourceContext() {{
                                        revisionId = "provident";
                                        url = "nobis";
                                    }};
                                }};
                                labels = new java.util.HashMap<String, String>() {{
                                    put("delectus", "quaerat");
                                    put("quos", "aliquid");
                                    put("dolorem", "dolorem");
                                }};
                            }}),
                        }};
                        id = "323f9b77-f3a4-4100-a74e-bf69280d1ba7";
                        isDisabled = false;
                        isInactive = false;
                        labels = new java.util.HashMap<String, String>() {{
                            put("dolorum", "deleniti");
                            put("omnis", "necessitatibus");
                        }};
                        project = "distinctio";
                        sourceContexts = new org.openapis.openapi.models.shared.SourceContext[]{{
                            add(new SourceContext() {{
                                cloudRepo = new CloudRepoSourceContext() {{
                                    aliasContext = new AliasContext() {{
                                        kind = AliasContextKindEnum.FIXED;
                                        name = "Tamara Ondricka";
                                    }};
                                    aliasName = "aspernatur";
                                    repoId = new RepoId() {{
                                        projectRepoId = new ProjectRepoId() {{
                                            projectId = "perferendis";
                                            repoName = "amet";
                                        }};
                                        uid = "optio";
                                    }};
                                    revisionId = "accusamus";
                                }};
                                cloudWorkspace = new CloudWorkspaceSourceContext() {{
                                    snapshotId = "ad";
                                    workspaceId = new CloudWorkspaceId() {{
                                        name = "Sam Oberbrunner";
                                        repoId = new RepoId() {{
                                            projectRepoId = new ProjectRepoId() {{
                                                projectId = "repellendus";
                                                repoName = "totam";
                                            }};
                                            uid = "similique";
                                        }};
                                    }};
                                }};
                                gerrit = new GerritSourceContext() {{
                                    aliasContext = new AliasContext() {{
                                        kind = AliasContextKindEnum.ANY;
                                        name = "Alex Goodwin";
                                    }};
                                    aliasName = "officiis";
                                    gerritProject = "qui";
                                    hostUri = "dolorum";
                                    revisionId = "a";
                                }};
                                git = new GitSourceContext() {{
                                    revisionId = "esse";
                                    url = "harum";
                                }};
                            }}),
                            add(new SourceContext() {{
                                cloudRepo = new CloudRepoSourceContext() {{
                                    aliasContext = new AliasContext() {{
                                        kind = AliasContextKindEnum.FIXED;
                                        name = "Rosalie White";
                                    }};
                                    aliasName = "accusamus";
                                    repoId = new RepoId() {{
                                        projectRepoId = new ProjectRepoId() {{
                                            projectId = "numquam";
                                            repoName = "enim";
                                        }};
                                        uid = "dolorem";
                                    }};
                                    revisionId = "sapiente";
                                }};
                                cloudWorkspace = new CloudWorkspaceSourceContext() {{
                                    snapshotId = "totam";
                                    workspaceId = new CloudWorkspaceId() {{
                                        name = "Karen Rath";
                                        repoId = new RepoId() {{
                                            projectRepoId = new ProjectRepoId() {{
                                                projectId = "vel";
                                                repoName = "libero";
                                            }};
                                            uid = "voluptas";
                                        }};
                                    }};
                                }};
                                gerrit = new GerritSourceContext() {{
                                    aliasContext = new AliasContext() {{
                                        kind = AliasContextKindEnum.MOVABLE;
                                        name = "Tracy Gottlieb";
                                    }};
                                    aliasName = "maxime";
                                    gerritProject = "pariatur";
                                    hostUri = "soluta";
                                    revisionId = "dicta";
                                }};
                                git = new GitSourceContext() {{
                                    revisionId = "laborum";
                                    url = "totam";
                                }};
                            }}),
                            add(new SourceContext() {{
                                cloudRepo = new CloudRepoSourceContext() {{
                                    aliasContext = new AliasContext() {{
                                        kind = AliasContextKindEnum.FIXED;
                                        name = "Bonnie Raynor";
                                    }};
                                    aliasName = "quam";
                                    repoId = new RepoId() {{
                                        projectRepoId = new ProjectRepoId() {{
                                            projectId = "molestias";
                                            repoName = "temporibus";
                                        }};
                                        uid = "qui";
                                    }};
                                    revisionId = "neque";
                                }};
                                cloudWorkspace = new CloudWorkspaceSourceContext() {{
                                    snapshotId = "fugit";
                                    workspaceId = new CloudWorkspaceId() {{
                                        name = "Courtney Cassin";
                                        repoId = new RepoId() {{
                                            projectRepoId = new ProjectRepoId() {{
                                                projectId = "hic";
                                                repoName = "voluptatem";
                                            }};
                                            uid = "cumque";
                                        }};
                                    }};
                                }};
                                gerrit = new GerritSourceContext() {{
                                    aliasContext = new AliasContext() {{
                                        kind = AliasContextKindEnum.MOVABLE;
                                        name = "Carl Turner DDS";
                                    }};
                                    aliasName = "quos";
                                    gerritProject = "tempore";
                                    hostUri = "cupiditate";
                                    revisionId = "aperiam";
                                }};
                                git = new GitSourceContext() {{
                                    revisionId = "delectus";
                                    url = "dolorem";
                                }};
                            }}),
                            add(new SourceContext() {{
                                cloudRepo = new CloudRepoSourceContext() {{
                                    aliasContext = new AliasContext() {{
                                        kind = AliasContextKindEnum.FIXED;
                                        name = "Mr. Josephine Pagac V";
                                    }};
                                    aliasName = "itaque";
                                    repoId = new RepoId() {{
                                        projectRepoId = new ProjectRepoId() {{
                                            projectId = "consequatur";
                                            repoName = "est";
                                        }};
                                        uid = "repellendus";
                                    }};
                                    revisionId = "porro";
                                }};
                                cloudWorkspace = new CloudWorkspaceSourceContext() {{
                                    snapshotId = "doloribus";
                                    workspaceId = new CloudWorkspaceId() {{
                                        name = "Olivia McGlynn IV";
                                        repoId = new RepoId() {{
                                            projectRepoId = new ProjectRepoId() {{
                                                projectId = "odio";
                                                repoName = "occaecati";
                                            }};
                                            uid = "voluptatibus";
                                        }};
                                    }};
                                }};
                                gerrit = new GerritSourceContext() {{
                                    aliasContext = new AliasContext() {{
                                        kind = AliasContextKindEnum.OTHER;
                                        name = "Arturo Hauck";
                                    }};
                                    aliasName = "voluptate";
                                    gerritProject = "consectetur";
                                    hostUri = "vero";
                                    revisionId = "tenetur";
                                }};
                                git = new GitSourceContext() {{
                                    revisionId = "dignissimos";
                                    url = "hic";
                                }};
                            }}),
                        }};
                        status = new StatusMessage() {{
                            description = new FormatMessage() {{
                                format = "distinctio";
                                parameters = new String[]{{
                                    add("odio"),
                                    add("similique"),
                                    add("facilis"),
                                    add("vero"),
                                }};
                            }};;
                            isError = false;
                            refersTo = StatusMessageRefersToEnum.BREAKPOINT_EXPRESSION;
                        }};;
                        uniquifier = "dolore";
                    }};;
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "natus";
                key = "impedit";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "exercitationem";
                uploadProtocol = "nulla";
            }};            

            ClouddebuggerControllerDebuggeesRegisterResponse res = sdk.controller.clouddebuggerControllerDebuggeesRegister(req, new ClouddebuggerControllerDebuggeesRegisterSecurity() {{
                option1 = new ClouddebuggerControllerDebuggeesRegisterSecurityOption1("fugit", "porro") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.registerDebuggeeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
