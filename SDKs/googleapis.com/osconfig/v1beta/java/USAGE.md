<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.OsconfigProjectsGuestPoliciesCreateSecurity;
import org.openapis.openapi.models.operations.OsconfigProjectsGuestPoliciesCreateRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsGuestPoliciesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsGuestPoliciesCreateRequest req = new OsconfigProjectsGuestPoliciesCreateRequest() {{
                dollarXgafv = "2";
                guestPolicyInput = new GuestPolicyInput() {{
                    assignment = new Assignment() {{
                        groupLabels = new org.openapis.openapi.models.shared.AssignmentGroupLabel[]{{
                            add(new AssignmentGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("quibusdam", "unde");
                                    put("nulla", "corrupti");
                                    put("illum", "vel");
                                }};
                            }}),
                            add(new AssignmentGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("deserunt", "suscipit");
                                    put("iure", "magnam");
                                    put("debitis", "ipsa");
                                }};
                            }}),
                            add(new AssignmentGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("tempora", "suscipit");
                                    put("molestiae", "minus");
                                    put("placeat", "voluptatum");
                                    put("iusto", "excepturi");
                                }};
                            }}),
                        }};
                        instanceNamePrefixes = new String[]{{
                            add("recusandae"),
                            add("temporibus"),
                        }};
                        instances = new String[]{{
                            add("quis"),
                        }};
                        osTypes = new org.openapis.openapi.models.shared.AssignmentOsType[]{{
                            add(new AssignmentOsType() {{
                                osArchitecture = "deserunt";
                                osShortName = "perferendis";
                                osVersion = "ipsam";
                            }}),
                        }};
                        zones = new String[]{{
                            add("sapiente"),
                            add("quo"),
                            add("odit"),
                            add("at"),
                        }};
                    }};
                    description = "at";
                    etag = "maiores";
                    name = "molestiae";
                    packageRepositories = new org.openapis.openapi.models.shared.PackageRepository[]{{
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = "DEB_SRC";
                                components = new String[]{{
                                    add("totam"),
                                    add("porro"),
                                }};
                                distribution = "dolorum";
                                gpgKey = "dicta";
                                uri = "https://posh-muffin.com";
                            }};
                            goo = new GooRepository() {{
                                name = "deleniti";
                                url = "hic";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "optio";
                                displayName = "totam";
                                gpgKeys = new String[]{{
                                    add("commodi"),
                                }};
                                id = "molestiae";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "modi";
                                displayName = "qui";
                                gpgKeys = new String[]{{
                                    add("cum"),
                                    add("esse"),
                                    add("ipsum"),
                                    add("excepturi"),
                                }};
                                id = "aspernatur";
                            }};
                        }}),
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = "ARCHIVE_TYPE_UNSPECIFIED";
                                components = new String[]{{
                                    add("natus"),
                                    add("sed"),
                                }};
                                distribution = "iste";
                                gpgKey = "dolor";
                                uri = "https://hoarse-upper.org";
                            }};
                            goo = new GooRepository() {{
                                name = "fuga";
                                url = "in";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "corporis";
                                displayName = "iste";
                                gpgKeys = new String[]{{
                                    add("saepe"),
                                    add("quidem"),
                                }};
                                id = "architecto";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "ipsa";
                                displayName = "reiciendis";
                                gpgKeys = new String[]{{
                                    add("mollitia"),
                                    add("laborum"),
                                    add("dolores"),
                                }};
                                id = "dolorem";
                            }};
                        }}),
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = "DEB";
                                components = new String[]{{
                                    add("nobis"),
                                }};
                                distribution = "enim";
                                gpgKey = "omnis";
                                uri = "http://general-mobster.com";
                            }};
                            goo = new GooRepository() {{
                                name = "iure";
                                url = "culpa";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "doloribus";
                                displayName = "sapiente";
                                gpgKeys = new String[]{{
                                    add("mollitia"),
                                }};
                                id = "dolorem";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "culpa";
                                displayName = "consequuntur";
                                gpgKeys = new String[]{{
                                    add("mollitia"),
                                    add("occaecati"),
                                    add("numquam"),
                                    add("commodi"),
                                }};
                                id = "quam";
                            }};
                        }}),
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = "DEB";
                                components = new String[]{{
                                    add("error"),
                                }};
                                distribution = "quia";
                                gpgKey = "quis";
                                uri = "http://quixotic-physics.biz";
                            }};
                            goo = new GooRepository() {{
                                name = "odit";
                                url = "quo";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "sequi";
                                displayName = "tenetur";
                                gpgKeys = new String[]{{
                                    add("id"),
                                    add("possimus"),
                                }};
                                id = "aut";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "quasi";
                                displayName = "error";
                                gpgKeys = new String[]{{
                                    add("laborum"),
                                    add("quasi"),
                                    add("reiciendis"),
                                    add("voluptatibus"),
                                }};
                                id = "vero";
                            }};
                        }}),
                    }};
                    packages = new org.openapis.openapi.models.shared.Package[]{{
                        add(new Package() {{
                            desiredState = "UPDATED";
                            manager = "GOO";
                            name = "ipsa";
                        }}),
                        add(new Package() {{
                            desiredState = "UPDATED";
                            manager = "APT";
                            name = "cum";
                        }}),
                    }};
                    recipes = new org.openapis.openapi.models.shared.SoftwareRecipe[]{{
                        add(new SoftwareRecipe() {{
                            artifacts = new org.openapis.openapi.models.shared.SoftwareRecipeArtifact[]{{
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = false;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "reprehenderit";
                                        generation = "ut";
                                        object = "maiores";
                                    }};
                                    id = "dicta";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "corporis";
                                        uri = "http://lazy-butterfly.net";
                                    }};
                                }}),
                            }};
                            desiredState = "INSTALLED";
                            installSteps = new org.openapis.openapi.models.shared.SoftwareRecipeStep[]{{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "commodi";
                                        destination = "repudiandae";
                                        type = "ARCHIVE_TYPE_UNSPECIFIED";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "ipsum";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "quidem";
                                        destination = "molestias";
                                        overwrite = false;
                                        permissions = "excepturi";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(265389),
                                            add(508969),
                                            add(523248),
                                            add(916723),
                                        }};
                                        args = new String[]{{
                                            add("repudiandae"),
                                        }};
                                        artifactId = "sint";
                                        localPath = "veritatis";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(277718),
                                            add(318569),
                                            add(9356),
                                            add(667411),
                                        }};
                                        artifactId = "quibusdam";
                                        flags = new String[]{{
                                            add("deserunt"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "distinctio";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(289406),
                                            add(264730),
                                            add(183191),
                                            add(397821),
                                        }};
                                        interpreter = "SHELL";
                                        script = "quos";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "perferendis";
                                        destination = "magni";
                                        type = "TAR_XZ";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "ipsam";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "alias";
                                        destination = "fugit";
                                        overwrite = false;
                                        permissions = "dolorum";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(270008),
                                            add(703737),
                                            add(735194),
                                        }};
                                        args = new String[]{{
                                            add("delectus"),
                                            add("eum"),
                                        }};
                                        artifactId = "non";
                                        localPath = "eligendi";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(396098),
                                            add(592042),
                                            add(896039),
                                        }};
                                        artifactId = "sint";
                                        flags = new String[]{{
                                            add("dolor"),
                                            add("debitis"),
                                            add("a"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "dolorum";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(449198),
                                            add(846409),
                                        }};
                                        interpreter = "POWERSHELL";
                                        script = "rerum";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "dicta";
                                        destination = "magnam";
                                        type = "TAR_XZ";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "facere";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "ea";
                                        destination = "aliquid";
                                        overwrite = false;
                                        permissions = "laborum";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(249796),
                                            add(581273),
                                            add(313218),
                                            add(881736),
                                        }};
                                        args = new String[]{{
                                            add("quidem"),
                                            add("provident"),
                                            add("nam"),
                                            add("id"),
                                        }};
                                        artifactId = "blanditiis";
                                        localPath = "deleniti";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(230533),
                                            add(643990),
                                            add(394869),
                                            add(423855),
                                        }};
                                        artifactId = "natus";
                                        flags = new String[]{{
                                            add("molestiae"),
                                            add("perferendis"),
                                            add("nihil"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "magnam";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(660174),
                                            add(287991),
                                            add(290077),
                                        }};
                                        interpreter = "SHELL";
                                        script = "natus";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "nobis";
                                        destination = "eum";
                                        type = "ZIP";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "aspernatur";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "architecto";
                                        destination = "magnam";
                                        overwrite = false;
                                        permissions = "et";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(354047),
                                            add(590873),
                                            add(551816),
                                        }};
                                        args = new String[]{{
                                            add("accusantium"),
                                            add("mollitia"),
                                            add("reiciendis"),
                                        }};
                                        artifactId = "mollitia";
                                        localPath = "ad";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(221262),
                                            add(896547),
                                        }};
                                        artifactId = "odit";
                                        flags = new String[]{{
                                            add("quasi"),
                                            add("iure"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "doloribus";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(260341),
                                            add(806194),
                                            add(537023),
                                            add(703889),
                                        }};
                                        interpreter = "SHELL";
                                        script = "architecto";
                                    }};
                                }}),
                            }};
                            name = "architecto";
                            updateSteps = new org.openapis.openapi.models.shared.SoftwareRecipeStep[]{{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "ullam";
                                        destination = "expedita";
                                        type = "TAR_BZIP";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "repellat";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "quibusdam";
                                        destination = "sed";
                                        overwrite = false;
                                        permissions = "saepe";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(37559),
                                            add(162493),
                                            add(508315),
                                            add(615560),
                                        }};
                                        args = new String[]{{
                                            add("sunt"),
                                        }};
                                        artifactId = "quo";
                                        localPath = "illum";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(807319),
                                            add(411397),
                                            add(569101),
                                            add(139972),
                                        }};
                                        artifactId = "ea";
                                        flags = new String[]{{
                                            add("ab"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "maiores";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(373291),
                                            add(453543),
                                            add(420075),
                                        }};
                                        interpreter = "POWERSHELL";
                                        script = "eaque";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "pariatur";
                                        destination = "nemo";
                                        type = "ZIP";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "perferendis";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "fugiat";
                                        destination = "amet";
                                        overwrite = false;
                                        permissions = "aut";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(359978),
                                            add(944124),
                                            add(729991),
                                            add(749999),
                                        }};
                                        args = new String[]{{
                                            add("quis"),
                                        }};
                                        artifactId = "totam";
                                        localPath = "dignissimos";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(338985),
                                        }};
                                        artifactId = "nesciunt";
                                        flags = new String[]{{
                                            add("perferendis"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "dolores";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(463451),
                                            add(223924),
                                            add(874573),
                                            add(345352),
                                        }};
                                        interpreter = "POWERSHELL";
                                        script = "recusandae";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "omnis";
                                        destination = "facilis";
                                        type = "TAR_LZMA";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "voluptatem";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "porro";
                                        destination = "consequuntur";
                                        overwrite = false;
                                        permissions = "blanditiis";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(50370),
                                            add(577229),
                                            add(699098),
                                        }};
                                        args = new String[]{{
                                            add("asperiores"),
                                        }};
                                        artifactId = "earum";
                                        localPath = "modi";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(679091),
                                            add(535633),
                                            add(864282),
                                        }};
                                        artifactId = "provident";
                                        flags = new String[]{{
                                            add("libero"),
                                            add("delectus"),
                                            add("quaerat"),
                                            add("quos"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "aliquid";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(209843),
                                        }};
                                        interpreter = "INTERPRETER_UNSPECIFIED";
                                        script = "qui";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "ipsum";
                                        destination = "hic";
                                        type = "TAR_BZIP";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "cum";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "voluptate";
                                        destination = "dignissimos";
                                        overwrite = false;
                                        permissions = "reiciendis";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(680545),
                                        }};
                                        args = new String[]{{
                                            add("veritatis"),
                                            add("ipsa"),
                                        }};
                                        artifactId = "ipsa";
                                        localPath = "iure";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(311796),
                                            add(881005),
                                        }};
                                        artifactId = "quidem";
                                        flags = new String[]{{
                                            add("voluptas"),
                                            add("natus"),
                                            add("eos"),
                                            add("atque"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "sit";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]{{
                                            add(67249),
                                            add(743835),
                                            add(679393),
                                            add(478596),
                                        }};
                                        interpreter = "SHELL";
                                        script = "dolorum";
                                    }};
                                }}),
                            }};
                            version = "deleniti";
                        }}),
                    }};
                }};
                accessToken = "omnis";
                alt = "proto";
                callback = "distinctio";
                fields = "asperiores";
                guestPolicyId = "nihil";
                key = "ipsum";
                oauthToken = "voluptate";
                parent = "id";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "eius";
                uploadProtocol = "aspernatur";
            }}            

            OsconfigProjectsGuestPoliciesCreateResponse res = sdk.projects.osconfigProjectsGuestPoliciesCreate(req, new OsconfigProjectsGuestPoliciesCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.guestPolicy.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->