# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### contact

* `getBillingRecipients` - List Billing Recipients
* `getContactList` - List the contacts
* `getContactUserInfo` - Contact Info

### country

* `getCountryList` - List all countries

### deactivationReason

* `getDeactivationReasonList` - List all deactivation reasons

### estimate

* `getEstimate` - Get a specific estimate of project
* `getEstimateList` - List the Estimates
* `postEstimateJson` - Create a Estimate
* `postEstimateRaw` - Create a Estimate

### exchangeRate

* `getExchangeRateList` - Get Exchange Rate List
* `postExchangeRateJson` - Create Exchange Rates
* `postExchangeRateRaw` - Create Exchange Rates

### file

* `getFile` - Get File from Project.  Works for Regular and Remote Files
* `getFileTags` - List Tags from Workgroup and Project.
* `getFiles` - List Files from Project.  Works for Regular and Remote Files
* `uploadFile` - Upload File to Project.  A multipart/form-data request with a name "file"

### invoice

* `getInvoice` - List a specific invoice of project Level
* `getInvoiceFiles` - List files of invoice Level
* `getInvoices` - List invoices by a specific order

### myInfo

* `getAutomaticInvitationList` - List current user's automatic invitations info 
* `getTeamTemplateDetail` - Get current user's team template detal info 
* `getTeamTemplateList` - List current user's team templates info 
* `uploadProfileImage` - Upload Profile Image.  A multipart/form-data request with a name "file"

### order

* `getBuyOrder` - Get a specific buy order
* `getBuyOrderList` - List the buy orders
* `getBuyOrderListOfWorkgroup` - List the buy orders of workgroup
* `getBuyOrderOfWorkgroup` - Get a specific buy order of workgroup
* `getOrder` - Get a specific buy/sell order
* `getSellOrder` - Get a specific sell order
* `getSellOrderList` - List the sell orders
* `getSellOrderListOfWorkgroup` - List the sell orders of workgrop
* `getSellOrderOfWorkgroup` - Get a specific sell order
* `postBuyOrderJson` - Create a quick buy order
* `postBuyOrderRaw` - Create a quick buy order
* `putBuyOrderJson` - Update a specific buy order
* `putBuyOrderRaw` - Update a specific buy order
* `putSellOrderJson` - Update / Accept or Reject a specific sell order
* `putSellOrderRaw` - Update / Accept or Reject a specific sell order

### project

* `attachProjectJson` - Attach children projects to specific Project
* `attachProjectRaw` - Attach children projects to specific Project
* `deleteProject` - Archieve a specific Project
* `getProject` - Get a specific Project
* `getProjectList` - List the projects
* `patchProjectJson` - Patch a specific Project
* `patchProjectRaw` - Patch a specific Project
* `postProjectJson` - Create a Project
* `postProjectRaw` - Create a Project
* `putProjectJson` - Update a specific Project
* `putProjectRaw` - Update a specific Project

### projectCategory

* `getProjectCategoryList` - List the project categories
* `getProjectCategoryListOfClient` - List the project categories of client side

### projectStatus

* `getProjectStatus` - List the project status
* `getProjectStatusOfClient` - List the project status of client

### quote

* `getQuote` - Get a specific quote of project
* `getQuoteList` - List the quotes
* `getQuoteStateList` - List the quote states
* `getV1WorkgroupsWorkgroupIdQuotes` - List the quotes of workgroup level
* `putQuoteJson` - Accept / Reject a Quote
* `putQuoteRaw` - Accept / Reject a Quote

### rfe

* `getRfe` - Get a specific Rfe
* `getRfeList` - List the RFES
* `postRfeJson` - Create a RFE
* `postRfeRaw` - Create a RFE

### rfq

* `getRfq` - Get a specific Rfq
* `getRfqList` - List the rfqs

### shipment

* `getShipment` - Get a specific shipment.
* `getShipmentList` - List shipments of project
* `postShipmentJson` - Create a shipment
* `postShipmentRaw` - Create a shipment
* `putShipmentLocationJson` - Update a specific shipment location
* `putShipmentLocationRaw` - Update a specific shipment location

### spec

* `getProductTypeListOfWorkgroup` - Get product type of workgroup level
* `getSpec` - List a specific spec of project Level
* `getSpecList` - List specs of project Level
* `getSpecProductTypeListOfWorkgroup` - Get product type of spec level by workgroupId
* `getSpecTypeFields` - Get Spec Type Fields
* `getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId` - List a specific spec of project Level
* `getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields` - Get Spec Type Fields
* `postSpecProductTypeListOfWorkgroupJson` - Register product types for spec types
* `postSpecProductTypeListOfWorkgroupRaw` - Register product types for spec types
* `postSpecJson` - Create a Spec
* `postSpecRaw` - Create a Spec
* `putSpecJson` - Update a specific Spec
* `putSpecRaw` - Update a specific Spec
* `putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJson` - Update a specific Spec
* `putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRaw` - Update a specific Spec

### specTemplate

* `getSpecTemplate` - Get a specific Spec Template
* `getSpecTemplateList` - List Spec Templates of Workgroup Level 

### task

* `taskPriorityList` - Get default task priority list
* `getCustomTaskTypesOfWg` - Get custom task types of workgroup level
* `getDefaultTaskStatusList` - Get default task status list
* `getTaskListOfProject` - Get task list of project level
* `getTaskListOfWorkgroup` - Get task list of workgroup level
* `getTaskOfProject` - Get a sepcific task of project level
* `getTaskOfWorkgroup` - Get a sepcific task of workgroup level
* `getTaskTypesOfWorkgroup` - Get task types of workgroup level
* `getWgTaskStatusListOfWorkgroup` - Get custom task status of workgroup level
* `postTaskForProjectJson` - Create a new task
* `postTaskForProjectRaw` - Create a new task

### teamMember

* `deleteTeamMemberOfProject` - Delete a team member for the specific project.
* `getTeamMemberListOfClientProject` - List team member of client project side.
* `getTeamMemberListOfProject` - List team member of project.
* `postTeamMemberOfProjectJson` - Invite a team member or all the members of team template for the specific project.
* `postTeamMemberOfProjectRaw` - Invite a team member or all the members of team template for the specific project.
* `postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJson` - Deprecated, please use 1.1 Version
* `postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRaw` - Deprecated, please use 1.1 Version

### teamMemberRole

* `getMemberRoles` - List all the role options for the user

### timeCard

* `getMyTimeCard` - Get a specific my time cards
* `getMyTimeCardList` - List my time cards
* `getReceivedTimeCard` - List a specific received time cards
* `getReceivedTimeCardList` - List received time cards

### userFields

* `getProjectHomeUserFieldListOfClient` - List projec home user fields of client workgroup
* `getProjectHomeUserFieldsList` - List projec home user fields

### workgroup

* `getClientWorkgroupList` - List client workgroups
* `getSpecificClientWorkgroup` - Get a specific client workgroups
* `getSupplierWorkgroupDetail` - Get the specific supplier of My Group
* `getSupplierWorkgroupList` - List supplier workgroups
* `getWorkgroupDetail` - Detail workgroup info
* `getWorkgroupList` - List the workgroups
* `putWorkgroupJson` - Update a specific Workgroup
* `putWorkgroupRaw` - Update a specific Workgroup

### workgroupMembers

* `getWorkgroupMemberInfo` - Workgroup Member Info
* `getWorkgroupMemberList` - List the workgroup members
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
