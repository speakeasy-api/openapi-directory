# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/noyo.com/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Ping(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `Ping` - Ping Endpoint

### Agents

* `CreateAgentContact` - Create new Agent Contact
* `CreateAgentLocation` - Create new Agent Location
* `CreateApplicationAgent` - Create new Agent
* `EditAgent` - Edit an Agent
* `EditAgentContact` - Edit an Agent Contact
* `EditAgentLocation` - Edit an Agent Location
* `GetAgent` - Get Agent
* `GetAgentContact` - Get Agent
* `GetAgentContacts` - Get Agent Contacts
* `GetAgentLocation` - Get Agent
* `GetAgentLocations` - Get Agent Locations
* `GetApplicationAgents` - Get Application Agents

### ApplicationDocuments

* `CreateApplicationDocument` - Create new Application Document
* `EditApplicationDocument` - Edit an Application Document
* `GetApplicationDocument` - Get Application Document
* `GetApplicationDocuments` - Get all Application Documents
* `SubmitApplicationDocument` - Submit new Application Document

### Applications

* `CancelGroupApplication` - Cancel a Group Application
* `CreateGroupApplication` - Create new Group Application
* `EditGroupApplication` - Edit a Group Application
* `GetAllApplications` - Get All Applications
* `GetGroupApplication` - Get Group Application
* `GetGroupApplications` - Get Group Applications
* `SubmitGroupApplication` - Submit a Group Application
* `ValidateGroupApplication` - Validate Group Application

### BankAccounts

* `CreateBankAccount` - Create Bank Account
* `DeleteBankAccount` - Delete a Bank Account
* `GetAllBankAccounts` - Get All Bank Account
* `GetBankAccount` - Get Bank Account

### CoveragePlans

* `CreateCoveragePlan` - Create Coverage Plan
* `EditCoveragePlan` - Edit a Coverage Plan
* `GetCoveragePlan` - Get Coverage Plan
* `GetGroupCoveragePlans` - Get all Group Coverage Plans

### Dependents

* `CreateDependent` - Create Dependent
* `EditDependent` - Edit a Dependent
* `GetDependent` - Get Dependent
* `GetEmployeeDependentsList` - Get all Employee Dependents

### Employees

* `CreateEmployee` - Create Employee
* `EditEmployee` - Edit an Employee
* `GetEmployee` - Get Employee
* `GetGroupEmployeesList` - Get all Group Employees

### GroupConfigurationContacts

* `CreateContact` - Create new Contact
* `EditContact` - Edit a Contact
* `GetContact` - Get Contact
* `GetContactList` - Get all Group Contacts

### GroupConfigurationLocations

* `CreateLocation` - Create new Location
* `EditLocation` - Edit a Location
* `GetLocation` - Get Location
* `GetLocationList` - Get all Group Locations

### GroupCoverages

* `CreateGroupCoverage` - Create new Group Coverage
* `EditGroupCoverage` - Edit a Group Coverage
* `GetApplicationGroupCoverages` - Get all Application Group Coverages
* `GetGroupCoverage` - Get Group Coverage

### Groups

* `CreateGroup` - Create new Group
* `EditGroup` - Edit a Group
* `GetGroup` - Get Group
* `GetGroups` - Get Groups

### MemberElections

* `CreateMemberElection` - Create new Member Election
* `EditMemberElection` - Edit a Member Election
* `GetApplicationMemberElections` - Get all Application Member Elections
* `GetCoveragePlanMemberElections` - Get all Coverage Plan Member Elections
* `GetMemberElection` - Get a Member Election
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
