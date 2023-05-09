# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/rubrikinc.github.io/v1/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootArchive.DisableArchivalLocation(ctx, operations.DisableArchivalLocationRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    })
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


### [RootArchive](docs/rootarchive/README.md)

* [DisableArchivalLocation](docs/rootarchive/README.md#disablearchivallocation) - Disable location for archival and modification operations
* [EnableArchivalLocation](docs/rootarchive/README.md#enablearchivallocation) - Enable archival location for archival and modification operations
* [GetAwsAccountID](docs/rootarchive/README.md#getawsaccountid) - Get the AWS account ID of an AWS S3 archival location
* [RefreshArchivalLocationDataSources](docs/rootarchive/README.md#refresharchivallocationdatasources) - Refresh archive information for a list of data sources

### [RootAuthorization](docs/rootauthorization/README.md)

* [DeleteAuthzCache](docs/rootauthorization/README.md#deleteauthzcache) - Clear cached authorization information

### [RootBackup](docs/rootbackup/README.md)

* [CreateBackupRemediationAsyncTask](docs/rootbackup/README.md#createbackupremediationasynctask) - Reschedule unsuccessful backup tasks
* [GetBackupRemediationAsyncTaskStatus](docs/rootbackup/README.md#getbackupremediationasynctaskstatus) - Get status of reschedule attempt
* [GetBackupVerificationAsyncRequestStatus](docs/rootbackup/README.md#getbackupverificationasyncrequeststatus) - Get asynchronous request details for Backup Verification
* [VerifySnapshot](docs/rootbackup/README.md#verifysnapshot) - Trigger a job for snapshot verification

### [RootBlackoutWindow](docs/rootblackoutwindow/README.md)

* [GetBlackoutWindowStatus](docs/rootblackoutwindow/README.md#getblackoutwindowstatus) - Get current status of global blackout window
* [ToggleBlackoutWindow](docs/rootblackoutwindow/README.md#toggleblackoutwindow) - Starts or stops the global blackout window in local Rubrik cluster

### [RootCertificate](docs/rootcertificate/README.md)

* [DeleteCertificate](docs/rootcertificate/README.md#deletecertificate) - Delete imported certificate object
* [ExportCertificate](docs/rootcertificate/README.md#exportcertificate) - Get a certificate summary to export
* [ImportCertificate](docs/rootcertificate/README.md#importcertificate) - Import a certificate
* [QueryCertificates](docs/rootcertificate/README.md#querycertificates) - Get all certificates
* [UpdateCertificate](docs/rootcertificate/README.md#updatecertificate) - Update a certificate entry

### [RootCertificateAgent](docs/rootcertificateagent/README.md)

* [MarkAgentSecondaryCertificate](docs/rootcertificateagent/README.md#markagentsecondarycertificate) - Mark a certificate to be added to agents
* [QueryAgentSecondaryCertificate](docs/rootcertificateagent/README.md#queryagentsecondarycertificate) - Get all potential agent secondary cluster certificates
* [UnmarkAgentSecondaryCertificate](docs/rootcertificateagent/README.md#unmarkagentsecondarycertificate) - Unmark a certificate that was previously marked

### [RootCloudUtilization](docs/rootcloudutilization/README.md)

* [DoCloudOutForecast](docs/rootcloudutilization/README.md#docloudoutforecast) - Forecast of the cloud utilization for CloudOut

### [RootCluster](docs/rootcluster/README.md)

* [AddKmipServer](docs/rootcluster/README.md#addkmipserver) - Add a KMIP server
* [AddSyslogExportRule](docs/rootcluster/README.md#addsyslogexportrule) - Add a new syslog export rule
* [AvailableVersion](docs/rootcluster/README.md#availableversion) - Retrieve CDM versions available for upgrade
* [ChangeClusterNodeHostnames](docs/rootcluster/README.md#changeclusternodehostnames) - Change hostname for nodes in a Rubrik cluster
* [DeleteKmipServer](docs/rootcluster/README.md#deletekmipserver) - Remove the specified KMIP server
* [DeleteSyslogExportRule](docs/rootcluster/README.md#deletesyslogexportrule) - Delete the specified syslog export rule
* [GetAsyncRequestStatusForUpgrade](docs/rootcluster/README.md#getasyncrequeststatusforupgrade) - Get asynchronous request details
* [GetClusterAPIVersion](docs/rootcluster/README.md#getclusterapiversion) - Get cluster REST API version
* [GetClusterCertificate](docs/rootcluster/README.md#getclustercertificate) - Get the cluster certificate
* [GetClusterNodeHostnames](docs/rootcluster/README.md#getclusternodehostnames) - Get the node ID to hostname mapping for all the nodes in a Rubrik cluster

* [GetClusterNodeIds](docs/rootcluster/README.md#getclusternodeids) - Get the name of the nodes in the cluster
* [GetClusterVersion](docs/rootcluster/README.md#getclusterversion) - Get cluster software version
* [GetCorsConfiguration](docs/rootcluster/README.md#getcorsconfiguration) - Get CORS configuration
* [GetEncryptionStatus](docs/rootcluster/README.md#getencryptionstatus) - Get encryption at rest status
* [GetFips](docs/rootcluster/README.md#getfips) - Get FIPS enablement status
* [GetKmipClient](docs/rootcluster/README.md#getkmipclient) - Get the KMIP client configuration
* [GetKmipServer](docs/rootcluster/README.md#getkmipserver) - Get KMIP server information
* [GetPeriodicUpgradePrechecksStatus](docs/rootcluster/README.md#getperiodicupgradeprechecksstatus) - Get the result of the latest run of the upgrade prechecks
* [GetPublicClusterInfo](docs/rootcluster/README.md#getpublicclusterinfo) - Get cluster details
* [GetRubrikSnmpMibDownloadLink](docs/rootcluster/README.md#getrubriksnmpmibdownloadlink) - Get the link for Rubrik SNMP MIB file
* [GetSyslogExportRule](docs/rootcluster/README.md#getsyslogexportrule) - Get the specified syslog export rule
* [GetSyslogExportRules](docs/rootcluster/README.md#getsyslogexportrules) - Get the configured syslog export rules
* [GetSyslogMsgSnmpMibDownloadLink](docs/rootcluster/README.md#getsyslogmsgsnmpmibdownloadlink) - Get the link for SYSLOG-MSG-MIB file
* [GetSyslogTcSnmpMibDownloadLink](docs/rootcluster/README.md#getsyslogtcsnmpmibdownloadlink) - Get the link for SYSLOG-TC-MIB file
* [GetTotpGlobalSetting](docs/rootcluster/README.md#gettotpglobalsetting) - Get global TOTP setting
* [GetTruststores](docs/rootcluster/README.md#gettruststores) - Get summary of all truststores
* [GetWebSignedCertificate](docs/rootcluster/README.md#getwebsignedcertificate) - Get the signed certificate for Web server
* [HasRubrikSupportPortalCredentials](docs/rootcluster/README.md#hasrubriksupportportalcredentials) - Check credentials to the Rubrik support portal
* [ManualDiscover](docs/rootcluster/README.md#manualdiscover) - Manually discover nodes
* [ManualDiscoverIpv4](docs/rootcluster/README.md#manualdiscoveripv4) - Manually discover nodes over IPv4 address
* [MonitorEvents](docs/rootcluster/README.md#monitorevents) - Get event notifications
* [PatchPasswordRequirements](docs/rootcluster/README.md#patchpasswordrequirements) - Set password requirements
* [QueryPasswordRequirements](docs/rootcluster/README.md#querypasswordrequirements) - Get password requirements
* [ResetWebSignedCertificate](docs/rootcluster/README.md#resetwebsignedcertificate) - Reset the signed certificate for Web server
* [RunPeriodicUpgradePrechecks](docs/rootcluster/README.md#runperiodicupgradeprechecks) - Start an on demand run of the prechecks
* [SetKmipClient](docs/rootcluster/README.md#setkmipclient) - Specify KMIP client credentials for nodes
* [SetTruststoreCertificate](docs/rootcluster/README.md#settruststorecertificate) - Set certificates for one or more truststores
* [SetWebSignedCertificate](docs/rootcluster/README.md#setwebsignedcertificate) - Set a signed certificate for Web server
* [StageCdmSoftware](docs/rootcluster/README.md#stagecdmsoftware) - Stage software on CDM for upgrade
* [TestSyslogExportRule](docs/rootcluster/README.md#testsyslogexportrule) - Test the specified syslog export rule
* [UnsetTruststoreCertificate](docs/rootcluster/README.md#unsettruststorecertificate) - Remove certificate associated with specified truststore
* [UpdateCluster](docs/rootcluster/README.md#updatecluster) - Change Rubrik cluster properties
* [UpdateCorsConfiguration](docs/rootcluster/README.md#updatecorsconfiguration) - Update CORS configuration
* [UpdateFips](docs/rootcluster/README.md#updatefips) - Update FIPS enablement status
* [UpdateRubrikSupportPortalCredentials](docs/rootcluster/README.md#updaterubriksupportportalcredentials) - Update credentials to the Rubrik support portal
* [UpdateSyslogExportRule](docs/rootcluster/README.md#updatesyslogexportrule) - Update the specified syslog export rule
* [UpdateTotpGlobalSetting](docs/rootcluster/README.md#updatetotpglobalsetting) - Update TOTP global setting

### [RootConfigHistory](docs/rootconfighistory/README.md)

* [QueryConfigurationHistoryUpdates](docs/rootconfighistory/README.md#queryconfigurationhistoryupdates) - View a list of filtered configuration updates
* [RetrieveConfigurationValues](docs/rootconfighistory/README.md#retrieveconfigurationvalues) - View a list of configurations and their values on a given date

### [RootCsr](docs/rootcsr/README.md)

* [DeleteCsr](docs/rootcsr/README.md#deletecsr) - Delete a certificate signing request
* [GenerateCsr](docs/rootcsr/README.md#generatecsr) - Generate a new private key and return a certificate signing request
* [GetAllCsrs](docs/rootcsr/README.md#getallcsrs) - Get all certificate signing requests

### [RootDataSource](docs/rootdatasource/README.md)

* [BulkDeleteSnapshots](docs/rootdatasource/README.md#bulkdeletesnapshots) - Bulk delete all snapshots for the given objects
* [BulkDeleteSnapshotsForObject](docs/rootdatasource/README.md#bulkdeletesnapshotsforobject) - Bulk delete specified snapshots for the given object
* [ExpiredCustomRetentionSnapshots](docs/rootdatasource/README.md#expiredcustomretentionsnapshots) - Returns a list of snapshots that have expired according to their snapshot-level SLA Domain assignments


### [RootDatabaseLogReport](docs/rootdatabaselogreport/README.md)

* [QueryLogReport](docs/rootdatabaselogreport/README.md#querylogreport) - Get the database log backup delay information
* [QueryReportProperties](docs/rootdatabaselogreport/README.md#queryreportproperties) - Get the database log backup report properties
* [UpdateReportProperties](docs/rootdatabaselogreport/README.md#updatereportproperties) - Update the database log backup report properties

### [RootEvent](docs/rootevent/README.md)

* [GetEventsCsvDownloadLink](docs/rootevent/README.md#geteventscsvdownloadlink) - Download summary of events as a CSV file
* [QueryEventV1](docs/rootevent/README.md#queryeventv1) - Get information for all events
* [QueryLatestEventsV1](docs/rootevent/README.md#querylatesteventsv1) - Get latest events with their associated event series information

### [RootEventSeries](docs/rooteventseries/README.md)

* [QueryEventSeriesByIDV1](docs/rooteventseries/README.md#queryeventseriesbyidv1) - Get all events and relevant information associated with an event series ID

### [RootExclusionPattern](docs/rootexclusionpattern/README.md)

* [BulkCreateExclusionPattern](docs/rootexclusionpattern/README.md#bulkcreateexclusionpattern) - Bulk create exclusion patterns
* [BulkDeleteExclusionPattern](docs/rootexclusionpattern/README.md#bulkdeleteexclusionpattern) - Bulk delete the provided mutable exclusion patterns
* [CreateExclusionPattern](docs/rootexclusionpattern/README.md#createexclusionpattern) - Create an exclusion pattern
* [DeleteExclusionPattern](docs/rootexclusionpattern/README.md#deleteexclusionpattern) - Delete a mutable exclusion pattern
* [GetExclusionPattern](docs/rootexclusionpattern/README.md#getexclusionpattern) - Get details of a exclusion pattern
* [QueryExclusionPattern](docs/rootexclusionpattern/README.md#queryexclusionpattern) - Get a summary of all exclusion patterns
* [UpdateExclusionPattern](docs/rootexclusionpattern/README.md#updateexclusionpattern) - Update a mutable exclusion pattern

### [RootFailoverCluster](docs/rootfailovercluster/README.md)

* [BulkDeleteFailoverCluster](docs/rootfailovercluster/README.md#bulkdeletefailovercluster) - Delete the provided failover clusters
* [CreateFailoverCluster](docs/rootfailovercluster/README.md#createfailovercluster) - Create a failover cluster
* [DeleteFailoverCluster](docs/rootfailovercluster/README.md#deletefailovercluster) - Delete a failover cluster
* [GetFailoverCluster](docs/rootfailovercluster/README.md#getfailovercluster) - Get details of a failover cluster
* [QueryFailoverCluster](docs/rootfailovercluster/README.md#queryfailovercluster) - Get a summary of all failover clusters
* [UpdateFailoverCluster](docs/rootfailovercluster/README.md#updatefailovercluster) - Update a failover cluster

### [RootFailoverClusterFailoverClusterApp](docs/rootfailoverclusterfailoverclusterapp/README.md)

* [BulkDeleteFailoverClusterApp](docs/rootfailoverclusterfailoverclusterapp/README.md#bulkdeletefailoverclusterapp) - Delete failover cluster applications
* [CreateFailoverClusterApp](docs/rootfailoverclusterfailoverclusterapp/README.md#createfailoverclusterapp) - Create a failover cluster app
* [DeleteFailoverClusterApp](docs/rootfailoverclusterfailoverclusterapp/README.md#deletefailoverclusterapp) - Delete a failover cluster app
* [GetFailoverClusterApp](docs/rootfailoverclusterfailoverclusterapp/README.md#getfailoverclusterapp) - Get details of a failover cluster app
* [QueryFailoverClusterApp](docs/rootfailoverclusterfailoverclusterapp/README.md#queryfailoverclusterapp) - Get a summary of all failover cluster apps
* [UpdateFailoverClusterApp](docs/rootfailoverclusterfailoverclusterapp/README.md#updatefailoverclusterapp) - Update a failover cluster app

### [RootFailoverClusterHierarchy](docs/rootfailoverclusterhierarchy/README.md)

* [GetFailoverClusterHierarchyChildren](docs/rootfailoverclusterhierarchy/README.md#getfailoverclusterhierarchychildren) - Get list of immediate descendant objects
* [GetFailoverClusterHierarchyDescendants](docs/rootfailoverclusterhierarchy/README.md#getfailoverclusterhierarchydescendants) - Get list of descendant objects
* [GetFailoverClusterHierarchyObject](docs/rootfailoverclusterhierarchy/README.md#getfailoverclusterhierarchyobject) - Get summary of a hierarchy object

### [RootFileset](docs/rootfileset/README.md)

* [BrowseFilesetSnapshot](docs/rootfileset/README.md#browsefilesetsnapshot) - Lists all files and directories in a given path
* [CreateDownloadFilesetSnapshotFromCloud](docs/rootfileset/README.md#createdownloadfilesetsnapshotfromcloud) - Create a download fileset snapshot from archival request
* [CreateFileset](docs/rootfileset/README.md#createfileset) - Create one fileset for a host
* [CreateFilesetBackupJob](docs/rootfileset/README.md#createfilesetbackupjob) - Initiate an on-demand backup for a fileset
* [CreateFilesetDownloadFileJob](docs/rootfileset/README.md#createfilesetdownloadfilejob) - Create a file download job from a fileset backup
* [CreateFilesetExportFileJob](docs/rootfileset/README.md#createfilesetexportfilejob) - Create export job
* [CreateFilesetRestoreFileJob](docs/rootfileset/README.md#createfilesetrestorefilejob) - Create restore job
* [DeleteFileset](docs/rootfileset/README.md#deletefileset) - Delete a fileset
* [DeleteFilesetSnapshot](docs/rootfileset/README.md#deletefilesetsnapshot) - Delete a fileset snapshot
* [DeleteFilesetSnapshots](docs/rootfileset/README.md#deletefilesetsnapshots) - Delete all snapshots of a fileset
* [GetFileset](docs/rootfileset/README.md#getfileset) - Get information for a single fileset
* [GetFilesetAsyncRequestStatus](docs/rootfileset/README.md#getfilesetasyncrequeststatus) - Get details about an async request
* [GetFilesetSnapshot](docs/rootfileset/README.md#getfilesetsnapshot) - Get information for a fileset snapshot
* [GetMissedFilesetSnapshots](docs/rootfileset/README.md#getmissedfilesetsnapshots) - Get missed snapshots for a fileset
* [QueryFileset](docs/rootfileset/README.md#queryfileset) - Get summary information for all filesets
* [SearchFileset](docs/rootfileset/README.md#searchfileset) - Search for a file within the fileset
* [UpdateFileset](docs/rootfileset/README.md#updatefileset) - Update a Fileset

### [RootFilesetTemplate](docs/rootfilesettemplate/README.md)

* [CreateFilesetTemplate](docs/rootfilesettemplate/README.md#createfilesettemplate) - Create a fileset template
* [DeleteFilesetTemplate](docs/rootfilesettemplate/README.md#deletefilesettemplate) - Delete a fileset template
* [GetFilesetTemplate](docs/rootfilesettemplate/README.md#getfilesettemplate) - Get information for a fileset template
* [QueryFilesetTemplate](docs/rootfilesettemplate/README.md#queryfilesettemplate) - Get summary information for all fileset templates
* [UpdateFilesetTemplate](docs/rootfilesettemplate/README.md#updatefilesettemplate) - Modify a fileset template

### [RootHdfs](docs/roothdfs/README.md)

* [BrowseHdfsSnapshot](docs/roothdfs/README.md#browsehdfssnapshot) - Lists all files and directories in a given path
* [CreateHdfs](docs/roothdfs/README.md#createhdfs) - Create one HDFS directory for a host
* [CreateHdfsBackupJob](docs/roothdfs/README.md#createhdfsbackupjob) - Initiate an on-demand backup for a HDFS directory
* [CreateHdfsExportFileJob](docs/roothdfs/README.md#createhdfsexportfilejob) - Create export job
* [CreateHdfsRestoreFileJob](docs/roothdfs/README.md#createhdfsrestorefilejob) - Create restore job
* [DeleteHdfs](docs/roothdfs/README.md#deletehdfs) - Delete a HDFS directory
* [DeleteHdfsSnapshot](docs/roothdfs/README.md#deletehdfssnapshot) - Delete a HDFS directory snapshot
* [DeleteHdfsSnapshots](docs/roothdfs/README.md#deletehdfssnapshots) - Delete all snapshots of a HDFS directory
* [GetHdfs](docs/roothdfs/README.md#gethdfs) - Get information for a single HDFS directory
* [GetHdfsAsyncRequestStatus](docs/roothdfs/README.md#gethdfsasyncrequeststatus) - Get details about an asynchronous request
* [GetHdfsSnapshot](docs/roothdfs/README.md#gethdfssnapshot) - Get information for a HDFS directory snapshot
* [GetMissedHdfsSnapshots](docs/roothdfs/README.md#getmissedhdfssnapshots) - Get missed snapshots for a HDFS directory
* [QueryHdfs](docs/roothdfs/README.md#queryhdfs) - Get summary information for all HDFS directories
* [SearchHdfs](docs/roothdfs/README.md#searchhdfs) - Search for a file within the HDFS directory
* [UpdateHdfs](docs/roothdfs/README.md#updatehdfs) - Update a HDFS directory

### [RootHdfsTemplate](docs/roothdfstemplate/README.md)

* [CreateHdfsTemplate](docs/roothdfstemplate/README.md#createhdfstemplate) - Create a HDFS directory template
* [DeleteHdfsTemplate](docs/roothdfstemplate/README.md#deletehdfstemplate) - Delete a HDFS directory template
* [GetHdfsTemplate](docs/roothdfstemplate/README.md#gethdfstemplate) - Get information for a HDFS directory template
* [QueryHdfsTemplate](docs/roothdfstemplate/README.md#queryhdfstemplate) - Get summary information for all HDFS directory templates
* [UpdateHdfsTemplate](docs/roothdfstemplate/README.md#updatehdfstemplate) - Modify a HDFS directory template

### [RootHealthMonitor](docs/roothealthmonitor/README.md)

* [GetPolicies](docs/roothealthmonitor/README.md#getpolicies) - Get details of health monitor policies
* [GetPolicyStatus](docs/roothealthmonitor/README.md#getpolicystatus) - Get the status of health monitor policy enforcement
* [RunPolicies](docs/roothealthmonitor/README.md#runpolicies) - Enforce health monitor policies

### [RootHierarchy](docs/roothierarchy/README.md)

* [BulkHierarchySLAConflictsV1](docs/roothierarchy/README.md#bulkhierarchyslaconflictsv1) - Retrieve the list of descendant objects with SLA conflicts in bulk

### [RootHost](docs/roothost/README.md)

* [BulkRegisterHostAsync](docs/roothost/README.md#bulkregisterhostasync) - Register hosts
* [DeleteHost](docs/roothost/README.md#deletehost) - Delete a registered host
* [DiscoverNasShares](docs/roothost/README.md#discovernasshares) - Discover and return all shares on a NAS host
* [GetHost](docs/roothost/README.md#gethost) - Get summary information for a host
* [GetRbsHostInfo](docs/roothost/README.md#getrbshostinfo) - Get the Rubrik Backup Service details for a host
* [HostMakePrimary](docs/roothost/README.md#hostmakeprimary) - Make this cluster the primary for agents on a set of hosts
* [QueryHost](docs/roothost/README.md#queryhost) - Get summary information for hosts
* [QueryHostVolume](docs/roothost/README.md#queryhostvolume) - Get list of Volume Group volumes
* [RbsInstall](docs/roothost/README.md#rbsinstall) - Install Rubrik Backup Service on a host
* [RbsUninstall](docs/roothost/README.md#rbsuninstall) - Uninstall Rubrik Backup Service from a host
* [RbsUpgrade](docs/roothost/README.md#rbsupgrade) - Upgrade Rubrik Backup Service on a host
* [RefreshHost](docs/roothost/README.md#refreshhost) - Refresh a host
* [RegisterHost](docs/roothost/README.md#registerhost) - Register a host
* [RegisterHostAsync](docs/roothost/README.md#registerhostasync) - Register a host
* [SearchHost](docs/roothost/README.md#searchhost) - Search for a file within the host
* [UpdateCertificateHost](docs/roothost/README.md#updatecertificatehost) - Update certificate
* [UpdateHost](docs/roothost/README.md#updatehost) - Modify information for a registered host

### [RootHostHierarchy](docs/roothosthierarchy/README.md)

* [GetHostHierarchyChildren](docs/roothosthierarchy/README.md#gethosthierarchychildren) - Get immediate descendant objects
* [GetHostHierarchyObject](docs/roothosthierarchy/README.md#gethosthierarchyobject) - Get summary of a host/share hierarchy object

### [RootHostShare](docs/roothostshare/README.md)

* [BulkAddHostShares](docs/roothostshare/README.md#bulkaddhostshares) - Add NAS shares in bulk
* [BulkUpdateHostShare](docs/roothostshare/README.md#bulkupdatehostshare) - Update network shares

### [RootHypervVM](docs/roothypervvm/README.md)

* [GetHypervVirtualMachineForceFullSpec](docs/roothypervvm/README.md#gethypervvirtualmachineforcefullspec) - Retrieve the configuration which has been set for forcing a full snapshot for a Hyper-V Virtual Machine
* [RequestHypervVirtualMachineForceFullSnapshot](docs/roothypervvm/README.md#requesthypervvirtualmachineforcefullsnapshot) - Request a full snapshot during next backup job of a Hyper-V virtual machine

### [RootIdpAuthDomain](docs/rootidpauthdomain/README.md)

* [CreateIDProviderAuthDomain](docs/rootidpauthdomain/README.md#createidproviderauthdomain) - Add a new IdP authentication domain
* [DeleteIDProviderAuthDomain](docs/rootidpauthdomain/README.md#deleteidproviderauthdomain) - Delete an IdP authentication domain for the given ID
* [GetIDProviderAuthDomain](docs/rootidpauthdomain/README.md#getidproviderauthdomain) - Get an IdP authentication domain for the given id
* [QueryIDProviderAuthDomain](docs/rootidpauthdomain/README.md#queryidproviderauthdomain) - Get a list of IdP authentication domains
* [UpdateIDProviderAuthDomain](docs/rootidpauthdomain/README.md#updateidproviderauthdomain) - Update an existing IdP authentication domain

### [RootJobMonitoring](docs/rootjobmonitoring/README.md)

* [CreateMonitoringSubscription](docs/rootjobmonitoring/README.md#createmonitoringsubscription) - Create an email subscription to the job monitoring page
* [DeleteMonitoringSubscription](docs/rootjobmonitoring/README.md#deletemonitoringsubscription) - Delete a monitoring page email subscription
* [GetJobMonitoringInfo](docs/rootjobmonitoring/README.md#getjobmonitoringinfo) - Get job monitoring information
* [GetJobMonitoringInfoCsvDownloadLink](docs/rootjobmonitoring/README.md#getjobmonitoringinfocsvdownloadlink) - Download job monitoring information as a CSV file
* [GetMonitoringJobCountByJobState](docs/rootjobmonitoring/README.md#getmonitoringjobcountbyjobstate) - Get job monitoring summary information separated by job state
* [GetMonitoringJobCountByJobType](docs/rootjobmonitoring/README.md#getmonitoringjobcountbyjobtype) - Get job monitoring summary information separated by job type
* [GetMonitoringSubscription](docs/rootjobmonitoring/README.md#getmonitoringsubscription) - Get a specific monitoring email subscription by id
* [GetMonitoringSubscriptions](docs/rootjobmonitoring/README.md#getmonitoringsubscriptions) - Returns all email subscriptions for the monitoring page
* [UpdateMonitoringSubscription](docs/rootjobmonitoring/README.md#updatemonitoringsubscription) - Update a monitoring email subscription

### [RootLdapService](docs/rootldapservice/README.md)

* [CreateLdapService](docs/rootldapservice/README.md#createldapservice) - Add a new authentication domain
* [DeleteLdapService](docs/rootldapservice/README.md#deleteldapservice) - Delete an authentication domain for the given ID
* [GetLdapService](docs/rootldapservice/README.md#getldapservice) - Get a LDAP service for the given ID
* [PatchLdapService](docs/rootldapservice/README.md#patchldapservice) - Update an existing authentication domain
* [PutLdapService](docs/rootldapservice/README.md#putldapservice) - Replace the values of an authentication domain
* [QueryLdapService](docs/rootldapservice/README.md#queryldapservice) - Get a list of LDAP services

### [RootLegalHold](docs/rootlegalhold/README.md)

* [ApplyLegalHold](docs/rootlegalhold/README.md#applylegalhold) - Apply a Legal Hold
* [DissolveLegalHoldSnapshots](docs/rootlegalhold/README.md#dissolvelegalholdsnapshots) - Dissolve a collection of snapshots of specified data source from Legal Hold
* [GetLegalHoldObjects](docs/rootlegalhold/README.md#getlegalholdobjects) - Get objects part of Legal Hold
* [QueryLegalHold](docs/rootlegalhold/README.md#querylegalhold) - Get snasphots held under legal hold

### [RootManagedVolume](docs/rootmanagedvolume/README.md)

* [CreateManagedVolumeGenerateScriptJob](docs/rootmanagedvolume/README.md#createmanagedvolumegeneratescriptjob) - Generate and download unified view script

### [RootMfaRsa](docs/rootmfarsa/README.md)

* [CreateRsaMfaServer](docs/rootmfarsa/README.md#creatersamfaserver) - Register a new RSA server
* [DeleteRsaMfaServer](docs/rootmfarsa/README.md#deletersamfaserver) - Delete RSA server
* [GetRsaMfaServer](docs/rootmfarsa/README.md#getrsamfaserver) - Get RSA server configuration
* [QueryRsaMfaServers](docs/rootmfarsa/README.md#queryrsamfaservers) - Get RSA server configuration
* [UpdateRsaMfaServer](docs/rootmfarsa/README.md#updatersamfaserver) - Update RSA server configuration

### [RootMssql](docs/rootmssql/README.md)

* [AssignMssqlSLAProperties](docs/rootmssql/README.md#assignmssqlslaproperties) - Assign SLA properties to SQL Server objects
* [BrowseMssqlBackupFiles](docs/rootmssql/README.md#browsemssqlbackupfiles) - List snapshots and logs from a Microsoft SQL database
* [BulkUpdateMssqlDbV1](docs/rootmssql/README.md#bulkupdatemssqldbv1) - Update multiple Microsoft SQL databases
* [CountMssqlDbV1](docs/rootmssql/README.md#countmssqldbv1) - Returns a count of Microsoft SQL databases
* [CountMssqlInstanceV1](docs/rootmssql/README.md#countmssqlinstancev1) - Returns a count of Microsoft SQL instances
* [CreateDownloadMssqlBackupFiles](docs/rootmssql/README.md#createdownloadmssqlbackupfiles) - Download snapshots and logs backups from a Microsoft SQL Database
* [CreateDownloadMssqlBackupFilesByID](docs/rootmssql/README.md#createdownloadmssqlbackupfilesbyid) - Downloads a list of snapshot and log backups from a Microsoft SQL database
* [CreateExportMssqlDb](docs/rootmssql/README.md#createexportmssqldb) - Export a Microsoft SQL database to a new location
* [CreateLogShippingConfiguration](docs/rootmssql/README.md#createlogshippingconfiguration) - Create a log shipping configuration
* [CreateMssqlHostConfig](docs/rootmssql/README.md#createmssqlhostconfig) - Create a SQL Server host configuration
* [CreateMssqlMount](docs/rootmssql/README.md#createmssqlmount) - Live Mount SQL Server database from a point in time copy
* [CreateMssqlUnmount](docs/rootmssql/README.md#createmssqlunmount) - Delete a Live Mount of a SQL Server database
* [CreateOnDemandMssqlBackup](docs/rootmssql/README.md#createondemandmssqlbackup) - Take an on-demand backup of a Microsoft SQL database
* [CreateOnDemandMssqlBatchBackupV1](docs/rootmssql/README.md#createondemandmssqlbatchbackupv1) - Take an on-demand backup of multiple Microsoft SQL databases
* [CreateOnDemandMssqlLogBackup](docs/rootmssql/README.md#createondemandmssqllogbackup) - Take an on-demand log backup for a Microsoft SQL database
* [CreateRestoreMssqlDb](docs/rootmssql/README.md#createrestoremssqldb) - Restore a Microsoft SQL database
* [DeleteDownloadedMssqlDbRecoverableRangesV1](docs/rootmssql/README.md#deletedownloadedmssqldbrecoverablerangesv1) - Delete downloaded recoverable ranges of a Microsoft SQL database
* [DeleteLogShippingConfiguration](docs/rootmssql/README.md#deletelogshippingconfiguration) - Delete a specified log shipping configuration
* [DeleteMssqlDbSnapshots](docs/rootmssql/README.md#deletemssqldbsnapshots) - Delete all snapshots of a Microsoft SQL database
* [DeleteMssqlHostConfig](docs/rootmssql/README.md#deletemssqlhostconfig) - Delete the SQL Server host configuration
* [DownloadFromArchive](docs/rootmssql/README.md#downloadfromarchive) - Download snapshots and log backups from archival
* [GetCompatibleMssqlInstancesV1](docs/rootmssql/README.md#getcompatiblemssqlinstancesv1) - Get compatible instances for the recovery of a Microsoft SQL database
* [GetDefaultDbPropertiesV1](docs/rootmssql/README.md#getdefaultdbpropertiesv1) - Returns the current default properties for Microsoft SQL databases
* [GetDeleteMssqlDbRecoverableRangesStatusV1](docs/rootmssql/README.md#getdeletemssqldbrecoverablerangesstatusv1) - Get the deletion status of downloaded recoverable ranges
* [GetLogShippingConfiguration](docs/rootmssql/README.md#getlogshippingconfiguration) - Get a log shipping configuration
* [GetMissedMssqlDbSnapshots](docs/rootmssql/README.md#getmissedmssqldbsnapshots) - Get summary information for missed snapshots of a SQL database
* [GetMssqlAsyncRequestStatus](docs/rootmssql/README.md#getmssqlasyncrequeststatus) - Get details for an async request
* [GetMssqlAvailabilityGroupV1](docs/rootmssql/README.md#getmssqlavailabilitygroupv1) - Returns detailed information for a Microsoft SQL availability group
* [GetMssqlDb](docs/rootmssql/README.md#getmssqldb) - Get detailed information for a Microsoft SQL database
* [GetMssqlDbMissedRecoverableRanges](docs/rootmssql/README.md#getmssqldbmissedrecoverableranges) - Get missed recoverable ranges of a Microsoft SQL database
* [GetMssqlDbRecoverableRanges](docs/rootmssql/README.md#getmssqldbrecoverableranges) - Get recoverable ranges of a Microsoft SQL database
* [GetMssqlDbSnapshot](docs/rootmssql/README.md#getmssqldbsnapshot) - Get details information about a Microsoft SQL database snapshot
* [GetMssqlHierarchyChildren](docs/rootmssql/README.md#getmssqlhierarchychildren) - Get list of immediate descendant objects
* [GetMssqlHierarchyDescendants](docs/rootmssql/README.md#getmssqlhierarchydescendants) - Get list of descendant objects
* [GetMssqlHierarchyObject](docs/rootmssql/README.md#getmssqlhierarchyobject) - Get summary of a SQL Server hierarchy object
* [GetMssqlHostConfig](docs/rootmssql/README.md#getmssqlhostconfig) - Get the configuration for a specific host
* [GetMssqlInstance](docs/rootmssql/README.md#getmssqlinstance) - Get detailed information for a Microsoft SQL instance
* [GetMssqlMount](docs/rootmssql/README.md#getmssqlmount) - Get detailed information for a Live Mount of a SQL Server database
* [GetOnDemandMssqlBatchBackupResultV1](docs/rootmssql/README.md#getondemandmssqlbatchbackupresultv1) - Returns details for an on-demand backup of multiple Microsoft SQL databases
* [MssqlGetRestoreFilesV1](docs/rootmssql/README.md#mssqlgetrestorefilesv1) - Returns a list all database files to be restored
* [MssqlGetSnappableIDV1](docs/rootmssql/README.md#mssqlgetsnappableidv1) - Returns the snappableId for a Microsoft SQL database
* [MssqlRestoreEstimateV1](docs/rootmssql/README.md#mssqlrestoreestimatev1) - Returns a size estimate for a restore or export
* [QueryLogShippingConfigurations](docs/rootmssql/README.md#querylogshippingconfigurations) - Get log shipping configurations
* [QueryMssqlAvailabilityGroupV1](docs/rootmssql/README.md#querymssqlavailabilitygroupv1) - Returns summary information for Microsoft SQL availability groups
* [QueryMssqlDb](docs/rootmssql/README.md#querymssqldb) - Get summary information for SQL Server databases
* [QueryMssqlDbSnapshot](docs/rootmssql/README.md#querymssqldbsnapshot) - Get summary information for snapshots of a Microsoft SQL database
* [QueryMssqlHostConfig](docs/rootmssql/README.md#querymssqlhostconfig) - Get the summary of SQL Server host configurations
* [QueryMssqlInstance](docs/rootmssql/README.md#querymssqlinstance) - Get summary information for Microsoft SQL instances
* [QueryMssqlMount](docs/rootmssql/README.md#querymssqlmount) - Get summary information for all Live Mounts SQL Server databases
* [ReseedSecondary](docs/rootmssql/README.md#reseedsecondary) - Reseed a secondary database
* [UpdateDefaultDbPropertiesV1](docs/rootmssql/README.md#updatedefaultdbpropertiesv1) - Update the default properties for Microsoft SQL databases
* [UpdateLogShippingConfiguration](docs/rootmssql/README.md#updatelogshippingconfiguration) - Update a specified log shipping configuration
* [UpdateMssqlAvailabilityGroupV1](docs/rootmssql/README.md#updatemssqlavailabilitygroupv1) - Update a Microsoft SQL availability group
* [UpdateMssqlDb](docs/rootmssql/README.md#updatemssqldb) - Update a Microsoft SQL database
* [UpdateMssqlHostConfig](docs/rootmssql/README.md#updatemssqlhostconfig) - Update host configuration
* [UpdateMssqlInstance](docs/rootmssql/README.md#updatemssqlinstance) - Update a Microsoft SQL instance

### [RootOracle](docs/rootoracle/README.md)

* [BulkUpdateOracleDb](docs/rootoracle/README.md#bulkupdateoracledb) - Update Oracle Databases
* [BulkUpdateOracleHost](docs/rootoracle/README.md#bulkupdateoraclehost) - Update Oracle Hosts
* [BulkUpdateOracleRac](docs/rootoracle/README.md#bulkupdateoraclerac) - Update Oracle RACs
* [CreateOracleValidateBackupJob](docs/rootoracle/README.md#createoraclevalidatebackupjob) - Validate Oracle database backups
* [DeleteDownloadedSnapshots](docs/rootoracle/README.md#deletedownloadedsnapshots) - Delete downloaded Oracle database snapshots and log snapshots
* [GetAcoParameterList](docs/rootoracle/README.md#getacoparameterlist) - List of supported Advanced Cloning Options
* [GetExampleAcoDownloadLink](docs/rootoracle/README.md#getexampleacodownloadlink) - Link to download the Advanced Recovery Options example file
* [GetOracleDbV1](docs/rootoracle/README.md#getoracledbv1) - Get Oracle database information
* [OracleRestoreEstimate](docs/rootoracle/README.md#oraclerestoreestimate) - Get a size estimate for a restore or export
* [QueryOracleDbV1](docs/rootoracle/README.md#queryoracledbv1) - Get summary information for Oracle databases
* [UpdateOracleDataGuardGroup](docs/rootoracle/README.md#updateoracledataguardgroup) - Update an Oracle Data Guard group
* [UpdateOracleDbV1](docs/rootoracle/README.md#updateoracledbv1) - Update an Oracle database
* [ValidateOracleAcoFile](docs/rootoracle/README.md#validateoracleacofile) - Validate Oracle ACO file

### [RootOrganization](docs/rootorganization/README.md)

* [BulkCreateEnvoys](docs/rootorganization/README.md#bulkcreateenvoys) - Create a list of Rubrik Envoy objects
* [BulkDeleteEnvoys](docs/rootorganization/README.md#bulkdeleteenvoys) - Remove a list of Rubrik Envoy objects
* [BulkUpdateEnvoys](docs/rootorganization/README.md#bulkupdateenvoys) - Update a list of Rubrik Envoy objects

### [RootPrincipal](docs/rootprincipal/README.md)

* [AssignRolesToPrincipals](docs/rootprincipal/README.md#assignrolestoprincipals) - Assign roles to principals
* [GetRolesForPrincipals](docs/rootprincipal/README.md#getrolesforprincipals) - Get roles assigned to principals
* [RevokeRolesFromPrincipals](docs/rootprincipal/README.md#revokerolesfromprincipals) - Revoke roles from principals
* [SearchPrincipalsV1](docs/rootprincipal/README.md#searchprincipalsv1) - Search for principals

### [RootReplication](docs/rootreplication/README.md)

* [DisablePerLocationPause](docs/rootreplication/README.md#disableperlocationpause) - Resume replication from specified source clusters
* [EnablePerLocationPause](docs/rootreplication/README.md#enableperlocationpause) - Pause replication from specified source clusters

### [RootReports](docs/rootreports/README.md)

* [GetComplianceSummarySlav1](docs/rootreports/README.md#getcompliancesummaryslav1) - Get compliance summary information
* [GetComplianceSummaryV1](docs/rootreports/README.md#getcompliancesummaryv1) - Get compliance summary information
* [SetReportConfig](docs/rootreports/README.md#setreportconfig) - Modify the report config

### [RootRole](docs/rootrole/README.md)

* [CreateRole](docs/rootrole/README.md#createrole) - Create a new role
* [DeleteRole](docs/rootrole/README.md#deleterole) - Delete a role
* [GetRole](docs/rootrole/README.md#getrole) - Get role information for the specified role
* [GetRoles](docs/rootrole/README.md#getroles) - Get all roles in an organization
* [UpdateRole](docs/rootrole/README.md#updaterole) - Update role information

### [RootSaml](docs/rootsaml/README.md)

* [ConfigRubrikSamlMetadata](docs/rootsaml/README.md#configrubriksamlmetadata) - Configure and generate Rubrik SAML metadata
* [GetSamlSsoStatus](docs/rootsaml/README.md#getsamlssostatus) - Check SAML SSO Status
* [MakeSamlAuthnRequest](docs/rootsaml/README.md#makesamlauthnrequest) - Make SAML authentication request

### [RootSapHana](docs/rootsaphana/README.md)

* [AddSapHanaSystem](docs/rootsaphana/README.md#addsaphanasystem) - Add a SAP HANA system
* [ConfigureSapHanaRestore](docs/rootsaphana/README.md#configuresaphanarestore) - Configure the target database for system copy restore
* [CreateOnDemandSapHanaBackup](docs/rootsaphana/README.md#createondemandsaphanabackup) - Create on demand database snapshot
* [CreateSapHanaSystemRefresh](docs/rootsaphana/README.md#createsaphanasystemrefresh) - Refresh SAP HANA system metadata
* [DeleteSapHanaDbSnapshot](docs/rootsaphana/README.md#deletesaphanadbsnapshot) - Delete a particular full snapshot of a SAP HANA database
* [DeleteSapHanaSystem](docs/rootsaphana/README.md#deletesaphanasystem) - Delete a SAP HANA system
* [GetMissedSapHanaDbSnapshots](docs/rootsaphana/README.md#getmissedsaphanadbsnapshots) - Retrieve summary information for missed snapshots of a SAP HANA database
* [GetSapHanaDatabase](docs/rootsaphana/README.md#getsaphanadatabase) - Get detailed information for an SAP HANA database
* [GetSapHanaDbAsyncRequestStatus](docs/rootsaphana/README.md#getsaphanadbasyncrequeststatus) - Get the status of a SAP HANA database request
* [GetSapHanaDbRecoverableRanges](docs/rootsaphana/README.md#getsaphanadbrecoverableranges) - Get recoverable ranges of a SAP HANA database
* [GetSapHanaDbSnapshot](docs/rootsaphana/README.md#getsaphanadbsnapshot) - Get SAP HANA database snapshot details
* [GetSapHanaSystem](docs/rootsaphana/README.md#getsaphanasystem) - Get summary information for a SAP HANA system
* [GetSapHanaSystemAsyncRequestStatus](docs/rootsaphana/README.md#getsaphanasystemasyncrequeststatus) - Get the status of a SAP HANA system request
* [PatchSapHanaDatabase](docs/rootsaphana/README.md#patchsaphanadatabase) - Update the SLA Domain for an SAP HANA database
* [PatchSapHanaSystem](docs/rootsaphana/README.md#patchsaphanasystem) - Update the SLA Domain for a SAP HANA system
* [QuerySapHanaDatabases](docs/rootsaphana/README.md#querysaphanadatabases) - Get summary information for discovered SAP HANA databases
* [QuerySapHanaDbSnapshot](docs/rootsaphana/README.md#querysaphanadbsnapshot) - Get a summary list of snapshots for a SAP HANA database
* [QuerySapHanaSystems](docs/rootsaphana/README.md#querysaphanasystems) - Get summary information for added SAP HANA systems
* [UnconfigureSapHanaRestore](docs/rootsaphana/README.md#unconfiguresaphanarestore) - Reset the configuration for system copy restore on target database

### [RootSession](docs/rootsession/README.md)

* [CreateSession](docs/rootsession/README.md#createsession) - Create user session
* [DeleteSession](docs/rootsession/README.md#deletesession) - Delete user session

### [RootSLADomain](docs/rootsladomain/README.md)

* [AssignSLAToDownloadedSnapshots](docs/rootsladomain/README.md#assignslatodownloadedsnapshots) - Assign retention SLA Domain to the downloaded snapshots of a single object
* [CreateSLADomain](docs/rootsladomain/README.md#createsladomain) - Create SLA Domain
* [DeleteSLADomain](docs/rootsladomain/README.md#deletesladomain) - Remove SLA Domain
* [GetSLADomain](docs/rootsladomain/README.md#getsladomain) - Get SLA Domain details
* [~~PatchSLADomain~~](docs/rootsladomain/README.md#patchsladomain) - Patch SLA Domain :warning: **Deprecated**
* [QuerySLADomain](docs/rootsladomain/README.md#querysladomain) - Get list of SLA Domains
* [UpdateSLADomain](docs/rootsladomain/README.md#updatesladomain) - Update SLA Domain

### [RootSnapshot](docs/rootsnapshot/README.md)

* [GetSnapshotStorageStatsV1](docs/rootsnapshot/README.md#getsnapshotstoragestatsv1) - Returns storage stats for a snapshot

### [RootUnmanagedObject](docs/rootunmanagedobject/README.md)

* [AssignToRetentionSLAAsync](docs/rootunmanagedobject/README.md#assigntoretentionslaasync) - Assign relic/unmanaged entities to an SLA Domain for managing retention asynchronously
* [BulkTierExistingSnapshots](docs/rootunmanagedobject/README.md#bulktierexistingsnapshots) - Bulk tier existing snapshots to cold storage
* [QueryUnmanagedObjectSnapshotsV1](docs/rootunmanagedobject/README.md#queryunmanagedobjectsnapshotsv1) - Get summary of all the snapshots for a given object
* [QueryUnmanagedObjectV1](docs/rootunmanagedobject/README.md#queryunmanagedobjectv1) - Get summary of all the objects with unmanaged snapshots
* [QueryUnmanagedReaderObject](docs/rootunmanagedobject/README.md#queryunmanagedreaderobject) - Get summary of all unmanaged reader objects

### [RootUser](docs/rootuser/README.md)

* [GenerateTotpSecret](docs/rootuser/README.md#generatetotpsecret) - Generate a TOTP secret key for the given user
* [GetTotpStatus](docs/rootuser/README.md#gettotpstatus) - Get the TOTP status for the given user
* [GetUserAccountLockoutSettings](docs/rootuser/README.md#getuseraccountlockoutsettings) - Get the local user account lockout settings
* [ManageUserAccountLockoutSettings](docs/rootuser/README.md#manageuseraccountlockoutsettings) - Update the local user account lockout settings
* [ResetTotp](docs/rootuser/README.md#resettotp) - Reset the TOTP for the given user
* [SetupTotp](docs/rootuser/README.md#setuptotp) - Configure the TOTP secret for the given user
* [UnlockUser](docs/rootuser/README.md#unlockuser) - Unlock a user account

### [RootUserDefinedTag](docs/rootuserdefinedtag/README.md)

* [CreateUserDefinedTag](docs/rootuserdefinedtag/README.md#createuserdefinedtag) - Create a user-defined resource tag for tagging cloud compute resources
* [DeleteUserDefinedTag](docs/rootuserdefinedtag/README.md#deleteuserdefinedtag) - Delete a user-defined resource tag
* [DeleteUserDefinedTagBulk](docs/rootuserdefinedtag/README.md#deleteuserdefinedtagbulk) - Delete a list of user-defined resource tags
* [GetUserDefinedTag](docs/rootuserdefinedtag/README.md#getuserdefinedtag) - Get user-defined tag
* [QueryUserDefinedTag](docs/rootuserdefinedtag/README.md#queryuserdefinedtag) - Get user-defined resource tags
* [UpdateUserDefinedTag](docs/rootuserdefinedtag/README.md#updateuserdefinedtag) - Update the value of a user-defined resource tag

### [RootVcdCluster](docs/rootvcdcluster/README.md)

* [CreateVcdClusterV1](docs/rootvcdcluster/README.md#createvcdclusterv1) - Add a vCD Cluster
* [DeleteVcdClusterV1](docs/rootvcdcluster/README.md#deletevcdclusterv1) - Remove vCD Cluster
* [GetVcdClusterAsyncRequestStatusV1](docs/rootvcdcluster/README.md#getvcdclusterasyncrequeststatusv1) - Get vCD Cluster job status
* [GetVcdClusterV1](docs/rootvcdcluster/README.md#getvcdclusterv1) - Get vCD Cluster details
* [QueryVcdClusterV1](docs/rootvcdcluster/README.md#queryvcdclusterv1) - Get summary for all vCD Clusters
* [QueryVcdVimServerV1](docs/rootvcdcluster/README.md#queryvcdvimserverv1) - Get VimServers of a vCD Cluster
* [RefreshVcdClusterV1](docs/rootvcdcluster/README.md#refreshvcdclusterv1) - Refresh a vCD Cluster
* [UpdateVcdClusterV1](docs/rootvcdcluster/README.md#updatevcdclusterv1) - Change vCD Cluster object

### [RootVcdHierarchy](docs/rootvcdhierarchy/README.md)

* [GetVcdHierarchyChildrenV1](docs/rootvcdhierarchy/README.md#getvcdhierarchychildrenv1) - Get immediate descendant objects
* [GetVcdHierarchyDescendantsV1](docs/rootvcdhierarchy/README.md#getvcdhierarchydescendantsv1) - Get list of descendant objects
* [GetVcdHierarchyObjectV1](docs/rootvcdhierarchy/README.md#getvcdhierarchyobjectv1) - Get summary of a vCD hierarchy object

### [RootVcdVapp](docs/rootvcdvapp/README.md)

* [CreateOnDemandSnapshotV1](docs/rootvcdvapp/README.md#createondemandsnapshotv1) - Create an on-demand snapshot for a vApp
* [CreateVappExportV1](docs/rootvcdvapp/README.md#createvappexportv1) - Export vApp snapshot
* [CreateVappInstantRecoveryV1](docs/rootvcdvapp/README.md#createvappinstantrecoveryv1) - Instant Recovery of vApp virtual machines
* [CreateVappTemplateSnapshotExport](docs/rootvcdvapp/README.md#createvapptemplatesnapshotexport) - Export of a vApp template snapshot
* [CreateVcdVappDownloadSnapshotFromCloudV1](docs/rootvcdvapp/README.md#createvcdvappdownloadsnapshotfromcloudv1) - Download snapshot from archive
* [DeleteVappSnapshotV1](docs/rootvcdvapp/README.md#deletevappsnapshotv1) - Delete a vApp snapshot
* [DeleteVappSnapshotsV1](docs/rootvcdvapp/README.md#deletevappsnapshotsv1) - Delete all snapshots of vApp
* [GetVappAsyncRequestStatusV1](docs/rootvcdvapp/README.md#getvappasyncrequeststatusv1) - Get vApp job status
* [GetVappSnapshotExportOptionsV1](docs/rootvcdvapp/README.md#getvappsnapshotexportoptionsv1) - Get exportable network configurations
* [GetVappSnapshotInstantRecoveryOptionsV1](docs/rootvcdvapp/README.md#getvappsnapshotinstantrecoveryoptionsv1) - Get Instant Recovery information
* [GetVappSnapshotV1](docs/rootvcdvapp/README.md#getvappsnapshotv1) - Get vApp snapshot details
* [GetVappTemplateSnapshotExportOptions](docs/rootvcdvapp/README.md#getvapptemplatesnapshotexportoptions) - Get Export information for a vApp template snapshot
* [GetVcdVappV1](docs/rootvcdvapp/README.md#getvcdvappv1) - Get details of a specific vApp
* [QueryVappSnapshotV1](docs/rootvcdvapp/README.md#queryvappsnapshotv1) - Get list of snapshots of vApp
* [QueryVcdVappsV1](docs/rootvcdvapp/README.md#queryvcdvappsv1) - Get summary for vApps
* [SearchVappV1](docs/rootvcdvapp/README.md#searchvappv1) - Search for a file in a vApp
* [UpdateVcdVappV1](docs/rootvcdvapp/README.md#updatevcdvappv1) - Update vApp
* [VcdMissedSnapshotsV1](docs/rootvcdvapp/README.md#vcdmissedsnapshotsv1) - Get details about missed snapshots for a vApp

### [RootVmwareComputeCluster](docs/rootvmwarecomputecluster/README.md)

* [GetAsyncRequestStatusForComputeCluster](docs/rootvmwarecomputecluster/README.md#getasyncrequeststatusforcomputecluster) - Get asynchronous request details for VMware cluster
* [GetComputeCluster](docs/rootvmwarecomputecluster/README.md#getcomputecluster) - Get details for the compute cluster
* [GetIoFilters](docs/rootvmwarecomputecluster/README.md#getiofilters) - Get the ioFilters on the VMware compute cluster with a specific ID
* [InstallIoFilter](docs/rootvmwarecomputecluster/README.md#installiofilter) - Install the Rubrik ioFilter to the VMware cluster with a specific ID
* [QueryComputeCluster](docs/rootvmwarecomputecluster/README.md#querycomputecluster) - Get all the clusters belonging to this datacenter
* [UninstallIoFilter](docs/rootvmwarecomputecluster/README.md#uninstalliofilter) - Uninstall the Rubrik ioFilter from the VMware cluster with a specific ID
* [UpdateComputeCluster](docs/rootvmwarecomputecluster/README.md#updatecomputecluster) - Modify information for a VMware compute cluster
* [UpgradeIoFilter](docs/rootvmwarecomputecluster/README.md#upgradeiofilter) - Upgrade the Rubrik ioFilter for the VMware cluster with a specific ID

### [RootVmwareConfig](docs/rootvmwareconfig/README.md)

* [GetPreferredCdpNetworkProtocol](docs/rootvmwareconfig/README.md#getpreferredcdpnetworkprotocol) - Returns the current preference of CDM between IPv4 and IPv6 for CDP data transfer
* [GetVmwareRecoveryNetworks](docs/rootvmwareconfig/README.md#getvmwarerecoverynetworks) - Get all the VMware recovery networks for a compute resource ID
* [SetPreferredCdpNetworkProtocol](docs/rootvmwareconfig/README.md#setpreferredcdpnetworkprotocol) - Set the current preference of CDM between IPv4 and IPv6 for CDP data transfer

### [RootVmwareHierarchy](docs/rootvmwarehierarchy/README.md)

* [GetVmwareHierarchyExport](docs/rootvmwarehierarchy/README.md#getvmwarehierarchyexport) - Get Available VMware Hierarchy Objects for Export Operations
* [GetVmwareHierarchyObject](docs/rootvmwarehierarchy/README.md#getvmwarehierarchyobject) - Get VMware Hierarchy Object Information

### [RootVmwareHost](docs/rootvmwarehost/README.md)

* [GetVmwareHost](docs/rootvmwarehost/README.md#getvmwarehost) - Get details of a ESXi hypervisor
* [GetVmwareHostDatastore](docs/rootvmwarehost/README.md#getvmwarehostdatastore) - Get details of datastores in a ESXi hypervisor
* [QueryVmwareHost](docs/rootvmwarehost/README.md#queryvmwarehost) - Get summary of all the ESXi hypervisor
* [UpdateVmwareHost](docs/rootvmwarehost/README.md#updatevmwarehost) - Update the SLA Domain for an ESXi hypervisor

### [RootVmwareVcenter](docs/rootvmwarevcenter/README.md)

* [CreateRefresh](docs/rootvmwarevcenter/README.md#createrefresh) - Refresh vCenter Server metadata
* [CreateRefreshVMV1](docs/rootvmwarevcenter/README.md#createrefreshvmv1) - Refresh single virtual machine metadata in a vcenter
* [CreateVcenter](docs/rootvmwarevcenter/README.md#createvcenter) - Add vCenter Server
* [DeleteVcenter](docs/rootvmwarevcenter/README.md#deletevcenter) - Remove vCenter Server
* [GetHotAddBandwidth](docs/rootvmwarevcenter/README.md#gethotaddbandwidth) - Get the ingest and export bandwidth limits for HotAdd with the vCenter
* [GetHotAddNetwork](docs/rootvmwarevcenter/README.md#gethotaddnetwork) - Retrieve the user-configured network for HotAdd operations
* [GetNetworks](docs/rootvmwarevcenter/README.md#getnetworks) - Get the user-configured networks in the vCenter
* [GetNumProxiesNeeded](docs/rootvmwarevcenter/README.md#getnumproxiesneeded) - Get the number of HotAdd proxies needed for the vCenter
* [GetVcenter](docs/rootvmwarevcenter/README.md#getvcenter) - Get the details of a vCenter Server
* [GetVcenterAsyncRequestStatus](docs/rootvmwarevcenter/README.md#getvcenterasyncrequeststatus) - Get vCenter Server async request
* [PatchVcenter](docs/rootvmwarevcenter/README.md#patchvcenter) - Update the SLA Domain for a vCenter Server
* [QueryHotAddProxyVM](docs/rootvmwarevcenter/README.md#queryhotaddproxyvm) - Get a list of HotAdd proxy virtual machines
* [QueryVcenter](docs/rootvmwarevcenter/README.md#queryvcenter) - Get list of vCenters
* [SetHotAddBandwidth](docs/rootvmwarevcenter/README.md#sethotaddbandwidth) - Set the ingest and export bandwidth limits for HotAdd with the vCenter
* [SetHotAddNetwork](docs/rootvmwarevcenter/README.md#sethotaddnetwork) - Set the user-configured network for HotAdd backup and recovery
* [UpdateVcenter](docs/rootvmwarevcenter/README.md#updatevcenter) - Update vCenter Server

### [RootVmwareVM](docs/rootvmwarevm/README.md)

* [BatchMountSnapshot](docs/rootvmwarevm/README.md#batchmountsnapshot) - Live mount a snapshot each from a set of virtual machines
* [BrowseVmwareSnapshot](docs/rootvmwarevm/README.md#browsevmwaresnapshot) - List files in VM snapshot
* [BulkCreateOnDemandBackup](docs/rootvmwarevm/README.md#bulkcreateondemandbackup) - Take an on-demand snapshot of multiple virtual machines
* [CreateDownloadFileJob](docs/rootvmwarevm/README.md#createdownloadfilejob) - Download file from VM snapshot
* [CreateDownloadSnapshotFromCloud](docs/rootvmwarevm/README.md#createdownloadsnapshotfromcloud) - Download snapshot from archive
* [CreateExportV1](docs/rootvmwarevm/README.md#createexportv1) - Export VM snapshot
* [CreateExportWithDownloadFromCloudV1](docs/rootvmwarevm/README.md#createexportwithdownloadfromcloudv1) - Download a snapshot from an archival location, then export a virtual machine using the downloaded snapshot
* [CreateInstantRecovery](docs/rootvmwarevm/README.md#createinstantrecovery) - Instantly recover a VM
* [CreateMountV1](docs/rootvmwarevm/README.md#createmountv1) - Live mount a VM from a snapshot
* [CreateOnDemandBackup](docs/rootvmwarevm/README.md#createondemandbackup) - Create an on-demand snapshot for a VM
* [CreateRestoreFileJob](docs/rootvmwarevm/README.md#createrestorefilejob) - Restore file from VM snapshot
* [CreateUnmount](docs/rootvmwarevm/README.md#createunmount) - Delete a Live Mount VM
* [DeleteVmwareSnapshot](docs/rootvmwarevm/README.md#deletevmwaresnapshot) - Delete VM snapshot
* [DeleteVmwareSnapshots](docs/rootvmwarevm/README.md#deletevmwaresnapshots) - Delete all snapshots of VM
* [GetAsyncRequestStatus](docs/rootvmwarevm/README.md#getasyncrequeststatus) - Get asynchronous request details for VM
* [GetMountV1](docs/rootvmwarevm/README.md#getmountv1) - Get information for a Live Mount
* [GetSnapshot](docs/rootvmwarevm/README.md#getsnapshot) - Get VM snapshot details
* [GetVirtualDisk](docs/rootvmwarevm/README.md#getvirtualdisk) - Details about the specific Virtual Disk
* [GetVM](docs/rootvmwarevm/README.md#getvm) - Get VM details
* [GetVMForceFullSpec](docs/rootvmwarevm/README.md#getvmforcefullspec) - Retrieve the configuration for forcing a full snapshot of a VMware virtual machine
* [GetVmwareCdpLiveInfo](docs/rootvmwarevm/README.md#getvmwarecdpliveinfo) - Returns the live CDP info for a set of CDP-enabled virtual machines
* [GetVmwareCdpStateInfo](docs/rootvmwarevm/README.md#getvmwarecdpstateinfo) - Returns CDP state info for a set of virtual machines
* [GetVmwareMissedRecoverableRanges](docs/rootvmwarevm/README.md#getvmwaremissedrecoverableranges) - Get missed time ranges for point in time recovery
* [GetVmwareRecoverableRanges](docs/rootvmwarevm/README.md#getvmwarerecoverableranges) - Get available time ranges for point in time recovery
* [GetVmwareVMMissedRecoverableRangesInBatch](docs/rootvmwarevm/README.md#getvmwarevmmissedrecoverablerangesinbatch) - Returns the recoverable ranges that were missed for a set of CDP-enabled virtual machines
* [GetVmwareVMRecoverableRangesInBatch](docs/rootvmwarevm/README.md#getvmwarevmrecoverablerangesinbatch) - Returns the recoverable ranges for a set of CDP-enabled virtual machines
* [MissedSnapshots](docs/rootvmwarevm/README.md#missedsnapshots) - Get details about missed snapshots for a VM
* [QueryMountV1](docs/rootvmwarevm/README.md#querymountv1) - Get Live Mount information
* [QuerySnapshot](docs/rootvmwarevm/README.md#querysnapshot) - Get list of snapshots of VM
* [QuerySnapshotsForVms](docs/rootvmwarevm/README.md#querysnapshotsforvms) - Get snapshot information for a list of virtual machines
* [QueryVM](docs/rootvmwarevm/README.md#queryvm) - Get list of VMs
* [RelocateMount](docs/rootvmwarevm/README.md#relocatemount) - Relocate a virtual machine to another datastore
* [RequestVMForceFullSnapshot](docs/rootvmwarevm/README.md#requestvmforcefullsnapshot) - Request a full snapshot for the next backup job of a VMware virtual machine
* [RunGuestOsScript](docs/rootvmwarevm/README.md#runguestosscript) - Run guest OS script
* [SearchVM](docs/rootvmwarevm/README.md#searchvm) - Search for a file from a VM
* [UpdateMount](docs/rootvmwarevm/README.md#updatemount) - Power a Live Mount on and off
* [UpdateVirtualDisk](docs/rootvmwarevm/README.md#updatevirtualdisk) - Update a specific Virtual Disk
* [UpdateVM](docs/rootvmwarevm/README.md#updatevm) - Update VM
* [VMMakePrimary](docs/rootvmwarevm/README.md#vmmakeprimary) - Make this cluster the primary for agents on a set of VMs
* [VMRegisterAgent](docs/rootvmwarevm/README.md#vmregisteragent) - Register Rubrik Backup Service

### [RootVolumeGroup](docs/rootvolumegroup/README.md)

* [CreateOnDemandVolumeGroupBackup](docs/rootvolumegroup/README.md#createondemandvolumegroupbackup) - Create on-demand snapshot for the Volume Group
* [GetVolumeGroup](docs/rootvolumegroup/README.md#getvolumegroup) - Get Volume Group details
* [GetVolumeGroupForceFullSpec](docs/rootvolumegroup/README.md#getvolumegroupforcefullspec) - Retrieve the configuration for forcing a full snapshot
* [GetVolumeGroupSnapshot](docs/rootvolumegroup/README.md#getvolumegroupsnapshot) - Get Volume Group snapshot details
* [GetVolumeGroupSnapshotMount](docs/rootvolumegroup/README.md#getvolumegroupsnapshotmount) - Get summary information for a mount
* [PatchVolumeGroup](docs/rootvolumegroup/README.md#patchvolumegroup) - Update Volume Group properties
* [QueryVolumeGroup](docs/rootvolumegroup/README.md#queryvolumegroup) - Get list of Volume Groups
* [QueryVolumeGroupLatestSnapshot](docs/rootvolumegroup/README.md#queryvolumegrouplatestsnapshot) - Get the latest snapshot of the Volume Group
* [QueryVolumeGroupSnapshot](docs/rootvolumegroup/README.md#queryvolumegroupsnapshot) - Get list of snapshots of the Volume Group
* [QueryVolumeGroupSnapshotMount](docs/rootvolumegroup/README.md#queryvolumegroupsnapshotmount) - Get summary information for all mounts
* [RequestVolumeGroupForceFullSnapshot](docs/rootvolumegroup/README.md#requestvolumegroupforcefullsnapshot) - Request a full snapshot on the next backup job of a Volume Group

### [RootWindowsCluster](docs/rootwindowscluster/README.md)

* [GetWindowsCluster](docs/rootwindowscluster/README.md#getwindowscluster) - Get detailed information for a Windows cluster
* [QueryWindowsCluster](docs/rootwindowscluster/README.md#querywindowscluster) - Get summary information for Windows clusters
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
