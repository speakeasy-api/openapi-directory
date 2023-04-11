# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/noyo.com/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/noyo.com/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  PingResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.ping().then((res: PingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `ping` - Ping Endpoint

### agents

* `createAgentContact` - Create new Agent Contact
* `createAgentLocation` - Create new Agent Location
* `createApplicationAgent` - Create new Agent
* `editAgent` - Edit an Agent
* `editAgentContact` - Edit an Agent Contact
* `editAgentLocation` - Edit an Agent Location
* `getAgent` - Get Agent
* `getAgentContact` - Get Agent
* `getAgentContacts` - Get Agent Contacts
* `getAgentLocation` - Get Agent
* `getAgentLocations` - Get Agent Locations
* `getApplicationAgents` - Get Application Agents

### applicationDocuments

* `createApplicationDocument` - Create new Application Document
* `editApplicationDocument` - Edit an Application Document
* `getApplicationDocument` - Get Application Document
* `getApplicationDocuments` - Get all Application Documents
* `submitApplicationDocument` - Submit new Application Document

### applications

* `cancelGroupApplication` - Cancel a Group Application
* `createGroupApplication` - Create new Group Application
* `editGroupApplication` - Edit a Group Application
* `getAllApplications` - Get All Applications
* `getGroupApplication` - Get Group Application
* `getGroupApplications` - Get Group Applications
* `submitGroupApplication` - Submit a Group Application
* `validateGroupApplication` - Validate Group Application

### bankAccounts

* `createBankAccount` - Create Bank Account
* `deleteBankAccount` - Delete a Bank Account
* `getAllBankAccounts` - Get All Bank Account
* `getBankAccount` - Get Bank Account

### coveragePlans

* `createCoveragePlan` - Create Coverage Plan
* `editCoveragePlan` - Edit a Coverage Plan
* `getCoveragePlan` - Get Coverage Plan
* `getGroupCoveragePlans` - Get all Group Coverage Plans

### dependents

* `createDependent` - Create Dependent
* `editDependent` - Edit a Dependent
* `getDependent` - Get Dependent
* `getEmployeeDependentsList` - Get all Employee Dependents

### employees

* `createEmployee` - Create Employee
* `editEmployee` - Edit an Employee
* `getEmployee` - Get Employee
* `getGroupEmployeesList` - Get all Group Employees

### groupConfigurationContacts

* `createContact` - Create new Contact
* `editContact` - Edit a Contact
* `getContact` - Get Contact
* `getContactList` - Get all Group Contacts

### groupConfigurationLocations

* `createLocation` - Create new Location
* `editLocation` - Edit a Location
* `getLocation` - Get Location
* `getLocationList` - Get all Group Locations

### groupCoverages

* `createGroupCoverage` - Create new Group Coverage
* `editGroupCoverage` - Edit a Group Coverage
* `getApplicationGroupCoverages` - Get all Application Group Coverages
* `getGroupCoverage` - Get Group Coverage

### groups

* `createGroup` - Create new Group
* `editGroup` - Edit a Group
* `getGroup` - Get Group
* `getGroups` - Get Groups

### memberElections

* `createMemberElection` - Create new Member Election
* `editMemberElection` - Edit a Member Election
* `getApplicationMemberElections` - Get all Application Member Elections
* `getCoveragePlanMemberElections` - Get all Coverage Plan Member Elections
* `getMemberElection` - Get a Member Election
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

