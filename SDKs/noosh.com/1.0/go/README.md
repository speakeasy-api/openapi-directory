# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/noosh.com/1.0/go
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

    req := operations.GetBillingRecipientsRequest{
        PathParams: operations.GetBillingRecipientsPathParams{
            WorkgroupID: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.Contact.GetBillingRecipients(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Contact

* `GetBillingRecipients` - List Billing Recipients
* `GetContactList` - List the contacts
* `GetContactUserInfo` - Contact Info

### Country

* `GetCountryList` - List all countries

### DeactivationReason

* `GetDeactivationReasonList` - List all deactivation reasons

### Estimate

* `GetEstimate` - Get a specific estimate of project
* `GetEstimateList` - List the Estimates
* `PostEstimateJSON` - Create a Estimate
* `PostEstimateRaw` - Create a Estimate

### ExchangeRate

* `GetExchangeRateList` - Get Exchange Rate List
* `PostExchangeRateJSON` - Create Exchange Rates
* `PostExchangeRateRaw` - Create Exchange Rates

### File

* `GetFile` - Get File from Project.  Works for Regular and Remote Files
* `GetFileTags` - List Tags from Workgroup and Project.
* `GetFiles` - List Files from Project.  Works for Regular and Remote Files
* `UploadFile` - Upload File to Project.  A multipart/form-data request with a name "file"

### Invoice

* `GetInvoice` - List a specific invoice of project Level
* `GetInvoiceFiles` - List files of invoice Level
* `GetInvoices` - List invoices by a specific order

### MyInfo

* `GetAutomaticInvitationList` - List current user's automatic invitations info 
* `GetTeamTemplateDetail` - Get current user's team template detal info 
* `GetTeamTemplateList` - List current user's team templates info 
* `UploadProfileImage` - Upload Profile Image.  A multipart/form-data request with a name "file"

### Order

* `GetBuyOrder` - Get a specific buy order
* `GetBuyOrderList` - List the buy orders
* `GetBuyOrderListOfWorkgroup` - List the buy orders of workgroup
* `GetBuyOrderOfWorkgroup` - Get a specific buy order of workgroup
* `GetOrder` - Get a specific buy/sell order
* `GetSellOrder` - Get a specific sell order
* `GetSellOrderList` - List the sell orders
* `GetSellOrderListOfWorkgroup` - List the sell orders of workgrop
* `GetSellOrderOfWorkgroup` - Get a specific sell order
* `PostBuyOrderJSON` - Create a quick buy order
* `PostBuyOrderRaw` - Create a quick buy order
* `PutBuyOrderJSON` - Update a specific buy order
* `PutBuyOrderRaw` - Update a specific buy order
* `PutSellOrderJSON` - Update / Accept or Reject a specific sell order
* `PutSellOrderRaw` - Update / Accept or Reject a specific sell order

### Project

* `AttachProjectJSON` - Attach children projects to specific Project
* `AttachProjectRaw` - Attach children projects to specific Project
* `DeleteProject` - Archieve a specific Project
* `GetProject` - Get a specific Project
* `GetProjectList` - List the projects
* `PatchProjectJSON` - Patch a specific Project
* `PatchProjectRaw` - Patch a specific Project
* `PostProjectJSON` - Create a Project
* `PostProjectRaw` - Create a Project
* `PutProjectJSON` - Update a specific Project
* `PutProjectRaw` - Update a specific Project

### ProjectCategory

* `GetProjectCategoryList` - List the project categories
* `GetProjectCategoryListOfClient` - List the project categories of client side

### ProjectStatus

* `GetProjectStatus` - List the project status
* `GetProjectStatusOfClient` - List the project status of client

### Quote

* `GetQuote` - Get a specific quote of project
* `GetQuoteList` - List the quotes
* `GetQuoteStateList` - List the quote states
* `GetV1WorkgroupsWorkgroupIDQuotes` - List the quotes of workgroup level
* `PutQuoteJSON` - Accept / Reject a Quote
* `PutQuoteRaw` - Accept / Reject a Quote

### Rfe

* `GetRfe` - Get a specific Rfe
* `GetRfeList` - List the RFES
* `PostRfeJSON` - Create a RFE
* `PostRfeRaw` - Create a RFE

### Rfq

* `GetRfq` - Get a specific Rfq
* `GetRfqList` - List the rfqs

### Shipment

* `GetShipment` - Get a specific shipment.
* `GetShipmentList` - List shipments of project
* `PostShipmentJSON` - Create a shipment
* `PostShipmentRaw` - Create a shipment
* `PutShipmentLocationJSON` - Update a specific shipment location
* `PutShipmentLocationRaw` - Update a specific shipment location

### Spec

* `GetProductTypeListOfWorkgroup` - Get product type of workgroup level
* `GetSpec` - List a specific spec of project Level
* `GetSpecList` - List specs of project Level
* `GetSpecProductTypeListOfWorkgroup` - Get product type of spec level by workgroupId
* `GetSpecTypeFields` - Get Spec Type Fields
* `GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecID` - List a specific spec of project Level
* `GetV1WorkgroupsWorkgroupIDSpecTypesSpecTypeIDSpecTypeFields` - Get Spec Type Fields
* `PostSpecProductTypeListOfWorkgroupJSON` - Register product types for spec types
* `PostSpecProductTypeListOfWorkgroupRaw` - Register product types for spec types
* `PostSpecJSON` - Create a Spec
* `PostSpecRaw` - Create a Spec
* `PutSpecJSON` - Update a specific Spec
* `PutSpecRaw` - Update a specific Spec
* `PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDJSON` - Update a specific Spec
* `PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRaw` - Update a specific Spec

### SpecTemplate

* `GetSpecTemplate` - Get a specific Spec Template
* `GetSpecTemplateList` - List Spec Templates of Workgroup Level 

### Task

* `TaskPriorityList` - Get default task priority list
* `GetCustomTaskTypesOfWg` - Get custom task types of workgroup level
* `GetDefaultTaskStatusList` - Get default task status list
* `GetTaskListOfProject` - Get task list of project level
* `GetTaskListOfWorkgroup` - Get task list of workgroup level
* `GetTaskOfProject` - Get a sepcific task of project level
* `GetTaskOfWorkgroup` - Get a sepcific task of workgroup level
* `GetTaskTypesOfWorkgroup` - Get task types of workgroup level
* `GetWgTaskStatusListOfWorkgroup` - Get custom task status of workgroup level
* `PostTaskForProjectJSON` - Create a new task
* `PostTaskForProjectRaw` - Create a new task

### TeamMember

* `DeleteTeamMemberOfProject` - Delete a team member for the specific project.
* `GetTeamMemberListOfClientProject` - List team member of client project side.
* `GetTeamMemberListOfProject` - List team member of project.
* `PostTeamMemberOfProjectJSON` - Invite a team member or all the members of team template for the specific project.
* `PostTeamMemberOfProjectRaw` - Invite a team member or all the members of team template for the specific project.
* `PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersJSON` - Deprecated, please use 1.1 Version
* `PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersRaw` - Deprecated, please use 1.1 Version

### TeamMemberRole

* `GetMemberRoles` - List all the role options for the user

### TimeCard

* `GetMyTimeCard` - Get a specific my time cards
* `GetMyTimeCardList` - List my time cards
* `GetReceivedTimeCard` - List a specific received time cards
* `GetReceivedTimeCardList` - List received time cards

### UserFields

* `GetProjectHomeUserFieldListOfClient` - List projec home user fields of client workgroup
* `GetProjectHomeUserFieldsList` - List projec home user fields

### Workgroup

* `GetClientWorkgroupList` - List client workgroups
* `GetSpecificClientWorkgroup` - Get a specific client workgroups
* `GetSupplierWorkgroupDetail` - Get the specific supplier of My Group
* `GetSupplierWorkgroupList` - List supplier workgroups
* `GetWorkgroupDetail` - Detail workgroup info
* `GetWorkgroupList` - List the workgroups
* `PutWorkgroupJSON` - Update a specific Workgroup
* `PutWorkgroupRaw` - Update a specific Workgroup

### WorkgroupMembers

* `GetWorkgroupMemberInfo` - Workgroup Member Info
* `GetWorkgroupMemberList` - List the workgroup members
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
