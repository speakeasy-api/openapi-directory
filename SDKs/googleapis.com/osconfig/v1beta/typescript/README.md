# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/osconfig/v1beta/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/osconfig/v1beta/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  OsconfigProjectsGuestPoliciesCreateRequest,
  OsconfigProjectsGuestPoliciesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  SoftwareRecipeDesiredStateEnum,
  SoftwareRecipeStepRunScriptInterpreterEnum,
  SoftwareRecipeStepExtractArchiveTypeEnum,
  PackageDesiredStateEnum,
  PackageManagerEnum,
  AptRepositoryArchiveTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: OsconfigProjectsGuestPoliciesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  guestPolicyInput: {
    assignment: {
      groupLabels: [
        {
          labels: {
            "quibusdam": "unde",
            "nulla": "corrupti",
            "illum": "vel",
          },
        },
        {
          labels: {
            "deserunt": "suscipit",
            "iure": "magnam",
            "debitis": "ipsa",
          },
        },
        {
          labels: {
            "tempora": "suscipit",
            "molestiae": "minus",
            "placeat": "voluptatum",
            "iusto": "excepturi",
          },
        },
      ],
      instanceNamePrefixes: [
        "recusandae",
        "temporibus",
      ],
      instances: [
        "quis",
      ],
      osTypes: [
        {
          osArchitecture: "deserunt",
          osShortName: "perferendis",
          osVersion: "ipsam",
        },
      ],
      zones: [
        "sapiente",
        "quo",
        "odit",
        "at",
      ],
    },
    description: "at",
    etag: "maiores",
    name: "molestiae",
    packageRepositories: [
      {
        apt: {
          archiveType: AptRepositoryArchiveTypeEnum.DebSrc,
          components: [
            "totam",
            "porro",
          ],
          distribution: "dolorum",
          gpgKey: "dicta",
          uri: "https://posh-muffin.com",
        },
        goo: {
          name: "deleniti",
          url: "hic",
        },
        yum: {
          baseUrl: "optio",
          displayName: "totam",
          gpgKeys: [
            "commodi",
          ],
          id: "molestiae",
        },
        zypper: {
          baseUrl: "modi",
          displayName: "qui",
          gpgKeys: [
            "cum",
            "esse",
            "ipsum",
            "excepturi",
          ],
          id: "aspernatur",
        },
      },
      {
        apt: {
          archiveType: AptRepositoryArchiveTypeEnum.ArchiveTypeUnspecified,
          components: [
            "natus",
            "sed",
          ],
          distribution: "iste",
          gpgKey: "dolor",
          uri: "https://hoarse-upper.org",
        },
        goo: {
          name: "fuga",
          url: "in",
        },
        yum: {
          baseUrl: "corporis",
          displayName: "iste",
          gpgKeys: [
            "saepe",
            "quidem",
          ],
          id: "architecto",
        },
        zypper: {
          baseUrl: "ipsa",
          displayName: "reiciendis",
          gpgKeys: [
            "mollitia",
            "laborum",
            "dolores",
          ],
          id: "dolorem",
        },
      },
      {
        apt: {
          archiveType: AptRepositoryArchiveTypeEnum.Deb,
          components: [
            "nobis",
          ],
          distribution: "enim",
          gpgKey: "omnis",
          uri: "http://general-mobster.com",
        },
        goo: {
          name: "iure",
          url: "culpa",
        },
        yum: {
          baseUrl: "doloribus",
          displayName: "sapiente",
          gpgKeys: [
            "mollitia",
          ],
          id: "dolorem",
        },
        zypper: {
          baseUrl: "culpa",
          displayName: "consequuntur",
          gpgKeys: [
            "mollitia",
            "occaecati",
            "numquam",
            "commodi",
          ],
          id: "quam",
        },
      },
      {
        apt: {
          archiveType: AptRepositoryArchiveTypeEnum.Deb,
          components: [
            "error",
          ],
          distribution: "quia",
          gpgKey: "quis",
          uri: "http://quixotic-physics.biz",
        },
        goo: {
          name: "odit",
          url: "quo",
        },
        yum: {
          baseUrl: "sequi",
          displayName: "tenetur",
          gpgKeys: [
            "id",
            "possimus",
          ],
          id: "aut",
        },
        zypper: {
          baseUrl: "quasi",
          displayName: "error",
          gpgKeys: [
            "laborum",
            "quasi",
            "reiciendis",
            "voluptatibus",
          ],
          id: "vero",
        },
      },
    ],
    packages: [
      {
        desiredState: PackageDesiredStateEnum.Updated,
        manager: PackageManagerEnum.Goo,
        name: "ipsa",
      },
      {
        desiredState: PackageDesiredStateEnum.Updated,
        manager: PackageManagerEnum.Apt,
        name: "cum",
      },
    ],
    recipes: [
      {
        artifacts: [
          {
            allowInsecure: false,
            gcs: {
              bucket: "reprehenderit",
              generation: "ut",
              object: "maiores",
            },
            id: "dicta",
            remote: {
              checksum: "corporis",
              uri: "http://lazy-butterfly.net",
            },
          },
        ],
        desiredState: SoftwareRecipeDesiredStateEnum.Installed,
        installSteps: [
          {
            archiveExtraction: {
              artifactId: "commodi",
              destination: "repudiandae",
              type: SoftwareRecipeStepExtractArchiveTypeEnum.ArchiveTypeUnspecified,
            },
            dpkgInstallation: {
              artifactId: "ipsum",
            },
            fileCopy: {
              artifactId: "quidem",
              destination: "molestias",
              overwrite: false,
              permissions: "excepturi",
            },
            fileExec: {
              allowedExitCodes: [
                265389,
                508969,
                523248,
                916723,
              ],
              args: [
                "repudiandae",
              ],
              artifactId: "sint",
              localPath: "veritatis",
            },
            msiInstallation: {
              allowedExitCodes: [
                277718,
                318569,
                9356,
                667411,
              ],
              artifactId: "quibusdam",
              flags: [
                "deserunt",
              ],
            },
            rpmInstallation: {
              artifactId: "distinctio",
            },
            scriptRun: {
              allowedExitCodes: [
                289406,
                264730,
                183191,
                397821,
              ],
              interpreter: SoftwareRecipeStepRunScriptInterpreterEnum.Shell,
              script: "quos",
            },
          },
          {
            archiveExtraction: {
              artifactId: "perferendis",
              destination: "magni",
              type: SoftwareRecipeStepExtractArchiveTypeEnum.TarXz,
            },
            dpkgInstallation: {
              artifactId: "ipsam",
            },
            fileCopy: {
              artifactId: "alias",
              destination: "fugit",
              overwrite: false,
              permissions: "dolorum",
            },
            fileExec: {
              allowedExitCodes: [
                270008,
                703737,
                735194,
              ],
              args: [
                "delectus",
                "eum",
              ],
              artifactId: "non",
              localPath: "eligendi",
            },
            msiInstallation: {
              allowedExitCodes: [
                396098,
                592042,
                896039,
              ],
              artifactId: "sint",
              flags: [
                "dolor",
                "debitis",
                "a",
              ],
            },
            rpmInstallation: {
              artifactId: "dolorum",
            },
            scriptRun: {
              allowedExitCodes: [
                449198,
                846409,
              ],
              interpreter: SoftwareRecipeStepRunScriptInterpreterEnum.Powershell,
              script: "rerum",
            },
          },
          {
            archiveExtraction: {
              artifactId: "dicta",
              destination: "magnam",
              type: SoftwareRecipeStepExtractArchiveTypeEnum.TarXz,
            },
            dpkgInstallation: {
              artifactId: "facere",
            },
            fileCopy: {
              artifactId: "ea",
              destination: "aliquid",
              overwrite: false,
              permissions: "laborum",
            },
            fileExec: {
              allowedExitCodes: [
                249796,
                581273,
                313218,
                881736,
              ],
              args: [
                "quidem",
                "provident",
                "nam",
                "id",
              ],
              artifactId: "blanditiis",
              localPath: "deleniti",
            },
            msiInstallation: {
              allowedExitCodes: [
                230533,
                643990,
                394869,
                423855,
              ],
              artifactId: "natus",
              flags: [
                "molestiae",
                "perferendis",
                "nihil",
              ],
            },
            rpmInstallation: {
              artifactId: "magnam",
            },
            scriptRun: {
              allowedExitCodes: [
                660174,
                287991,
                290077,
              ],
              interpreter: SoftwareRecipeStepRunScriptInterpreterEnum.Shell,
              script: "natus",
            },
          },
          {
            archiveExtraction: {
              artifactId: "nobis",
              destination: "eum",
              type: SoftwareRecipeStepExtractArchiveTypeEnum.Zip,
            },
            dpkgInstallation: {
              artifactId: "aspernatur",
            },
            fileCopy: {
              artifactId: "architecto",
              destination: "magnam",
              overwrite: false,
              permissions: "et",
            },
            fileExec: {
              allowedExitCodes: [
                354047,
                590873,
                551816,
              ],
              args: [
                "accusantium",
                "mollitia",
                "reiciendis",
              ],
              artifactId: "mollitia",
              localPath: "ad",
            },
            msiInstallation: {
              allowedExitCodes: [
                221262,
                896547,
              ],
              artifactId: "odit",
              flags: [
                "quasi",
                "iure",
              ],
            },
            rpmInstallation: {
              artifactId: "doloribus",
            },
            scriptRun: {
              allowedExitCodes: [
                260341,
                806194,
                537023,
                703889,
              ],
              interpreter: SoftwareRecipeStepRunScriptInterpreterEnum.Shell,
              script: "architecto",
            },
          },
        ],
        name: "architecto",
        updateSteps: [
          {
            archiveExtraction: {
              artifactId: "ullam",
              destination: "expedita",
              type: SoftwareRecipeStepExtractArchiveTypeEnum.TarBzip,
            },
            dpkgInstallation: {
              artifactId: "repellat",
            },
            fileCopy: {
              artifactId: "quibusdam",
              destination: "sed",
              overwrite: false,
              permissions: "saepe",
            },
            fileExec: {
              allowedExitCodes: [
                37559,
                162493,
                508315,
                615560,
              ],
              args: [
                "sunt",
              ],
              artifactId: "quo",
              localPath: "illum",
            },
            msiInstallation: {
              allowedExitCodes: [
                807319,
                411397,
                569101,
                139972,
              ],
              artifactId: "ea",
              flags: [
                "ab",
              ],
            },
            rpmInstallation: {
              artifactId: "maiores",
            },
            scriptRun: {
              allowedExitCodes: [
                373291,
                453543,
                420075,
              ],
              interpreter: SoftwareRecipeStepRunScriptInterpreterEnum.Powershell,
              script: "eaque",
            },
          },
          {
            archiveExtraction: {
              artifactId: "pariatur",
              destination: "nemo",
              type: SoftwareRecipeStepExtractArchiveTypeEnum.Zip,
            },
            dpkgInstallation: {
              artifactId: "perferendis",
            },
            fileCopy: {
              artifactId: "fugiat",
              destination: "amet",
              overwrite: false,
              permissions: "aut",
            },
            fileExec: {
              allowedExitCodes: [
                359978,
                944124,
                729991,
                749999,
              ],
              args: [
                "quis",
              ],
              artifactId: "totam",
              localPath: "dignissimos",
            },
            msiInstallation: {
              allowedExitCodes: [
                338985,
              ],
              artifactId: "nesciunt",
              flags: [
                "perferendis",
              ],
            },
            rpmInstallation: {
              artifactId: "dolores",
            },
            scriptRun: {
              allowedExitCodes: [
                463451,
                223924,
                874573,
                345352,
              ],
              interpreter: SoftwareRecipeStepRunScriptInterpreterEnum.Powershell,
              script: "recusandae",
            },
          },
          {
            archiveExtraction: {
              artifactId: "omnis",
              destination: "facilis",
              type: SoftwareRecipeStepExtractArchiveTypeEnum.TarLzma,
            },
            dpkgInstallation: {
              artifactId: "voluptatem",
            },
            fileCopy: {
              artifactId: "porro",
              destination: "consequuntur",
              overwrite: false,
              permissions: "blanditiis",
            },
            fileExec: {
              allowedExitCodes: [
                50370,
                577229,
                699098,
              ],
              args: [
                "asperiores",
              ],
              artifactId: "earum",
              localPath: "modi",
            },
            msiInstallation: {
              allowedExitCodes: [
                679091,
                535633,
                864282,
              ],
              artifactId: "provident",
              flags: [
                "libero",
                "delectus",
                "quaerat",
                "quos",
              ],
            },
            rpmInstallation: {
              artifactId: "aliquid",
            },
            scriptRun: {
              allowedExitCodes: [
                209843,
              ],
              interpreter: SoftwareRecipeStepRunScriptInterpreterEnum.InterpreterUnspecified,
              script: "qui",
            },
          },
          {
            archiveExtraction: {
              artifactId: "ipsum",
              destination: "hic",
              type: SoftwareRecipeStepExtractArchiveTypeEnum.TarBzip,
            },
            dpkgInstallation: {
              artifactId: "cum",
            },
            fileCopy: {
              artifactId: "voluptate",
              destination: "dignissimos",
              overwrite: false,
              permissions: "reiciendis",
            },
            fileExec: {
              allowedExitCodes: [
                680545,
              ],
              args: [
                "veritatis",
                "ipsa",
              ],
              artifactId: "ipsa",
              localPath: "iure",
            },
            msiInstallation: {
              allowedExitCodes: [
                311796,
                881005,
              ],
              artifactId: "quidem",
              flags: [
                "voluptas",
                "natus",
                "eos",
                "atque",
              ],
            },
            rpmInstallation: {
              artifactId: "sit",
            },
            scriptRun: {
              allowedExitCodes: [
                67249,
                743835,
                679393,
                478596,
              ],
              interpreter: SoftwareRecipeStepRunScriptInterpreterEnum.Shell,
              script: "dolorum",
            },
          },
        ],
        version: "deleniti",
      },
    ],
  },
  accessToken: "omnis",
  alt: AltEnum.Proto,
  callback: "distinctio",
  fields: "asperiores",
  guestPolicyId: "nihil",
  key: "ipsum",
  oauthToken: "voluptate",
  parent: "id",
  prettyPrint: false,
  quotaUser: "saepe",
  uploadType: "eius",
  uploadProtocol: "aspernatur",
};

sdk.projects.osconfigProjectsGuestPoliciesCreate(req).then((res: OsconfigProjectsGuestPoliciesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

