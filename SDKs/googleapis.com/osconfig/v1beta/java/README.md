# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.OsconfigProjectsGuestPoliciesCreateSecurity;
import org.openapis.openapi.models.operations.OsconfigProjectsGuestPoliciesCreatePathParams;
import org.openapis.openapi.models.operations.OsconfigProjectsGuestPoliciesCreateQueryParams;
import org.openapis.openapi.models.operations.OsconfigProjectsGuestPoliciesCreateRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsGuestPoliciesCreateResponse;
import org.openapis.openapi.models.shared.GuestPolicyInput;
import org.openapis.openapi.models.shared.SoftwareRecipeDesiredStateEnum;
import org.openapis.openapi.models.shared.SoftwareRecipe;
import org.openapis.openapi.models.shared.SoftwareRecipeStep;
import org.openapis.openapi.models.shared.SoftwareRecipeStepRunScriptInterpreterEnum;
import org.openapis.openapi.models.shared.SoftwareRecipeStepRunScript;
import org.openapis.openapi.models.shared.SoftwareRecipeStepInstallRpm;
import org.openapis.openapi.models.shared.SoftwareRecipeStepInstallMsi;
import org.openapis.openapi.models.shared.SoftwareRecipeStepExecFile;
import org.openapis.openapi.models.shared.SoftwareRecipeStepCopyFile;
import org.openapis.openapi.models.shared.SoftwareRecipeStepInstallDpkg;
import org.openapis.openapi.models.shared.SoftwareRecipeStepExtractArchiveTypeEnum;
import org.openapis.openapi.models.shared.SoftwareRecipeStepExtractArchive;
import org.openapis.openapi.models.shared.SoftwareRecipeArtifact;
import org.openapis.openapi.models.shared.SoftwareRecipeArtifactRemote;
import org.openapis.openapi.models.shared.SoftwareRecipeArtifactGcs;
import org.openapis.openapi.models.shared.PackageDesiredStateEnum;
import org.openapis.openapi.models.shared.PackageManagerEnum;
import org.openapis.openapi.models.shared.Package;
import org.openapis.openapi.models.shared.PackageRepository;
import org.openapis.openapi.models.shared.ZypperRepository;
import org.openapis.openapi.models.shared.YumRepository;
import org.openapis.openapi.models.shared.GooRepository;
import org.openapis.openapi.models.shared.AptRepositoryArchiveTypeEnum;
import org.openapis.openapi.models.shared.AptRepository;
import org.openapis.openapi.models.shared.Assignment;
import org.openapis.openapi.models.shared.AssignmentOsType;
import org.openapis.openapi.models.shared.AssignmentGroupLabel;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new OsconfigProjectsGuestPoliciesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    guestPolicyId = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new GuestPolicyInput() {{
                    assignment = new Assignment() {{
                        groupLabels = new org.openapis.openapi.models.shared.AssignmentGroupLabel[]{{
                            add(new AssignmentGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("debitis", "ipsa");
                                    put("delectus", "tempora");
                                }};
                            }}),
                            add(new AssignmentGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("molestiae", "minus");
                                    put("placeat", "voluptatum");
                                }};
                            }}),
                        }};
                        instanceNamePrefixes = new String[]{{
                            add("excepturi"),
                            add("nisi"),
                        }};
                        instances = new String[]{{
                            add("temporibus"),
                            add("ab"),
                            add("quis"),
                            add("veritatis"),
                        }};
                        osTypes = new org.openapis.openapi.models.shared.AssignmentOsType[]{{
                            add(new AssignmentOsType() {{
                                osArchitecture = "perferendis";
                                osShortName = "ipsam";
                                osVersion = "repellendus";
                            }}),
                            add(new AssignmentOsType() {{
                                osArchitecture = "sapiente";
                                osShortName = "quo";
                                osVersion = "odit";
                            }}),
                            add(new AssignmentOsType() {{
                                osArchitecture = "at";
                                osShortName = "at";
                                osVersion = "maiores";
                            }}),
                        }};
                        zones = new String[]{{
                            add("quod"),
                            add("quod"),
                        }};
                    }};
                    description = "esse";
                    etag = "totam";
                    name = "porro";
                    packageRepositories = new org.openapis.openapi.models.shared.PackageRepository[]{{
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = "ARCHIVE_TYPE_UNSPECIFIED";
                                components = new String[]{{
                                    add("officia"),
                                    add("occaecati"),
                                    add("fugit"),
                                }};
                                distribution = "deleniti";
                                gpgKey = "hic";
                                uri = "https://mean-brick.info";
                            }};
                            goo = new GooRepository() {{
                                name = "molestiae";
                                url = "modi";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "qui";
                                displayName = "impedit";
                                gpgKeys = new String[]{{
                                    add("esse"),
                                    add("ipsum"),
                                    add("excepturi"),
                                }};
                                id = "aspernatur";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "perferendis";
                                displayName = "ad";
                                gpgKeys = new String[]{{
                                    add("sed"),
                                    add("iste"),
                                    add("dolor"),
                                }};
                                id = "natus";
                            }};
                        }}),
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = "DEB";
                                components = new String[]{{
                                    add("saepe"),
                                    add("fuga"),
                                    add("in"),
                                    add("corporis"),
                                }};
                                distribution = "iste";
                                gpgKey = "iure";
                                uri = "https://rich-bouquet.com";
                            }};
                            goo = new GooRepository() {{
                                name = "reiciendis";
                                url = "est";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "mollitia";
                                displayName = "laborum";
                                gpgKeys = new String[]{{
                                    add("dolorem"),
                                }};
                                id = "corporis";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "explicabo";
                                displayName = "nobis";
                                gpgKeys = new String[]{{
                                    add("omnis"),
                                    add("nemo"),
                                }};
                                id = "minima";
                            }};
                        }}),
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = "DEB";
                                components = new String[]{{
                                    add("iure"),
                                }};
                                distribution = "culpa";
                                gpgKey = "doloribus";
                                uri = "https://buttery-petitioner.biz";
                            }};
                            goo = new GooRepository() {{
                                name = "culpa";
                                url = "consequuntur";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "repellat";
                                displayName = "mollitia";
                                gpgKeys = new String[]{{
                                    add("numquam"),
                                    add("commodi"),
                                    add("quam"),
                                }};
                                id = "molestiae";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "velit";
                                displayName = "error";
                                gpgKeys = new String[]{{
                                    add("quis"),
                                }};
                                id = "vitae";
                            }};
                        }}),
                    }};
                    packages = new org.openapis.openapi.models.shared.Package[]{{
                        add(new Package() {{
                            desiredState = "UPDATED";
                            manager = "ANY";
                            name = "odit";
                        }}),
                        add(new Package() {{
                            desiredState = "REMOVED";
                            manager = "ANY";
                            name = "tenetur";
                        }}),
                        add(new Package() {{
                            desiredState = "INSTALLED";
                            manager = "YUM";
                            name = "possimus";
                        }}),
                    }};
                    recipes = new org.openapis.openapi.models.shared.SoftwareRecipe[]{{
                        add(new SoftwareRecipe() {{
                            artifacts = new org.openapis.openapi.models.shared.SoftwareRecipeArtifact[]{{
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = false;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "error";
                                        generation = "temporibus";
                                        object = "laborum";
                                    }};
                                    id = "quasi";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "reiciendis";
                                        uri = "https://twin-intent.name";
                                    }};
                                }}),
                            }};
                            desiredState = "REMOVED";
                            installSteps = new org.openapis.openapi.models.shared.SoftwareRecipeStep[]{{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "omnis";
                                        destination = "voluptate";
                                        type = "TAR_XZ";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "perferendis";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "doloremque";
                                        destination = "reprehenderit";
                                        overwrite = false;
                                        permissions = "ut";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(120196),
                                            add(359444),
                                            add(296140),
                                            add(480894),
                                        }};
                                        args = new String[]{{
                                            add("harum"),
                                        }};
                                        artifactId = "enim";
                                        localPath = "accusamus";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(918236),
                                            add(64147),
                                        }};
                                        artifactId = "ipsum";
                                        flags = new String[]{{
                                            add("molestias"),
                                            add("excepturi"),
                                            add("pariatur"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "modi";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(523248),
                                            add(916723),
                                            add(93940),
                                        }};
                                        interpreter = "POWERSHELL";
                                        script = "sint";
                                    }};
                                }}),
                            }};
                            name = "veritatis";
                            updateSteps = new org.openapis.openapi.models.shared.SoftwareRecipeStep[]{{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "incidunt";
                                        destination = "enim";
                                        type = "ARCHIVE_TYPE_UNSPECIFIED";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "est";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "quibusdam";
                                        destination = "explicabo";
                                        overwrite = false;
                                        permissions = "deserunt";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(841386),
                                            add(289406),
                                            add(264730),
                                        }};
                                        args = new String[]{{
                                            add("aliquid"),
                                        }};
                                        artifactId = "cupiditate";
                                        localPath = "quos";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(164940),
                                        }};
                                        artifactId = "assumenda";
                                        flags = new String[]{{
                                            add("alias"),
                                            add("fugit"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "dolorum";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(270008),
                                            add(703737),
                                            add(735194),
                                        }};
                                        interpreter = "INTERPRETER_UNSPECIFIED";
                                        script = "delectus";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "eum";
                                        destination = "non";
                                        type = "TAR_XZ";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "sint";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "aliquid";
                                        destination = "provident";
                                        overwrite = false;
                                        permissions = "necessitatibus";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(638921),
                                            add(223081),
                                            add(891555),
                                        }};
                                        args = new String[]{{
                                            add("dolorum"),
                                            add("in"),
                                            add("in"),
                                            add("illum"),
                                        }};
                                        artifactId = "maiores";
                                        localPath = "rerum";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(297437),
                                        }};
                                        artifactId = "cumque";
                                        flags = new String[]{{
                                            add("ea"),
                                            add("aliquid"),
                                            add("laborum"),
                                            add("accusamus"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "non";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(313218),
                                            add(881736),
                                            add(965417),
                                        }};
                                        interpreter = "POWERSHELL";
                                        script = "provident";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "nam";
                                        destination = "id";
                                        type = "TAR_BZIP";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "deleniti";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "sapiente";
                                        destination = "amet";
                                        overwrite = false;
                                        permissions = "deserunt";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(423855),
                                            add(618809),
                                        }};
                                        args = new String[]{{
                                            add("molestiae"),
                                            add("perferendis"),
                                            add("nihil"),
                                        }};
                                        artifactId = "magnam";
                                        localPath = "distinctio";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(287991),
                                            add(290077),
                                            add(383462),
                                        }};
                                        artifactId = "natus";
                                        flags = new String[]{{
                                            add("eum"),
                                            add("vero"),
                                            add("aspernatur"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "architecto";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(92373),
                                            add(569965),
                                        }};
                                        interpreter = "SHELL";
                                        script = "provident";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "quos";
                                        destination = "sint";
                                        type = "ARCHIVE_TYPE_UNSPECIFIED";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "mollitia";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "reiciendis";
                                        destination = "mollitia";
                                        overwrite = false;
                                        permissions = "ad";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(221262),
                                            add(896547),
                                        }};
                                        args = new String[]{{
                                            add("nemo"),
                                        }};
                                        artifactId = "quasi";
                                        localPath = "iure";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(891924),
                                            add(260341),
                                            add(806194),
                                            add(537023),
                                        }};
                                        artifactId = "facilis";
                                        flags = new String[]{{
                                            add("architecto"),
                                            add("architecto"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "repudiandae";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(714242),
                                            add(469249),
                                        }};
                                        interpreter = "POWERSHELL";
                                        script = "quibusdam";
                                    }};
                                }}),
                            }};
                            version = "sed";
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

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
