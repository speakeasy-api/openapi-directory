<!-- Start SDK Example Usage -->
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

            OsconfigProjectsGuestPoliciesCreateRequest req = new OsconfigProjectsGuestPoliciesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                guestPolicyInput = new GuestPolicyInput() {{
                    assignment = new Assignment() {{
                        groupLabels = new org.openapis.openapi.models.shared.AssignmentGroupLabel[]{{
                            add(new AssignmentGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("unde", "nulla");
                                    put("corrupti", "illum");
                                    put("vel", "error");
                                    put("deserunt", "suscipit");
                                }};
                            }}),
                            add(new AssignmentGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("magnam", "debitis");
                                    put("ipsa", "delectus");
                                }};
                            }}),
                            add(new AssignmentGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("suscipit", "molestiae");
                                    put("minus", "placeat");
                                }};
                            }}),
                        }};
                        instanceNamePrefixes = new String[]{{
                            add("iusto"),
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
                    }};;
                    description = "esse";
                    etag = "totam";
                    name = "Omar Carroll";
                    packageRepositories = new org.openapis.openapi.models.shared.PackageRepository[]{{
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = AptRepositoryArchiveTypeEnum.ARCHIVE_TYPE_UNSPECIFIED;
                                components = new String[]{{
                                    add("hic"),
                                    add("optio"),
                                    add("totam"),
                                }};
                                distribution = "beatae";
                                gpgKey = "commodi";
                                uri = "http://familiar-commotion.net";
                            }};
                            goo = new GooRepository() {{
                                name = "Cory Emmerich";
                                url = "perferendis";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "ad";
                                displayName = "natus";
                                gpgKeys = new String[]{{
                                    add("iste"),
                                }};
                                id = "396fea75-96eb-410f-aaa2-352c5955907a";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "doloribus";
                                displayName = "sapiente";
                                gpgKeys = new String[]{{
                                    add("mollitia"),
                                }};
                                id = "3a2fa946-7739-4251-aa52-c3f5ad019da1";
                            }};
                        }}),
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = AptRepositoryArchiveTypeEnum.DEB_SRC;
                                components = new String[]{{
                                    add("vero"),
                                    add("nihil"),
                                    add("praesentium"),
                                    add("voluptatibus"),
                                }};
                                distribution = "ipsa";
                                gpgKey = "omnis";
                                uri = "http://shadowy-alfalfa.com";
                            }};
                            goo = new GooRepository() {{
                                name = "Mrs. April Wuckert";
                                url = "iusto";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "dicta";
                                displayName = "harum";
                                gpgKeys = new String[]{{
                                    add("accusamus"),
                                    add("commodi"),
                                }};
                                id = "e13b99d4-88e1-4e91-a450-ad2abd442698";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "perferendis";
                                displayName = "magni";
                                gpgKeys = new String[]{{
                                    add("ipsam"),
                                    add("alias"),
                                    add("fugit"),
                                    add("dolorum"),
                                }};
                                id = "94bb4f63-c969-4e9a-befa-77dfb14cd66a";
                            }};
                        }}),
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = AptRepositoryArchiveTypeEnum.DEB_SRC;
                                components = new String[]{{
                                    add("occaecati"),
                                }};
                                distribution = "enim";
                                gpgKey = "accusamus";
                                uri = "https://repentant-nectar.net";
                            }};
                            goo = new GooRepository() {{
                                name = "Nelson Lesch";
                                url = "deserunt";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "nisi";
                                displayName = "vel";
                                gpgKeys = new String[]{{
                                    add("omnis"),
                                    add("molestiae"),
                                    add("perferendis"),
                                }};
                                id = "74ba4469-b6e2-4141-9598-90afa563e251";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "iure";
                                displayName = "doloribus";
                                gpgKeys = new String[]{{
                                    add("eius"),
                                    add("maxime"),
                                    add("deleniti"),
                                    add("facilis"),
                                }};
                                id = "711e5b7f-d2ed-4028-921c-ddc692601fb5";
                            }};
                        }}),
                    }};
                    packages = new org.openapis.openapi.models.shared.Package[]{{
                        add(new Package() {{
                            desiredState = PackageDesiredStateEnum.INSTALLED;
                            manager = PackageManagerEnum.ZYPPER;
                            name = "Meredith Hickle PhD";
                        }}),
                        add(new Package() {{
                            desiredState = PackageDesiredStateEnum.DESIRED_STATE_UNSPECIFIED;
                            manager = PackageManagerEnum.MANAGER_UNSPECIFIED;
                            name = "Lewis Welch";
                        }}),
                    }};
                    recipes = new org.openapis.openapi.models.shared.SoftwareRecipe[]{{
                        add(new SoftwareRecipe() {{
                            artifacts = new org.openapis.openapi.models.shared.SoftwareRecipeArtifact[]{{
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = false;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "totam";
                                        generation = "dignissimos";
                                        object = "eaque";
                                    }};
                                    id = "53202c73-d5fe-49b9-8c28-909b3fe49a8d";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "provident";
                                        uri = "https://secret-wafer.biz";
                                    }};
                                }}),
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = false;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "quos";
                                        generation = "aliquid";
                                        object = "dolorem";
                                    }};
                                    id = "3323f9b7-7f3a-4410-8674-ebf69280d1ba";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "iusto";
                                        uri = "http://ragged-man.name";
                                    }};
                                }}),
                            }};
                            desiredState = SoftwareRecipeDesiredStateEnum.REMOVED;
                            installSteps = new org.openapis.openapi.models.shared.SoftwareRecipeStep[]{{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "asperiores";
                                        destination = "nihil";
                                        type = SoftwareRecipeStepExtractArchiveTypeEnum.TAR;
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "voluptate";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "id";
                                        destination = "saepe";
                                        overwrite = false;
                                        permissions = "eius";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(20651),
                                        }};
                                        args = new String[]{{
                                            add("optio"),
                                        }};
                                        artifactId = "accusamus";
                                        localPath = "ad";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(383464),
                                            add(645785),
                                            add(588317),
                                            add(324683),
                                        }};
                                        artifactId = "repellendus";
                                        flags = new String[]{{
                                            add("similique"),
                                            add("alias"),
                                            add("at"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "quaerat";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(425451),
                                            add(798047),
                                        }};
                                        interpreter = SoftwareRecipeStepRunScriptInterpreterEnum.POWERSHELL;
                                        script = "qui";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "dolorum";
                                        destination = "a";
                                        type = SoftwareRecipeStepExtractArchiveTypeEnum.TAR_BZIP;
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "harum";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "iusto";
                                        destination = "ipsum";
                                        overwrite = false;
                                        permissions = "quisquam";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(229442),
                                            add(730856),
                                            add(880298),
                                            add(253941),
                                        }};
                                        args = new String[]{{
                                            add("dolorem"),
                                            add("sapiente"),
                                        }};
                                        artifactId = "totam";
                                        localPath = "nihil";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(711584),
                                        }};
                                        artifactId = "neque";
                                        flags = new String[]{{
                                            add("vel"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "libero";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(646265),
                                            add(463575),
                                        }};
                                        interpreter = SoftwareRecipeStepRunScriptInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                        script = "incidunt";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "qui";
                                        destination = "cupiditate";
                                        type = SoftwareRecipeStepExtractArchiveTypeEnum.TAR_XZ;
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "pariatur";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "soluta";
                                        destination = "dicta";
                                        overwrite = false;
                                        permissions = "laborum";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(276894),
                                            add(132068),
                                            add(174909),
                                        }};
                                        args = new String[]{{
                                            add("facilis"),
                                            add("aliquid"),
                                            add("quam"),
                                        }};
                                        artifactId = "molestias";
                                        localPath = "temporibus";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(204865),
                                        }};
                                        artifactId = "fugit";
                                        flags = new String[]{{
                                            add("odio"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "sunt";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(722081),
                                            add(940432),
                                        }};
                                        interpreter = SoftwareRecipeStepRunScriptInterpreterEnum.INTERPRETER_UNSPECIFIED;
                                        script = "cumque";
                                    }};
                                }}),
                            }};
                            name = "Robin Bosco";
                            updateSteps = new org.openapis.openapi.models.shared.SoftwareRecipeStep[]{{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "nobis";
                                        destination = "quos";
                                        type = SoftwareRecipeStepExtractArchiveTypeEnum.TAR_XZ;
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "cupiditate";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "aperiam";
                                        destination = "delectus";
                                        overwrite = false;
                                        permissions = "dolorem";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(286915),
                                            add(240829),
                                        }};
                                        args = new String[]{{
                                            add("architecto"),
                                            add("quae"),
                                            add("aut"),
                                        }};
                                        artifactId = "quas";
                                        localPath = "itaque";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(669917),
                                        }};
                                        artifactId = "repellendus";
                                        flags = new String[]{{
                                            add("doloribus"),
                                            add("ut"),
                                            add("facilis"),
                                            add("cupiditate"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "qui";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(512393),
                                        }};
                                        interpreter = SoftwareRecipeStepRunScriptInterpreterEnum.SHELL;
                                        script = "occaecati";
                                    }};
                                }}),
                            }};
                            version = "voluptatibus";
                        }}),
                    }};
                }};;
                accessToken = "quisquam";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "quis";
                guestPolicyId = "ipsum";
                key = "delectus";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "vero";
                uploadProtocol = "tenetur";
            }};            

            OsconfigProjectsGuestPoliciesCreateResponse res = sdk.projects.osconfigProjectsGuestPoliciesCreate(req, new OsconfigProjectsGuestPoliciesCreateSecurity("dignissimos", "hic") {{
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
<!-- End SDK Example Usage -->