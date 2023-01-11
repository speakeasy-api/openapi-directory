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
                    parent = "sit";
                }};
                queryParams = new OsconfigProjectsGuestPoliciesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    guestPolicyId = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new GuestPolicyInput() {{
                    assignment = new Assignment() {{
                        groupLabels = new openapisdk.models.shared.AssignmentGroupLabel[]() {{
                            add(new AssignmentGroupLabel() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("et", "ut");
                                }};
                            }}),
                        }};
                        instanceNamePrefixes = new String[]() {{
                            add("et"),
                            add("voluptate"),
                            add("iste"),
                        }};
                        instances = new String[]() {{
                            add("totam"),
                        }};
                        osTypes = new openapisdk.models.shared.AssignmentOsType[]() {{
                            add(new AssignmentOsType() {{
                                osArchitecture = "illum";
                                osShortName = "debitis";
                                osVersion = "vel";
                            }}),
                        }};
                        zones = new String[]() {{
                            add("dolore"),
                        }};
                    }};
                    description = "id";
                    etag = "aspernatur";
                    name = "accusantium";
                    packageRepositories = new openapisdk.models.shared.PackageRepository[]() {{
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = "DEB";
                                components = new String[]() {{
                                    add("est"),
                                    add("aut"),
                                    add("odit"),
                                }};
                                distribution = "non";
                                gpgKey = "voluptas";
                                uri = "omnis";
                            }};
                            goo = new GooRepository() {{
                                name = "aut";
                                url = "illo";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "sed";
                                displayName = "officiis";
                                gpgKeys = new String[]() {{
                                    add("consectetur"),
                                    add("nobis"),
                                }};
                                id = "odio";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "qui";
                                displayName = "recusandae";
                                gpgKeys = new String[]() {{
                                    add("ipsum"),
                                    add("eveniet"),
                                }};
                                id = "modi";
                            }};
                        }}),
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = "ARCHIVE_TYPE_UNSPECIFIED";
                                components = new String[]() {{
                                    add("ut"),
                                }};
                                distribution = "exercitationem";
                                gpgKey = "aut";
                                uri = "reprehenderit";
                            }};
                            goo = new GooRepository() {{
                                name = "tempore";
                                url = "maiores";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "incidunt";
                                displayName = "dolor";
                                gpgKeys = new String[]() {{
                                    add("veritatis"),
                                    add("in"),
                                    add("et"),
                                }};
                                id = "omnis";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "ipsum";
                                displayName = "ex";
                                gpgKeys = new String[]() {{
                                    add("placeat"),
                                    add("vel"),
                                    add("rerum"),
                                }};
                                id = "mollitia";
                            }};
                        }}),
                        add(new PackageRepository() {{
                            apt = new AptRepository() {{
                                archiveType = "DEB";
                                components = new String[]() {{
                                    add("reprehenderit"),
                                }};
                                distribution = "qui";
                                gpgKey = "qui";
                                uri = "unde";
                            }};
                            goo = new GooRepository() {{
                                name = "in";
                                url = "autem";
                            }};
                            yum = new YumRepository() {{
                                baseUrl = "qui";
                                displayName = "ut";
                                gpgKeys = new String[]() {{
                                    add("ab"),
                                    add("neque"),
                                    add("ullam"),
                                }};
                                id = "et";
                            }};
                            zypper = new ZypperRepository() {{
                                baseUrl = "accusantium";
                                displayName = "esse";
                                gpgKeys = new String[]() {{
                                    add("quam"),
                                    add("velit"),
                                }};
                                id = "cumque";
                            }};
                        }}),
                    }};
                    packages = new openapisdk.models.shared.Package[]() {{
                        add(new Package() {{
                            desiredState = "INSTALLED";
                            manager = "ANY";
                            name = "magni";
                        }}),
                    }};
                    recipes = new openapisdk.models.shared.SoftwareRecipe[]() {{
                        add(new SoftwareRecipe() {{
                            artifacts = new openapisdk.models.shared.SoftwareRecipeArtifact[]() {{
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = true;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "earum";
                                        generation = "illo";
                                        object = "omnis";
                                    }};
                                    id = "ut";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "consequatur";
                                        uri = "dolor";
                                    }};
                                }}),
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = true;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "error";
                                        generation = "reprehenderit";
                                        object = "consectetur";
                                    }};
                                    id = "nostrum";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "ut";
                                        uri = "laboriosam";
                                    }};
                                }}),
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = true;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "a";
                                        generation = "soluta";
                                        object = "aut";
                                    }};
                                    id = "quas";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "consequuntur";
                                        uri = "laudantium";
                                    }};
                                }}),
                            }};
                            desiredState = "INSTALLED";
                            installSteps = new openapisdk.models.shared.SoftwareRecipeStep[]() {{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "expedita";
                                        destination = "doloremque";
                                        type = "TAR_GZIP";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "atque";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "ratione";
                                        destination = "quisquam";
                                        overwrite = false;
                                        permissions = "ea";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(8392001091488039958),
                                        }};
                                        args = new String[]() {{
                                            add("et"),
                                            add("rerum"),
                                        }};
                                        artifactId = "reiciendis";
                                        localPath = "quis";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(2718877847597668777),
                                            add(2333048574390956331),
                                        }};
                                        artifactId = "est";
                                        flags = new String[]() {{
                                            add("eum"),
                                            add("labore"),
                                            add("et"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "impedit";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(8953538234431013647),
                                            add(4540487686588600123),
                                            add(5310832663795041070),
                                        }};
                                        interpreter = "SHELL";
                                        script = "nihil";
                                    }};
                                }}),
                            }};
                            name = "tempora";
                            updateSteps = new openapisdk.models.shared.SoftwareRecipeStep[]() {{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "eaque";
                                        destination = "sunt";
                                        type = "ARCHIVE_TYPE_UNSPECIFIED";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "autem";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "quis";
                                        destination = "vel";
                                        overwrite = false;
                                        permissions = "placeat";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(3661602461251866513),
                                        }};
                                        args = new String[]() {{
                                            add("adipisci"),
                                            add("porro"),
                                            add("rerum"),
                                        }};
                                        artifactId = "et";
                                        localPath = "accusamus";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(2223751782546645906),
                                            add(8958290475970215309),
                                        }};
                                        artifactId = "ut";
                                        flags = new String[]() {{
                                            add("fugit"),
                                            add("quis"),
                                            add("minus"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "soluta";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(7686248226181626741),
                                            add(4970157864765978097),
                                        }};
                                        interpreter = "SHELL";
                                        script = "inventore";
                                    }};
                                }}),
                            }};
                            version = "delectus";
                        }}),
                        add(new SoftwareRecipe() {{
                            artifacts = new openapisdk.models.shared.SoftwareRecipeArtifact[]() {{
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = false;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "animi";
                                        generation = "ut";
                                        object = "aliquam";
                                    }};
                                    id = "fuga";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "sed";
                                        uri = "sed";
                                    }};
                                }}),
                            }};
                            desiredState = "UPDATED";
                            installSteps = new openapisdk.models.shared.SoftwareRecipeStep[]() {{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "non";
                                        destination = "cupiditate";
                                        type = "ARCHIVE_TYPE_UNSPECIFIED";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "molestiae";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "pariatur";
                                        destination = "quasi";
                                        overwrite = false;
                                        permissions = "enim";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(4450884069054898502),
                                        }};
                                        args = new String[]() {{
                                            add("modi"),
                                            add("neque"),
                                            add("consequuntur"),
                                        }};
                                        artifactId = "quia";
                                        localPath = "et";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(6028661030721431741),
                                        }};
                                        artifactId = "ex";
                                        flags = new String[]() {{
                                            add("quia"),
                                            add("temporibus"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "velit";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(5042961816383320698),
                                        }};
                                        interpreter = "POWERSHELL";
                                        script = "necessitatibus";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "in";
                                        destination = "possimus";
                                        type = "TAR";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "dolorum";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "doloribus";
                                        destination = "saepe";
                                        overwrite = false;
                                        permissions = "earum";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(6499763367080957833),
                                            add(1514803956160473307),
                                        }};
                                        args = new String[]() {{
                                            add("est"),
                                        }};
                                        artifactId = "ipsum";
                                        localPath = "quam";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(8993831421611415990),
                                        }};
                                        artifactId = "dolores";
                                        flags = new String[]() {{
                                            add("impedit"),
                                            add("non"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "magnam";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(3357930257403748968),
                                            add(371208508841907247),
                                            add(5420076601779642085),
                                        }};
                                        interpreter = "SHELL";
                                        script = "ipsam";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "ducimus";
                                        destination = "enim";
                                        type = "ARCHIVE_TYPE_UNSPECIFIED";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "distinctio";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "delectus";
                                        destination = "rerum";
                                        overwrite = false;
                                        permissions = "repellat";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(1469755398674317289),
                                        }};
                                        args = new String[]() {{
                                            add("sunt"),
                                            add("voluptas"),
                                        }};
                                        artifactId = "amet";
                                        localPath = "et";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(6187840044538043239),
                                        }};
                                        artifactId = "excepturi";
                                        flags = new String[]() {{
                                            add("corporis"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "dicta";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(1759572601250580224),
                                            add(5492620638782281201),
                                        }};
                                        interpreter = "SHELL";
                                        script = "recusandae";
                                    }};
                                }}),
                            }};
                            name = "qui";
                            updateSteps = new openapisdk.models.shared.SoftwareRecipeStep[]() {{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "et";
                                        destination = "rerum";
                                        type = "TAR_BZIP";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "rem";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "eos";
                                        destination = "et";
                                        overwrite = true;
                                        permissions = "aspernatur";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(388271722783231135),
                                        }};
                                        args = new String[]() {{
                                            add("adipisci"),
                                        }};
                                        artifactId = "consequatur";
                                        localPath = "illum";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(5615798573507722061),
                                            add(1444501184389758573),
                                            add(6965195451650017723),
                                        }};
                                        artifactId = "quidem";
                                        flags = new String[]() {{
                                            add("quo"),
                                            add("vero"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "alias";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(1529447803721624558),
                                            add(1958777829936408748),
                                            add(5294730593135495901),
                                        }};
                                        interpreter = "POWERSHELL";
                                        script = "omnis";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "totam";
                                        destination = "aut";
                                        type = "TAR_XZ";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "magni";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "necessitatibus";
                                        destination = "et";
                                        overwrite = false;
                                        permissions = "repellendus";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(5168005730101237705),
                                        }};
                                        args = new String[]() {{
                                            add("architecto"),
                                            add("molestias"),
                                            add("rerum"),
                                        }};
                                        artifactId = "quo";
                                        localPath = "et";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(1215184329252422444),
                                            add(4178331056796501958),
                                            add(8590975497400104807),
                                        }};
                                        artifactId = "asperiores";
                                        flags = new String[]() {{
                                            add("ea"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "soluta";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(5850174490929081658),
                                            add(434570727381690637),
                                            add(2506834319279501248),
                                        }};
                                        interpreter = "POWERSHELL";
                                        script = "et";
                                    }};
                                }}),
                            }};
                            version = "odit";
                        }}),
                        add(new SoftwareRecipe() {{
                            artifacts = new openapisdk.models.shared.SoftwareRecipeArtifact[]() {{
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = true;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "ipsum";
                                        generation = "aut";
                                        object = "perspiciatis";
                                    }};
                                    id = "et";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "vero";
                                        uri = "voluptatem";
                                    }};
                                }}),
                                add(new SoftwareRecipeArtifact() {{
                                    allowInsecure = false;
                                    gcs = new SoftwareRecipeArtifactGcs() {{
                                        bucket = "magni";
                                        generation = "vero";
                                        object = "distinctio";
                                    }};
                                    id = "cumque";
                                    remote = new SoftwareRecipeArtifactRemote() {{
                                        checksum = "ea";
                                        uri = "non";
                                    }};
                                }}),
                            }};
                            desiredState = "INSTALLED";
                            installSteps = new openapisdk.models.shared.SoftwareRecipeStep[]() {{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "beatae";
                                        destination = "quae";
                                        type = "TAR_GZIP";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "magni";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "minus";
                                        destination = "sit";
                                        overwrite = false;
                                        permissions = "neque";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(5401654515258649126),
                                        }};
                                        args = new String[]() {{
                                            add("debitis"),
                                            add("autem"),
                                        }};
                                        artifactId = "odit";
                                        localPath = "enim";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(6332746838872275660),
                                            add(4671696214766305422),
                                            add(72208651011097126),
                                        }};
                                        artifactId = "recusandae";
                                        flags = new String[]() {{
                                            add("exercitationem"),
                                            add("iste"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "perferendis";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(5740420119606139691),
                                            add(8652445593437943884),
                                            add(262877386996496551),
                                        }};
                                        interpreter = "SHELL";
                                        script = "libero";
                                    }};
                                }}),
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "qui";
                                        destination = "omnis";
                                        type = "TAR_GZIP";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "nostrum";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "non";
                                        destination = "sit";
                                        overwrite = false;
                                        permissions = "quo";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(4500698545012642604),
                                        }};
                                        args = new String[]() {{
                                            add("ea"),
                                            add("tempore"),
                                        }};
                                        artifactId = "fugit";
                                        localPath = "aut";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(3633581150548432575),
                                            add(162748198233786728),
                                            add(2735291237831641770),
                                        }};
                                        artifactId = "magni";
                                        flags = new String[]() {{
                                            add("illum"),
                                            add("consequatur"),
                                            add("dolores"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "hic";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(1595294774483826936),
                                            add(1547351759706903978),
                                        }};
                                        interpreter = "INTERPRETER_UNSPECIFIED";
                                        script = "et";
                                    }};
                                }}),
                            }};
                            name = "quos";
                            updateSteps = new openapisdk.models.shared.SoftwareRecipeStep[]() {{
                                add(new SoftwareRecipeStep() {{
                                    archiveExtraction = new SoftwareRecipeStepExtractArchive() {{
                                        artifactId = "explicabo";
                                        destination = "necessitatibus";
                                        type = "TAR_XZ";
                                    }};
                                    dpkgInstallation = new SoftwareRecipeStepInstallDpkg() {{
                                        artifactId = "qui";
                                    }};
                                    fileCopy = new SoftwareRecipeStepCopyFile() {{
                                        artifactId = "in";
                                        destination = "odit";
                                        overwrite = false;
                                        permissions = "corporis";
                                    }};
                                    fileExec = new SoftwareRecipeStepExecFile() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(2166251624916999313),
                                            add(3804333472281854609),
                                            add(8989348688501218597),
                                        }};
                                        args = new String[]() {{
                                            add("laboriosam"),
                                            add("quam"),
                                        }};
                                        artifactId = "maiores";
                                        localPath = "totam";
                                    }};
                                    msiInstallation = new SoftwareRecipeStepInstallMsi() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(7100399552416253201),
                                        }};
                                        artifactId = "repellendus";
                                        flags = new String[]() {{
                                            add("eum"),
                                            add("earum"),
                                        }};
                                    }};
                                    rpmInstallation = new SoftwareRecipeStepInstallRpm() {{
                                        artifactId = "et";
                                    }};
                                    scriptRun = new SoftwareRecipeStepRunScript() {{
                                        allowedExitCodes = new Integer[]() {{
                                            add(6167316338759183977),
                                            add(2826820190694642039),
                                            add(8856257683554197028),
                                        }};
                                        interpreter = "SHELL";
                                        script = "ea";
                                    }};
                                }}),
                            }};
                            version = "et";
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