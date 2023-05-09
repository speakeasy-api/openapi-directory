# projects

### Available Operations

* [osconfigProjectsGuestPoliciesCreate](#osconfigprojectsguestpoliciescreate) - Create an OS Config guest policy.
* [osconfigProjectsGuestPoliciesList](#osconfigprojectsguestpolicieslist) - Get a page of OS Config guest policies.
* [osconfigProjectsPatchDeploymentsCreate](#osconfigprojectspatchdeploymentscreate) - Create an OS Config patch deployment.
* [osconfigProjectsPatchDeploymentsDelete](#osconfigprojectspatchdeploymentsdelete) - Delete an OS Config patch deployment.
* [osconfigProjectsPatchDeploymentsList](#osconfigprojectspatchdeploymentslist) - Get a page of OS Config patch deployments.
* [osconfigProjectsPatchDeploymentsPatch](#osconfigprojectspatchdeploymentspatch) - Update an OS Config patch deployment.
* [osconfigProjectsPatchDeploymentsPause](#osconfigprojectspatchdeploymentspause) - Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
* [osconfigProjectsPatchDeploymentsResume](#osconfigprojectspatchdeploymentsresume) - Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
* [osconfigProjectsPatchJobsCancel](#osconfigprojectspatchjobscancel) - Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
* [osconfigProjectsPatchJobsExecute](#osconfigprojectspatchjobsexecute) - Patch VM instances by creating and running a patch job.
* [osconfigProjectsPatchJobsGet](#osconfigprojectspatchjobsget) - Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
* [osconfigProjectsPatchJobsInstanceDetailsList](#osconfigprojectspatchjobsinstancedetailslist) - Get a list of instance details for a given patch job.
* [osconfigProjectsPatchJobsList](#osconfigprojectspatchjobslist) - Get a list of patch jobs.
* [osconfigProjectsZonesInstancesLookupEffectiveGuestPolicy](#osconfigprojectszonesinstanceslookupeffectiveguestpolicy) - Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.

## osconfigProjectsGuestPoliciesCreate

Create an OS Config guest policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsGuestPoliciesCreateRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsGuestPoliciesCreateResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsGuestPoliciesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AptRepository;
import org.openapis.openapi.models.shared.AptRepositoryArchiveTypeEnum;
import org.openapis.openapi.models.shared.Assignment;
import org.openapis.openapi.models.shared.AssignmentGroupLabel;
import org.openapis.openapi.models.shared.AssignmentOsType;
import org.openapis.openapi.models.shared.GooRepository;
import org.openapis.openapi.models.shared.GuestPolicyInput;
import org.openapis.openapi.models.shared.Package;
import org.openapis.openapi.models.shared.PackageDesiredStateEnum;
import org.openapis.openapi.models.shared.PackageManagerEnum;
import org.openapis.openapi.models.shared.PackageRepository;
import org.openapis.openapi.models.shared.SoftwareRecipe;
import org.openapis.openapi.models.shared.SoftwareRecipeArtifact;
import org.openapis.openapi.models.shared.SoftwareRecipeArtifactGcs;
import org.openapis.openapi.models.shared.SoftwareRecipeArtifactRemote;
import org.openapis.openapi.models.shared.SoftwareRecipeDesiredStateEnum;
import org.openapis.openapi.models.shared.SoftwareRecipeStep;
import org.openapis.openapi.models.shared.SoftwareRecipeStepCopyFile;
import org.openapis.openapi.models.shared.SoftwareRecipeStepExecFile;
import org.openapis.openapi.models.shared.SoftwareRecipeStepExtractArchive;
import org.openapis.openapi.models.shared.SoftwareRecipeStepExtractArchiveTypeEnum;
import org.openapis.openapi.models.shared.SoftwareRecipeStepInstallDpkg;
import org.openapis.openapi.models.shared.SoftwareRecipeStepInstallMsi;
import org.openapis.openapi.models.shared.SoftwareRecipeStepInstallRpm;
import org.openapis.openapi.models.shared.SoftwareRecipeStepRunScript;
import org.openapis.openapi.models.shared.SoftwareRecipeStepRunScriptInterpreterEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YumRepository;
import org.openapis.openapi.models.shared.ZypperRepository;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsGuestPoliciesCreateRequest req = new OsconfigProjectsGuestPoliciesCreateRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                guestPolicyInput = new GuestPolicyInput() {{
                    assignment = new Assignment() {{
                        groupLabels = new org.openapis.openapi.models.shared.AssignmentGroupLabel[]{{
                            add(new AssignmentGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("facilis", "vero");
                                    put("ducimus", "dolore");
                                    put("quibusdam", "illum");
                                }};
                            }}),
                            add(new AssignmentGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("natus", "impedit");
                                }};
                            }}),
                        }};
                        instanceNamePrefixes = new String[]{{
                            add("voluptatibus"),
                        }};
                        instances = new String[]{{
                            add("nulla"),
                            add("fugit"),
                        }};
                        osTypes = new org.openapis.openapi.models.shared.AssignmentOsType[]{{
                            add(new AssignmentOsType() {{
                                osArchitecture = "maiores";
                                osShortName = "doloribus";
                                osVersion = "iusto";
                            }}),
                            add(new AssignmentOsType() {{
                                osArchitecture = "eligendi";
                                osShortName = "ducimus";
                                osVersion = "alias";
                            }}),
                            add(new AssignmentOsType() {{
                                osArchitecture = "officia";
                                osShortName = "tempora";
                                osVersion = "ipsam";
                            }}),
                            add(new AssignmentOsType() {{
                                osArchitecture = "ea";
                                osShortName = "aspernatur";
                                osVersion = "vel";
                            }}),
                        }};
                        zones = new String[]{{
                            add("magnam"),
                            add("ratione"),
                            add("ex"),
                            add("laudantium"),
                        }};
                    }};;
                    description = "dicta";
                    etag = "dolor";
                    name = "Ryan Jaskolski";
                    packageRepositories = new org.openapis.openapi.models.shared.PackageRepository[]{{
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = AptRepositoryArchiveTypeEnum.DEB;
                                components = new String[]{{
                                    add("quisquam"),
                                    add("saepe"),
                                    add("ea"),
                                    add("impedit"),
                                }};
                                distribution = "corporis";
                                gpgKey = "veniam";
                                uri = "http://bogus-elite.info";
                            }};
                            goo = new GooRepository() {{
                                name = "Glenn Walter";
                                url = "eaque";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "a";
                                displayName = "libero";
                                gpgKeys = new String[]{{
                                    add("aut"),
                                }};
                                id = "8c42e141-aac3-466c-8dd6-b14429074747";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "esse";
                                displayName = "rem";
                                gpgKeys = new String[]{{
                                    add("reprehenderit"),
                                    add("quidem"),
                                    add("fugiat"),
                                }};
                                id = "466d28c1-0ab3-4cdc-a425-1904e523c7e0";
                            }};
                        }}),
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = AptRepositoryArchiveTypeEnum.DEB_SRC;
                                components = new String[]{{
                                    add("dignissimos"),
                                    add("inventore"),
                                    add("nihil"),
                                    add("totam"),
                                }};
                                distribution = "accusamus";
                                gpgKey = "aliquam";
                                uri = "http://numb-harmonica.org";
                            }};
                            goo = new GooRepository() {{
                                name = "Miss Rosie Krajcik";
                                url = "quas";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "praesentium";
                                displayName = "consequuntur";
                                gpgKeys = new String[]{{
                                    add("fugit"),
                                    add("fuga"),
                                    add("mollitia"),
                                }};
                                id = "482562f2-22e9-4817-ae17-cbe61e6b7b95";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "distinctio";
                                displayName = "eligendi";
                                gpgKeys = new String[]{{
                                    add("culpa"),
                                }};
                                id = "b3c20c4f-3789-4fd8-b1f9-9dd2efd121aa";
                            }};
                        }}),
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = AptRepositoryArchiveTypeEnum.DEB;
                                components = new String[]{{
                                    add("quae"),
                                    add("earum"),
                                    add("vel"),
                                    add("in"),
                                }};
                                distribution = "eius";
                                gpgKey = "libero";
                                uri = "https://shameless-antiquity.biz";
                            }};
                            goo = new GooRepository() {{
                                name = "Samuel Hermiston";
                                url = "nisi";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "aut";
                                displayName = "voluptatum";
                                gpgKeys = new String[]{{
                                    add("quibusdam"),
                                }};
                                id = "68ea19f1-d170-4513-b9d0-8086a1840394";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "impedit";
                                displayName = "explicabo";
                                gpgKeys = new String[]{{
                                    add("aut"),
                                    add("dignissimos"),
                                }};
                                id = "1f93f5f0-642d-4ac7-af51-5cc413aa63aa";
                            }};
                        }}),
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = AptRepositoryArchiveTypeEnum.DEB_SRC;
                                components = new String[]{{
                                    add("fugiat"),
                                    add("vel"),
                                    add("ducimus"),
                                }};
                                distribution = "quos";
                                gpgKey = "vel";
                                uri = "http://super-puggle.net";
                            }};
                            goo = new GooRepository() {{
                                name = "Pearl Hessel";
                                url = "nemo";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "recusandae";
                                displayName = "aliquid";
                                gpgKeys = new String[]{{
                                    add("cum"),
                                }};
                                id = "375ed4f6-fbee-441f-b331-7fe35b60eb1e";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "similique";
                                displayName = "tempora";
                                gpgKeys = new String[]{{
                                    add("voluptas"),
                                }};
                                id = "555ba3c2-8744-4ed5-bb88-f3a8d8f5c0b2";
                            }};
                        }}),
                    }};
                    packages = new org.openapis.openapi.models.shared.Package[]{{
                        add(new Package() {{
                            desiredState = PackageDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                            manager = PackageManagerEnum.GOO;
                            name = "Miss Jared Quitzon";
                        }}),
                        add(new Package() {{
                            desiredState = PackageDesiredStateEnum.UPDATED;
                            manager = PackageManagerEnum.MANAGER_UNSPECIFIED;
                            name = "Tonya Predovic";
                        }}),
                        add(new Package() {{
                            desiredState = PackageDesiredStateEnum.UPDATED;
                            manager = PackageManagerEnum.MANAGER_UNSPECIFIED;
                            name = "Dr. Dixie Tremblay V";
                        }}),
                        add(new Package() {{
                            desiredState = PackageDesiredStateEnum.REMOVED;
                            manager = PackageManagerEnum.ANY;
                            name = "Sherri Gerlach";
                        }}),
                    }};
                    recipes = new org.openapis.openapi.models.shared.SoftwareRecipe[]{{
                        add(new SoftwareRecipe() {{
                            artifacts = new org.openapis.openapi.models.shared.SoftwareRecipeArtifact[]{{
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = false;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "quos";
                                        generation = "voluptatibus";
                                        object = "tempora";
                                    }};
                                    id = "47f603e8-b445-4e80-8a55-efd20e457e18";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "exercitationem";
                                        uri = "https://shady-glen.net";
                                    }};
                                }}),
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = false;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "voluptatum";
                                        generation = "error";
                                        object = "hic";
                                    }};
                                    id = "be3a5aa8-e482-44d0-ab40-75088e518620";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "vel";
                                        uri = "http://untrue-overload.com";
                                    }};
                                }}),
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = false;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "incidunt";
                                        generation = "reiciendis";
                                        object = "dolorem";
                                    }};
                                    id = "b1194b8a-bf60-43a7-9f9d-fe0ab7da8a50";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "quisquam";
                                        uri = "https://bumpy-marines.info";
                                    }};
                                }}),
                            }};
                            desiredState = SoftwareRecipeDesiredStateEnum.REMOVED;
                            installSteps = new org.openapis.openapi.models.shared.SoftwareRecipeStep[]{{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "suscipit";
                                        destination = "quidem";
                                        type = SoftwareRecipeStepExtractArchiveTypeEnum.TAR_XZ;
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "et";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "esse";
                                        destination = "amet";
                                        overwrite = false;
                                        permissions = "assumenda";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(539118),
                                            add(623295),
                                        }};
                                        args = new String[]{{
                                            add("officiis"),
                                            add("accusamus"),
                                            add("natus"),
                                            add("minima"),
                                        }};
                                        artifactId = "aspernatur";
                                        localPath = "ex";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(544647),
                                            add(871786),
                                            add(621693),
                                            add(502721),
                                        }};
                                        artifactId = "suscipit";
                                        flags = new String[]{{
                                            add("atque"),
                                            add("atque"),
                                            add("sunt"),
                                            add("recusandae"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "dolorum";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(287119),
                                            add(968287),
                                            add(42976),
                                            add(919783),
                                        }};
                                        interpreter = SoftwareRecipeStepRunScriptInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                        script = "accusantium";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "beatae";
                                        destination = "dolores";
                                        type = SoftwareRecipeStepExtractArchiveTypeEnum.TAR_GZIP;
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "laboriosam";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "velit";
                                        destination = "a";
                                        overwrite = false;
                                        permissions = "molestias";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(906355),
                                            add(160467),
                                        }};
                                        args = new String[]{{
                                            add("officiis"),
                                            add("perspiciatis"),
                                            add("in"),
                                        }};
                                        artifactId = "adipisci";
                                        localPath = "eveniet";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(160230),
                                            add(145870),
                                            add(661118),
                                        }};
                                        artifactId = "quis";
                                        flags = new String[]{{
                                            add("error"),
                                            add("illo"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "corporis";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(910994),
                                            add(247399),
                                            add(878493),
                                        }};
                                        interpreter = SoftwareRecipeStepRunScriptInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                        script = "iure";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "ipsa";
                                        destination = "totam";
                                        type = SoftwareRecipeStepExtractArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "molestiae";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "eveniet";
                                        destination = "qui";
                                        overwrite = false;
                                        permissions = "cum";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(898063),
                                            add(187552),
                                        }};
                                        args = new String[]{{
                                            add("distinctio"),
                                            add("voluptatum"),
                                            add("rem"),
                                        }};
                                        artifactId = "aliquam";
                                        localPath = "ad";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(3099),
                                            add(362189),
                                            add(597303),
                                            add(470649),
                                        }};
                                        artifactId = "mollitia";
                                        flags = new String[]{{
                                            add("alias"),
                                            add("maiores"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "reiciendis";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(663866),
                                        }};
                                        interpreter = SoftwareRecipeStepRunScriptInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                        script = "dolore";
                                    }};
                                }}),
                            }};
                            name = "Danny Berge";
                            updateSteps = new org.openapis.openapi.models.shared.SoftwareRecipeStep[]{{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "molestiae";
                                        destination = "ex";
                                        type = SoftwareRecipeStepExtractArchiveTypeEnum.TAR;
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "culpa";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "adipisci";
                                        destination = "debitis";
                                        overwrite = false;
                                        permissions = "laudantium";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(367927),
                                            add(928219),
                                        }};
                                        args = new String[]{{
                                            add("provident"),
                                            add("quis"),
                                        }};
                                        artifactId = "eum";
                                        localPath = "reiciendis";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(133439),
                                            add(354506),
                                            add(96804),
                                        }};
                                        artifactId = "animi";
                                        flags = new String[]{{
                                            add("mollitia"),
                                            add("provident"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "possimus";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(402767),
                                            add(397257),
                                            add(37565),
                                        }};
                                        interpreter = SoftwareRecipeStepRunScriptInterpreterEnum.POWERSHELL;
                                        script = "doloribus";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "ullam";
                                        destination = "in";
                                        type = SoftwareRecipeStepExtractArchiveTypeEnum.TAR_XZ;
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "earum";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "officia";
                                        destination = "laborum";
                                        overwrite = false;
                                        permissions = "placeat";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(976226),
                                            add(564064),
                                        }};
                                        args = new String[]{{
                                            add("sapiente"),
                                            add("cumque"),
                                            add("vitae"),
                                            add("rerum"),
                                        }};
                                        artifactId = "tempora";
                                        localPath = "quis";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(147685),
                                        }};
                                        artifactId = "cumque";
                                        flags = new String[]{{
                                            add("perferendis"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "velit";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(432281),
                                        }};
                                        interpreter = SoftwareRecipeStepRunScriptInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                        script = "rem";
                                    }};
                                }}),
                            }};
                            version = "at";
                        }}),
                        add(new SoftwareRecipe() {{
                            artifacts = new org.openapis.openapi.models.shared.SoftwareRecipeArtifact[]{{
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = false;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "eos";
                                        generation = "sapiente";
                                        object = "eum";
                                    }};
                                    id = "15199ebf-d0e9-4fe6-8632-ca3aed011799";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "suscipit";
                                        uri = "http://bulky-clerk.org";
                                    }};
                                }}),
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = false;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "nulla";
                                        generation = "necessitatibus";
                                        object = "ipsa";
                                    }};
                                    id = "4771778f-f61d-4017-8763-60a15db6a660";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "eum";
                                        uri = "http://peaceful-pinafore.com";
                                    }};
                                }}),
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = false;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "error";
                                        generation = "possimus";
                                        object = "voluptates";
                                    }};
                                    id = "aab5851d-6c64-45b0-8b61-891baa0fe1ad";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "debitis";
                                        uri = "http://able-makeup.org";
                                    }};
                                }}),
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = false;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "ex";
                                        generation = "sapiente";
                                        object = "rem";
                                    }};
                                    id = "c5f350d8-cdb5-4a34-9814-3010421813d5";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "consequuntur";
                                        uri = "http://near-toenail.net";
                                    }};
                                }}),
                            }};
                            desiredState = SoftwareRecipeDesiredStateEnum.REMOVED;
                            installSteps = new org.openapis.openapi.models.shared.SoftwareRecipeStep[]{{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "necessitatibus";
                                        destination = "sed";
                                        type = SoftwareRecipeStepExtractArchiveTypeEnum.TAR_GZIP;
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "nesciunt";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "expedita";
                                        destination = "eum";
                                        overwrite = false;
                                        permissions = "vel";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(301692),
                                            add(349440),
                                            add(70410),
                                        }};
                                        args = new String[]{{
                                            add("autem"),
                                            add("nobis"),
                                            add("laboriosam"),
                                            add("recusandae"),
                                        }};
                                        artifactId = "consequuntur";
                                        localPath = "voluptatem";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(895692),
                                            add(95619),
                                        }};
                                        artifactId = "nisi";
                                        flags = new String[]{{
                                            add("vero"),
                                            add("est"),
                                            add("harum"),
                                            add("sequi"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "doloribus";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(759283),
                                            add(579681),
                                            add(364544),
                                            add(455898),
                                        }};
                                        interpreter = SoftwareRecipeStepRunScriptInterpreterEnum.SHELL;
                                        script = "officia";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "voluptas";
                                        destination = "numquam";
                                        type = SoftwareRecipeStepExtractArchiveTypeEnum.TAR_GZIP;
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "quos";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "eius";
                                        destination = "aspernatur";
                                        overwrite = false;
                                        permissions = "ducimus";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(681740),
                                        }};
                                        args = new String[]{{
                                            add("incidunt"),
                                            add("quasi"),
                                            add("rem"),
                                        }};
                                        artifactId = "fugiat";
                                        localPath = "dicta";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(159845),
                                            add(233078),
                                        }};
                                        artifactId = "aperiam";
                                        flags = new String[]{{
                                            add("reiciendis"),
                                            add("soluta"),
                                            add("alias"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "omnis";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(579011),
                                        }};
                                        interpreter = SoftwareRecipeStepRunScriptInterpreterEnum.SHELL;
                                        script = "magni";
                                    }};
                                }}),
                            }};
                            name = "Fannie Tillman";
                            updateSteps = new org.openapis.openapi.models.shared.SoftwareRecipeStep[]{{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "delectus";
                                        destination = "minima";
                                        type = SoftwareRecipeStepExtractArchiveTypeEnum.TAR_BZIP;
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "maxime";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "magnam";
                                        destination = "temporibus";
                                        overwrite = false;
                                        permissions = "quos";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(930819),
                                            add(415608),
                                        }};
                                        args = new String[]{{
                                            add("earum"),
                                            add("modi"),
                                            add("nam"),
                                        }};
                                        artifactId = "vero";
                                        localPath = "voluptatem";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(425946),
                                            add(1383),
                                        }};
                                        artifactId = "quasi";
                                        flags = new String[]{{
                                            add("maiores"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "enim";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(858778),
                                            add(643678),
                                            add(458503),
                                        }};
                                        interpreter = SoftwareRecipeStepRunScriptInterpreterEnum.SHELL;
                                        script = "reprehenderit";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "est";
                                        destination = "quis";
                                        type = SoftwareRecipeStepExtractArchiveTypeEnum.TAR_LZMA;
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "accusamus";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "impedit";
                                        destination = "hic";
                                        overwrite = false;
                                        permissions = "necessitatibus";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(404306),
                                            add(376741),
                                            add(895346),
                                            add(966148),
                                        }};
                                        args = new String[]{{
                                            add("minus"),
                                        }};
                                        artifactId = "fuga";
                                        localPath = "laborum";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(244889),
                                        }};
                                        artifactId = "atque";
                                        flags = new String[]{{
                                            add("impedit"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "magni";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(922757),
                                            add(721430),
                                            add(294076),
                                        }};
                                        interpreter = SoftwareRecipeStepRunScriptInterpreterEnum.SHELL;
                                        script = "voluptate";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "sequi";
                                        destination = "dignissimos";
                                        type = SoftwareRecipeStepExtractArchiveTypeEnum.TAR;
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "quo";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "deleniti";
                                        destination = "quibusdam";
                                        overwrite = false;
                                        permissions = "iure";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(974990),
                                        }};
                                        args = new String[]{{
                                            add("magnam"),
                                            add("quibusdam"),
                                        }};
                                        artifactId = "inventore";
                                        localPath = "facere";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(102413),
                                            add(975425),
                                            add(156383),
                                        }};
                                        artifactId = "porro";
                                        flags = new String[]{{
                                            add("velit"),
                                            add("illo"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "accusantium";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(406922),
                                            add(107617),
                                        }};
                                        interpreter = SoftwareRecipeStepRunScriptInterpreterEnum.POWERSHELL;
                                        script = "excepturi";
                                    }};
                                }}),
                            }};
                            version = "eum";
                        }}),
                    }};
                }};;
                accessToken = "velit";
                alt = AltEnum.JSON;
                callback = "perspiciatis";
                fields = "earum";
                guestPolicyId = "dicta";
                key = "impedit";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "itaque";
                uploadProtocol = "alias";
            }};            

            OsconfigProjectsGuestPoliciesCreateResponse res = sdk.projects.osconfigProjectsGuestPoliciesCreate(req, new OsconfigProjectsGuestPoliciesCreateSecurity("nisi", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.guestPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsGuestPoliciesList

Get a page of OS Config guest policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsGuestPoliciesListRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsGuestPoliciesListResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsGuestPoliciesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsGuestPoliciesListRequest req = new OsconfigProjectsGuestPoliciesListRequest("velit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "iusto";
                fields = "sit";
                key = "doloremque";
                oauthToken = "consequatur";
                pageSize = 639705L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "quidem";
                uploadProtocol = "voluptas";
            }};            

            OsconfigProjectsGuestPoliciesListResponse res = sdk.projects.osconfigProjectsGuestPoliciesList(req, new OsconfigProjectsGuestPoliciesListSecurity("facilis", "placeat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listGuestPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchDeploymentsCreate

Create an OS Config patch deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsCreateRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsCreateResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AptSettings;
import org.openapis.openapi.models.shared.AptSettingsTypeEnum;
import org.openapis.openapi.models.shared.ExecStep;
import org.openapis.openapi.models.shared.ExecStepConfig;
import org.openapis.openapi.models.shared.ExecStepConfigInterpreterEnum;
import org.openapis.openapi.models.shared.FixedOrPercent;
import org.openapis.openapi.models.shared.GcsObject;
import org.openapis.openapi.models.shared.MonthlySchedule;
import org.openapis.openapi.models.shared.OneTimeSchedule;
import org.openapis.openapi.models.shared.PatchConfig;
import org.openapis.openapi.models.shared.PatchConfigRebootConfigEnum;
import org.openapis.openapi.models.shared.PatchDeploymentInput;
import org.openapis.openapi.models.shared.PatchInstanceFilter;
import org.openapis.openapi.models.shared.PatchInstanceFilterGroupLabel;
import org.openapis.openapi.models.shared.PatchRollout;
import org.openapis.openapi.models.shared.PatchRolloutModeEnum;
import org.openapis.openapi.models.shared.RecurringScheduleFrequencyEnum;
import org.openapis.openapi.models.shared.RecurringScheduleInput;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.TimeZone;
import org.openapis.openapi.models.shared.WeekDayOfMonth;
import org.openapis.openapi.models.shared.WeekDayOfMonthDayOfWeekEnum;
import org.openapis.openapi.models.shared.WeeklySchedule;
import org.openapis.openapi.models.shared.WeeklyScheduleDayOfWeekEnum;
import org.openapis.openapi.models.shared.WindowsUpdateSettings;
import org.openapis.openapi.models.shared.WindowsUpdateSettingsClassificationsEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YumSettings;
import org.openapis.openapi.models.shared.ZypperSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchDeploymentsCreateRequest req = new OsconfigProjectsPatchDeploymentsCreateRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.TWO;
                patchDeploymentInput = new PatchDeploymentInput() {{
                    description = "deleniti";
                    duration = "a";
                    instanceFilter = new PatchInstanceFilter() {{
                        all = false;
                        groupLabels = new org.openapis.openapi.models.shared.PatchInstanceFilterGroupLabel[]{{
                            add(new PatchInstanceFilterGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("unde", "necessitatibus");
                                    put("animi", "impedit");
                                }};
                            }}),
                            add(new PatchInstanceFilterGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("corporis", "est");
                                    put("error", "esse");
                                }};
                            }}),
                        }};
                        instanceNamePrefixes = new String[]{{
                            add("veritatis"),
                            add("vero"),
                        }};
                        instances = new String[]{{
                            add("vitae"),
                        }};
                        zones = new String[]{{
                            add("dolorem"),
                        }};
                    }};;
                    name = "Tina Moore";
                    oneTimeSchedule = new OneTimeSchedule() {{
                        executeTime = "soluta";
                    }};;
                    patchConfig = new PatchConfig() {{
                        apt = new AptSettings() {{
                            excludes = new String[]{{
                                add("rem"),
                                add("dolorum"),
                                add("odio"),
                            }};
                            exclusivePackages = new String[]{{
                                add("alias"),
                            }};
                            type = AptSettingsTypeEnum.TYPE_UNSPECIFIED;
                        }};;
                        goo = new java.util.HashMap<String, Object>() {{
                            put("quae", "quae");
                            put("modi", "neque");
                        }};
                        migInstancesAllowed = false;
                        postStep = new ExecStep() {{
                            linuxExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(932394),
                                    add(88248),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "ipsum";
                                    generationNumber = "unde";
                                    object = "nulla";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.SHELL;
                                localPath = "maxime";
                            }};;
                            windowsExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(159146),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "nostrum";
                                    generationNumber = "omnis";
                                    object = "libero";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                localPath = "id";
                            }};;
                        }};;
                        preStep = new ExecStep() {{
                            linuxExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(854460),
                                    add(637462),
                                    add(554603),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "placeat";
                                    generationNumber = "sit";
                                    object = "iusto";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                localPath = "voluptates";
                            }};;
                            windowsExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(49348),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "totam";
                                    generationNumber = "dolore";
                                    object = "eligendi";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.SHELL;
                                localPath = "voluptatem";
                            }};;
                        }};;
                        rebootConfig = PatchConfigRebootConfigEnum.DEFAULT_;
                        windowsUpdate = new WindowsUpdateSettings() {{
                            classifications = new org.openapis.openapi.models.shared.WindowsUpdateSettingsClassificationsEnum[]{{
                                add(WindowsUpdateSettingsClassificationsEnum.CRITICAL),
                                add(WindowsUpdateSettingsClassificationsEnum.UPDATE_ROLLUP),
                            }};
                            excludes = new String[]{{
                                add("est"),
                            }};
                            exclusivePatches = new String[]{{
                                add("corrupti"),
                                add("molestiae"),
                                add("provident"),
                                add("accusamus"),
                            }};
                        }};;
                        yum = new YumSettings() {{
                            excludes = new String[]{{
                                add("tempore"),
                                add("sint"),
                                add("ea"),
                                add("autem"),
                            }};
                            exclusivePackages = new String[]{{
                                add("rerum"),
                                add("laudantium"),
                            }};
                            minimal = false;
                            security = false;
                        }};;
                        zypper = new ZypperSettings() {{
                            categories = new String[]{{
                                add("officiis"),
                                add("voluptatibus"),
                            }};
                            excludes = new String[]{{
                                add("at"),
                                add("alias"),
                                add("quia"),
                            }};
                            exclusivePatches = new String[]{{
                                add("fuga"),
                                add("repudiandae"),
                                add("accusantium"),
                            }};
                            severities = new String[]{{
                                add("officiis"),
                                add("eos"),
                                add("quibusdam"),
                            }};
                            withOptional = false;
                            withUpdate = false;
                        }};;
                    }};;
                    recurringSchedule = new RecurringScheduleInput() {{
                        endTime = "odio";
                        frequency = RecurringScheduleFrequencyEnum.MONTHLY;
                        monthly = new MonthlySchedule() {{
                            monthDay = 140316;
                            weekDayOfMonth = new WeekDayOfMonth() {{
                                dayOfWeek = WeekDayOfMonthDayOfWeekEnum.MONDAY;
                                dayOffset = 358995;
                                weekOrdinal = 621473;
                            }};;
                        }};;
                        startTime = "earum";
                        timeOfDay = new TimeOfDay() {{
                            hours = 239337;
                            minutes = 923306;
                            nanos = 630871;
                            seconds = 282837;
                        }};;
                        timeZone = new TimeZone() {{
                            id = "b5197f92-443d-4a7c-a52b-895c537c6454";
                            version = "voluptates";
                        }};;
                        weekly = new WeeklySchedule() {{
                            dayOfWeek = WeeklyScheduleDayOfWeekEnum.SUNDAY;
                        }};;
                    }};;
                    rollout = new PatchRollout() {{
                        disruptionBudget = new FixedOrPercent() {{
                            fixed = 731744;
                            percent = 46013;
                        }};;
                        mode = PatchRolloutModeEnum.CONCURRENT_ZONES;
                    }};;
                }};;
                accessToken = "ratione";
                alt = AltEnum.JSON;
                callback = "totam";
                fields = "occaecati";
                key = "voluptas";
                oauthToken = "quo";
                patchDeploymentId = "velit";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "fuga";
                uploadProtocol = "nostrum";
            }};            

            OsconfigProjectsPatchDeploymentsCreateResponse res = sdk.projects.osconfigProjectsPatchDeploymentsCreate(req, new OsconfigProjectsPatchDeploymentsCreateSecurity("est", "impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patchDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchDeploymentsDelete

Delete an OS Config patch deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsDeleteRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsDeleteResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchDeploymentsDeleteRequest req = new OsconfigProjectsPatchDeploymentsDeleteRequest("delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vero";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "pariatur";
                key = "nemo";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "odio";
                uploadProtocol = "minima";
            }};            

            OsconfigProjectsPatchDeploymentsDeleteResponse res = sdk.projects.osconfigProjectsPatchDeploymentsDelete(req, new OsconfigProjectsPatchDeploymentsDeleteSecurity("in", "ducimus") {{
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

## osconfigProjectsPatchDeploymentsList

Get a page of OS Config patch deployments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsListRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsListResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchDeploymentsListRequest req = new OsconfigProjectsPatchDeploymentsListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "ducimus";
                fields = "voluptate";
                key = "pariatur";
                oauthToken = "itaque";
                pageSize = 627735L;
                pageToken = "optio";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "quaerat";
                uploadProtocol = "commodi";
            }};            

            OsconfigProjectsPatchDeploymentsListResponse res = sdk.projects.osconfigProjectsPatchDeploymentsList(req, new OsconfigProjectsPatchDeploymentsListSecurity("officiis", "placeat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPatchDeploymentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchDeploymentsPatch

Update an OS Config patch deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsPatchRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsPatchResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AptSettings;
import org.openapis.openapi.models.shared.AptSettingsTypeEnum;
import org.openapis.openapi.models.shared.ExecStep;
import org.openapis.openapi.models.shared.ExecStepConfig;
import org.openapis.openapi.models.shared.ExecStepConfigInterpreterEnum;
import org.openapis.openapi.models.shared.FixedOrPercent;
import org.openapis.openapi.models.shared.GcsObject;
import org.openapis.openapi.models.shared.MonthlySchedule;
import org.openapis.openapi.models.shared.OneTimeSchedule;
import org.openapis.openapi.models.shared.PatchConfig;
import org.openapis.openapi.models.shared.PatchConfigRebootConfigEnum;
import org.openapis.openapi.models.shared.PatchDeploymentInput;
import org.openapis.openapi.models.shared.PatchInstanceFilter;
import org.openapis.openapi.models.shared.PatchInstanceFilterGroupLabel;
import org.openapis.openapi.models.shared.PatchRollout;
import org.openapis.openapi.models.shared.PatchRolloutModeEnum;
import org.openapis.openapi.models.shared.RecurringScheduleFrequencyEnum;
import org.openapis.openapi.models.shared.RecurringScheduleInput;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.TimeZone;
import org.openapis.openapi.models.shared.WeekDayOfMonth;
import org.openapis.openapi.models.shared.WeekDayOfMonthDayOfWeekEnum;
import org.openapis.openapi.models.shared.WeeklySchedule;
import org.openapis.openapi.models.shared.WeeklyScheduleDayOfWeekEnum;
import org.openapis.openapi.models.shared.WindowsUpdateSettings;
import org.openapis.openapi.models.shared.WindowsUpdateSettingsClassificationsEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YumSettings;
import org.openapis.openapi.models.shared.ZypperSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchDeploymentsPatchRequest req = new OsconfigProjectsPatchDeploymentsPatchRequest("quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                patchDeploymentInput = new PatchDeploymentInput() {{
                    description = "quam";
                    duration = "dolorem";
                    instanceFilter = new PatchInstanceFilter() {{
                        all = false;
                        groupLabels = new org.openapis.openapi.models.shared.PatchInstanceFilterGroupLabel[]{{
                            add(new PatchInstanceFilterGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("sint", "vero");
                                }};
                            }}),
                            add(new PatchInstanceFilterGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("repudiandae", "cum");
                                }};
                            }}),
                        }};
                        instanceNamePrefixes = new String[]{{
                            add("earum"),
                        }};
                        instances = new String[]{{
                            add("animi"),
                            add("dolores"),
                        }};
                        zones = new String[]{{
                            add("dicta"),
                            add("consequuntur"),
                            add("necessitatibus"),
                        }};
                    }};;
                    name = "Larry Kuphal Sr.";
                    oneTimeSchedule = new OneTimeSchedule() {{
                        executeTime = "laboriosam";
                    }};;
                    patchConfig = new PatchConfig() {{
                        apt = new AptSettings() {{
                            excludes = new String[]{{
                                add("libero"),
                                add("excepturi"),
                                add("occaecati"),
                                add("nemo"),
                            }};
                            exclusivePackages = new String[]{{
                                add("nostrum"),
                                add("doloribus"),
                            }};
                            type = AptSettingsTypeEnum.UPGRADE;
                        }};;
                        goo = new java.util.HashMap<String, Object>() {{
                            put("enim", "hic");
                            put("animi", "quas");
                            put("totam", "molestias");
                        }};
                        migInstancesAllowed = false;
                        postStep = new ExecStep() {{
                            linuxExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(51170),
                                    add(901163),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "architecto";
                                    generationNumber = "quos";
                                    object = "iste";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.POWERSHELL;
                                localPath = "tempore";
                            }};;
                            windowsExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(244032),
                                    add(38557),
                                    add(963976),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "impedit";
                                    generationNumber = "cum";
                                    object = "ipsum";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                localPath = "saepe";
                            }};;
                        }};;
                        preStep = new ExecStep() {{
                            linuxExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(42924),
                                    add(339756),
                                    add(333072),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "libero";
                                    generationNumber = "architecto";
                                    object = "cupiditate";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.NONE;
                                localPath = "eligendi";
                            }};;
                            windowsExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(251464),
                                    add(298187),
                                    add(932296),
                                    add(150935),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "asperiores";
                                    generationNumber = "veniam";
                                    object = "consequuntur";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.POWERSHELL;
                                localPath = "laudantium";
                            }};;
                        }};;
                        rebootConfig = PatchConfigRebootConfigEnum.REBOOT_CONFIG_UNSPECIFIED;
                        windowsUpdate = new WindowsUpdateSettings() {{
                            classifications = new org.openapis.openapi.models.shared.WindowsUpdateSettingsClassificationsEnum[]{{
                                add(WindowsUpdateSettingsClassificationsEnum.SECURITY),
                                add(WindowsUpdateSettingsClassificationsEnum.DEFINITION),
                                add(WindowsUpdateSettingsClassificationsEnum.CLASSIFICATION_UNSPECIFIED),
                                add(WindowsUpdateSettingsClassificationsEnum.SECURITY),
                            }};
                            excludes = new String[]{{
                                add("tempore"),
                                add("nisi"),
                                add("voluptatibus"),
                            }};
                            exclusivePatches = new String[]{{
                                add("blanditiis"),
                                add("distinctio"),
                            }};
                        }};;
                        yum = new YumSettings() {{
                            excludes = new String[]{{
                                add("quis"),
                                add("nisi"),
                            }};
                            exclusivePackages = new String[]{{
                                add("minus"),
                                add("facere"),
                                add("facilis"),
                            }};
                            minimal = false;
                            security = false;
                        }};;
                        zypper = new ZypperSettings() {{
                            categories = new String[]{{
                                add("ad"),
                            }};
                            excludes = new String[]{{
                                add("voluptatibus"),
                                add("consequuntur"),
                                add("debitis"),
                                add("labore"),
                            }};
                            exclusivePatches = new String[]{{
                                add("eos"),
                                add("reprehenderit"),
                                add("nostrum"),
                            }};
                            severities = new String[]{{
                                add("iusto"),
                            }};
                            withOptional = false;
                            withUpdate = false;
                        }};;
                    }};;
                    recurringSchedule = new RecurringScheduleInput() {{
                        endTime = "est";
                        frequency = RecurringScheduleFrequencyEnum.MONTHLY;
                        monthly = new MonthlySchedule() {{
                            monthDay = 753890;
                            weekDayOfMonth = new WeekDayOfMonth() {{
                                dayOfWeek = WeekDayOfMonthDayOfWeekEnum.SATURDAY;
                                dayOffset = 604078;
                                weekOrdinal = 889448;
                            }};;
                        }};;
                        startTime = "ducimus";
                        timeOfDay = new TimeOfDay() {{
                            hours = 220104;
                            minutes = 118041;
                            nanos = 622894;
                            seconds = 784731;
                        }};;
                        timeZone = new TimeZone() {{
                            id = "177d525f-77b1-414e-ab52-ff785fc37814";
                            version = "assumenda";
                        }};;
                        weekly = new WeeklySchedule() {{
                            dayOfWeek = WeeklyScheduleDayOfWeekEnum.TUESDAY;
                        }};;
                    }};;
                    rollout = new PatchRollout() {{
                        disruptionBudget = new FixedOrPercent() {{
                            fixed = 790463;
                            percent = 591065;
                        }};;
                        mode = PatchRolloutModeEnum.ZONE_BY_ZONE;
                    }};;
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "maxime";
                fields = "aspernatur";
                key = "nam";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "quas";
                updateMask = "provident";
                uploadType = "repudiandae";
                uploadProtocol = "rerum";
            }};            

            OsconfigProjectsPatchDeploymentsPatchResponse res = sdk.projects.osconfigProjectsPatchDeploymentsPatch(req, new OsconfigProjectsPatchDeploymentsPatchSecurity("dignissimos", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patchDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchDeploymentsPause

Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsPauseRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsPauseResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsPauseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchDeploymentsPauseRequest req = new OsconfigProjectsPatchDeploymentsPauseRequest("vero") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iure", "dolorem");
                    put("commodi", "impedit");
                    put("commodi", "aut");
                    put("voluptatem", "ad");
                }};
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "illum";
                fields = "praesentium";
                key = "quidem";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "quasi";
                uploadProtocol = "dicta";
            }};            

            OsconfigProjectsPatchDeploymentsPauseResponse res = sdk.projects.osconfigProjectsPatchDeploymentsPause(req, new OsconfigProjectsPatchDeploymentsPauseSecurity("laudantium", "doloremque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patchDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchDeploymentsResume

Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsResumeRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsResumeResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchDeploymentsResumeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchDeploymentsResumeRequest req = new OsconfigProjectsPatchDeploymentsResumeRequest("earum") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("provident", "dolorum");
                }};
                accessToken = "necessitatibus";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "consequatur";
                key = "nemo";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "facilis";
                uploadProtocol = "corrupti";
            }};            

            OsconfigProjectsPatchDeploymentsResumeResponse res = sdk.projects.osconfigProjectsPatchDeploymentsResume(req, new OsconfigProjectsPatchDeploymentsResumeSecurity("aperiam", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patchDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchJobsCancel

Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsCancelRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsCancelResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchJobsCancelRequest req = new OsconfigProjectsPatchJobsCancelRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("dicta", "voluptatem");
                    put("velit", "dolor");
                    put("sunt", "a");
                }};
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "atque";
                fields = "beatae";
                key = "at";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "esse";
                uploadProtocol = "voluptatem";
            }};            

            OsconfigProjectsPatchJobsCancelResponse res = sdk.projects.osconfigProjectsPatchJobsCancel(req, new OsconfigProjectsPatchJobsCancelSecurity("perferendis", "rerum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patchJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchJobsExecute

Patch VM instances by creating and running a patch job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsExecuteRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsExecuteResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsExecuteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AptSettings;
import org.openapis.openapi.models.shared.AptSettingsTypeEnum;
import org.openapis.openapi.models.shared.ExecStep;
import org.openapis.openapi.models.shared.ExecStepConfig;
import org.openapis.openapi.models.shared.ExecStepConfigInterpreterEnum;
import org.openapis.openapi.models.shared.ExecutePatchJobRequest;
import org.openapis.openapi.models.shared.FixedOrPercent;
import org.openapis.openapi.models.shared.GcsObject;
import org.openapis.openapi.models.shared.PatchConfig;
import org.openapis.openapi.models.shared.PatchConfigRebootConfigEnum;
import org.openapis.openapi.models.shared.PatchInstanceFilter;
import org.openapis.openapi.models.shared.PatchInstanceFilterGroupLabel;
import org.openapis.openapi.models.shared.PatchRollout;
import org.openapis.openapi.models.shared.PatchRolloutModeEnum;
import org.openapis.openapi.models.shared.WindowsUpdateSettings;
import org.openapis.openapi.models.shared.WindowsUpdateSettingsClassificationsEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YumSettings;
import org.openapis.openapi.models.shared.ZypperSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchJobsExecuteRequest req = new OsconfigProjectsPatchJobsExecuteRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                executePatchJobRequest = new ExecutePatchJobRequest() {{
                    description = "dignissimos";
                    displayName = "repellat";
                    dryRun = false;
                    duration = "velit";
                    instanceFilter = new PatchInstanceFilter() {{
                        all = false;
                        groupLabels = new org.openapis.openapi.models.shared.PatchInstanceFilterGroupLabel[]{{
                            add(new PatchInstanceFilterGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("consectetur", "eligendi");
                                    put("dignissimos", "consectetur");
                                    put("soluta", "natus");
                                }};
                            }}),
                            add(new PatchInstanceFilterGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("officia", "amet");
                                    put("tenetur", "aspernatur");
                                    put("quo", "itaque");
                                    put("illum", "laborum");
                                }};
                            }}),
                            add(new PatchInstanceFilterGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("vero", "qui");
                                    put("consectetur", "repellat");
                                }};
                            }}),
                            add(new PatchInstanceFilterGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("explicabo", "exercitationem");
                                }};
                            }}),
                        }};
                        instanceNamePrefixes = new String[]{{
                            add("non"),
                            add("ab"),
                        }};
                        instances = new String[]{{
                            add("hic"),
                        }};
                        zones = new String[]{{
                            add("delectus"),
                            add("non"),
                            add("distinctio"),
                        }};
                    }};;
                    patchConfig = new PatchConfig() {{
                        apt = new AptSettings() {{
                            excludes = new String[]{{
                                add("exercitationem"),
                                add("labore"),
                            }};
                            exclusivePackages = new String[]{{
                                add("repudiandae"),
                                add("modi"),
                            }};
                            type = AptSettingsTypeEnum.DIST;
                        }};;
                        goo = new java.util.HashMap<String, Object>() {{
                            put("accusamus", "rem");
                        }};
                        migInstancesAllowed = false;
                        postStep = new ExecStep() {{
                            linuxExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(141817),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "deleniti";
                                    generationNumber = "enim";
                                    object = "voluptate";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.SHELL;
                                localPath = "minima";
                            }};;
                            windowsExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(300189),
                                    add(24272),
                                    add(266788),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "eum";
                                    generationNumber = "nesciunt";
                                    object = "mollitia";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.NONE;
                                localPath = "fugiat";
                            }};;
                        }};;
                        preStep = new ExecStep() {{
                            linuxExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(475325),
                                    add(330600),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "reiciendis";
                                    generationNumber = "ab";
                                    object = "modi";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                localPath = "aut";
                            }};;
                            windowsExecStepConfig = new ExecStepConfig() {{
                                allowedSuccessCodes = new Integer[]{{
                                    add(483753),
                                    add(413758),
                                    add(256114),
                                    add(677045),
                                }};
                                gcsObject = new GcsObject() {{
                                    bucket = "possimus";
                                    generationNumber = "voluptate";
                                    object = "consectetur";
                                }};;
                                interpreter = ExecStepConfigInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                localPath = "quaerat";
                            }};;
                        }};;
                        rebootConfig = PatchConfigRebootConfigEnum.NEVER;
                        windowsUpdate = new WindowsUpdateSettings() {{
                            classifications = new org.openapis.openapi.models.shared.WindowsUpdateSettingsClassificationsEnum[]{{
                                add(WindowsUpdateSettingsClassificationsEnum.CRITICAL),
                                add(WindowsUpdateSettingsClassificationsEnum.TOOL),
                                add(WindowsUpdateSettingsClassificationsEnum.DRIVER),
                                add(WindowsUpdateSettingsClassificationsEnum.FEATURE_PACK),
                            }};
                            excludes = new String[]{{
                                add("facilis"),
                            }};
                            exclusivePatches = new String[]{{
                                add("autem"),
                            }};
                        }};;
                        yum = new YumSettings() {{
                            excludes = new String[]{{
                                add("alias"),
                                add("rem"),
                                add("aut"),
                            }};
                            exclusivePackages = new String[]{{
                                add("laudantium"),
                                add("repellendus"),
                                add("veritatis"),
                            }};
                            minimal = false;
                            security = false;
                        }};;
                        zypper = new ZypperSettings() {{
                            categories = new String[]{{
                                add("eaque"),
                            }};
                            excludes = new String[]{{
                                add("delectus"),
                                add("mollitia"),
                                add("nulla"),
                                add("officia"),
                            }};
                            exclusivePatches = new String[]{{
                                add("voluptatem"),
                            }};
                            severities = new String[]{{
                                add("eveniet"),
                            }};
                            withOptional = false;
                            withUpdate = false;
                        }};;
                    }};;
                    rollout = new PatchRollout() {{
                        disruptionBudget = new FixedOrPercent() {{
                            fixed = 941668;
                            percent = 27982;
                        }};;
                        mode = PatchRolloutModeEnum.MODE_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "qui";
                alt = AltEnum.JSON;
                callback = "necessitatibus";
                fields = "harum";
                key = "explicabo";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "modi";
                uploadProtocol = "optio";
            }};            

            OsconfigProjectsPatchJobsExecuteResponse res = sdk.projects.osconfigProjectsPatchJobsExecute(req, new OsconfigProjectsPatchJobsExecuteSecurity("voluptatibus", "molestias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patchJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchJobsGet

Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsGetRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsGetResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchJobsGetRequest req = new OsconfigProjectsPatchJobsGetRequest("officia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.JSON;
                callback = "aliquid";
                fields = "ea";
                key = "impedit";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "velit";
                uploadProtocol = "reiciendis";
            }};            

            OsconfigProjectsPatchJobsGetResponse res = sdk.projects.osconfigProjectsPatchJobsGet(req, new OsconfigProjectsPatchJobsGetSecurity("repellat", "nulla") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patchJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchJobsInstanceDetailsList

Get a list of instance details for a given patch job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsInstanceDetailsListRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsInstanceDetailsListResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsInstanceDetailsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchJobsInstanceDetailsListRequest req = new OsconfigProjectsPatchJobsInstanceDetailsListRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "nisi";
                fields = "rerum";
                filter = "recusandae";
                key = "voluptates";
                oauthToken = "non";
                pageSize = 524577L;
                pageToken = "quia";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "quisquam";
                uploadProtocol = "dicta";
            }};            

            OsconfigProjectsPatchJobsInstanceDetailsListResponse res = sdk.projects.osconfigProjectsPatchJobsInstanceDetailsList(req, new OsconfigProjectsPatchJobsInstanceDetailsListSecurity("voluptatibus", "eligendi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPatchJobInstanceDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsPatchJobsList

Get a list of patch jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsListRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsListResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsPatchJobsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsPatchJobsListRequest req = new OsconfigProjectsPatchJobsListRequest("quae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "optio";
                filter = "rem";
                key = "perferendis";
                oauthToken = "facilis";
                pageSize = 967055L;
                pageToken = "a";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "dicta";
                uploadProtocol = "quos";
            }};            

            OsconfigProjectsPatchJobsListResponse res = sdk.projects.osconfigProjectsPatchJobsList(req, new OsconfigProjectsPatchJobsListSecurity("ullam", "dolore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPatchJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## osconfigProjectsZonesInstancesLookupEffectiveGuestPolicy

Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LookupEffectiveGuestPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest req = new OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest("modi") {{
                dollarXgafv = XgafvEnum.TWO;
                lookupEffectiveGuestPolicyRequest = new LookupEffectiveGuestPolicyRequest() {{
                    osArchitecture = "maxime";
                    osShortName = "modi";
                    osVersion = "consequuntur";
                }};;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "doloribus";
                fields = "impedit";
                key = "porro";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "reiciendis";
                uploadProtocol = "ab";
            }};            

            OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse res = sdk.projects.osconfigProjectsZonesInstancesLookupEffectiveGuestPolicy(req, new OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity("sint", "nihil") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.effectiveGuestPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
