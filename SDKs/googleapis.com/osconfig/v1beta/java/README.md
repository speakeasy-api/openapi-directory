# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            OsconfigProjectsGuestPoliciesCreateRequest req = new OsconfigProjectsGuestPoliciesCreateRequest() {{
                security = new OsconfigProjectsGuestPoliciesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new OsconfigProjectsGuestPoliciesCreatePathParams() {{
                    parent = "quisquam";
                }};
                queryParams = new OsconfigProjectsGuestPoliciesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "cumque";
                    alt = "proto";
                    callback = "quas";
                    fields = "iste";
                    guestPolicyId = "distinctio";
                    key = "tenetur";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "aut";
                    uploadType = "aliquid";
                    uploadProtocol = "eum";
                }};
                request = new GuestPolicyInput() {{
                    assignment = new Assignment() {{
                        groupLabels = new openapisdk.models.shared.AssignmentGroupLabel[]() {{
                            add(new AssignmentGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("sunt", "at");
                                    put("autem", "voluptas");
                                }};
                            }}),
                            add(new AssignmentGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("est", "impedit");
                                    put("autem", "est");
                                    put("ex", "illo");
                                }};
                            }}),
                        }};
                        instanceNamePrefixes = new String[]() {{
                            add("distinctio"),
                        }};
                        instances = new String[]() {{
                            add("expedita"),
                        }};
                        osTypes = new openapisdk.models.shared.AssignmentOsType[]() {{
                            add(new AssignmentOsType() {{
                                osArchitecture = "molestias";
                                osShortName = "voluptatibus";
                                osVersion = "consequatur";
                            }}),
                        }};
                        zones = new String[]() {{
                            add("qui"),
                            add("animi"),
                        }};
                    }};
                    description = "est";
                    etag = "praesentium";
                    name = "dolor";
                    packageRepositories = new openapisdk.models.shared.PackageRepository[]() {{
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = "DEB_SRC";
                                components = new String[]() {{
                                    add("et"),
                                    add("rerum"),
                                }};
                                distribution = "ut";
                                gpgKey = "aspernatur";
                                uri = "impedit";
                            }};
                            goo = new GooRepository() {{
                                name = "eius";
                                url = "adipisci";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "ducimus";
                                displayName = "assumenda";
                                gpgKeys = new String[]() {{
                                    add("quidem"),
                                    add("ut"),
                                }};
                                id = "cumque";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "cupiditate";
                                displayName = "voluptatem";
                                gpgKeys = new String[]() {{
                                    add("harum"),
                                    add("id"),
                                }};
                                id = "iste";
                            }};
                        }}),
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = "DEB_SRC";
                                components = new String[]() {{
                                    add("distinctio"),
                                }};
                                distribution = "architecto";
                                gpgKey = "quibusdam";
                                uri = "ea";
                            }};
                            goo = new GooRepository() {{
                                name = "laboriosam";
                                url = "et";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "placeat";
                                displayName = "qui";
                                gpgKeys = new String[]() {{
                                    add("aliquid"),
                                }};
                                id = "inventore";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "quas";
                                displayName = "non";
                                gpgKeys = new String[]() {{
                                    add("eius"),
                                    add("nemo"),
                                }};
                                id = "aperiam";
                            }};
                        }}),
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = "DEB_SRC";
                                components = new String[]() {{
                                    add("perferendis"),
                                    add("ut"),
                                }};
                                distribution = "asperiores";
                                gpgKey = "ipsum";
                                uri = "est";
                            }};
                            goo = new GooRepository() {{
                                name = "omnis";
                                url = "voluptas";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "dicta";
                                displayName = "placeat";
                                gpgKeys = new String[]() {{
                                    add("et"),
                                    add("sequi"),
                                }};
                                id = "aut";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "asperiores";
                                displayName = "nostrum";
                                gpgKeys = new String[]() {{
                                    add("ea"),
                                    add("voluptas"),
                                    add("qui"),
                                }};
                                id = "tempora";
                            }};
                        }}),
                    }};
                    packages = new openapisdk.models.shared.Package[]() {{
                        add(new Package() {{
                            desiredState = "UPDATED";
                            manager = "ANY";
                            name = "a";
                        }}),
                        add(new Package() {{
                            desiredState = "INSTALLED";
                            manager = "GOO";
                            name = "voluptate";
                        }}),
                    }};
                    recipes = new openapisdk.models.shared.SoftwareRecipe[]() {{
                        add(new SoftwareRecipe() {{
                            artifacts = new openapisdk.models.shared.SoftwareRecipeArtifact[]() {{
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = false;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "incidunt";
                                        generation = "dolorem";
                                        object = "quo";
                                    }};
                                    id = "culpa";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "ratione";
                                        uri = "quia";
                                    }};
                                }}),
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = false;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "perferendis";
                                        generation = "possimus";
                                        object = "nisi";
                                    }};
                                    id = "aliquam";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "sunt";
                                        uri = "sed";
                                    }};
                                }}),
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = false;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "sint";
                                        generation = "reiciendis";
                                        object = "nostrum";
                                    }};
                                    id = "ut";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "atque";
                                        uri = "similique";
                                    }};
                                }}),
                            }};
                            desiredState = "REMOVED";
                            installSteps = new openapisdk.models.shared.SoftwareRecipeStep[]() {{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "recusandae";
                                        destination = "sint";
                                        type = "ZIP";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "laboriosam";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "est";
                                        destination = "suscipit";
                                        overwrite = false;
                                        permissions = "voluptatibus";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(7148379799823940905),
                                            add(2569230517447051649),
                                            add(5230940443917382834),
                                        }};
                                        args = new String[]() {{
                                            add("inventore"),
                                            add("est"),
                                        }};
                                        artifactId = "officiis";
                                        localPath = "veniam";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(5621261771286112477),
                                            add(2035562779041530387),
                                        }};
                                        artifactId = "iste";
                                        flags = new String[]() {{
                                            add("quae"),
                                            add("facilis"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "quam";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(8326254692715277942),
                                        }};
                                        interpreter = "INTERPRETER_UNSPECIFIED";
                                        script = "consequatur";
                                    }};
                                }}),
                            }};
                            name = "qui";
                            updateSteps = new openapisdk.models.shared.SoftwareRecipeStep[]() {{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "qui";
                                        destination = "omnis";
                                        type = "ARCHIVE_TYPE_UNSPECIFIED";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "reprehenderit";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "corrupti";
                                        destination = "et";
                                        overwrite = false;
                                        permissions = "ea";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(2885438245215278870),
                                            add(9057791042257180897),
                                            add(2186900703274808482),
                                        }};
                                        args = new String[]() {{
                                            add("dolores"),
                                            add("ullam"),
                                            add("quia"),
                                        }};
                                        artifactId = "porro";
                                        localPath = "dolor";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(7613723415048469502),
                                            add(3104721773417928473),
                                            add(3011728769755209552),
                                        }};
                                        artifactId = "explicabo";
                                        flags = new String[]() {{
                                            add("quos"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "id";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(5060614610775242897),
                                        }};
                                        interpreter = "INTERPRETER_UNSPECIFIED";
                                        script = "quae";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "id";
                                        destination = "ut";
                                        type = "ZIP";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "quasi";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "dolorum";
                                        destination = "sunt";
                                        overwrite = true;
                                        permissions = "quo";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(7299587918136084120),
                                        }};
                                        args = new String[]() {{
                                            add("et"),
                                            add("nisi"),
                                        }};
                                        artifactId = "nam";
                                        localPath = "vel";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(1981823741088597705),
                                        }};
                                        artifactId = "consequuntur";
                                        flags = new String[]() {{
                                            add("quia"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "molestiae";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(823623886441171831),
                                        }};
                                        interpreter = "INTERPRETER_UNSPECIFIED";
                                        script = "tempore";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "non";
                                        destination = "aut";
                                        type = "ZIP";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "modi";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "et";
                                        destination = "provident";
                                        overwrite = true;
                                        permissions = "consequuntur";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(6501665311930385336),
                                        }};
                                        args = new String[]() {{
                                            add("fuga"),
                                            add("quas"),
                                            add("at"),
                                        }};
                                        artifactId = "error";
                                        localPath = "odit";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(8164712621415301786),
                                        }};
                                        artifactId = "ad";
                                        flags = new String[]() {{
                                            add("quia"),
                                            add("aut"),
                                            add("at"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "modi";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(350192028209564159),
                                        }};
                                        interpreter = "INTERPRETER_UNSPECIFIED";
                                        script = "recusandae";
                                    }};
                                }}),
                            }};
                            version = "ut";
                        }}),
                    }};
                }};
            }};

            OsconfigProjectsGuestPoliciesCreateResponse res = sdk.projects.osconfigProjectsGuestPoliciesCreate(req);

            if (res.guestPolicy.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `osconfigProjectsGuestPoliciesCreate` - Create an OS Config guest policy.
* `osconfigProjectsGuestPoliciesList` - Get a page of OS Config guest policies.
* `osconfigProjectsPatchDeploymentsCreate` - Create an OS Config patch deployment.
* `osconfigProjectsPatchDeploymentsDelete` - Delete an OS Config patch deployment.
* `osconfigProjectsPatchDeploymentsList` - Get a page of OS Config patch deployments.
* `osconfigProjectsPatchDeploymentsPatch` - Update an OS Config patch deployment.
* `osconfigProjectsPatchDeploymentsPause` - Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
* `osconfigProjectsPatchDeploymentsResume` - Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
* `osconfigProjectsPatchJobsCancel` - Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
* `osconfigProjectsPatchJobsExecute` - Patch VM instances by creating and running a patch job.
* `osconfigProjectsPatchJobsGet` - Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
* `osconfigProjectsPatchJobsInstanceDetailsList` - Get a list of instance details for a given patch job.
* `osconfigProjectsPatchJobsList` - Get a list of patch jobs.
* `osconfigProjectsZonesInstancesLookupEffectiveGuestPolicy` - Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
