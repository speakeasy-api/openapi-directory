# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBillingRecipientsRequest;
import org.openapis.openapi.models.operations.GetBillingRecipientsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBillingRecipientsRequest req = new GetBillingRecipientsRequest("corrupti");            

            GetBillingRecipientsResponse res = sdk.contact.getBillingRecipients(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [contact](docs/contact/README.md)

* [getBillingRecipients](docs/contact/README.md#getbillingrecipients) - List Billing Recipients
* [getContactList](docs/contact/README.md#getcontactlist) - List the contacts
* [getContactUserInfo](docs/contact/README.md#getcontactuserinfo) - Contact Info

### [country](docs/country/README.md)

* [getCountryList](docs/country/README.md#getcountrylist) - List all countries

### [deactivationReason](docs/deactivationreason/README.md)

* [getDeactivationReasonList](docs/deactivationreason/README.md#getdeactivationreasonlist) - List all deactivation reasons

### [estimate](docs/estimate/README.md)

* [getEstimate](docs/estimate/README.md#getestimate) - Get a specific estimate of project
* [getEstimateList](docs/estimate/README.md#getestimatelist) - List the Estimates
* [postEstimateJson](docs/estimate/README.md#postestimatejson) - Create a Estimate
* [postEstimateRaw](docs/estimate/README.md#postestimateraw) - Create a Estimate

### [exchangeRate](docs/exchangerate/README.md)

* [getExchangeRateList](docs/exchangerate/README.md#getexchangeratelist) - Get Exchange Rate List
* [postExchangeRateJson](docs/exchangerate/README.md#postexchangeratejson) - Create Exchange Rates
* [postExchangeRateRaw](docs/exchangerate/README.md#postexchangerateraw) - Create Exchange Rates

### [file](docs/file/README.md)

* [getFile](docs/file/README.md#getfile) - Get File from Project.  Works for Regular and Remote Files
* [getFileTags](docs/file/README.md#getfiletags) - List Tags from Workgroup and Project.
* [getFiles](docs/file/README.md#getfiles) - List Files from Project.  Works for Regular and Remote Files
* [uploadFile](docs/file/README.md#uploadfile) - Upload File to Project.  A multipart/form-data request with a name "file"

### [invoice](docs/invoice/README.md)

* [getInvoice](docs/invoice/README.md#getinvoice) - List a specific invoice of project Level
* [getInvoiceFiles](docs/invoice/README.md#getinvoicefiles) - List files of invoice Level
* [getInvoices](docs/invoice/README.md#getinvoices) - List invoices by a specific order

### [myInfo](docs/myinfo/README.md)

* [getAutomaticInvitationList](docs/myinfo/README.md#getautomaticinvitationlist) - List current user's automatic invitations info 
* [getTeamTemplateDetail](docs/myinfo/README.md#getteamtemplatedetail) - Get current user's team template detal info 
* [getTeamTemplateList](docs/myinfo/README.md#getteamtemplatelist) - List current user's team templates info 
* [uploadProfileImage](docs/myinfo/README.md#uploadprofileimage) - Upload Profile Image.  A multipart/form-data request with a name "file"

### [order](docs/order/README.md)

* [getBuyOrder](docs/order/README.md#getbuyorder) - Get a specific buy order
* [getBuyOrderList](docs/order/README.md#getbuyorderlist) - List the buy orders
* [getBuyOrderListOfWorkgroup](docs/order/README.md#getbuyorderlistofworkgroup) - List the buy orders of workgroup
* [getBuyOrderOfWorkgroup](docs/order/README.md#getbuyorderofworkgroup) - Get a specific buy order of workgroup
* [getOrder](docs/order/README.md#getorder) - Get a specific buy/sell order
* [getSellOrder](docs/order/README.md#getsellorder) - Get a specific sell order
* [getSellOrderList](docs/order/README.md#getsellorderlist) - List the sell orders
* [getSellOrderListOfWorkgroup](docs/order/README.md#getsellorderlistofworkgroup) - List the sell orders of workgrop
* [getSellOrderOfWorkgroup](docs/order/README.md#getsellorderofworkgroup) - Get a specific sell order
* [postBuyOrderJson](docs/order/README.md#postbuyorderjson) - Create a quick buy order
* [postBuyOrderRaw](docs/order/README.md#postbuyorderraw) - Create a quick buy order
* [putBuyOrderJson](docs/order/README.md#putbuyorderjson) - Update a specific buy order
* [putBuyOrderRaw](docs/order/README.md#putbuyorderraw) - Update a specific buy order
* [putSellOrderJson](docs/order/README.md#putsellorderjson) - Update / Accept or Reject a specific sell order
* [putSellOrderRaw](docs/order/README.md#putsellorderraw) - Update / Accept or Reject a specific sell order

### [project](docs/project/README.md)

* [attachProjectJson](docs/project/README.md#attachprojectjson) - Attach children projects to specific Project
* [attachProjectRaw](docs/project/README.md#attachprojectraw) - Attach children projects to specific Project
* [deleteProject](docs/project/README.md#deleteproject) - Archieve a specific Project
* [getProject](docs/project/README.md#getproject) - Get a specific Project
* [getProjectList](docs/project/README.md#getprojectlist) - List the projects
* [patchProjectJson](docs/project/README.md#patchprojectjson) - Patch a specific Project
* [patchProjectRaw](docs/project/README.md#patchprojectraw) - Patch a specific Project
* [postProjectJson](docs/project/README.md#postprojectjson) - Create a Project
* [postProjectRaw](docs/project/README.md#postprojectraw) - Create a Project
* [putProjectJson](docs/project/README.md#putprojectjson) - Update a specific Project
* [putProjectRaw](docs/project/README.md#putprojectraw) - Update a specific Project

### [projectCategory](docs/projectcategory/README.md)

* [getProjectCategoryList](docs/projectcategory/README.md#getprojectcategorylist) - List the project categories
* [getProjectCategoryListOfClient](docs/projectcategory/README.md#getprojectcategorylistofclient) - List the project categories of client side

### [projectStatus](docs/projectstatus/README.md)

* [getProjectStatus](docs/projectstatus/README.md#getprojectstatus) - List the project status
* [getProjectStatusOfClient](docs/projectstatus/README.md#getprojectstatusofclient) - List the project status of client

### [quote](docs/quote/README.md)

* [getQuote](docs/quote/README.md#getquote) - Get a specific quote of project
* [getQuoteList](docs/quote/README.md#getquotelist) - List the quotes
* [getQuoteStateList](docs/quote/README.md#getquotestatelist) - List the quote states
* [getV1WorkgroupsWorkgroupIdQuotes](docs/quote/README.md#getv1workgroupsworkgroupidquotes) - List the quotes of workgroup level
* [putQuoteJson](docs/quote/README.md#putquotejson) - Accept / Reject a Quote
* [putQuoteRaw](docs/quote/README.md#putquoteraw) - Accept / Reject a Quote

### [rfe](docs/rfe/README.md)

* [getRfe](docs/rfe/README.md#getrfe) - Get a specific Rfe
* [getRfeList](docs/rfe/README.md#getrfelist) - List the RFES
* [postRfeJson](docs/rfe/README.md#postrfejson) - Create a RFE
* [postRfeRaw](docs/rfe/README.md#postrferaw) - Create a RFE

### [rfq](docs/rfq/README.md)

* [getRfq](docs/rfq/README.md#getrfq) - Get a specific Rfq
* [getRfqList](docs/rfq/README.md#getrfqlist) - List the rfqs

### [shipment](docs/shipment/README.md)

* [getShipment](docs/shipment/README.md#getshipment) - Get a specific shipment.
* [getShipmentList](docs/shipment/README.md#getshipmentlist) - List shipments of project
* [postShipmentJson](docs/shipment/README.md#postshipmentjson) - Create a shipment
* [postShipmentRaw](docs/shipment/README.md#postshipmentraw) - Create a shipment
* [putShipmentLocationJson](docs/shipment/README.md#putshipmentlocationjson) - Update a specific shipment location
* [putShipmentLocationRaw](docs/shipment/README.md#putshipmentlocationraw) - Update a specific shipment location

### [spec](docs/spec/README.md)

* [getProductTypeListOfWorkgroup](docs/spec/README.md#getproducttypelistofworkgroup) - Get product type of workgroup level
* [getSpec](docs/spec/README.md#getspec) - List a specific spec of project Level
* [getSpecList](docs/spec/README.md#getspeclist) - List specs of project Level
* [getSpecProductTypeListOfWorkgroup](docs/spec/README.md#getspecproducttypelistofworkgroup) - Get product type of spec level by workgroupId
* [getSpecTypeFields](docs/spec/README.md#getspectypefields) - Get Spec Type Fields
* [getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId](docs/spec/README.md#getv1workgroupsworkgroupidprojectsprojectidspecsspecid) - List a specific spec of project Level
* [getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields](docs/spec/README.md#getv1workgroupsworkgroupidspectypesspectypeidspectypefields) - Get Spec Type Fields
* [postSpecProductTypeListOfWorkgroupJson](docs/spec/README.md#postspecproducttypelistofworkgroupjson) - Register product types for spec types
* [postSpecProductTypeListOfWorkgroupRaw](docs/spec/README.md#postspecproducttypelistofworkgroupraw) - Register product types for spec types
* [postSpecJson](docs/spec/README.md#postspecjson) - Create a Spec
* [postSpecRaw](docs/spec/README.md#postspecraw) - Create a Spec
* [putSpecJson](docs/spec/README.md#putspecjson) - Update a specific Spec
* [putSpecRaw](docs/spec/README.md#putspecraw) - Update a specific Spec
* [putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJson](docs/spec/README.md#putv1workgroupsworkgroupidprojectsprojectidspecsspecidjson) - Update a specific Spec
* [putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRaw](docs/spec/README.md#putv1workgroupsworkgroupidprojectsprojectidspecsspecidraw) - Update a specific Spec

### [specTemplate](docs/spectemplate/README.md)

* [getSpecTemplate](docs/spectemplate/README.md#getspectemplate) - Get a specific Spec Template
* [getSpecTemplateList](docs/spectemplate/README.md#getspectemplatelist) - List Spec Templates of Workgroup Level 

### [task](docs/task/README.md)

* [taskPriorityList](docs/task/README.md#taskprioritylist) - Get default task priority list
* [getCustomTaskTypesOfWg](docs/task/README.md#getcustomtasktypesofwg) - Get custom task types of workgroup level
* [getDefaultTaskStatusList](docs/task/README.md#getdefaulttaskstatuslist) - Get default task status list
* [getTaskListOfProject](docs/task/README.md#gettasklistofproject) - Get task list of project level
* [getTaskListOfWorkgroup](docs/task/README.md#gettasklistofworkgroup) - Get task list of workgroup level
* [getTaskOfProject](docs/task/README.md#gettaskofproject) - Get a sepcific task of project level
* [getTaskOfWorkgroup](docs/task/README.md#gettaskofworkgroup) - Get a sepcific task of workgroup level
* [getTaskTypesOfWorkgroup](docs/task/README.md#gettasktypesofworkgroup) - Get task types of workgroup level
* [getWgTaskStatusListOfWorkgroup](docs/task/README.md#getwgtaskstatuslistofworkgroup) - Get custom task status of workgroup level
* [postTaskForProjectJson](docs/task/README.md#posttaskforprojectjson) - Create a new task
* [postTaskForProjectRaw](docs/task/README.md#posttaskforprojectraw) - Create a new task

### [teamMember](docs/teammember/README.md)

* [deleteTeamMemberOfProject](docs/teammember/README.md#deleteteammemberofproject) - Delete a team member for the specific project.
* [getTeamMemberListOfClientProject](docs/teammember/README.md#getteammemberlistofclientproject) - List team member of client project side.
* [getTeamMemberListOfProject](docs/teammember/README.md#getteammemberlistofproject) - List team member of project.
* [postTeamMemberOfProjectJson](docs/teammember/README.md#postteammemberofprojectjson) - Invite a team member or all the members of team template for the specific project.
* [postTeamMemberOfProjectRaw](docs/teammember/README.md#postteammemberofprojectraw) - Invite a team member or all the members of team template for the specific project.
* [postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJson](docs/teammember/README.md#postv1workgroupsworkgroupidprojectsprojectidteammembersjson) - Deprecated, please use 1.1 Version
* [postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRaw](docs/teammember/README.md#postv1workgroupsworkgroupidprojectsprojectidteammembersraw) - Deprecated, please use 1.1 Version

### [teamMemberRole](docs/teammemberrole/README.md)

* [getMemberRoles](docs/teammemberrole/README.md#getmemberroles) - List all the role options for the user

### [timeCard](docs/timecard/README.md)

* [getMyTimeCard](docs/timecard/README.md#getmytimecard) - Get a specific my time cards
* [getMyTimeCardList](docs/timecard/README.md#getmytimecardlist) - List my time cards
* [getReceivedTimeCard](docs/timecard/README.md#getreceivedtimecard) - List a specific received time cards
* [getReceivedTimeCardList](docs/timecard/README.md#getreceivedtimecardlist) - List received time cards

### [userFields](docs/userfields/README.md)

* [getProjectHomeUserFieldListOfClient](docs/userfields/README.md#getprojecthomeuserfieldlistofclient) - List projec home user fields of client workgroup
* [getProjectHomeUserFieldsList](docs/userfields/README.md#getprojecthomeuserfieldslist) - List projec home user fields

### [workgroup](docs/workgroup/README.md)

* [getClientWorkgroupList](docs/workgroup/README.md#getclientworkgrouplist) - List client workgroups
* [getSpecificClientWorkgroup](docs/workgroup/README.md#getspecificclientworkgroup) - Get a specific client workgroups
* [getSupplierWorkgroupDetail](docs/workgroup/README.md#getsupplierworkgroupdetail) - Get the specific supplier of My Group
* [getSupplierWorkgroupList](docs/workgroup/README.md#getsupplierworkgrouplist) - List supplier workgroups
* [getWorkgroupDetail](docs/workgroup/README.md#getworkgroupdetail) - Detail workgroup info
* [getWorkgroupList](docs/workgroup/README.md#getworkgrouplist) - List the workgroups
* [putWorkgroupJson](docs/workgroup/README.md#putworkgroupjson) - Update a specific Workgroup
* [putWorkgroupRaw](docs/workgroup/README.md#putworkgroupraw) - Update a specific Workgroup

### [workgroupMembers](docs/workgroupmembers/README.md)

* [getWorkgroupMemberInfo](docs/workgroupmembers/README.md#getworkgroupmemberinfo) - Workgroup Member Info
* [getWorkgroupMemberList](docs/workgroupmembers/README.md#getworkgroupmemberlist) - List the workgroup members
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
