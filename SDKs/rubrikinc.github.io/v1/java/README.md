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
import org.openapis.openapi.models.operations.DisableArchivalLocationRequest;
import org.openapis.openapi.models.operations.DisableArchivalLocationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("corrupti", "provident") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DisableArchivalLocationRequest req = new DisableArchivalLocationRequest("distinctio");            

            DisableArchivalLocationResponse res = sdk.rootArchive.disableArchivalLocation(req);

            if (res.statusCode == 200) {
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


### [rootArchive](docs/rootarchive/README.md)

* [disableArchivalLocation](docs/rootarchive/README.md#disablearchivallocation) - Disable location for archival and modification operations
* [enableArchivalLocation](docs/rootarchive/README.md#enablearchivallocation) - Enable archival location for archival and modification operations
* [getAwsAccountId](docs/rootarchive/README.md#getawsaccountid) - Get the AWS account ID of an AWS S3 archival location
* [refreshArchivalLocationDataSources](docs/rootarchive/README.md#refresharchivallocationdatasources) - Refresh archive information for a list of data sources

### [rootAuthorization](docs/rootauthorization/README.md)

* [deleteAuthzCache](docs/rootauthorization/README.md#deleteauthzcache) - Clear cached authorization information

### [rootBackup](docs/rootbackup/README.md)

* [createBackupRemediationAsyncTask](docs/rootbackup/README.md#createbackupremediationasynctask) - Reschedule unsuccessful backup tasks
* [getBackupRemediationAsyncTaskStatus](docs/rootbackup/README.md#getbackupremediationasynctaskstatus) - Get status of reschedule attempt
* [getBackupVerificationAsyncRequestStatus](docs/rootbackup/README.md#getbackupverificationasyncrequeststatus) - Get asynchronous request details for Backup Verification
* [verifySnapshot](docs/rootbackup/README.md#verifysnapshot) - Trigger a job for snapshot verification

### [rootBlackoutWindow](docs/rootblackoutwindow/README.md)

* [getBlackoutWindowStatus](docs/rootblackoutwindow/README.md#getblackoutwindowstatus) - Get current status of global blackout window
* [toggleBlackoutWindow](docs/rootblackoutwindow/README.md#toggleblackoutwindow) - Starts or stops the global blackout window in local Rubrik cluster

### [rootCertificate](docs/rootcertificate/README.md)

* [deleteCertificate](docs/rootcertificate/README.md#deletecertificate) - Delete imported certificate object
* [exportCertificate](docs/rootcertificate/README.md#exportcertificate) - Get a certificate summary to export
* [importCertificate](docs/rootcertificate/README.md#importcertificate) - Import a certificate
* [queryCertificates](docs/rootcertificate/README.md#querycertificates) - Get all certificates
* [updateCertificate](docs/rootcertificate/README.md#updatecertificate) - Update a certificate entry

### [rootCertificateAgent](docs/rootcertificateagent/README.md)

* [markAgentSecondaryCertificate](docs/rootcertificateagent/README.md#markagentsecondarycertificate) - Mark a certificate to be added to agents
* [queryAgentSecondaryCertificate](docs/rootcertificateagent/README.md#queryagentsecondarycertificate) - Get all potential agent secondary cluster certificates
* [unmarkAgentSecondaryCertificate](docs/rootcertificateagent/README.md#unmarkagentsecondarycertificate) - Unmark a certificate that was previously marked

### [rootCloudUtilization](docs/rootcloudutilization/README.md)

* [doCloudOutForecast](docs/rootcloudutilization/README.md#docloudoutforecast) - Forecast of the cloud utilization for CloudOut

### [rootCluster](docs/rootcluster/README.md)

* [addKmipServer](docs/rootcluster/README.md#addkmipserver) - Add a KMIP server
* [addSyslogExportRule](docs/rootcluster/README.md#addsyslogexportrule) - Add a new syslog export rule
* [availableVersion](docs/rootcluster/README.md#availableversion) - Retrieve CDM versions available for upgrade
* [changeClusterNodeHostnames](docs/rootcluster/README.md#changeclusternodehostnames) - Change hostname for nodes in a Rubrik cluster
* [deleteKmipServer](docs/rootcluster/README.md#deletekmipserver) - Remove the specified KMIP server
* [deleteSyslogExportRule](docs/rootcluster/README.md#deletesyslogexportrule) - Delete the specified syslog export rule
* [getAsyncRequestStatusForUpgrade](docs/rootcluster/README.md#getasyncrequeststatusforupgrade) - Get asynchronous request details
* [getClusterApiVersion](docs/rootcluster/README.md#getclusterapiversion) - Get cluster REST API version
* [getClusterCertificate](docs/rootcluster/README.md#getclustercertificate) - Get the cluster certificate
* [getClusterNodeHostnames](docs/rootcluster/README.md#getclusternodehostnames) - Get the node ID to hostname mapping for all the nodes in a Rubrik cluster

* [getClusterNodeIds](docs/rootcluster/README.md#getclusternodeids) - Get the name of the nodes in the cluster
* [getClusterVersion](docs/rootcluster/README.md#getclusterversion) - Get cluster software version
* [getCorsConfiguration](docs/rootcluster/README.md#getcorsconfiguration) - Get CORS configuration
* [getEncryptionStatus](docs/rootcluster/README.md#getencryptionstatus) - Get encryption at rest status
* [getFips](docs/rootcluster/README.md#getfips) - Get FIPS enablement status
* [getKmipClient](docs/rootcluster/README.md#getkmipclient) - Get the KMIP client configuration
* [getKmipServer](docs/rootcluster/README.md#getkmipserver) - Get KMIP server information
* [getPeriodicUpgradePrechecksStatus](docs/rootcluster/README.md#getperiodicupgradeprechecksstatus) - Get the result of the latest run of the upgrade prechecks
* [getPublicClusterInfo](docs/rootcluster/README.md#getpublicclusterinfo) - Get cluster details
* [getRubrikSnmpMibDownloadLink](docs/rootcluster/README.md#getrubriksnmpmibdownloadlink) - Get the link for Rubrik SNMP MIB file
* [getSyslogExportRule](docs/rootcluster/README.md#getsyslogexportrule) - Get the specified syslog export rule
* [getSyslogExportRules](docs/rootcluster/README.md#getsyslogexportrules) - Get the configured syslog export rules
* [getSyslogMsgSnmpMibDownloadLink](docs/rootcluster/README.md#getsyslogmsgsnmpmibdownloadlink) - Get the link for SYSLOG-MSG-MIB file
* [getSyslogTcSnmpMibDownloadLink](docs/rootcluster/README.md#getsyslogtcsnmpmibdownloadlink) - Get the link for SYSLOG-TC-MIB file
* [getTotpGlobalSetting](docs/rootcluster/README.md#gettotpglobalsetting) - Get global TOTP setting
* [getTruststores](docs/rootcluster/README.md#gettruststores) - Get summary of all truststores
* [getWebSignedCertificate](docs/rootcluster/README.md#getwebsignedcertificate) - Get the signed certificate for Web server
* [hasRubrikSupportPortalCredentials](docs/rootcluster/README.md#hasrubriksupportportalcredentials) - Check credentials to the Rubrik support portal
* [manualDiscover](docs/rootcluster/README.md#manualdiscover) - Manually discover nodes
* [manualDiscoverIpv4](docs/rootcluster/README.md#manualdiscoveripv4) - Manually discover nodes over IPv4 address
* [monitorEvents](docs/rootcluster/README.md#monitorevents) - Get event notifications
* [patchPasswordRequirements](docs/rootcluster/README.md#patchpasswordrequirements) - Set password requirements
* [queryPasswordRequirements](docs/rootcluster/README.md#querypasswordrequirements) - Get password requirements
* [resetWebSignedCertificate](docs/rootcluster/README.md#resetwebsignedcertificate) - Reset the signed certificate for Web server
* [runPeriodicUpgradePrechecks](docs/rootcluster/README.md#runperiodicupgradeprechecks) - Start an on demand run of the prechecks
* [setKmipClient](docs/rootcluster/README.md#setkmipclient) - Specify KMIP client credentials for nodes
* [setTruststoreCertificate](docs/rootcluster/README.md#settruststorecertificate) - Set certificates for one or more truststores
* [setWebSignedCertificate](docs/rootcluster/README.md#setwebsignedcertificate) - Set a signed certificate for Web server
* [stageCdmSoftware](docs/rootcluster/README.md#stagecdmsoftware) - Stage software on CDM for upgrade
* [testSyslogExportRule](docs/rootcluster/README.md#testsyslogexportrule) - Test the specified syslog export rule
* [unsetTruststoreCertificate](docs/rootcluster/README.md#unsettruststorecertificate) - Remove certificate associated with specified truststore
* [updateCluster](docs/rootcluster/README.md#updatecluster) - Change Rubrik cluster properties
* [updateCorsConfiguration](docs/rootcluster/README.md#updatecorsconfiguration) - Update CORS configuration
* [updateFips](docs/rootcluster/README.md#updatefips) - Update FIPS enablement status
* [updateRubrikSupportPortalCredentials](docs/rootcluster/README.md#updaterubriksupportportalcredentials) - Update credentials to the Rubrik support portal
* [updateSyslogExportRule](docs/rootcluster/README.md#updatesyslogexportrule) - Update the specified syslog export rule
* [updateTotpGlobalSetting](docs/rootcluster/README.md#updatetotpglobalsetting) - Update TOTP global setting

### [rootConfigHistory](docs/rootconfighistory/README.md)

* [queryConfigurationHistoryUpdates](docs/rootconfighistory/README.md#queryconfigurationhistoryupdates) - View a list of filtered configuration updates
* [retrieveConfigurationValues](docs/rootconfighistory/README.md#retrieveconfigurationvalues) - View a list of configurations and their values on a given date

### [rootCsr](docs/rootcsr/README.md)

* [deleteCsr](docs/rootcsr/README.md#deletecsr) - Delete a certificate signing request
* [generateCsr](docs/rootcsr/README.md#generatecsr) - Generate a new private key and return a certificate signing request
* [getAllCsrs](docs/rootcsr/README.md#getallcsrs) - Get all certificate signing requests

### [rootDataSource](docs/rootdatasource/README.md)

* [bulkDeleteSnapshots](docs/rootdatasource/README.md#bulkdeletesnapshots) - Bulk delete all snapshots for the given objects
* [bulkDeleteSnapshotsForObject](docs/rootdatasource/README.md#bulkdeletesnapshotsforobject) - Bulk delete specified snapshots for the given object
* [expiredCustomRetentionSnapshots](docs/rootdatasource/README.md#expiredcustomretentionsnapshots) - Returns a list of snapshots that have expired according to their snapshot-level SLA Domain assignments


### [rootDatabaseLogReport](docs/rootdatabaselogreport/README.md)

* [queryLogReport](docs/rootdatabaselogreport/README.md#querylogreport) - Get the database log backup delay information
* [queryReportProperties](docs/rootdatabaselogreport/README.md#queryreportproperties) - Get the database log backup report properties
* [updateReportProperties](docs/rootdatabaselogreport/README.md#updatereportproperties) - Update the database log backup report properties

### [rootEvent](docs/rootevent/README.md)

* [getEventsCsvDownloadLink](docs/rootevent/README.md#geteventscsvdownloadlink) - Download summary of events as a CSV file
* [queryEventV1](docs/rootevent/README.md#queryeventv1) - Get information for all events
* [queryLatestEventsV1](docs/rootevent/README.md#querylatesteventsv1) - Get latest events with their associated event series information

### [rootEventSeries](docs/rooteventseries/README.md)

* [queryEventSeriesByIdV1](docs/rooteventseries/README.md#queryeventseriesbyidv1) - Get all events and relevant information associated with an event series ID

### [rootExclusionPattern](docs/rootexclusionpattern/README.md)

* [bulkCreateExclusionPattern](docs/rootexclusionpattern/README.md#bulkcreateexclusionpattern) - Bulk create exclusion patterns
* [bulkDeleteExclusionPattern](docs/rootexclusionpattern/README.md#bulkdeleteexclusionpattern) - Bulk delete the provided mutable exclusion patterns
* [createExclusionPattern](docs/rootexclusionpattern/README.md#createexclusionpattern) - Create an exclusion pattern
* [deleteExclusionPattern](docs/rootexclusionpattern/README.md#deleteexclusionpattern) - Delete a mutable exclusion pattern
* [getExclusionPattern](docs/rootexclusionpattern/README.md#getexclusionpattern) - Get details of a exclusion pattern
* [queryExclusionPattern](docs/rootexclusionpattern/README.md#queryexclusionpattern) - Get a summary of all exclusion patterns
* [updateExclusionPattern](docs/rootexclusionpattern/README.md#updateexclusionpattern) - Update a mutable exclusion pattern

### [rootFailoverCluster](docs/rootfailovercluster/README.md)

* [bulkDeleteFailoverCluster](docs/rootfailovercluster/README.md#bulkdeletefailovercluster) - Delete the provided failover clusters
* [createFailoverCluster](docs/rootfailovercluster/README.md#createfailovercluster) - Create a failover cluster
* [deleteFailoverCluster](docs/rootfailovercluster/README.md#deletefailovercluster) - Delete a failover cluster
* [getFailoverCluster](docs/rootfailovercluster/README.md#getfailovercluster) - Get details of a failover cluster
* [queryFailoverCluster](docs/rootfailovercluster/README.md#queryfailovercluster) - Get a summary of all failover clusters
* [updateFailoverCluster](docs/rootfailovercluster/README.md#updatefailovercluster) - Update a failover cluster

### [rootFailoverClusterFailoverClusterApp](docs/rootfailoverclusterfailoverclusterapp/README.md)

* [bulkDeleteFailoverClusterApp](docs/rootfailoverclusterfailoverclusterapp/README.md#bulkdeletefailoverclusterapp) - Delete failover cluster applications
* [createFailoverClusterApp](docs/rootfailoverclusterfailoverclusterapp/README.md#createfailoverclusterapp) - Create a failover cluster app
* [deleteFailoverClusterApp](docs/rootfailoverclusterfailoverclusterapp/README.md#deletefailoverclusterapp) - Delete a failover cluster app
* [getFailoverClusterApp](docs/rootfailoverclusterfailoverclusterapp/README.md#getfailoverclusterapp) - Get details of a failover cluster app
* [queryFailoverClusterApp](docs/rootfailoverclusterfailoverclusterapp/README.md#queryfailoverclusterapp) - Get a summary of all failover cluster apps
* [updateFailoverClusterApp](docs/rootfailoverclusterfailoverclusterapp/README.md#updatefailoverclusterapp) - Update a failover cluster app

### [rootFailoverClusterHierarchy](docs/rootfailoverclusterhierarchy/README.md)

* [getFailoverClusterHierarchyChildren](docs/rootfailoverclusterhierarchy/README.md#getfailoverclusterhierarchychildren) - Get list of immediate descendant objects
* [getFailoverClusterHierarchyDescendants](docs/rootfailoverclusterhierarchy/README.md#getfailoverclusterhierarchydescendants) - Get list of descendant objects
* [getFailoverClusterHierarchyObject](docs/rootfailoverclusterhierarchy/README.md#getfailoverclusterhierarchyobject) - Get summary of a hierarchy object

### [rootFileset](docs/rootfileset/README.md)

* [browseFilesetSnapshot](docs/rootfileset/README.md#browsefilesetsnapshot) - Lists all files and directories in a given path
* [createDownloadFilesetSnapshotFromCloud](docs/rootfileset/README.md#createdownloadfilesetsnapshotfromcloud) - Create a download fileset snapshot from archival request
* [createFileset](docs/rootfileset/README.md#createfileset) - Create one fileset for a host
* [createFilesetBackupJob](docs/rootfileset/README.md#createfilesetbackupjob) - Initiate an on-demand backup for a fileset
* [createFilesetDownloadFileJob](docs/rootfileset/README.md#createfilesetdownloadfilejob) - Create a file download job from a fileset backup
* [createFilesetExportFileJob](docs/rootfileset/README.md#createfilesetexportfilejob) - Create export job
* [createFilesetRestoreFileJob](docs/rootfileset/README.md#createfilesetrestorefilejob) - Create restore job
* [deleteFileset](docs/rootfileset/README.md#deletefileset) - Delete a fileset
* [deleteFilesetSnapshot](docs/rootfileset/README.md#deletefilesetsnapshot) - Delete a fileset snapshot
* [deleteFilesetSnapshots](docs/rootfileset/README.md#deletefilesetsnapshots) - Delete all snapshots of a fileset
* [getFileset](docs/rootfileset/README.md#getfileset) - Get information for a single fileset
* [getFilesetAsyncRequestStatus](docs/rootfileset/README.md#getfilesetasyncrequeststatus) - Get details about an async request
* [getFilesetSnapshot](docs/rootfileset/README.md#getfilesetsnapshot) - Get information for a fileset snapshot
* [getMissedFilesetSnapshots](docs/rootfileset/README.md#getmissedfilesetsnapshots) - Get missed snapshots for a fileset
* [queryFileset](docs/rootfileset/README.md#queryfileset) - Get summary information for all filesets
* [searchFileset](docs/rootfileset/README.md#searchfileset) - Search for a file within the fileset
* [updateFileset](docs/rootfileset/README.md#updatefileset) - Update a Fileset

### [rootFilesetTemplate](docs/rootfilesettemplate/README.md)

* [createFilesetTemplate](docs/rootfilesettemplate/README.md#createfilesettemplate) - Create a fileset template
* [deleteFilesetTemplate](docs/rootfilesettemplate/README.md#deletefilesettemplate) - Delete a fileset template
* [getFilesetTemplate](docs/rootfilesettemplate/README.md#getfilesettemplate) - Get information for a fileset template
* [queryFilesetTemplate](docs/rootfilesettemplate/README.md#queryfilesettemplate) - Get summary information for all fileset templates
* [updateFilesetTemplate](docs/rootfilesettemplate/README.md#updatefilesettemplate) - Modify a fileset template

### [rootHdfs](docs/roothdfs/README.md)

* [browseHdfsSnapshot](docs/roothdfs/README.md#browsehdfssnapshot) - Lists all files and directories in a given path
* [createHdfs](docs/roothdfs/README.md#createhdfs) - Create one HDFS directory for a host
* [createHdfsBackupJob](docs/roothdfs/README.md#createhdfsbackupjob) - Initiate an on-demand backup for a HDFS directory
* [createHdfsExportFileJob](docs/roothdfs/README.md#createhdfsexportfilejob) - Create export job
* [createHdfsRestoreFileJob](docs/roothdfs/README.md#createhdfsrestorefilejob) - Create restore job
* [deleteHdfs](docs/roothdfs/README.md#deletehdfs) - Delete a HDFS directory
* [deleteHdfsSnapshot](docs/roothdfs/README.md#deletehdfssnapshot) - Delete a HDFS directory snapshot
* [deleteHdfsSnapshots](docs/roothdfs/README.md#deletehdfssnapshots) - Delete all snapshots of a HDFS directory
* [getHdfs](docs/roothdfs/README.md#gethdfs) - Get information for a single HDFS directory
* [getHdfsAsyncRequestStatus](docs/roothdfs/README.md#gethdfsasyncrequeststatus) - Get details about an asynchronous request
* [getHdfsSnapshot](docs/roothdfs/README.md#gethdfssnapshot) - Get information for a HDFS directory snapshot
* [getMissedHdfsSnapshots](docs/roothdfs/README.md#getmissedhdfssnapshots) - Get missed snapshots for a HDFS directory
* [queryHdfs](docs/roothdfs/README.md#queryhdfs) - Get summary information for all HDFS directories
* [searchHdfs](docs/roothdfs/README.md#searchhdfs) - Search for a file within the HDFS directory
* [updateHdfs](docs/roothdfs/README.md#updatehdfs) - Update a HDFS directory

### [rootHdfsTemplate](docs/roothdfstemplate/README.md)

* [createHdfsTemplate](docs/roothdfstemplate/README.md#createhdfstemplate) - Create a HDFS directory template
* [deleteHdfsTemplate](docs/roothdfstemplate/README.md#deletehdfstemplate) - Delete a HDFS directory template
* [getHdfsTemplate](docs/roothdfstemplate/README.md#gethdfstemplate) - Get information for a HDFS directory template
* [queryHdfsTemplate](docs/roothdfstemplate/README.md#queryhdfstemplate) - Get summary information for all HDFS directory templates
* [updateHdfsTemplate](docs/roothdfstemplate/README.md#updatehdfstemplate) - Modify a HDFS directory template

### [rootHealthMonitor](docs/roothealthmonitor/README.md)

* [getPolicies](docs/roothealthmonitor/README.md#getpolicies) - Get details of health monitor policies
* [getPolicyStatus](docs/roothealthmonitor/README.md#getpolicystatus) - Get the status of health monitor policy enforcement
* [runPolicies](docs/roothealthmonitor/README.md#runpolicies) - Enforce health monitor policies

### [rootHierarchy](docs/roothierarchy/README.md)

* [bulkHierarchySlaConflictsV1](docs/roothierarchy/README.md#bulkhierarchyslaconflictsv1) - Retrieve the list of descendant objects with SLA conflicts in bulk

### [rootHost](docs/roothost/README.md)

* [bulkRegisterHostAsync](docs/roothost/README.md#bulkregisterhostasync) - Register hosts
* [deleteHost](docs/roothost/README.md#deletehost) - Delete a registered host
* [discoverNasShares](docs/roothost/README.md#discovernasshares) - Discover and return all shares on a NAS host
* [getHost](docs/roothost/README.md#gethost) - Get summary information for a host
* [getRbsHostInfo](docs/roothost/README.md#getrbshostinfo) - Get the Rubrik Backup Service details for a host
* [hostMakePrimary](docs/roothost/README.md#hostmakeprimary) - Make this cluster the primary for agents on a set of hosts
* [queryHost](docs/roothost/README.md#queryhost) - Get summary information for hosts
* [queryHostVolume](docs/roothost/README.md#queryhostvolume) - Get list of Volume Group volumes
* [rbsInstall](docs/roothost/README.md#rbsinstall) - Install Rubrik Backup Service on a host
* [rbsUninstall](docs/roothost/README.md#rbsuninstall) - Uninstall Rubrik Backup Service from a host
* [rbsUpgrade](docs/roothost/README.md#rbsupgrade) - Upgrade Rubrik Backup Service on a host
* [refreshHost](docs/roothost/README.md#refreshhost) - Refresh a host
* [registerHost](docs/roothost/README.md#registerhost) - Register a host
* [registerHostAsync](docs/roothost/README.md#registerhostasync) - Register a host
* [searchHost](docs/roothost/README.md#searchhost) - Search for a file within the host
* [updateCertificateHost](docs/roothost/README.md#updatecertificatehost) - Update certificate
* [updateHost](docs/roothost/README.md#updatehost) - Modify information for a registered host

### [rootHostHierarchy](docs/roothosthierarchy/README.md)

* [getHostHierarchyChildren](docs/roothosthierarchy/README.md#gethosthierarchychildren) - Get immediate descendant objects
* [getHostHierarchyObject](docs/roothosthierarchy/README.md#gethosthierarchyobject) - Get summary of a host/share hierarchy object

### [rootHostShare](docs/roothostshare/README.md)

* [bulkAddHostShares](docs/roothostshare/README.md#bulkaddhostshares) - Add NAS shares in bulk
* [bulkUpdateHostShare](docs/roothostshare/README.md#bulkupdatehostshare) - Update network shares

### [rootHypervVm](docs/roothypervvm/README.md)

* [getHypervVirtualMachineForceFullSpec](docs/roothypervvm/README.md#gethypervvirtualmachineforcefullspec) - Retrieve the configuration which has been set for forcing a full snapshot for a Hyper-V Virtual Machine
* [requestHypervVirtualMachineForceFullSnapshot](docs/roothypervvm/README.md#requesthypervvirtualmachineforcefullsnapshot) - Request a full snapshot during next backup job of a Hyper-V virtual machine

### [rootIdpAuthDomain](docs/rootidpauthdomain/README.md)

* [createIdProviderAuthDomain](docs/rootidpauthdomain/README.md#createidproviderauthdomain) - Add a new IdP authentication domain
* [deleteIdProviderAuthDomain](docs/rootidpauthdomain/README.md#deleteidproviderauthdomain) - Delete an IdP authentication domain for the given ID
* [getIdProviderAuthDomain](docs/rootidpauthdomain/README.md#getidproviderauthdomain) - Get an IdP authentication domain for the given id
* [queryIdProviderAuthDomain](docs/rootidpauthdomain/README.md#queryidproviderauthdomain) - Get a list of IdP authentication domains
* [updateIdProviderAuthDomain](docs/rootidpauthdomain/README.md#updateidproviderauthdomain) - Update an existing IdP authentication domain

### [rootJobMonitoring](docs/rootjobmonitoring/README.md)

* [createMonitoringSubscription](docs/rootjobmonitoring/README.md#createmonitoringsubscription) - Create an email subscription to the job monitoring page
* [deleteMonitoringSubscription](docs/rootjobmonitoring/README.md#deletemonitoringsubscription) - Delete a monitoring page email subscription
* [getJobMonitoringInfo](docs/rootjobmonitoring/README.md#getjobmonitoringinfo) - Get job monitoring information
* [getJobMonitoringInfoCsvDownloadLink](docs/rootjobmonitoring/README.md#getjobmonitoringinfocsvdownloadlink) - Download job monitoring information as a CSV file
* [getMonitoringJobCountByJobState](docs/rootjobmonitoring/README.md#getmonitoringjobcountbyjobstate) - Get job monitoring summary information separated by job state
* [getMonitoringJobCountByJobType](docs/rootjobmonitoring/README.md#getmonitoringjobcountbyjobtype) - Get job monitoring summary information separated by job type
* [getMonitoringSubscription](docs/rootjobmonitoring/README.md#getmonitoringsubscription) - Get a specific monitoring email subscription by id
* [getMonitoringSubscriptions](docs/rootjobmonitoring/README.md#getmonitoringsubscriptions) - Returns all email subscriptions for the monitoring page
* [updateMonitoringSubscription](docs/rootjobmonitoring/README.md#updatemonitoringsubscription) - Update a monitoring email subscription

### [rootLdapService](docs/rootldapservice/README.md)

* [createLdapService](docs/rootldapservice/README.md#createldapservice) - Add a new authentication domain
* [deleteLdapService](docs/rootldapservice/README.md#deleteldapservice) - Delete an authentication domain for the given ID
* [getLdapService](docs/rootldapservice/README.md#getldapservice) - Get a LDAP service for the given ID
* [patchLdapService](docs/rootldapservice/README.md#patchldapservice) - Update an existing authentication domain
* [putLdapService](docs/rootldapservice/README.md#putldapservice) - Replace the values of an authentication domain
* [queryLdapService](docs/rootldapservice/README.md#queryldapservice) - Get a list of LDAP services

### [rootLegalHold](docs/rootlegalhold/README.md)

* [applyLegalHold](docs/rootlegalhold/README.md#applylegalhold) - Apply a Legal Hold
* [dissolveLegalHoldSnapshots](docs/rootlegalhold/README.md#dissolvelegalholdsnapshots) - Dissolve a collection of snapshots of specified data source from Legal Hold
* [getLegalHoldObjects](docs/rootlegalhold/README.md#getlegalholdobjects) - Get objects part of Legal Hold
* [queryLegalHold](docs/rootlegalhold/README.md#querylegalhold) - Get snasphots held under legal hold

### [rootManagedVolume](docs/rootmanagedvolume/README.md)

* [createManagedVolumeGenerateScriptJob](docs/rootmanagedvolume/README.md#createmanagedvolumegeneratescriptjob) - Generate and download unified view script

### [rootMfaRsa](docs/rootmfarsa/README.md)

* [createRsaMfaServer](docs/rootmfarsa/README.md#creatersamfaserver) - Register a new RSA server
* [deleteRsaMfaServer](docs/rootmfarsa/README.md#deletersamfaserver) - Delete RSA server
* [getRsaMfaServer](docs/rootmfarsa/README.md#getrsamfaserver) - Get RSA server configuration
* [queryRsaMfaServers](docs/rootmfarsa/README.md#queryrsamfaservers) - Get RSA server configuration
* [updateRsaMfaServer](docs/rootmfarsa/README.md#updatersamfaserver) - Update RSA server configuration

### [rootMssql](docs/rootmssql/README.md)

* [assignMssqlSlaProperties](docs/rootmssql/README.md#assignmssqlslaproperties) - Assign SLA properties to SQL Server objects
* [browseMssqlBackupFiles](docs/rootmssql/README.md#browsemssqlbackupfiles) - List snapshots and logs from a Microsoft SQL database
* [bulkUpdateMssqlDbV1](docs/rootmssql/README.md#bulkupdatemssqldbv1) - Update multiple Microsoft SQL databases
* [countMssqlDbV1](docs/rootmssql/README.md#countmssqldbv1) - Returns a count of Microsoft SQL databases
* [countMssqlInstanceV1](docs/rootmssql/README.md#countmssqlinstancev1) - Returns a count of Microsoft SQL instances
* [createDownloadMssqlBackupFiles](docs/rootmssql/README.md#createdownloadmssqlbackupfiles) - Download snapshots and logs backups from a Microsoft SQL Database
* [createDownloadMssqlBackupFilesById](docs/rootmssql/README.md#createdownloadmssqlbackupfilesbyid) - Downloads a list of snapshot and log backups from a Microsoft SQL database
* [createExportMssqlDb](docs/rootmssql/README.md#createexportmssqldb) - Export a Microsoft SQL database to a new location
* [createLogShippingConfiguration](docs/rootmssql/README.md#createlogshippingconfiguration) - Create a log shipping configuration
* [createMssqlHostConfig](docs/rootmssql/README.md#createmssqlhostconfig) - Create a SQL Server host configuration
* [createMssqlMount](docs/rootmssql/README.md#createmssqlmount) - Live Mount SQL Server database from a point in time copy
* [createMssqlUnmount](docs/rootmssql/README.md#createmssqlunmount) - Delete a Live Mount of a SQL Server database
* [createOnDemandMssqlBackup](docs/rootmssql/README.md#createondemandmssqlbackup) - Take an on-demand backup of a Microsoft SQL database
* [createOnDemandMssqlBatchBackupV1](docs/rootmssql/README.md#createondemandmssqlbatchbackupv1) - Take an on-demand backup of multiple Microsoft SQL databases
* [createOnDemandMssqlLogBackup](docs/rootmssql/README.md#createondemandmssqllogbackup) - Take an on-demand log backup for a Microsoft SQL database
* [createRestoreMssqlDb](docs/rootmssql/README.md#createrestoremssqldb) - Restore a Microsoft SQL database
* [deleteDownloadedMssqlDbRecoverableRangesV1](docs/rootmssql/README.md#deletedownloadedmssqldbrecoverablerangesv1) - Delete downloaded recoverable ranges of a Microsoft SQL database
* [deleteLogShippingConfiguration](docs/rootmssql/README.md#deletelogshippingconfiguration) - Delete a specified log shipping configuration
* [deleteMssqlDbSnapshots](docs/rootmssql/README.md#deletemssqldbsnapshots) - Delete all snapshots of a Microsoft SQL database
* [deleteMssqlHostConfig](docs/rootmssql/README.md#deletemssqlhostconfig) - Delete the SQL Server host configuration
* [downloadFromArchive](docs/rootmssql/README.md#downloadfromarchive) - Download snapshots and log backups from archival
* [getCompatibleMssqlInstancesV1](docs/rootmssql/README.md#getcompatiblemssqlinstancesv1) - Get compatible instances for the recovery of a Microsoft SQL database
* [getDefaultDbPropertiesV1](docs/rootmssql/README.md#getdefaultdbpropertiesv1) - Returns the current default properties for Microsoft SQL databases
* [getDeleteMssqlDbRecoverableRangesStatusV1](docs/rootmssql/README.md#getdeletemssqldbrecoverablerangesstatusv1) - Get the deletion status of downloaded recoverable ranges
* [getLogShippingConfiguration](docs/rootmssql/README.md#getlogshippingconfiguration) - Get a log shipping configuration
* [getMissedMssqlDbSnapshots](docs/rootmssql/README.md#getmissedmssqldbsnapshots) - Get summary information for missed snapshots of a SQL database
* [getMssqlAsyncRequestStatus](docs/rootmssql/README.md#getmssqlasyncrequeststatus) - Get details for an async request
* [getMssqlAvailabilityGroupV1](docs/rootmssql/README.md#getmssqlavailabilitygroupv1) - Returns detailed information for a Microsoft SQL availability group
* [getMssqlDb](docs/rootmssql/README.md#getmssqldb) - Get detailed information for a Microsoft SQL database
* [getMssqlDbMissedRecoverableRanges](docs/rootmssql/README.md#getmssqldbmissedrecoverableranges) - Get missed recoverable ranges of a Microsoft SQL database
* [getMssqlDbRecoverableRanges](docs/rootmssql/README.md#getmssqldbrecoverableranges) - Get recoverable ranges of a Microsoft SQL database
* [getMssqlDbSnapshot](docs/rootmssql/README.md#getmssqldbsnapshot) - Get details information about a Microsoft SQL database snapshot
* [getMssqlHierarchyChildren](docs/rootmssql/README.md#getmssqlhierarchychildren) - Get list of immediate descendant objects
* [getMssqlHierarchyDescendants](docs/rootmssql/README.md#getmssqlhierarchydescendants) - Get list of descendant objects
* [getMssqlHierarchyObject](docs/rootmssql/README.md#getmssqlhierarchyobject) - Get summary of a SQL Server hierarchy object
* [getMssqlHostConfig](docs/rootmssql/README.md#getmssqlhostconfig) - Get the configuration for a specific host
* [getMssqlInstance](docs/rootmssql/README.md#getmssqlinstance) - Get detailed information for a Microsoft SQL instance
* [getMssqlMount](docs/rootmssql/README.md#getmssqlmount) - Get detailed information for a Live Mount of a SQL Server database
* [getOnDemandMssqlBatchBackupResultV1](docs/rootmssql/README.md#getondemandmssqlbatchbackupresultv1) - Returns details for an on-demand backup of multiple Microsoft SQL databases
* [mssqlGetRestoreFilesV1](docs/rootmssql/README.md#mssqlgetrestorefilesv1) - Returns a list all database files to be restored
* [mssqlGetSnappableIdV1](docs/rootmssql/README.md#mssqlgetsnappableidv1) - Returns the snappableId for a Microsoft SQL database
* [mssqlRestoreEstimateV1](docs/rootmssql/README.md#mssqlrestoreestimatev1) - Returns a size estimate for a restore or export
* [queryLogShippingConfigurations](docs/rootmssql/README.md#querylogshippingconfigurations) - Get log shipping configurations
* [queryMssqlAvailabilityGroupV1](docs/rootmssql/README.md#querymssqlavailabilitygroupv1) - Returns summary information for Microsoft SQL availability groups
* [queryMssqlDb](docs/rootmssql/README.md#querymssqldb) - Get summary information for SQL Server databases
* [queryMssqlDbSnapshot](docs/rootmssql/README.md#querymssqldbsnapshot) - Get summary information for snapshots of a Microsoft SQL database
* [queryMssqlHostConfig](docs/rootmssql/README.md#querymssqlhostconfig) - Get the summary of SQL Server host configurations
* [queryMssqlInstance](docs/rootmssql/README.md#querymssqlinstance) - Get summary information for Microsoft SQL instances
* [queryMssqlMount](docs/rootmssql/README.md#querymssqlmount) - Get summary information for all Live Mounts SQL Server databases
* [reseedSecondary](docs/rootmssql/README.md#reseedsecondary) - Reseed a secondary database
* [updateDefaultDbPropertiesV1](docs/rootmssql/README.md#updatedefaultdbpropertiesv1) - Update the default properties for Microsoft SQL databases
* [updateLogShippingConfiguration](docs/rootmssql/README.md#updatelogshippingconfiguration) - Update a specified log shipping configuration
* [updateMssqlAvailabilityGroupV1](docs/rootmssql/README.md#updatemssqlavailabilitygroupv1) - Update a Microsoft SQL availability group
* [updateMssqlDb](docs/rootmssql/README.md#updatemssqldb) - Update a Microsoft SQL database
* [updateMssqlHostConfig](docs/rootmssql/README.md#updatemssqlhostconfig) - Update host configuration
* [updateMssqlInstance](docs/rootmssql/README.md#updatemssqlinstance) - Update a Microsoft SQL instance

### [rootOracle](docs/rootoracle/README.md)

* [bulkUpdateOracleDb](docs/rootoracle/README.md#bulkupdateoracledb) - Update Oracle Databases
* [bulkUpdateOracleHost](docs/rootoracle/README.md#bulkupdateoraclehost) - Update Oracle Hosts
* [bulkUpdateOracleRac](docs/rootoracle/README.md#bulkupdateoraclerac) - Update Oracle RACs
* [createOracleValidateBackupJob](docs/rootoracle/README.md#createoraclevalidatebackupjob) - Validate Oracle database backups
* [deleteDownloadedSnapshots](docs/rootoracle/README.md#deletedownloadedsnapshots) - Delete downloaded Oracle database snapshots and log snapshots
* [getAcoParameterList](docs/rootoracle/README.md#getacoparameterlist) - List of supported Advanced Cloning Options
* [getExampleAcoDownloadLink](docs/rootoracle/README.md#getexampleacodownloadlink) - Link to download the Advanced Recovery Options example file
* [getOracleDbV1](docs/rootoracle/README.md#getoracledbv1) - Get Oracle database information
* [oracleRestoreEstimate](docs/rootoracle/README.md#oraclerestoreestimate) - Get a size estimate for a restore or export
* [queryOracleDbV1](docs/rootoracle/README.md#queryoracledbv1) - Get summary information for Oracle databases
* [updateOracleDataGuardGroup](docs/rootoracle/README.md#updateoracledataguardgroup) - Update an Oracle Data Guard group
* [updateOracleDbV1](docs/rootoracle/README.md#updateoracledbv1) - Update an Oracle database
* [validateOracleAcoFile](docs/rootoracle/README.md#validateoracleacofile) - Validate Oracle ACO file

### [rootOrganization](docs/rootorganization/README.md)

* [bulkCreateEnvoys](docs/rootorganization/README.md#bulkcreateenvoys) - Create a list of Rubrik Envoy objects
* [bulkDeleteEnvoys](docs/rootorganization/README.md#bulkdeleteenvoys) - Remove a list of Rubrik Envoy objects
* [bulkUpdateEnvoys](docs/rootorganization/README.md#bulkupdateenvoys) - Update a list of Rubrik Envoy objects

### [rootPrincipal](docs/rootprincipal/README.md)

* [assignRolesToPrincipals](docs/rootprincipal/README.md#assignrolestoprincipals) - Assign roles to principals
* [getRolesForPrincipals](docs/rootprincipal/README.md#getrolesforprincipals) - Get roles assigned to principals
* [revokeRolesFromPrincipals](docs/rootprincipal/README.md#revokerolesfromprincipals) - Revoke roles from principals
* [searchPrincipalsV1](docs/rootprincipal/README.md#searchprincipalsv1) - Search for principals

### [rootReplication](docs/rootreplication/README.md)

* [disablePerLocationPause](docs/rootreplication/README.md#disableperlocationpause) - Resume replication from specified source clusters
* [enablePerLocationPause](docs/rootreplication/README.md#enableperlocationpause) - Pause replication from specified source clusters

### [rootReports](docs/rootreports/README.md)

* [getComplianceSummarySlav1](docs/rootreports/README.md#getcompliancesummaryslav1) - Get compliance summary information
* [getComplianceSummaryV1](docs/rootreports/README.md#getcompliancesummaryv1) - Get compliance summary information
* [setReportConfig](docs/rootreports/README.md#setreportconfig) - Modify the report config

### [rootRole](docs/rootrole/README.md)

* [createRole](docs/rootrole/README.md#createrole) - Create a new role
* [deleteRole](docs/rootrole/README.md#deleterole) - Delete a role
* [getRole](docs/rootrole/README.md#getrole) - Get role information for the specified role
* [getRoles](docs/rootrole/README.md#getroles) - Get all roles in an organization
* [updateRole](docs/rootrole/README.md#updaterole) - Update role information

### [rootSaml](docs/rootsaml/README.md)

* [configRubrikSamlMetadata](docs/rootsaml/README.md#configrubriksamlmetadata) - Configure and generate Rubrik SAML metadata
* [getSamlSsoStatus](docs/rootsaml/README.md#getsamlssostatus) - Check SAML SSO Status
* [makeSamlAuthnRequest](docs/rootsaml/README.md#makesamlauthnrequest) - Make SAML authentication request

### [rootSapHana](docs/rootsaphana/README.md)

* [addSapHanaSystem](docs/rootsaphana/README.md#addsaphanasystem) - Add a SAP HANA system
* [configureSapHanaRestore](docs/rootsaphana/README.md#configuresaphanarestore) - Configure the target database for system copy restore
* [createOnDemandSapHanaBackup](docs/rootsaphana/README.md#createondemandsaphanabackup) - Create on demand database snapshot
* [createSapHanaSystemRefresh](docs/rootsaphana/README.md#createsaphanasystemrefresh) - Refresh SAP HANA system metadata
* [deleteSapHanaDbSnapshot](docs/rootsaphana/README.md#deletesaphanadbsnapshot) - Delete a particular full snapshot of a SAP HANA database
* [deleteSapHanaSystem](docs/rootsaphana/README.md#deletesaphanasystem) - Delete a SAP HANA system
* [getMissedSapHanaDbSnapshots](docs/rootsaphana/README.md#getmissedsaphanadbsnapshots) - Retrieve summary information for missed snapshots of a SAP HANA database
* [getSapHanaDatabase](docs/rootsaphana/README.md#getsaphanadatabase) - Get detailed information for an SAP HANA database
* [getSapHanaDbAsyncRequestStatus](docs/rootsaphana/README.md#getsaphanadbasyncrequeststatus) - Get the status of a SAP HANA database request
* [getSapHanaDbRecoverableRanges](docs/rootsaphana/README.md#getsaphanadbrecoverableranges) - Get recoverable ranges of a SAP HANA database
* [getSapHanaDbSnapshot](docs/rootsaphana/README.md#getsaphanadbsnapshot) - Get SAP HANA database snapshot details
* [getSapHanaSystem](docs/rootsaphana/README.md#getsaphanasystem) - Get summary information for a SAP HANA system
* [getSapHanaSystemAsyncRequestStatus](docs/rootsaphana/README.md#getsaphanasystemasyncrequeststatus) - Get the status of a SAP HANA system request
* [patchSapHanaDatabase](docs/rootsaphana/README.md#patchsaphanadatabase) - Update the SLA Domain for an SAP HANA database
* [patchSapHanaSystem](docs/rootsaphana/README.md#patchsaphanasystem) - Update the SLA Domain for a SAP HANA system
* [querySapHanaDatabases](docs/rootsaphana/README.md#querysaphanadatabases) - Get summary information for discovered SAP HANA databases
* [querySapHanaDbSnapshot](docs/rootsaphana/README.md#querysaphanadbsnapshot) - Get a summary list of snapshots for a SAP HANA database
* [querySapHanaSystems](docs/rootsaphana/README.md#querysaphanasystems) - Get summary information for added SAP HANA systems
* [unconfigureSapHanaRestore](docs/rootsaphana/README.md#unconfiguresaphanarestore) - Reset the configuration for system copy restore on target database

### [rootSession](docs/rootsession/README.md)

* [createSession](docs/rootsession/README.md#createsession) - Create user session
* [deleteSession](docs/rootsession/README.md#deletesession) - Delete user session

### [rootSlaDomain](docs/rootsladomain/README.md)

* [assignSlaToDownloadedSnapshots](docs/rootsladomain/README.md#assignslatodownloadedsnapshots) - Assign retention SLA Domain to the downloaded snapshots of a single object
* [createSlaDomain](docs/rootsladomain/README.md#createsladomain) - Create SLA Domain
* [deleteSlaDomain](docs/rootsladomain/README.md#deletesladomain) - Remove SLA Domain
* [getSlaDomain](docs/rootsladomain/README.md#getsladomain) - Get SLA Domain details
* [~~patchSlaDomain~~](docs/rootsladomain/README.md#patchsladomain) - Patch SLA Domain :warning: **Deprecated**
* [querySlaDomain](docs/rootsladomain/README.md#querysladomain) - Get list of SLA Domains
* [updateSlaDomain](docs/rootsladomain/README.md#updatesladomain) - Update SLA Domain

### [rootSnapshot](docs/rootsnapshot/README.md)

* [getSnapshotStorageStatsV1](docs/rootsnapshot/README.md#getsnapshotstoragestatsv1) - Returns storage stats for a snapshot

### [rootUnmanagedObject](docs/rootunmanagedobject/README.md)

* [assignToRetentionSlaAsync](docs/rootunmanagedobject/README.md#assigntoretentionslaasync) - Assign relic/unmanaged entities to an SLA Domain for managing retention asynchronously
* [bulkTierExistingSnapshots](docs/rootunmanagedobject/README.md#bulktierexistingsnapshots) - Bulk tier existing snapshots to cold storage
* [queryUnmanagedObjectSnapshotsV1](docs/rootunmanagedobject/README.md#queryunmanagedobjectsnapshotsv1) - Get summary of all the snapshots for a given object
* [queryUnmanagedObjectV1](docs/rootunmanagedobject/README.md#queryunmanagedobjectv1) - Get summary of all the objects with unmanaged snapshots
* [queryUnmanagedReaderObject](docs/rootunmanagedobject/README.md#queryunmanagedreaderobject) - Get summary of all unmanaged reader objects

### [rootUser](docs/rootuser/README.md)

* [generateTotpSecret](docs/rootuser/README.md#generatetotpsecret) - Generate a TOTP secret key for the given user
* [getTotpStatus](docs/rootuser/README.md#gettotpstatus) - Get the TOTP status for the given user
* [getUserAccountLockoutSettings](docs/rootuser/README.md#getuseraccountlockoutsettings) - Get the local user account lockout settings
* [manageUserAccountLockoutSettings](docs/rootuser/README.md#manageuseraccountlockoutsettings) - Update the local user account lockout settings
* [resetTotp](docs/rootuser/README.md#resettotp) - Reset the TOTP for the given user
* [setupTotp](docs/rootuser/README.md#setuptotp) - Configure the TOTP secret for the given user
* [unlockUser](docs/rootuser/README.md#unlockuser) - Unlock a user account

### [rootUserDefinedTag](docs/rootuserdefinedtag/README.md)

* [createUserDefinedTag](docs/rootuserdefinedtag/README.md#createuserdefinedtag) - Create a user-defined resource tag for tagging cloud compute resources
* [deleteUserDefinedTag](docs/rootuserdefinedtag/README.md#deleteuserdefinedtag) - Delete a user-defined resource tag
* [deleteUserDefinedTagBulk](docs/rootuserdefinedtag/README.md#deleteuserdefinedtagbulk) - Delete a list of user-defined resource tags
* [getUserDefinedTag](docs/rootuserdefinedtag/README.md#getuserdefinedtag) - Get user-defined tag
* [queryUserDefinedTag](docs/rootuserdefinedtag/README.md#queryuserdefinedtag) - Get user-defined resource tags
* [updateUserDefinedTag](docs/rootuserdefinedtag/README.md#updateuserdefinedtag) - Update the value of a user-defined resource tag

### [rootVcdCluster](docs/rootvcdcluster/README.md)

* [createVcdClusterV1](docs/rootvcdcluster/README.md#createvcdclusterv1) - Add a vCD Cluster
* [deleteVcdClusterV1](docs/rootvcdcluster/README.md#deletevcdclusterv1) - Remove vCD Cluster
* [getVcdClusterAsyncRequestStatusV1](docs/rootvcdcluster/README.md#getvcdclusterasyncrequeststatusv1) - Get vCD Cluster job status
* [getVcdClusterV1](docs/rootvcdcluster/README.md#getvcdclusterv1) - Get vCD Cluster details
* [queryVcdClusterV1](docs/rootvcdcluster/README.md#queryvcdclusterv1) - Get summary for all vCD Clusters
* [queryVcdVimServerV1](docs/rootvcdcluster/README.md#queryvcdvimserverv1) - Get VimServers of a vCD Cluster
* [refreshVcdClusterV1](docs/rootvcdcluster/README.md#refreshvcdclusterv1) - Refresh a vCD Cluster
* [updateVcdClusterV1](docs/rootvcdcluster/README.md#updatevcdclusterv1) - Change vCD Cluster object

### [rootVcdHierarchy](docs/rootvcdhierarchy/README.md)

* [getVcdHierarchyChildrenV1](docs/rootvcdhierarchy/README.md#getvcdhierarchychildrenv1) - Get immediate descendant objects
* [getVcdHierarchyDescendantsV1](docs/rootvcdhierarchy/README.md#getvcdhierarchydescendantsv1) - Get list of descendant objects
* [getVcdHierarchyObjectV1](docs/rootvcdhierarchy/README.md#getvcdhierarchyobjectv1) - Get summary of a vCD hierarchy object

### [rootVcdVapp](docs/rootvcdvapp/README.md)

* [createOnDemandSnapshotV1](docs/rootvcdvapp/README.md#createondemandsnapshotv1) - Create an on-demand snapshot for a vApp
* [createVappExportV1](docs/rootvcdvapp/README.md#createvappexportv1) - Export vApp snapshot
* [createVappInstantRecoveryV1](docs/rootvcdvapp/README.md#createvappinstantrecoveryv1) - Instant Recovery of vApp virtual machines
* [createVappTemplateSnapshotExport](docs/rootvcdvapp/README.md#createvapptemplatesnapshotexport) - Export of a vApp template snapshot
* [createVcdVappDownloadSnapshotFromCloudV1](docs/rootvcdvapp/README.md#createvcdvappdownloadsnapshotfromcloudv1) - Download snapshot from archive
* [deleteVappSnapshotV1](docs/rootvcdvapp/README.md#deletevappsnapshotv1) - Delete a vApp snapshot
* [deleteVappSnapshotsV1](docs/rootvcdvapp/README.md#deletevappsnapshotsv1) - Delete all snapshots of vApp
* [getVappAsyncRequestStatusV1](docs/rootvcdvapp/README.md#getvappasyncrequeststatusv1) - Get vApp job status
* [getVappSnapshotExportOptionsV1](docs/rootvcdvapp/README.md#getvappsnapshotexportoptionsv1) - Get exportable network configurations
* [getVappSnapshotInstantRecoveryOptionsV1](docs/rootvcdvapp/README.md#getvappsnapshotinstantrecoveryoptionsv1) - Get Instant Recovery information
* [getVappSnapshotV1](docs/rootvcdvapp/README.md#getvappsnapshotv1) - Get vApp snapshot details
* [getVappTemplateSnapshotExportOptions](docs/rootvcdvapp/README.md#getvapptemplatesnapshotexportoptions) - Get Export information for a vApp template snapshot
* [getVcdVappV1](docs/rootvcdvapp/README.md#getvcdvappv1) - Get details of a specific vApp
* [queryVappSnapshotV1](docs/rootvcdvapp/README.md#queryvappsnapshotv1) - Get list of snapshots of vApp
* [queryVcdVappsV1](docs/rootvcdvapp/README.md#queryvcdvappsv1) - Get summary for vApps
* [searchVappV1](docs/rootvcdvapp/README.md#searchvappv1) - Search for a file in a vApp
* [updateVcdVappV1](docs/rootvcdvapp/README.md#updatevcdvappv1) - Update vApp
* [vcdMissedSnapshotsV1](docs/rootvcdvapp/README.md#vcdmissedsnapshotsv1) - Get details about missed snapshots for a vApp

### [rootVmwareComputeCluster](docs/rootvmwarecomputecluster/README.md)

* [getAsyncRequestStatusForComputeCluster](docs/rootvmwarecomputecluster/README.md#getasyncrequeststatusforcomputecluster) - Get asynchronous request details for VMware cluster
* [getComputeCluster](docs/rootvmwarecomputecluster/README.md#getcomputecluster) - Get details for the compute cluster
* [getIoFilters](docs/rootvmwarecomputecluster/README.md#getiofilters) - Get the ioFilters on the VMware compute cluster with a specific ID
* [installIoFilter](docs/rootvmwarecomputecluster/README.md#installiofilter) - Install the Rubrik ioFilter to the VMware cluster with a specific ID
* [queryComputeCluster](docs/rootvmwarecomputecluster/README.md#querycomputecluster) - Get all the clusters belonging to this datacenter
* [uninstallIoFilter](docs/rootvmwarecomputecluster/README.md#uninstalliofilter) - Uninstall the Rubrik ioFilter from the VMware cluster with a specific ID
* [updateComputeCluster](docs/rootvmwarecomputecluster/README.md#updatecomputecluster) - Modify information for a VMware compute cluster
* [upgradeIoFilter](docs/rootvmwarecomputecluster/README.md#upgradeiofilter) - Upgrade the Rubrik ioFilter for the VMware cluster with a specific ID

### [rootVmwareConfig](docs/rootvmwareconfig/README.md)

* [getPreferredCdpNetworkProtocol](docs/rootvmwareconfig/README.md#getpreferredcdpnetworkprotocol) - Returns the current preference of CDM between IPv4 and IPv6 for CDP data transfer
* [getVmwareRecoveryNetworks](docs/rootvmwareconfig/README.md#getvmwarerecoverynetworks) - Get all the VMware recovery networks for a compute resource ID
* [setPreferredCdpNetworkProtocol](docs/rootvmwareconfig/README.md#setpreferredcdpnetworkprotocol) - Set the current preference of CDM between IPv4 and IPv6 for CDP data transfer

### [rootVmwareHierarchy](docs/rootvmwarehierarchy/README.md)

* [getVmwareHierarchyExport](docs/rootvmwarehierarchy/README.md#getvmwarehierarchyexport) - Get Available VMware Hierarchy Objects for Export Operations
* [getVmwareHierarchyObject](docs/rootvmwarehierarchy/README.md#getvmwarehierarchyobject) - Get VMware Hierarchy Object Information

### [rootVmwareHost](docs/rootvmwarehost/README.md)

* [getVmwareHost](docs/rootvmwarehost/README.md#getvmwarehost) - Get details of a ESXi hypervisor
* [getVmwareHostDatastore](docs/rootvmwarehost/README.md#getvmwarehostdatastore) - Get details of datastores in a ESXi hypervisor
* [queryVmwareHost](docs/rootvmwarehost/README.md#queryvmwarehost) - Get summary of all the ESXi hypervisor
* [updateVmwareHost](docs/rootvmwarehost/README.md#updatevmwarehost) - Update the SLA Domain for an ESXi hypervisor

### [rootVmwareVcenter](docs/rootvmwarevcenter/README.md)

* [createRefresh](docs/rootvmwarevcenter/README.md#createrefresh) - Refresh vCenter Server metadata
* [createRefreshVmV1](docs/rootvmwarevcenter/README.md#createrefreshvmv1) - Refresh single virtual machine metadata in a vcenter
* [createVcenter](docs/rootvmwarevcenter/README.md#createvcenter) - Add vCenter Server
* [deleteVcenter](docs/rootvmwarevcenter/README.md#deletevcenter) - Remove vCenter Server
* [getHotAddBandwidth](docs/rootvmwarevcenter/README.md#gethotaddbandwidth) - Get the ingest and export bandwidth limits for HotAdd with the vCenter
* [getHotAddNetwork](docs/rootvmwarevcenter/README.md#gethotaddnetwork) - Retrieve the user-configured network for HotAdd operations
* [getNetworks](docs/rootvmwarevcenter/README.md#getnetworks) - Get the user-configured networks in the vCenter
* [getNumProxiesNeeded](docs/rootvmwarevcenter/README.md#getnumproxiesneeded) - Get the number of HotAdd proxies needed for the vCenter
* [getVcenter](docs/rootvmwarevcenter/README.md#getvcenter) - Get the details of a vCenter Server
* [getVcenterAsyncRequestStatus](docs/rootvmwarevcenter/README.md#getvcenterasyncrequeststatus) - Get vCenter Server async request
* [patchVcenter](docs/rootvmwarevcenter/README.md#patchvcenter) - Update the SLA Domain for a vCenter Server
* [queryHotAddProxyVm](docs/rootvmwarevcenter/README.md#queryhotaddproxyvm) - Get a list of HotAdd proxy virtual machines
* [queryVcenter](docs/rootvmwarevcenter/README.md#queryvcenter) - Get list of vCenters
* [setHotAddBandwidth](docs/rootvmwarevcenter/README.md#sethotaddbandwidth) - Set the ingest and export bandwidth limits for HotAdd with the vCenter
* [setHotAddNetwork](docs/rootvmwarevcenter/README.md#sethotaddnetwork) - Set the user-configured network for HotAdd backup and recovery
* [updateVcenter](docs/rootvmwarevcenter/README.md#updatevcenter) - Update vCenter Server

### [rootVmwareVm](docs/rootvmwarevm/README.md)

* [batchMountSnapshot](docs/rootvmwarevm/README.md#batchmountsnapshot) - Live mount a snapshot each from a set of virtual machines
* [browseVmwareSnapshot](docs/rootvmwarevm/README.md#browsevmwaresnapshot) - List files in VM snapshot
* [bulkCreateOnDemandBackup](docs/rootvmwarevm/README.md#bulkcreateondemandbackup) - Take an on-demand snapshot of multiple virtual machines
* [createDownloadFileJob](docs/rootvmwarevm/README.md#createdownloadfilejob) - Download file from VM snapshot
* [createDownloadSnapshotFromCloud](docs/rootvmwarevm/README.md#createdownloadsnapshotfromcloud) - Download snapshot from archive
* [createExportV1](docs/rootvmwarevm/README.md#createexportv1) - Export VM snapshot
* [createExportWithDownloadFromCloudV1](docs/rootvmwarevm/README.md#createexportwithdownloadfromcloudv1) - Download a snapshot from an archival location, then export a virtual machine using the downloaded snapshot
* [createInstantRecovery](docs/rootvmwarevm/README.md#createinstantrecovery) - Instantly recover a VM
* [createMountV1](docs/rootvmwarevm/README.md#createmountv1) - Live mount a VM from a snapshot
* [createOnDemandBackup](docs/rootvmwarevm/README.md#createondemandbackup) - Create an on-demand snapshot for a VM
* [createRestoreFileJob](docs/rootvmwarevm/README.md#createrestorefilejob) - Restore file from VM snapshot
* [createUnmount](docs/rootvmwarevm/README.md#createunmount) - Delete a Live Mount VM
* [deleteVmwareSnapshot](docs/rootvmwarevm/README.md#deletevmwaresnapshot) - Delete VM snapshot
* [deleteVmwareSnapshots](docs/rootvmwarevm/README.md#deletevmwaresnapshots) - Delete all snapshots of VM
* [getAsyncRequestStatus](docs/rootvmwarevm/README.md#getasyncrequeststatus) - Get asynchronous request details for VM
* [getMountV1](docs/rootvmwarevm/README.md#getmountv1) - Get information for a Live Mount
* [getSnapshot](docs/rootvmwarevm/README.md#getsnapshot) - Get VM snapshot details
* [getVirtualDisk](docs/rootvmwarevm/README.md#getvirtualdisk) - Details about the specific Virtual Disk
* [getVm](docs/rootvmwarevm/README.md#getvm) - Get VM details
* [getVmForceFullSpec](docs/rootvmwarevm/README.md#getvmforcefullspec) - Retrieve the configuration for forcing a full snapshot of a VMware virtual machine
* [getVmwareCdpLiveInfo](docs/rootvmwarevm/README.md#getvmwarecdpliveinfo) - Returns the live CDP info for a set of CDP-enabled virtual machines
* [getVmwareCdpStateInfo](docs/rootvmwarevm/README.md#getvmwarecdpstateinfo) - Returns CDP state info for a set of virtual machines
* [getVmwareMissedRecoverableRanges](docs/rootvmwarevm/README.md#getvmwaremissedrecoverableranges) - Get missed time ranges for point in time recovery
* [getVmwareRecoverableRanges](docs/rootvmwarevm/README.md#getvmwarerecoverableranges) - Get available time ranges for point in time recovery
* [getVmwareVmMissedRecoverableRangesInBatch](docs/rootvmwarevm/README.md#getvmwarevmmissedrecoverablerangesinbatch) - Returns the recoverable ranges that were missed for a set of CDP-enabled virtual machines
* [getVmwareVmRecoverableRangesInBatch](docs/rootvmwarevm/README.md#getvmwarevmrecoverablerangesinbatch) - Returns the recoverable ranges for a set of CDP-enabled virtual machines
* [missedSnapshots](docs/rootvmwarevm/README.md#missedsnapshots) - Get details about missed snapshots for a VM
* [queryMountV1](docs/rootvmwarevm/README.md#querymountv1) - Get Live Mount information
* [querySnapshot](docs/rootvmwarevm/README.md#querysnapshot) - Get list of snapshots of VM
* [querySnapshotsForVms](docs/rootvmwarevm/README.md#querysnapshotsforvms) - Get snapshot information for a list of virtual machines
* [queryVm](docs/rootvmwarevm/README.md#queryvm) - Get list of VMs
* [relocateMount](docs/rootvmwarevm/README.md#relocatemount) - Relocate a virtual machine to another datastore
* [requestVmForceFullSnapshot](docs/rootvmwarevm/README.md#requestvmforcefullsnapshot) - Request a full snapshot for the next backup job of a VMware virtual machine
* [runGuestOsScript](docs/rootvmwarevm/README.md#runguestosscript) - Run guest OS script
* [searchVm](docs/rootvmwarevm/README.md#searchvm) - Search for a file from a VM
* [updateMount](docs/rootvmwarevm/README.md#updatemount) - Power a Live Mount on and off
* [updateVirtualDisk](docs/rootvmwarevm/README.md#updatevirtualdisk) - Update a specific Virtual Disk
* [updateVm](docs/rootvmwarevm/README.md#updatevm) - Update VM
* [vmMakePrimary](docs/rootvmwarevm/README.md#vmmakeprimary) - Make this cluster the primary for agents on a set of VMs
* [vmRegisterAgent](docs/rootvmwarevm/README.md#vmregisteragent) - Register Rubrik Backup Service

### [rootVolumeGroup](docs/rootvolumegroup/README.md)

* [createOnDemandVolumeGroupBackup](docs/rootvolumegroup/README.md#createondemandvolumegroupbackup) - Create on-demand snapshot for the Volume Group
* [getVolumeGroup](docs/rootvolumegroup/README.md#getvolumegroup) - Get Volume Group details
* [getVolumeGroupForceFullSpec](docs/rootvolumegroup/README.md#getvolumegroupforcefullspec) - Retrieve the configuration for forcing a full snapshot
* [getVolumeGroupSnapshot](docs/rootvolumegroup/README.md#getvolumegroupsnapshot) - Get Volume Group snapshot details
* [getVolumeGroupSnapshotMount](docs/rootvolumegroup/README.md#getvolumegroupsnapshotmount) - Get summary information for a mount
* [patchVolumeGroup](docs/rootvolumegroup/README.md#patchvolumegroup) - Update Volume Group properties
* [queryVolumeGroup](docs/rootvolumegroup/README.md#queryvolumegroup) - Get list of Volume Groups
* [queryVolumeGroupLatestSnapshot](docs/rootvolumegroup/README.md#queryvolumegrouplatestsnapshot) - Get the latest snapshot of the Volume Group
* [queryVolumeGroupSnapshot](docs/rootvolumegroup/README.md#queryvolumegroupsnapshot) - Get list of snapshots of the Volume Group
* [queryVolumeGroupSnapshotMount](docs/rootvolumegroup/README.md#queryvolumegroupsnapshotmount) - Get summary information for all mounts
* [requestVolumeGroupForceFullSnapshot](docs/rootvolumegroup/README.md#requestvolumegroupforcefullsnapshot) - Request a full snapshot on the next backup job of a Volume Group

### [rootWindowsCluster](docs/rootwindowscluster/README.md)

* [getWindowsCluster](docs/rootwindowscluster/README.md#getwindowscluster) - Get detailed information for a Windows cluster
* [queryWindowsCluster](docs/rootwindowscluster/README.md#querywindowscluster) - Get summary information for Windows clusters
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
