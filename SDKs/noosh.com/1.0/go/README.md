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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Contact.GetBillingRecipients(ctx, operations.GetBillingRecipientsRequest{
        WorkgroupID: "corrupti",
    })
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
## Available Resources and Operations


### [Contact](docs/contact/README.md)

* [GetBillingRecipients](docs/contact/README.md#getbillingrecipients) - List Billing Recipients
* [GetContactList](docs/contact/README.md#getcontactlist) - List the contacts
* [GetContactUserInfo](docs/contact/README.md#getcontactuserinfo) - Contact Info

### [Country](docs/country/README.md)

* [GetCountryList](docs/country/README.md#getcountrylist) - List all countries

### [DeactivationReason](docs/deactivationreason/README.md)

* [GetDeactivationReasonList](docs/deactivationreason/README.md#getdeactivationreasonlist) - List all deactivation reasons

### [Estimate](docs/estimate/README.md)

* [GetEstimate](docs/estimate/README.md#getestimate) - Get a specific estimate of project
* [GetEstimateList](docs/estimate/README.md#getestimatelist) - List the Estimates
* [PostEstimateJSON](docs/estimate/README.md#postestimatejson) - Create a Estimate
* [PostEstimateRaw](docs/estimate/README.md#postestimateraw) - Create a Estimate

### [ExchangeRate](docs/exchangerate/README.md)

* [GetExchangeRateList](docs/exchangerate/README.md#getexchangeratelist) - Get Exchange Rate List
* [PostExchangeRateJSON](docs/exchangerate/README.md#postexchangeratejson) - Create Exchange Rates
* [PostExchangeRateRaw](docs/exchangerate/README.md#postexchangerateraw) - Create Exchange Rates

### [File](docs/file/README.md)

* [GetFile](docs/file/README.md#getfile) - Get File from Project.  Works for Regular and Remote Files
* [GetFileTags](docs/file/README.md#getfiletags) - List Tags from Workgroup and Project.
* [GetFiles](docs/file/README.md#getfiles) - List Files from Project.  Works for Regular and Remote Files
* [UploadFile](docs/file/README.md#uploadfile) - Upload File to Project.  A multipart/form-data request with a name "file"

### [Invoice](docs/invoice/README.md)

* [GetInvoice](docs/invoice/README.md#getinvoice) - List a specific invoice of project Level
* [GetInvoiceFiles](docs/invoice/README.md#getinvoicefiles) - List files of invoice Level
* [GetInvoices](docs/invoice/README.md#getinvoices) - List invoices by a specific order

### [MyInfo](docs/myinfo/README.md)

* [GetAutomaticInvitationList](docs/myinfo/README.md#getautomaticinvitationlist) - List current user's automatic invitations info 
* [GetTeamTemplateDetail](docs/myinfo/README.md#getteamtemplatedetail) - Get current user's team template detal info 
* [GetTeamTemplateList](docs/myinfo/README.md#getteamtemplatelist) - List current user's team templates info 
* [UploadProfileImage](docs/myinfo/README.md#uploadprofileimage) - Upload Profile Image.  A multipart/form-data request with a name "file"

### [Order](docs/order/README.md)

* [GetBuyOrder](docs/order/README.md#getbuyorder) - Get a specific buy order
* [GetBuyOrderList](docs/order/README.md#getbuyorderlist) - List the buy orders
* [GetBuyOrderListOfWorkgroup](docs/order/README.md#getbuyorderlistofworkgroup) - List the buy orders of workgroup
* [GetBuyOrderOfWorkgroup](docs/order/README.md#getbuyorderofworkgroup) - Get a specific buy order of workgroup
* [GetOrder](docs/order/README.md#getorder) - Get a specific buy/sell order
* [GetSellOrder](docs/order/README.md#getsellorder) - Get a specific sell order
* [GetSellOrderList](docs/order/README.md#getsellorderlist) - List the sell orders
* [GetSellOrderListOfWorkgroup](docs/order/README.md#getsellorderlistofworkgroup) - List the sell orders of workgrop
* [GetSellOrderOfWorkgroup](docs/order/README.md#getsellorderofworkgroup) - Get a specific sell order
* [PostBuyOrderJSON](docs/order/README.md#postbuyorderjson) - Create a quick buy order
* [PostBuyOrderRaw](docs/order/README.md#postbuyorderraw) - Create a quick buy order
* [PutBuyOrderJSON](docs/order/README.md#putbuyorderjson) - Update a specific buy order
* [PutBuyOrderRaw](docs/order/README.md#putbuyorderraw) - Update a specific buy order
* [PutSellOrderJSON](docs/order/README.md#putsellorderjson) - Update / Accept or Reject a specific sell order
* [PutSellOrderRaw](docs/order/README.md#putsellorderraw) - Update / Accept or Reject a specific sell order

### [Project](docs/project/README.md)

* [AttachProjectJSON](docs/project/README.md#attachprojectjson) - Attach children projects to specific Project
* [AttachProjectRaw](docs/project/README.md#attachprojectraw) - Attach children projects to specific Project
* [DeleteProject](docs/project/README.md#deleteproject) - Archieve a specific Project
* [GetProject](docs/project/README.md#getproject) - Get a specific Project
* [GetProjectList](docs/project/README.md#getprojectlist) - List the projects
* [PatchProjectJSON](docs/project/README.md#patchprojectjson) - Patch a specific Project
* [PatchProjectRaw](docs/project/README.md#patchprojectraw) - Patch a specific Project
* [PostProjectJSON](docs/project/README.md#postprojectjson) - Create a Project
* [PostProjectRaw](docs/project/README.md#postprojectraw) - Create a Project
* [PutProjectJSON](docs/project/README.md#putprojectjson) - Update a specific Project
* [PutProjectRaw](docs/project/README.md#putprojectraw) - Update a specific Project

### [ProjectCategory](docs/projectcategory/README.md)

* [GetProjectCategoryList](docs/projectcategory/README.md#getprojectcategorylist) - List the project categories
* [GetProjectCategoryListOfClient](docs/projectcategory/README.md#getprojectcategorylistofclient) - List the project categories of client side

### [ProjectStatus](docs/projectstatus/README.md)

* [GetProjectStatus](docs/projectstatus/README.md#getprojectstatus) - List the project status
* [GetProjectStatusOfClient](docs/projectstatus/README.md#getprojectstatusofclient) - List the project status of client

### [Quote](docs/quote/README.md)

* [GetQuote](docs/quote/README.md#getquote) - Get a specific quote of project
* [GetQuoteList](docs/quote/README.md#getquotelist) - List the quotes
* [GetQuoteStateList](docs/quote/README.md#getquotestatelist) - List the quote states
* [GetV1WorkgroupsWorkgroupIDQuotes](docs/quote/README.md#getv1workgroupsworkgroupidquotes) - List the quotes of workgroup level
* [PutQuoteJSON](docs/quote/README.md#putquotejson) - Accept / Reject a Quote
* [PutQuoteRaw](docs/quote/README.md#putquoteraw) - Accept / Reject a Quote

### [Rfe](docs/rfe/README.md)

* [GetRfe](docs/rfe/README.md#getrfe) - Get a specific Rfe
* [GetRfeList](docs/rfe/README.md#getrfelist) - List the RFES
* [PostRfeJSON](docs/rfe/README.md#postrfejson) - Create a RFE
* [PostRfeRaw](docs/rfe/README.md#postrferaw) - Create a RFE

### [Rfq](docs/rfq/README.md)

* [GetRfq](docs/rfq/README.md#getrfq) - Get a specific Rfq
* [GetRfqList](docs/rfq/README.md#getrfqlist) - List the rfqs

### [Shipment](docs/shipment/README.md)

* [GetShipment](docs/shipment/README.md#getshipment) - Get a specific shipment.
* [GetShipmentList](docs/shipment/README.md#getshipmentlist) - List shipments of project
* [PostShipmentJSON](docs/shipment/README.md#postshipmentjson) - Create a shipment
* [PostShipmentRaw](docs/shipment/README.md#postshipmentraw) - Create a shipment
* [PutShipmentLocationJSON](docs/shipment/README.md#putshipmentlocationjson) - Update a specific shipment location
* [PutShipmentLocationRaw](docs/shipment/README.md#putshipmentlocationraw) - Update a specific shipment location

### [Spec](docs/spec/README.md)

* [GetProductTypeListOfWorkgroup](docs/spec/README.md#getproducttypelistofworkgroup) - Get product type of workgroup level
* [GetSpec](docs/spec/README.md#getspec) - List a specific spec of project Level
* [GetSpecList](docs/spec/README.md#getspeclist) - List specs of project Level
* [GetSpecProductTypeListOfWorkgroup](docs/spec/README.md#getspecproducttypelistofworkgroup) - Get product type of spec level by workgroupId
* [GetSpecTypeFields](docs/spec/README.md#getspectypefields) - Get Spec Type Fields
* [GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecID](docs/spec/README.md#getv1workgroupsworkgroupidprojectsprojectidspecsspecid) - List a specific spec of project Level
* [GetV1WorkgroupsWorkgroupIDSpecTypesSpecTypeIDSpecTypeFields](docs/spec/README.md#getv1workgroupsworkgroupidspectypesspectypeidspectypefields) - Get Spec Type Fields
* [PostSpecProductTypeListOfWorkgroupJSON](docs/spec/README.md#postspecproducttypelistofworkgroupjson) - Register product types for spec types
* [PostSpecProductTypeListOfWorkgroupRaw](docs/spec/README.md#postspecproducttypelistofworkgroupraw) - Register product types for spec types
* [PostSpecJSON](docs/spec/README.md#postspecjson) - Create a Spec
* [PostSpecRaw](docs/spec/README.md#postspecraw) - Create a Spec
* [PutSpecJSON](docs/spec/README.md#putspecjson) - Update a specific Spec
* [PutSpecRaw](docs/spec/README.md#putspecraw) - Update a specific Spec
* [PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDJSON](docs/spec/README.md#putv1workgroupsworkgroupidprojectsprojectidspecsspecidjson) - Update a specific Spec
* [PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRaw](docs/spec/README.md#putv1workgroupsworkgroupidprojectsprojectidspecsspecidraw) - Update a specific Spec

### [SpecTemplate](docs/spectemplate/README.md)

* [GetSpecTemplate](docs/spectemplate/README.md#getspectemplate) - Get a specific Spec Template
* [GetSpecTemplateList](docs/spectemplate/README.md#getspectemplatelist) - List Spec Templates of Workgroup Level 

### [Task](docs/task/README.md)

* [TaskPriorityList](docs/task/README.md#taskprioritylist) - Get default task priority list
* [GetCustomTaskTypesOfWg](docs/task/README.md#getcustomtasktypesofwg) - Get custom task types of workgroup level
* [GetDefaultTaskStatusList](docs/task/README.md#getdefaulttaskstatuslist) - Get default task status list
* [GetTaskListOfProject](docs/task/README.md#gettasklistofproject) - Get task list of project level
* [GetTaskListOfWorkgroup](docs/task/README.md#gettasklistofworkgroup) - Get task list of workgroup level
* [GetTaskOfProject](docs/task/README.md#gettaskofproject) - Get a sepcific task of project level
* [GetTaskOfWorkgroup](docs/task/README.md#gettaskofworkgroup) - Get a sepcific task of workgroup level
* [GetTaskTypesOfWorkgroup](docs/task/README.md#gettasktypesofworkgroup) - Get task types of workgroup level
* [GetWgTaskStatusListOfWorkgroup](docs/task/README.md#getwgtaskstatuslistofworkgroup) - Get custom task status of workgroup level
* [PostTaskForProjectJSON](docs/task/README.md#posttaskforprojectjson) - Create a new task
* [PostTaskForProjectRaw](docs/task/README.md#posttaskforprojectraw) - Create a new task

### [TeamMember](docs/teammember/README.md)

* [DeleteTeamMemberOfProject](docs/teammember/README.md#deleteteammemberofproject) - Delete a team member for the specific project.
* [GetTeamMemberListOfClientProject](docs/teammember/README.md#getteammemberlistofclientproject) - List team member of client project side.
* [GetTeamMemberListOfProject](docs/teammember/README.md#getteammemberlistofproject) - List team member of project.
* [PostTeamMemberOfProjectJSON](docs/teammember/README.md#postteammemberofprojectjson) - Invite a team member or all the members of team template for the specific project.
* [PostTeamMemberOfProjectRaw](docs/teammember/README.md#postteammemberofprojectraw) - Invite a team member or all the members of team template for the specific project.
* [PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersJSON](docs/teammember/README.md#postv1workgroupsworkgroupidprojectsprojectidteammembersjson) - Deprecated, please use 1.1 Version
* [PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersRaw](docs/teammember/README.md#postv1workgroupsworkgroupidprojectsprojectidteammembersraw) - Deprecated, please use 1.1 Version

### [TeamMemberRole](docs/teammemberrole/README.md)

* [GetMemberRoles](docs/teammemberrole/README.md#getmemberroles) - List all the role options for the user

### [TimeCard](docs/timecard/README.md)

* [GetMyTimeCard](docs/timecard/README.md#getmytimecard) - Get a specific my time cards
* [GetMyTimeCardList](docs/timecard/README.md#getmytimecardlist) - List my time cards
* [GetReceivedTimeCard](docs/timecard/README.md#getreceivedtimecard) - List a specific received time cards
* [GetReceivedTimeCardList](docs/timecard/README.md#getreceivedtimecardlist) - List received time cards

### [UserFields](docs/userfields/README.md)

* [GetProjectHomeUserFieldListOfClient](docs/userfields/README.md#getprojecthomeuserfieldlistofclient) - List projec home user fields of client workgroup
* [GetProjectHomeUserFieldsList](docs/userfields/README.md#getprojecthomeuserfieldslist) - List projec home user fields

### [Workgroup](docs/workgroup/README.md)

* [GetClientWorkgroupList](docs/workgroup/README.md#getclientworkgrouplist) - List client workgroups
* [GetSpecificClientWorkgroup](docs/workgroup/README.md#getspecificclientworkgroup) - Get a specific client workgroups
* [GetSupplierWorkgroupDetail](docs/workgroup/README.md#getsupplierworkgroupdetail) - Get the specific supplier of My Group
* [GetSupplierWorkgroupList](docs/workgroup/README.md#getsupplierworkgrouplist) - List supplier workgroups
* [GetWorkgroupDetail](docs/workgroup/README.md#getworkgroupdetail) - Detail workgroup info
* [GetWorkgroupList](docs/workgroup/README.md#getworkgrouplist) - List the workgroups
* [PutWorkgroupJSON](docs/workgroup/README.md#putworkgroupjson) - Update a specific Workgroup
* [PutWorkgroupRaw](docs/workgroup/README.md#putworkgroupraw) - Update a specific Workgroup

### [WorkgroupMembers](docs/workgroupmembers/README.md)

* [GetWorkgroupMemberInfo](docs/workgroupmembers/README.md#getworkgroupmemberinfo) - Workgroup Member Info
* [GetWorkgroupMemberList](docs/workgroupmembers/README.md#getworkgroupmemberlist) - List the workgroup members
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
