# projects

### Available Operations

* [testingProjectsTestMatricesCancel](#testingprojectstestmatricescancel) - Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist
* [testingProjectsTestMatricesCreate](#testingprojectstestmatricescreate) - Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. The returned matrix will not yet contain the executions that will be created for this matrix. That happens later on and will require a call to GetTestMatrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.
* [testingProjectsTestMatricesGet](#testingprojectstestmatricesget) - Checks the status of a test matrix and the executions once they are created. The test matrix will contain the list of test executions to run if and only if the resultStorage.toolResultsExecution fields have been populated. Note: Flaky test executions may still be added to the matrix at a later stage. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist

## testingProjectsTestMatricesCancel

Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestingProjectsTestMatricesCancelRequest;
import org.openapis.openapi.models.operations.TestingProjectsTestMatricesCancelResponse;
import org.openapis.openapi.models.operations.TestingProjectsTestMatricesCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestingProjectsTestMatricesCancelRequest req = new TestingProjectsTestMatricesCancelRequest("recusandae", "temporibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
            }};            

            TestingProjectsTestMatricesCancelResponse res = sdk.projects.testingProjectsTestMatricesCancel(req, new TestingProjectsTestMatricesCancelSecurity("at", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cancelTestMatrixResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testingProjectsTestMatricesCreate

Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. The returned matrix will not yet contain the executions that will be created for this matrix. That happens later on and will require a call to GetTestMatrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestingProjectsTestMatricesCreateRequest;
import org.openapis.openapi.models.operations.TestingProjectsTestMatricesCreateResponse;
import org.openapis.openapi.models.operations.TestingProjectsTestMatricesCreateSecurity;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AndroidDevice;
import org.openapis.openapi.models.shared.AndroidDeviceList;
import org.openapis.openapi.models.shared.AndroidInstrumentationTest;
import org.openapis.openapi.models.shared.AndroidInstrumentationTestOrchestratorOptionEnum;
import org.openapis.openapi.models.shared.AndroidMatrix;
import org.openapis.openapi.models.shared.AndroidRoboTest;
import org.openapis.openapi.models.shared.AndroidRoboTestRoboModeEnum;
import org.openapis.openapi.models.shared.AndroidTestLoop;
import org.openapis.openapi.models.shared.Apk;
import org.openapis.openapi.models.shared.AppBundle;
import org.openapis.openapi.models.shared.ClientInfo;
import org.openapis.openapi.models.shared.ClientInfoDetail;
import org.openapis.openapi.models.shared.DeviceFile;
import org.openapis.openapi.models.shared.Environment;
import org.openapis.openapi.models.shared.EnvironmentMatrix;
import org.openapis.openapi.models.shared.EnvironmentVariable;
import org.openapis.openapi.models.shared.FileReference;
import org.openapis.openapi.models.shared.GoogleCloudStorage;
import org.openapis.openapi.models.shared.IosDevice;
import org.openapis.openapi.models.shared.IosDeviceFile;
import org.openapis.openapi.models.shared.IosDeviceList;
import org.openapis.openapi.models.shared.IosTestLoop;
import org.openapis.openapi.models.shared.IosTestSetup;
import org.openapis.openapi.models.shared.IosXcTest;
import org.openapis.openapi.models.shared.ManualSharding;
import org.openapis.openapi.models.shared.ObbFile;
import org.openapis.openapi.models.shared.RegularFile;
import org.openapis.openapi.models.shared.ResultStorage;
import org.openapis.openapi.models.shared.RoboDirective;
import org.openapis.openapi.models.shared.RoboDirectiveActionTypeEnum;
import org.openapis.openapi.models.shared.RoboStartingIntent;
import org.openapis.openapi.models.shared.Shard;
import org.openapis.openapi.models.shared.ShardingOption;
import org.openapis.openapi.models.shared.SmartSharding;
import org.openapis.openapi.models.shared.StartActivityIntent;
import org.openapis.openapi.models.shared.SystraceSetup;
import org.openapis.openapi.models.shared.TestDetails;
import org.openapis.openapi.models.shared.TestExecution;
import org.openapis.openapi.models.shared.TestExecutionStateEnum;
import org.openapis.openapi.models.shared.TestMatrix;
import org.openapis.openapi.models.shared.TestMatrixInvalidMatrixDetailsEnum;
import org.openapis.openapi.models.shared.TestMatrixOutcomeSummaryEnum;
import org.openapis.openapi.models.shared.TestMatrixStateEnum;
import org.openapis.openapi.models.shared.TestSetup;
import org.openapis.openapi.models.shared.TestSpecification;
import org.openapis.openapi.models.shared.TestTargetsForShard;
import org.openapis.openapi.models.shared.ToolResultsExecution;
import org.openapis.openapi.models.shared.ToolResultsHistory;
import org.openapis.openapi.models.shared.ToolResultsStep;
import org.openapis.openapi.models.shared.UniformSharding;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestingProjectsTestMatricesCreateRequest req = new TestingProjectsTestMatricesCreateRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                testMatrix = new TestMatrix() {{
                    clientInfo = new ClientInfo() {{
                        clientInfoDetails = new org.openapis.openapi.models.shared.ClientInfoDetail[]{{
                            add(new ClientInfoDetail() {{
                                key = "quod";
                                value = "esse";
                            }}),
                            add(new ClientInfoDetail() {{
                                key = "totam";
                                value = "porro";
                            }}),
                            add(new ClientInfoDetail() {{
                                key = "dolorum";
                                value = "dicta";
                            }}),
                            add(new ClientInfoDetail() {{
                                key = "nam";
                                value = "officia";
                            }}),
                        }};
                        name = "Wayne Lind";
                    }};;
                    environmentMatrix = new EnvironmentMatrix() {{
                        androidDeviceList = new AndroidDeviceList() {{
                            androidDevices = new org.openapis.openapi.models.shared.AndroidDevice[]{{
                                add(new AndroidDevice() {{
                                    androidModelId = "beatae";
                                    androidVersionId = "commodi";
                                    locale = "molestiae";
                                    orientation = "modi";
                                }}),
                                add(new AndroidDevice() {{
                                    androidModelId = "qui";
                                    androidVersionId = "impedit";
                                    locale = "cum";
                                    orientation = "esse";
                                }}),
                                add(new AndroidDevice() {{
                                    androidModelId = "ipsum";
                                    androidVersionId = "excepturi";
                                    locale = "aspernatur";
                                    orientation = "perferendis";
                                }}),
                            }};
                        }};;
                        androidMatrix = new AndroidMatrix() {{
                            androidModelIds = new String[]{{
                                add("natus"),
                                add("sed"),
                            }};
                            androidVersionIds = new String[]{{
                                add("dolor"),
                                add("natus"),
                                add("laboriosam"),
                            }};
                            locales = new String[]{{
                                add("saepe"),
                                add("fuga"),
                                add("in"),
                                add("corporis"),
                            }};
                            orientations = new String[]{{
                                add("iure"),
                                add("saepe"),
                                add("quidem"),
                            }};
                        }};;
                        iosDeviceList = new IosDeviceList() {{
                            iosDevices = new org.openapis.openapi.models.shared.IosDevice[]{{
                                add(new IosDevice() {{
                                    iosModelId = "ipsa";
                                    iosVersionId = "reiciendis";
                                    locale = "est";
                                    orientation = "mollitia";
                                }}),
                            }};
                        }};;
                    }};;
                    failFast = false;
                    flakyTestAttempts = 670638;
                    invalidMatrixDetails = TestMatrixInvalidMatrixDetailsEnum.INVALID_PACKAGE_NAME;
                    outcomeSummary = TestMatrixOutcomeSummaryEnum.SUCCESS;
                    projectId = "corporis";
                    resultStorage = new ResultStorage() {{
                        googleCloudStorage = new GoogleCloudStorage() {{
                            gcsPath = "explicabo";
                        }};;
                        resultsUrl = "nobis";
                        toolResultsExecution = new ToolResultsExecution() {{
                            executionId = "enim";
                            historyId = "omnis";
                            projectId = "nemo";
                        }};;
                        toolResultsHistory = new ToolResultsHistory() {{
                            historyId = "minima";
                            projectId = "excepturi";
                        }};;
                    }};;
                    state = TestMatrixStateEnum.TEST_STATE_UNSPECIFIED;
                    testExecutions = new org.openapis.openapi.models.shared.TestExecution[]{{
                        add(new TestExecution() {{
                            environment = new Environment() {{
                                androidDevice = new AndroidDevice() {{
                                    androidModelId = "culpa";
                                    androidVersionId = "doloribus";
                                    locale = "sapiente";
                                    orientation = "architecto";
                                }};
                                iosDevice = new IosDevice() {{
                                    iosModelId = "mollitia";
                                    iosVersionId = "dolorem";
                                    locale = "culpa";
                                    orientation = "consequuntur";
                                }};
                            }};
                            id = "fa946773-9251-4aa5-ac3f-5ad019da1ffe";
                            matrixId = "nihil";
                            projectId = "praesentium";
                            shard = new Shard() {{
                                numShards = 976762;
                                shardIndex = 55714;
                                testTargetsForShard = new TestTargetsForShard() {{
                                    testTargets = new String[]{{
                                        add("voluptate"),
                                        add("cum"),
                                        add("perferendis"),
                                    }};
                                }};
                            }};
                            state = TestExecutionStateEnum.TEST_STATE_UNSPECIFIED;
                            testDetails = new TestDetails() {{
                                errorMessage = "reprehenderit";
                                progressMessages = new String[]{{
                                    add("maiores"),
                                    add("dicta"),
                                }};
                            }};
                            testSpecification = new TestSpecification() {{
                                androidInstrumentationTest = new AndroidInstrumentationTest() {{
                                    appApk = new FileReference() {{
                                        gcsPath = "corporis";
                                    }};
                                    appBundle = new AppBundle() {{
                                        bundleLocation = new FileReference() {{
                                            gcsPath = "dolore";
                                        }};
                                    }};
                                    appPackageId = "iusto";
                                    orchestratorOption = AndroidInstrumentationTestOrchestratorOptionEnum.ORCHESTRATOR_OPTION_UNSPECIFIED;
                                    shardingOption = new ShardingOption() {{
                                        manualSharding = new ManualSharding() {{
                                            testTargetsForShard = new org.openapis.openapi.models.shared.TestTargetsForShard[]{{
                                                add(new TestTargetsForShard() {{
                                                    testTargets = new String[]{{
                                                        add("accusamus"),
                                                        add("commodi"),
                                                    }};
                                                }}),
                                                add(new TestTargetsForShard() {{
                                                    testTargets = new String[]{{
                                                        add("quae"),
                                                        add("ipsum"),
                                                        add("quidem"),
                                                        add("molestias"),
                                                    }};
                                                }}),
                                                add(new TestTargetsForShard() {{
                                                    testTargets = new String[]{{
                                                        add("pariatur"),
                                                        add("modi"),
                                                        add("praesentium"),
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        smartSharding = new SmartSharding() {{
                                            targetedShardDuration = "rem";
                                        }};
                                        uniformSharding = new UniformSharding() {{
                                            numShards = 916723;
                                        }};
                                    }};
                                    testApk = new FileReference() {{
                                        gcsPath = "quasi";
                                    }};
                                    testPackageId = "repudiandae";
                                    testRunnerClass = "sint";
                                    testTargets = new String[]{{
                                        add("itaque"),
                                    }};
                                }};
                                androidRoboTest = new AndroidRoboTest() {{
                                    appApk = new FileReference() {{
                                        gcsPath = "incidunt";
                                    }};
                                    appBundle = new AppBundle() {{
                                        bundleLocation = new FileReference() {{
                                            gcsPath = "enim";
                                        }};
                                    }};
                                    appInitialActivity = "consequatur";
                                    appPackageId = "est";
                                    maxDepth = 842342;
                                    maxSteps = 131797;
                                    roboDirectives = new org.openapis.openapi.models.shared.RoboDirective[]{{
                                        add(new RoboDirective() {{
                                            actionType = RoboDirectiveActionTypeEnum.ENTER_TEXT;
                                            inputText = "quibusdam";
                                            resourceName = "labore";
                                        }}),
                                        add(new RoboDirective() {{
                                            actionType = RoboDirectiveActionTypeEnum.SINGLE_CLICK;
                                            inputText = "qui";
                                            resourceName = "aliquid";
                                        }}),
                                        add(new RoboDirective() {{
                                            actionType = RoboDirectiveActionTypeEnum.ENTER_TEXT;
                                            inputText = "quos";
                                            resourceName = "perferendis";
                                        }}),
                                    }};
                                    roboMode = AndroidRoboTestRoboModeEnum.ROBO_MODE_UNSPECIFIED;
                                    roboScript = new FileReference() {{
                                        gcsPath = "assumenda";
                                    }};
                                    startingIntents = new org.openapis.openapi.models.shared.RoboStartingIntent[]{{
                                        add(new RoboStartingIntent() {{
                                            launcherActivity = new java.util.HashMap<String, Object>() {{
                                                put("fugit", "dolorum");
                                            }};
                                            startActivity = new StartActivityIntent() {{
                                                action = "excepturi";
                                                categories = new String[]{{
                                                    add("facilis"),
                                                    add("tempore"),
                                                }};
                                                uri = "http://which-honor.biz";
                                            }};
                                            timeout = "eligendi";
                                        }}),
                                        add(new RoboStartingIntent() {{
                                            launcherActivity = new java.util.HashMap<String, Object>() {{
                                                put("aliquid", "provident");
                                                put("necessitatibus", "sint");
                                                put("officia", "dolor");
                                            }};
                                            startActivity = new StartActivityIntent() {{
                                                action = "debitis";
                                                categories = new String[]{{
                                                    add("dolorum"),
                                                    add("in"),
                                                    add("in"),
                                                    add("illum"),
                                                }};
                                                uri = "https://right-burn.biz";
                                            }};
                                            timeout = "cumque";
                                        }}),
                                    }};
                                }};
                                androidTestLoop = new AndroidTestLoop() {{
                                    appApk = new FileReference() {{
                                        gcsPath = "facere";
                                    }};
                                    appBundle = new AppBundle() {{
                                        bundleLocation = new FileReference() {{
                                            gcsPath = "ea";
                                        }};
                                    }};
                                    appPackageId = "aliquid";
                                    scenarioLabels = new String[]{{
                                        add("accusamus"),
                                        add("non"),
                                        add("occaecati"),
                                    }};
                                    scenarios = new Integer[]{{
                                        add(881736),
                                        add(965417),
                                    }};
                                }};
                                disablePerformanceMetrics = false;
                                disableVideoRecording = false;
                                iosTestLoop = new IosTestLoop() {{
                                    appBundleId = "quidem";
                                    appIpa = new FileReference() {{
                                        gcsPath = "provident";
                                    }};
                                    scenarios = new Integer[]{{
                                        add(659669),
                                        add(501324),
                                        add(533206),
                                    }};
                                }};
                                iosTestSetup = new IosTestSetup() {{
                                    additionalIpas = new org.openapis.openapi.models.shared.FileReference[]{{
                                        add(new FileReference() {{
                                            gcsPath = "amet";
                                        }}),
                                        add(new FileReference() {{
                                            gcsPath = "deserunt";
                                        }}),
                                        add(new FileReference() {{
                                            gcsPath = "nisi";
                                        }}),
                                        add(new FileReference() {{
                                            gcsPath = "vel";
                                        }}),
                                    }};
                                    networkProfile = "natus";
                                    pullDirectories = new org.openapis.openapi.models.shared.IosDeviceFile[]{{
                                        add(new IosDeviceFile() {{
                                            bundleId = "molestiae";
                                            content = new FileReference() {{
                                                gcsPath = "perferendis";
                                            }};
                                            devicePath = "nihil";
                                        }}),
                                        add(new IosDeviceFile() {{
                                            bundleId = "magnam";
                                            content = new FileReference() {{
                                                gcsPath = "distinctio";
                                            }};
                                            devicePath = "id";
                                        }}),
                                        add(new IosDeviceFile() {{
                                            bundleId = "labore";
                                            content = new FileReference() {{
                                                gcsPath = "labore";
                                            }};
                                            devicePath = "suscipit";
                                        }}),
                                    }};
                                    pushFiles = new org.openapis.openapi.models.shared.IosDeviceFile[]{{
                                        add(new IosDeviceFile() {{
                                            bundleId = "nobis";
                                            content = new FileReference() {{
                                                gcsPath = "eum";
                                            }};
                                            devicePath = "vero";
                                        }}),
                                        add(new IosDeviceFile() {{
                                            bundleId = "aspernatur";
                                            content = new FileReference() {{
                                                gcsPath = "architecto";
                                            }};
                                            devicePath = "magnam";
                                        }}),
                                        add(new IosDeviceFile() {{
                                            bundleId = "et";
                                            content = new FileReference() {{
                                                gcsPath = "excepturi";
                                            }};
                                            devicePath = "ullam";
                                        }}),
                                    }};
                                }};
                                iosXcTest = new IosXcTest() {{
                                    appBundleId = "provident";
                                    testSpecialEntitlements = false;
                                    testsZip = new FileReference() {{
                                        gcsPath = "quos";
                                    }};
                                    xcodeVersion = "sint";
                                    xctestrun = new FileReference() {{
                                        gcsPath = "accusantium";
                                    }};
                                }};
                                testSetup = new TestSetup() {{
                                    account = new Account() {{
                                        googleAuto = new java.util.HashMap<String, Object>() {{
                                            put("reiciendis", "mollitia");
                                            put("ad", "eum");
                                            put("dolor", "necessitatibus");
                                        }};
                                    }};
                                    additionalApks = new org.openapis.openapi.models.shared.Apk[]{{
                                        add(new Apk() {{
                                            location = new FileReference() {{
                                                gcsPath = "nemo";
                                            }};
                                            packageName = "quasi";
                                        }}),
                                    }};
                                    directoriesToPull = new String[]{{
                                        add("doloribus"),
                                        add("debitis"),
                                    }};
                                    dontAutograntPermissions = false;
                                    environmentVariables = new org.openapis.openapi.models.shared.EnvironmentVariable[]{{
                                        add(new EnvironmentVariable() {{
                                            key = "maxime";
                                            value = "deleniti";
                                        }}),
                                        add(new EnvironmentVariable() {{
                                            key = "facilis";
                                            value = "in";
                                        }}),
                                    }};
                                    filesToPush = new org.openapis.openapi.models.shared.DeviceFile[]{{
                                        add(new DeviceFile() {{
                                            obbFile = new ObbFile() {{
                                                obb = new FileReference() {{
                                                    gcsPath = "architecto";
                                                }};
                                                obbFileName = "repudiandae";
                                            }};
                                            regularFile = new RegularFile() {{
                                                content = new FileReference() {{
                                                    gcsPath = "ullam";
                                                }};
                                                devicePath = "expedita";
                                            }};
                                        }}),
                                    }};
                                    networkProfile = "nihil";
                                    systrace = new SystraceSetup() {{
                                        durationSeconds = 998848;
                                    }};
                                }};
                                testTimeout = "quibusdam";
                            }};
                            timestamp = "sed";
                            toolResultsStep = new ToolResultsStep() {{
                                executionId = "saepe";
                                historyId = "pariatur";
                                projectId = "accusantium";
                                stepId = "consequuntur";
                            }};
                        }}),
                        add(new TestExecution() {{
                            environment = new Environment() {{
                                androidDevice = new AndroidDevice() {{
                                    androidModelId = "praesentium";
                                    androidVersionId = "natus";
                                    locale = "magni";
                                    orientation = "sunt";
                                }};
                                iosDevice = new IosDevice() {{
                                    iosModelId = "quo";
                                    iosVersionId = "illum";
                                    locale = "pariatur";
                                    orientation = "maxime";
                                }};
                            }};
                            id = "692601fb-576b-40d5-b0d3-0c5fbb258705";
                            matrixId = "nesciunt";
                            projectId = "eos";
                            shard = new Shard() {{
                                numShards = 18521;
                                shardIndex = 170986;
                                testTargetsForShard = new TestTargetsForShard() {{
                                    testTargets = new String[]{{
                                        add("quam"),
                                        add("dolor"),
                                        add("vero"),
                                        add("nostrum"),
                                    }};
                                }};
                            }};
                            state = TestExecutionStateEnum.INVALID;
                            testDetails = new TestDetails() {{
                                errorMessage = "recusandae";
                                progressMessages = new String[]{{
                                    add("facilis"),
                                    add("perspiciatis"),
                                    add("voluptatem"),
                                }};
                            }};
                            testSpecification = new TestSpecification() {{
                                androidInstrumentationTest = new AndroidInstrumentationTest() {{
                                    appApk = new FileReference() {{
                                        gcsPath = "porro";
                                    }};
                                    appBundle = new AppBundle() {{
                                        bundleLocation = new FileReference() {{
                                            gcsPath = "consequuntur";
                                        }};
                                    }};
                                    appPackageId = "blanditiis";
                                    orchestratorOption = AndroidInstrumentationTestOrchestratorOptionEnum.USE_ORCHESTRATOR;
                                    shardingOption = new ShardingOption() {{
                                        manualSharding = new ManualSharding() {{
                                            testTargetsForShard = new org.openapis.openapi.models.shared.TestTargetsForShard[]{{
                                                add(new TestTargetsForShard() {{
                                                    testTargets = new String[]{{
                                                        add("rerum"),
                                                        add("adipisci"),
                                                        add("asperiores"),
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        smartSharding = new SmartSharding() {{
                                            targetedShardDuration = "earum";
                                        }};
                                        uniformSharding = new UniformSharding() {{
                                            numShards = 267262;
                                        }};
                                    }};
                                    testApk = new FileReference() {{
                                        gcsPath = "iste";
                                    }};
                                    testPackageId = "dolorum";
                                    testRunnerClass = "deleniti";
                                    testTargets = new String[]{{
                                        add("provident"),
                                        add("nobis"),
                                        add("libero"),
                                        add("delectus"),
                                    }};
                                }};
                                androidRoboTest = new AndroidRoboTest() {{
                                    appApk = new FileReference() {{
                                        gcsPath = "quaerat";
                                    }};
                                    appBundle = new AppBundle() {{
                                        bundleLocation = new FileReference() {{
                                            gcsPath = "quos";
                                        }};
                                    }};
                                    appInitialActivity = "aliquid";
                                    appPackageId = "dolorem";
                                    maxDepth = 209843;
                                    maxSteps = 222443;
                                    roboDirectives = new org.openapis.openapi.models.shared.RoboDirective[]{{
                                        add(new RoboDirective() {{
                                            actionType = RoboDirectiveActionTypeEnum.ACTION_TYPE_UNSPECIFIED;
                                            inputText = "hic";
                                            resourceName = "excepturi";
                                        }}),
                                    }};
                                    roboMode = AndroidRoboTestRoboModeEnum.ROBO_VERSION2;
                                    roboScript = new FileReference() {{
                                        gcsPath = "voluptate";
                                    }};
                                    startingIntents = new org.openapis.openapi.models.shared.RoboStartingIntent[]{{
                                        add(new RoboStartingIntent() {{
                                            launcherActivity = new java.util.HashMap<String, Object>() {{
                                                put("amet", "dolorum");
                                                put("numquam", "veritatis");
                                                put("ipsa", "ipsa");
                                                put("iure", "odio");
                                            }};
                                            startActivity = new StartActivityIntent() {{
                                                action = "quaerat";
                                                categories = new String[]{{
                                                    add("quidem"),
                                                    add("voluptatibus"),
                                                    add("voluptas"),
                                                    add("natus"),
                                                }};
                                                uri = "http://monstrous-ambassador.org";
                                            }};
                                            timeout = "ab";
                                        }}),
                                        add(new RoboStartingIntent() {{
                                            launcherActivity = new java.util.HashMap<String, Object>() {{
                                                put("dolorum", "iusto");
                                                put("voluptate", "dolorum");
                                                put("deleniti", "omnis");
                                            }};
                                            startActivity = new StartActivityIntent() {{
                                                action = "necessitatibus";
                                                categories = new String[]{{
                                                    add("asperiores"),
                                                    add("nihil"),
                                                    add("ipsum"),
                                                }};
                                                uri = "http://pushy-ticket.biz";
                                            }};
                                            timeout = "aspernatur";
                                        }}),
                                    }};
                                }};
                                androidTestLoop = new AndroidTestLoop() {{
                                    appApk = new FileReference() {{
                                        gcsPath = "perferendis";
                                    }};
                                    appBundle = new AppBundle() {{
                                        bundleLocation = new FileReference() {{
                                            gcsPath = "amet";
                                        }};
                                    }};
                                    appPackageId = "optio";
                                    scenarioLabels = new String[]{{
                                        add("ad"),
                                        add("saepe"),
                                        add("suscipit"),
                                        add("deserunt"),
                                    }};
                                    scenarios = new Integer[]{{
                                        add(324683),
                                        add(831049),
                                        add(519711),
                                    }};
                                }};
                                disablePerformanceMetrics = false;
                                disableVideoRecording = false;
                                iosTestLoop = new IosTestLoop() {{
                                    appBundleId = "similique";
                                    appIpa = new FileReference() {{
                                        gcsPath = "alias";
                                    }};
                                    scenarios = new Integer[]{{
                                        add(311860),
                                        add(273542),
                                        add(425451),
                                        add(798047),
                                    }};
                                }};
                                iosTestSetup = new IosTestSetup() {{
                                    additionalIpas = new org.openapis.openapi.models.shared.FileReference[]{{
                                        add(new FileReference() {{
                                            gcsPath = "qui";
                                        }}),
                                        add(new FileReference() {{
                                            gcsPath = "dolorum";
                                        }}),
                                        add(new FileReference() {{
                                            gcsPath = "a";
                                        }}),
                                        add(new FileReference() {{
                                            gcsPath = "esse";
                                        }}),
                                    }};
                                    networkProfile = "harum";
                                    pullDirectories = new org.openapis.openapi.models.shared.IosDeviceFile[]{{
                                        add(new IosDeviceFile() {{
                                            bundleId = "ipsum";
                                            content = new FileReference() {{
                                                gcsPath = "quisquam";
                                            }};
                                            devicePath = "tenetur";
                                        }}),
                                        add(new IosDeviceFile() {{
                                            bundleId = "amet";
                                            content = new FileReference() {{
                                                gcsPath = "tempore";
                                            }};
                                            devicePath = "accusamus";
                                        }}),
                                    }};
                                    pushFiles = new org.openapis.openapi.models.shared.IosDeviceFile[]{{
                                        add(new IosDeviceFile() {{
                                            bundleId = "enim";
                                            content = new FileReference() {{
                                                gcsPath = "dolorem";
                                            }};
                                            devicePath = "sapiente";
                                        }}),
                                        add(new IosDeviceFile() {{
                                            bundleId = "totam";
                                            content = new FileReference() {{
                                                gcsPath = "nihil";
                                            }};
                                            devicePath = "sit";
                                        }}),
                                    }};
                                }};
                                iosXcTest = new IosXcTest() {{
                                    appBundleId = "expedita";
                                    testSpecialEntitlements = false;
                                    testsZip = new FileReference() {{
                                        gcsPath = "neque";
                                    }};
                                    xcodeVersion = "sed";
                                    xctestrun = new FileReference() {{
                                        gcsPath = "vel";
                                    }};
                                }};
                                testSetup = new TestSetup() {{
                                    account = new Account() {{
                                        googleAuto = new java.util.HashMap<String, Object>() {{
                                            put("voluptas", "deserunt");
                                            put("quam", "ipsum");
                                            put("incidunt", "qui");
                                        }};
                                    }};
                                    additionalApks = new org.openapis.openapi.models.shared.Apk[]{{
                                        add(new Apk() {{
                                            location = new FileReference() {{
                                                gcsPath = "maxime";
                                            }};
                                            packageName = "pariatur";
                                        }}),
                                        add(new Apk() {{
                                            location = new FileReference() {{
                                                gcsPath = "soluta";
                                            }};
                                            packageName = "dicta";
                                        }}),
                                        add(new Apk() {{
                                            location = new FileReference() {{
                                                gcsPath = "laborum";
                                            }};
                                            packageName = "totam";
                                        }}),
                                    }};
                                    directoriesToPull = new String[]{{
                                        add("aspernatur"),
                                        add("dolores"),
                                    }};
                                    dontAutograntPermissions = false;
                                    environmentVariables = new org.openapis.openapi.models.shared.EnvironmentVariable[]{{
                                        add(new EnvironmentVariable() {{
                                            key = "facilis";
                                            value = "aliquid";
                                        }}),
                                        add(new EnvironmentVariable() {{
                                            key = "quam";
                                            value = "molestias";
                                        }}),
                                        add(new EnvironmentVariable() {{
                                            key = "temporibus";
                                            value = "qui";
                                        }}),
                                    }};
                                    filesToPush = new org.openapis.openapi.models.shared.DeviceFile[]{{
                                        add(new DeviceFile() {{
                                            obbFile = new ObbFile() {{
                                                obb = new FileReference() {{
                                                    gcsPath = "fugit";
                                                }};
                                                obbFileName = "magni";
                                            }};
                                            regularFile = new RegularFile() {{
                                                content = new FileReference() {{
                                                    gcsPath = "odio";
                                                }};
                                                devicePath = "sunt";
                                            }};
                                        }}),
                                    }};
                                    networkProfile = "ullam";
                                    systrace = new SystraceSetup() {{
                                        durationSeconds = 722081;
                                    }};
                                }};
                                testTimeout = "hic";
                            }};
                            timestamp = "voluptatem";
                            toolResultsStep = new ToolResultsStep() {{
                                executionId = "cumque";
                                historyId = "soluta";
                                projectId = "nobis";
                                stepId = "et";
                            }};
                        }}),
                    }};
                    testMatrixId = "saepe";
                    testSpecification = new TestSpecification() {{
                        androidInstrumentationTest = new AndroidInstrumentationTest() {{
                            appApk = new FileReference() {{
                                gcsPath = "ipsum";
                            }};;
                            appBundle = new AppBundle() {{
                                bundleLocation = new FileReference() {{
                                    gcsPath = "veritatis";
                                }};;
                            }};;
                            appPackageId = "nobis";
                            orchestratorOption = AndroidInstrumentationTestOrchestratorOptionEnum.USE_ORCHESTRATOR;
                            shardingOption = new ShardingOption() {{
                                manualSharding = new ManualSharding() {{
                                    testTargetsForShard = new org.openapis.openapi.models.shared.TestTargetsForShard[]{{
                                        add(new TestTargetsForShard() {{
                                            testTargets = new String[]{{
                                                add("aperiam"),
                                                add("delectus"),
                                                add("dolorem"),
                                            }};
                                        }}),
                                        add(new TestTargetsForShard() {{
                                            testTargets = new String[]{{
                                                add("labore"),
                                                add("adipisci"),
                                            }};
                                        }}),
                                        add(new TestTargetsForShard() {{
                                            testTargets = new String[]{{
                                                add("architecto"),
                                                add("quae"),
                                                add("aut"),
                                            }};
                                        }}),
                                    }};
                                }};;
                                smartSharding = new SmartSharding() {{
                                    targetedShardDuration = "quas";
                                }};;
                                uniformSharding = new UniformSharding() {{
                                    numShards = 929530;
                                }};;
                            }};;
                            testApk = new FileReference() {{
                                gcsPath = "consequatur";
                            }};;
                            testPackageId = "est";
                            testRunnerClass = "repellendus";
                            testTargets = new String[]{{
                                add("doloribus"),
                                add("ut"),
                                add("facilis"),
                                add("cupiditate"),
                            }};
                        }};;
                        androidRoboTest = new AndroidRoboTest() {{
                            appApk = new FileReference() {{
                                gcsPath = "qui";
                            }};;
                            appBundle = new AppBundle() {{
                                bundleLocation = new FileReference() {{
                                    gcsPath = "quae";
                                }};;
                            }};;
                            appInitialActivity = "laudantium";
                            appPackageId = "odio";
                            maxDepth = 580447;
                            maxSteps = 977496;
                            roboDirectives = new org.openapis.openapi.models.shared.RoboDirective[]{{
                                add(new RoboDirective() {{
                                    actionType = RoboDirectiveActionTypeEnum.IGNORE;
                                    inputText = "omnis";
                                    resourceName = "quis";
                                }}),
                                add(new RoboDirective() {{
                                    actionType = RoboDirectiveActionTypeEnum.ACTION_TYPE_UNSPECIFIED;
                                    inputText = "delectus";
                                    resourceName = "voluptate";
                                }}),
                                add(new RoboDirective() {{
                                    actionType = RoboDirectiveActionTypeEnum.ACTION_TYPE_UNSPECIFIED;
                                    inputText = "vero";
                                    resourceName = "tenetur";
                                }}),
                                add(new RoboDirective() {{
                                    actionType = RoboDirectiveActionTypeEnum.SINGLE_CLICK;
                                    inputText = "hic";
                                    resourceName = "distinctio";
                                }}),
                            }};
                            roboMode = AndroidRoboTestRoboModeEnum.ROBO_VERSION2;
                            roboScript = new FileReference() {{
                                gcsPath = "odio";
                            }};;
                            startingIntents = new org.openapis.openapi.models.shared.RoboStartingIntent[]{{
                                add(new RoboStartingIntent() {{
                                    launcherActivity = new java.util.HashMap<String, Object>() {{
                                        put("vero", "ducimus");
                                        put("dolore", "quibusdam");
                                        put("illum", "sequi");
                                    }};
                                    startActivity = new StartActivityIntent() {{
                                        action = "natus";
                                        categories = new String[]{{
                                            add("aut"),
                                            add("voluptatibus"),
                                            add("exercitationem"),
                                            add("nulla"),
                                        }};
                                        uri = "http://sorrowful-wild.org";
                                    }};
                                    timeout = "iusto";
                                }}),
                                add(new RoboStartingIntent() {{
                                    launcherActivity = new java.util.HashMap<String, Object>() {{
                                        put("ducimus", "alias");
                                        put("officia", "tempora");
                                        put("ipsam", "ea");
                                        put("aspernatur", "vel");
                                    }};
                                    startActivity = new StartActivityIntent() {{
                                        action = "possimus";
                                        categories = new String[]{{
                                            add("ratione"),
                                            add("ex"),
                                        }};
                                        uri = "https://clear-cut-criteria.org";
                                    }};
                                    timeout = "quasi";
                                }}),
                                add(new RoboStartingIntent() {{
                                    launcherActivity = new java.util.HashMap<String, Object>() {{
                                        put("nulla", "excepturi");
                                        put("voluptatibus", "nostrum");
                                    }};
                                    startActivity = new StartActivityIntent() {{
                                        action = "sapiente";
                                        categories = new String[]{{
                                            add("saepe"),
                                            add("ea"),
                                            add("impedit"),
                                            add("corporis"),
                                        }};
                                        uri = "http://husky-bid.biz";
                                    }};
                                    timeout = "ea";
                                }}),
                            }};
                        }};;
                        androidTestLoop = new AndroidTestLoop() {{
                            appApk = new FileReference() {{
                                gcsPath = "quo";
                            }};;
                            appBundle = new AppBundle() {{
                                bundleLocation = new FileReference() {{
                                    gcsPath = "consectetur";
                                }};;
                            }};;
                            appPackageId = "recusandae";
                            scenarioLabels = new String[]{{
                                add("minima"),
                            }};
                            scenarios = new Integer[]{{
                                add(952871),
                            }};
                        }};;
                        disablePerformanceMetrics = false;
                        disableVideoRecording = false;
                        iosTestLoop = new IosTestLoop() {{
                            appBundleId = "libero";
                            appIpa = new FileReference() {{
                                gcsPath = "aut";
                            }};;
                            scenarios = new Integer[]{{
                                add(533466),
                            }};
                        }};;
                        iosTestSetup = new IosTestSetup() {{
                            additionalIpas = new org.openapis.openapi.models.shared.FileReference[]{{
                                add(new FileReference() {{
                                    gcsPath = "aliquam";
                                }}),
                                add(new FileReference() {{
                                    gcsPath = "fugit";
                                }}),
                                add(new FileReference() {{
                                    gcsPath = "accusamus";
                                }}),
                                add(new FileReference() {{
                                    gcsPath = "inventore";
                                }}),
                            }};
                            networkProfile = "non";
                            pullDirectories = new org.openapis.openapi.models.shared.IosDeviceFile[]{{
                                add(new IosDeviceFile() {{
                                    bundleId = "dolorum";
                                    content = new FileReference() {{
                                        gcsPath = "laborum";
                                    }};
                                    devicePath = "placeat";
                                }}),
                            }};
                            pushFiles = new org.openapis.openapi.models.shared.IosDeviceFile[]{{
                                add(new IosDeviceFile() {{
                                    bundleId = "eum";
                                    content = new FileReference() {{
                                        gcsPath = "autem";
                                    }};
                                    devicePath = "nobis";
                                }}),
                            }};
                        }};;
                        iosXcTest = new IosXcTest() {{
                            appBundleId = "quas";
                            testSpecialEntitlements = false;
                            testsZip = new FileReference() {{
                                gcsPath = "assumenda";
                            }};;
                            xcodeVersion = "nulla";
                            xctestrun = new FileReference() {{
                                gcsPath = "voluptas";
                            }};;
                        }};;
                        testSetup = new TestSetup() {{
                            account = new Account() {{
                                googleAuto = new java.util.HashMap<String, Object>() {{
                                    put("quasi", "tempora");
                                    put("numquam", "explicabo");
                                    put("provident", "ipsa");
                                }};
                            }};;
                            additionalApks = new org.openapis.openapi.models.shared.Apk[]{{
                                add(new Apk() {{
                                    location = new FileReference() {{
                                        gcsPath = "magnam";
                                    }};
                                    packageName = "odio";
                                }}),
                                add(new Apk() {{
                                    location = new FileReference() {{
                                        gcsPath = "eius";
                                    }};
                                    packageName = "esse";
                                }}),
                            }};
                            directoriesToPull = new String[]{{
                                add("rem"),
                                add("fuga"),
                            }};
                            dontAutograntPermissions = false;
                            environmentVariables = new org.openapis.openapi.models.shared.EnvironmentVariable[]{{
                                add(new EnvironmentVariable() {{
                                    key = "quidem";
                                    value = "fugiat";
                                }}),
                                add(new EnvironmentVariable() {{
                                    key = "ut";
                                    value = "eum";
                                }}),
                            }};
                            filesToPush = new org.openapis.openapi.models.shared.DeviceFile[]{{
                                add(new DeviceFile() {{
                                    obbFile = new ObbFile() {{
                                        obb = new FileReference() {{
                                            gcsPath = "assumenda";
                                        }};
                                        obbFileName = "eos";
                                    }};
                                    regularFile = new RegularFile() {{
                                        content = new FileReference() {{
                                            gcsPath = "praesentium";
                                        }};
                                        devicePath = "quisquam";
                                    }};
                                }}),
                                add(new DeviceFile() {{
                                    obbFile = new ObbFile() {{
                                        obb = new FileReference() {{
                                            gcsPath = "veritatis";
                                        }};
                                        obbFileName = "ipsa";
                                    }};
                                    regularFile = new RegularFile() {{
                                        content = new FileReference() {{
                                            gcsPath = "id";
                                        }};
                                        devicePath = "quidem";
                                    }};
                                }}),
                            }};
                            networkProfile = "neque";
                            systrace = new SystraceSetup() {{
                                durationSeconds = 778696;
                            }};;
                        }};;
                        testTimeout = "illum";
                    }};;
                    timestamp = "quo";
                }};;
                accessToken = "fuga";
                alt = AltEnum.JSON;
                callback = "eos";
                fields = "voluptas";
                key = "ab";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "consequatur";
                requestId = "tempora";
                uploadType = "debitis";
                uploadProtocol = "ipsam";
            }};            

            TestingProjectsTestMatricesCreateResponse res = sdk.projects.testingProjectsTestMatricesCreate(req, new TestingProjectsTestMatricesCreateSecurity("aspernatur", "sequi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testMatrix != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testingProjectsTestMatricesGet

Checks the status of a test matrix and the executions once they are created. The test matrix will contain the list of test executions to run if and only if the resultStorage.toolResultsExecution fields have been populated. Note: Flaky test executions may still be added to the matrix at a later stage. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestingProjectsTestMatricesGetRequest;
import org.openapis.openapi.models.operations.TestingProjectsTestMatricesGetResponse;
import org.openapis.openapi.models.operations.TestingProjectsTestMatricesGetSecurity;
import org.openapis.openapi.models.operations.TestingProjectsTestMatricesGetSecurityOption1;
import org.openapis.openapi.models.operations.TestingProjectsTestMatricesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestingProjectsTestMatricesGetRequest req = new TestingProjectsTestMatricesGetRequest("quo", "esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "quod";
                fields = "dignissimos";
                key = "inventore";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "accusamus";
                uploadProtocol = "aliquam";
            }};            

            TestingProjectsTestMatricesGetResponse res = sdk.projects.testingProjectsTestMatricesGet(req, new TestingProjectsTestMatricesGetSecurity() {{
                option1 = new TestingProjectsTestMatricesGetSecurityOption1("odio", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testMatrix != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
