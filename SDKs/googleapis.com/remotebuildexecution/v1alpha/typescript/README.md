# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { RemotebuildexecutionProjectsInstancesCreateRequest, RemotebuildexecutionProjectsInstancesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: RemotebuildexecutionProjectsInstancesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    instance: {
      featurePolicy: {
        actionHermeticity: "ACTION_HERMETICITY_BEST_EFFORT",
        actionIsolation: "ACTION_ISOLATION_UNSPECIFIED",
        containerImageSources: {
          allowedValues: [
            "et",
          ],
          policy: "RESTRICTED",
        },
        dockerAddCapabilities: {
          allowedValues: [
            "et",
            "voluptate",
            "iste",
          ],
          policy: "POLICY_UNSPECIFIED",
        },
        dockerChrootPath: {
          allowedValues: [
            "dolores",
            "illum",
            "debitis",
          ],
          policy: "POLICY_UNSPECIFIED",
        },
        dockerNetwork: {
          allowedValues: [
            "dolore",
          ],
          policy: "POLICY_UNSPECIFIED",
        },
        dockerPrivileged: {
          allowedValues: [
            "accusantium",
          ],
          policy: "ALLOWED",
        },
        dockerRunAsContainerProvidedUser: {
          allowedValues: [
            "quis",
            "est",
          ],
          policy: "POLICY_UNSPECIFIED",
        },
        dockerRunAsRoot: {
          allowedValues: [
            "non",
            "voluptas",
          ],
          policy: "RESTRICTED",
        },
        dockerRuntime: {
          allowedValues: [
            "illo",
          ],
          policy: "FORBIDDEN",
        },
        dockerSiblingContainers: {
          allowedValues: [
            "autem",
            "consectetur",
          ],
          policy: "POLICY_UNSPECIFIED",
        },
        linuxExecution: "LINUX_EXECUTION_UNRESTRICTED",
        linuxIsolation: "LINUX_ISOLATION_UNSPECIFIED",
        macExecution: "MAC_EXECUTION_UNSPECIFIED",
        vmVerification: "VM_VERIFICATION_GCP_TOKEN",
        windowsExecution: "WINDOWS_EXECUTION_UNRESTRICTED",
      },
      location: "eveniet",
      loggingEnabled: false,
      name: "sint",
      state: "CREATING",
    },
    instanceId: "ut",
    parent: "exercitationem",
  },
};

sdk.projects.remotebuildexecutionProjectsInstancesCreate(req).then((res: RemotebuildexecutionProjectsInstancesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `remotebuildexecutionProjectsInstancesCreate` - Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.
* `remotebuildexecutionProjectsInstancesList` - Lists instances in a project.
* `remotebuildexecutionProjectsInstancesTestNotify` - Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.
* `remotebuildexecutionProjectsInstancesWorkerpoolsCreate` - Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.
* `remotebuildexecutionProjectsInstancesWorkerpoolsDelete` - Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.
* `remotebuildexecutionProjectsInstancesWorkerpoolsList` - Lists worker pools in an instance.
* `remotebuildexecutionProjectsInstancesWorkerpoolsPatch` - Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.
* `remotebuildexecutionProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
