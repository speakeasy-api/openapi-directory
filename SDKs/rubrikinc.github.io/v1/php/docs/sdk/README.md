# SDK

## Overview


Copyright © 2017-2021 Rubrik Inc. [Legal](#section/Legal)

# Introduction

Welcome to the Rubrik™ REST API documentation.

The Rubrik REST API provides a RESTful interface for working with Rubrik clusters and Rubrik Edge virtual appliances. The Rubrik REST API can be used to query, configure, and control nearly all of the operations of the Rubrik software.

Through authenticated and encrypted interaction with the Rubrik REST API server, perform any of the operations that are available through the Rubrik web UI and many bulk-type operations that might otherwise be difficult or impossible to perform.

This documentation provides reference information and examples of typical workflows for the Rubrik REST API. For more detailed information about working with Rubrik clusters and Rubrik Edge virtual appliances refer to the *Rubrik User Guide*.

A quick way to become familiar with the Rubrik REST API, is to use the Rubrik REST API Explorer. [OpenAPI](#section/OpenAPI) describes this tool.

Refer to the [changelog](#section/Changelog) to see information about changes within this version of the Rubrik REST API.

# Changelog

 Revisions are listed with the most recent revision first.

 ### Changes to V1 API in Rubrik Version 6.0.0
 ## Feature additions/improvements:
 * Added optional fields: id(type: string) and networkType(type:
   VmwareNetworkType Enum) to VmwareNetworkInfo, which is used by:
   `Get /vmware/vm/{id}/snapshot`
   `Get /vmware/config/recovery/networks`
 * Added new optional field `maxLocalRetentionLimit` to
   `CloudOutForecastSlaParameters`.
 * Added following new endpoints for health monitor:
   `POST /health_monitor/run_policy`
   `GET /health_monitor/policies`
   `GET /health_monitor/policy_status`
 * Added new endpoints `POST /sap_hana/db/{id}/configure_restore` and
   `/sap_hana/db/{id}/unconfigure_restore` to configure and unconfigure
   system copy restore on the target SAP HANA database.
 * Added new endpoint `POST /sla_domain/assign_to_downloaded_snapshots` to
   assign retention SLA only to snapshots at downloaded locations.
 * Copied the following endpoints from the internal Rubrik REST API listing
   to the v1 listing:
   `GET /oracle/db`
   `GET /oracle/db/{id}`
   `PATCH /oracle/db/{id}`
   Added a new optional parameter `is_data_guard_group` to `GET /oracle/db`.
 * Added new optional fields `advancedRecoveryConfigMap`, `preScriptPath`,
   `postScriptPath`, and `shouldStopRecoveryOnPreScriptFailure` to
   `ExportOracleDbConfig` and `MountOracleDbConfig` which specify the
   Advanced Cloning Options (ACO) map, pre script path, post script path,
   and whether to stop the recovery on pre-script failure, respectively.
 * Added new endpoint `POST /oracle/validate_aco_file` to validate the given
   Advanced Cloning Options (ACO) file and retrieve the validation results.
 * Added new endpoint `GET /oracle/aco_parameter_list` to fetch the list of
   supported Advanced Cloning Options (ACO) parameter names.
 * Added new endpoint `PATCH /oracle/data_guard_group/{id}` to update the SLA
   and user settings for a Data Guard group.
 * Added new endpoints to get and change hostnames of nodes in a Rubrik cluster.
   'GET /cluster/{id}/node_hostname',
   'POST /cluster/{id}/node_hostname'.
 * Added a new object `NodeHostnameInfo` used by
   `GET /cluster/{id}/node_hostname` and `POST /cluster/{id}/node_hostname`.
 * Added new endpoint to get Rubrik Backup Service details for a host.
   `GET /host/rbs`
 * Added new endpoint to install Rubrik Backup Service on a host.
   `POST /host/rbs/install`
 * Added new endpoint to uninstall Rubrik Backup Service from a host.
   `POST /host/rbs/uninstall`
 * Added new endpoint to upgrade Rubrik Backup Service on a host.
   `POST /host/rbs/upgrade`
 * Added new endpoints for user-defined tags management
   `GET /user_defined_tag`
   `POST /user_defined_tag`
   `DELETE /user_defined_tag`
   `GET /user_defined_tag/{id}`
   `PATCH /user_defined_tag/{id}`
   `DELETE /user_defined_tag/{id}`
 * Added new optional field 'numChannels' to 'OracleValidateConfig' object.
   This field specifies the number of channels used when validating Oracle
   backups.
 * Added new endpoint for batch VM snpshots query.
   `POST /vmware/vm/snapshots`
 * Added new endpoints for SQL Server host configuration.
   `GET /mssql/host/configuration`,
   `POST /mssql/host/configuration`,
   `GET /mssql/host/configuration/{host_id}`,
   `PATCH /mssql/host/configuration/{host_id}`,
   `DELETE /mssql/host/configuration/{host_id}`
 * Added new optional field `dataRetrievalCostInUSD` to
   `CloudOutStorageForecastSummary`.
 * Added `POST /cloud_utilization/cloud_out_forecast` endpoint to forecast cloud
   utilization for archival use case.
 * Changed `lastUpdatedTime` to be required in
 * Changed `retryStatus` to be required in
   `JobMonitoringInfo` which is used in endpoints `GET /job_monitoring`
   and `GET /polaris/job_monitoring`.
 * Changed `lastUpdatedTime` to be required in
   `JobMonitoringInfo` which is used in endpoints `GET /job_monitoring`
   and `GET /polaris/job_monitoring`.
 * Added a new endpoint to bulk tier existing snapshots
   `POST /unmanaged_object/snapshot/bulk_archive_tier`
 * Added new field `snapshotVerificationInfo` to
   `VerificationResponse` to include event information
   about snapshots.
 * Added new optional fields `errorInfo` and
   `retryStatus` to `JobMonitoringInfo` to include backup
   failure remediation status.
 * Added new optional fields `snapMirrorLabelForFullBackup` and
   `snapMirrorLabelForIncrementalBackup` to `FilesetSummary`, `FilesetUpdate`
   and `FilesetCreate` to support SnapMirror destination volume
   backup.
   `FilesetSummary` is used by endpoints:
    `GET /v1/fileset`,
    `GET /v1/fileset/{id}`.
   `FilesetUpdate` is used by endpoints:
    `PATCH /v1/fileset/{id}`.
   `FilesetCreate` is used by endpoints:
    `POST /internal/fileset/bulk`,
    `POST /v1/fileset`.
 * Added new values of `IoFilterStatus` and `HostUiFilterStatus`
   to help distinguish cluster and ESXi host states when there is
   a mismatch between the installed IO filter and ESXi host versions,
   instead of defaulting to Unsupported.
 * Added new endpoints `GET /cluster/{id}/security/totp/setting` and
   `PUT /cluster/{id}/security/totp/setting` for retreiving and
   updating the 2-Step Verification global setting, respectively.
 * Added new optional field `computeVisibilityFilter` to
   `GET /vmware/vcenter/{id}`, `POST /vmware/vcenter` and `PUT /vmware/vcenter`
    to specify compute resource visibility.
 ## New features:
 * Added new endpoint for querying LDAP domain names.
   `GET /ldap_service/domain_name`
 * Added new endpoints for supporting truststores
   `GET /v1/cluster/{id}/security/truststore`
   `DELETE /v1/cluster/{id}/security/truststore`
   `PATCH /v1/cluster/{id}/security/truststore`
 * Added new field `isOnSnapMirrorDestVolume` to HostHierarchyObjectSummary
   returned by `GET /host/hierarchy/{id}/children`.
 * Added new endpoint, `GET /volume_group/{id}/request/force_full_snapshot`.
   This endpoint retrieves the configuration used to force a full snapshot
   of a Volume Group.
 * Added new endpoint, `POST /volume_group/{id}/request/force_full_snapshot`.
   This endpoint requests to force a full snapshot of a Volume Group.
 * Added new endpoint, `POST /archive/location/{id}/owner/disable` to disable
   archival location.
 * Added new endpoint, `POST /archive/location/{id}/owner/enable` to enable
   archival location.
 * Added new optional field `dataPathSpec` to `SapHanaSystemConfig` include
   details of SAP HANA system data path
 * Copied the following endpoints from the internal Rubrik REST API listing
  to the v1 listings:
     * `GET /vcd/hierarchy/{id}` to get summary of a vCD hierarchy object.
     * `GET /vcd/hierarchy/{id}/children` to get immediate descendant objects.
     * `GET /vcd/hierarchy/{id}/descendants` to get list of descendant objects.
     * `GET /vcd/cluster` to get summary for all vCD Clusters.
     * `POST /vcd/cluster` to add a vCD Cluster.
     * `GET /vcd/cluster/{id}/vimserver` to get VimServers of a vCD Cluster.
     * `POST /vcd/cluster/{id}/refresh` to refresh a vCD Cluster.
     * `GET /vcd/cluster/{id}` to get vCD Cluster details.
     * `PATCH /vcd/cluster/{id}` to modify the hostname and credentials of a
      specified vCD Cluster object.
     * `DELETE /vcd/cluster/{id}` to remove vCD Cluster.
     * `GET /vcd/cluster/request/{id}` to get vCD Cluster job status.
     * `GET /vcd/vapp` to get summary for vApps.
     * `GET /vcd/vapp/{id}` to get vApp details.
     * `PATCH /vcd/vapp/{id}` to make changes to the parameters of a
      specified vApp object.
     * `GET /vcd/vapp/{id}/snapshot` to retrieve summary information for each
      of the snapshot objects of a specified vApp object.
     * `POST /vcd/vapp/{id}/snapshot` to start an asynchronous job to create
      an on-demand snapshot for a specified vApp object.
     * `DELETE /vcd/vapp/{id}/snapshot` to delete all snapshots of vApp.
     * `GET /vcd/vapp/snapshot/{id}` to get vApp snapshot details.
     * `DELETE /vcd/vapp/snapshot/{id}` to delete vApp snapshot.
     * `GET /vcd/vapp/{id}/missed_snapshot` to get details about missed
      snapshots for a vApp.
     * `GET /vcd/vapp/snapshot/{snapshot_id}/export/options` to get
      exportable network configurations.
     * `POST /vcd/vapp/snapshot/{snapshot_id}/export` to export vApp snapshot.
     * `POST /vcd/vapp/snapshot/{snapshot_id}/instant_recover` to instant
      Recovery of vApp virtual machines.
     * `GET /vcd/vapp/snapshot/{snapshot_id}/instant_recover/options` to get
      Instant Recovery information.
     * `GET /vcd/vapp/request/{id}` to retrieve the details of a specified
      asynchronous job for a vApp.
     * `GET /vcd/vapp/{id}/search` to search for a file from a vApp.
     * `POST /vcd/vapp/snapshot/{id}/download` to download snapshot from
      archive.
 * Added new endpoint, `GET /hyperv/vm/{id}/request/force_full_snapshot`.
   This endpoint retrieves the configuration used to force a full snapshot
   of a Hyper-V virtual machine.
 * Added new endpoint, `POST /hyperv/vm/{id}/request/force_full_snapshot`.
   This endpoint requests to force a full snapshot of a Hyper-V virtual machine.
 * Added new endpoint, `GET /vmware/vm/{id}/request/force_full_snapshot`.
  This endpoint retrieves the configuration used to force a full snapshot
  of a VMware virtual machine.
 * Added new endpoint `POST /vmware/vm/{id}/request/force_full_snapshot`.
  This endpoint requests to force a full snapshot of a VMware virtual machine.
### Changes to V1 API in Rubrik Version 5.3.2
 ## Feature additions/improvements:
 * Modified instanceName field in the `GET /mssql/db` endpoint by adding
   the network name for SQL Server databases belonging to a cluster
   instance.

 ### Changes to V1 API in Rubrik Version 5.3.1
 ## Feature additions/improvements:
 * Added `GET /exclusion_pattern`
   endpoint to get all exclusion patterns.
 * Added `GET /exclusion_pattern/{id}`
   endpoint to get a exclusion pattern by id.
 * Added `POST /exclusion_pattern`
   endpoint to create a new exclusion pattern.
 * Added `POST /exclusion_pattern/bulk`
   endpoint to bulk create new exclusion patterns.
 * Added `PATCH /exclusion_pattern/{id}`
   endpoint to update a exclusion pattern.
 * Added `DELETE /exclusion_pattern/{id}`
   endpoint to delete a exclusion pattern.
 * Added `DELETE /exclusion_pattern/bulk`
   endpoint to bulk delete exclusion patterns.
 * Added new optional field `keyProtection` to `EncryptionStatus`
   to support returning key protection status via v1 API
   `GET /cluster/{id}/security/encryption`.
 * Added `Post /vmware/vm/snapshot/{id}/export_with_download` endpoint to export
   a vm snapshot from an archival location.
 * Added new field `index` to `JobMonitoringObjectsCountByType`, which contains
   the total count of all Index jobs.
 * Added `Index` to `JobMonitoringTaskType`.
 * Added new optional field `isTotpEnforced` to `LdapServiceInfo`,
   `LdapServiceSummary`, and `LdapServiceInfoUpdate` to support
   TOTP enforcement for LDAP services in followin APIs.
   `POST /v1/ldap_service`
   `GET /v1/ldap_service`
   `GET /v1/ldap_service/{id}`
   `PATCH /v1/ldap_service/{id}`
   `PUT /v1/ldap_service/{id}`
 * Added new optional field `isTotpEnabled` as a query param in API
   `GET /v1/principal` for fetch users with TOTP enabled.
 * Added new optional fields `mfaServerName`, `isTotpEnabled`, and
   `isTotpEnforced` to `PrincipalSummaryV1` as part of response from
   API `GET /v1/principal` for rendering principals' MFA status.
 * Modified `AgentConnectStatus` enum to add value SecondaryCluster for
   multicluster Rubrik Backup Service support. This will be the status on a
   cluster that is not the primary.
 * Added new endpoint and optional fields for VMware network selection.
    GET /vmware/config/recovery/networks for getting recovery networks.

 ## New features:
 * Added new endpoints for supporting TOTP configuration.
   `GET /user/{id}/totp/status`
   `PUT /user/{id}/totp/config`
   `DELETE /user/{id}/totp/config`
   `POST /user/{id}/totp/new_secret`
 * Added new endpoints for supporting multicluster Rubrik Backup Service.
   `POST /vmware/vm/make_primary`
   `POST /host/make_primary`
 * Added new endpoints for managing multicluster Rubrik Backup Service
   certificates.
   `GET /certificate/agent`
   `POST /certificate/agent`
   `DELETE /certificate/agent/{id}`

 ### Changes to V1 API in Rubrik Version 5.3.0
 ## Deprecation:
 * Deprecated `SnapshotCloudStorageTier` enum value Cold. It will be left,
   but will be mapped internally to the new value, AzureArchive,
   which is recommended as a replacement.
 * Removed signature and sigAlg return fields from `SamlSsoAuthnRequestDetail`,
   which were wrongly introduced in 5.1.
 * Removed `GET /vmware/resource_pool` endpoint, which doesn't have backend implementation.
 * Removed `GET /vmware/resource_pool/{id}` endpoint, which doesn't have backend implementation.
 ## New features:
 * Added `Deleted` as new failover cluster node connection status in
   FailoverClusterNodeConnectionStatus. The FailoverClusterNodeConnectionStatus
   is in FailoverClusterNode object and is used by
   `GET /failover_cluster`,
   `GET /failover_cluster/{id}`,
   `GET /failover_cluster/hierarchy/{id}`,
   `GET /failover_cluster/hierarchy/{id}/children`,
   `GET /failover_cluster/hierarchy/{id}/descendants` endpoints.
 * Added `POST /cluster/{id}/manual_discover_ll_ipv4` endpoint to allow discovery of new
   nodes over link local ipv4 network.
 * Added new optional field `groupMaxLevel` to `AdvancedLdapConfiguration`
   included in `LdapServiceSummary`, `LdapServiceInfo` and `LdapServiceInfoUpdate`
   objects used by endpoints:
   `GET /ldap_service`,
   `POST /ldap_service`,
   `GET /ldap_service/{id}`,
   `PUT /ldap_service/{id}`,
   `PATCH /ldap_service/{id}`.
 * Added `is_on_demand` as an optional parameter to `GET /job_monitoring`
 * Added `GET /cluster/{id}/syslog_msg_mib_link` and
   `GET /cluster/{id}/syslog_tc_mib_link` endpoints to allow downloading syslog
   SNMP MIB files.
 * Added `POST /vmware/vm/missed_recoverable_range` endpoint to get missed recoverable
   ranges for a list of virtual machines.
 * Added `GET /backup/retry/{id}` endpoint to get status of reschedule
   operation.
 * Added `POST /backup/retry` endpoint to reschedule unsuccessful backup tasks.
 * Added `POST /vmware/vm/recoverable_range` endpoint to get recoverable ranges
   for a list of virtual machines.
 * Added endpoint `POST /hierarchy/bulk_sla_conflicts`. Bulk get the list of
   descendant objects with SLA conflicts.
 * Added endpoint `GET /snapshot/{id}/storage/stats`. Returns storage stats
   for a snapshot.
 * Added optional query parameter `include_expired` to `GET /certificate`
   endpoint, excluded expired certs by default after the change.
 * Added endpoint
   `GET /job_monitoring/subscription`. Gets all subscriptions to
   monitoring page.
 * Modified `SnapshotCloudStorageTier`, enum adding values AzureArchive, Glacier,
   and GlacierDeepArchive.
 * Added endpoint
   `GET /backup/verify/{id}`. Get asynchronous request
   details for a Backup Verification job.
 * Added new optional field `privateKey` to `CertificateImportRequest`
   object sent to `POST /certificate`. Using this field will fail the request
   if the provided private key is not successfully parsed.
 * Added endpoint
   `DELETE /job_monitoring/subscription/{subscription_id}`. Delete a
   monitoring page email subscription.
 * Added endpoint
   `PATCH /job_monitoring/subscription/{subscription_id}`. Update a
   monitoring email subscription.
 * Added endpoint
   `GET /job_monitoring/subscription/{subscription_id}`. Get a
   specific monitoring email subscription by id.
 * Added endpoint
   `POST /job_monitoring/subscription`. Create an email subscription
   to the job monitoring page.
 * Added new endpoint `POST /backup/verify`
    Verifies the validity of a snapshot.
 * Added endpoint `PATCH /organization/{id}/envoy/bulk`. Update a list of
   Rubrik Envoy objects.
 * Added new field `isGpsLoginEnabled` to `SamlSsoStatus` returned by
   `GET /saml/sso_status`
 * Added endpoint `GET /oracle/aco_example_download_link`. Get a download link
   for an example Advanced Recovery Options file.
 * Added endpoint `POST /organization/{id}/envoy/bulk`. Create a list of Rubrik
   Envoy objects.
 * Added endpoint `Delete /organization/{id}/envoy/bulk`. Remove a list of
   Rubrik Envoy objects.
 * Added organization ID parameter to the response object
   IdProviderAuthDomainSummary.
 * Added endpoint `GET /vmware/vcenter/hotadd/vm`. Gets details about
    all HotAdd proxy virtual machines.
 * Added endpoint `POST /sap_hana/system/{id}/refresh`. Initiates an
    asynchronous job to refresh SAP HANA system metadata.
 * Added new field `vcenterName` to `VritualMachineDetail` returned by
   `GET /vmware/vm/{id}`.
 * Added endpoint `DELETE /sap_hana/system/{id}`. Initiates an asynchronous
    job to delete a SAP HANA system object.
 * Added endpoint `GET /sap_hana/system/request/{id}`. Gets details about
    a SAP HANA system related asynchronous request.
 * Added endpoint `POST /sap_hana/db/{id}/snapshot`. Initiates a job to
    take an on-demand full snapshot of a SAP HANA database.
 * Added endpoint `GET /sap_hana/db/request/{id}`. Gets details about
    a SAP HANA database related request.
 * Added endpoint `GET /sap_hana/db/{id}/snapshot`. Returns a list of
    summary of snapshots of a SAP HANA database.
 * Added endpoint `GET /sap_hana/db/snapshot/{id}`. Gets details about
    a SAP HANA database snapshot.
 * Added the `POST /oracle/db/{id}/validate` to trigger an validation job on Oracle backups.
 * Added new values `RetentionSlaDomainName` , `ObjectType`, `SnapshotCount`,
   `AutoSnapshotCount` and  `ManualSnapshotCount` to
   `UnmanagedObjectSortAttribute` field of the
   `GET /unmanaged_object/reader_object` endpont.
 * Added new values `RetentionSlaDomainName` , `ObjectType`, `SnapshotCount`,
   `AutoSnapshotCount` and  `ManualSnapshotCount` to
   `UnmanagedObjectSortAttribute` field of the `GET /unmanaged_object` endpont.
 * Added the `POST /replication/location_pause/disable` to
    resume replication from source cluster(s).
 * Added the `POST /replication/location_pause/enable` to
    pause replication from source cluster(s).
 * Added endpoint `POST /sap_hana/system`. Adds new entry for SAP HANA system
    and stores in database.
 * Added endpoint `GET /sap_hana/db`. Returns summary of all discovered
    SAP HANA databases.
 * Added endpoint `GET /sap_hana/db/{id}` Returns summary of SAP HANA database
    with given ID.
 * Added `AggregateSapHanaDb`, `SapHanaDb` and `SapHanaSystem` to the
    `object_type` filtering field of the `GET /event/latest` endpoint.
 * Added the new optional field `failoverClusterAppName` to FilesetSummary
    returned by `GET /fileset` and `GET /fileset/{id}`.
 * Added the `GET /user/lockout` endpoint to
    get the status of local user account lockout.
 * Added the `PATCH /user/lockout` endpoint to
    update the local user account lockout config.
 * Added the `POST /user/{id}/unlock` endpoint to unlock local user.
 * Added the `GET /cluster/{id}/upgrade/precheck_status` endpoint to
    get the result of the latest run of periodic upgrade prechecks.
 * Added the `POST /cluster/{id}/upgrade/precheck_status` endpoint to
    start an on-demand run of the periodic upgrade prechecks.
 * Added the `GET /cluster/{id}/rubrik_support_portal_credentials`
    endpoint to check if the cluster already has credentials
    for the Rubrik support portal.
 * Added the `POST /cluster/{id}/rubrik_support_portal_credentials`
    endpoint to update Rubrik support portal credentials for
    the cluster.
 * Added the `GET /vmware/vcenter/{id}/networks` endpoint to get the
    networks in a vCenter.
 * Added new field `isOracleHost` to HostDetail
   returned by `GET /host/{id}`.
 * Added the `POST /vmware/vcenter/{id}/hotadd/network` endpoint to set
   the network for a HotAdd proxy virtual machine.
 * Added new endpoint `GET /host/{id}/nas_share_discover`. Returns all
   shares on the NAS host specified by 'id'.
 * Added new endpoint `POST /host/share/bulk` to allow adding NAS
   shares in bulk without validating their share credentials.
 * Added `GET /volume_group` to retrieve a current list of Volume Groups.
 * Added `GET /volume_group/{id}` to retrieve the details of a Volume Group.
 * Added `PATCH /volume_group/{id}` to modify the details of a Volume Group.
 * Added `GET /volume_group/{id}/snapshot` to retrieve the details of all
   snapshots of a Volume Group.
 * Added `POST /volume_group/{id}/snapshot` to create an on-demand snapshot
   of a Volume Group.
 * Added `GET /volume_group/snapshot/{id}` to get the details of a Volume
   Group snapshot.
 * Added `GET /volume_group/snapshot/mount` to retrieve summary information
   of all Volume Group mounts.
 * Added `GET /volume_group/snapshot/mount/{id}` to retrieve summary
   information of one Volume Group mount.
 * Added `GET /host/{id}/volume` to retrieve a list of all volumes on a
   Volume Group host.
 * Made field `restoreScriptSmbPath` optional in `VolumeGroupMountSummary`.
   This change affects the endpoints `/volume_group/snapshot/mount` and
   `/volume_group/snapshot/mount/{id}`.
 * Added endpoint `GET /mfa/rsa/server` to get all MFA servers.
 * Added endpoint `POST /mfa/rsa/server` to create a new MFA server.
 * Added endpoint `GET /mfa/rsa/server/{id}` to get a specific MFA server.
 * Added endpoint `PATCH /mfa/rsa/server/{id}` to update an MFA server.
 * Added endpoint `DELETE /mfa/rsa/server/{id}` to delete an MFA server.
 * Added endpoint `PUT /cluster/{id}/security/web_signed_cert`
    to set the web server certificate.
 * Added endpoint `DELETE /cluster/{id}/security/web_signed_cert`
    to use the default, self-signed web server certificate.
 * Added endpoint `PUT /cluster/{id}/security/kmip/client` to configure
    the KMIP client on Rubrik.
 * Added endpoint `GET /cluster/{id}/security/kmip/client` to get
    the KMIP client configuration.
 * Added endpoint `GET /cluster/{id}/security/kmip/server` to get the
    KMIP server configurations.
 * Added endpoint `PUT /cluster/{id}/security/kmip/server` to configure a
    KMIP server.
 * Added endpoint `DELETE /cluster/{id}/security/kmip/server` to delete a
    configured KMIP server.
 * Added endpoint `GET /database/log_report` to retrieve the database log
    report summary.
 * Added endpoint `POST /unmanaged_object/assign_retention_sla` to assign
    a retention SLA to unmanaged objects asynchronously.
 * Added endpoint `GET /sap_hana/db/{id}/recoverable_range`. Gets details
    about recoverable ranges of a SAP HANA database.
 * Added new  field `legalHoldDownloadConfig` to `MssqlBackupSelection` and
   `DownloadMssqlBackupFilesByIdJobConfig`. An optional Boolean that specifies
   whether the download is in response to a Legal Hold. This change affects
   endpoints `/mssql/db/{id}/download_files_by_id`,
   `/mssql/db/{id}/download_files` and `/mssql/db/{id}/browse`.
 * Added new field `canUnmount` to `VolumeGroupMountSummary`, an optional
   boolean value that indicates if the logged-in user has the authority
   to remove the specified mount.
 * Added `GET /vmware/vcenter/{id}/hotadd/needed` endpoint to get the
    number of HotAdd proxies needed for a vCenter.
 * Added endpoint `DELETE /sap_hana/db/snapshot/{id}`. Initiates a request
   to delete a full snapshot of a SAP HANA database.
 * Added new field `needsMigration` to `VolumeGroupSummary`. This change
   affects the endpoints `GET /volume_group` and `GET /volume_group/{id}`.
 * Added new fields `usedFastVhdx` and `fileSizeInBytes` to
   `VolumeGroupSnapshotSummary`. This change affects the endpoints
   `GET /volume_group/{id}/snapshot` and `GET /volume_group/snapshot/{id}`.
 * Added endpoint `GET /cluster/me/upgrade/monitor_events` to get notifications
   about events occurring at CDM.
 * Added endpoint `GET /volume_group/{id}/latest_snapshot` to retrieve summary
   information of the latest snapshot of a Volume Group.
 * Added `GET /vmware/vcenter/{id}/hotadd/bandwidth` endpoint to get the
   HotAdd bandwidth limits for a vCenter.
 * Added `POST /vmware/vcenter/{id}/hotadd/bandwidth` endpoint to set the
   HotAdd bandwidth limits for a vCenter.
 * Added field `isVmc` returned by `GET /vmware/vcenter` to retrieve summary
   information of a vCenter.
 * Added new optional field `unreadable` to `BrowseResponse`, which is used by
   `GET /browse`.
 * Added new endpoint `GET /config/history/list_updates` Returns a list of
   filtered configuration updates.
 * Added new endpoint `GET /config/history/ondate` Returns a list of
   configurations and their values on a given date.
 * Added new field `dataToTransfer` to `EventSeriesSummaryV1`, an optional
   integer value that represents the amount of data that needs to be
   transferred by the job corresponding to the event.
 * Added new field `estimatedTimeRemaining` to `EventSeriesSummaryV1`, an
   optional string value that represents the estimated time remaining until
   the job corresponding to the event has completed. The estimated time has
   millisecond granularity.
 * Added endpoint `GET /sap_hana/db/{id}/missed_snapshot` Returns a list of
    summary information for the missed snapshots of a SAP HANA database.
 * Added new field `forceFull` to `VolumeGroupSummary`. This change
   affects the endpoints `GET /volume_group` and `GET /volume_group/{id}`.
 * Modified afterId in response of `GET /event/latest` and `GET /event`
   to point to each individual event in the list response instead of having
   all afterId values in the list response point to the last event in the
   list.
 * Copied `GET /mssql/availability_group` endpoint from internal to v1 to get
   all SQL Server availability groups.
 * Copied `GET /mssql/availability_group/{id}` endpoint from internal to v1 to
   get details of a SQL Server availability group.
 * Copied `PATCH /mssql/availability_group/{id}` endpoint from internal to
   v1 to update a SQL Server availability group.
 * Copied `PATCH /mssql/db/bulk` endpoint from internal to v1 to update multiple
   SQL Server databases.
 * Copied `POST /mssql/db/bulk/snapshot` endpoint from internal to v1 to take on
   demand snapshot of multiple SQL Server databases.
 * Copied `GET /mssql/db/bulk/snapshot/{id}` endpoint from internal to v1 to get
   details of on demand snapshot of multiple SQL Server databases.
 * Copied `GET /mssql/db/count` endpoint from internal to v1 to get the count of
   SQL Server databases.
 * Copied `GET /mssql/instance/count` endpoint from internal to v1 to get the
   count of SQL Server instances.
 * Copied `DELETE /mssql/db/{id}/recoverable_range/download` endpoint from
   internal to v1 to delete downloaded recoverable ranges of a SQL Server
   database.
 * Copied `GET /mssql/db/recoverable_range/download/{id}` endpoint from
   internal to v1 to get the status of delete downloaded recoverable range job.
 * Copied `GET /mssql/db/{id}/compatible_instance` endpoint from internal to v1
   to get compatible instances for the recovery of a SQL Server database.
 * Copied `GET /mssql/db/{id}/restore_estimate` endpoint from internal to v1 to
   get size estimate for restore or export of a SQL Server database.
 * Copied `GET /mssql/db/{id}/restore_files` endpoint from internal to v1 to get
   all data files to be restored for an export or restore operation on a SQL
   Server database.
 * Copied `GET /mssql/db/{id}/snappable_id` endpoint from internal to v1 to get
   the snappable id of a SQL Server database.
 * Copied `GET /mssql/db/defaults` endpoint from internal to v1 to get the
   default properties for SQL Server databases.
 * Copied `PATCH /mssql/db/defaults` endpoint from internal to v1 to update the
 * Added new field `instanceChildrenInfo` to the response from the v1 endpoint
   `GET /mssql/hierarchy/root/children`. The new field is an array of type
   `MssqlInstanceShortSummary` that contains the managed identifier, the name and
   active node for a Windows Failover Cluster instance.
 * Added enums for the `sort_by` parameter in `GET /mssql/db`.
 * Added `POST /cluster/{id}/manual_discover_ipv4` endpoint to allow discovery of new
   nodes over IPv4 network.
 ## Breaking changes:
 * Added new field `nodeName` in FailoverClusterNodeOrder object used by
   `PATCH /failover_cluster/failover_cluster_app/{id}` and
   `POST /failover_cluster/failover_cluster_app` endpoints.
   The `nodeName` is the name of the failover cluster node.
 * Renamed the field `vips` in FailoverClusterAppSource object to
   `virtualIps`. The FailoverClusterAppSource is used by
   `GET /failover_cluster/failover_cluster_app`,
   `GET /failover_cluster/failover_cluster_app/{id}`,
   `GET /failover_cluster/hierarchy/{id}`,
   `GET /failover_cluster/hierarchy/{id}/children`,
   `GET /failover_cluster/hierarchy/{id}/descendants`,
   `PATCH /failover_cluster/failover_cluster_app/{id}` and
   `POST /failover_cluster/failover_cluster_app` endpoints.
 * Removed `POST /cluster/{id}/manual_discover_ll_ipv4`

### Changes to V1 API in Rubrik Version 5.2.2
 ## New features:
 * Added optional field isOnDemand to `EventSeriesSummaryV1`.
   The parameter indicates if the job associated with the event
   series is a on demand job.

 ### Changes to V1 API in Rubrik Version 5.2.1
 ## New features:
 * Added optional query parameters limit and offset to support pagination for
   GET /role endpoint.

 ### Changes to V1 API in Rubrik Version 5.2.0
 ## Deprecation:
 * Deprecating `slaId` field returned by `GET /mssql/db/{id}/snapshot`.
    See **snapshotRetentionInfo** to track retention for
    snapshots.
 * Deprecating `slaId` field returned by `GET /mssql/db/snapshot/{id}`.
    See **snapshotRetentionInfo** to track retention for
    snapshots.
 * Deprecating `slaId` field returned by `GET /vmware/vm/{id}/snapshot`.
    See **snapshotRetentionInfo** to track retention for
    snapshots.
 * Deprecating `slaId` field returned by `GET /vmware/vm/{id}`.
    See **snapshotRetentionInfo** to track retention for
    snapshots.
 * Deprecating `slaId` field returned by `GET /vmware/vm/snapshot/{id}`.
    See **snapshotRetentionInfo** to track retention for
    snapshots.
 * Deprecating `slaId` field returned by `GET /hdfs/snapshot/{id}`.
    See **snapshotRetentionInfo** to track retention for
    snapshots.
 * Deprecating `slaId` field returned by `GET /hdfs`.
    See **snapshotRetentionInfo** to track retention for
    snapshots.
 * Deprecating `slaId` field returned by `POST /hdfs`.
    See **snapshotRetentionInfo** to track retention for
    snapshots.
 * Deprecating `slaId` field returned by `GET /hdfs/{id}`.
    See **snapshotRetentionInfo** to track retention for
    snapshots.
 * Deprecating `slaId` field returned by `PATCH /hdfs/{id}`.
    See **snapshotRetentionInfo** to track retention for
    snapshots.
 * Deprecating `slaId` field returned by `GET /fileset/snapshot/{id}`.
    See **snapshotRetentionInfo** to track retention for
    snapshots.
 * Deprecating `slaId` field returned by `GET /fileset`.
    See **snapshotRetentionInfo** to track retention for
    snapshots.
 * Deprecating `slaId` field returned by `POST /fileset`.
    See **snapshotRetentionInfo** to track retention for
    snapshots.
 * Deprecating `slaId` field returned by `GET /fileset/{id}`.
    See **snapshotRetentionInfo** to track retention for
    snapshots.
 * Deprecating `slaId` field returned by `PATCH /fileset/{id}`.
    See **snapshotRetentionInfo** to track retention for
    snapshots.
 * Deprecating `slaId` field returned by `GET /failover_cluster/
    failover_cluster_app/{id}`.
    See **snapshotRetentionInfo** to track retention for
    snapshots.
 ## New features:
 * Added new endpoint
  `GET /data_source/{id}/expired_custom_retention_snapshots`.
   Get all expired snapshots which were explicitly assigned a SLA domain.
 * Added new field `parentSnapshotId` to FilesetSnapshotDetail returned by
   `GET /fileset/snapshot/{id}`.
 * Added new field `parentSnapshotId` to HdfsSnapshotDetail returned by
   `GET /hdfs/snapshot/{id}`.
 * Added new field `parentSnapshotId` to MssqlDbSnapshotSummary returned by
   `GET /mssql/db/{id}/snapshot`.
 * Added new field `parentSnapshotId` to MssqlDbSnapshotDetail returned by
   `GET /mssql/db/snapshot/{id}`.
 * Added new field `parentSnapshotId` to VmSnapshotSummary returned by
   `GET /vmware/vm/{id}/snapshot`.
 * Added new field `parentSnapshotId` to VmSnapshotDetail returned by
   `GET /vmware/vm/snapshot/{id}`.
 * Added new field `retentionSlaDomanId` to MssqlHierarchyObjectSummary
   returned by `GET /mssql/hierarchy/{id}`.
 * Added new field `retentionSlaDomanId` to MssqlHierarchyObjectSummary
   returned by `GET /mssql/hierarchy/{id}/descendants`.
 * Added new field `retentionSlaDomanId` to MssqlHierarchyObjectSummary
   returned by `GET /mssql/hierarchy/{id}/children`.
 * Added new field `retentionSlaDomanId` to MssqlDbDetail
   returned by `GET /mssql/db/{id}`.
 * Added new field `retentionSlaDomanId` to MssqlDbDetail
   returned by `PATCH /mssql/db/{id}`.
 * Added new field `retentionSlaDomanId` to MssqlDbDetail
   returned by `PATCH /mssql/db/bulk`.
 * Added new field `retentionSlaDomanId` to MssqlDbSnapshotDetail
   returned by `GET /mssql/db/snapshot/{id}`.
 * Added new field `retentionSlaDomanId` to MssqlDbSummary
   returned by `GET /mssql/db`.
 * Added new field `retentionSlaDomainId` to ComputeClusterDetail
   returned by `PATCH /vmware/compute_cluster/{id}`.
 * Added new field `retentionSlaDomainId` to VmwareHostDetail
   returned by `PATCH /vmware/host/{id}`.
 * Added new field `retentionSlaDomainId` to VmwareVmMountDetailV1
   returned by `PATCH /vmware/vm/snapshot/mount/{id}`.
 * Added new field `retentionSlaDomainId` to VmwareVmMountSummary
   returned by `GET /vmware/vm/snapshot/mount`.
 * Added new field `retentionSlaDomainId` to BulkOracleDbDetails
   returned by `PATCH /oracle/db/bulk`.
 * Added new field `retentionSlaDomainId` to ComputeClusterDetail
   returned by `GET /vmware/compute_cluster/{id}`.
 * Added new field `retentionSlaDomainId` to UnmanagedObjectDetails
   returned by `GET /unmanaged_object`.
 * Added new field `retentionSlaDomainId` to UnmanagedObjectSummary
   returned by `GET /unmanaged_object/reader_object`.
 * Added new field `retentionSlaDomainId` to VirtualMachineDetail
   returned by `GET /vmware/vm/{id}`.
 * Added new field `retentionSlaDomainId` to VirtualMachineDetail
   returned by `PATCH /vmware/vm/{id}`.
 * Added new field `retentionSlaDomainId` to VirtualMachineSummary
   returned by `GET /vmware/vm`.
 * Added new field `retentionSlaDomainId` to VmSnapshotDetail
   returned by `GET /vmware/vm/snapshot/{id}`.
 * Added new field `retentionSlaDomainId` to VmwareHostDetail
   returned by `GET /vmware/host/{id}`.
 * Added new field `retentionSlaDomainId` to VmwareVmMountDetailV1
   returned by `GET /vmware/vm/snapshot/mount/{id}`.
 * Added new field `retentionSlaDomainId` to UnmanagedObjectSummary
   returned by `GET /unmanaged_object`.
 * Added new endpoint `GET /report/compliance_summary_sla`. Returns the
   compliance summary information for all protected objects based on a
   SLA Domain-based requirement of whether the last expected snapshot was taken.
   Currently behind flag, will not return correct information
   until flag is flipped.
 * Added endpoint `GET /cluster/{id}/upgrade/available_version` which
      retrieves a list of Rubrik CDM versions available to upgrade the Rubrik
      cluster.
 * Added endpoint `GET /cluster/{id}/upgrade/request/${request_id}` to
   query the status of an asynchronous upgrade related request.
 * Added endpoint `POST /cluster/{id}/upgrade/stage_cdm_software` which
   allows staging CDM software for upgrades on the cluster.
 * Added new field `hasSnapshotsWithPolicy` to UnmanagedObjectDetails returned
   by GET `/unmanaged_object`.
 * Added new field `hasSnapshotsWithPolicy` to UnmanagedObjectSummary returned
   by GET `/unmanaged_object`.
 * Added new field `hasSnapshotsWithPolicy` to UnmanagedObjectSummary returned
   by GET `/unmanaged_object/reader_object`
 * Added new field `slaLastUpdateTime` to BulkOracleDbDetails
   returned by `PATCH /oracle/db/bulk`.
 * Added new field `slaLastUpdateTime` to BulkOracleHostDetails
   returned by `PATCH /oracle/host/bulk`.
 * Added new field `slaLastUpdateTime` to BulkOracleRacDetails
   returned by `PATCH /oracle/rac/bulk`.
 * Added new field `slaLastUpdateTime` to ComputeClusterDetail
   returned by `GET /vmware/compute_cluster/{id}`.
 * Added new field `slaLastUpdateTime` to ComputeClusterDetail
   returned by `PATCH /vmware/compute_cluster/{id}`.
 * Added new field `slaLastUpdateTime` to ComputeClusterSummary
   returned by `GET /vmware/compute_cluster`.
 * Added new field `slaLastUpdateTime` to FailoverClusterAppDetail
   returned by `GET /failover_cluster/failover_cluster_app/{id}`.
 * Added new field `slaLastUpdateTime` to FailoverClusterAppSummary
   returned by `GET /failover_cluster/failover_cluster_app`.
 * Added new field `slaLastUpdateTime` to FailoverClusterAppSummary
   returned by POST `/failover_cluster/failover_cluster_app`.
 * Added new field `slaLastUpdateTime` to FailoverClusterAppSummary
   returned by `PATCH /failover_cluster/failover_cluster_app/{id}`.
 * Added new field `slaLastUpdateTime` to FailoverClusterDetail
   returned by POST `/failover_cluster`.
 * Added new field `slaLastUpdateTime` to FailoverClusterDetail
   returned by `GET /failover_cluster/{id}`.
 * Added new field `slaLastUpdateTime` to FailoverClusterDetail
   returned by `PATCH /failover_cluster/{id}`.
 * Added new field `slaLastUpdateTime` to FailoverClusterHierarchyObjectSummary
   returned by `GET /failover_cluster/hierarchy/{id}`.
 * Added new field `slaLastUpdateTime` to FailoverClusterHierarchyObjectSummary
   returned by `GET /failover_cluster/hierarchy/{id}/children`.
 * Added new field `slaLastUpdateTime` to FailoverClusterHierarchyObjectSummary
   returned by `GET /failover_cluster/hierarchy/{id}/descendants`.
 * Added new field `slaLastUpdateTime` to FailoverClusterSummary
   returned by `GET /failover_cluster`.
 * Added new field `slaLastUpdateTime` to FilesetDetail
   returned by `POST /fileset`.
 * Added new field `slaLastUpdateTime` to FilesetDetail
   returned by `GET /fileset/{id}`.
 * Added new field `slaLastUpdateTime` to FilesetDetail
   returned by `PATCH /fileset/{id}`.
 * Added new field `slaLastUpdateTime` to FilesetSummary
   returned by `GET /fileset`.
 * Added new field `slaLastUpdateTime` to HdfsDetail
   returned by `POST /hdfs`.
 * Added new field `slaLastUpdateTime` to HdfsDetail
   returned by `GET /hdfs/{id}`.
 * Added new field `slaLastUpdateTime` to HdfsDetail
   returned by `PATCH /hdfs/{id}`.
 * Added new field `slaLastUpdateTime` to HdfsSummary
   returned by `GET /hdfs`.
 * Added new field `slaLastUpdateTime` to HostHierarchyObjectSummary
   returned by `GET /host/hierarchy/{id}`.
 * Added new field `slaLastUpdateTime` to HostHierarchyObjectSummary
   returned by `GET /host/hierarchy/{id}/children`.
 * Added new field `slaLastUpdateTime` to VcenterDetail
   returned by `GET /vmware/vcenter/{id}`.
 * Added new field `slaLastUpdateTime` to VcenterSummary
   returned by `GET /vmware/vcenter`.
 * Added new field `slaLastUpdateTime` to VcenterSummary
   returned by `PATCH /vmware/vcenter/{id}`.
 * Added new field `slaLastUpdateTime` to VcenterSummary
   returned by `PUT /vmware/vcenter/{id}`.
 * Added new field `slaLastUpdateTime` to VirtualMachineDetail
 * Added `PATCH /host/share/bulk` endpoint to update multiple network shares.
 * Added new field `isCustomRetentionApplied` to SnapshotSummary returned by
   `GET /unmanaged_object/{id}/snapshot`.
 * Added new field `slaLastUpdateTime` to VirtualMachineDetail
   returned by `GET /vmware/vm/{id}`.
 * Added new field `slaLastUpdateTime` to VirtualMachineDetail
   returned by `PATCH /vmware/vm/{id}`.
 * Added new field `slaLastUpdateTime` to VirtualMachineSummary
   returned by `GET /vmware/vm`.
 * Added new field `slaLastUpdateTime` to VmSnapshotDetail
   returned by `GET /vmware/vm/snapshot/{id}`.
 * Added new field `slaLastUpdateTime` to VmwareHostDetail
   returned by `GET /vmware/host/{id}`.
 * Added new field `slaLastUpdateTime` to VmwareHostDetail
   returned by `PATCH /vmware/host/{id}`.
 * Added new field `slaLastUpdateTime` to VmwareHostSummary
   returned by `GET /vmware/host`.
 * Added new field `slaLastUpdateTime` to VmwareVmMountDetailV1
   returned by `GET /vmware/vm/snapshot/mount/{id}`.
 * Added new field `slaLastUpdateTime` to VmwareVmMountDetailV1
   returned by `PATCH /vmware/vm/snapshot/mount/{id}`.
 * Added new field `slaLastUpdateTime` to VmwareVmMountSummary
   returned by `GET /vmware/vm/snapshot/mount`.
 * Added new field `isCustomRetentionApplied` to SnapshotSummary returned by
   `GET /unmanaged_object/{id}/snapshot`.
 * Added new Field `configuredSlaDomainType` to BulkOracleDbDetails returned by
  `PATCH /oracle/db/bulk`.
 * Added new Field `configuredSlaDomainType` to BulkOracleHostDetails returned
   by `PATCH /oracle/host/bulk`.
 * Added new Field `configuredSlaDomainType` to BulkOracleRacDetails returned by
  `PATCH /oracle/rac/bulk`.
 * Added new Field `configuredSlaDomainType` to ComputeClusterDetail returned by
  `GET /vmware/compute_cluster/{id}`.
 * Added new Field `configuredSlaDomainType` to ComputeClusterDetail returned by
  `PATCH /vmware/compute_cluster/{id}`.
 * Added new Field `configuredSlaDomainType` to ComputeClusterSummary returned
   by `GET /vmware/compute_cluster`.
 * Added new Field `configuredSlaDomainType` to FailoverClusterAppDetail
   returned by `GET /failover_cluster/failover_cluster_app/{id}`.
 * Added new Field `configuredSlaDomainType` to FailoverClusterAppSummary
   returned by `GET /failover_cluster/failover_cluster_app`.
 * Added new Field `configuredSlaDomainType` to FailoverClusterAppSummary
   returned by `POST /failover_cluster/failover_cluster_app`.
 * Added new Field `configuredSlaDomainType` to FailoverClusterAppSummary
   returned by `PATCH /failover_cluster/failover_cluster_app/{id}`.
 * Added new Field `configuredSlaDomainType` to FailoverClusterDetail returned
   by `POST /failover_cluster`.
 * Added new Field `configuredSlaDomainType` to FailoverClusterDetail returned
   by `GET /failover_cluster/{id}`.
 * Added new Field `configuredSlaDomainType` to FailoverClusterDetail returned
   by `PATCH /failover_cluster/{id}`.
 * Added new Field `configuredSlaDomainType` to
   FailoverClusterHierarchyObjectSummary returned by
   `GET /failover_cluster/hierarchy/{id}`.
 * Added new Field `configuredSlaDomainType` to
   FailoverClusterHierarchyObjectSummary returned by
   `GET /failover_cluster/hierarchy/{id}/children`.
 * Added new Field `configuredSlaDomainType` to
   FailoverClusterHierarchyObjectSummary returned by
   `GET /failover_cluster/hierarchy/{id}/descendants`.
 * Added new Field `configuredSlaDomainType` to  FailoverClusterSummary returned
   by `GET /failover_cluster`.
 * Added new Field `configuredSlaDomainType` to FilesetDetail returned by
  `POST /fileset`.
 * Added new Field `configuredSlaDomainType` to FilesetDetail returned by
  `GET /fileset/{id}`.
 * Added new Field `configuredSlaDomainType` to FilesetDetail returned by
  `PATCH /fileset/{id}`.
 * Added new Field `configuredSlaDomainType` to FilesetSummary returned by
  `GET /fileset`.
 * Added new Field `configuredSlaDomainType` to HdfsDetail returned by
  `POST /hdfs`.
 * Added new Field `configuredSlaDomainType` to HdfsDetail returned by
  `GET /hdfs/{id}`.
 * Added new Field `configuredSlaDomainType` to HdfsDetail returned by
  `PATCH /hdfs/{id}`.
 * Added new Field `configuredSlaDomainType` to HdfsSummary returned by
  `GET /hdfs`.
 * Added new Field `configuredSlaDomainType` to HostHierarchyObjectSummary
   returned by `GET /host/hierarchy/{id}`.
 * Added new Field `configuredSlaDomainType` to HostHierarchyObjectSummary
   returned by `GET /host/hierarchy/{id}/children`.
 * Added new Field `configuredSlaDomainType` to UnmanagedObjectDetails returned
   by `GET /unmanaged_object`.
 * Added new Field `configuredSlaDomainType` to UnmanagedObjectSummary returned
   by `GET /unmanaged_object`.
 * Added new Field `configuredSlaDomainType` to UnmanagedObjectSummary returned
   by `GET /unmanaged_object/reader_object`.
 * Added new Field `configuredSlaDomainType` to VcenterDetail returned by
   `GET /vmware/vcenter/{id}`.
 * Added new Field `configuredSlaDomainType` to VcenterSummary returned by
   `GET /vmware/vcenter`.
 * Added new Field `configuredSlaDomainType` to VcenterSummary returned by
   `PATCH /vmware/vcenter/{id}`.
 * Added new Field `configuredSlaDomainType` to VcenterSummary returned by
   `PUT /vmware/vcenter/{id}`.
 * Added new Field `configuredSlaDomainType` to VirtualMachineDetail returned by
   `GET /vmware/vm/{id}`.
 * Added new Field `configuredSlaDomainType` to VirtualMachineDetail returned by
  `PATCH /vmware/vm/{id}`.
 * Added new Field `configuredSlaDomainType` to VirtualMachineSummary returned
   by `GET /vmware/vm`.
 * Added new Field `configuredSlaDomainType` to VmSnapshotDetail returned by
  `GET /vmware/vm/snapshot/{id}`.
 * Added new Field `configuredSlaDomainType` to VmwareHostDetail returned by
  `GET /vmware/host/{id}`.
 * Added new Field `configuredSlaDomainType` to VmwareHostDetail returned by
  `PATCH /vmware/host/{id}`.
 * Added new Field `configuredSlaDomainType` to VmwareHostSummary returned by
  `GET /vmware/host`.
 * Added new Field `configuredSlaDomainType` to VmwareVmMountDetailV1 returned
   by `GET /vmware/vm/snapshot/mount/{id}`.
 * Added new Field `configuredSlaDomainType` to VmwareVmMountDetailV1 returned
   by `PATCH /vmware/vm/snapshot/mount/{id}`.
 * Added new Field `configuredSlaDomainType` to VmwareVmMountSummary returned by
  `GET /vmware/vm/snapshot/mount`.
 * Added new field `isCustomRetentionApplied` to FilesetSnapshotDetail returned
   by `GET /fileset/snapshot/{id}`.
 * Added new field `isCustomRetentionApplied` to HdfsSnapshotDetail returned by
   `GET /hdfs/snapshot/{id}`.
 * Added new field `isCustomRetentionApplied` to MssqlDbSnapshotSummary returned
   by `GET /mssql/db/{id}/snapshot`.
 * Added new field `isCustomRetentionApplied` to MssqlDbSnapshotDetail returned
   by `GET /mssql/db/snapshot/{id}`.
 * Added new field `isCustomRetentionApplied` to VmSnapshotSummary returned by
   `GET /vmware/vm/{id}/snapshot`.
 * Added new field `isCustomRetentionApplied` to VmSnapshotDetail returned by
   `GET /vmware/vm/snapshot/{id}`.
 * Added endpoint `POST /cluster/{id}/manual_discover`, which allows
   the customer to manually input data that would be learned using
   mDNS discovery. Returns same output as the `discover` endpoint.
 * Added new endpoint `POST /data_source/{id}/snapshot/bulk_delete`.
    Delete given snapshots for an object.
 * Added new endpoint `POST /data_source/snapshot/bulk_delete`.
    Delete all snapshots for given objects.
 * Added new field `snapshotFrequency` to `snapshotLocationRetentionInfo` field
   of `SnapshotRetentionInfo` field of FilesetSnapshotDetail returned by
   `GET /fileset/snapshot/{id}`.
 * Added new field `snapshotFrequency` to `snapshotLocationRetentionInfo` field
   of `SnapshotRetentionInfo` field of HdfsSnapshotDetail returned by
   `GET/hdfs/snapshot/{id}`.
 * Added new field `snapshotFrequency` to `snapshotLocationRetentionInfo` field
   of `SnapshotRetentionInfo` field of MssqlDbSnapshotSummary returned by
   `GET /mssql/db/{id}/snapshot`.
 * Added new field `snapshotFrequency` to `snapshotLocationRetentionInfo` field
   of `SnapshotRetentionInfo` field of MssqlDbSnapshotDetail returned by
   `GET /mssql/db/snapshot/{id}`.
 * Added new field `snapshotFrequency` to `snapshotLocationRetentionInfo` field
   of `SnapshotRetentionInfo` field of VmSnapshotSummary returned by
   `GET /vmware/vm/{id}/snapshot`.
 * Added new field `snapshotFrequency` to `snapshotLocationRetentionInfo` field
   of `SnapshotRetentionInfo` field of VmSnapshotDetail returned by
   `GET /vmware/vm/snapshot/{id}`.
 * Added new field `SnapshotRetentionInfo` to FilesetSnapshotDetail returned by
   `GET /fileset/snapshot/{id}`.
 * Added new field `SnapshotRetentionInfo` to HdfsSnapshotDetail returned by
   `GET /hdfs/snapshot/{id}`.
 * Added new field `SnapshotRetentionInfo` to MssqlDbSnapshotSummary returned by
   `GET /mssql/db/{id}/snapshot`.
 * Added new field `SnapshotRetentionInfo` to MssqlDbSnapshotDetail returned by
   `GET /mssql/db/snapshot/{id}`.
 * Added new field `SnapshotRetentionInfo` to VmSnapshotSummary returned by
   `GET /vmware/vm/{id}/snapshot`.
 * Added new field `SnapshotRetentionInfo` to VmSnapshotDetail returned by
   `GET /vmware/vm/snapshot/{id}`.
 * Added new endpoint `GET /unmanaged_object/{id}/snapshot`. Returns summary
   of all the snapshots for a given object.
 * Added new endpoint `GET /unmanaged_object`. Returns the summary of all the
   objects with unmanaged snapshots.
 * Added new endpoint `GET /report/compliance_summary`. Returns the summary of
   snapshot compliance based on a time-based requirement of at least one
   snapshot in each 24 hour report period for each protected object.
   This endpoint ignores the policies assigned to protected objects through SLA
   Domains.
 * Added new endpoint `GET /cluster/{id}/node_id`. Returns the IDs of the
   nodes in the cluster.
 * Added new endpoint `GET /role`. Returns role metadata for all roles in an
   organization.
 * Added new endpoint `POST /role`. Create a new role.
 * Added new endpoint `GET /role/{id}`. Get role metadata and the list of
   principals assigned to a specific role.
 * Added new endpoint `PATCH /role/{id}`. Update metadata for a specific role.
 * Added new endpoint `DELETE /role/{id}`. Delete a role.
 * Added new endpoint `GET /principal`. Get principals.
 * Added new endpoint `GET /principal/role`. Get list of roles assigned to
   principals.
 * Added new endpoint `POST /principal/role`. Assign roles to principals.
 * Added new endpoint `POST /principal/role/bulk_revoke`. Revoke roles from
   principals.
 * Added `DELETE /certificate/{id}` endpoint to delete a certificate.
 * Added `PATCH /cluster/{id}/security/cors` endpoint to update the current CORS
   support configuration for a web server.
 * Added `GET /cluster/{id}/security/cors` endpoint to get the current CORS
   support configuration for a web server.
 * Added new optional field `failoverClusterAppId` to FilesetSummary and
   FilesetCreate in `POST /fileset`, `GET /fileset` and `PATCH /fileset/{id}`
   endpoints to enable clustered fileset backup.
 * Added `GET /unmanaged_object/reader_object` endpoint to get all
   unmanaged objects that are recovered from reader archival locations.
 * Added `GET /failover_cluster` endpoint to get all failover clusters.
 * Added `POST /failover_cluster` endpoint to create a failover cluster.
 * Added `GET /failover_cluster/{id}` endpoint to retrieve a failover
   cluster by id.
 * Added `PATCH /failover_cluster/{id}` endpoint to update a failover cluster.
 * Added `DELETE /failover_cluster/{id}` endpoint to delete a failover cluster.
 * Added `GET /failover_cluster/failover_cluster_app` endpoint to get all
   failover cluster apps.
 * Added `POST /failover_cluster/failover_cluster_app` endpoint to create a
   failover cluster app.
 * Added `GET /failover_cluster/failover_cluster_app/{id}` endpoint to retrieve
   a failover cluster app by ID.
 * Added `PATCH /failover_cluster/failover_cluster_app/{id}` endpoint to update
   a failover cluster app.
 * Added `DELETE /failover_cluster/failover_cluster_app/{id}` endpoint to delete
   a failover cluster app.
 * Added `GET /legal_hold/snapshot` endpoint to get snapshots under legal hold.
 * Added `POST /legal_hold/snapshot` endpoint to apply legal hold on a snapshot.
 * Added `GET /legal_hold/object` endpoint to get all objects with snasphot
   under legal hold.
 * Added `POST /legal_hold/snapshot/dissolve` to dissolve legal hold from
   snapshots.
 * Added optional field `shouldUseAgent` to `RestoreFileJobConfig`.
   in `POST /vmware/vm/snapshot/{id}/restore_file` to specify
   whether to use Rubrik Backup Service to restore file. Default value is true.
 * Added `America/Costa_Rica`and `America/St_Johns` as supported cluster time
   zones.
 * Added `GET /failover_cluster/hierarchy/{id}` to get summary of a
   failover cluster hierarchy object.
 * Added `GET /failover_cluster/hierarchy/{id}/children` to get list of
   immediate descendant objects.
 * Added `GET /failover_cluster/hierarchy/{id}/descendants` to get list of
   descendant objects.
 * Added `GET /job_monitoring` to get job summary information, with options
   to filter and sort the results for protection and recovery jobs that are
   currently running, scheduled to run or completed in the past 24 hours.
 * Added `GET /job_monitoring/summary_by_job_type` to get job summary
   information separated by job type for all jobs that are currently running,
   scheduled to run or completed in the past 24 hours.
 * Added `GET /job_monitoring/summary_by_job_state` to get job summary
   information separated by job state for all running jobs, jobs that have
   been scheduled and jobs that are complete, for protection and recovery
   jobs in the past 24 hours.
 * Added `GET /job_monitoring/csv_download_link` which returns a link to
   download job summary information with the same filters as the
   `GET /job_monitoring` API.
 * Added optional field 'legalHoldDownloadConfig' to
   'FilesetDownloadFileJobConfig', 'DownloadFileJobConfig'.
   This is an optional argument containing a Boolean parameter to depict if
   the download is being triggered for Legal Hold use case.
 * Added optional field isPlacedOnLegalHold to BaseSnapshotSummary.
   The Boolean parameter specifies whether the snapshot is placed under a
   Legal Hold.
 * Added `POST /mssql/db/{id}/browse` endpoint to list backups, which includes
   both snapshots and logs.
 * Added `POST /mssql/db/{id}/download_files` endpoint to download a list of
   backup files specified by time range or point in time.
 * Added `POST /mssql/db/{id}/download_files_by_id` endpoint to download a list
   of backup files specified by ID.
 * Added `PATCH /report/config` to set the number of days for which the report
   job instances for log jobs are retained.
 * Added ISO8601 format date as a way of specifying time in MssqlRecoveryPoint.
 * Added primaryDatabaseLogBackupFrequency parameter to the response objects
   MssqlLogShippingSummary and MssqlLogShippingDetail.
 * Added targetInstanceName parameter to MssqlMountSummary
 * Added `POST /mssql/db/{id}/download` endpoint to download the logs/snapshots
   required to restore a SQL database to a given recovery point.
 * Added the optional fields uid, surname, and emailAddress to the
   GenericCsrRequest (renamed from CsrRequest) and renamed WebCsrRequest
   to CsrRequest.
 * Added new endpoints `PATCH /oracle/db/bulk`,
   `PATCH /oracle/host/bulk`, and `PATCH /oracle/rac/bulk` for bulk
   updating an array of IDs with `OracleProperties`.
 * Added an optional query parameter
   `should_apply_to_existing_snapshots` to `PATCH /sla_domain/{id}` to
   apply the new SLA configuration to existing snapshots of data sources
   retained by the specified SLA Domain.
 * Added an optional query parameter
   `should_apply_to_existing_snapshots` to `PUT /sla_domain/{id}` to
   apply the new SLA configuration to existing snapshots of data sources
   retained by the specified SLA Domain.
 * Added optional field 'shouldForce' to 'UpdateMountConfig' in PATCH
   vmware/vm/snapshot/mount/{id} endpoint. Use this field to forcibly power
   down a virtual machine mounted with Storage vMotion.
 * Added a new optional field `isOracleHost` to `HostRegister` in `POST /host`.
   and `HostUpdate` in `PATCH /host/{id}` to indicate if we should discover
   Oracle information during registration and host refresh.
 * Added a new model `EventCsvDownloadResponse` and REST API endpoints
   `/event/csv_download_link` for downloading CSV file for event summary
   information in the Activity log UI page.
 * Added `GET /host/hierarchy/{id}` to get summary of a
   host/share hierarchy object.
 * Added `GET /host/hierarchy/{id}/children` to get list of
   immediate descendant objects.
 * Added `isInVmc` in `GET /vmware/vm/{id}` and `PATCH /vmware/vm/{id}`.
   to return whether the virtual machine is in a VMC setup.
 * Added `pendingSlaDomain` field to `GET /vmware/vm/{id}` and
   `PATCH /vmware/vm/{id}` to indicate a pending SLA Domain assignment
   on the Virtual Machine.
 * Added `pendingSlaDomain` field to `GET /mssql/hierarchy/{id}`,
   `GET /mssql/hierarchy/{id}/children`, and
   `GET /mssql/hierarchy/{id}/descendants` to indicate a pending SLA
   Domain assignment on the MSSQL object.
 * Added `pendingSlaDomain` field to `GET /fileset`,
   `POST /fileset`, `GET /fileset/{id}`, and `PATCH /fileset/{id}`
   to indicate a pending SLA Domain assignment on the Fileset.
 * Added `pendingSlaDomain` field to the objects referenced by the
   `filesets` field in the response objects of
   `GET /failover_cluster/hierarchy/{id}`,
   `GET /failover_cluster/hierarchy/{id}/children`,
   `GET /failover_cluster/hierarchy/{id}/descendants`,
   `GET /host/hierarchy/{id}`, and `GET /host/hierarchy/{id}/children`
   to indicate a pending SLA Domain assignment on the object.
 * Added endpoint `POST /vmware/vcenter/{id}/refresh_vm` which
    allows refreshing metadata for a single virtual machine in a vCenter.
 * Added optional field `shouldForceFull` to the body parameter of
   `PATCH /mssql/db/{id}` to enable requiring a full snapshot for a specified
    SQL Server database.
 * Added `LinuxHost`, `WindowsHost` and `NasHost` to the
   `object_type` filtering field of the `GET /event/latest` endpoint.

 ### Changes to V1 API in Rubrik Version 5.1.1
 ## Breaking changes:

 ## New features:
 * Added `has_instances` parameter to GET `/mssql/hierarchy/{id}/descendants`.
   and GET `/mssql/hierarchy/{id}/children`. Added `hasInstances` field in the
   response object.

 ### Changes to V1 API in Rubrik Version 5.1.0
 ## Deprecation:

 ## New features:
 * Added `GET /archive/aws/s3/{id}/account_id` endpoint to get the
   account ID of the AWS data location.
 * Added `DELETE /authorization/cache` endpoint to clear cached authorization
   information.
 * Added the `GET /syslog/export` endpoint to get all syslog export rules.
 * Added the `POST /syslog/export` endpoint to add a syslog export rule.
 * Added the `GET /syslog/export/{id}` endpoint to get a syslog export rule.
 * Added the `PATCH /syslog/export/{id}` endpoint to update a syslog export
   rule.
 * Added the `DELETE /syslog/export/{id}` endpoint to delete a syslog export
   rule.
 * Added the `POST /syslog/export/test` endpoint to test a syslog export rule.
 * Added stubs for the `GET /event/latest` endpoint to V1 to
   facilitate a future migration from internal to V1.
 * Added stubs for the `GET /event_series/{id}` endpoint to V1
   to facilitate a future migration from internal to V1.
 * Added stubs for the `GET /event` endpoint to V1 to facilitate
   a future migration from internal to V1.
 * Added optional query parameter 'snappableStatus' to /vmware/vcenter,
   /vmware/compute_cluster, /vmware/host,  /host, /mssql/instance, and
   /windows_cluster. This parameter enables a user to fetch the set of
   protectable objects from the list of objects visible to that user.
 * Added optional field `alias` to HostSummary, HostRegister, and HostUpdate
   schemas. This field will allow the user to specify an alias for each host
   which can be used for search.
 * Added `POST /archive/location/{location_id}/reader/refresh/data_sources`.
   endpoint to refresh the metadata of a list of given data sources from
   the given reader location.
 * Added `POST /managed_volume/snapshot/export/{id}/script` endpoint to
   generate a script to create a directory to view all files in all channels
   of a managed volume snapshot export.
 * Moved the `GET /blackout_window` endpoint from internal to V1.
 * Moved the `PATCH /blackout_window` endpoint from internal to V1.
 * Added `GET /certificate` endpoint to get all imported certificates.
 * Added `POST /certificate` endpoint to import a certificate.
 * Added `GET /certificate/{id}` endpoint to retrieve a certificate by id.
 * Added `PATCH /certificate/{id}` endpoint to update a certificate.
 * Added `GET /csr` endpoint to get all outstanding
   Certificate-Signing-Requests.
 * Added `POST /csr` endpoint to generate a Certificate-Signing-Request.
 * Added 'DELETE /oracle/db/{id}/downloaded__snapshots' endpoint
   to delete downloaded Oracle db snapshots and log snapshots.
 * Added unauthenticated endpoint `GET /saml/sso_status` to check
   SAML SSO status. For example, we can check whether SSO is enabled or not.
 * Added optional field archivalTieringSpec to ArchivalSpecV2 to support
   archival tiering. This enables the user to configure either Instant Tiering
   or Smart Tiering (with a corresponding minimum accessible duration) on an
   SLA domain with archival configured to an Azure archival location.
 * Updated endpoint /mssql/db to have a new optional query paramter,
   indicating if backup task information should be included.
 * Added the `IoFilterSummary` object with `id`, `name`, `version`, `vendor`.
   fields and `summary`, `releaseDate` optional fields.
 * Added `GET /vmware/computer_cluster/request/{id}` endpoint to get the details
   of an asynchronous request that involves a VMware compute cluster.
 * Added `PATCH /vmware/computer_cluster/{id}` endpoint to update
   the configuredSlaDomainId for a VMware compute cluster with a specific ID.
 * Added `GET /vmware/compute_cluster/{id}/io_filter` to get the ioFilters on
   the VMware compute cluster with a specific ID.
 * Added `POST /vmware/compute_cluster/{id}/install_io_filter` endpoint to
   install the Rubrik ioFilter to the VMware compute cluster with a specific
   ID.
 * Added `POST /vmware/compute_cluster/{id}/uninstall_io_filter` endpoint to
   uninstall the Rubrik ioFilter from the VMware compute cluster with a
   specific ID.
 * Added `POST /vmware/compute_cluster/{id}/upgrade_io_filter` endpoint to
   upgrade the Rubrik ioFilter to the latest version for the VMware compute
   cluster with a specific ID.
 * Moved the `GET /vmware/compute_cluster` endpoint from internal to V1.
 * Moved the `GET /vmware/compute_cluster/{id}` endpoint from internal to V1.
 * Added endpoint /saml/authn_request/{idp_name} for making SAML
 * Added an optional field 'isRetentionLocked' to 'POST /sla_domain',
   'PUT /sla_domain/{id}' and 'PATCH /sla_domain/{id}' to allow users to manage
   the Retention Lock capabilities of an SLA Domain.
 * Added endpoint 'POST /saml/authn_request/{idp_name}' for making SAML
   authentication request for a given ID Provider.
 * Added endpoint 'POST /saml/rubrik_metadata' for downloading Rubrik SAML
   metadata file.
 * Added a series of new endpoints /idp_auth_domain for managing SAML
   Id Provider integration.
 * Moved the 'connectionStatus' field from VcenterDetail to VcenterSummary.
 * Added new optional query parameters 'data_sources' and 'snapshot_ids' to
   'GET /sla_domain' endpoint. This allows users to filter SLA Domains based
   on whether they can be assigned to specified data sources and snapshots.
 * Changed the existing endpoints `GET /mssql/db/` `GET /mssql/instance`.
   `GET /mssql/db/{id}` `PATCH /mssql/db/{id}` `GET /mssql/db/snapshot/{id}`.
   `GET /mssql/instance/{id}` `GET /mssql/instance/{id}` to return an
   unprotectable reason as a string in the 'unprotectableReason' field instead
   of a JSON struct.
 * Added a `PUT /host/certificate/{id}` endpoint to update the
   certificate of the given host
 * Added `GET /vcd/vapp/template/snapshot/{snapshot_id}/export` to get
   available options for a vApp template snapshot export.
 * Added `POST /vcd/vapp/template/snapshot/{snapshot_id}/export` to queue
   export of a vApp template snapshot.
 * Added continuous data protection state for each VMware virtual machine.
 * Added optional field 'isIoFilterInstalled' to vCenter summary. Returns true
   if any Rubrik IO filters are installed on any compute clusters that are
   a part of the vCenter.
 * Added optional field `cloudStorageTier` to `BaseSnapshotSummary`, to indicate
   the current storage tier of the archived copy of a snapshot.
 * Added `POST ` /vmware/vm/cdp endpoint to get live CDP info for a list of
   virtual machines.
 * Added `POST ` /vmware/vm/cdp_state endpoint to get CDP state info for a list
   of virtual machines.
 * Added the optional field isEffectiveSlaDomainRetentionLocked to
   FilesetSummary. The field is a Boolean that specifies whether the effective
   SLA Domain of a fileset is retention locked.
 * Added optional field isEffectiveSlaDomainRetentionLocked to `Snappable`.
   The parameter depicts if the effective SLA domain for the data source is
   a Retention Lock SLA Domain.
 * Added optional field isConfiguredSlaDomainRetentionLocked to SlaAssignable.
   The parameter depicts if the configured SLA domain for the object is a
   Retention Lock SLA Domain.
 * Added optional parameter `ignore_connection_status` to `GET /vmware/vcenter`.
   to skip calculating connection status.
 * Added required fields: isCdpEnabled(type: boolean) and cdpState(type:
   CdpState Enum) to VirtualMachineDetails.
 * Moved the GET `/mssql/hierarchy/{id}/descendants` and
   GET `/mssql/hierarchy/{id}/children` endpoints from internal to v1.
   Added the `is_relic`, `is_live_mount` `is_clustered`, and
   `is_log_shipping_secondary`.
   parameters. Changed acceptable values of `object_type` and `sort_by`.
   parameters. Added `hasPermissions`, `isInAvailabilityGroup`,
   `descendantSlaDomains`, `instanceChildren`,
   `unprotectableReasons`, `isLiveMount`, `isLogShippingSecondary`,
   `hostStatus`, `cbtEnabled`, `cbtEffectiveStatus`, `isClustered` and
   `clusterInstanceAddress` fields in the
   response object. Removed `replicaCount` field in the response object.
   Added support for returning non-availability databases.
   Changed `object_type` query parameter to take a comma-separated list of
   object types.
   Added the GET `/mssql/hierarchy/{id}` endpoint to get a specific hierarchy
   object.
 * Added the POST `/mssql/sla_domain/assign` endpoint to assign SLA properties
   to SQL Server objects.
 * Added isRetentionLocked to MssqlInstanceSummary.

 ### Changes to V1 API in Rubrik Version 5.0.3
 ## Deprecation:

 ## New features and improvements:
 * Added a new optional field 'oracleQueryUser' to HostRegister, HostUpdate
   and HostDetail objects, for setting the Oracle username for account with
   query privileges on the host. This applies the following endpoints:
   POST /host/bulk, PATCH /host/{id}, and GET /host/{id}.

 ### Changes to V1 API in Rubrik Version 5.0.2
 ## Deprecation:

 ## New features and improvements:
 * Added `GET /oracle/db/{id}/restore_estimate` endpoint to provide an
   estimate of the amount of data that must be downloaded for a restore
   operation.
 * Introduced optional field `logicalSize` to `VirtualMachineDetail`. This
   field gives the sum of logical sizes of all the disks in the virtual
   machine.
 * Added optional parameter `ignore_connection_status` to
   `GET /vmware/vcenter/{id}`. Set this parameter to skip calculating
   connection status.

 ### Changes to V1 API in Rubrik Version 5.0.1
 ## Deprecation:

 ## New features and improvements:
 * Added `GET /cluster/{id}/security/encryption` endpoint to provide encryption
   at rest status of the cluster.
 * Added `GET /vmware/host/{id}/datastore` endpoint to get the details
   of datastores for an ESXi host.
 * Added `POST /vmware/vm/mount/{id}/relocate` endpoint to migrate datastore
   for a virtual machine from Live Mount or Instant Recovery.
 * Added `America/Santiago`, `Australia/Adelaide` and `Australia/Brisbane` as
   supported cluster time zones.

 ### Changes to V1 API in Rubrik Version 5.0.0
 ## Deprecation:
 * Deprecating query paramter `hostname` of `GET /host` and response property
   `hostname` of `GET /host`, `POST /host`, `PUT /host/certificate/{id}`,
   `GET /host/{id}`, `PATCH /host/{id}`, and `POST /host/{id}/refresh`.
   Use `name` instead. Support for `hostname` is present in v1 and removed in v2.
 * Deprecating response property `isArchived` of `GET /mssql/db`,
   `GET /mssql/db/{id}`, and `PATCH /mssql/db/{id}`. Use
   `isDeleted` instead. Support for `isArchived` is present in v1 and removed in v2.
 * Deprecating parameter `datastoreName` of `Post /vmware/vm/snapshot/{id}/mount`.

 ## New features:
 * Added a new PUT endpoint to /ldap_service/{id}.
 * Added /cluster/{id}/snmp_mib_link endpoint.
 * Added a new optional field 'oracleSysDbaUser' to /host/{id} POST endpoint
   during register host for setting the Oracle username for account with sysdba
   privileges on this host.
 * Added a new optional field 'oracleSysDbaUser' to /host/{id} endpoint for
   changing the Oracle username for account with sysdba privileges on this
   host.
 * Added a new optional field 'mfaServerId' to /ldap_service endpoint for
   associating a configured MFA server.
 * Added a new /sla_domain endpoint with the same functionality as /v1, but
   added support for weekly and quarterly time units and modify the config of
   monthly and yearly.
 * Added a new optional field 'isArrayEnabled' to 'FilesetTemplateCreate'
   for creation of storage array-enabled fileset templates. We also include
   this new field in 'FilesetTemplateDetail'.
 * Added a new optional field 'arraySpec' to 'FilesetCreate' for
   creation of storage array-enabled filesets. We also include
   this new field in the responses of the `GET /fileset/{id}` and
   `GET /fileset` endpoints.
 * Added ability to use the /host/{id} endpoint to specify a host level
   setting for enabling or disabling CBT backups of SQL Server databases,
   along with new optional fields 'mssqlCbtEnabled', 'mssqlCbtEffectiveStatus'
   and 'mssqlCbtDriverInstalled'.
 * Added ability to use the /host/{id} endpoint to instruct the Rubrik cluster
   to remove the CBT driver from a Windows host that has CBT backups of SQL
   Server databases disabled.
 * Added new optional field 'isPassthrough' to 'POST /fileset' endpoint to
   indicate if we want to take a direct archive backup.
 * Added a new field unprotectable_reasons to GET /mssql/db/{id} and
   GET /mssql/instance/{id}. This field keeps track of the reasons that a
   SQL Server database or instance cannot be protected by Rubrik.
 * Added ability to use the /host/{id} endpoint to specify a host level
   setting for enabling or disabling VFD backups of volumes on Windows hosts.
 * Added ability to use the /host/{id} endpoint to instruct the Rubrik cluster
   to remove the VFD driver from a Windows host that has VFD backups of volumes
   disabled.
 * Added new optional field 'isOverwrite' to ExportMssqlDbJobConfig for
   'POST /mssql/db/{id}/export' endpoint to enable overwriting an existing
   database while using the export operation.
 * Added a new optional field 'allowOverwrite' to the
   'POST /mssql/db/{id}/export' endpoint to allow overwriting an existing
   database during the export.
 * Added a new field 'hasAttachingDisk' to 'GET /vmware/vm/snapshot/mount' and
   'GET /vmware/vm/snapshot/mount/{id}' that indicates to the user whether
   this is an attaching disk mount job.
 * Added a new field 'attachingDiskCount' to 'GET /vmware/vm/snapshot/mount'
   and 'GET /vmware/vm/snapshot/mount/{id}' that indicate to the user how many
   disks are attached.
 * Removed optional field 'clusterInstanceAddress' from
   'PATCH /mssql/instance/{id}' endpoint since host-centric discovery for
   cluster instances eliminates the need to edit the instance address.
 * Added new field `missedSnapshotTimeUnits` in `MissedSnapshot`.
 * Added new field 'vmxFileContent' in getSnapshotDetail
 * Added new optional fields 'organizationId' and 'organizationName' to
   `/host/{id}` and `/host` endpoints to get the organization a host is
   assigned to due to Envoy.
 * Added new field 'vmwareTagList' in getSnapshotDetail
 * Added new endpoint GET /cluster/{id}/certificate to get the cluster cert.
 * Added new optional field PATCH /vmware/vm/{id} to indicate whether or not
   to refresh the in-memory cache after updates to a virtual machine record.
 * Added new field 'shouldRecoverTags' in MountSnapshotJobConfigV1
 * Added new field 'shouldRecoverTags' in InstantRecoveryJobConfig
 * Added new field 'shouldRecoverTags' in ExportSnapshotJobConfig
 * Added a new optional field 'operating_system' to 'GET /host'.
 * Added a new optional field 'apiEndpoint' to 'NasBaseConfig'.
 * Added new optional field 'enableSymlinkResolution' to FilesetSummary in
   'POST /fileset', "GET /fileset" and "PATCH /fileset/{id}" endpoints to
   indicate if we want to resolve symlinks during metadata scan.
 * Added new optional field 'enableHardlinkSupport' to FilesetSummary and
   FilesetCreate in 'POST /fileset', "GET /fileset" and "PATCH /fileset/{id}"
   endpoints to enable recognition and deduplication of hardlinks in
   fileset backup.

 ## Improvements:
 * Added optional 'apiToken' and 'apiEndpoint' fields to NasConfig to support
   Pure FlashBlade devices.
 * Added a new field 'guestOsName' to GET /vmware/vm. This allows users to
   filter virtual machines based on the guest operating system name.
 * Enhanced GET /vmware/vm/snapshot/{id} response by adding disk details
   such as fileName and deviceKey.
 * Added isMountAllowed field to the response of GET
   /mssql/db/{id}/recoverable_range. This helps identify which recoverable
   ranges support Live Mount, which is affected by whether a database snapshot
   contains filestreams.
 * Added optional query parameters limit and offset to support pagination for
   GET /mssql/db endpoint.
 * Added optional query parameters sortOrder and sortBy to enable users to
   sort the results of GET /mssql/db endpoint by effectiveSlaDomainId and name.

 ### Changes to V1 API in Rubrik Version 4.2
 ## Breaking changes:
 * The input field OperatingSystemType value `Linux` is replaced by `UnixLike`.
   in FilesetTemplateCreateDefinition, used by POST /fileset-template, and
   in FilesetTemplatePatchDefinition, used by PATCH /fileset_template/{id}.
 * The input field operating_system_type value `Linux` is replaced by `UnixLike`.
   in GET /fileset-template and GET /host.

 ## New features:
 * Added a new /ldap_service endpoint for managing Active Directory integration.
 * Added a new optional field 'nasBaseConfig' to GET /api/v1/host. This field
   allows NAS (Isilon/NetApp) api credential to be displayed and edited.
 * GET /host/{id}/search now returns search results for filesets, Windows volume
   groups, and storage array volume groups belonging to the host. Previously,
   the endpoint would only return fileset search results.
 * Added endpoints for actions related to log shipping configurations:
   POST /mssql/db/{id}/log_shipping to create, GET /mssql/db/log_shipping to
   query, GET /mssql/db/log_shipping/{id} to retrieve individual details,
   DELETE /mssql/db/log_shipping/{id} to delete, and POST
   /mssql/db/log_shipping/{id}/reseed to reseed an unhealthy secondary
   database.
 * Added `Africa/Johannesburg`, `Africa/Lagos` and `Africa/Nairobi` as
   supported cluster time zones.
 ## Improvements:
 * Added 2 new optional fields `apiHostname` and `zoneName` to POST /host
   and GET /host. These fields allow different zones to be configured for
   Isilon NAS.
 * Added a new field 'geolocation' to GET /cluster/{id} and PATCH /cluster/{id}.
   These allow users to view and modify the geolocation of the cluster,
   respectively.
 * Added a new field `guestOsType` to the `VirtualMachineDetail`.
   object used in response of `GET /vmware/vm/{id}`.
 * Added an optional organizationId field to the HostRegister request in POST
   /host to allow users with the global admin RBAC role to add a host to an
   organization specified by the value of the organizationId field.
 * Added canLiveMount field to the responses of `GET /mssql/db/snapshot/{id}`.
   and `GET /mssql/db/{id}/snapshot`.
 * Added an optional field `agentStatus` to `VirtualMachineSummary` object used
   in response of `GET /vmware/vm` endpoint. This allows user to check the
   Rubrik Backup Service connection status of the corresponding VMware VM.
 * Added the `POST /vmware/vm/{id}/register_agent` endpoint.
 * Added a new field 'createDatastoreOnly' to POST
   /vmware/vm/snapshot/{id}/mount. This allows user to mount snapshot to vmware
   datastore only, without create a virtual machine.
 * Added a new field `numWindowsVolumeGroups` to the `SlaDomainDetail` and
   `SlaDomainSummary` objects used in response to `GET /sla_domain` endpoints.
 * Added new optional field 'shouldRefreshCacheAfterUpdate' for PATCH
   /vmware/vm/{id} to indicate whether or not to refresh the in-memory cache
   after updates to a virtual machine record.

 ### Changes to V1 API in Rubrik Version 4.1

 ## Breaking changes:
 * The 'allowedBackupWindow' and 'firstFullBackupWindow' input field for
   /sla_domain now take the cluster time zone instead of UTC.

 ## New features:
 * Added POST /host/{id}/refresh endpoint to refresh hosts without
   registering them again
 * Added GET /fileset/snapshot/{id} endpoint to retrieve details of a
   fileset snapshot.
 * Added POST /mssql/db/{id}/log_backup endpoint for taking on-demand
   log backup of SQL Server databases.
 * Added a new optional query parameter 'is_agentless' to
   GET /windows_cluster. This allows users to filter all clusters that
   do not have any hosts with Rubrik connectors installed. If this
   parameter is omitted, all clusters are returned.
 * Added a new field 'isAgentless' to GET /windows_cluster. This indicates
   whether all the hosts on this windows cluster do not have Rubrik connector
   installed. If even one host has Rubrik connector installed, this will
   be set to false.
 * Added a new optional 'organization_id' query parameter on POST /session.
   This allows users to specify the organization to which they intend to
   authenticate. If this parameter is omitted, an organization is chosen
   automatically.
 * Added a new 'organizationId' field to the response on POST /session. This
   indicates the organization to which the user has authenticated.
 * Added a new field 'moid' on GET /vmware/vm. This allows users to search
   VMWare VMs by Managed Object ID. The list of results of the call can now
   additionally be sorted in ascending/descending order by moid.
 * Added new fields 'replicas' and 'availabilityGroupId' on GET /mssql/db
   and GET /mssql/db/{id}. If a database is an availability database,
   it will have some number of replicas, which are copies of the database
   running on different instances. Otherwise, there will only be one
   replica, which represents the single copy of the database. The field
   'availabilityGroupId' will be set only for availability databases
   and points to the availability group of the database. Also deprecated
   several fields on these endpoints, as they should now be accessed via
   the 'replicas' field.
 * Added a field 'cloudInstantiationSpec' on GET /vmware/vm and PATCH
   /vmware/vm/{id} to allow enabling/disabling/updating specs for automatic
   conversion to cloud image on a per VM basis
 * Added a new optional query parameter 'availabilityGroupId' to GET /mssql/db,
   in order to filter databases by their availability group ID.
 * Added a new field 'timezone' to GET /cluster/{id} and PATCH /cluster/{id}.
   These calls show and change, the current time zone setting of the cluster.
 * Add a new field 'ignoreErrors' to POST /vmware/vm/snapshot/{id}/restore_file
   that will let job to ignore file errors during restore jobs.
 * Added `Asia/Kolkata` and `Asia/Kathmandu` as supported cluster time zones.

 ### Changes to V1 API in Rubrik version 4.0

 New features:
 * Added a new field 'name' on GET /sla_domain. This allows users to search
   SLA Domains by name. Users can also sort the SLA Domain summary results
   in ascending/descending order by name
 * The Rubrik cluster generates a unique ID for each virtual machine when a
   vCenter Server is added. When a virtual machine changes to another vCenter
   Server or unregisters and registers with the same vCenter Server, a new
   unique ID is generated for that virtual machine. When this happens, the
   virtual machine object associated with the original ID becomes a relic.
   In this release we have added the option conflictResolutionAuthz to
   add/edit vCenter endpoints of the Rubrik REST APIs. This option can take
   either 'AllowAutoConflictResolution' to authorize the linking of relic
   virtual machine objects with the current virtual machine object of a
   specific virtual machine, and makes the collective snapshot history
   available through the current object. Or it can take 'NoConflictResolution'
   to not allow linking. Default value is 'NoConflictResolution'.
 * Introduced endpoints for SQL Server Live Mounts: POST /mssql/db/{id}/mount,
   GET /mssql/db/mount, GET /mssql/db/mount/{id}, and
   DELETE /mssql/db/mount/{id}. These allow users to create, query for, and
   delete Live Mounts for SQL Server databases.
 * Added the isLiveMount field to the response of GET /mssql/db. Added an
   optional is_live_mount query parameter to filter by this field.
 * Added links field to the paginated responses of
   GET /vmware/vm, /vmware/vm/mount and /fileset endpoints. This allows users
   to navigate between pages by following the href in links.prev and links.next.
 * Introduced optional caCerts parameter for the vCenter post/put/patch
   endpoints to specify trusted CA certs to use when connecting to a vCenter
   server and associated ESX hosts.
 * Modified PATCH /mssql/instance/{id} endpoint to support SQL db
   auto-protection, added fields configuredSlaDomainId,
   logBackupFrequencyInSeconds, logRetentionHours, and copyOnly to the PATCH
   request, as well as configuredSlaDomainId, configuredSlaDomainName,
   logBackupFrequencyInSeconds, logRetentionHours, and copyOnly to the GET and
   PATCH responses.
 * Added GET /vmware/vcenter/{id} endpoint to allow fetching details of a
   single vCenter server, including its refresh and delete status.
 * Introduced optional parameter keepMacAddresses to
   POST /vmware/vm/snapshot/{id}/mount, /vmware/vm/snapshot/{id}/export, and
   /vmware/vm/snapshot/{id}/instant_recovery endpints.
   This allows new VMs to have the same MAC address as their source VMs.
 * Introduced optional parameters offset and limit to support
   pagination for Browse end-point.
 * Added `nodeId` to `AsyncRequestStatus` to improve debugging job failures.


 ### Changes to V1 API in Rubrik version 3.2

 New features:
 * Added an option to preserve the virtual machine moid during instant recovery.
   Use this option cautiously. It will permanently overwrite the source
   virtual machine. The source virtual machine cannot be recovered if the
   operation fails. It will not create a new virtual machine and rename
   the original one so we could fall back to the original in case of a failure
   in the process. This is not exposed in the Web UI and the API user should
   be careful to not destroy the original virtual machine by accident.
 * Introduced shareId into /fileset endpoints to support
   the creation of filesets based on network shares.
 * Introduced optional config parameter for all on demand
   snapshot endpoints. The config parameter includes an optional slaId field.
   The policies of the specified SLA Domain determine the retention of backups
   on the local Rubrik cluster, the retention target, and the archival location.
 * Introduced optional parameters to endpoint /mssql/db/{id}/export,
   so that physical filenames and logical filenames can be changed
   for exported databases. These two parameters are newFilename and
   newLogicalName.
 * Introduced optional config parameter for the VM patch endpoint
   (PATCH /vmware/vm/{id}) to specify a guest credential for a
   specific VM.
 * Introduced optional query parameters to endpoint /host, to
   support infix searching by hostname and sort order of results.
 * Introduced slaId and slaName field to all snapshot summary/details object.
   These fields specify the SLA Domain object that is associated with the
   snapshot.

Bug Fixes:
 * Made path parameter required in GET /fileset/snapshot/{id}/browse
   and GET /vmware/vm/snapshot/{id}/browse. Previously, an error was
   thrown when path wasn't passed in. This solves that bug.

 ### Changes to V1 API in Rubrik version 3.1
 Initial GA release

# Overview #
The Rubrik REST API provides a means to work with Rubrik clusters and Rubrik Edge virtual appliances using text-based representations of the resource objects that are managed by the Rubrik software.

In its simplest form, the RESTful architecture used by the Rubrik REST API has the following workflow:
1. Client authenticates with the Rubrik REST API server and starts a session.
2. Client sends an HTTP request to the URI for a resource object.
3. Server handles the request and sends an HTTP response with a JSON formatted response body.

This overview section provides a basic description of the HTTP requests and responses used with the Rubrik REST API. The [Authentication](#section/Authentication) section provides information about how a client authenticates with the Rubrik REST API server.

## Documentation conventions

The descriptions in this documentation use 'Rubrik cluster' to refer to both Rubrik clusters and Rubrik Edge virtual appliances.

The documentation uses a dollar symbol to indicate a variable in body text and code samples. Some examples:
* `$cluster_address` to represent a Rubrik cluster IP or resolvable host name
* `$snapshot_id` to represent the ID of a specific snapshot
* `$request_id` to represent the ID of a specific asynchronous request

To shorten the path shown in a code sample, the documentation sometimes replaces a longer variable form with the variable form `{id}`. This variable form represents the `id` value for an associated member string in a response body or request URL.

The documentation use the term 'snappable' to refer to all objects that have data that can be protected by a Rubrik cluster or a Rubrik Edge appliance. For example, all of the following are 'snappables':
* Virtual machines
* File systems
* SQL Server databases

## Versioning

The Rubrik REST API structures the request URL to include the version of the API. This ensures that backwards incompatible improvements in a new version are not unintentionally used with an earlier version of the API.

The URL of a request includes a segment that identifies the version of the API. In the URL, the version segment always follows immediately after the Rubrik REST API server name or IPv4 address.

For example, for a Rubrik cluster with the server address `$cluster_address` a request to the cluster endpoint for Rubrik REST API v1 would look like this:
`https://$cluster_address/api/v1/cluster`

In this URL, the `v1` represents the version number for Rubrik REST API v1.

The Rubrik REST API increments the version number when the new version includes a change that is not backward compatible.

Examples of changes that are not backward compatible include:
* Resource type removed
* Required parameter added to an existing resource type
* Required parameter removed from an existing resource type
* Renamed resource or parameter
* Authentication requirement added for a previously unauthenticated resource

When the Rubrik REST API has changes that are not backward compatible, those changes appear in a new version. For example, incompatible changes to v1 appear in v2. The Rubrik REST API server makes v2 endpoints available on the path: `https://$cluster_address/api/v2/`. The Rubrik REST API server continues to provide the v1 endpoints on the path: `https://$cluster_address/api/v1/`.

### Changes within a version

Backward compatible changes can be added to the Rubrik REST API as part of an update of the Rubrik CDM software on a Rubrik cluster or Rubrik Edge appliance. When this occurs, the version number remains the same and the URL segment that identifies the API version does not change. The [Changelog](#section/Changelog) that is provided in the docs for each version of the Rubrik REST API describes the changes that are made within that version.

Examples of backward compatible changes include:
* New API resource added
* New optional request parameters added to existing resources
* New properties added to existing responses

## Architecture

The Rubrik REST API architecture centers around logical entities called *resource objects*. Resource objects can be discrete entities or can contain a hierarchy of other, dependent, resource objects. A dependent, or child, resource object is referenced through the parent object.

For example, a virtualization environment is a resource object that contains virtual machines as child resource objects. The virtual machines, in turn, contain snapshots as child resource objects. To address this hierarchy, the path to a snapshot must include the parent objects.
As shown here those parent objects are the virtualization environment (`vmware`) and the virtual machine (`vm`): `/vmware/vm/snapshot`.

When a request addresses a specific resource object the path must include the  `id` of that specific object.

For example, to address a specific snapshot with the `id` value of `123-456` the path would be: `/vmware/vm/snapshot/123-456`.

The full URL for the request would be: `https://$cluster_address/api/v1/vmware/vm/snapshot/123-456`

The path in this example points to a specific snapshot with the `id` value of `123-456`.

The `id` is an opaque value which is generated by the Rubrik REST API. It does not follow any specific format.

### API base path

Each endpoint in the Rubrik REST API exists on one of two possible base paths:
* `https://$cluster_address/api/v1/`
* `https://$cluster_address/api/internal/`

The `/api/v1` base path provides the most commonly used endpoints. Rubrik considers these endpoints to be stable. Rubrik designs new releases of the Rubrik REST API to provide as much backward compatibility for these endpoints as possible. After an upgrade to a new version of the Rubrik CDM software, or to a new version of the Rubrik REST API, existing calls to endpoints on the `/api/v1` base path will normally continue to work.

The primary purpose of the `/api/internal` base path is to provide endpoints that are used by the Rubrik cluster. These endpoints are *internal* in the sense that the Rubrik CDM software uses them to provide a wide variety of cloud data management features. The evolution and improvement of the Rubrik CDM software can cause changes to these endpoints, removal of these endpoints, or addition of new `/api/internal` endpoints. Rubrik does not attempt to make the `/api/internal` endpoints backward compatible.

### Requests

To perform a task, the Rubrik REST API uses an HTTP request. Most requests perform one of these actions:
* Get an instance of an object from a list
* Add an instance of an object to a list
* Perform an operation on an object using the `id` of the object.

The following table describes the HTTP method and endpoint excerpts for some typical HTTP requests.

**Note:** The endpoints shown here would be appended to the base URL: `https://$cluster_address/vmware`.

| Method | Endpoint | Description |
| ------ | --- | ----------- |
| GET | `/vm/snapshot` | Returns a list of snapshots. |
| POST | `/vm/snapshot` | Creates a new snapshot resource object. |
| GET | `/vm/snapshot/{id}` | Returns information about the snapshot that is identified by `id`. |
| PATCH | `/vm/snapshot/mount/{id}` | Changes the power status of the mounted snapshot that is identified by `id`. |
| PUT | `/vcenter/{id}` | Provides a request body with a complete update of the properties of the vCenter Server object that is identified by `id`. |
| DELETE | `/vm/snapshot/{id}` | Deletes the snapshot that is identified by `id`. |
| GET | `/vm/{id}/missed_snapshot` | Returns the value of `missed_snapshot` for a snapshot that is identified by `id`. |
| POST | `/vm/snapshot/{id}/mount` | Performs a `mount` operation using the snapshot that is identified by `id`. |

#### Reserved ID alias

The alias `me` can be used with some endpoints as a shorthand replacement for the current, or local, value of that resource object type. For example, for the resource object type `/cluster` the alias `me` can be substituted for the `id` of the Rubrik cluster that is hosting the current session. For the resource object type `/session` the alias `me` can be substituted for the `id` of the current session.

In filters, use the alias `local` to refer to the Rubrik cluster that is hosting the current session.

#### Timestamp

The Rubrik REST API uses a timestamp to express all time values. The timestamp meets the standards of ISO 8601 and uses Coordinated Universal Time (UTC). Timestamps take the form: YYYY-MM-DDTHH:MM:SSZ, with YYYY for the four digit year value, MM for the two digit month value, DD for the two digit day of the month value, HH for the two digit hour value using a 24-hour clock, MM for the two digit minute value, and SS for the two digit second value. The T stands for time and the Z stands for Zulu time, another name for UTC.

**Example:** Timestamp in a JSON-formatted response body

```bash
{
  "createdTimestamp": "2016-02-11T18:02:24Z"
}
```

### Responses

The Rubrik REST API server responds to all requests by sending an HTTP response message. The response contains a status code and, when appropriate, a JSON object in the response body.

#### Status codes

The Rubrik REST API server includes an HTTP status code with every response. The following table describes the status codes supported by the Rubrik REST API server.

| Status code | Description |
| ----------- | ----------- |
| 200&nbsp;OK | Request succeeded. Not used for a DELETE request, or for a POST request that creates a resource. |
| 201&nbsp;Created | POST request to create a resource object succeeded. |
| 202&nbsp;Accepted | Request was successfully accepted for further processing. |
| 204&nbsp;No&nbsp;Content | Request succeeded and the response body is empty. Used for successful DELETE requests and for successful POST requests that do not return content. |
| 400&nbsp;Bad&nbsp;Request | Request failed because it was malformed. The request may be garbled, or it may be missing required parameters. |
| 401&nbsp;Unauthorized | The requestor has insufficient authorization to perform the requested action. |
| 403&nbsp;Forbidden | The requested action is blocked in the current context. |
| 404&nbsp;Not&nbsp;Found | The request references a resource object that is unknown to the Rubrik REST API server. |
| 415&nbsp;Unsupported Media Type | The HTTP header of the request specifies a media type that is not supported by the Rubrik REST API server. |
| 422&nbsp;Unprocessable Entity | The request specifies a correct media type and contains correct syntax but cannot be processed because of semantical errors. |
| 500&nbsp;Internal Server Error | The Rubrik REST API server encountered an unhandled error. |
| 503&nbsp;Service Unavailable Error | The Rubrik REST API server is temporarily unavailable. |

#### Response body

The JSON object included in a response body can contain members (`{string : value}`) and arrays (`[elements]`). Also, members and arrays can be nested within members and arrays.

When a response includes a resource object, the object always includes an `id` member in the form `id : $id`. The value of the `id` member is the unique ID of the resource.

When a response includes a large array (or list) of elements, the Rubrik REST API server encloses the array in a `ListResponse` structure. The `ListResponse` structure breaks a lengthy array into 'pages' of information to make the information easier to manage. Refer to 'Working with lists' for information about managing arrays with large numbers of values.

#### Status code 400 responses

The Rubrik REST API server sends a response containing the HTTP status code '400 Bad Request' when the server cannot process the request. This can be caused by malformed request syntax, invalid request message framing, or deceptive request routing.

The Rubrik REST API server returns a '400 Bad Request' when:
* Request does not conform with the format specified in OpenAPI definition files. For example, the request is missing required fields.
* Request is malformed. For example, the request has a malformed `id`.
* Request contains unsupported `enum` values.

#### Status code 422 responses

The Rubrik REST API server sends a response containing the HTTP status code '422 Unproccessable entity' when the request is syntactically correct but has semantic errors.

For example, when a request refers to an archival location that is not available. Although the request is properly formed, the Rubrik REST API server cannot act on the request because of the missing archival location, and the server returns '422 Unproccessable entity'.

The Rubrik REST API server also returns '422 Unproccessable entity' when invalid credentials are submitted during login. In that situation, the request may be correctly formed but the action cannot be completed by using the supplied values.

The following table describes the members of a '422 Unproccessable entity' response object.

| Member | Optional | Description |
| ------ | --- | ----------- |
| `type` | No | Error category. Possible values include: vcenter_error, oracle_error, rubrik_error |
| `message` | No | Plain text explanation of the cause of the error. |
| `code` | Yes | A short text string representing the cause of the error. |
| `param` | Yes | The request member that is the source of the error, such as `backup_window`. |

## Working with lists

When a request returns a large list of elements, the response array can be encapsulated within a `ListResponse` object. The `ListResponse` object is a pagination structure for the elements in the response array. The `ListResponse` object allows the response array to be addressed through smaller subsets of the array, or 'pages'.

To work with a `ListResponse` object, form a request that calls for a specific page of the results by specifying an offset value and a limit. The response includes the elements from the list starting at the offset value and continuing to the limit. When the limit is very large, or unspecified, the Rubrik REST API server returns as many elements as can be handled by the available memory.

The `ListResponse` object consists of the members described in the following table.

| Member | Optional | Description |
| ------ | --- | ----------- |
| `hasMore` | No | Indicates whether the array contains elements that are not provided by the current response. `true` if more elements are available for the original request and `false` if the last element is in the current response. |
| `data` | No | An array of the requested elements. Can be all or some of the elements requested. The elements can be members, arrays, or objects. |
| `total` | Yes | Total number of elements. |
| `links` | Yes | When `hasMore` is true, provides a request URL for the next page of results. When appropriate, also provides a request URL for the previous page of results. The request URLs provided by `links` retain the query parameters from the original request. For example, a request URL would retain a value specified by `limit` and a value specified by `search`. The exception to this is the value specified by `offset`, which the Rubrik REST API server uses to specify next and previous pages. |

Control the contents of a `ListResponse` object by including the following optional query parameters with the original request:
* `limit`
Defines the maximum number of a elements to include in the `data` array of the response. Available memory may prevent the return of all elements for very large `limit` values. When that occurs, the response includes `"hasMore": true`.
* `offset`
Index reference point to use when determining the elements to include in a response. Include the next element after the index number specified by `offset`. The default value is `0`, which means the list page that is provided in the response starts with first element in the list.

For example, if the total number of elements in response to a query are 100, and the request includes the following query parameters: `limit=10` and `offset=30`, then the response will include a list page with elements 31-40.

When the `ListResponse` object provides `next` and `prev`, use the URL specified by `next` to request the next page of elements or use the URL specified by `prev` to request the previous page of elements.

**Example:** Request for all snapshots from a Rubrik cluster

The initial request uses the query parameter `limit=1`.

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/vm/snapshot?limit=1"
```

The response returns the first element and `"hasMore": true` indicates that more than one snapshot meets the request.

```bash
{
  "hasMore": true,
  "status": "RUNNING",
  "data": [
    {
      "id": "1",
      "name": "Windows2012"
    }
  ],
  "links": {
    "next": {
      "href": "https://$cluster_address/api/v1/vmware/vm/snapshot?limit=1&offset=1"
    }
  }
}

```

To obtain the next element, the request is reissued with the query parameters set to: `limit=1&offset=1`. This could also be achieved by using the URL specified by `next` to request the next page.

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/vm/snapshot?limit=1&offset=1"
```

The response returns the second element in the array. Since there are elements before and after the element in the response, the `links` member contains both a `next` request URL and a `prev` request URL.

```bash
{
  "hasMore": false,
  "status": "RUNNING",
  "data": [
    {
      "id": "2",
      "name": "Windows2016"
    }
  ],
  "links": {
    "prev": {
       "href": "https://$cluster_address/api/v1/vmware/vm/snapshot?limit=1&offset=0",
      "rel": "prev"
    },
    "next": {
      "href": "https://$cluster_address/api/v1/vmware/vm/snapshot?limit=1&offset=2",
      "rel": "next"
    }
  }
}
```

## Asynchronous requests

The Rubrik REST API server uses asynchronous (async) API requests for tasks that take longer to run. By using async requests the Rubrik REST API server avoids blocking the requestor from performing other tasks while the async tasks run.

The response to an async request includes a task object in the response body. The following table describes the members of a task object.

| Member | Optional | Description |
| ------ | --- | ----------- |
| `id` | No |  ID assigned to the task.  |
| `status` | No |  Status of the task: 'RUNNING', 'SUCCEEDED', 'CANCELED', or 'FAILED'.   |
| `error` | No | Message describing reason for canceled or failed task, or 'None'. |
| `startTime` | Yes | Timestamp when the Rubrik cluster schedules the task. |
| `endTime` | Yes | Timestamp when the task ends. |
| `progress` | Yes | Percentage of the task that is complete. |
| `links` | No | Polling request array that provides information about how to poll the task. |

The following table describes the polling request array in the `links` member.

| Member | Optional | Description |
| ------ | --- | ----------- |
| `href` | No | URL to send requests to when polling the task. |
| `rel` | No | Provides a value of 'self' to indicate that the array refers to the resource represented by the parent JSON object. |

When an async task is completed the Rubrik REST API server adds a second array to the `links` member in the response that is sent. The second array provides information about how to request the result of the async task.

The following table describes the results array in the `links` member.

| Member | Optional | Description |
| ------ | --- | ----------- |
| `href` | No | URL to send a request to for the result of the task. |
| `rel` | No | Provides a value of 'result' to indicate that the array refers to the resource represented by the parent JSON object. |

**Example:** Starting a mount task and polling the task status

To initiate a mount operation, send a POST request to the mount endpoint. Include an object containing the details of the snapshot.

```bash
curl -X POST "https://$cluster_address/api/v1/vmware/vm/snapshot/$snapshot_id/mount"
```

The Rubrik REST API server returns a task object for the mount operation. The task object describes the task status as 'RUNNING' and provides the `links` member which contains the polling request array.

```bash
{
  "id": "$request_id",
  "status": "RUNNING",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vmware/vm/request/$request_id",
      "rel": "self"
    }
  ]
}
```

Using the information provided in the task object, send a GET request to poll the task status.

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/vm/request/$request_id"
```

```bash
{
  "id": "$request_id",
  "status": "RUNNING",
  "error": "None",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vmware/vm/request/$request_id",
      "rel": "self"
    }
  ]
}
```

Continue to poll the task object until the status changes to 'SUCCEEDED'.

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/vm/request/$request_id"
```

When the task object status changes to 'SUCCEEDED', the `links` member of the request includes a results array that provides a URL for the task results.

```bash
{
  "id": "$request_id",
  "status": "SUCCEEDED",
  "error": "None",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vmware/vm/request/$request_id",
      "rel": "self"
    },
    {
      "href": "https://$cluster_address/api/v1/vmware/vm/$mounted_vm_id",
      "rel": "result"
    }
  ]
}
```

# OpenAPI
The Rubrik REST API specification conforms to the OpenAPI 2.0 Specification. Tools that work with the OpenAPI 2.0 Specification can be used with the Rubrik REST API specification.

Development releases (pre-1.0) of the Rubrik REST API specification made reference to 'swagger'. The previous release of the OpenAPI 2.0 Specification was named the Swagger 1.2 Specification.

Download the Rubrik REST API specification for your tools. [Download](./api-docs)

## Rubrik REST API Explorer
The Rubrik REST API Explorer is a browser-based API client hosted by the Rubrik cluster. The Explorer has the Rubrik REST API specification built in. You can use the Explorer to try out Rubrik REST API calls and view the responses.

**IMPORTANT:** The Explorer interacts with the Rubrik cluster through the API calls you make. Use care when making calls that modify or delete configurations and data.

To access the Rubrik REST API Explorer, click: [Rubrik REST API Explorer](./playground/)

# Authentication

The Rubrik REST API server requires that all API calls use the HTTPS protocol.
To meet the security requirements of that protocol, the Rubrik REST API server
uses a self-signed certificate. A Certificate Authority cannot validate a
self-signed certificate. Configure client tools to ignore the certificate
validation error.

The Rubrik REST API server requires authentication and authorization for each
API call, except calls made to the following endpoints:

* [/cluster/me/version](#operation/getClusterVersion)
* [/cluster/me/api_version](#operation/getClusterApiVersion)

## Authentication session
Rubrik REST API server authenticates a session using either of the following
methods:

* BasicAuth
* Token

The Rubrik REST API server requires that you use an authorized username and
password for the Rubrik cluster. Usernames are managed by either the Rubrik
cluster or by your LDAP service.

### BasicAuth authentication

BasicAuth authentication uses the HTTP Basic Authentication method and requires
you to include the user credentials with each API call. Since each API call
made using the BasicAuth method is separately authenticated, you do not need
to manage the session state. You also do not need to log out of a session,
since this method does not create a session.

To use the BasicAuth method, provide the user credentials in the
'Authorization' header of an API call.

Use the string `Basic` followed by the Base64 encoding of `<username:password>`
as the user credentials, where `<username:password>` is the username for an
Admin account on the host Rubrik cluster, a colon, and the account password.

**Example:** Using curl to retrieve a session ID

This example uses the local Admin username 'admin' and the password 'pass' to
retrieve: a session ID, the Rubrik server software version, and the API
version.

The curl command shown here takes `<username:password>`, adds 'Basic ' to the
string, and Base64 encodes the result.

 The command includes the following arguments:
 * `-k` to bypass an alert about the self-signed certificate
 * `-u` to flag the `<username:password>` string
 * `-X` to flag the HTTP method `GET`

```bash
curl -k -u admin:pass -X GET "https://$cluster_address/api/v1/cluster/me"
```
The Rubrik REST API server returns the following response body.
```bash
{
  "id": "$cluster_id",
  "version": "3.1.0",
  "apiVersion": "1.0"
}
```

### Token authentication

Token authentication creates a token at the beginning of a session and then
uses that token to authenticate the API calls that are made during the session.
The token remains valid for the session - normally 30 minutes after the last
activity. You can close a session and invalidate the session token at any time
by making a DELETE call to `/session/{id}` where `{id}` is the session ID or
`me` for the current session ID.

**Example:** Token authentication in a session

This example uses the local Admin username 'admin' and the password 'pass'. To
open a session, first use the [BasicAuth](#section/BasicAuth) method to
authenticate a POST call to [/session](#operation/createSession).

```bash
curl -k -u admin:pass -X POST "https://$cluster_address/api/v1/session"
```

The response body includes an array with the session token.

```bash
{
  "id": "$session_id",
  "token": "$token_id",
  "userId": "$user_id"
}
```
For all subsequent calls during the session, include the token in the
Authorization header using the form: `Authorization: Bearer $token_id` where
`$token_id` is the value of the `token` member from the response array.

In this curl command, the GET request to
[/cluster](#operation/getPublicClusterInfo) uses `-H` to provide the
`Authorization: Bearer $token_id` value.

```bash
curl -k -H "Authorization: Bearer $token_id" -X GET
  "https://$cluster_address/api/v1/cluster/me"
```

The response body contains an array with the session ID, the Rubrik
cluster software version, and the API version.

```bash
{
  "id": "$cluster_id",
  "version": "3.1.0",
  "apiVersion": "1.0"
}
```

To close the session and invalidate the session token, make a DELETE call to
[/session](#operation/deleteSession) using the value of the `id` key or use
`me`. The alias `me` represents the session specified in the Authorization
header.

```bash
curl -k -H "Authorization: Bearer $token_id" -X DELETE
  "https://$cluster_address/api/v1/session/me"
```

## LDAP Authentication

The Rubrik cluster can be integrated with an LDAP service for
authentication. The API endpoints provide support for adding, updating and
deleting a specific LDAP service as well as list all of the
configured LDAP services.

### Add a new LDAP service
You can add a new LDAP service by making a POST call to
[/ldap_service](#operation/createLdapService). Adding a new LDAP
service requires information about the dynamic DNS name of the service, an
administrative user who is authorized to create a computer user account as
well as search for all the LDAP objects needed for use by the
Rubrik cluster. The Rubrik cluster resolves the dynamic DNS name using DNS
SRV records while honoring the advertised priority values.

**Example:** Adds a new LDAP service for use by the Rubrik cluster

This example adds an LDAP service that uses a dynamic DNS name
of *example.com*, with a bind administrator user of *Administrator* with a
password of *VerySafe*.

```bash
curl -k -u admin:pass -X POST -d '{"dynamicDnsName": "example.com",
  "bindUserName": "Administrator", "bindUserPassword": "VerySafe"}'
  'https://$cluster_address/api/v1/ldap_service'
```

The response body includes the ID associated with this LDAP service.

```bash
{
  "id": "499aeb71-f114-45a5-8456-91b9f6c45ddd",
  "domainType": "AD",
  "name": "example.com",
  "serviceAccount": "cluster10-c8D7A54$",
  "initialRefreshStatus": "ongoing"
}
```

The parameters associated with the LDAP service can be updated by
making a PATCH request to [/ldap_service/{id}](#operation/patchLdapService)
or a PUT request to [/ldap_service/{id}](#operation/putLdapService).

For example, you could add a prioritized list of authentication servers that
supercede the LDAP servers advertised for the dynamic DNS name. These
authentication servers can even be proxies that connect to the actual
LDAP servers.

**Example:** Add two new LDAP services

This example adds two LDAP servers called ad-proxy1.example.com
and ad-proxy2.cloud.example.com.

```bash
curl -k -u admin:pass -X PATCH -d '{ "authServers":
["ldap://ad-proxy1.example.com:389", "ldap://ad-proxy2.example.com:389"]}'
https://$cluster_address/api/v1/ldap_service/499aeb71-f114-45a5-8456-91b9f6c45ddd
```

The response body confirms a successful update.

```bash
{
  "id": "499aeb71-f114-45a5-8456-91b9f6c45ddd",
  "domainType": "AD",
  "name": "example.com",
  "initialRefreshStatus": "success"
}
```

### List configured LDAP services
You can get a listing of all the configured authentication domains using
a GET request to [/ldap_service](#operation/queryLdapService).

**Example:** Get the list of LDAP services.

```bash
curl -k -u admin:pass -X GET 'https://$cluster_address/api/v1/ldap_service'
```

The response body will contain the ID of all the authentication realms.

```bash
{
  "hasMore": false,
  "data": [
    {
      "id": "499aeb71-f114-45a5-8456-91b9f6c45ddd",
      "domainType": "AD",
      "name": "example.com",
      "serviceAccount": "cluster10-c8D7A54$",
      "initialRefreshStatus": "success"
    },
    {
      "id": "9fef084b-75f8-4c03-9efa-c73b55be5da8",
      "domainType": "LOCAL",
      "name": "local",
      "initialRefreshStatus": "success"
    }
  ],
  "total": 2
}

```

### Get information about a specific LDAP service

You can also get information about a specific LDAP service using
a GET request to [/ldap_service/{id}](#operation/getLdapService).

**Example:** Get information about a configured LDAP service.

```bash
curl -k -u admin:pass -X GET
  'https://$cluster_address/api/v1/ldap_service/499aeb71-f114-45a5-8456-91b9f6c45ddd'
```

The response body will contain information about the specified LDAP service.

```bash
{
  "id": "499aeb71-f114-45a5-8456-91b9f6c45ddd",
  "domainType": "AD",
  "name": "example.com",
  "serviceAccount": "cluster10-c8D7A54$",
  "initialRefreshStatus": "success"
}
```

### Delete an LDAP service
Any LDAP service that is configured to a Rubrik cluster can
be removed by issuing a DELETE request to
[/ldap_service/{id}](#operation/deleteLdapService).

**Example:** Remove an LDAP service

```bash
curl -k -u admin:pass -X DELETE
https://$cluster_address/api/v1/ldap_service/499aeb71-f114-45a5-8456-91b9f6c45ddd

```

## LDAP domain authentication
Scripts that automate calls to the Rubrik REST API endpoints must
include one of the available authentication methods: the HTTP Basic
method, the session method, or the API token method.

When the HTTP Basic method is used, and authentication is through
an LDAP domain, issues can arise when the Rubrik cluster is
configured with multiple LDAP domains. With this method, the
authentication server first attempts to authenticate through the
Rubrik cluster local domain. If that authentication attempt does not
succeed, the authentication server attempts authentication with each
available LDAP domain. If there are several LDAP domains configured,
then this process can slow down authentication. With many LDAP
domains, the authentication can potentially have too many failed
logins and result in an account lock-out.

Although using the [API token for authentication](#token-authentication) is recommended for
scripting, using the session authentication method will also avoid
these issues. The following python script provides an example of how
to use session authentication in a script. The method used in this
example can be duplicated in other scripting languages to suit your
scripting requirements.

```
try:
    sessionData = None

    session = requests.Session()
    session.auth = ($username, $password)
    session.verify = False
    session.headers = {'Content-type': 'application/json'}
    requests.adapters.HTTPAdapter()
    session.mount('https://', requests.adapters.HTTPAdapter(pool_connections=1))

    # First, login to create a Web Session Token
    loginData = {
       "initParams": {
           "organizationId": $org_id
        }
    }
    login = session.post(
    url='https://{}/api/internal/session/realm/{}'.format($RubrikCluster, $domain_display_name),
    data=json.dumps(loginData),
    timeout=300)
    assert login.ok and 'session' in login.json()
    sessionData = login.json()['session']
    session.headers.update({'Authorization': 'Bearer {}'.format(sessionData['token'])})
    session.auth = None

    # Issue the desired request
    cluster = session.get(url='https://{}/api/v1/cluster/me'.format($RubrikCluster))
    assert cluster.ok
    print('Session Auth: {}'.format(cluster.json()['name']))

finally:
    if sessionData:
        # Delete the web sessions explicitly. Rubrik CDM supports a
        # limited number of sessions per user. Once this limit is exceeded,
        # a random web session is discarded. This could log out the
        # user from the UI or cause another script to fail.

       logoutData = {
           "tokenIds": [
               sessionData['id']
            ],
            "userId": sessionData['userId']
        }
        logout = session.post(
            url='https://{}/api/internal/session/bulk_delete'.format($RubrikCluster),
            data=json.dumps(logoutData),
            timeout=300)
        assert logout.ok
```
Where:
    * `$username` is the name of the user account to be authenticated.
    * `$password` is the password associated with the username.
    * `$org_id` is the ID of the organization representing the tenant.
    * `$RubrikCluster` is the IPv4 address or resolvable hostname of
       the Rubrik cluster.
    * `$domain_display_name` is the name of the LDAP domain.

## SAML ID Provider Authentication

The Rubrik cluster can be integrated with a SAML ID Provider authentication
domain for authentication. The Rubrik REST API provides API endpoints for
managing and configuring the ID Provider authentication domain with
the Rubrik cluster. The Rubrik REST API also provides API endpoints for
creating the SAML authentication request
and handling the SAML authentication response.

### Add a new SAML ID Provider Authentication Domain
You can add a new ID Provider by making a POST call to
[/idp_auth_domain](#operation/createIdProviderAuthDomain).
Adding a new ID Provider requires the ID Provider metadata XML file
in base64 encoding, and a human-friendly name for the ID Provider.

**Example:** Adds a new ID Provider for use by the Rubrik cluster

```bash
curl -k -u admin:pass -X POST -d '{"name": "new-idp",
  "metadataXmlBase64": "1VZbj6LYFn438T9UPI+mi7slpqsnm2sBQgm..."}'
  'https://$cluster_address/api/v1/idp_auth_domain'
```

The response body includes the ID associated with this Active Directory.

```bash
{
  "id": "499aeb71-f114-45a5-8456-91b9f6c45ddd",
  "name": "new-idp",
  "entityId": "http://www.example.com/idp1",
  "ssoUrl": "https://www.example.com/idp1/sso",
  "signCert": "-----BEGIN CERTIFICATE-----\nMIIDrDCCApSg...\n-----END CERTIFICATE-----"
}
```

### Update an existing SAML ID Provider Authentication Domain
The name and metadata associated with the ID Provider can be updated by
making a PATCH request to
[/idp_auth_domain/{id}](#operation/updateIdProviderAuthDomain).
This API call can update either of the two parameters.

**Example:** Update name of the ID Provider

This example update the name of ID Provider "new-idp" as "updated-idp",
and update metadata with new ID Provider "http://www.example.com/idp2"

```bash
curl -k -u admin:pass -X PATCH -d '{ "name": "updated-idp",
  "metadataXmlBase64": "1VZbj6AQwTIr4deKspU/zyR9fxqPPebgQ..."}'
  'https://$cluster_address/api/v1/idp_auth_domain/499aeb71-f114-45a5-8456-91b9f6c45ddd'
```

The response body confirms a successful update.

```bash
{
  "id": "499aeb71-f114-45a5-8456-91b9f6c45ddd",
  "name": "updated-idp",
  "entityId": "http://www.example.com/idp2",
  "ssoUrl": "https://www.example.com/idp2/sso",
  "signCert": "-----BEGIN CERTIFICATE-----\nMIIDrDCCtchA...\n-----END CERTIFICATE-----"
}
```

### List configured ID Provider Authentication Domains
You can get a listing of all the configured ID Providers using
a GET request to [/idp_auth_domain](#operation/queryIdProviderAuthDomain).

**Example:** Get the list of ID Provider authentication domains.

```bash
curl -k -u admin:pass -X GET 'https://$cluster_address/api/v1/idp_auth_domain'
```

The response body contains the ID of all the ID provider
authentication domains.

```bash
{
  "hasMore": false,
  "data": [
    {
      "id": "499aeb71-f114-45a5-8456-91b9f6c45ddd",
      "name": "new-idp",
      "entityId": "http://www.example.com/idp1",
      "ssoUrl": "https://www.example.com/idp1/sso",
      "signCert": "-----BEGIN CERTIFICATE-----\nMIIDrDCCApSg...\n-----END CERTIFICATE-----"
    },
    {
      "id": "9fef084b-75f8-4c03-9efa-c73b55be5da8",
      "name": "another-idp",
      "entityId": "http://www.example.com/idp2",
      "ssoUrl": "https://www.example.com/idp2/sso",
      "signCert": "-----BEGIN CERTIFICATE-----\nMIIDrDCCtchA...\n-----END CERTIFICATE-----"
    }
  ],
  "total": 2
}

```

### Get information about a specific SAML ID Provider Authentication Domain
You can also get information about a specific ID Provider using
a GET request to [/idp_auth_domain/{id}](#operation/getIdProviderAuthDomain).

**Example:** Get information about a configured ID Provider.

```bash
curl -k -u admin:pass -X GET
  'https://$cluster_address/api/v1/idp_auth_domain/499aeb71-f114-45a5-8456-91b9f6c45ddd'
```

The response body contains information about this ID provider
authentication domain.

```bash
{
  "id": "499aeb71-f114-45a5-8456-91b9f6c45ddd",
  "name": "new-idp",
  "entityId": "http://www.example.com/idp1",
  "ssoUrl": "https://www.example.com/idp1/sso",
  "signCert": "-----BEGIN CERTIFICATE-----\nMIIDrDCCApSg...\n-----END CERTIFICATE-----"
}
```

### Delete an ID Provider Authentication Domain
Any ID Provider authentication domain that is configured
to a Rubrik cluster can be removed by issuing a DELETE request to
[/idp_auth_domain/{id}](#operation/deleteIdProviderAuthDomain).

**Example:** Remove the ID Provider authentication domain

```bash
curl -k -u admin:pass -X DELETE
https://$cluster_address/api/v1/idp_auth_domain/499aeb71-f114-45a5-8456-91b9f6c45ddd
```

### Download Rubrik SAML Metadata
Generate the Rubrik SAML service provider metadata file and
get the URL of the file by issuing a GET request to
[/saml/rubrik_metadata](#operation/configRubrikSamlMetadata).

**Example:**  Generate the Rubrik SAML metadata file without providing
an address for the host at the endpoint. The cluster chooses
a floating IP as the host address.

```bash
curl -k -u admin:pass -X POST -d '{}'
  'https://$cluster_address/api/v1/saml/rubrik_metadata'
```

**Example:** Generate the Rubrik SAML metadata file and specify
an address for the host at the endpoint.

```bash
curl -k -u admin:pass -X POST -d '{"hostAddress": "my.rubrik.saml.sp.com"}'
  'https://$cluster_address/api/v1/saml/rubrik_metadata'
```

### Check SAML SSO Status ###
Send a GET request to unauthenticated endpoint
[/saml/sso_status](#operation/getSamlSsoStatus) to check SAML SSO status.
The status is represented by an object that contains 1) a Boolean value that
determines whether or not SSO is enabled. 2) an optional String value that
indicates the name of the default IdP authentication domain for SSO login.
The default IdP will be configured when there is only one IdP configured in
the cluster. 3) a Boolean value, isGpsLoginEnabled, that determines whether
federated login is enabled.

**Example:** Check SAML SSO status

```bash
curl -k -X GET 'https://$cluster_address/api/v1/saml/sso_status'
```

### Make SAML Authentication Request
Send a POST request to [/saml/authn_request](#operation/makeSamlAuthnRequest)
to generate a signed SAML authentication request for the authentication domain
of a specified ID Provider. The request can include optional parameters to
specify a redirection resource path  and to specify that the request
is a test of the configuration for the ID Provider. The response provides
the data that is required for a SAML SSO authentication request for
the ID Provider. This is an unauthenticated API.

**Example:** Make the SAML authentication request for ID Provider my-idp-1

```bash
curl -k -X POST https://$cluster_address/api/v1/saml/authn_request/my-idp-1
  -d '{"redirectPath": "/web/bin/index.html#/welcome", "isForIdpTest": false}'
```

# Principal Management

## Searching for principals

To search for principals, send a GET request to the
[`/principal`](#operation/searchPrincipalsV1) endpoint.

This endpoint only returns principals from the organization to which the
currently logged-in user belongs.

All query parameters are optional. Each specified query parameters (besides the
sorting parameters) will further restrict the set of results.

**Example:**
```bash
curl -X GET "https://$cluster_address/api/v1/principal?
name=$name&
auth_domain_id=$auth_domain_id&
organization_id=$organization_id&
role_id=$role_id&
is_assigned_roles_or_is_local=$is_assigned_roles_or_is_local&
sort_by=$sort_by&
sort_order=$sort_order&
limit=$limit&
offset=$offset"
```

## Assigning roles to principals

To get a list of roles assigned to principals, send a GET request to the
[`/principal/role`](#operation/getRolesForPrincipals) endpoint.

**Example:**
```bash
curl -X GET -d "https://$cluster_address/api/v1/principal/role?
principals=$principal_ids"
```

To assign roles to a set of principals, send a POST request to the
[`/principal/role`](#operation/assignRolesToPrincipals)
endpoint.

**Example:**
```bash
curl -X POST -d '{
  "principals": "[$principal_id]",
  "roles": "[$role_id]"
}' "https://$cluster_address/api/v1/principal/role"
```

To revoke roles from a set of principals, send a POST request to the
[`/principal/role/bulk_revoke`](#operation/revokeRolesFromPrincipals)
endpoint.

**Example:**
```bash
curl -X POST -d '{
  "principals": "[$principal_id]",
  "roles": "[$role_id]"
}' "https://$cluster_address/api/v1/principal/role/bulk_revoke"
```

# Role Management

This section provides details on role management on CDM.

## Role Lifecycle Management

To create a new role, send a POST request to the
[`/role`](#operation/createRole) endpoint.

**Example:**
```bash
curl -X POST -d '{
  "name": "$role_name",
  "description": "$description"
}' "https://$cluster_address/api/v1/role"
```

To update a new role, send a PATCH request to the
[`/role/$role_id`](#operation/updateRole) endpoint.

**Example:**
```bash
curl -X PATCH -d '{
  "name": "$role_name",
  "description": "$description"
}' "https://$cluster_address/api/v1/role/$role_id"
```

To delete a role, send a DELETE request to the
[`/role/$role_id`](#operation/deleteRole) endpoint.

**Example:**
```bash
curl -X DELETE "https://$cluster_address/api/v1/role/$role_id"
```

To get role metadata for all roles in an organization,
send a GET request to the [`/role`](#operation/getRoles) endpoint.

All query parameters are optional. The getRoles endpoint uses the
organization ID of the current user session when the API call does
not specify an organization ID.

**Example:**
```bash
curl -X GET "https://$cluster_address/api/v1/role?
organization_id=$organization_id&
name=$role_name"
```

To get role metadata for a specific role, send a GET request to the
[`/role/$role_id`](#operation/getRole) endpoint.

**Example:**
```bash
curl -X GET "https://$cluster_address/api/v1/role/$role_id"
```


# Authorization

This section provides details on authorizing calls to the Rubrik CDM REST API.

## Clearing the authorization cache
Stale authorization information cached on the Rubrik CDM API server can cause
API call failures. Clearing the cache on the node targeted by an API call can
prevent this error.

To clear the cache, send a DELETE request to the
[`/authorization/cache`](#operation/deleteAuthzCache) endpoint.
```bash
curl -X DELETE "https://$cluster_address/api/v1/authorization/cache"
```

# Rubrik certificate management

This section explains how to manage certificates.

## Retrieving all imported certificates

To retrieve all imported certificates from the cluster, send a GET request to
the [`/certificate`](#operation/queryCertificates) endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/certificate"
```

The Rubrik REST API server returns an array of objects with the certId,
the name, the description, the certificate, whether the certificate has
a private key, the expiration time, and what objects are using the certificate.

```bash
{
  "certId": "$certId",
  "name": "$certName",
  "hasKey": true,
  "expiration": "$certExpiration",
  "usedBy": {}
}
```

## Importing a certificate

To import a certificate, send a POST request to the
[`/certificates`](#operation/importCertificate) endpoint.

```bash
curl -X POST -d '{
  "name": "certName",
  "pemFile": "$pemFile",
  "privateKey": "$privateKey",
  "description": "$description"
}' "https://$cluster_address/api/v1/certificate"
```

The Rubrik REST API server returns an object with the certId, the name,
the description, the certificate, whether the certificate has a private key,
the expiration time, and what objects are using the certificate.

```bash
{
  "certId": "$certId",
  "name": "$certName",
  "hasKey": true,
  "expiration": "$certExpiration",
  "usedBy": {}
}
```

## Retrieving a certificate

To retrieve a certificate, send a GET request to the
[`/certificate/{id}`](#operation/exportCertificate) endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/certificate/$cert_id"
```

The Rubrik REST API server returns an object with the certId, the name,
the description, the certificate, whether the certificate has a private key,
the expiration time, and what objects are using the certificate.

## Updating a certificate

To update a certificate, send a PATCH request to the
[`/certificate/{id}`](#operation/updateCertificate) endpoint.

```bash
curl -X POST -d '{
  "name": "certName",
  "pemFile": "$pemFile",
  "description": "$description"
}' "https://$cluster_address/api/v1/certificate/$cert_id"
```

The Rubrik REST API server returns an object with the certId, the name,
the description, the certificate, whether the certificate has a private key,
the expiration time, and what objects are using the certificate.

## Deleting a Certificate

To delete a certificate, send a DELETE request to the
[`/certificate/{id}`](#operation/deleteCertificate) endpoint.

```bash
curl -X DELETE "https://$cluster_address/api/v1/certificate/$cert_id"
```

## Generating a Certificate Signing Request (CSR)

To generate a CSR, send a POST request to the
[`/csr`](#operation/generateCsr) endpoint.

```bash
curl -X POST -d '{
  "hostnames": "$hostnames",
  "name": "$name",
  "organizations": "$organization",
  "organizationUnit": "$organizationUnit",
  "country": "$country",
  "state": "$state",
  "city": "$city"
}' "https://$cluster_address/api/v1/csr"
```
Hostnames and name are required. The Rubrik REST API server will respond with
the information provided in the POST request, in addition to the CSR to be
signed.

## Retrieving all outstanding Certificate Signing Requests

To retrieve all outstanding CSRs, send a GET request to the
[`/csr`](#operation/getAllCsrs) endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/csr"
```
The Rubrik REST API server returns an array of objects with the csrId,
the name, the CSR, and all information provided to generate the CSR.

## Deleting a Certificate Signing Request (CSR)

To delete a CSR, send a DELETE request to the
[`/csr/{id}`](#operation/deleteCsr) endpoint.

```bash
curl -X DELETE "https://$cluster_address/api/v1/csr/$csr_id"
```

## Managing Rubrik Backup Service secondary cluster certificates

The Rubrik Backup Service can be setup to allow registering with multiple Rubrik
clusters. See the Multicluster Rubrik Backup Service section of the Rubrik CDM
User Guide for details. Certificates for replication source or replication
target clusters are automatically added without calling the API in this section.
To mark a certificate to be added to agents, send a POST request to
[`/certificate/agent`](#operation/markAgentSecondaryCertificate).

```bash
curl -X POST \
  -d '{
    "cert_id": "$certId"
  }' \
  "https://$cluster_address/api/v1/certificate/agent"
```

To list all qualified certificates that have been
[imported to the cluster](#section/Rubrik-certificate-management/Importing-a-certificate),
send a GET request to
[`/certificate/agent`](#operation/queryAgentSecondaryCertificate).

```bash
curl -X GET "https://$cluster_address/api/v1/certificate/agent"
```

To unmark a certificate so that is is no longer added to agents, send a DELETE
request to
[`/certificate/agent/{id}`](#operation/unmarkAgentSecondaryCertificate).

```bash
curl -X DELETE "https://$cluster_address/api/v1/certificate/agent/$certId"
```

# Cluster configuration history
Rubrik REST API provides the `/config/history` endpoints for
administrators to audit the changes made to the configuration
parameters on a Rubrik cluster.

The ability to audit the configuration changes allows administrators to
track the information related to the configuration changes, such as the
old and new values of the configuration parameters, the user account
that made the changes, the time of each change, and the name of the
cluster or node where the changes were made.

The `/config/history` endpoints apply to the following
configuration parameters:
* Global or cluster wide configuration
* Local or node specific configuration

## Retrieving a summary of configuration changes
To retrieve a list of configuration updates based on specific parameters,
send a GET request to [`/config/history/list_updates`]
(#operation/queryConfigurationHistoryUpdates).

```bash
curl -X GET "https://$cluster_address/api/v1/config/history/list_updates"
```

To retrieve information for a specific configuration parameter
include the name of the parameter in the request. To retrieve
information for all configuration parameters that fit within the specified
filters, do not specify a parameter name.

```bash
curl -X GET "https://$cluster_address/api/v1/config/history/list_updates?name=$config_name"
```
The *Rubrik CDM User Guide* describes the parameters that can be
configured to filter the results of the `GET /config/history/list_updates`
endpoint.

The Rubrik REST API server responds with a list of JSON objects for the
configuration updates that meet all specified filters.

```bash
{
  "hasMore": true,
  "data": [
    {
      "nodeId": "string",
      "namespace": "string",
      "name": "string",
      "oldValue": "string",
      "newValue": "string",
      "apiUser": "string",
      "modifiedDateTime": "2021-02-26T17:21:54.520Z",
      "source": "string",
      "configChangeMetadata": "string"
    }
  ],
  "total": 0
}
```

## Retrieving a summary of configuration changes on a given date
To retrieve the values of configuration parameters on a specific date,
send a GET request to [`/config/history/ondate`]
(#operation/retrieveConfigurationValues).

Specify values for the `namespace` and `on_date` query parameters
that are required to send the GET request.

```bash
curl -X GET "https://$cluster_address/api/v1/config/history/ondate?namespace=$namespace&on_date=$timestamp"
```

To retrieve information for a specific configuration parameter
include the name of the parameter in the request, along with the
namespace and on_date parameters. To retrieve information for all
configuration parameters that fit within the specified filters, do not
specify a configuration parameter name.

The *Rubrik CDM User Guide* describes the parameters that can be
configured to filter the results of the `GET /config/history/ondate`
endpoint.

The Rubrik REST API server responds with a list of JSON objects for the
configuration updates that meet all specified filters.

```bash
{
  "hasMore": true,
  "data": [
    {
      "namespace": "string",
      "name": "string",
      "defaultValue": "string",
      "onDate": "2021-02-26T17:21:54.526Z",
      "valueOnDate": "string",
      "currentValue": "string",
      "nodeId": "string"
    }
  ],
  "total": 0
}
```

# Rubrik cluster management

This section explains how to retrieve basic information about a Rubrik cluster, as well as how to update the name of a cluster.

## Discovering Nodes
**Example:** Discovering unbootstrapped nodes on a network
The discover endpoint cannot function without multicast DNS. When multicast DNS is not available, manually specify hostname and IPv6 information about the Rubrik cluster to enable node discovery.
To input information about unbootstrapped nodes located on this network, send a POST request to the [`/cluster/{id}/$manual_discover`](#operation/manualDiscover) endpoint.

```bash
curl -X POST \
  -d '{"nodeInfo": [ {"hostname": "string", "ipv6": "string" } ] }' \
  "https://$cluster_address/api/v1/cluster/$manual_discover"
```

The [`/cluster/{id}/$manual_discover_ipv4`](#operation/manualDiscoverIpv4) endpoint also discovers nodes over an IPv4 network.

```bash
curl -X POST \
  -d '{"nodeInfo": [ {"hostname": "string", "ipv4": "string" } ] }' \
  "https://$cluster_address/api/v1/cluster/$manual_discover_ipv4"
```

## Retrieving Rubrik Cluster Information


**Example:** Retrieving publicly available information about a Rubrik cluster

To retrieve information about a Rubrik cluster, send a GET request to the [`/cluster/$cluster_id`](#operation/getPublicClusterInfo) endpoint. The Rubrik REST API server responds with the publicly available information for the specified Rubrik cluster.

```bash
curl -X GET "https://$cluster_address/api/v1/cluster/$cluster_id"
```

The Rubrik REST API server returns an array with the session ID, the Rubrik cluster software version, the API version, the Rubrik cluster name, and the Rubrik cluster time zone.

```bash
{
  "id": "$cluster_id",
  "version": "4.1.0",
  "apiVersion": "1.0",
  "name": "$cluster_name",
  "timezone": {
    "timezone": "$cluster_timezone"
  }
}
```
To retrieve the cluster certificate, send a GET request to the
[`/cluster/{id}/certificate`](#operation/getClusterCertificate) endpoint.
```bash
curl -X GET "https://$cluster_address/api/v1/cluster/$cluster_id/certificate"
```
To request only the current software version of the Rubrik cluster, send a GET request to the [`/cluster/$cluster_id/version`](#operation/getClusterVersion) endpoint.
```bash
curl -X GET "https://$cluster_address/api/v1/cluster/$cluster_id/version"
```

To request only the current REST API version running on the cluster, send a GET request to [`/cluster/$cluster_id/api_version`](#operation/getClusterApiVersion)

```bash
curl -X GET "https://$cluster_address/api/v1/cluster/$cluster_id/api_version"
```

To get the download link for Rubrik SNMP MIB file, send a GET request to [`/cluster/$cluster_id/snmp_mib_link`](#operation/getRubrikSnmpMibDownloadLink)
```bash
curl -X GET "https://$cluster_address/api/v1/cluster/$cluster_id/snmp_mib_link"
```

To get the download link for the SYSLOG-MSG-MIB file, send a GET request to [`/cluster/$cluster_id/syslog_msg_mib_link`](#operation/getSyslogMsgSnmpMibDownloadLink)
```bash
curl -X GET "https://$cluster_address/api/v1/cluster/$cluster_id/syslog_msg_mib_link"
```

To get the download link for the SYSLOG-TC-MIB file, send a GET request to [`/cluster/$cluster_id/syslog_tc_mib_link`](#operation/getSyslogTcSnmpMibDownloadLink)
```bash
curl -X GET "https://$cluster_address/api/v1/cluster/$cluster_id/syslog_tc_mib_link"
```

To retrieve the encryption at rest status of the cluster, send a GET request to the [`/cluster/$cluster_id/encryption`](#operation/getEncryptionStatus) endpoint.
```bash
curl -X GET "https://$cluster_address/api/v1/cluster/$cluster_id/security/encryption"
```

To retrieve the IDs of the nodes in the cluster, send a GET request to the ['/cluster/$cluster_id/node_id'](#operation/getClusterNodeIds) endpoint.
```bash
curl -X GET "https://$cluster_address/api/v1/cluster/$cluster_id/node_id"
```

## Hostnames for nodes in a Rubrik cluster

### Retrieving hostnames for nodes in a Rubrik cluster

To retrieve the hostnames of the nodes in a Rubrik cluster, send a GET request to the ['/cluster/$cluster_id/node_hostname'](#operation/getClusterNodeHostnames) endpoint.
```bash
curl -X GET "https://$cluster_address/api/v1/cluster/$cluster_id/node_hostname"
```
The Rubrik REST API server responds with an array of node ID to hostname mappings for all the nodes in the specified Rubrik cluster.
```bash
[
  {
    "id": "RVM000000000001",
    "hostname": "myhost01"
  },
  {
    "id": "RVM000000000002",
    "hostname": "myhost02"
  }
]
```

### Updating hostnames for nodes in a Rubrik cluster

To update the hostnames of the nodes in the Rubrik cluster, send a POST request to the ['/cluster/$cluster_id/node_hostname'](#operation/changeClusterNodeHostnames) endpoint.
```bash
curl -X POST \
  -d '[{ "id": "$id", "hostname":" "$hostname" }]' \
  "https://$cluster_address/api/v1/cluster/$cluster_id/node_hostname"
```
The Rubrik REST API server responds with an appropriate message.

## Changing the Rubrik cluster name or time zone

To change the name or the current time zone of a Rubrik cluster, send a PATCH request to the [`/cluster/$cluster_id`](#operation/updateCluster) endpoint.  Specify the new name as the value of `$cluster_name`, and specify the new time zone as the value of `$cluster_timezone`.

**Example:** Changing the name and the time zone of a Rubrik cluster

```bash
curl -X PATCH \
  -d '{ "clusterName": $cluster_name, "timezone": { "timezone": $cluster_timezone } }' \
  "https://$cluster_address/api/v1/cluster/$cluster_id"
```

The response provides the attributes of the specified Rubrik cluster object, including the new name, and the new time zone.

```bash
{
  "id": "$cluster_id",
  "version": "4.1.0",
  "apiVersion": "1.0",
  "name": "$cluster_name",
  "timezone": {
      "timezone": "$cluster_timezone"
  }
}
```

## Stage CDM software to the cluster.

Send a POST request to the [`/cluster/{id}/upgrade/stage_cdm_software`](#operation/stageCdmSoftware) endpoint.

```bash
curl -X POST \
  -d '{"version": "$version", "packageUrl": "$packageUrl", "md5sum": "$md5sum", "size": $size, "skipDownload": $skipDownload }' \
  "https://$cluster_address/api/v1/cluster/$cluster_id/upgrade/stage_cdm_software"
```

## Query asynchronous job status for upgrade related job

To query the job status details of an asynchronous job that is related to upgrades, issue a GET to [`/cluster/{id}/upgrade/request/{request_id}`](#operation/getAsyncRequestStatusForUpgrade).

```bash
curl -X GET "https://$cluster_address/api/v1/cluster/$cluster_id/upgrade/request/$request_id"
```

## Retrieve CDM version available for upgrade

Send a GET request to the [`/cluster/{id}/upgrade/available_version`](#operation/availableVersion) endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/cluster/upgrade/available_version"
```

## Retrieving Rubrik cluster prechecks status.
To start an on demand run of the periodic upgrade prechecks,
 send a POST request to the [`/cluster/{id}/upgrade/precheck_status`](#operation/runPeriodicUpgradePrechecks) endpoint.

```bash
curl -X POST "https://$cluster_address/api/v1/cluster/$cluster_id/upgrade/
precheck_status"
```

To retrieve the result of the latest run of periodic upgrade prechecks,
 send a GET request to the [`/cluster/{id}/upgrade/precheck_status`](#operation/getPeriodicUpgradePrechecksStatus) endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/cluster/$cluster_id/upgrade/
precheck_status"
```

The Rubrik REST API server returns a response which provides the list of
 failures along with start time and end time.
```bash
{
  "endTime": 1580385970715,
  "isOnDemand": false,
  "failureResults": [
    {
      "isUserRemediable": false,
      "errorMessage": "Sample error message",
      "precheckName": "Sample precheck name",
      "userRemediableAction": "",
      "userRemediableActionMessage": ""
    }
  ],
  "startTime": 1580385904457
}
```

## Checking if a Rubrik cluster has an existing set of Rubrik support portal credentials

Send a GET request to the [`/cluster/{id}/rubrik_support_portal_credentials`](#operation/hasRubrikSupportPortalCredentials) endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/cluster/$cluster_id/rubrik_support_portal_credentials"
```

## Updating Rubrik support portal credentials on a Rubrik cluster

Send a POST request to the [`/cluster/{id}/rubrik_support_portal_credentials`](#operation/updateRubrikSupportPortalCredentials) endpoint.

```bash
curl -X POST \
  -d '{"username" : "$username", "password": "$password"}' \
  "https://$cluster_address/api/v1/cluster/$cluster_id/rubrik_support_portal_credentials"
```

## Monitoring events on CDM

Send a GET request to the [`/cluster/me/upgrade/monitor_events`]
(#operation/monitorEvents) endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/cluster/me/upgrade/monitor_events"
```

# Passwords

## Setting password requirements

To set cluster-wide password requirements, send a PATCH request to
[`/cluster/{id}/security/password_requirements`]
(#operation/patchPasswordRequirements).
The following parameters are optional:
```bash
curl -X PATCH \
  -d '{
    "id": "$cluster_id",
    "minLength": "$min_length",
    "minUpperCase": "$min_upper_case",
    "minLowerCase": "$min_lower_case",
    "minNumerics": "$min_numerics",
    "minSpecial": "$min_special",
    "useZxcvbn": "$use_zxcvbn" }' \
  "https://$cluster_address/api/v1/cluster/{id}/security/password_requirements"
```

The Rubrik REST API server responds with a summary of the password requirements:
```bash
{
  "id": "$cluster_id",
  "minLength": "$min_length",
  "maxLength": "$max_length",
  "minUpperCase": "$min_upper_case",
  "minLowerCase": "$min_lower_case",
  "minNumerics": "$min_numerics",
  "minSpecial": "$min_special",
  "useZxcvbn": "$use_zxcvbn"
}
```

## Getting current password requirements

To retrieve the existing cluster-wide password requirments,
send a GET request to
[`/cluster/{id}/security/password_requirements`]
(#operation/queryPasswordRequirements)

```bash
curl -X GET \
  -d '{
    "id": "$cluster_id" }' \
  "https://$cluster_address/api/v1/cluster/{id}/security/password_requirements"

```

The Rubrik REST API server responds with a summary of the password requirements:
```bash
{
  "id": "$cluster_id",
  "minLength": "$min_length",
  "maxLength": "$max_length",
  "minUpperCase": "$min_upper_case",
  "minLowerCase": "$min_lower_case",
  "minNumerics": "$min_numerics",
  "minSpecial": "$min_special",
  "useZxcvbn": "$use_zxcvbn"
}
```

## Managing the Web Server Certificate

To retrieve the existing web server certificate signed by a CA, send
a GET request to:
[`/cluster/{id}/security/web_signed_cert`]
(#operation/getWebSignedCertificate)

```bash
curl -X GET \
  -d '{
    "id": "$cluster_id" }' \
  "https://$cluster_address/api/v1/cluster/{id}/security/web_signed_cert"
```
```bash
{
  "webServerConfiguredWithCASignedCertificate": true,
  "cert": {
    "certId": "string",
    "name": "string",
    "pemFile": "string",
    "hasKey": true,
    "expiration": "2020-03-30T19:32:08.221Z",
    "usedBy": "string",
    "description": "string"
  }
}
```

Set the web server certificate used by Rubrik for REST API
communications by sending a PUT request to the
[`/cluster/{id}/security/web_signed_cert`](#operation/setWebSignedCertificate)
endpoint:

```bash
curl -X PUT \
  -d '{
    "certificateId": "string"}' \
  "https://$cluster_address/api/v1/cluster/{id}/security/web_signed_cert"
```
```bash
{
  "id": "string",
  "status": "string",
  "progress": 0,
  "startTime": "2020-03-30T19:09:13.400Z",
  "endTime": "2020-03-30T19:09:13.400Z",
  "nodeId": "string",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "string",
      "rel": "string"
    }
  ]
}
```

To use the default, self-signed certificate, send a DELETE request to the
[`/cluster/{id}/security/web_signed_cert`](#operation/resetWebSignedCertificate)
endpoint.

```bash
curl -X DELETE \
  -d '{
    "id": "$cluster_id" }' \
  "https://$cluster_address/api/v1/cluster/{id}/security/web_signed_cert"
```
```bash
{
  "id": "string",
  "status": "string",
  "progress": 0,
  "startTime": "2020-03-30T19:31:13.024Z",
  "endTime": "2020-03-30T19:31:13.025Z",
  "nodeId": "string",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "string",
      "rel": "string"
    }
  ]
}
```

## Managing Truststores

To retrieve the existing truststore configuration, send
a GET request to:
[`/cluster/{id}/security/truststore`]
(#operation/getTruststores)

```bash
curl -X GET \
  "https://$cluster_address/api/v1/cluster/{id}/security/truststore"
```
```bash
{
  "hasMore": false
  "data": [
    {
      "truststoreType": "TruststoreType",
      "certificates": [
        {
          "certId": "string",
          "name": "string",
          "pemFile": "string",
          "hasKey": true,
          "expiration": "2020-03-30T19:32:08.221Z",
          "usedBy": "string",
          "description": "string"
        }
      ]
    }
  ]
}
```

To set the certificates for one or more of the truststores used by Rubrik,
send a PATCH request to the
[`/cluster/{id}/security/truststore`](#operation/setTruststoreCertificate)
endpoint:

```bash
curl -X PATCH \
  -d '{
      "truststorePayload": [ \
        {"truststoreType": "TruststoreType", certIds: ["string", "string"]} \
      ]}' \
  "https://$cluster_address/api/v1/cluster/{id}/security/truststore"
```
```bash
OK
```

To clear the certificates for one or more of the truststores used by Rubrik,
send a DELETE request to the
[`/cluster/{id}/security/truststore`](#operation/unsetTruststoreCertificate)
endpoint:

```bash
curl -X DELETE \
  "https://$cluster_address/api/v1/cluster/{id}/security/truststore?truststores=$truststore1,$truststore2"
```
```bash
OK
```

## Updating CORS support configuration

To update the CORS support configuration for a web server, send a PATCH request
to [`/cluster/{id}/security/cors`](#operation/updateCorsConfiguration).
```bash
curl -X PATCH \
  -d '{
    "isEnabled": "$is_enabled",
    "allowedOrigins": "$allowed_origins",
    "allowedHEaders": "$allowed_headers" }' \
  "https://$cluster_address/api/v1/cluster/{id}/security/cors"
```

## Getting CORS support configuration

Retrieve the current CORS support configuration with a GET request to:
[`/cluster/{id}/security/cors`](#operation/getCorsConfiguration).
```bash
curl -X GET \
  "https://$cluster_address/api/v1/cluster/{id}/security/cors"
```

## Getting FIPS enablement status

Retrieve the current FIPS enablement status with a GET request to:
[`/cluster/{id}/security/fips`](#operation/getFips).
```bash
curl -X GET \
  "https://$cluster_address/api/v1/cluster/{id}/security/fips"
```

## Updating FIPS enablement

To update the FIPS enablement for a cluster, send a PATCH request
to [`/cluster/{id}/security/fips`](#operation/updateFips).
```bash
curl -X PATCH \
  -d '{
    "isEnabledInFlight": "$is_enabled_in_flight" }' \
  "https://$cluster_address/api/v1/cluster/{id}/security/fips"
```

## Managing KMIP Servers
To configure a new KMIP server integration, send a PUT request to the
[`/cluster/{id}/security/kmip/server`](#operation/addKmipServer) endpoint.
```bash
curl -X PUT \
  -d '{
    "serverAddress": "string",
    "serverCertificateId": "string",
    "serverPort": 0}' \
  "https://$cluster_address/api/v1/cluster/{id}/security/kmip/server"

```
```bash
{
  "id": "string",
  "status": "string",
  "progress": 0,
  "startTime": "2020-03-31T22:10:40.912Z",
  "endTime": "2020-03-31T22:10:40.912Z",
  "nodeId": "string",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "string",
      "rel": "string"
    }
  ]
}
```

For information about a configured KMIP server, send a GET request to the
[`/cluster/{id}/security/kmip/server`](#operation/getKmipServer) endpoint:
```bash
curl -X GET \
  "https://$cluster_address/api/v1/cluster/{id}/security/kmip/server?server_address=$address"
```
```bash
[
  {
    "serverAddress": "string",
    "serverCertificateId": "string",
    "serverPort": 0
  }
]
```
To delete an existing KMIP server integration, send a DELETE
request to [`/cluster/{id}/security/kmip/server`](#operation/deleteKmipServer):
```bash
curl -X DELETE \
"https://$cluster_address/api/v1/cluster/{id}/security/kmip/server?server_address=$address"
```
```bash
{
  "id": "string",
  "status": "string",
  "progress": 0,
  "startTime": "2020-03-31T22:15:26.693Z",
  "endTime": "2020-03-31T22:15:26.693Z",
  "nodeId": "string",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "string",
      "rel": "string"
    }
  ]
}

```

## Managing the KMIP Client
To configure the KMIP client, send a PUT request to
[`/cluster/{id}/security/kmip/client`](#operation/setKmipClient)
```bash
curl -X PUT \
  -d '{
    "username": "string",
    "password": "string",
    "clientCertificateId": "string"
    }' \
  "https://$cluster_address/api/v1/cluster/{id}/security/kmip/client"
```
```bash

```
To retrieve information about the confiugred KMIP client, send a GET request to
[`/cluster/{id}/security/kmip/client`](#operation/getKmipClient)
```bash
curl -X GET \
  "https://$cluster_address/api/v1/cluster/{id}/security/kmip/client"
```
```bash
{
  "username": "string",
  "clientCertificateId": "string",
  "isPasswordSet": true
}
```

## Manage the 2-Step Verification Global Setting
### Retrieving the 2-Step Verification global setting
To retrieve the 2-Step Verification global setting for
a specific Rubrik cluster, send a GET request to
[`/cluster/{id}/security/totp/setting`](#operation/getTotpGlobalSetting).
```bash
curl -X GET \
  "https://$cluster_address/api/v1/cluster/{id}/security/totp/setting"
```
The Rubrik REST API server responds with the 2-Step Verification setting for
the specified Rubrik cluster.
```bash
{
  "isEnforced": true
}
```

### Updating the 2-Step Verification global setting
To update the 2-Step Verification global setting for
a specific Rubrik cluster, send a PUT request to
[`/cluster/{id}/security/totp/setting`](#operation/updateTotpGlobalSetting).
```bash
curl -X PUT \
  -d '{"isEnforced": true}'
  "https://$cluster_address/api/v1/cluster/{id}/security/totp/setting"
```
The Rubrik REST API server responds with the updated 2-Step Verification 
setting for the specified Rubrik cluster.
```bash
{
  "isEnforced": true
}
```

# Event

## Get latest events and event series info for event series
Send a GET request to [`/event/latest`](#operation/queryLatestEventsV1)

```bash
curl -X GET "https://$cluster_address/api/v1/event/latest"
```

## Get information for all events
Send a GET request to [`/event`](#operation/queryEventV1)

```bash
curl -X GET "https://$cluster_address/api/v1/event"
```

## Get all events and relevant information associated with an event series
Send a GET request to [`/event_series/{id}`](#operation/queryEventSeriesByIdV1)

```bash
curl -X GET "https://$cluster_address/api/v1/event_series/{id}"
```

## Get download link of CSV file containing summary of events
Send a GET request to
[`/event/csv_download_link`](#operation/getEventsCsvDownloadLink)

```bash
curl -X GET "https://$cluster_address/api/v1//event/csv_download_link"
```

# SLA Domains

Rubrik clusters provide automated data management and protection through SLA Domains.
An SLA Domain defines the data management and protection policies for their assigned snappables (virtual machines, file systems, and applications).

To provide policy based management and protection of a snappable, add the snappable to an SLA Domain, or to multiple SLA Domains.

## Retrieving SLA Domains

Before assigning snappables to SLA Domains, get a list of the SLA Domains that exist on a Rubrik cluster. For a new Rubrik cluster, the list shows only the default SLA Domains. When custom SLA Domains are added to the Rubrik cluster, the list is modified to include those SLA Domains.

**Example:** Retrieving SLA Domains from a Rubrik cluster

Send a GET request to [`/sla_domain`](#operation/querySlaDomain).

```bash
curl -X GET "https://$cluster_address/api/v1/sla_domain"
```

The Rubrik REST API server returns a `ListResponse` object of all SLA Domains.
At a minimum, the `ListResponse` object includes the default SLA Domains: Gold, Silver, and Bronze.

```bash
{
  "data": [
    {
      "id": "$gold_sla_id",
      "name": "Gold"
    },
    {
      "id": "$silver_sla_id",
      "name": "Silver"
    },
    {
      "id": "$bronze_sla_id",
      "name": "Bronze"
    }
  ],
  "hasMore": false,
  "total": 3
}
```

To obtain more details about a specific SLA domain send a GET request with the `id` of one of the SLA Domains to the `/sla_domain/{id}` endpoint:  [`/sla_domain/{id}`](#operation/getSlaDomain)

```bash
curl -X GET "https://$cluster_address/api/v1/sla_domain/$bronze_sla_id"
```
The Rubrik REST API server responds with the details of the specified SLA Domain.

```bash
{
  "id": "$bronze_sla_id",
  "primaryClusterId": "$cluster_id",
  "name": "Bronze",
  "frequencies": [
    {
      "timeUnit": "Daily",
      "frequency": 1,
      "retention": 32
    },
    {
      "timeUnit": "Monthly",
      "frequency": 1,
      "retention": 12
    },
    {
      "timeUnit": "Yearly",
      "frequency": 1,
      "retention": 2
    }
  ],
  "allowedBackupWindows": [],
  "firstFullAllowedBackupWindows": [],
  "archivalSpecs": [],
  "replicationSpecs": [
    {
      "locationId": "$repl_location_id",
      "retentionLimit": 0
    }
  ],
  "numDbs": 0,
  "numFilesets": 7,
  "numLinuxHosts": 3,
  "numWindowsHosts": 2,
  "numVms": 1,
  "isDefault": false,
  "uiColor": "#cc8366"
}
```

## Working with SLA Domains

To work with an SLA Domain, obtain the `id` of that SLA Domain. As described in [Retrieving SLA Domains](#section/SLA-Domains/Retrieving-SLA-Domains), start by sending a GET request to [`/sla_domain`](#operation/querySlaDomain).

The Rubrik REST API server responds with a `ListResponse` object that contains all of the SLA Domains on the specfied Rubrik cluster. From that list object, find the data array element that has the `name` value of the selected SLA Domain. In the same array element as the `name` value, note the value of the `id` string.

## Creating SLA Domains

To create an SLA domain send a POST request to [`/sla_domain`](#operation/createSlaDomain). Include the attributes for the SLA Domain in the request body.

The following table describes the required and optional attributes to include in the request body when creating an SLA Domain.

| Attribute | Req'd | JSON Type | Description |
| ------ | --- | ----- | ----------- |
| `name` | Yes | String | Name of the SLA Domain.  |
| `frequencies` | Yes | Array | Each member defines a policy by specifying: `timeUnit`, `frequency`, and `retention`. Requires at least one member in the array.  |
| `allowedBackupWindows` | Yes | Array | Each member defines a backup window using values for `startTimeAttributes` and `durationInHours`. The time specified in `startTimeAttributes` uses the Rubrik cluster time zone. To specify multiple backup windows, add an array member for each window. To create an SLA Domain without a backup window, specify a null array value: `[]`.  |
| `firstFullAllowedBackupWindows` | Yes | Array | Each member defines a period when first full backups are allowed by specifying: `startTimeAttributes` and `durationInHours`. Several first full backup windows can be specified by adding an array member for each one. Create an SLA Domain without a first full backup window by specifying a null array value: `[]`.  |
| `localRetentionLimit` | No | String | Specify an integer value to set the number of days to retain a local copy of a snapshot. When an archival location is specified, specify `0` to enable Instant Archiving. |
| `archivalSpecs` | No | Array | Defines the archival location for the SLA Domain by specifying: `locationId` and `archivalThreshold`. Currently limited to one array member. |
| `replicationSpecs` | No | Array | Defines the replication location for the SLA Domain by specifying: `locationId` and `retentionLimit`. Currently limited to one array member. |

**Example:** Creating an SLA Domain for daily backups

Create an SLA Domain that takes a backup once a day and retains the backup for seven days. Do not set a backup window or a first full backup window. Do not include archival or replication.

```bash
curl -X POST \
  -d '{
  "name": "Daily SLA",
  "frequencies": [
    {
      "timeUnit": "Day",
      "frequency": 1,
      "retention": 7
    }
  ],
  "allowedBackupWindows": [],
  "firstFullAllowedBackupWindows": [] }' \
  "https://$cluster_address/api/v1/sla_domain"
```
The response confirms the attributes of the SLA Domain and provides the `id` of the new SLA Domain.

```bash
{
  "id": "$sla_id",
  "name": "Daily SLA",
  "frequencies": [
    {
      "timeUnit": "Day",
      "frequency": 1,
      "retention": 7
    }
  ],
  "allowedBackupWindows": [],
  "firstFullAllowedBackupWindows": []
}
```
## Modifying SLA Domains

To modify the attributes of an SLA domain send a PUT request to [`/sla_domain/{id}`](#operation/updateSlaDomain). Include in the request body the new attributes.

**Example:** Modifying the daily backup SLA Domain

Change the SLA Domain that was created in [Creating SLA Domains](#section/SLA-Domains/Creating-SLA-Domains) to increase the retention to 14 days.

```bash
curl -X PUT \
  -d '{
  "name": "Daily SLA",
  "frequencies": [
    {
      "timeUnit": "Day",
      "frequency": 1,
      "retention": 14
    }
  ],
  "allowedBackupWindows": [],
  "firstFullAllowedBackupWindows": [] }' \
  "https://$cluster_address/api/v1/sla_domain/$sla_id"
```
The response confirms the new attribute.

```bash
{
  "id": "$sla_id",
  "name": "Daily SLA",
  "frequencies": [
    {
      "timeUnit": "Day",
      "frequency": 1,
      "retention": 14
    }
  ],
  "allowedBackupWindows": [],
  "firstFullAllowedBackupWindows": []
}
```
## Patching SLA Domains

To patch the attributes of an SLA domain, send a PATCH request to
[`/sla_domain/{id}`](#operation/patchSlaDomain). Include in the request body
only the attributes that needs to be patched.

**Example:** Patching the daily backup SLA Domain

Patch the SLA Domain that was created in [Creating SLA Domains]
(#section/SLA-Domains/Creating-SLA-Domains) to change the archival
specifications.

```bash
curl -X PATCH \
  -d '{
  "archivalSpecs": [
    {
        "locationId": "some-valid-archived-location-id",
        "archivalThreshold": 14
    }
  ]}' \
  "https://$cluster_address/api/v1/sla_domain/$sla_id"
```
The response confirms the new attribute and also includes the other
attributes that were not changed.

```bash
{
  "id": "$sla_id",
  "name": "Daily SLA",
  "frequencies": [
    {
      "timeUnit": "Day",
      "frequency": 1,
      "retention": 7
    }
  ],
  "archivalSpecs": [
    {
      "locationId": "some-valid-archived-location-id",
      "archivalThreshold": 14
    }
  ],
  "allowedBackupWindows": [],
  "firstFullAllowedBackupWindows": []
}
```
## Deleting SLA Domains

To delete an SLA domain send a DELETE request to [`/sla_domain/{id}`](#operation/deleteSlaDomain).

**Example:** Deleting an SLA Domain

Delete an SLA Domain with the `id` of `$sla_id`.

```bash
curl -X DELETE "https://$cluster_address/api/v1/sla_domain/$sla_id"
```
The Rubrik REST API server responds with HTTP response code 204. This indicates the request succeeded and the response body is empty.

## Inherited protection

The Rubrik REST API uses the reserved value `INHERIT` with the `configuredSlaDomainId` string to identify a snappable that derives its protection policy from a parent object. Examples of this:
* VMware virtual machine inherits from vCenter Server
* SQL Server database inherits from SQL Server instance

Every snappable that can be protected through an SLA Domain is represented by an object that has a `configuredSlaDomainId` attribute and an `effectiveSlaDomainId` attribute. The `configuredSlaDomainId` attribute contains either the value of a direct SLA Domain assignment or the reserved value `INHERIT`.

The `effectiveSlaDomainId` attribute contains the value of the SLA Domain setting that the Rubrik cluster actually applies to the snappable. When the value of the `configuredSlaDomainId` attribute is `INHERIT`, the value of the `effectiveSlaDomainId` attribute is derived from a parent object of the snappable. In all other cases, the value of the `effectiveSlaDomainId` attribute is the same as the value of the `configuredSlaDomainId` attribute.


## SLA Domain assignments

To assign a snappable to an SLA Domain, use the endpoint that is provided for that type of snappable.
* VMware virtual machines  
Send a PATCH request to  [`/vmware/vm/{id}`](#operation/updateVm). [VMware virtual machines](#section/VMware-virtual-machines) provides more information about this.
* Linux or Windows filesets  
Send a PATCH request to  [`/fileset/{id}`](#operation/updateFileset). [Filesets](#section/Filesets) provides more information about this.
* SQL Server databases  
Send a PATCH request to  [`/mssql/db/{id}`](#operation/updateMssqlDb). [SQL Server databases](#section/SQL-Server-databases) provides more information about this.

## Assigning SLA Domain to downloaded snapshots

To assign an SLA Domain to a list of snapshots at their downloaded locations,
send a POST request to the [`/sla_domain/assign_to_downloaded_snapshots`]
(#operation/assignSlaToDownloadedSnapshots) endpoint.

**Example:** Assigning an SLA Domain with ID $slaId to list of snapshots -
             $s1Id, $s2Id of object $snappableId

```bash
curl -X POST \
  -d '{
   "slaDomainId": $slaId
   "objectId": $snappableId
   "snapshotIds": [$s1Id, $s2Id]}' \
   "https://$cluster_address/api/v1/sla_domain/assign_to_downloaded_snapshots"
```

```bash
{
  "responses": [
    {
      "id": "string",
      "status": "string",
      "progress": 0,
      "startTime": "2019-10-29T22:11:35.256Z",
      "endTime": "2019-10-29T22:11:35.256Z",
      "nodeId": "string",
      "error": {
        "message": "string"
      },
      "links": [
        {
          "href": "string",
          "rel": "string"
        }
      ]
    }
  ]
}
```

The Rubrik REST API server responds with HTTP response code 200 and the
response body containing the details of the async request.

# Virtual machines

The Rubrik cluster protects virtual machines running in a VMware vSphere
environment through the VADP APIs. The Rubrik cluster also works with
the Rubrik Backup Service running on the virtual machine to provide:

* Optimal performance when restoring files and folders to the virtual machine
* Application consistent snapshots of a Windows virtual machine


## vCenter servers

A Rubrik cluster normally protects and manages virtual machines through the vCenter Server that administers those virtual machines. After a vCenter server is added to a Rubrik cluster, the Rubrik cluster automatically discovers the virtual machines that are administered by that vCenter server.

### Retrieving vCenter Servers

Request a list of the vCenter servers that are registered with a Rubrik cluster by sending a GET request to  [`/vmware/vcenter`](#operation/queryVcenter).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/vmware/vcenter"
```

The Rubrik REST API server responds with the first page of a `ListResponse` object.

```bash
{
  "hasMore": false,
  "data": [
    {
      "id": "$vcenter_id0",
      "hostname": "$vcenter_address0",
      "username": "$vcenter_admin0",
      "configuredSlaDomainId": "INHERIT",
      "primaryClusterId": "$cluster_id",
      "caCerts": "$ca_certs0"
    },
    {
      "id": "$vcenter_id1",
      "hostname": "$vcenter_address1",
      "username": "$vcenter_admin1",
      "configuredSlaDomainId": "INHERIT",
      "primaryClusterId": "$cluster_id",
      "caCerts": "$ca_certs1"
    }
  ],
  "total": 2
}
```
Depending on the number of registered vCenter Servers, all of the entries on the list may not be included on the first page. [Working with lists](#section/Overview/Working-with-lists) describes how to work with a ListResponse object to obtain additional pages of the list.


### Adding a vCenter server

To add a vCenter server, send a POST request to [`/vmware/vcenter`](#operation/createVcenter).
Include in the body of the request the address of the vCenter server and credentials for a user account (`username`) that has the required permissions. The Rubrik User Guide provides details about creating an account with the required permissions.

```bash
curl -X POST \
  -d '{
    "hostname": "$vcenter_address",
    "username": "$vcenter_admin",
    "password": "$vcenter_password" }' \
  "https://$cluster_address/api/v1/vmware/vcenter"
```

The Rubrik REST API server initiates the asynchronous request task and responds with a task object.

```bash
{
  "id": "$request_id",
  "status": "RUNNING",
  "error": "None",
  "progress": "$request_progress"
  "links": [
    {
      href: "https://$cluster_address/api/v1/vmware/vcenter/request/$request_id",
      rel: "self"
    }
  ]
}
```

Using the information provided in the task object, send a GET request to the [`/vmware/vcenter/request/{id}`](#operation/getVcenterAsyncRequestStatus) endpoint to poll the task status. When the value of `status` in the task object is `SUCCEEDED`, the task finished successfully.

### Retrieve vCenter Server details
Get the details for a vCenter Server that is registered with a Rubrik cluster by sending a GET request to [`/vmware/vcenter/{id}`](#operation/getVcenter).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/vmware/vcenter/{id}"
```

The Rubrik REST API server responds with the details of the specified vCenter Server object.

```bash
{
  "id": "$id",
  "hostname": "$vcenter_address0",
  "username": "$vcenter_admin0",
  "configuredSlaDomainId": "INHERIT",
  "primaryClusterId": "$cluster_id"
}
```

### Modifying a vCenter Server entry

To change the information that a Rubrik cluster stores for a vCenter Server, send a PUT request to [`/vmware/vcenter/{id}`](#operation/updateVcenter). All of the members of the `VcenterConfig` object must be in the PUT request. Using the new values, include in the body of the PUT request each member (`{string : value}`) of the `VcenterConfig` object:
* `"hostname": "$vcenter_address"`
* `"username": "$vcenter_admin"`
* `"password": "$vcenter_password"`

To change the configured SLA that is configured for a vCenter Server or to change CA certificates for the vCenter, send a PATCH request to[`/vmware/vcenter/{id}`](#operation/patchVcenter).

```bash
curl -X PUT \
  -d '{
    "hostname": "$vcenter_address",
    "username": "$vcenter_admin",
    "password": "$vcenter_password" }' \
  "https://$cluster_address/api/v1/vmware/vcenter/$vcenter_id"
```

The Rubrik REST API server sends a response, with the updated details of the vCenter Server entry in the response body.

```bash
{
  "id": "$vcenter_id",
  "hostname": "$vcenter_address",
  "username": "$vcenter_admin",
  "configuredSlaDomainId": "INHERIT",
  "primaryClusterId": "$cluster_id",
  "caCerts": "$ca_certs"
}
```
### Removing a vCenter Server entry

To remove a vCenter Server entry from a Rubrik cluster, first unmount any Live Mount and Instant Recovery virtual machines for the vCenter Server. Then send a DELETE request to [`/vmware/vcenter/{id}`](#operation/deleteVcenter).

```bash
curl -X DELETE \
  "https://$cluster_address/api/v1/vmware/vcenter/$vcenter_id"
```
The Rubrik REST API server initiates the asynchronous delete task and responds with a task object.

```bash
{
    "id": "$request_id",
    "status": "RUNNING",
    "error": "None",
    "progress": 0,
    "startTime": "$start_timestamp",
    "endTime": "$end_timestamp",
    "links": [
      {
        "href": "https://$cluster_address/api/v1/vmware/vcenter/request/$request_id",
        "rel": "self"
      }
    ]
  }
```
Using the information provided in the task object, send a GET request to poll the task status. When the value of `status` in the task object is `SUCCEEDED`, the removal of the vCenter Server object finished successfully.

### Force refresh of virtual machine on a vCenter
Force a refresh of the metadata for a single virtual machine by sending a POST
request to [`/vmware/vcenter/{id}`](#operation/createRefreshVmV1).

```bash
curl -X POST \
  -d '{
    "vmMoid": "$vm_moid" }' \
  "https://$cluster_address/api/v1/vmware/vcenter/{id}/refresh_vm"
```

The Rubrik REST API server responds with a 204 response.



### Metadata refresh

The Rubrik cluster regularly refreshes the metadata of the registered vCenter Servers. As part of a refresh operation, the Rubrik cluster discovers any changes or additions to the virtual machines that are administered by the vCenter Servers. Instead of waiting for a regular refresh, a metadata refresh can be manually initiated by sending a POST request to [`/vmware/vm/refresh`](#operation/createRefresh), using the Rubrik cluster ID (`$cluster_address`) and the vCenter Server ID (`$vcenter_id`).

```bash
curl -X POST \
  "https://$cluster_address/api/v1/vmware/vcenter/$vcenter_id/refresh"
```

The Rubrik REST API server initiates the asynchronous request task and responds with a task object.

```bash
{
  "id": "$request_id",
  "status": "RUNNING",
  "error": "None",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vmware/vcenter/request/$request_id",
      "rel": "self"
    }
  ]
}
```

Using the information provided in the task object, send a GET request to poll the task status. When the value of `status` in the task object is `SUCCEEDED`, the metadata refresh completed successfully.

## ESXi hypervisors

Retrieve a list of all available ESXi hypervisors in the vSphere environment by sending a GET request to [`/vmware/host`](#operation/queryVmwareHost).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/vmware/host?primary_cluster_id=$cluster_id"
```
The value of `primary_cluster_id` is the `id` of a Rubrik cluster. Use `local` to retrieve a list for the Rubrik cluster that is hosting the current session.

The Rubrik REST API server responds with the first page of a `ListResponse` object.

**Note:** To shorten the example, the response uses ellipsis to replace some members.

```bash
{
  "hasMore": false,
  "data": [
    {
      "id": "$esxi_id",
      "name": "$esxi_name",
      "datacenterId": "$datacenter_id",
      "computeClusterId": "$compute_cluster_id",
      "datastores": [
      ...
      ],
      "configuredSlaDomainId": "INHERIT",
      "primaryClusterId": "$cluster_id"
    }
    ],
  "total": 1
}
```

Retrieve more details for an ESXi hypervisor by sending a GET request to [`/vmware/host/{id}`](#operation/getVmwareHost)

```bash
curl -X POST \
  "https://$cluster_address/api/v1/vmware/host/$esxi_id"
```

The Rubrik REST API server responds with the details for the specified ESXi hypervisor.

**Note:** To shorten the example, the response uses ellipsis to replace some members.

```bash
{
  "id": "$esxi_id",
  "moid": "$moid",
  "name": "$esxi_name",
  "computeClusterId": "$compute_cluster_id",
  "datacenter": {
    "id": "$datacenter_id",
    "name": "$datacenter_name",
    "vcenterId": "$vcenter_id",
    "configuredSlaDomainId": "INHERIT",
    "primaryClusterId": "$cluster_id"
  },
  "datastores": [
    ...
  ],
  "virtualMachines": [
    ...
  ],
  "configuredSlaDomainId": "INHERIT",
  "primaryClusterId": "$cluster_id"
}
```

Additionally, To change the SLA Domain that is configured for an ESXi hypervisor, send a PATCH request on [`/vmware/host`](#operation/updateVmwareHost)

```bash
curl -X POST \
  "https://$cluster_address/api/v1/vmware/host/$snapshot_id"
```

Retrieve datastore details for an ESXi hypervisor by sending a GET request to [`/vmware/host/{id}/datastore`](#operation/getVmwareHostDatastore)
```bash
curl -X GET \
  "https://$cluster_address/api/v1/vmware/host/$esxi_id/datastore"
```


## Virtual machine protection

After a vCenter Server is registered, the Rubrik cluster acquires metadata for the virtual machines that are administered through that vCenter Server. Using the metadata, assign Rubrik cluster protection to the virtual machines.

The typical protection workflow involves the following tasks:
1. Find the virtual machine resource object.
2. (Optional) Enable scripts on the virtual machine.
3. (Optional) Exclude specified vmdk files for the virtual machine.
4. Assign the virtual machine to an SLA Domain.
5. (Optional) Get the configuration used to force a full snapshot of the
   virtual machine.
6. (Optional) Request a forced full snapshot for the virtual machine.

### Finding virtual machines
Get a list of the virtual machine objects known to the Rubrik cluster by sending a GET request to [`/vmware/vm`](#operation/queryVm). The Rubrik REST API server returns a response that includes a `ListResponse` object. Use query parameters as part of the GET request, to filter the list and to work with the `ListResponse` object.

A GET request that is sent to the [`/vmware/vm`](#operation/queryVm) endpoint accepts the query parameters that are described in the following table.
| Parameter | Description |
| --------- | ----------- |
| `effective_sla_domain_id` | SLA Domain applied to the virtual machine, either directly or derived. Use `UNPROTECTED` for virtual machines that do not have a derived or direct SLA Domain. |
| `primary_cluster_id` | The `id` of the primary Rubrik cluster for the virtual machine. Use `local` for the Rubrik cluster that is hosting the Rubrik REST API session. |
| `limit` | Maximum number of a elements to include in the `data` array of the response. |
| `offset` | Index reference point to use when determining the elements to include in the response. |
| `is_relic` | Relic status of the virtual machine. `true` to specify only relic virtual machines. `false` to exclude relic virtual machines. Do not include the parameter to include both relic and non-relic virtual machines. |
| `name` | String value to match in any part of the name of a virtual machine.  |
| `moid` | String value to match in any part of the MOID of a virtual machine.  |
| `sla_assignment` | SLA Domain assignment status of the virtual machine. Use `derived` for virtual machines that derive protection status from another resource object. Use `direct` for virtual machines that have a directly assigned SLA Domain. Use `unassigned` for virtual machines that do not have a direct or derived SLA Domain. |
| `guest_os_name` | Filter by vm guest os name using infix search. |
| `sort_by` | Perform an ASCII sort of the elements in the `ListResponse` object data array by a specified object value: `effective_sla_domain_id`, `name`, `moid`, `folderPath`, or `infraPath`. |
| sort_order | Sort order for the elements in the ListResponse object data array. Use `asc` for ascending sort or `desc` for descending sort. |


**Example:** Retrieving a list of virtual machine resource objects

Retrieve a list of unprotected virtual machine resource objects that have 'test' in their name. Limit the first page of the response to the first object.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/vmware/vm?effective_sla_domain_id=UNPROTECTED&limit=1&offset=0&name=test"
```
The Rubrik REST API server responds with a `ListResponse` object. The first page has the first object of the 156 objects that matched the query parameters.

**Note:** To shorten the example, the response uses ellipsis to replace some members.

```bash
{
  "hasMore": true,
  "data": [
    {
      "id": "$vm_id",
      "moid": "$vm_moid",
      "name": "abctest123",
      "vcenterId": "$vcenter_id",
      "hostName": "$esxi_host_name",
      "hostId": "$esxi_host_id",
      "clusterName": "$vcenter_cluster_name",
      "powerStatus": "poweredOn",
      "configuredSlaDomainId": "INHERIT",
      "configuredSlaDomainName": "Inherit",
      "effectiveSlaDomainId": "UNPROTECTED",
      "effectiveSlaDomainName": "Unprotected",
      "slaAssignment": "Unassigned",
      "ipAddress": "$vm_ip",
      "toolsInstalled": true,
      "primaryClusterId": "$cluster_id",
      "isReplicationEnabled": false,
      "folderPath": [
        ...
      ],
      "infraPath": [
        ...
      ],
      "vmwareToolsInstalled": true,
      "isRelic": false,
      "maxNestedVsphereSnapshots": -1,
      "snapshotConsistencyMandate": "UNKNOWN",
      "physicalStorage": 0,
      "guestCredentialAuthorizationStatus": "PENDING"
    }
  ],
  "total": 156
}
```

### Retrieving more details for a virtual machine
To get detailed information for a specified virtual machine object, send a GET request to [`/vmware/vm/{id}`](#operation/getVm).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/vmware/vm/$vm_id"
```
The Rubrik REST API server responds with the details for the virtual machine object.

**Note:** To shorten the example, the response uses ellipsis to replace some members.

```bash
{
  "id": "$vm_id",
  "moid": "$vm_moid",
  "name": "abctest123",
  "powerStatus": "poweredOn",
  "configuredSlaDomainId": "INHERIT",
  "effectiveSlaDomain": {
    ...
  },
  "slaAssignment": "Unassigned",
  "blackoutWindowStatus": {
    "isGlobalBlackoutActive": false,
    "isSnappableBlackoutActive": false
  },
  "blackoutWindows": {
    ...
    ],
    "snappableBlackoutWindows": []
  },
  "currentHost": {
    ...
  },
  "virtualDiskIds": [
    ...
  ],
  "snapshots": [],
  "ipAddress": "$vm_ip",
  "toolsInstalled": true,
  "snapshotCount": 0,
  "snapshotConsistencyMandate": "",
  "maxNestedVsphereSnapshots": -1,
  "primaryClusterId": "$cluster_id",
  "isReplicationEnabled": false,
  "isRelic": false,
  "physicalStorage": 0,
  "guestOsName": "$guest_os",
  "guestCredentialAuthorizationStatus": "PENDING",
  "isArrayIntegrationPossible": false,
  "isArrayIntegrationEnabled": false
}
```

### Register Rubrik Backup Service

To register Rubrik Backup Service running on a specified virtual machine,
send a POST request to
[`/vmware/vm/{id}/register_agent`](#operation/vmRegisterAgent).

```bash
curl -X POST \
  "https://$cluster_address/api/v1/vmware/vm/$vm_id/register_agent"
```
The Rubrik REST API server responds with an HTTP 204 response when the
registration is successful.


### Enabling scripts

A virtual machine object can be configured to start scripts on the guest operating system. A script can be started before the backup (`preBackupScript`), after the snapshot completes (`postSnapScript`), and after the backup task completes (`postBackupScript`). The *Rubrik User Guide* provides information about script requirements.

To configure a virtual machine object to start scripts, send a PATCH request to [`/vmware/vm/{id}`](#operation/updateVm). Since this is a PATCH request, only the elements of the virtual machine object that are modified or added should be included in the request body. All three script members are shown in the request body in this model, but all are optional.

```bash
curl -X PATCH \
 -d '{
      "preBackupScript": {
        "scriptPath": "$pre_script_path",
        "timeoutMs": 10000,
        "failureHandling": "abort"
      },
      "postSnapScript": {
        "scriptPath": "$postsnap_script_path",
        "timeoutMs": 10000,
        "failureHandling": "abort"
      },
      "postBackupScript": {
        "scriptPath": "$postbackup_script_path",
        "timeoutMs": 10000,
        "failureHandling": "abort"
      }
    }' \
  "https://$cluster_address/api/v1/vmware/vm/$vm_id"
```

The Rubrik REST API server sends an HTTP 200 response that includes the modified or added members in the response body.

#### Manually starting a virtual machine script

For testing or to run a script before running a backup, manually trigger the script by sending a POST request to [`/vmware/vm/{id}/guest_script/run`](#operation/runGuestOsScript). To manually start a script, the script must first be a part of the configuration of the virtual machine object. Use the value of the `phase` member to identify the script, as follows:
* Use `PreBackup` for the script identified by the `preBackupScript` member.
* Use `PostSnap` for the script identified by the `postSnapScript` member.
* Use `PostBackup` for the script identified by the `postBackupScript` member.

```bash
curl -X POST \
  -d '{
    "phase": "PreBackup" }' \
  "https://$cluster_address/api/v1/vmware/vm/$vm_id/guest_script/run"
```
The Rubrik REST API server responds with an HTTP 204 response when the script finishes with a 0 exit code.


### Excluding a VMDK file

The Rubrik cluster can be configured to ignore some of the VMDK files of a virtual machine while protecting the other VMDK files of that virtual machine. To exclude a VMDK file, send a GET request to [`/vmware/vm/virtual_disk/{id}`](#operation/getVirtualDisk) using the `$disk_id` of the VMDK file.

To get the `$disk_id` values, send a GET request to [`/vmware/vm/{id}`](#operation/getVm). The response body has the `disk_id` values for the virtual machine in the `virtualDiskIds` array.

After identifying the `$disk_id` for a VMDK file, obtain the current state of the VMDK file.

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/vm/virtual_disk/$disk_id"
```
The Rubrik REST API server responds with the value of `excludeFromSnapshots`.

```bash
{
  "id": "$disk_id",
  "excludeFromSnapshots": false
}
```
When the value is `false` the Rubrik cluster is not configured to exclude the VMDK file. Change this value to `true` to instruct the Rubrik cluster to exclude the VMDK file from all subsequent snapshots of the virtual machine.

Send a PATCH request to [`/vmware/vm/virtual_disk/{id}`](#operation/updateVirtualDisk) to change the value of `excludeFromSnapshots` to `true` and exclude the VMDK file.

```bash
curl -X PATCH \
  -d '{
    "excludeFromSnapshots": true }' \
  "https://$cluster_address/api/v1/vmware/vm/virtual_disk/$disk_id"
```

The Rubrik REST API server responds with the updated `excludeFromSnapshots` value for the VMDK file.

```bash
{
  "id": "$disk_id",
  "excludeFromSnapshots": true
}
```

### Assigning a virtual machine to an SLA Domain
To protect a virtual machine through the rules and policies of an SLA Domain send a PATCH request to [`/vmware/vm/{id}`](#operation/updateVm) with the value of `configuredSlaDomainId` set to the `$sla_domain_id`.

**Note:** [Retrieving SLA Domains](#section/SLA-Domains/Retrieving-SLA-Domains) describes how to retrieve the SLA Domain objects on a Rubrik cluster.

```bash
curl -X PATCH -d \
  '{
    "configuredSlaDomainId": "$sla_domain_id"
  }' \
  "https://$cluster_address/api/v1/vmware/vm/$vm_id"
```
The Rubrik REST API server responds with confirmation of the assignment.

```bash
{
  "id": "$vm_id",
  "configuredSlaDomainId": "$sla_domain_id"
}
```
### Getting the configuration used to force a full snapshot of a virtual machine

To retrieve the configuration of a virtual machine that is used to force a full
snapshot of the virtual machine, send a GET request to
[`/vmware/vm/{id}/request/force_full_snapshot`](#operation/getVmForceFullSpec).

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/vm/{id}/request/force_full_snapshot"
```

The Rubrik REST API server responds with the force full snapshot object
which contains the latest configuration of the virtual machine.

```bash
{
  "vmId": "$vm_id",
  "virtualDiskInfos": [
    {
      "virtualDiskId": "$disk_id",
      "shouldDedupe": false
    },
    {
      "virtualDiskId": "$disk_id",
      "shouldDedupe": true
    }
  ]
}
```
### Requesting a forced full snapshot for a virtual machine

To force a full snapshot of a virtual machine, send a POST request to
[`/vmware/vm/{id}/request/force_full_snapshot`](#operation/requestVmForceFullSnapshot).

```bash
curl -X POST "https://$cluster_address/api/v1/vmware/vm/{id}/request/force_full_snapshot"
```

The Rubrik REST API server persists the configuration for forcing a
full snapshot until the next backup job, which takes a full snapshot
and clears the configuration.

```bash
{
  "vmId": "$vm_id",
  "virtualDiskInfos": [
    {
      "virtualDiskId": "$disk_id",
      "shouldDedupe": false
    },
    {
      "virtualDiskId": "$disk_id",
      "shouldDedupe": true
    }
  ]
}
```
## Snapshot management

Managing snapshots includes the following possible actions:
* Retrieving snapshot information
* Retrieving snapshot information for multiple virtual machines
* Retrieving snapshot details
* Retrieving missed snapshot information
* Creating on-demand snapshots
* Expiring individual snapshots
* Expiring all snapshots for a virtual machine

### Retrieving snapshot information

To retrieve a list of the snapshots for a virtual machine, send a GET request to [`/vmware/vm/{id}/snapshot`](#operation/querySnapshot).

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/vm/$vm_id/snapshot"
```
The Rubrik REST API server responds with a `ListResponse` object.

```bash
{
  "hasMore": false,
  "data": [
    {
      "date": "$timestamp0",
      "indexState": 0,
      "cloudState": 0,
      "vmName": "$vm_name",
      "replicationLocationIds": [],
      "id": "$snapshot_id0",
      "consistencyLevel": "$consistency_level0",
      "archivalLocationIds": [],
      "isOnDemandSnapshot": false
    },
    {
      "date": "$timestamp1",
      "indexState": 0,
      "cloudState": 0,
      "vmName": "$vm_name",
      "replicationLocationIds": [],
      "id": "$snapshot_id1",
      "consistencyLevel": "$consistency_level1",
      "archivalLocationIds": [],
      "isOnDemandSnapshot": true
    }
 ],
 "total": 2
}
```
Each member of the data array includes the `id` of a snapshot. Use this value (`$snapshot_id`) to perform tasks with the snapshot, such as:
* Browsing for data in the snapshot
* Downloading data from the snapshot
* Restoring data from the snapshot
* Exporting data from the snapshot
* Mounting a virtual machine from the snapshot

### Retrieving snapshot information for a batch of virtual machines

To retrieve lists of snapshots for a batch of virtual machines, send a POST request to [`/vmware/vm/snapshots`](#operation/querySnapshotsForVms).
This reuqest taks a list of virtual mahine IDs.

```bash
curl -X POST \
  -d '{
     "vm_ids": ["vmId_1", "vmId_2"]
     }'\
      "https://$cluster_address/api/v1/vmware/vm/snapshots"
```

The Rubrik REST API server responds with a `BatchVmSnapshotSummaries`
object.

```bash
{
  "responses":
  [
    {
      "vmId": "vmId_1",
      "VmSnapshotSummaries":
      [
        {
          "date": "$timestamp0",
          "indexState": 0,
          "cloudState": 0,
          "vmName": "$vm_name",
          "replicationLocationIds": [],
          "id": "$snapshot_id0",
          "consistencyLevel": "$consistency_level0",
          "archivalLocationIds": [],
          "isOnDemandSnapshot": false
        }
      ]
    },
    {
      "vmId": "vmId_2",
      "VmSnapshotSummaries":
      [
        {
          "date": "$timestamp0",
          "indexState": 0,
          "cloudState": 0,
          "vmName": "$vm_name",
          "replicationLocationIds": [],
          "id": "$snapshot_id0",
          "consistencyLevel": "$consistency_level0",
          "archivalLocationIds": [],
          "isOnDemandSnapshot": false
        }
      ]
    }
  ]
}
```

### Retrieving snapshot details

To retrieve details for a specified snapshot send a GET request to [`/vmware/vm/snapshot/{id}`](#operation/getSnapshot).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/vmware/vm/snapshot/$snapshot_id"
```
The Rubrik REST API server responds with the details of the specified snapshot.

**Note:** To shorten the example, the response uses ellipsis to replace some members.

```bash
{
  "date": "$timestamp",
  "indexState": 0,
  "virtualMachine": {
   ...
  },
  "vmName": "$vm_name",
  "isCorrupt": false,
  "replicationLocationIds": [],
  "archivalLocationIds": [],
  "snapshotDiskIds": [
    "$vmdk_id"
  ],
  "isOnDemandSnapshot": false,
  "cloudState": 0,
  "id": "$snapshot_id",
  "consistencyLevel": "1",
  "config": "[]"
}
```

### Retrieving missed snapshot information

The Rubrik cluster stores information for missed snapshots. *Missed snapshots* are snapshot tasks that are not completed as required by the rules and policies of an SLA Domain.  Retrieve missed snapshot information for a virtual machine by sending  a GET request to [`/vmware/vm/{id}/missed_snapshot`](#operation/missedSnapshots).

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/vm/$vm_id/missed_snapshot"
```
The Rubrik REST API server responds with a `ListResponse` object.

```bash
{
  "hasMore": false,
  "data": [
    {
      "archivalLocationType": [
        "missed"
      ],
      "missedSnapshotTime": "$timestamp0"
    },
    {
      "archivalLocationType": [
        "missed"
      ],
      "missedSnapshotTime": "$timestamp1"
    }
  ],
  "total": 2
}
```

### Creating on-demand snapshots

On-demand snapshots can be created for both protected and unprotected virtual machines. To create an on-demand snapshot of a virtual machine send a POST request to [`/vmware/vm/{id}/snapshot`](#operation/createOnDemandBackup).

```bash
curl -X POST \
  "https://$cluster_address/api/v1/vmware/vm/$vm_id/snapshot"
```
The Rubrik REST API server initiates the asynchronous snapshot task and responds with a task object.

```bash
{
  "id": "$request_id",
  "status": "ACQUIRING",
  "progress": 0,
  "startTime": "$timestamp",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vmware/vm/request/$request_id",
      "rel": "self"
    }
  ]
}
```
Using the information provided in the task object, send a GET request to poll the task status. When the value of `status` in the task object is `SUCCEEDED`, the on-demand snapshot finished successfully.


```bash
curl -X GET \
  "https://$cluster_address/api/v1/vmware/vm/request/$request_id"
```
The Rubrik REST API server sends a task object with `status="SUCCEEDED"`.  The task object for a successful snapshot includes the URI for the snapshot: `https://$cluster_address/api/v1/vmware/vm/snapshot/$snapshot_id`.

```bash
{
  "id":"$request_id",
  "status":"SUCCEEDED",
  "startTime":"$timestamp0",
  "endTime":"$timestamp1",
  "links":[
    {
      "href":"https://$cluster_address/api/v1/vmware/vm/snapshot/$snapshot_id",
      "rel":"result"
    },
   {
      "href":"https://$cluster_address/api/v1/vmware/vm/request/$request_id",
      "rel":"self"
   }
  ]
}
```

### Expiring individual snapshots

On-demand snapshots and snapshots for unprotected virtual machines can be expired by using the snapshot `id`. To expire an individual snapshot, send a DELETE request to [`/vmware/vm/snapshot/{id}`](#operation/deleteVmwareSnapshot). Include the query parameter `location` to specify whether to expire all copies of the snapshot, or only the local copy. Use `location=local` to expire only the copy of the snapshot on the specified Rubrik cluster. Use `location=all` to expire all copies of the snapshot, including replicas and archival copies.

```bash
curl -X DELETE \
  "https://$cluster_address/api/v1/vmware/vm/snapshot/$snapshot_id?location=$snapshot_location"
```
The Rubrik REST API server expires the specified snapshot and responds with HTTP response code 204. This indicates the request succeeded and the response body is empty.

The Rubrik REST API server responds with HTTP response code 422 'Unprocessable Entity', when the specified snapshot is not one of the following:
* On-demand snapshot
* Snapshot for an unprotected virtual machine

### Expiring all snapshots for a virtual machine

All snapshots for an unprotected virtual machine can be expired by using the virtual machine `id`. To expire all snapshots for an unprotected virtual machine, send a DELETE request to [`/vmware/vm/{id}/snapshot`](#operation/deleteVmwareSnapshots). The Rubrik cluster expires all snapshots, replicas, and archival snapshots for the specified virtual machine.

```bash
curl -X DELETE \
  "https://$cluster_address/api/v1/vmware/vm/$vm_id/snapshot"
```
The Rubrik REST API server expires all snapshots for the specified virtual machine in all locations and responds with HTTP response code 204. This indicates the request succeeded and the response body is empty.

The Rubrik REST API server responds with HTTP response code 422 'Unprocessable Entity', when the specified virtual machine is protected through an SLA Domain assignment.




## Data recovery
To recover a file or folder from a snapshot, retrieve the `id` of the file or folder using either search or browse. Then use the `id` with one of the recovery methods:
* Download the file or folder
* Restore the file or folder to the source location
* Export the file or folder to another host

### Searching for data in snapshots

Search for files and folders across all indexed snapshots of a virtual machine by using the virtual machine `id`. Send a GET request to [`/vmware/vm/{id}/search`](#operation/searchVm) with the `path` query parameter. Use a path segment string or a name segment string for the value of `path`.

**IMPORTANT:** The snapshot used in this task must be indexed. Indexing makes the file system structure of the data available to the Rubrik cluster. To determine whether a snapshot has been successfully indexed, send a GET request to [`/vmware/vm/snapshot/{id}`](#operation/getSnapshot) as described in the 'Retrieving snapshot information' section of [Snapshot management](#section/Virtual-machines/Snapshot-management). Look at the value of `indexState`. A value of `1` means the snapshot has been indexed. A value of `0` means the snapshot has not been indexed.

The Rubrik REST API server uses the rules described in the following table when matching the value of `path` with folders and files in the indexed snapshots.
| Type | Rule | Description |
| ---- | ---- | ----------- |
| Path delimiter | Forward slashes and backslashes are equally recognized as path delimiters. | In the value of path, `/` matches both `/` and `\`, and `\` matches both `/` and `\`. |
| Path segments | Path segments match all files and folders that begin with the same path segment. | For example, '/abc/x' matches files and folders at '/abc/' or '\abc\\' with a filename or folder name that starts with 'x'. |
| Name segments | Name segments match all files and folders that begin with the same name segment. | For example, 'xyz' matches files and folders with a filename or folder name that starts with 'xyz', in all path locations. |
| Characters | Any character that the guest operating system accepts in a file path can be used.  | For example, the greater than symbol `>` and the lesser than symbol `<` are not allowed. |
| Windows drive | To specify a full path on a Windows guest follow the Windows file system requirement. | For example, to specify the 'temp' folder on the 'D' drive of a Windows virtual machine, use: `D:\temp`. |

**Example:** Searching for files and folders

Search for all files and folders in '/usr/local/' with a name that starts with the later 'g'.

Send a GET request to [`/vmware/vm/{id}/search`](#operation/searchVm) with `path=/usr/local/g`.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/vmware/vm/$vm_id/search?path=%2Fusr%2Flocal%2Fg"
```
The Rubrik REST API server responds with a `ListResponse` object. The data array has two members, a directory at: `/usr/local/games` and a file at: `/usr/local/gamehints`.


```bash
{
  "hasMore": false,
  "data": [
    {
      "path": "/usr/local/games",
      "filename": "games",
      "fileVersions": [
        {
          "lastModified": "$timestamp0",
          "size": 4096,
          "snapshotId": "$snapshot_id0",
          "fileMode": "directory",
          "source": "cloud"
        }
      ]
    },
    {
    "path": "/usr/local/gamehints",
    "filename": "gamehints",
    "fileVersions": [
      {
        "lastModified": "$timestamp1",
        "size": 14480,
        "snapshotId": "$snapshot_id1",
        "fileMode": "file",
        "source": "cloud"
      },
      {
        "lastModified": "$timestamp2",
        "size": 14480,
        "snapshotId": "$snapshot_id2",
        "fileMode": "file",
        "source": "cloud"
      }
    ]
   }
  ],
  "total": 2
}
```

### Browsing for data in snapshots

Browse for files and folders with an indexed snapshot by using the snapshot `id`. Send a GET request to  [`/vmware/vm/snapshot/{id}/browse`](#operation/browseVmwareSnapshot) with the `path` query parameter.  Use a path segment string for the value of `path`. The response provides a ListResponse object that includes all of the files and folders in the directory that is specified by the value of `path`.

**IMPORTANT:** The snapshot used in this task must be indexed. Indexing makes the file system structure of the data available to the Rubrik cluster. To determine whether a snapshot has been successfully indexed, send a GET request to [`/vmware/vm/snapshot/{id}`](#operation/getSnapshot) as described in the 'Retrieving snapshot information' section of [Snapshot management](#section/Virtual-machines/Snapshot-management). Look at the value of `indexState`. A value of `1` means the snapshot has been indexed. A value of `0` means the snapshot has not been indexed.

The Rubrik REST API server uses the rules described in the following table when matching the value of `path` with the path in the specified snapshot.
| Type | Rule | Description |
| ---- | ---- | ----------- |
| Path delimiter | Forward slashes and backslashes are equally recognized as path delimiters. | In the value of path, `/` matches both `/` and `\`, and `\` matches both `/` and `\`. |
| Path description | The path description must end in a directory name, without an ending slash. | For example, '/abc/x' returns all files and folders in the directory at '/abc/x', but '/abc/x/' returns an HTTP 422 response. |
| Characters | Any character that the guest operating system accepts in a file path can be used.  | For example, the greater than symbol `>` and the lesser than symbol `<` are not allowed. |
| Windows drive | To specify a full path on a Windows guest follow the Windows file system requirement. | For example, to specify the 'temp' folder on the 'D' drive of a Windows virtual machine, use: `D:\temp`. |

**Example:** Browsing for files and folders

Retrieve a ListResponse object with all of the files and folders in '/home'.

Send a GET request to  [`/vmware/vm/snapshot/{id}/browse`](#operation/browseVmwareSnapshot) with `path=/home`.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/vmware/vm/snapshot/$snapshot_id/browse?path=%2Fhome&offset=0"
```
The Rubrik REST API server responds with a `ListResponse` object. The data array has two members, the directory: `ubuntu` and the file: `ubuntu.tar`.

```bash
{
  "hasMore": false,
  "data": [
    {
      "filename": "ubuntu",
      "path": "ubuntu",
      "lastModified": "$timestamp0",
      "size": 31892819777,
      "fileMode": "directory",
      "statusMessage": ""
    },
    {
      "filename": "ubuntu.tar",
      "path": "ubuntu.tar",
      "lastModified": "$timestamp1",
      "size": 4746675383,
      "fileMode": "file",
      "statusMessage": ""
    }
  ],
  "total": 2
}
```
### Downloading data from a snapshot

Data can be retrieved from a snapshot by creating a download link for an individual file and folder from the snapshot. To have the Rubrik cluster create a download link, send a POST request to [`/vmware/vm/snapshot/{id}/download`](#operation/createDownloadFileJob). Include in the request body the string/value pair: `"path":"$path"`, where `$path` is the full path to the file or folder. When `$path` refers to a folder, the Rubrik cluster creates a ZIP file of the folder and all that it contains.

The basic download work flow is:
1. Send a POST request to start the asynchronous download task.
2. Send a GET request to poll the task status.
3. When the task succeeds, use the download link provided in the response body to retrieve the file or folder.

**IMPORTANT:** The snapshot used in this task must be indexed. Indexing makes the file system structure of the data available to the Rubrik cluster. To determine whether a snapshot has been successfully indexed, send a GET request to [`/vmware/vm/snapshot/{id}`](#operation/getSnapshot) as described in the 'Retrieving snapshot information' section of [Snapshot management](#section/Virtual-machines/Snapshot-management). Look at the value of `indexState`. A value of `1` means the snapshot has been indexed. A value of `0` means the snapshot has not been indexed.

```bash
curl -X POST -d \
'{
   "path": "$full_source_path"
 }' \
 'https://$cluster_address/api/v1/vmware/vm/snapshot/$snapshot_id/download_file'
```
The Rubrik REST API server initiates the asynchronous request task and responds with a task object.

```bash
{
  "id": "$download_task_id",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "$timestamp",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vmware/vcenter/request/$request_id",
      "rel": "self"
    }
  ]
}
```

### Restoring data from a snapshot

To restore a file or folder to the source virtual machine send a POST request to [`/vmware/vm/snapshot/{id}/restore_file`](#operation/createRestoreFileJob). With the request, include a request body. The following table describes the members of the request body.

| Name | Description |
| ---- | ----------- |
| `path` | Full path of the file or folder. |
| `domainName` | Authentication domain for the credentials being used to authenticate and authorize the action. |
| `username` | Username of account to authenticate and authorize the action. |
| `password` | Password for the account to authenticate and authorize the action. |
| `restorePath` | Full path location for the restore of the file or folder. The action can create a directory at the end of the specified path, but cannot create directories that are specified within the path. |
| `shouldUseAgent` | Instruct the Rubrik cluster to restore the file using Rubrik Backup Service running on virtual machine. Use `true` to restore using RBS and `false` to restore using `VMware tools`. |
| `shouldSaveCredentials` | Instruct the Rubrik cluster to save the credentials included in the request. Use `true` to save the credentials and `false` to use the credentials only for the current request. |
| `shouldRestoreXAttrs` | Instruct the Rubrik cluster to restore the
extended attributes of all files and folders included in the `path`.
When restoring to a Linux host, extended attributes are restored.
When restoring to a Windows host, alternate data streams (ADS) are
restored. Use `true` to restore this metadata and `false` otherwise. |

```bash
curl -X POST -d \
'{
   "path": "$full_source_path",
   "domainName": "$auth_domain",
   "username": "$username",
   "password": "$password",
   "restorePath": "$full_restore_path",
   "shouldUseAgent" : true,
   "shouldSaveCredentials": true,
   "shouldRestoreXAttrs": true
 }' \
 "https://$cluster_address/api/v1/vmware/vm/snapshot/$snapshot_id/restore_file"
```

The Rubrik REST API server initiates the asynchronous request task and responds with a task object.

```bash
{
  "id": "$restore_task_id",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "$timestamp",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vmware/vcenter/request/$request_id",
      "rel": "self"
    }
  ]
}
```


## Snapshot mount operations
Snapshot mount operations include the following possible actions:
* Retrieving a snapshot from an archival location
* Mounting a snapshot by using Instant Recovery
* Mounting a snapshot by using Live Mount
* Mounting a snapshot for a batch of virtual machines using Live Mount
* Exporting a snapshot
* Downloading a snapshot from an archival location and then exporting it
* Changing the properties of a mounted virtual machine
* Removing a virtual machine mount
* Migrating a datastore for a virtual machine from Live Mount or Instant Recovery

### Retrieving a snapshot from an archival location

To work with a snapshot that is stored only at an archival location, first download the snapshot to the Rubrik cluster by sending a POST request to [`/vmware/vm/snapshot/{id}/download`](#operation/createDownloadSnapshotFromCloud).

```bash
curl -X POST \
  "https://$cluster_address/api/v1/vmware/vm/snapshot/$snapshot_id/download"
```
The Rubrik REST API server initiates the asynchronous request task and responds with a task object.

```bash
{
  "id": "$snap_download_task_id",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "$timestamp",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vmware/vcenter/request/$request_id",
      "rel": "self"
    }
  ]
}
```

### Mounting a snapshot by using Instant Recovery

Replace a source virtual machine from a snapshot by using the Instant Recovery feature. To use Instant Recovery, send a POST request to [`/vmware/vm/snapshot/{id}/instant_recover`](#operation/createInstantRecovery). This request requires a snapshot `id` and can optionally include the parameters that are described in the following table.

| Name | Description |
| ---- | ----------- |
| `hostId` | The `id` of an ESXi hypervisor. When not specified, the Rubrik cluster uses the original hypervisor. |
| `vmName` | Assigns a specified name to the virtual machine. |
| `removeNetworkDevices` | Determines whether the virtual machine has network devices. Use `true` to remove network devices from the virtual machine. Use `false` to keep the existing network devices. |

```bash
curl -X POST -d \
  '{
    "vmName": "$vm_name",
    "hostId": "$esxi_id",
    "removeNetworkDevices": true
   }' \
   "https://$cluster_address/api/v1/vmware/vm/snapshot/$snapshot_id/instant_recover"
```
The Rubrik REST API server initiates the asynchronous request task and responds with a task object.

```bash
{
  "id": "$instant_recovery_task_id",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "$timestamp",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vmware/vcenter/request/$request_id",
      "rel": "self"
    }
  ]
}
```

### Mounting a snapshot by using Live Mount

Mount a new virtual machine from a snapshot by using the Live Mount feature. To use Live Mount, send a POST request to [`/vmware/vm/snapshot/{id}/mount`](#operation/createMountV1). This request requires a snapshot `id` and can optionally include the parameters that are described in the following table.

| Name | Description |
| ---- | ----------- |
| `hostId` | The `id` of an ESXi hypervisor. When not specified, the Rubrik cluster uses the original hypervisor. |
| `vmName` | Assigns a specified name to the virtual machine. |
| `dataStoreName` | Obsolete paraemeter. |
| `disableNetwork` | Determines whether the virtual machine has access to the network. Use `true` to Mount the snapshot with network access disabled. Use `false` to allow the virtual machine to access the network. |
| `removeNetworkDevices` | Determines whether the virtual machine has network devices. Use `true` to remove network devices from the virtual machine. Use `false` to keep the existing network devices. |
| `powerOn` | Determines whether the virtual machine is powered on after mounting. Use `true` to power on the virtual machine. Use `false` to leave the virtual machine powered off after mounting. |


```bash
curl -X POST \
  -d '{
     "hostId": "$esxi_id",
     "vmName": "$vm_name",
     "dataStoreName": "$datastore_name",
     "disableNetwork": $network_state,
     "removeNetworkDevices": $network_devices_state,
     "powerOn": $power_state
   }'\
    "https://$cluster_address/api/v1/vmware/vm/snapshot/$snapshot_id/mount"
```

The Rubrik REST API server initiates the asynchronous request task and responds with a task object.

```bash
{
  "id": "$live_mount_task_id",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "$timestamp",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vmware/vcenter/request/$request_id",
      "rel": "self"
    }
  ]
}
```

### Mounting a snapshot for a batch of virtual machines using Live Mount

Mount a snapshot each for a batch of virtual machines. Send a POST request to
[`/vmware/vm/batch_mount`](#operation/batchMountSnapshot). This request
requires a snapshots parameter to identify the virtual machine and the snapshot
of the virtual machine to mount.
The following parameters are available to identify the snapshot: `snapshotId`,
`snapshotBeforeDate`, and `snapshotAfterDate`. One of the parameters must be configured
to identify the snapshot to be mounted.

| Name | Required | Type | Description |
| ---- | -------- | ---- | ----------- |
| `vmId` | Required | String | The `id` of the virtual machine. |
| `snapshotId` | Optional | String | The `id` of the snapshot to mount. |
| `snapshotBeforeDate` | Optional | Date | If the snapshotId is not specified, mount the newest snapshot before the date specified for this parameter. |
| `snapshotAfterDate` | Optional | Date | If the snapshotId and the snapshotBeforeDate are not specified, mount the oldest snapshot after the date specified for this parameter. |
| `config` | Required | Object | [Properties of the /vmware/vm/snapshot/{id}/mount endpoint.](#mounting-a-snapshot-by-using-live-mount) |

```bash
curl -X POST \
  -d '{
     "snapshots": [
       {
         "vmId": "$vm_id",
         "snapshotBeforeDate": "$timestamp",
         "config": {
           "hostId": "$esxi_id",
           "vmName": "$vm_name",
           "dataStoreName": "$datastore_name",
           "disableNetwork": $network_state,
           "removeNetworkDevices": $network_devices_state,
           "powerOn": $power_state
         }
       }
     ]
     }'\
      "https://$cluster_address/api/v1/vmware/vm/batch_mount"
```

The Rubrik REST API server initiates a batch of mount jobs and
resonds with objects tracking the job status.

```bash
{
  "responses": [
    {
      "id": "$live_mount_task_id",
      "status": "QUEUED",
      "progress": 0,
      "startTime": "$timestamp",
      "links": [
        {
          "href": "https://$cluster_address/api/v1/vmware/request/$request_id",
          "rel": "self"
        }
      ]
    }
  ]
}
```
### Retrieving the ID of the mount

After a mount task successfully completes, the `id` of the mount object can be retrieved by sending a GET request to [`/vmware/vm/request/{id}`](#operation/getAsyncRequestStatus) and using the `$request_id` value from the original request object for the Live Mount.

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/vm/request/$request_id"
```
The Rubrik REST API server responds with a request object that includes the `id` of the mount object.

```bash
{
  "id": "$request_id",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vmware/vm/snapshot/mount/$mount_id",
      "rel": "result"
    },
    {
      "href": "https://$cluster_address/api/v1/vmware/vm/request/$request_id",
      "rel": "self"
    }
  ],
  "status": "SUCCEEDED"
}
```
### Retrieving active mounts

To retrieve a list of all of the active mounts for a Rubrik cluster, send a GET request to [`/vmware/vm/snapshot/mount`](#operation/queryMountV1).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/vmware/vm/snapshot/mount"
```
The Rubrik REST API server responds with a ListResponse object.

```bash
{
  "hasMore": false,
  "data": [
    {
      "id": "$mount_id",
      "snapshotDate": "$snapshot_timestamp",
      "vmId": "$source_vm_id",
      "mountedVmId": "$mounted_vm_id",
      "hostId": "$esxi_id",
      "isReady": true
    }
  ],
  "total": 1
}
```
### Retrieving the details for a mount

To retrieve details about a specific mount, send a GET request to [`/vmware/vm/snapshot/mount/{id}`](#operation/getMountV1).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/vmware/vm/snapshot/mount/$mount_id"
```
The Rubrik REST API server responds with the details.

```bash
{
  "snapshotDate": "$timestamp",
  "vmId": "$source_vm_id",
  "isReady": true,
  "hostId": "$esxi_id",
  "id": "$mount_id",
  "mountedVmId": "$mounted_vm_id"
}
```

### Exporting a snapshot

To export a snapshot send a POST request to
[`/vmware/vm/snapshot/{id}/export`](#operation/createExportV1). This request
requires a snapshot `id` and the parameters that are described in the
following table.

| Name | Description |
| ---- | ----------- |
| `datastoreId` | The `id` of a datastore for the specified ESXi hypervisor. |
| `vmName` | Assigns a specified name to the virtual machine. |
| `hostId` | The `id` of an ESXi hypervisor. |
| `disableNetwork` | Determines whether the virtual machine has access to the network. Use `true` to Mount the snapshot with network access disabled. Use `false` to allow the virtual machine to access the network. |
| `removeNetworkDevices` | Determines whether the virtual machine has network devices. Use `true` to remove network devices from the virtual machine. Use `false` to keep the existing network devices. |
| `powerOn` | Determines whether the virtual machine is powered on after mounting. Use `true` to power on the virtual machine. Use `false` to leave the virtual machine powered off after mounting. |
| `unregisterVm` | Determines whether to add the exported virtual machine to the vCenter Server inventory. Use `true` to remove the exported virtual machine from the associated vCenter Server inventory. Use `false` to add the exported virtual machine to the associated vCenter Server inventory. |


```bash
curl -X  -d \
 '{
   "datastoreId": "string",
   "vmName": "string",
   "hostId": "string",
   "disableNetwork": true,
   "removeNetworkDevices": true,
   "powerOn": true,
   "unregisterVm": true
 }' \
 "https://$cluster_address/api/v1/vmware/vm/snapshot/$snapshot_id/export"
```

The Rubrik REST API server initiates the asynchronous request task and responds with a task object.

```bash
{
  "id": "$export_task_id",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "$timestamp",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vmware/vcenter/request/$request_id",
      "rel": "self"
    }
  ]
}
```

### Exporting a snapshot from an archival location

To export a snapshot from an archival location, send a POST
request to [`/vmware/vm/snapshot/{id}/export_with_download`]
(#operation/createExportWithDownloadFromCloudV1). This request requries
a snapshot `id` and the parameters that are described in the following table.

| Name | Description |
| ---- | ----------- |
| `datastoreId` | `id` of a datastore for the specified ESXi hypervisor. |
| `vmName` | Assigns a name to the virtual machine. |
| `hostId` | `id` of an ESXi hypervisor. |
| `disableNetwork` | Determines if the virtual machine has access to the
                     network. `true` mounts the snapshot with network
                     access disabled. `false` allows the virtual machine
                     to access the network. |
| `removeNetworkDevices` | Determines if the virtual machine includes network
                           devices. `true` removes network devices from
                           the virtual machine.`false` keeps the existing
                           network devices. |
| `powerOn` | Determines if the virtual machine is powered on after
              mounting. `true` powers on the virtual machine. `false`
              leaves the virtual machine powered off after mounting. |
| `unregisterVm` | Determines if the exported virtual machine is added to
                   the vCenter Server inventory. `true` removes the exported
                   virtual machine from the associated vCenter Server
                   inventory. `false` adds the exported virtual machine
                   to the associated vCenter Server inventory. |

```bash
curl -X  -d \
 '{
   "datastoreId": "string",
   "vmName": "string",
   "hostId": "string",
   "disableNetwork": true,
   "removeNetworkDevices": true,
   "powerOn": true,
   "unregisterVm": true
 }' \
 "https://$cluster_address/api/v1/vmware/vm/snapshot/$id/export_with_download"
```

The Rubrik REST API server initiates the asynchronous request task and responds
with a task object.

```bash
{
  "id": "$download_task_id",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "$timestamp",
  "links": [
    {
      "href":
         "https://$cluster_address/api/v1/vmware/vcenter/request/$request_id",
      "rel": "self"
    }
  ]
}
```

### Changing power status of a mounted virtual machine

To change the power status of a mounted virtual machine send a PATCH request to [`/vmware/vm/snapshot/mount/{id}`](#operation/updateMount). Include in the request body, the member `"powerStatus": $power_state`. For `$power_state`, use `true` to power on the virtual machine, or use `false` to power off the virtual machine.

```bash
curl -X PATCH \
  -d '{
    "powerStatus": $power_state }' \
  "https://$cluster_address/api/v1/vmware/vm/snapshot/mount/$mount_id"
```

The Rubrik REST API server responds with the mount details.

```bash
{
  "powerStatus": "$power_state",
  "id": "$mount_id",
  "snapshotDate": "$timestamp",
  "vmId": "$vm_id",
  "mountedVmId": "$mounted_vm_id",
  "hostId": "$esxi_id",
  "isReady": true,
  "mountRequestId": "$mount_request_id",
  "unmountRequestId": "$unmount_request_id"
}
```

### Removing a virtual machine mount

To remove a Live Mount send a DELETE request to [`/vmware/vm/snapshot/mount/{id}`](#operation/createUnmount). To remove a mount object after live migration of the virtual machine include the query parameter `force=true`.

```bash
curl -X DELETE \
  "https://$cluster_address/api/v1/vmware/vm/snapshot/mount/$mount_id"
```
The Rubrik REST API server initiates the asynchronous request task and responds with a task object.

```bash
{
  "id": "$delete_mount_task_id",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "$timestamp",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vmware/vcenter/request/$request_id",
      "rel": "self"
    }
  ]
}
```

### Get recoverable ranges for a CDP-enabled virtual machine

For a list of time ranges to which a CDP-enabled virtual machine can recover, send a GET request to [`/vmware/vm/{id}/recoverable_range`](#operation/getVmwareRecoverableRanges). The time range start and end timestamps are specified as milliseconds from epoch.
Any point-in-time recovery operation from version 2 of the API can use the time ranges returned by this API call for any CDP-enabled virtual machine.

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/$vm_id/recoverable_range
```

```bash
{
  "data": [
    "beginTime": "2018-01-01T12:34:56.789Z",
    "endTime": "2018-01-01T12:34:56.789Z"
  ],
  "hasMore": false,
  "total": 1
}
```

### Get missed recoverable ranges for a CDP-enabled virtual machine

For a list of time ranges to which a CDP-enabled virtual machine cannot recover to, send a GET request to [`/vmware/vm/{id}/missed_recoverable_range`](#operation/getVmwareMissedRecoverableRanges). The time range start and end timestamps are specified as milliseconds from epoch.
Any point-in-time recovery operation from version 2 of the API can use the time ranges returned by this API call for any CDP-enabled virtual machine.

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/$vm_id/missed_recoverable_range
```

```bash
{
  "data": [
    "beginTime": "2018-01-01T12:34:56.789Z",
    "endTime": "2018-01-01T12:34:56.789Z"
  ],
  "hasMore": false,
  "total": 1
}
```

### Migrating a datastore for a virtual machine from Live Mount or Instant Recovery

Send a POST request to [`/vmware/vm/snapshot/mount/{id}/relocate`](#operation/relocateMount) to migrate a datastore for a virtual machine created from Live Mount or Instant Recovery.


### Get compute cluster information

VMware compute cluster can be found by a GET on [`/vmware/compute_cluster`](#operation/queryComputeCluster).

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/compute_cluster"
```

```bash
{
  "data": [
    {
      "id": "compute_cluster_id",
      "name": "compute_cluster_name",
      "configuredSlaDomainId": "configured_sla_domain_id",
      "configuredSlaDomainName": "configured_sla_domain_name",
      "primaryClusterId": "primary_cluster_id",
      "datacenterId": "datacenter_id",
      "effectiveSlaDomainId": "effective_sla_domain_id",
      "effectiveSlaDomainName": "effective_sla_domain_name",
      "effectiveSlaSourceObjectId": "effective_sla_source_object_id",
      "effectiveSlaSourceObjectName": "effective_sla_source_object_name"
    }
  ],
  "hasMore": false,
  "total": 1
}
```

Further details are acquired from GET [`/vmware/compute_cluster/{id}`](#operation/getComputeCluster).

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/compute_cluster/$compute_clustere_id"
```

```bash
{
  "id": "compute_cluster_id",
  "name": "compute_cluster_name",
  "configuredSlaDomainId": "configured_sla_domain_id",
  "configuredSlaDomainName": "configured_sla_domain_name",
  "primaryClusterId": "primary_cluster_id",
  "datacenterId": "datacenter_id",
  "effectiveSlaDomainId": "effective_sla_domain_id",
  "effectiveSlaDomainName": "effective_sla_domain_name",
  "effectiveSlaSourceObjectId": "effective_sla_source_object_id",
  "effectiveSlaSourceObjectName": "effective_sla_source_object_name"
  "moid": "compute_cluster_moid",
  "hosts": [
    {
      "id": "string",
      "name": "string",
      "configuredSlaDomainId": "string",
      "configuredSlaDomainName": "string",
      "primaryClusterId": "string",
      "datacenterId": "string",
      "computeClusterId": "string",
      "datastores": [
        {
          "id": "string",
          "name": "string",
          "capacity": 0,
          "dataStoreType": "string",
          "dataCenterName": "string",
          "isLocal": true
         }
      ],
      "effectiveSlaDomainId": "string",
      "effectiveSlaDomainName": "string",
      "effectiveSlaSourceObjectId": "string",
      "effectiveSlaSourceObjectName": "string"
    }
  ],
"virtualMachines": [
    {
      "id": "string",
      "name": "string",
      "configuredSlaDomainId": "string",
      "configuredSlaDomainName": "string",
      "primaryClusterId": "string",
      "slaAssignment": "Derived",
      "effectiveSlaDomainId": "string",
      "effectiveSlaDomainName": "string",
      "effectiveSlaSourceObjectId": "string",
      "effectiveSlaSourceObjectName": "string",
      "moid": "string",
      "vcenterId": "string",
      "hostName": "string",
      "hostId": "string",
      "clusterName": "string",
      "snapshotConsistencyMandate": "UNKNOWN",
      "powerStatus": "string",
      "protectionDate": "2018-10-02T20:33:03.833Z",
      "ipAddress": "string",
      "agentStatus": {
        "agentStatus": "string",
        "disconnectReason": "string"
      },
      "toolsInstalled": true,
      "isReplicationEnabled": true,
      "folderPath": [
        {
          "id": "string",
          "managedId": "string",
          "name": "string"
        }
      ],
      "infraPath": [
        {
          "id": "string",
          "managedId": "string",
          "name": "string"
        }
      ],
      "vmwareToolsInstalled": true,
      "isRelic": true,
      "guestCredentialAuthorizationStatus": "string",
      "cloudInstantiationSpec": {
        "imageRetentionInSeconds": 0
      },
      "parentAppInfo": {
        "id": "string",
        "isProtectedThruHierarchy": true
      }
    }
  ]
}
```

configuredSlaDomainId could be updated by a PATCH [`/vmware/compute_cluster/{id}`](#operation/updateComputeCluster).

```bash
curl -X PATCH \
  -d '{
    "sla_assignable": $sla_domain }' \
  "https://$cluster_address/api/v1/vmware/compute_cluster/$compute_clustere_id"
```

```bash
{
  "id": "compute_cluster_id",
  "name": "compute_cluster_name",
  "configuredSlaDomainId": "configured_sla_domain_id",
  "configuredSlaDomainName": "configured_sla_domain_name",
  "primaryClusterId": "primary_cluster_id",
  "datacenterId": "datacenter_id",
  "effectiveSlaDomainId": "effective_sla_domain_id",
  "effectiveSlaDomainName": "effective_sla_domain_name",
  "effectiveSlaSourceObjectId": "effective_sla_source_object_id",
  "effectiveSlaSourceObjectName": "effective_sla_source_object_name"
  "moid": "compute_cluster_moid",
  "hosts": [
    {
      "id": "string",
      "name": "string",
      "configuredSlaDomainId": "string",
      "configuredSlaDomainName": "string",
      "primaryClusterId": "string",
      "datacenterId": "string",
      "computeClusterId": "string",
      "datastores": [
        {
          "id": "string",
          "name": "string",
          "capacity": 0,
          "dataStoreType": "string",
          "dataCenterName": "string",
          "isLocal": true
         }
      ],
      "effectiveSlaDomainId": "string",
      "effectiveSlaDomainName": "string",
      "effectiveSlaSourceObjectId": "string",
      "effectiveSlaSourceObjectName": "string"
    }
  ],
"virtualMachines": [
    {
      "id": "string",
      "name": "string",
      "configuredSlaDomainId": "string",
      "configuredSlaDomainName": "string",
      "primaryClusterId": "string",
      "slaAssignment": "Derived",
      "effectiveSlaDomainId": "string",
      "effectiveSlaDomainName": "string",
      "effectiveSlaSourceObjectId": "string",
      "effectiveSlaSourceObjectName": "string",
      "moid": "string",
      "vcenterId": "string",
      "hostName": "string",
      "hostId": "string",
      "clusterName": "string",
      "snapshotConsistencyMandate": "UNKNOWN",
      "powerStatus": "string",
      "protectionDate": "2018-10-02T20:33:03.833Z",
      "ipAddress": "string",
      "agentStatus": {
        "agentStatus": "string",
        "disconnectReason": "string"
      },
      "toolsInstalled": true,
      "isReplicationEnabled": true,
      "folderPath": [
        {
          "id": "string",
          "managedId": "string",
          "name": "string"
        }
      ],
      "infraPath": [
        {
          "id": "string",
          "managedId": "string",
          "name": "string"
        }
      ],
      "vmwareToolsInstalled": true,
      "isRelic": true,
      "guestCredentialAuthorizationStatus": "string",
      "cloudInstantiationSpec": {
        "imageRetentionInSeconds": 0
      },
      "parentAppInfo": {
        "id": "string",
        "isProtectedThruHierarchy": true
      }
    }
  ]
}
```

### Query asynchronous job status for VMware compute cluster

To query the job status details of an asynchronous job that is related to an VMware compute cluster with a GET to [`/vmware/compute_cluster/request/{id}`](#operation/getAsyncRequestStatusForComputeCluster).

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/compute_cluster/request/$job_id"
```

```bash
{
  "id": "string",
  "status": "string",
  "progress": 0,
  "startTime": "2018-10-02T20:33:03.933Z",
  "endTime": "2018-10-02T20:33:03.933Z",
  "nodeId": "string",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "string",
      "rel": "string"
    }
  ]
}
```

### VMware IO filters operations

All IO filters on a specific VMware compute cluster can be found with a GET on [`/vmware/compute_cluster/{id}/io_filter`](#operation/getIoFilters).

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/compute_cluster/$compute_cluster_id/io_filter"
```

```bash
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "version": "string",
      "vendor": "string",
      "releaseDate": "string",
      "summary": "string"
    }
  ],
  "hasMore": false,
  "total": 1
}
```

Install the latest version of Rubrik IO filter to a specific VMware compute cluster with a POST on [`/vmware/compute_cluster/{id}/install_io_filter`](#operation/installIoFilter).

```bash
curl -X POST "https://$cluster_address/api/v1/vmware/compute_cluster/$compute_cluster_id/install_io_filter"
```

```bash
{
  "id": "string",
  "status": "string",
  "progress": 0,
  "startTime": "2018-10-02T20:33:03.933Z",
  "endTime": "2018-10-02T20:33:03.933Z",
  "nodeId": "string",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "string",
      "rel": "string"
    }
  ]
}
```

Uninstall the Rubrik IO filter from a specific VMware compute cluster with a POST on [`/vmware/compute_cluster/{id}/uninstall_io_filter`](#operation/uninstallIoFilter).

```bash
curl -X POST "https://$cluster_address/api/v1/vmware/compute_cluster/$compute_cluster_id/uninstall_io_filter"
```

```bash
{
  "id": "string",
  "status": "string",
  "progress": 0,
  "startTime": "2018-10-02T20:33:03.933Z",
  "endTime": "2018-10-02T20:33:03.933Z",
  "nodeId": "string",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "string",
      "rel": "string"
    }
  ]
}
```

Update the Rubrik IO filter to the latest version for a specific VMware compute cluster with a POST on [`/vmware/compute_cluster/{id}/upgrade_io_filter`](#operation/upgradeIoFilter).

```bash
curl -X POST "https://$cluster_address/api/v1/vmware/compute_cluster/$compute_cluster_id/upgrade_io_filter"
```

```bash
{
  "id": "string",
  "status": "string",
  "progress": 0,
  "startTime": "2018-10-02T20:33:03.933Z",
  "endTime": "2018-10-02T20:33:03.933Z",
  "nodeId": "string",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "string",
      "rel": "string"
    }
  ]
}
```

### Getting Live CDP fields for a batch of CDP-enabled virtual machines

Send a POST request to
[`/vmware/vm/cdp`](#operation/getVmwareCdpLiveInfo).
The request takes a list of virtual machine IDs that correspond to CDP-enabled
virtual machines as a mandatory parameter named 'ids'.

```bash
curl -X POST \
  -d '{
     "ids": ["id_1", "id_2"]
     }'\
      "https://$cluster_address/api/v1/vmware/vm/cdp"
```

The Rubrik REST API server responds with a `ListResponse` object.

```bash
{
  "hasMore": false,
  "data": [
    {
    "vmId": "id_1",
    "localRecoveryPoint": "2018-01-01T12:34:56.789Z",
    "remoteRecoveryPoint": "2018-01-01T12:34:56.789Z"
    },
    {
    "vmId": "id_2",
    "localRecoveryPoint": "",
    "remoteRecoveryPoint": ""
    }
  ]
  "total": 2
}
```
### Getting CDP State fields for a batch of CDP-enabled virtual machines

Send a POST request to
[`/vmware/vm/cdp_state`](#operation/getVmwareCdpStateInfo).
The request takes a list of virtual machine IDs that correspond to CDP-enabled
virtual machines as a mandatory parameter named 'ids'.

```bash
curl -X POST \
  -d '{
     "ids": ["id_1", "id_2"]
     }'\
      "https://$cluster_address/api/v1/vmware/vm/cdp_state"
```

The Rubrik REST API server responds with a `ListResponse` object.

```bash
{
  "hasMore": false,
  "data": [
    {
    "vmId": "id_1",
    "localStatus": "Active",
    "replicationStatus": "Healthy",
    "healthPercentage": "85%"
    },
    {
    "vmId": "id_2",
    "localStatus": "Active",
    "replicationStatus": "Healthy",
    "healthPercentage": "100%"
    }
  ]
  "total": 2
}
```

### Getting recoverable ranges for a batch of CDP-enabled virtual machines

To get the recoverable time ranges for a batch of CDP-enabled virtual
machines, send a POST request to [`/vmware/vm/recoverable_range`]
(#operation/getVmwareVmRecoverableRangesInBatch). The request takes a list of
virtual machine IDs, and optionally a "before_time" and "after_time" as a filter
of the time range. The returned recoverable range timestamps are specified as
milliseconds from epoch.

```bash
curl -X POST \
  -d '{
     "vmIds": ["vmId_1", "vmId_2"]
     }'\
      "https://$cluster_address/api/v1/vmware/vm/recoverable_range"
```

The Rubrik REST API server responds with a `BatchVmwareVmRecoverableRanges`
object.

```bash
{
  "responses":
  [
    {
      "vmId": "vmId_1",
      "recoverableRanges":
      [
        {
          "beginTime": "2018-01-01T12:34:56.789Z",
          "endTime": "2018-01-01T12:38:56.789Z"
        }
      ]
    },
    {
      "vmId": "vmId_2",
      "recoverableRanges":
      [
        {
          "beginTime": "2018-01-01T12:34:57.789Z",
          "endTime": "2018-01-01T12:38:57.789Z"
        }
      ]
    }
  ]
}
```

### Getting missed recoverable ranges for a batch of CDP-enabled
### virtual machines

To get the missed recoverable time ranges for a batch of CDP-enabled virtual
machines, send a POST request to [`/vmware/vm/missed_recoverable_range`]
(#operation/getVmwareVmMissedRecoverableRangesInBatch). The request takes a
list of virtual machine IDs, and optionally a "before_time" and "after_time"
as a filter of the time range. The returned missed recoverable range timestamps
are specified as milliseconds from epoch. If no filters being specified, the
missed recoverable range will be calculated based on the retention window,
i.e. from retention time to the current time

```bash
curl -X POST \
  -d '{
     "vmIds": ["vmId_1", "vmId_2"]
     }'\
      "https://$cluster_address/api/v1/vmware/vm/missed_recoverable_range"
```

The Rubrik REST API server responds with a
`BatchVmwareVmMissedRecoverableRanges` object.

```bash
{
  "responses":
  [
    {
      "vmId": "vmId_1",
      "missedRecoverableRanges":
      [
        {
          "beginTime": "2018-01-01T12:34:56.789Z",
          "endTime": "2018-01-01T12:38:56.789Z"
        }
      ]
    },
    {
      "vmId": "vmId_2",
      "missedRecoverableRanges":
      [
        {
          "beginTime": "2018-01-01T12:34:57.789Z",
          "endTime": "2018-01-01T12:38:57.789Z"
        }
      ]
    }
  ]
}
```

## Get VMware Hierarchy Objects
Send a GET request to
[`/vmware/hierarchy/export`](#operation/getVmwareHierarchyExport).
The request takes an optional root ID for the hierarchy. This endpoint
is used to retrieve the set of objects that are valid recovery targets
during a VMware Virtual Machine Export operations. This is limited to
VMware Clusters, Hosts, and Resource Pools. The available options for
the root ID are None (return top level objects), Clusters (return child
Hosts and Resource Pools), Standalone Hosts (return child Resource
Pools), or Resource Pools (return child Resource Pools).

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/hierarchy/export"
```

The Rubrik REST API server responds with a `ListResponse` object.
```bash
{
  "hasMore": true,
    "data": [
      {
        "id": "string",
        "name": "string",
        "objectType": "string",
        "location": "string",
        "hasChildren": true,
        "datastores": [
        ...
        ],
        "recoverableTo": true,
      },
    ]
}
```

## Get VMware Hierarchy Object
Send a GET request to
[`/vmware/hierarchy/{id}/export`](#operation/getVmwareHierarchyObject).
The request takes an ID for the hierarchy object. This endpoint
is used to retrieve the VMware Hierarchy object that are valid recovery targets
during a VMware Virtual Machine Export operations. This is limited to
VMware Clusters, Hosts, and Resource Pools. The available options for
the ID are Compute Cluster ID , Standalone Hosts ID, or Resource Pools ID.

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/hierarchy/{id}/export"
```

The Rubrik REST API server responds with a `VmwareHierarchyInfo` object.
```bash
{
  "responses":
  {
   "id": "string",
    "name": "string",
    "objectType": "string",
    "location": "string",
    "hasChildren": true,
    "datastores": [
    ...
    ],
    "recoverableTo": true,
  }
}
```

## Get VMware User-Configured Network List
Send a GET request to
[`/vmware/vcenter/{id}/networks`](#operation/getNetworks).
The request takes an ID for the vCenter server for which to retrieve the
user-configured networks and returns the networks' names and IDs.

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/vcenter/{id}/networks"
```

The Rubrik REST API server responds with a `NetworkInfo` object.
```bash
{
  "hasMore": false,
  "data": [
    {
    "id": "network_id",
    "name": "network_name"
    }
  ]
  "total": 1
}
```

## Set Network for HotAdd Backups and Recoveries
Send a POST request to
[`/vmware/vcenter/{id}/hotadd/network`](#operation/setHotAddNetwork). The
request takes an ID for the vCenter server and a user-configured network
ID. It can also optionally take the information about static IP configuration.
This static IP configuration requires the IP address range and the subnet mask,
optionally taking in a gateway and list of DNS servers.

```bash
curl -X POST \
-d '{
  "hotadd_network_info": {
    "network_id":"string",
    "static_ip_info": {
      "ip_addresses":["list", "of", "ips"],
      "subnet_mask":"string",
      "gateway":"string",
      "dns_servers":["list", "of", "dns", "servers"]
    }
  }
}'
\  "https://$cluster_address/api/v1/vmware/vcenter/{id}/hotadd/network"
```

The Rubrik REST API server responds with an HTTP 204 response when the
network is set up properly.

## Get Network Information for HotAdd Backups and Recoveries
Send a GET request to
[`/vmware/vcenter/{id}/hotadd/network`](#operation/getHotAddNetwork). The
request takes an ID for the vCenter server.

```bash
curl -x GET "https://$cluster_address/api/v1/vmware/vcenter/{id}/hotadd/network"
```

The Rubrik REST API server responds with a `HotAddNetworkConfigWithName` object.
```bash
{
  "networkName": "$networkName",
  "staticIpConfig": {
    "ip_addresses": ["list", "of", "ips"],
    "subnet_mask": "$subnet_mask",
    "gateway": "$gateway",
    "dns_servers": ["list", "of", "dns", "servers"]
  }
}
```

## Bulk creating on-demand snapshots
On-demand snapshots can be created for both protected and unprotected virtual
machines. To create an on-demand snapshot of a set of virtual machines, send a
POST request to
[`/vmware/vm/snapshot/bulk`](#operation/bulkCreateOnDemandBackup).

```bash
curl -X POST \
  -d '{
     "vms": [
       {
         "vmId": "$vm_id"
       }
     ],
     }'\
      "https://$cluster_address/api/v1/vmware/vm/snapshot/bulk"
```

The Rubrik REST API server initiates the asynchronous snapshot tasks and
responds with objects tracking the job status.
```bash
{
  "responses": [
    {
      "id": "$request_id",
      "status": "QUEUED",
      "progress": 0,
      "startTime": "$timestamp",
      "links": [
        {
          "href": "https://$cluster_address/api/v1/vmware/vm/snapshot/bulk",
          "rel": "self"
        }
      ]
    }
  ]
}
```

## Get VMware HotAdd proxy virtual machine list
To retrieve the list of VMware HotAdd proxy virtual machines, send a GET
request to the [`/vmware/vcenter/hotadd/vm`](#operation/queryHotAddProxyVm)
endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/vcenter/hotadd/vm"
```

The Rubrik REST API server responds with a `ListResponse` object.
```bash
{
  "hasMore": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "vcenterName": "string",
      "computeClusterName": "string",
      "hostName": "string",
      "datastoreName": "string",
      "networkInfo": {
        "networkName":"string",
        "staticIpConfig": {
          "ip_addresses":["list", "of", "ips"],
          "subnet_mask":"string",
          "gateway":"string",
          "dns_server":"string"
        }
      },
      "status": "OK",
      "UsedPortCount": 0,
    },
  ]
}
```

## Get Number of HotAdd Proxies Needed for Vcenter
Send a GET request to
[`/vmware/vcenter/{id}/hotadd/needed`](#operation/getNumProxiesNeeded).
The request takes an ID for the vCenter server for which to return the
number of HotAdd proxies needed.

```bash
curl -X GET "https://$cluster_address/api/v1/vmware/vcenter/{id}/hotadd/needed"
```

The Rubrik cluster returns the number of proxies needed.
```bash
{
  "needed": 7
}
```

## Get Ingest and Export Bandwidth Limits Using HotAdd for Vcenter.
Send a GET request to
[`/vmware/vcenter/{id}/hotadd/bandwidth`](#operation/getHotAddBandwidth).
The request takes the vCenter server ID and returns the
ingest and export bandwidth limits for that vCenter, when using HotAdd.

```bash
curl -X GET \
"https://$cluster_address/api/v1/vmware/vcenter/{id}/hotadd/bandwidth"
```

The Rubrik cluster returns the bandwidth limits in Mbps.
```bash
{
  "ingestLimit": 7,
  "exportLimit": 7
}
```

## Set Ingest and Export Bandwidth Limits Using HotAdd for Vcenter.
Send a POST request to
[`/vmware/vcenter/{id}/hotadd/bandwidth`](#operation/setHotAddBandwidth).
The request takes an ID for the vCenter server and the bandwidth limits to
update. Setting a bandwidth limit to 0 clears the limit in that
direction.

```bash
curl -X POST \
-d '{
  "hot_add_bandwidth_info": {
    "ingestLimit": 0,
    "exportLimit": 0
  }
}'
\ "https://$cluster_address/api/v1/vmware/vcenter/{id}/hotadd/bandwidth"
```

The Rubrik REST API server responds with an HTTP 204 response when the
bandwidth limits are set properly.

### Get preferred CDP network protocol

To retrieve the currently preferred network protocol (IPv4 or IPv6) used for
CDP data transfer, send a GET request to
[`/vmware/config/cdp/get_preferred_cdp_network_protocol`](#operation/getPreferredCdpNetworkProtocol).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/vmware/config/cdp/get_preferred_cdp_network_protocol"
```

The Rubrik REST API server responds with the preferred CDP
network protocol.

```bash
{
  "preferredCdpNetworkProtocol": "IPv4"
}
```

The configuration of VMware ESX subnets take priority over this setting.
When a valid IPv6 ESX subnet is defined, CDP uses IPv6 for data transfer
even when the preferred protocol is IPv4.

### Set preferred CDP network protocol

Set the preferred network protocol (IPv4 or IPv6) used for CDP data
transfer by sending a PATCH request to
[`/vmware/config/cdp/set_preferred_cdp_network_protocol`](#operation/setPreferredCdpNetworkProtocol).

```bash
curl -X PATCH \
  "https://$cluster_address/api/v1/vmware/config/cdp/set_preferred_cdp_network_protocol"
```

The Rubrik REST API server responds with the updated preferred CDP
network protocol.

```bash
{
  "preferredCdpNetworkProtocol": "IPv4"
}
```

## Migrate cluster associated with Rubrik Backup Service

See the
[host section](#section/Hosts/Migrate-cluster-associated-with-Rubrik-Backup-Service)
for more details. To migrate the primary cluster for the Rubrik Backup Service
on a virtual machine, send a POST request to
[`/vmware/vm/make_primary`](#operation/vmMakePrimary).

```bash
curl -X POST \
  -d '{
    "ids": [
      "$vm_id1",
      ...
    ] }' \
  "https://$cluster_address/api/v1/vmware/vm/make_primary"
```

The Rubrik REST API server initiates the asynchronous request task and responds
with a task object.

```bash
{
  "id": "$request_id",
  "status": "RUNNING",
  "error": "None",
  "progress": "$request_progress"
  "links": [
    {
      href: "https://$cluster_address/api/v1/vmware/vm/request/$request_id",
      rel: "self"
    }
  ]
}
```

### Get VMware Networks for virtual machine recovery

To get all the available VMware networks for the specified compute resource,
send a GET request to
[`/vmware/config/recovery/networks`](#operation/getVmwareRecoveryNetworks).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/vmware/config/recovery/networks"
```

The Rubrik REST API server returns a collection of all the available
recovery networks `VmwareNetworkInfo` for the compute resource specified by
the `compute_resource_id` parameter.

```bash
{
  "hasMore": true,
  "data": [
    {
      "computeResourceId": string,
      "computeResourceType": string,
    },
  ],
  "total": 1,
}
```

# Legal Hold

### Get summary of snapshots which are placed under legal hold
Send a GET request to [`/legal_hold/snapshot`](#operation/queryLegalHold).

```bash
curl -X GET "https://$cluster_address/api/v1/legal_hold/snapshot"
```

```bash
{
  "data": [
    {
      "objectId": "$object_id",
      "objectName": "$object_name",
      "objectType": "$object_type",
      "snapshotId": "$snapshot_id",
      "snapshotTime": "2019-11-12T10:35:12.784Z",
      "placeOnHoldTime": "2019-11-13T11:11:06.456Z",
      "locationsPresent": [
        "$location1_id",
        "$location2_id"
      ],
      "isOnDemandSnapshot": true
    }
  ],
  "hasMore": false,
  "total": 1
}
```

### Place a snapshot on legal hold
To place a snapshot under legal hold, send a POST request to [`/legal_hold/snapshot`](#operation/applyLegalHold).

```bash
curl -X POST \
  -d '{ "snapshotId": "$snapshot_id", "holdConfig": {"isHoldInPlace": true} }' \
   "https://$cluster_address/api/v1/legal_hold/snapshot"
```

The rubrik REST API server responds with the legal hold summary object if request succeeds.

```bash
{
  "objectId": "$object_id",
  "objectName": "$object_name",
  "objectType": "$object_type",
  "snapshotId": "$snapshot_id",
  "snapshotTime": "2019-11-12T10:35:12.784Z",
  "placeOnHoldTime": "2019-11-13T11:11:06.456Z",
  "locationsPresent": [
    "$location1_id",
    "$location2_id"
  ],
  "isOnDemandSnapshot": true
}
```

### Get objects which are part of legal hold
Send a GET request to [`/legal_hold/object`](#operation/getLegalHoldObjects) to retrieve a list of objects with snapshots that are under a legal hold.

```bash
curl -X GET "https://$cluster_address/api/v1/legal_hold/object"
```

```bash
{
  "data": [
    {
      "objectId": "$object_id",
      "objectName": "$object_name",
      "objectType": "$object_type",
      "numberOfSnapshotsHeld": 1
    }
  ],
  "hasMore": false,
  "total": 1
}
```

To return a list of the snapshots for a specific object that are under legal hold, send a GET request to [`/legal_hold/snapshot`](#operation/queryLegalHold) with the ID of the object in the object_id parameter.

```bash
curl -X GET "https://$cluster_address/api/v1/legal_hold/snapshot?object_id=$object_id"
```

```bash
{
  "data": [
    {
      "objectId": "$object_id",
      "objectName": "$object_name",
      "objectType": "$object_type",
      "snapshotId": "$snapshot_id",
      "snapshotTime": "2019-11-12T10:35:12.784Z",
      "placeOnHoldTime": "2019-11-13T11:11:06.456Z",
      "locationsPresent": "",
      "isOnDemandSnapshot": true
    }
  ],
  "hasMore": false,
  "total": 1
}
```

### Dissolve legal hold
To remove a legal hold from a collection of object snapshots, send a POST request to [`/legal_hold/object/{id}/dissolve`](#operation/dissolveLegalHoldSnapshots).

```bash
curl -X POST \
  -d '{ "snapshotIds": ["$snapshot_id"] }' \
  "https://$cluster_address/api/v1/legal_hold/object/$object_id/dissolve"
```

The Rubrik REST API server responds with the list of snapshots on which legal hold has been dissolved.

```bash
{
  "dissolvedSnapshotIds": [
    "$snapshot_id"
  ]
}
```

# Cloud Utilization

Rubrik clusters can utilize the cloud for storage and compute for
snapshot archival and data consolidation on archival locations.

## Forecasting cloud utilization

To forecast the cloud utilization according to specified SLA domain
parameters, send a POST request to:
[`/cloud_utilization/cloud_out_forecast`](#operation/doCloudOutForecast).

**Example:** Forecasting cloud utilization

```bash
curl -X POST -d '{
  "cloudOutForecastRequest": {
    "slaParameters": {
      "frequencies": {
        "monthly": {
          "frequency": 1,
          "retention": 12
        },
        "yearly": {
          "frequency": 1,
          "retention": 2
        }
      },
      "archivalSpecs": {
        "locationId": "75892476-c158-45fb-8ea9-365c634da294",
        "archivalThreshold": 1
      }
    },
    "consolidationFilter": "ForecastWithConsolidation",
    "granularity": Year,
    "forecastPeriodInGranularityUnit": 3
  }
}' "https://$cluster_address/api/v1/cloud_utilization/cloud_out_forecast"
```

The response gives the forecast result summary.

```bash
{
  "assumptions": {
    "logicalDataSizeInGB": 1000.0,
    "annualGrowthRateInPercent": 7.0,
    "compressionFactor": 2.5,
    "frequencyChangeRates": {
      "monthlyChangeRateInPercent": 10.0,
      "yearlyChangeRateInPercent": 30.0
    }
  },
  "locationForecast": {
    "locationName": "S3:s3-location-name",
    "locationType": "S3",
    "locationRegion": "us-west-2",
    "instanceType": "m5.2xlarge",
    "storageForecast": {
      "forecastWithConsolidation": {
        "storageUsedInGB": [1000, 1100, 1105],
        "storageCostInUSD": [276, 304, 305],
        "dataRetrievalCostInUSD": [0, 0, 0],
        "perStorageClassForecast": [
          {
            "storageClass": "STANDARD",
            "storageUsedInGB": [900, 1150, 1450],
            "storageCostInUSD": [176, 304, 376]
          }
        ]
      }
    },
    "computeForecast": {
      "forecastWithConsolidation": {
        "computeDurationInHrs": [0, 11, 12],
        "computeCostInUSD": [0, 8, 9]
      }
    }
  }
}
```

# User-defined tag

Rubrik CDM clusters can manage user-defined tags attached to the compute resources created by CloudOn and CloudOut.

Resource tags are associated with a cloud archival location, such as AWS or Azure. Rubrik CDM allows a maximum of 10 resource tags for each archival location. Check with the cloud provider for additional restrictions on resource tags.

If a compute resource supports tagging during creation by the cloud provider, user-defined resource tags are attached at resource creation time. Otherwise, user-defined resource tags are attached to the compute resource after creation.

* Compute Instances: Bolt, Converter, Transient instances, Converted Instances
* Disks/Snapshots: EBS Volumes/Snapshots, Managed Disks/Snapshot
* Images: AMIs, Images

## Query existing user-defined tags on a CDM cluster

To query existing user-defined tags on a CDM cluster, send a GET request to the
[`/user_defined_tag`](#operation/queryUserDefinedTag) endpoint.

**Example:** Query existing user-defined tags on a CDM cluster

```bash
curl -X GET "https://$cluster_address/api/v1/user_defined_tag"
```

```json
{
        "resourceTags": [{
                "id": "38400000-8cf0-11bd-b23e-10b96e4ef00d",
                "key": "department",
                "value": "engineering",
                "lastUpdateTime": "2021-01-31T11:54:24 UTC",
                "scopeRefId": "a0ef0663-7a7c-4027-9972-061780e52fee"
        }]
}
```

## Create a new user-defined tag on a CDM cluster

To create a new user-defined tag on a CDM cluster, send a POST request to the
[`/user_defined_tag`](#operation/createUserDefinedTag) endpoint.

**Example:** Create a new user-defined tags on a CDM cluster

```bash
curl -X POST \
  -d '{
          "key": "department",
          "value": "engineering",
          "scopeRefId": "a0ef0663-7a7c-4027-9972-061780e52fee"
    }' \
  "https://$cluster_address/api/v1/user_defined_tag"
```

```json
{
        "id": "38400000-8cf0-11bd-b23e-10b96e4ef00d",
        "key": "department",
        "value": "engineering",
        "lastUpdateTime": "2021-01-31T11:54:24 UTC",
        "scopeRefId": "a0ef0663-7a7c-4027-9972-061780e52fee"
}
```

## Delete existing user-defined tags on a CDM cluster

To delete existing user-defined tags on a CDM cluster, send a DELETE request to the
[`/user_defined_tag`](#operation/deleteUserDefinedTagBulk) endpoint.

**Example:** Delete existing user-defined tags on a CDM cluster

```bash
curl -X DELETE "https://$cluster_address/api/v1/user_defined_tag?ids=$id"
```

```json
{
        "ids": ["38400000-8cf0-11bd-b23e-10b96e4ef00d"]
}
```

## Get information about a user-defined tag on a CDM cluster

To fetch an existing user-defined tag on a CDM cluster, send a GET request to the
[`/user_defined_tag/{id}`](#operation/getUserDefinedTag) endpoint.

**Example:** To fetch an existing user-defined tag on a CDM cluster

```bash
curl -X GET "https://$cluster_address/api/v1/user_defined_tag/$id"
```

```json
{
        "id": "38400000-8cf0-11bd-b23e-10b96e4ef00d",
        "key": "department",
        "value": "engineering",
        "lastUpdateTime": "2021-01-31T11:54:24 UTC",
        "scopeRefId": "a0ef0663-7a7c-4027-9972-061780e52fee"
}
```

## Update information about an existing user-defined tag on a CDM cluster

To update an existing user-defined tag on a CDM cluster, send a PATCH request to the
[`/user_defined_tag/{id}`](#operation/updateUserDefinedTag) endpoint.

**Example:** To update an existing user-defined tag on a CDM cluster

```bash
curl -X PATCH \
 -d '{"value": "engineering"}' \
 "https://$cluster_address/api/v1/user_defined_tag/$id"
```
```json
{
        "id": "38400000-8cf0-11bd-b23e-10b96e4ef00d",
        "key": "department",
        "value": "engineering",
        "lastUpdateTime": "2021-01-31T11:54:24 UTC",
        "scopeRefId": "a0ef0663-7a7c-4027-9972-061780e52fee"
}
```

## Delete a existing user-defined tag on a CDM cluster

To delete an existing user-defined tag on a CDM cluster, send a DELETE request to the
[`/user_defined_tag/{id}`](#operation/deleteUserDefinedTag) endpoint.

**Example:** To delete an existing user-defined tag on a CDM cluster

```bash
curl -X DELETE "https://$cluster_address/api/v1/user_defined_tag/$id"
```



# Hosts

Rubrik clusters can protect file system data and application data through direct interaction with a host operating system. This method of protection does not require a virtual environment API. Instead, the Rubrik cluster works with the Rubrik Backup Service software that is running on supported Linux hosts and Windows hosts.

In some situations, the Rubrik cluster can directly interact with hosts without the Rubrik Backup Service, for example when providing protection of data on a network share.

## Rubrik Backup Service

The Rubrik Backup Service software must be installed on a host to enable file system level protection and direct protection of supported applications. The Rubrik Backup Service software is signed by a specific Rubrik cluster and can only be used with that Rubrik cluster.

The following URLs provide access to the Rubrik Backup Service software on a Rubrik cluster:
* Linux: https://$cluster_address/connector/rubrik-agent.x86_64.rpm
* Windows: https://$cluster_address/connector/RubrikBackupService.zip

**IMPORTANT:** The Rubrik User Guide describes how to install the Rubrik Backup Service software, and lists the permissions and settings that are required to allow the Rubrik Backup Service to provide support for specific operating systems, applications, and clusters.

## Registering a host
After installing the Rubrik Backup Service on a host, register the host with the Rubrik cluster. Registering initiates secure communication between the Rubrik cluster and the Rubrik Backup Service on the host. After a host is registered, the Rubrik Backup Service on the host sends detailed information about the host to the Rubrik cluster.

The Rubrik Backup Service scans a registered host for protectable objects, such as: applications, databases, and Windows clusters. The Rubrik Backup Service sends the results of the scan to the Rubrik cluster.

To register a host, send a POST request to [`/host`](#operation/registerHost) and include `hostname: $hostname`. The `$hostname` value must be the IPv4 address of the host or the resolvable hostname of the host.

```bash
curl -X POST \
  -d '{
    "hostname": "$hostname" }' \
  "https://$cluster_address/api/v1/host"
```

To register the host and discover protection points of the host in the background, send a POST request to [`/host/background`](#operation/registerHostAsync) and include `hostname: $hostname`. The`$hostname` value must be the IPv4 address of the host or the resolvable hostname of the host.

```bash
curl -X POST \
  -d '{
    "hostname": "$hostname" }' \
  "https://$cluster_address/api/v1/host/background"
```
The Rubrik REST API server responds with the details for the host, including the connection status.

```bash
{
  "id": "$host_id",
  "name": "$hostname",
  "hostname": "$hostname", (deprecated)
  "primaryClusterId": "$cluster_id",
  "agentId": "$agent_id",
  "operatingSystem": "$os_version",
  "operatingSystemType": "$os_type",
  "status": "Connected",
  "compressionEnabled": false
}
```

To register bulk hosts in the background, send a POST request to [`/host/bulk_background`](#operation/bulkRegisterHostAsync) and include `hostname: $hostname`. The`$hostname` value must be the IPv4 address of the host or the resolvable hostname of the host.

```
curl -X POST \
  -d '{
    [{"hostname": "$hostname1"}, {"hostname": "$hostname2"}] }' \
  "https://$cluster_address/api/v1/host/bulk_background"
```

The `status` field in the response is returned as `Refreshing` until the host has finished discovering all the mssql instances, oracle DBs, etc. After this step, status is returned as `Connected` and all discovery is done for the host

For background hosts, the connection status is returned as `Refreshing` until the host is fully registered. After this step, that status is returned as `Connected` and all discovery is done for the host

## Retrieving host information

To retrieve a current list of the hosts that are registered with a Rubrik cluster, send a GET request to [`/host`](#operation/queryHost).

```bash
curl -X GET "https://$cluster_address/api/v1/host"
```

The Rubrik REST API server responds with a ListResponse object that contains the first page of the current list.

```bash
{
  "hasMore": false,
  "data": [
    {
      "id": "$host_id0",
      "name": "$hostname0",
      "hostname": "$hostname0", (deprecated)
      "primaryClusterId": "$cluster_id",
      "operatingSystem": "$os_version0",
      "operatingSystemType": "$os_type0",
      "status": "Connected"
    },
    {
      "id": "$host_id1",
      "name": "$hostname1",
      "hostname": "$hostname1", (deprecated)
      "primaryClusterId": "$cluster_id",
      "operatingSystem": "$os_version1",
      "operatingSystemType": "$os_type1",
      "status": "Connected"
    }
  ],
  "total": 2
}
```
Depending on the number of registered hosts, the complete list of registered hosts may not be included on the first page. [Working with lists](#section/Overview/Working-with-lists) describes how to work with a ListResponse object to obtain additional pages of the list.


To retrieve the details for a specified host, send a GET request to [`/host/{id}`](#operation/getHost).

Adding a host will cause Rubrik to communicate with the remote Rubrik agent and get detailed information about the host.

```bash
curl -X GET "https://$cluster_address/api/v1/host/$host_id0"
```
The Rubrik REST API server responds with the details of the specified host.

```bash
  {
    "id": "$host_id0",
    "name": "$hostname0",
    "hostname": "$hostname0", (deprecated)
    "primaryClusterId": "$cluster_id",
    "agentId": "$agent_id",
    "operatingSystem": "$os_version0",
    "operatingSystemType": "$os_type0",
    "status": "Connected",
    "compressionEnabled": false
  }
```

## Adding a host without the Rubrik Backup Service

A host without the Rubrik Backup Service can be added by setting the `hasAgent` flag to `false`. This can be used to register a host that will be accessed through network shares.

```bash
curl -X POST \
  -d '{ \
    "hostname": "$hostname",
    "hasAgent": "false" }' \
  "https://$cluster_address/api/v1/host"
```

## Modifying a registered host

To change the FQDN or IPv4 address that the Rubrik cluster uses to connect with a registered host, send a PATCH request to [`/host`](#operation/updateHost). Use the value of `hostname` to specify the new FQDN or IPv4 address of the host. Optionally, also use this PATCH request to specify whether to compress the data that is transmitted to and from the host. Set the value of `compressionEnabled` to `true` to enable compression or set the value to `false` to turn compression off.


```bash
curl -X POST \
  -d '{
    "hostname": "$hostname",
    "compressionEnabled": true }' \
  "https://$cluster_address/api/v1/host/$host_id"
```

The Rubrik REST API server responds with a confirmation of the new details of the registered host.

```bash
 {
  "id": "$host_id",
  "name": "$hostname",
  "hostname": "$hostname", (deprecated)
  "primaryClusterId": "$cluster_id",
  "agentId": "$agent_id",
  "operatingSystem": "$os_version",
  "operatingSystemType": "$os_type",
  "status": "Connected",
  "compressionEnabled": true
 }
```
## Removing a host

Remove a host from the Rubrik cluster when the host no longer requires protection. The Rubrik cluster moves all of the unexpired backups for the host filesets of the host to Unmanaged Objects.

To remove a host send a DELETE request to [`/host/{id}`](#operation/deleteHost).

```bash
curl -X DELETE \
  "https://$cluster_address/api/v1/host/$host_id"
```

The Rubrik REST API server responds with HTTP response code 204. This indicates the request succeeded and the response body is empty.

## Refreshing a Host

Refresh a host when changes made on the host do not appear in the
Rubrik web UI. The refresh requests updated information from the
Rubrik Backup Service that is running on the host.

To refresh a host send a POST request to
[`/host/{id}/refresh`](#operation/refreshHost)

```bash
curl -X POST \
  "https://$cluster_address/api/v1/host/$host_id/refresh"
```

The Rubrik REST API server responds with HTTP response code 200 and
includes the updated properties of the host object in the response body.

## Updating a Host Certificate

When a host has a new certificate that is not registered with Rubrik
the Rubrik cluster will not communicate with that host until the
certificate is updated. In order to do that send a PUT request to
[`/host/certificate/{id}`](#operation/updateCertificateHost)

```bash
curl -X PUT \
  "https://$cluster_address/api/v1/host/certificate/$host_id"
```

The Rubrik REST API server responds with the details of the specified host.

## Migrate cluster associated with Rubrik Backup Service

Hosts can register with multiple clusters but can only communicate or back up to
a single cluster. Such a cluster is the primary cluster for that host. See the
Multicluster Rubrik Backup Service section of the Rubrik CDM User Guide for
details. To change the primary cluster to the current cluster, for Rubrik Backup
Service on a host, send a POST request to
[`/host/make_primary`](#operation/hostMakePrimary).

```bash
curl -X POST \
  -d '{
    "ids": [
      "$host_id1",
      ...
    ] }' \
  "https://$cluster_address/api/v1/host/make_primary"
```

The Rubrik REST API server initiates the asynchronous request task and responds
with a task object.

```bash
{
  "id": "$request_id",
  "status": "RUNNING",
  "error": "None",
  "progress": "$request_progress"
  "links": [
    {
      href: "https://$cluster_address/api/v1/vmware/vm/request/$request_id",
      rel: "self"
    }
  ]
}
```

To migrate the Rubrik Backup Service on a virtual machine, see the
[corresponding virtual machine API](#section/Virtual-machines/Migrate-cluster-associated-with-Rubrik-Backup-Service).

Alternatively, in a disaster recovery scenario, when migrating the primary
cluster for all hosts *and* virtual machines from an old cluster to this one,
send a POST request to [`/host/make_primary`](#operation/hostMakePrimary) with
oldPrimaryClusterUuid specified. Note that the hosts and virtual machines must
already have been registered on this cluster.

```bash
curl -X POST \
  -d '{
    "oldPrimaryClusterUuid": "12345678-90ab-cdef-1234-567890abcdef" }' \
  "https://$cluster_address/api/v1/host/make_primary"
```

## Windows Server Failover Clustering nodes

To begin working with Windows Server Failover Clustering (WSFC) clusters, register each WSFC node with the Rubrik cluster as described in [`Registering a host`](#section/Hosts/Registering-a-host). The scan performed by the Rubrik Backup Service on each WSFC node detects the WSFC cluster and provides information about the WSFC cluster to the Rubrik cluster.

To view WSFC cluster information, send a GET request to [`/windows_cluster`](#operation/queryWindowsCluster).

**Note:** The variable `$cluster_address` refers to the FQDN or IPv4 address of the Rubrik cluster.

```bash
curl -X GET "https://$cluster_address/api/v1/windows_cluster"
```
The Rubrik REST API server responds with a ListResponse object that contains the first page of the list of WSFC clusters.

```bash
{
  "hasMore": false,
  "data": [
    {
      "id": "$wsfc_id",
      "name": "$wsfc_name",
      "fqdn": "$wsfc_fqdn",
      "hostIds": [
        "$wsfc_node_id0",
        "$wsfc_node_id1"
      ],
      "primaryClusterId": "$cluster_id"
    }
  ],
  "total": 1
}
```

To retrieve detailed information about a WSFC cluster, send a GET request to: [`/windows_cluster/{id}`](#operation/getWindowsCluster), where `$cluster_id` is the `id` of the WSFC cluster.


```bash
curl -X GET "https://$cluster_address/api/v1/windows_cluster/$cluster_id"
```

The Rubrik REST API server responds with the details for the specified WSFC cluster.

```bash
{
  "name": "$wsfc_name",
  "id": "$wsfc_id",
  "naturalId": "$cluster_natural_id",
  "hostIds": [
  "$wsfc_node_id0",
  "$wsfc_node_id1"
  ],
  "fqdn": "$wsfc_fqdn",
  "primaryClusterId": "$cluster_id"
}
```

## Bulk Update Host Shares

To update a list of Host shares in bulk, send a PATCH request to the [`/host/share/bulk`](#operation/bulkUpdateHostShare) endpoint with a bulk_update_properties to complete an update.

```bash
curl -X PATCH \
  -d '[
    {
      "shareId": "$share_id",
      "updateProperties": {
        "exportPoint": "$export_point",
        "username": "$username",
        "password": "$password",
        "domain": "$domain",
        "hostShareParameters": {
          "isNetAppSnapDiffEnabled": true,
          "isIsilonChangelistEnabled": true
        }
      }
    }
  ]' \
  "https://$cluster_address/api/v1/host/share/bulk"
```

The Rubrik REST API server responds with the details of the updated Host shares.

## Discover shares on NAS host

To retrieve a current list of shares (NFS/SMB) on a specific NAS host,
send a GET request to [`/host/{id}/nas_share_discover`](#operation/discoverNasShares)

```bash
curl -X GET "https://$cluster_address/api/v1/host/{id}/nas_share_discover"
```

The Rubrik REST API server responds with a List object that contains all
discovered shares on the NAS host.

```bash
{
  [
    {
      "shareType": "NFS",
      "exportPoint": "/ifs/data/dir1",
    },
    {
      "shareType": "SMB",
      "exportPoint": "ifs_data",
    }
  ]
}
```

## Bulk add NAS shares

To add NAS shares in bulk without validating their share credentials, send a
POST request to [`/host/share/bulk`](#operation/bulkAddHostShares)

```bash
curl -X POST \
  -d '{ \
    [ \
      { \
        "shareType": "$share_type", \
        "exportPoint": "$export_point" \
      },
      { \
        "shareType": "$share_type", \
        "exportPoint": "$export_point" \
      }, \
    ] \
  }' \
  "https://$cluster_address/api/v1/host/share/bulk"
```

The Rubrik REST API server responds with details of added shares.

## Getting a list of volumes on a Volume Group host

To retrieve a list of all volumes on a Volume Group host, send a GET
request to [`/host/{id}/volume`](#operation/queryHostVolume)

```bash
curl -X GET "https://$cluster_address/api/v1/host/{id}/volume"
```

The Rubrik REST API server responds with summary information for each
volume on the specified Volume Group host.

```
{
  "hasMore": true,
  "data": [
    {
      "id": "string",
      "fileSystemType": "NTFS",
      "mountPoints": [
        "string"
      ],
      "size": 0,
      "naturalId": "string",
      "volumeGroupId": "string",
      "isCurrentlyPresentOnSystem": true
    }
  ],
  "total": 0
}
```

## Remote RBS management
The Rubrik Backup Service (RBS) management endpoints provide the capability to install/uninstall/upgrade RBS on remote hosts.

### Retrieving the Rubrik Backup Service host information

To get the Rubrik Backup Service host information, send a GET request to [`/host/rbs`](#operation/getRbsHostInfo).

```bash
curl -X GET \
  -d '{
    "name": "$hostname",
    "username": "$username",
    "password": "$password",
    "operationTimeout": 600 }' \
  "https://$cluster_address/api/v1/host/rbs"
```


The Rubrik REST API server responds with summary information for Rubrik Backup Service host.

```
{
  "name": "$hostname",
  "agentId": "$rbsAgentId",
  "agentVersion": "$rbsVersion",
  "osInfo": "$osInfo",
  "osType": "$osType",
  "status": "Installed"
}
```

### Installing Rubrik Backup Service on a host

To install Rubrik Backup Service on a host, send a POST request to [`/host/rbs/install`](#operation/rbsInstall).

Install Rubrik Backup Service on a host with operationMode as Synchronous.
```bash
curl -X POST \
  -d '{
    "name": "$hostname",
    "username": "$username",
    "password": "$password",
    "operationTimeout": 600,
    "operationMode": Synchronous }' \
  "https://$cluster_address/api/v1/host/rbs/install"
```

The Rubrik REST API server responds with the summary of Rubrik Backup Service on the host.
```bash
{
  "rbsHostSummary": {
    "name": "$hostname",
    "agentId": "$rbsAgentId",
    "agentVersion": "$rbsVersion",
    "osInfo": "$osInfo",
    "osType": "$osType",
    "status": "Installed"
  }
}
```

Install Rubrik Backup Service on a host with operationMode as Asynchronous.
```bash
curl -X POST \
  -d '{
    "name": "$hostname",
    "username": "$username",
    "password": "$password",
    "operationTimeout": 600,
    "operationMode": Asynchronous }' \
  "https://$cluster_address/api/v1/host/rbs/install"
```

The Rubrik REST API server initiates the asynchronous task and responds
with a task object.

```bash
{
  "asyncRequestStatus": {
    "id": "$id",
    "status": "$status",
    "progress": 0,
    "startTime": "2021-03-24T23:27:41.493Z",
    "endTime": "2021-03-24T23:27:41.493Z",
    "nodeId": "$nodeId",
    "error": {
      "message": "$message"
    },
    "links": [
      {
        "href": "$href",
        "rel": "$rel"
      }
    ]
  }
}
```

### Uninstalling Rubrik Backup Service from a host

To uninstall Rubrik Backup Service from a host, send a POST request to [`/host/rbs/uninstall`](#operation/rbsUninstall).

Uninstall Rubrik Backup Service from a host with operationMode as Synchronous.
```bash
curl -X POST \
  -d '{
    "name": "$hostname",
    "username": "$username",
    "password": "$password",
    "operationTimeout": 600,
    "operationMode": Synchronous }' \
  "https://$cluster_address/api/v1/host/rbs/uninstall"
```

The Rubrik REST API server responds with the summary of Rubrik Backup Service on the host.
```bash
{
  "rbsHostSummary": {
    "name": "$hostname",
    "status": "NotInstalled"
  }
}
```

Uninstall Rubrik Backup Service from a host with operationMode as Asynchronous.
```bash
curl -X POST \
  -d '{
    "name": "$hostname",
    "username": "$username",
    "password": "$password",
    "operationTimeout": 600,
    "operationMode": Asynchronous }' \
  "https://$cluster_address/api/v1/host/rbs/uninstall"
```

The Rubrik REST API server initiates the asynchronous task and responds
with a task object.
```bash
{
  "asyncRequestStatus": {
    "id": "$id",
    "status": "$status",
    "progress": 0,
    "startTime": "2021-03-24T23:27:41.493Z",
    "endTime": "2021-03-24T23:27:41.493Z",
    "nodeId": "$nodeId",
    "error": {
      "message": "$message"
    },
    "links": [
      {
        "href": "$href",
        "rel": "$rel"
      }
    ]
  }
}

### Upgrading Rubrik Backup Service on a host

To upgrade Rubrik Backup Service on a host, send a POST request to [`/host/rbs/upgrade`](#operation/rbsUpgrade).

Upgrade Rubrik Backup Service on a host with operationMode as Synchronous.
```bash
curl -X POST \
  -d '{
    "name": "$hostname",
    "username": "$username",
    "password": "$password",
    "operationTimeout": 600,
    "operationMode": Synchronous }' \
  "https://$cluster_address/api/v1/host/rbs/upgrade"
```

The Rubrik REST API server responds with the summary of Rubrik Backup Service on the host.
```bash
{
  "rbsHostSummary": {
    "name": "$hostname",
    "agentId": "$rbsAgentId",
    "agentVersion": "$rbsVersion",
    "osInfo": "$osInfo",
    "osType": "$osType",
    "status": "Installed"
  }
}
```

Upgrade Rubrik Backup Service on a host with operationMode as Asynchronous.
```bash
curl -X POST \
  -d '{
    "name": "$hostname",
    "username": "$username",
    "password": "$password",
    "operationTimeout": 600,
    "operationMode": Asynchronous }' \
  "https://$cluster_address/api/v1/host/rbs/upgrade"
```

The Rubrik REST API server initiates the asynchronous task and responds
with a task object.

```bash
{
  "asyncRequestStatus": {
    "id": "$id",
    "status": "$status",
    "progress": 0,
    "startTime": "2021-03-24T23:27:41.493Z",
    "endTime": "2021-03-24T23:27:41.493Z",
    "nodeId": "$nodeId",
    "error": {
      "message": "$message"
    },
    "links": [
      {
        "href": "$href",
        "rel": "$rel"
      }
    ]
  }
}
```

# Failover cluster

This REST API is used to manage failover cluster objects of UnixLike hosts.

### Add a new failover cluster
Add a new failover cluster by making a POST call to
[/failover_cluster](#operation/createFailoverCluster).

```bash
curl -X POST \
  -d '{
    "name": "$name",
    "hostIds": [ "$hostId" ],
    "configuredSlaDomainId": "$configuredSlaDomainId"}'\
  "https://$cluster_address/api/v1/failover_cluster"
```

```bash
{
  "id": "$id",
  "name": "$name",
  "configuredSlaDomainId": "$configuredSlaDomainId",
  "configuredSlaDomainName": "$configuredSlaDomainName",
  "configuredSlaDomainType": "ProtectionSla",
  "primaryClusterId": "$primaryClusterId",
  "isConfiguredSlaDomainRetentionLocked": true,
  "slaLastUpdateTime": "2020-04-20T17:30:30.743Z",
  "effectiveSlaDomainId": "$effectiveSlaDomainId",
  "effectiveSlaDomainName": "$effectiveSlaDomainName",
  "isEffectiveSlaDomainRetentionLocked": true,
  "effectiveSlaDomainPolarisManagedId": "$effectiveSlaDomainPolarisManagedId",
  "effectiveSlaSourceObjectId": "$effectiveSlaSourceObjectId",
  "effectiveSlaSourceObjectName": "$effectiveSlaSourceObjectName",
  "nodes": [
    {
      "id": "$id",
      "name": "$name",
      "connectionStatus": "Connected",
      "operatingSystem": "$operatingSystem"
    }
  ],
  "connectionStatus": "Connected",
  "slaAssignment": "Derived",
  "operatingSystemType": "$operatingSystemType",
  "numNodes": $numNodes,
  "numApps": 0
}

```

### Get all failover clusters
Get a listing of all failover clusters using
a GET request to [/failover_cluster](#operation/queryFailoverCluster).

```bash
curl -X GET "https://$cluster_address/api/v1/failover_cluster?sort_order=asc"
```

```bash
{
  "hasMore": false,
  "data": [
    {
      "id": "$id",
      "name": "$name",
      "configuredSlaDomainId": "$configuredSlaDomainId",
      "configuredSlaDomainName": "$configuredSlaDomainName",
      "configuredSlaDomainType": "ProtectionSla",
      "primaryClusterId": "$primaryClusterId",
      "isConfiguredSlaDomainRetentionLocked": false,
      "effectiveSlaDomainId": "$effectiveSlaDomainId",
      "effectiveSlaDomainName": "$effectiveSlaDomainName",
      "isEffectiveSlaDomainRetentionLocked": false,
      "effectiveSlaSourceObjectId": "$effectiveSlaSourceObjectId",
      "nodes": [
        {
          "id": "$id",
          "name": "$name",
          "connectionStatus": "Connected",
          "operatingSystem": "$operatingSystem"
        },
        {
          "id": "$id",
          "name": "$name",
          "connectionStatus": "Connected",
          "operatingSystem": "$operatingSystem"
        }
      ],
      "connectionStatus": "Connected",
      "slaAssignment": "$slaAssignment",
      "operatingSystemType": "$operatingSystemType"
    }
  ],
  "total": 1
}
```

### Get information about a specific failover cluster
Get information about a specific failover cluster using
a GET request to
[/failover_cluster/{id}](#operation/getFailoverCluster).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/failover_cluster/$failover_cluster_id"
```

```bash
{
  "id": "$id",
  "name": "$name",
  "configuredSlaDomainId": "$configuredSlaDomainId",
  "configuredSlaDomainName": "$configuredSlaDomainName",
  "configuredSlaDomainType": "ProtectionSla",
  "primaryClusterId": "$primaryClusterId",
  "isConfiguredSlaDomainRetentionLocked": false,
  "effectiveSlaDomainId": "$effectiveSlaDomainId",
  "effectiveSlaDomainName": "$effectiveSlaDomainName",
  "isEffectiveSlaDomainRetentionLocked": false,
  "effectiveSlaSourceObjectId": "$effectiveSlaSourceObjectId",
  "nodes": [
    {
      "id": "$id",
      "name": "$name",
      "connectionStatus": "Connected",
      "operatingSystem": "$operatingSystem"
    },
    {
      "id": "$id",
      "name": "$name",
      "connectionStatus": "Connected",
      "operatingSystem": "$operatingSystem"
    }
  ],
  "connectionStatus": "Connected",
  "slaAssignment": "$slaAssignment",
  "operatingSystemType": "$operatingSystemType",
  "numNodes": $numNodes,
  "numApps": $numApps
}
```

### Update the parameters of an existing failover cluster
The parameters associated with the failover cluster can be updated by
making a PATCH request to
[/failover_cluster/{id}](#operation/updateFailoverCluster)

```bash
curl -X PATCH \
  -d '{
    "name": "$name",
    "hostIds": [ "$hostId" ],
    "configuredSlaDomainId": "$configuredSlaDomainId"}'\
  "https://$cluster_address/api/v1/failover_cluster/$failover_cluster_id"
```

```bash
{
  "id": "$id",
  "name": "$name",
  "configuredSlaDomainId": "$configuredSlaDomainId",
  "configuredSlaDomainName": "$configuredSlaDomainName",
  "configuredSlaDomainType": "ProtectionSla",
  "primaryClusterId": "$primaryClusterId",
  "isConfiguredSlaDomainRetentionLocked": true,
  "slaLastUpdateTime": "2020-04-20T18:26:56.893Z",
  "effectiveSlaDomainId": "$effectiveSlaDomainId",
  "effectiveSlaDomainName": "$effectiveSlaDomainName",
  "isEffectiveSlaDomainRetentionLocked": true,
  "effectiveSlaDomainPolarisManagedId": "$effectiveSlaDomainPolarisManagedId",
  "effectiveSlaSourceObjectId": "$effectiveSlaSourceObjectId",
  "effectiveSlaSourceObjectName": "$effectiveSlaSourceObjectName",
  "nodes": [
    {
      "id": "$id",
      "name": "$name",
      "connectionStatus": "Connected",
      "operatingSystem": "$operatingSystem"
    }
  ],
  "connectionStatus": "Connected",
  "slaAssignment": "Derived",
  "operatingSystemType": "$operatingSystemType",
  "numNodes": $numNodes,
  "numApps": $numApps
}
```

### Delete a specific failover cluster
Any failover cluster can be removed by issuing a DELETE request to
[/failover_cluster/{id}](#operation/deleteFailoverCluster).

```bash
curl -X DELETE \
  "https://$cluster_address/api/v1/failover_cluster/$failover_cluster_id?preserve_snapshots=false"
```

### Bulk delete a failover cluster
A list of failover clusters can be removed by issuing a DELETE request to
[/failover_cluster/bulk](#operation/bulkDeleteFailoverCluster).

```bash
curl -X DELETE \
  "https://$cluster_address/api/v1/failover_cluster/bulk?ids=$failover_cluster_id1,$failover_cluster_id2&preserve_snapshots=false"
```

# Failover cluster App

Use this REST API to manage failover cluster app objects.

### Add a new failover cluster app
Add a new failover cluster app by making a POST call to
[/failover_cluster/failover_cluster_app](#operation/createFailoverClusterApp).

Use either the virtualIps or nodeOrders options in the failoverClusterAppSource request parameter to create a failover cluster app.

```bash
curl -X POST \
  -d '{
    "name": "$name",
    "failoverClusterType": "Windows",
    "failoverClusterId": "$failoverClusterId",
    "failoverClusterAppSource": {
      "virtualIps": [
        "$virtualIp"
      ],
      "nodeOrders": [
        {
          "nodeId": "$nodeId",
          "nodeName": "$nodeName",
          "order": 0
        }
      ]
    },
    "configuredSlaDomainId": "string"}'\
  "https://$cluster_address/api/v1/failover_cluster/failover_cluster_app"
```

Response when a failover cluster app is created using the virtualIps option in the failoverClusterAppSource request parameter.

```bash
{
  "id": "$id",
  "name": "$name",
  "configuredSlaDomainId": "$configuredSlaDomainId",
  "configuredSlaDomainName": "$configuredSlaDomainName",
  "configuredSlaDomainType": "ProtectionSla",
  "primaryClusterId": "$primaryClusterId",
  "isConfiguredSlaDomainRetentionLocked": true,
  "slaLastUpdateTime": "2020-04-21T17:32:44.266Z",
  "effectiveSlaDomainId": "$effectiveSlaDomainId",
  "effectiveSlaDomainName": "$effectiveSlaDomainName",
  "isEffectiveSlaDomainRetentionLocked": true,
  "effectiveSlaDomainPolarisManagedId": "$effectiveSlaDomainPolarisManagedId",
  "effectiveSlaSourceObjectId": "$effectiveSlaSourceObjectId",
  "effectiveSlaSourceObjectName": "$effectiveSlaSourceObjectName",
  "failoverClusterType": "Windows",
  "failoverClusterId": "$failoverClusterId",
  "failoverClusterAppSource": {
    "virtualIps": [
      "$virtualIp"
    ]
  },
  "connectionStatus": "Connected",
  "slaAssignment": "Derived",
  "operatingSystemType": "$operatingSystemType",
  "failoverClusterName": "$failoverClusterName"
}
```

Response when a failover cluster app is created using the nodeOrders option in the failoverClusterAppSource request parameter.

```bash
{
  "id": "$id",
  "name": "$name",
  "configuredSlaDomainId": "$configuredSlaDomainId",
  "configuredSlaDomainName": "$configuredSlaDomainName",
  "configuredSlaDomainType": "ProtectionSla",
  "primaryClusterId": "$primaryClusterId",
  "isConfiguredSlaDomainRetentionLocked": true,
  "slaLastUpdateTime": "2020-04-21T17:32:44.266Z",
  "effectiveSlaDomainId": "$effectiveSlaDomainId",
  "effectiveSlaDomainName": "$effectiveSlaDomainName",
  "isEffectiveSlaDomainRetentionLocked": true,
  "effectiveSlaDomainPolarisManagedId": "$effectiveSlaDomainPolarisManagedId",
  "effectiveSlaSourceObjectId": "$effectiveSlaSourceObjectId",
  "effectiveSlaSourceObjectName": "$effectiveSlaSourceObjectName",
  "failoverClusterType": "Windows",
  "failoverClusterId": "$failoverClusterId",
  "failoverClusterAppSource": {
    "nodeOrders": [
      {
        "nodeId": "$nodeId",
        "nodeName": "$nodeName",
        "order": 0
      }
    ]
  },
  "connectionStatus": "Connected",
  "slaAssignment": "Derived",
  "operatingSystemType": "$operatingSystemType",
  "failoverClusterName": "$failoverClusterName"
}
```

### Get all failover cluster apps
Get a listing of all failover cluster apps using
a GET request to
[/failover_cluster/failover_cluster_app](#operation/queryFailoverClusterApp).

```bash
curl -X GET "https://$cluster_address/api/v1/failover_cluster/failover_cluster_app?sort_order=asc"
```

```bash
{
  "hasMore": false,
  "data": [
    {
      "id": "$id",
      "name": "$name",
      "configuredSlaDomainId": "$configuredSlaDomainId",
      "configuredSlaDomainName": "$configuredSlaDomainName",
      "configuredSlaDomainType": "ProtectionSla",
      "primaryClusterId": "$primaryClusterId",
      "isConfiguredSlaDomainRetentionLocked": false,
      "effectiveSlaDomainId": "$effectiveSlaDomainId",
      "effectiveSlaDomainName": "$effectiveSlaDomainName",
      "isEffectiveSlaDomainRetentionLocked": false,
      "effectiveSlaSourceObjectId": "$effectiveSlaSourceObjectId",
      "failoverClusterType": "UnixLike",
      "failoverClusterId": "$failoverClusterId",
      "failoverClusterAppSource": {
        "virtualIps": [
          "$virtualIp"
        ]
      },
      "connectionStatus": "Connected",
      "slaAssignment": "$slaAssignment",
      "operatingSystemType": "Linux",
      "failoverClusterName": "$failoverClusterName"
    }
  ],
  "total": 1
}
```


### Get information about a specific failover cluster app
Get information about a specific failover cluster app using
a GET request to
[/failover_cluster/failover_cluster_app/{id}](#operation/getFailoverClusterApp).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/failover_cluster/failover_cluster_app/$failover_cluster_app_id"
```

```bash
{
  "id": "$id",
  "name": "$name",
  "configuredSlaDomainId": "$configuredSlaDomainId",
  "configuredSlaDomainName": "$configuredSlaDomainName",
  "configuredSlaDomainType": "ProtectionSla",
  "primaryClusterId": "$primaryClusterId",
  "isConfiguredSlaDomainRetentionLocked": true,
  "slaLastUpdateTime": "2020-04-21T18:00:46.694Z",
  "effectiveSlaDomainId": "$effectiveSlaDomainId",
  "effectiveSlaDomainName": "$effectiveSlaDomainName",
  "isEffectiveSlaDomainRetentionLocked": true,
  "effectiveSlaDomainPolarisManagedId": "$effectiveSlaDomainPolarisManagedId",
  "effectiveSlaSourceObjectId": "$effectiveSlaSourceObjectId",
  "effectiveSlaSourceObjectName": "$effectiveSlaSourceObjectName",
  "failoverClusterType": "Windows",
  "failoverClusterId": "$failoverClusterId",
  "failoverClusterAppSource": {
    "virtualIps": [
      "$virtualIp"
    ],
  },
  "connectionStatus": "Connected",
  "slaAssignment": "Derived",
  "operatingSystemType": "$operatingSystemType",
  "failoverClusterName": "$failoverClusterName",
  "filesets": [
    {
      "configuredSlaDomainId": "$configuredSlaDomainId",
      "forceFull": true,
      "forceFullPartitionIds": [
        0
      ],
      "allowBackupNetworkMounts": true,
      "allowBackupHiddenFoldersInNetworkMounts": true,
      "useWindowsVss": true,
      "id": "$id",
      "name": "$name",
      "configuredSlaDomainName": "$configuredSlaDomainName",
      "configuredSlaDomainType": "ProtectionSla",
      "primaryClusterId": "$primaryClusterId",
      "isConfiguredSlaDomainRetentionLocked": true,
      "slaLastUpdateTime": "2020-04-21T18:00:46.694Z",
      "hostName": "$hostName",
      "templateId": "$templateId",
      "templateName": "$templateName",
      "operatingSystemType": "$operatingSystemType",
      "effectiveSlaDomainId": "$effectiveSlaDomainId",
      "isEffectiveSlaDomainRetentionLocked": true,
      "effectiveSlaDomainName": "$effectiveSlaDomainName",
      "effectiveSlaDomainPolarisManagedId": "$effectiveSlaDomainPolarisManagedId",
      "includes": [
        "$includes"
      ],
      "excludes": [
        "$excludes"
      ],
      "exceptions": [
        "$exceptions"
      ],
      "isRelic": true,
      "isPassthrough": true,
      "enableSymlinkResolution": true,
      "enableHardlinkSupport": true,
      "failoverClusterAppId": "$failoverClusterAppId",
      "failoverClusterAppName": "$failoverClusterAppName",
      "pendingSlaDomain": {
        "objectId": "$objectId",
        "pendingSlaDomainId": "$pendingSlaDomainId",
        "pendingSlaDomainName": "$pendingSlaDomainName",
        "isPendingSlaDomainRetentionLocked": true
      },
      "protectionDate": "2020-04-21T18:00:46.694Z",
      "snapshotCount": 0,
      "archivedSnapshotCount": 0,
      "snapshots": [
        {
          "id": "$id",
          "date": "2020-04-21T18:00:46.694Z",
          "expirationDate": "2020-04-21T18:00:46.694Z",
          "sourceObjectType": "$sourceObjectType",
          "isOnDemandSnapshot": true,
          "isCustomRetentionApplied": true,
          "cloudState": 0,
          "consistencyLevel": "$consistencyLevel",
          "indexState": 0,
          "replicationLocationIds": [
            "$replicationLocationIds"
          ],
          "archivalLocationIds": [
            "$archivalLocationIds"
          ],
          "slaId": "$slaId",
          "slaName": "$slaName",
          "isRetainedByRetentionLockSla": true,
          "cloudStorageTier": "Hot",
          "isPlacedOnLegalHold": true,
          "snapshotRetentionInfo": {
            "localInfo": {
              "id": "$id",
              "name": "$name",
              "isSnapshotPresent": true,
              "isExpirationDateCalculated": true,
              "expirationTime": "2020-04-21T18:00:46.694Z",
              "snapshotFrequency": "$snapshotFrequency",
              "isExpirationInformationUnavailable": true
            },
            "archivalInfos": [
              {
                "id": "$id",
                "name": "$name",
                "isSnapshotPresent": true,
                "isExpirationDateCalculated": true,
                "expirationTime": "2020-04-21T18:00:46.694Z",
                "snapshotFrequency": "$snapshotFrequency",
                "isExpirationInformationUnavailable": true
              }
            ],
            "replicationInfos": [
              {
                "id": "$id",
                "name": "$name",
                "isSnapshotPresent": true,
                "isExpirationDateCalculated": true,
                "expirationTime": "2020-04-21T18:00:46.694Z",
                "snapshotFrequency": "$snapshotFrequency",
                "isExpirationInformationUnavailable": true
              }
            ],
            "cloudNativeLocationInfo": [
              {
                "id": "$id",
                "name": "$name",
                "isSnapshotPresent": true,
                "isExpirationDateCalculated": true,
                "expirationTime": "2020-04-21T18:00:46.694Z",
                "snapshotFrequency": "$snapshotFrequency",
                "isExpirationInformationUnavailable": true
              }
            ]
          },
          "filesetName": "$filesetName",
          "fileCount": 0,
          "snapdiffUsed": true
        }
      ],
      "localStorage": 0,
      "archiveStorage": 0,
      "preBackupScript": "$preBackupScript",
      "postBackupScript": "$postBackupScript",
      "backupScriptTimeout": 0,
      "backupScriptErrorHandling": "$backupScriptErrorHandling"
    }
  ]
}
```

### Update the parameters of an existing failover cluster app
The parameters associated with the failover cluster app can be updated by
making a PATCH request to
[/failover_cluster/failover_cluster_app/{id}](#operation/updateFailoverClusterApp)

Use either the virtualIps or nodeOrders options in the failoverClusterAppSource request parameter to update a failover cluster app.

```bash
curl -X PATCH \
  -d '{
    "name": "$name",
    "failoverClusterType": "Windows",
    "failoverClusterId": "$failoverClusterId",
    "failoverClusterAppSource": {
      "virtualIps": [
        "$virtualIp"
      ],
      "nodeOrders": [
        {
          "nodeId": "$nodeId",
          "nodeName": "$nodeName",
          "order": 0
        }
      ]
    },
    "configuredSlaDomainId": "string"}'\
  "https://$cluster_address/api/v1/failover_cluster/failover_cluster_app/$failover_cluster_app_id"
```

Response when a failover cluster app is updated using the virtualIps option in the failoverClusterAppSource request parameter.

```bash
{
  "id": "$id",
  "name": "$name",
  "configuredSlaDomainId": "$configuredSlaDomainId",
  "configuredSlaDomainName": "$configuredSlaDomainName",
  "configuredSlaDomainType": "ProtectionSla",
  "primaryClusterId": "$primaryClusterId",
  "isConfiguredSlaDomainRetentionLocked": true,
  "slaLastUpdateTime": "2020-04-21T18:24:20.126Z",
  "effectiveSlaDomainId": "$effectiveSlaDomainId",
  "effectiveSlaDomainName": "$effectiveSlaDomainName",
  "isEffectiveSlaDomainRetentionLocked": true,
  "effectiveSlaDomainPolarisManagedId": "$effectiveSlaDomainPolarisManagedId",
  "effectiveSlaSourceObjectId": "$effectiveSlaSourceObjectId",
  "effectiveSlaSourceObjectName": "$effectiveSlaSourceObjectName",
  "failoverClusterType": "Windows",
  "failoverClusterId": "$failoverClusterId",
  "failoverClusterAppSource": {
    "virtualIps": [
      "$virtualIp"
    ],
  },
  "connectionStatus": "Connected",
  "slaAssignment": "Derived",
  "operatingSystemType": "$operatingSystemType",
  "failoverClusterName": "$failoverClusterName"
}
```

Response when a failover cluster app is updated using the nodeOrders option in the failoverClusterAppSource request parameter.

```bash
{
  "id": "$id",
  "name": "$name",
  "configuredSlaDomainId": "$configuredSlaDomainId",
  "configuredSlaDomainName": "$configuredSlaDomainName",
  "configuredSlaDomainType": "ProtectionSla",
  "primaryClusterId": "$primaryClusterId",
  "isConfiguredSlaDomainRetentionLocked": true,
  "slaLastUpdateTime": "2020-04-21T18:24:20.126Z",
  "effectiveSlaDomainId": "$effectiveSlaDomainId",
  "effectiveSlaDomainName": "$effectiveSlaDomainName",
  "isEffectiveSlaDomainRetentionLocked": true,
  "effectiveSlaDomainPolarisManagedId": "$effectiveSlaDomainPolarisManagedId",
  "effectiveSlaSourceObjectId": "$effectiveSlaSourceObjectId",
  "effectiveSlaSourceObjectName": "$effectiveSlaSourceObjectName",
  "failoverClusterType": "Windows",
  "failoverClusterId": "$failoverClusterId",
  "failoverClusterAppSource": {
    "nodeOrders": [
      {
        "nodeId": "$nodeId",
        "nodeName": "$nodeName",
        "order": 0
      }
    ]
  },
  "connectionStatus": "Connected",
  "slaAssignment": "Derived",
  "operatingSystemType": "$operatingSystemType",
  "failoverClusterName": "$failoverClusterName"
}
```

### Delete a specific failover cluster app
Remove any failover cluster app by issuing a DELETE request to
[/failover_cluster/failover_cluster_app/{id}](#operation/deleteFailoverClusterApp).

```bash
curl -X DELETE \
  "https://$cluster_address/api/v1/failover_cluster/failover_cluster_app/$failover_cluster_app_id?preserve_snapshots=false"
```

### Bulk delete a failover cluster apps
Specify a list of failover cluster applications to remove by issuing a DELETE
request to [/failover_cluster/failover_cluster_app//bulk](#operation/bulkDeleteFailoverClusterApp).

```bash
curl -X DELETE \
  "https://$cluster_address/api/v1/failover_cluster/failover_cluster_app/bulk?ids=$failover_cluster_app_id1,$failover_cluster_app_id2&preserve_snapshots=false"
```

# Failover cluster hierarchy

This REST API is used to get failover cluster hierarchy objects.

### Get summary of a hierarchy object
Get a summary of a hierarchy object by making a GET call to
[/failover_cluster/hierarchy/{id}](#operation/getFailoverClusterHierarchyObject).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/failover_cluster/hierarchy/$failover_cluster_app_id"
```

```bash
{
  "id": "$id",
  "name": "$name",
  "configuredSlaDomainId": "$configuredSlaDomainId",
  "configuredSlaDomainName": "$configuredSlaDomainName",
  "configuredSlaDomainType": "ProtectionSla",
  "primaryClusterId": "$primaryClusterId",
  "isConfiguredSlaDomainRetentionLocked": false,
  "effectiveSlaDomainId": "$effectiveSlaDomainId",
  "effectiveSlaDomainName": "$effectiveSlaDomainName",
  "isEffectiveSlaDomainRetentionLocked": false,
  "effectiveSlaSourceObjectId": "Global:::All",
  "objectType": "FailoverClusterApp",
  "descendentCount": {
    "failoverCluster": 0,
    "failoverClusterApp": 0,
    "fileset": 1
  },
  "isDeleted": false,
  "numNodes": 0,
  "failoverClusterType": "UnixLike",
  "failoverClusterAppConnectionStatus": "Connected",
  "failoverClusterAppName": "$failoverClusterAppName",
  "failoverClusterAppSource": {
    "virtualIps": [
      "$virtualIp"
    ]
  },
  "slaAssignment": "$slaAssignment",
  "filesets": [
    {
      "allowBackupNetworkMounts": false,
      "allowBackupHiddenFoldersInNetworkMounts": false,
      "useWindowsVss": false,
      "id": "$id",
      "name": "$name",
      "configuredSlaDomainId": "$configuredSlaDomainId",
      "configuredSlaDomainName": "$configuredSlaDomainName",
      "configuredSlaDomainType": "ProtectionSla",
      "primaryClusterId": "$primaryClusterId",
      "isConfiguredSlaDomainRetentionLocked": false,
      "hostName": "$hostName",
      "templateId": "$templateId",
      "templateName": "$templateName",
      "operatingSystemType": "UnixLike",
      "effectiveSlaDomainId": "$effectiveSlaDomainId",
      "isEffectiveSlaDomainRetentionLocked": false,
      "includes": [
        "$includes"
      ],
      "excludes": [],
      "exceptions": [],
      "isRelic": false,
      "isPassthrough": false,
      "enableSymlinkResolution": false,
      "enableHardlinkSupport": false,
      "failoverClusterAppId": "$failoverClusterAppId",
      "failoverClusterAppName": "$failoverClusterAppName"
    }
  ]
}
```

```bash
curl -X GET \
  "https://$cluster_address/api/v1/failover_cluster/hierarchy/$failover_cluster_id"
```

```bash
{
  "id": "$id",
  "name": "$name",
  "configuredSlaDomainId": "$configuredSlaDomainId",
  "configuredSlaDomainName": "$configuredSlaDomainName",
  "configuredSlaDomainType": "ProtectionSla",
  "primaryClusterId": "$primaryClusterId",
  "isConfiguredSlaDomainRetentionLocked": false,
  "effectiveSlaDomainId": "$effectiveSlaDomainId",
  "effectiveSlaDomainName": "$effectiveSlaDomainName",
  "isEffectiveSlaDomainRetentionLocked": false,
  "effectiveSlaSourceObjectId": "Global:::All",
  "objectType": "HostFailoverCluster",
  "descendentCount": {
    "failoverCluster": 0,
    "failoverClusterApp": 1,
    "fileset": 1
  },
  "isDeleted": false,
  "numNodes": 2,
  "nodes": [
    {
      "id": "$id",
      "name": "$name",
      "connectionStatus": "Connected",
      "operatingSystem": "$operatingSystem"
    },
    {
      "id": "$id",
      "name": "$name",
      "connectionStatus": "Connected",
      "operatingSystem": "$operatingSystem"
    }
  ],
  "failoverClusterConnectionStatus": "Connected",
  "failoverClusterName": "$failoverClusterName",
  "numFailoverClusterApps": 1,
  "slaAssignment": "$slaAssignment",
  "operatingSystemType": "$operatingSystemType"
}
```

### Get list of immediate descendant objects
Get a list of immediate descendant objects using a GET request to
[/failover_cluster/hierarchy/{id}/children](#operation/getFailoverClusterHierarchyChildren).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/failover_cluster/hierarchy/root/children"
```

```bash
{
  "hasMore": false,
  "data": [
    {
      "id": "$id",
      "name": "$name",
      "configuredSlaDomainId": "$configuredSlaDomainId",
      "configuredSlaDomainName": "$configuredSlaDomainName",
      "configuredSlaDomainType": "ProtectionSla",
      "primaryClusterId": "$primaryClusterId",
      "isConfiguredSlaDomainRetentionLocked": false,
      "effectiveSlaDomainId": "$effectiveSlaDomainId",
      "effectiveSlaDomainName": "$effectiveSlaDomainName",
      "isEffectiveSlaDomainRetentionLocked": false,
      "effectiveSlaSourceObjectId": "Global:::All",
      "objectType": "HostFailoverCluster",
      "descendentCount": {
        "failoverCluster": 0,
        "failoverClusterApp": 1,
        "fileset": 1
      },
      "isDeleted": false,
      "numNodes": 2,
      "nodes": [
        {
          "id": "$id",
          "name": "$name",
          "connectionStatus": "Connected",
          "operatingSystem": "$operatingSystem"
        },
        {
          "id": "$id",
          "name": "$name",
          "connectionStatus": "Connected",
          "operatingSystem": "$operatingSystem"
        }
      ],
      "failoverClusterConnectionStatus": "Connected",
      "failoverClusterName": "$failoverClusterName",
      "numFailoverClusterApps": $numFailoverClusterApps,
      "slaAssignment": "$slaAssignment",
      "operatingSystemType": "$operatingSystemType"
    }
  ],
  "total": 1
}
```

```bash
curl -X GET \
  "https://$cluster_address/api/v1/failover_cluster/hierarchy/$failover_cluster_id/children"
```

```bash
{
  "hasMore": false,
  "data": [
    {
      "id": "$id",
      "name": "$name",
      "configuredSlaDomainId": "$configuredSlaDomainId",
      "configuredSlaDomainName": "$configuredSlaDomainName",
      "configuredSlaDomainType": "ProtectionSla",
      "primaryClusterId": "$primaryClusterId",
      "isConfiguredSlaDomainRetentionLocked": false,
      "effectiveSlaDomainId": "$effectiveSlaDomainId",
      "effectiveSlaDomainName": "$effectiveSlaDomainName",
      "isEffectiveSlaDomainRetentionLocked": false,
      "effectiveSlaSourceObjectId": "Global:::All",
      "objectType": "FailoverClusterApp",
      "descendentCount": {
        "failoverCluster": 0,
        "failoverClusterApp": 0,
        "fileset": 1
      },
      "isDeleted": false,
      "numNodes": 0,
      "failoverClusterType": "UnixLike",
      "failoverClusterAppConnectionStatus": "Connected",
      "failoverClusterAppName": "$failoverClusterAppName",
      "failoverClusterAppSource": {
        "virtualIps": [
          "$virtualIp"
        ]
      },
      "slaAssignment": "$slaAssignment",
      "filesets": [
        {
          "allowBackupNetworkMounts": false,
          "allowBackupHiddenFoldersInNetworkMounts": false,
          "useWindowsVss": false,
          "id": "$id",
          "name": "$name",
          "configuredSlaDomainId": "$configuredSlaDomainId",
          "configuredSlaDomainName": "$configuredSlaDomainName",
          "configuredSlaDomainType": "ProtectionSla",
          "primaryClusterId": "$primaryClusterId",
          "isConfiguredSlaDomainRetentionLocked": false,
          "hostName": "$hostName",
          "templateId": "$templateId",
          "templateName": "$templateName",
          "operatingSystemType": "UnixLike",
          "effectiveSlaDomainId": "$effectiveSlaDomainId",
          "isEffectiveSlaDomainRetentionLocked": false,
          "includes": [
            "$includes"
          ],
          "excludes": [],
          "exceptions": [],
          "isRelic": false,
          "isPassthrough": false,
          "enableSymlinkResolution": false,
          "enableHardlinkSupport": false,
          "failoverClusterAppId": "$failoverClusterAppId",
          "failoverClusterAppName": "$failoverClusterAppName"
        }
      ]
    }
  ],
  "total": 1
}
```

### Get list of descendant objects
Get a list of descendant objects using
a GET request to
[/failover_cluster/hierarchy/{id}/descendants](#operation/getFailoverClusterHierarchyDescendants).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/failover_cluster/hierarchy/$failover_cluster_id/descendants"
```

```bash
{
  "hasMore": false,
  "data": [
    {
      "id": "$id",
      "name": "$name",
      "configuredSlaDomainId": "$configuredSlaDomainId",
      "configuredSlaDomainName": "$configuredSlaDomainName",
      "configuredSlaDomainType": "ProtectionSla",
      "primaryClusterId": "$primaryClusterId",
      "isConfiguredSlaDomainRetentionLocked": false,
      "effectiveSlaDomainId": "$effectiveSlaDomainId",
      "effectiveSlaDomainName": "$effectiveSlaDomainName",
      "isEffectiveSlaDomainRetentionLocked": false,
      "effectiveSlaSourceObjectId": "Global:::All",
      "objectType": "FailoverClusterApp",
      "descendentCount": {
        "failoverCluster": 0,
        "failoverClusterApp": 0,
        "fileset": 1
      },
      "isDeleted": false,
      "numNodes": 0,
      "failoverClusterType": "UnixLike",
      "failoverClusterAppConnectionStatus": "Connected",
      "failoverClusterAppName": "$failoverClusterAppName",
      "failoverClusterAppSource": {
        "virtualIps": [
          "$virtualIp"
        ]
      },
      "slaAssignment": "$slaAssignment",
      "filesets": [
        {
          "allowBackupNetworkMounts": false,
          "allowBackupHiddenFoldersInNetworkMounts": false,
          "useWindowsVss": false,
          "id": "$id",
          "name": "$name",
          "configuredSlaDomainId": "$configuredSlaDomainId",
          "configuredSlaDomainName": "$configuredSlaDomainName",
          "configuredSlaDomainType": "ProtectionSla",
          "primaryClusterId": "$primaryClusterId",
          "isConfiguredSlaDomainRetentionLocked": false,
          "hostName": "$hostName",
          "templateId": "$templateId",
          "templateName": "$templateName",
          "operatingSystemType": "UnixLike",
          "effectiveSlaDomainId": "$effectiveSlaDomainId",
          "isEffectiveSlaDomainRetentionLocked": false,
          "includes": [
            "$includes"
          ],
          "excludes": [],
          "exceptions": [],
          "isRelic": false,
          "isPassthrough": false,
          "enableSymlinkResolution": false,
          "enableHardlinkSupport": false,
          "failoverClusterAppId": "$failoverClusterAppId",
          "failoverClusterAppName": "$failoverClusterAppName"
        }
      ]
    },
    {
      "id": "$id",
      "name": "$name",
      "configuredSlaDomainId": "$configuredSlaDomainId",
      "configuredSlaDomainName": "$configuredSlaDomainName",
      "configuredSlaDomainType": "ProtectionSla",
      "primaryClusterId": "$primaryClusterId",
      "isConfiguredSlaDomainRetentionLocked": false,
      "effectiveSlaDomainId": "$effectiveSlaDomainId",
      "effectiveSlaDomainName": "$effectiveSlaDomainName",
      "isEffectiveSlaDomainRetentionLocked": false,
      "effectiveSlaSourceObjectId": "$effectiveSlaSourceObjectId",
      "effectiveSlaSourceObjectName": "$effectiveSlaSourceObjectName",
      "objectType": "Fileset",
      "descendentCount": {
        "failoverCluster": 0,
        "failoverClusterApp": 0,
        "fileset": 0
      },
      "isDeleted": false,
      "numNodes": 0,
      "slaAssignment": "$slaAssignment"
    }
  ],
  "total": 2
}
```

# Filesets

A fileset defines a set of files and folders on a Linux, Unix, or
Windows host, or on NAS shares. The Rubrik cluster uses the filesets
that are specified for a host or a NAS share to determine the data to
protect on that host or share.

The Rubrik cluster interprets a fileset based on the values provided in
the Include, Exclude, and Do Not Exclude arrays of the fileset template
that the fileset is based on. The Rubrik cluster uses the values of the
arrays to determine the files and folders in a fileset. The Do Not
Exclude array specifies objects that should not be excluded from the
fileset by the values in the Exclude array.

## Fileset workflow
To protect data through filesets perform the following tasks:
1. Obtain and install the Rubrik Backup Service software on the host.
The *Rubrik CDM User Guide* describes this task.
2. Add the host to the Rubrik cluster.
The [Hosts](#section/Hosts) section describes this task.
3. Create a fileset template that defines a set of file system data to
protect.
The [Fileset templates](#fileset-templates) section describes this task.
4. Use a fileset template to assign a fileset to a host.
5. Assign the host fileset to an SLA Domain.

## Fileset templates
A fileset template encompasses a set of file system metadata that is
needed to define filesets. The metadata includes the file system
paths on the host that need protection or paths that do not need
protection.
The metadata varies with the type of the host or the NAS share to
which the template applies.

### Retrieving fileset templates
To retrieve the current list of fileset templates, send a GET request to the
[`/fileset_template`](#operation/queryFilesetTemplate) endpoint.

```bash
curl -X GET \
"https://$cluster_address/api/v1/fileset_template"
```

The Rubrik REST API server responds with a ListResponse object containing the
first page of the current list of fileset templates.

```bash
{
  "hasMore": false,
  "data": [
    {
      "allowBackupNetworkMounts": false,
      "allowBackupHiddenFoldersInNetworkMounts": false,
      "useWindowsVss": false,
      "name": "$fileset_name",
      "includes": [
        "/users"
      ],
      "excludes": [],
      "exceptions": [],
      "operatingSystemType": "$os_type1",
      "isArrayEnabled": true,
      "id": "$fileset_template_id0",
      "primaryClusterId": "$cluster_id",
      "isArchived": false,
      "hostCount": 0,
      "shareCount": 0
    }
   ],
   "total": 1
 }
```

To retrieve the details of a specific fileset template, send a GET request
to the [`fileset_template/{id}`](#operation/getFilesetTemplate) endpoint.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/fileset_template/$fileset_template_id0"
```

The Rubrik REST API server responds with the details of the fileset template
identified by the value of the `{id}` path parameter.

### Creating a fileset template
Create a fileset template to simplify creating identical filesets for
multiple hosts.

Operations for a fileset object are described in the
[Fileset](#fileset) section.

To create a fileset-template, send a POST request to
[`/fileset_template`](#operation/createFilesetTemplate) with the
required details: `name`, `includes`, and `operatingSystemType`
or `shareType`.

```bash
curl -X POST \
  -d '{
    "name": "Users",
    "includes": ["C:\\Users"],
    "operatingSystemType": "$os_type1"
    }' \
  "https://$cluster_address/api/v1/fileset_template"
```
To create a fileset template for a specific type of NAS share, replace
`operatingSystemType` with `shareType` in the above payload.
For example, `"shareType":"NFS"`.

The Rubrik REST API server responds with the new fileset template object.

```bash
{
  "allowBackupNetworkMounts": true,
  "allowBackupHiddenFoldersInNetworkMounts": true,
  "useWindowsVss": true,
  "name": "Users",
  "includes": [
    "C:\\users"
  ],
  "excludes": [],
  "exceptions": [],
  "operatingSystemType": "$os_type1",
  "isArrayEnabled": false,
  "id": "$fileset_template_id1",
  "primaryClusterId": "$cluster_id",
  "isArchived": false,
  "hostCount": 0,
  "shareCount": 0
}
```

### Updating a fileset template
To modify the values of a specific fileset template, send a PATCH request
to the [`/fileset_template/{id}`](#operation/updateFilesetTemplate)
endpoint.

```bash
curl -X PATCH \
  -d '{
        "id": "$fileset_template_id0",
        "allowBackupNetworkMounts": true
     }' \
  "https://$cluster_address/api/v1/fileset_template/$fileset_template_id0"
```

The Rubrik REST API server responds with the details of the updated
fileset template.

```bash
{
      "allowBackupNetworkMounts": true,
      "allowBackupHiddenFoldersInNetworkMounts": false,
      "useWindowsVss": false,
      "name": "$fileset_name",
      "includes": [
        "/users"
      ],
      "excludes": [],
      "exceptions": [],
      "operatingSystemType": "$os_type2",
      "isArrayEnabled": true,
      "id": "$fileset_template_id0",
      "primaryClusterId": "$cluster_id",
      "isArchived": false,
      "hostCount": 0,
      "shareCount": 0
    }
```

### Deleting a fileset template
To delete a specific fileset template and all the associated filesets,
send a DELETE request to the
[`/fileset_template/{id}`](#operation/deleteFilesetTemplate) endpoint.

```bash
curl -X DELETE \
  "https://$cluster_address/api/v1/fileset_template/$fileset_template_id0"
```

## Fileset
A fileset is an instance of the fileset template that is assigned to a
specific host.

### Retrieving filesets
To retrieve the current list of filesets, send a GET request to the
[`/fileset`](#operation/queryFileset) endpoint.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/fileset"
```
The Rubrik REST API server responds with a ListResponse object
containing the first page of the current list of filesets.

```bash
{
  "hasMore": true,
  "data": [
    {
      "allowBackupNetworkMounts": true,
      "allowBackupHiddenFoldersInNetworkMounts": true,
      "useWindowsVss": true,
      "id": "string",
      "name": "string",
      "configuredSlaDomainId": "string",
      "configuredSlaDomainName": "string",
      "configuredSlaDomainType": "ProtectionSla",
      "primaryClusterId": "string",
      "isConfiguredSlaDomainRetentionLocked": true,
      "slaLastUpdateTime": "2021-03-03T18:42:24.766Z",
      "hostId": "string",
      "shareId": "string",
      "hostName": "string",
      "templateId": "string",
      "templateName": "string",
      "operatingSystemType": "string",
      "effectiveSlaDomainId": "string",
      "isEffectiveSlaDomainRetentionLocked": true,
      "effectiveSlaDomainName": "string",
      "effectiveSlaDomainPolarisManagedId": "string",
      "includes": [
        "string"
      ],
      "excludes": [
        "string"
      ],
      "exceptions": [
        "string"
      ],
      "isRelic": true,
      "arraySpec": {
        "proxyHostId": "string"
      },
      "isPassthrough": true,
      "enableSymlinkResolution": true,
      "enableHardlinkSupport": true,
      "failoverClusterAppId": "string",
      "failoverClusterAppName": "string",
      "pendingSlaDomain": {
        "objectId": "string",
        "pendingSlaDomainId": "string",
        "pendingSlaDomainName": "string",
        "isPendingSlaDomainRetentionLocked": true
      },
      "snapMirrorLabelForFullBackup": "string",
      "snapMirrorLabelForIncrementalBackup": "string"
    }
  ],
  "total": 0
}
```

To retrieve the details of a specific fileset, send a GET request to the
[`/fileset/{id}`](#operation/getFileset) endpoint.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/fileset/$fileset_id"
```

The Rubrik REST API server responds with the details of the fileset
identified by the value of the {id} path parameter.

### Creating a fileset
To create a fileset, send a POST request to [`/fileset`](#operation/createFileset) with the required details: the `hostId` or `shareId`, and
the `templateId`.
See [Retrieving fileset templates](#retrieving-fileset-templates) for
information on obtaining a template ID, to create a fileset.

```bash
curl -X POST \
  -d '{
    "templateId": "$fileset_template_id",
    "hostId": "$host_id" }' \
  "https://$cluster_address/api/v1/fileset"
```
To create a fileset for a NAS share, replace `hostId` with `shareId` in
the above payload.
For example, `"shareId": "$share_id"`.

The Rubrik REST API server responds with the new fileset object.

```bash
{
  "configuredSlaDomainId": "UNPROTECTED",
  "forceFull": false,
  "forceFullPartitionIds": [],
  "allowBackupNetworkMounts": true,
  "allowBackupHiddenFoldersInNetworkMounts": false,
  "useWindowsVss": false,
  "id": "$fileset_id",
  "name": "$fileset_name",
  "configuredSlaDomainName": "Unprotected",
  "configuredSlaDomainType": "ProtectionSla",
  "primaryClusterId": "$cluster_id",
  "isConfiguredSlaDomainRetentionLocked": false,
  "hostId": "$host_id",
  "hostName": "$hostname",
  "templateId": "$fileset_template_id",
  "templateName": "$fileset_template_name",
  "operatingSystemType": "UnixLike",
  "effectiveSlaDomainId": "UNPROTECTED",
  "isEffectiveSlaDomainRetentionLocked": false,
  "effectiveSlaDomainName": "Unprotected",
  "includes": [
    "$location_to_protect"
  ],
  "excludes": [],
  "exceptions": [],
  "isRelic": false,
  "isPassthrough": false,
  "enableSymlinkResolution": false,
  "enableHardlinkSupport": false,
  "snapshotCount": 0,
  "archivedSnapshotCount": 0,
  "snapshots": []
}
```
### Updating a fileset
To update the values of a specific fileset, send a PATCH request to the
[`/fileset/{id}`](#operation/updateFileset) endpoint. The request
payload includes the properties to be updated.

```bash
curl -X PATCH \
  -d '{
           "configuredSlaDomainId": "string",
           "forceFull": true,
           "forceFullPartitionIds": [
                       0
            ],
            "snapMirrorLabelForFullBackup": "string",
            "snapMirrorLabelForIncrementalBackup": "string"
       }' \
  "https://$cluster_address/api/v1/fileset/$fileset_id"
```

The Rubrik REST API server responds with the details of the updated
fileset.

### Deleting a fileset
To delete a specific fileset, send a DELETE request to the
[`/fileset/{id}`](#operation/deleteFileset) endpoint. 
By default, the Rubrik cluster preserves the snapshots of the fileset to
be deleted.

```bash
curl -X DELETE \
  "https://$cluster_address/api/v1/fileset/$fileset_id"
```
To delete the snapshots of the fileset along with the fileset, set the
`preserve_snapshots` query parameter to `false` in the DELETE
request.

```bash
curl -X DELETE \
"https://$cluster_address/api/v1/fileset/$fileset_id?preserve_snapshots=false"
```
The Rubrik REST API server deletes the specified fileset and the
snapshots associated with the fileset.

## On-demand backups of host filesets
### Creating on-demand snapshot
To initiate an on-demand snapshot of a fileset, send a POST request to
the [`/fileset/{id}/snapshot`](#operation/createFilesetBackupJob)
endpoint.

```bash
curl -X POST \
  "https://$cluster_address/api/v1/fileset/$fileset_id/snapshot"
```

The Rubrik REST API responds with the ID for the on-demand snapshot
request along with other details about the request, like the status and
the time at which the request was received.

```bash
{
  "id": "$request_id",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "2021-03-04T20:07:55.169Z",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/fileset/request/$request_id",
      "rel": "self"
    }
  ]
}
```
### Retrieving snapshot ID
To retrieve the snapshot ID, retrieve the status of the on-demand
snapshot request by sending a GET request to the
[`/fileset/request/{id}`](#operation/getFilesetAsyncRequestStatus)
endpoint.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/fileset/request/$request_id"
```

The Rubrik REST API server responds with the status of the on-demand
snapshot request. If the snapshot has completed successfully, the
response includes the ID for the snapshot in the reference link to the
snapshot.

```bash
{
  "id": "$request_id",
  "status": "SUCCEEDED",
  "startTime": "2021-03-04T20:07:55.169Z",
  "endTime": "2021-03-04T20:12:54.792Z",
  "nodeId": "$node_id",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/fileset/$snapshot_id/snapshot",
      "rel": "result"
    },
    {
      "href": "https://$cluster_address/api/v1/fileset/request/$request_id",
      "rel": "self"
    }
  ]
}
```

### Retrieving snapshot details
To retrieve information about a specific snapshot, send a GET request to
the [`/fileset/snapshot/{id}`](#operation/getFilesetSnapshot) endpoint.
By default, the flag to return verbose information about the fileset is set to `false`. Change the value of the `verbose` flag to `true` to get
detailed information about the fileset.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/fileset/snapshot/$snapshot_id?verbose=false"
```
The Rubrik REST API responds with the details of the specified fileset snapshot.

```bash
{
  "id": "$snapshot_id",
  "date": "2021-03-04T20:08:00.000Z",
  "sourceObjectType": "Fileset",
  "isOnDemandSnapshot": true,
  "isCustomRetentionApplied": false,
  "cloudState": 0,
  "indexState": 1,
  "replicationLocationIds": [],
  "archivalLocationIds": [],
  "slaId": "UNPROTECTED",
  "slaName": "Unprotected",
  "isRetainedByRetentionLockSla": false,
  "isPlacedOnLegalHold": false,
  "snapshotRetentionInfo": {
    "localInfo": {
      "id": "$cluster_id",
      "name": "LOCAL",
      "isSnapshotPresent": true,
      "isExpirationDateCalculated": true,
      "snapshotFrequency": "Forever"
    },
    "archivalInfos": [],
    "replicationInfos": [],
    "cloudNativeLocationInfo": []
  },
  "filesetName": "$fileset_name",
  "fileCount": 10,
  "lastModified": "2021-02-24T14:13:33+0000",
  "size": 23572
}
```

### Deleting fileset snapshots
To delete a specific fileset snapshot, send a DELETE request to the
[`/fileset/snapshot/{id}`](#operation/deleteFilesetSnapshot) endpoint,
where `{id}` is the ID of the snapshot.

```bash
curl -X DELETE \
  "https://$cluster_address/api/v1/fileset/snapshot/$snapshot_id"
```
The Rubrik REST API deletes the specified fileset snapshot.

To delete all the snapshots of a specific fileset, send a DELETE request
to the [`/fileset/{id}/snapshot`](#operation/deleteFilesetSnapshots)
endpoint, where `{id}` is the ID of the fileset.

```bash
curl -X DELETE "https://$cluster_address/api/v1/fileset/$fileset_id/snapshot"
```
The Rubrik REST API deletes all the snapshots of the specified fileset.

## SLA Domain protection of host filesets

To assign an SLA to a fileset, send a PATCH request to the
[`/fileset/{id}`](#operation/updateFileset) endpoint.

```bash
curl -X PATCH \
  -d '{ 
    "configuredSlaDomainId": "$sla_domain_id" }' \
  "https://$cluster_address/api/v1/fileset/$fileset_id"
```
The Rubrik REST API server responds with the details of the updated
fileset.

```bash
{
  "id": "$fileset_id",
  "excludes": [],
  "operatingSystemType": "Windows",
  "includes": [
    "C:\\Users"
  ],
  "hostId": "$host_id",
  "templateId": "$fileset_template_id",
  "configuredSlaDomainId": "$sla_domain_id"
}
```

### Retrieving missed snapshots
To retrieve the details of snapshots that were missed for a fileset,
send a GET request to the [`/fileset/{id}/missed_snapshot`](#operation/getMissedFilesetSnapshots) endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/fileset/$fileset_id/missed_snapshot"
```
The Rubrik REST API server responds with the details of snapshots
that were missed, for the specified fileset.

```bash
{
  "hasMore": false,
  "data": [
    {
      "archivalLocationType": [
        "LOCAL"
      ],
      "missedSnapshotTime": "2021-03-04T07:59:59.999Z",
      "missedSnapshotTimeUnits": [
        {
          "timeUnit": "Daily",
          "frequency": 1,
          "retention": 2
        }
      ]
    }
  ],
  "total": 1
}
```

## Search & Recovery
### Searching at fileset-level
To search for specific file within a fileset, send a GET request to the
[`/fileset/{id}/search`](#operation/searchFileset) endpoint. Specify
a path prefix or a filename prefix in the `path` query parameter.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/fileset/$fileset_id/search?path=$path"
```

The Rubrik REST API server responds with the details of the files that
match the search query.

```bash
{
  "hasMore": false,
  "data": [
    {
      "path": "$path_to_file",
      "filename": "$filename",
      "fileVersions": [
        {
          "snapshotId": "$snapshot_id",
          "lastModified": "2014-07-17T02:02:54+0000",
          "size": 533120,
          "fileMode": "file",
          "source": "cloud"
        }
      ]
    }
  ],
  "total": 1
}
```
### Searching at host-level
To search for specific file at the host-level, send a GET request to the
[`/host/{id}/search`](#operation/searchHost) endpoint. Specify
a path prefix or a filename prefix in the `path` query parameter.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/host/$host_id/search?path=$path"
```

The Rubrik REST API server responds with the details of the files that
match the search query.

```bash
{
  "hasMore": false,
  "data": [
    {
      "path": "$path_to_file",
      "filename": "$filename",
      "fileVersions": [
        {
          "snapshotId": "$snapshot_id",
          "lastModified": "2014-07-17T02:02:54+0000",
          "size": 533120,
          "fileMode": "file",
          "source": "cloud"
        }
      ]
    }
  ],
  "total": 1
}
```

### Browsing files in a snapshot
To list all files and folders within a snapshot, send a GET request to the
[`/fileset/snapshot/{id}/browse`](#operation/browseFilesetSnapshot)
endpoint.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/fileset/snapshot/$snapshot_id/browse?path=$absolute_file_path"
```

The Rubrik REST API server responds with the details of all the files
and folders available at the specified path in the snapshot.

```bash
{
  "hasMore": false,
  "data": [
    {
      "filename": "$filename",
      "path": "$path_relative_to_absolute_file_path",
      "lastModified": "2016-12-01T23:26:59+0000",
      "size": 529024,
      "fileMode": "file",
      "statusMessage": ""
    }
  ],
  "total": 1
}
```
### Download options
There are two options for downloading the files of a fileset snapshot:
download the entire snapshot or download specific files from the
snapshot.

To download the entire snapshot from an archival location, send a
POST request to the
[`/fileset/snapshot/{id}/download`](#operation/createDownloadFilesetSnapshotFromCloud) endpoint.


```bash
curl -X POST \
  "https://$cluster_address/api/v1/fileset/snapshot/$snapshot_id/download"
```

To download files from a specific location in a snapshot, send a POST
request to the [`/fileset/snapshot/{id}/download_file`](#operation/createFilesetDownloadFileJob) endpoint.

```bash
curl -X POST -d \
'{
    "sourceDir": "$path_to_download_from"
 }' \
  "https://$cluster_address/api/v1/fileset/snapshot/$snapshot_id/download_file"
```

The Rubrik REST API server initiates an async download job and returns
a job instance ID.

```bash
{
  "id": "$job_instance_id",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "2021-03-05T18:19:27.584Z",
  "links": [
    {
      "href": "https://$cluster_address//api/v1/fileset/request/$job_instance_id",
      "rel": "self"
    }
  ]
}
```

To retrieve the download location, send a GET request to the
[`fileset/request/{id}`](#operation/getFilesetAsyncRequestStatus) endpoint where, `{id}` is the `$job_instance_id`.

```bash
curl -X GET "https://$cluster_address/api/v1/fileset/request/$job_instance_id"
```

The Rubrik REST API server responds with the status of the download
job. The response includes a download link when the job completes
successfully.

```bash
{
  "id": "$job_instance_id",
  "status": "SUCCEEDED",
  "startTime": "2021-03-05T18:01:43.755Z",
  "endTime": "2021-03-05T18:02:48.481Z",
  "nodeId": "$node_id",
  "links": [
    {
      "href": "$download_url",
      "rel": "result"
    },
    {
      "href": "https://$cluster_address/api/v1/fileset/request/$job_instance_id",
      "rel": "self"
    }
  ]
}
```

### Recovery options
To restore files from a fileset snapshot on to the source host, send a
POST request to the [`/fileset/snapshot/{id}/restore_file`](#operation/createFilesetRestoreFileJob) endpoint.

```bash
curl -X POST -d \
  '{
    "sourceDir": "$source_of_restore",
    "destinationDir": "$destination_of_restore"
  }' \
  "https://$cluster_address/api/v1/fileset/snapshot/$snapshot_id/restore_file"
```

To restore files from a fileset snapshot on to a host other than the
source host, send a POST request to the [`/fileset/snapshot/{id}/export_file`](#operation/createFilesetExportFileJob).

```bash
curl -X POST -d \
  '{
    "sourceDir": "$source_of_restore",
    "destinationDir": "$destination_of_restore",
    "hostId": "$destination_host_id"
  }' \
  "https://$cluster_address/api/v1/fileset/snapshot/$snapshot_id/export_file"
```

The Rubrik REST API server initiates an async restore job and returns
a job instance ID.

```bash
{
  "id": "$job_instance_id",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "2021-03-05T18:19:27.584Z",
  "links": [
    {
      "href": "https://$cluster_address//api/v1/fileset/request/$job_instance_id",
      "rel": "self"
    }
  ]
}
```

To check the progress of the request, send a GET request to the
[`fileset/request/{id}`](#operation/getFilesetAsyncRequestStatus) endpoint where, `{id}` is the `$job_instance_id`.

```bash
curl -X GET "https://$cluster_address/api/v1/fileset/request/$job_instance_id"
```

The Rubrik REST API server responds with the status of the restore
job.

```bash
{
  "id": "$job_instance_id",
  "status": "SUCCEEDED",
  "startTime": "2021-03-05T18:01:43.755Z",
  "endTime": "2021-03-05T18:02:48.481Z",
  "nodeId": "$node_id",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/fileset/request/$job_instance_id",
      "rel": "self"
    }
  ]
}
```

#  host hierarchy

This REST API is used to get host/share hierarchy objects.

### Get summary of a hierarchy object
Get a summary of a hierarchy object by making a GET call to
[/host/hierarchy/{id}]\
(#operation/getHostHierarchyObject).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/host/hierarchy/{id}"
```

The Rubrik REST API server returns a host hierarchy object contains the ID,
objectType, status, descendantCount, primaryClusterId, name, alias,
operatingSystem, operatingSystemType shareType, vendorType, hostId, exportPoint,
filesets and isSnapdiff.

### Get list of immediate descendant objects
Get a list of immediate descendant objects using a GET request to
[/host/hierarchy/{id}/children]\
(#operation/getHostHierarchyChildren).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/host/hierarchy/{id}/children"
```

The Rubrik REST API server returns a list of host hierarchy objects.

# Directories

A HDFS directory defines a set of files and folders on a HDFS cluster.  The Rubrik cluster uses the directorys that are assigned to a HDFS cluster to determine the data to protect on that cluster.

The Rubrik cluster interprets a directory based on the values provided in the
Include, Exclude, and Do Not Exclude arrays. The Rubrik cluster applies a
set of rules to the values provided in these arrays and permits several
types of values to be added to the arrays. The Do Not Exclude array specifies objects that should not be excluded from the directory by the values in the Exclude array.

## Directory workflow
The basic workflow to follow when using directorys to protect data in host file systems is:
1. Obtain and install the Rubrik Backup Service software on the HDFS cluster.
The Rubrik user guide describes this task.
2. Add the HDFS cluster to the Rubrik cluster.
The [Hosts](#section/Hosts) section describes this task.
3. Create a directory template that defines a set of file system data to protect.
4. Use a directory template to assign a directory to a host.
5. Assign the host directory to an SLA Domain.

## Directory templates

First, create a directory template.
A directory template can be used to create directory instances for various HDFS clusters.
Performing a POST on [`/hdfs_template`](#operation/createHdfsTemplate)  with the necessary details will create a directory template.

```bash
curl -X POST \
  -d '{
    "name": "Users",
    "includes": ["/Users"]}' \
  "https://$cluster_address/api/v1/hdfs_template"
```

```bash
{
  "id": "$directory_template_id",
  "name": "Users",
  "excludes": [],
  "includes": [
    "/Users"
  ]
}
```

To get the details of a directory template, use GET on the [`/hdfs_template/{id}`](#operation/getHdfsTemplate) endpoint.

```bash
curl -X GET \
  -d '{
    "id": "$directory_template_id" }' \
  "https://$cluster_address/api/v1/hdfs_template"
```

```bash
{
  "id": "$host_id",
  "hostname": "$hostname",
  "status": "Connected"
}
```

To get the current list of all directory templates matching a query, use GET on the [`/hdfs_template`](#operation/queryHdfsTemplate) endpoint.

```bash
curl -X POST \
  -d '{
    "hostname": "$hostname" }' \
  "https://$cluster_address/api/v1/hdfs_template"
```

```bash
{
  "id": "$host_id",
  "hostname": "$hostname",
  "status": "Connected"
}
```

Modify with PATCH on the [`/hdfs_template/{id}`](#operation/updateHdfsTemplate) endpoint.

```bash
curl -X PATCH \
  -d '{
    "id": "$directory_template_id" }' \
  "https://$cluster_address/api/v1/hdfs_template"
```

```bash
{
  "id": "$host_id",
  "hostname": "$hostname",
  "status": "Connected"
}
```

Delete with the [`/hdfs_template/{id}`](#operation/deleteHdfsTemplate) endpoint.

```bash
curl -X DELETE \
  -d '{
    "id": "$directory_template_id" }' \
  "https://$cluster_address/api/v1/hdfs_template"
```
## Directory

Create a directory using a directory template.
The directory is an instance of the template that is assigned to a specific HDFS cluster.

To get the current list of HDFS clusters, use GET on the [`/hdfs`](#operation/queryHdfs) endpoint.

```bash
curl -X POST \
  -d '{
    "hostname": "$hostname" }' \
  "https://$cluster_address/api/v1/hdfs"
```

```bash
{
  "id": "$host_id",
  "hostname": "$hostname",
  "status": "Connected"
}
```

To get the current further details of HDFS clusters, use GET on the [`/hdfs/{id}`](#operation/getHdfs) endpoint.

```bash
curl -X POST \
  -d '{
    "hostname": "$hostname" }' \
  "https://$cluster_address/api/v1/hdfs"
```

```bash
{
  "id": "$host_id",
  "hostname": "$hostname",
  "status": "Connected"
}
```

A directory can be created with a POST on [`/hdfs`](#operation/createHdfs).

```bash
curl -X POST \
  -d '{
    "templateId": "$directory_template_id",
    "hostId": "$host_id" }' \
  "https://$cluster_address/api/v1/hdfs"
```

```bash
{
  "id": "$directory_id",
  "excludes": [],
  "includes": [
    "/Users"
  ],
  "hostId": "$host_id",
  "templateId": "$directory_template_id",
  "configuredSlaDomainId": "UNPROTECTED"
}
```

A directory can be deleted with a DELETE on [`/hdfs`](#operation/deleteHdfs).

```bash
curl -X POST \
  -d '{
    "templateId": "directory_template_id",
    "hostId": "$host_id" }' \
  "https://$cluster_address/api/v1/hdfs"
```

```bash
{
  "id": "$directory_id",
  "excludes": [],
  "includes": [
    "/Users"
  ],
  "hostId": "$host_id",
  "templateId": "$directory_template_id",
  "configuredSlaDomainId": "UNPROTECTED"
}
```
## On demand backups of HDFS cluster directorys

To create an on-demand snapshot, use POST on [`/hdfs/{id}/snapshot`](#operation/createHdfsBackupJob).

```bash
curl -X POST \
  "https://$cluster_address/api/v1/hdfs/$directory_id/snapshot"
```

```bash
{
  "id": "$request_id",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/hdfs/request/$request_id",
      "rel": "self"
    }
  ],
  "status": "QUEUED"
}
```

After taking a snapshot, retrieve the `$snapshot_id` by querying [`/hdfs/request`](#operation/getHdfsAsyncRequestStatus).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/hdfs/request/$request_id"
```

```bash
{
  "id": "$request_id",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/hdfs/snapshot/$snapshot_id",
      "rel": "result"
    },
    {
      "href": "https://$cluster_address/api/v1/hdfs/request/$request_id",
      "rel": "self"
    }
  ],
  "status": "SUCCEEDED"
}
```


After taking a snapshot, retrieve the `$snapshot_id` from the request.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/hdfs/request/$request_id"
```

```bash
{
  "id": "$request_id",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/hdfs/snapshot/$snapshot_id",
      "rel": "result"
    },
    {
      "href": "https://$cluster_address/api/v1/hdfs/request/$request_id",
      "rel": "self"
    }
  ],
  "status": "SUCCEEDED"
}
```

For more information about a specific snapshot, send a GET request to
the [`/hdfs/snapshot/{id}`](#operation/getHdfsSnapshot) endpoint.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/hdfs/snapshot/$snapshot_id"
```

```bash
{
  "id": "$snapshot_id"
  "date": <timestamp1>,
  "expirationDate": <timestamp2>,
  "sourceObjectType": "Hdfs",
  "isOnDemandSnapshot": true,
  "cloudState": 2,
  "consistencyLevel": "none",
  "indexState": 1,
  "replicationLocationIds": [
    "$replication_location_id"
  ],
  "archivalLocationIds": [
    "$archival_location_id"
  ],
  "slaId": "$sla_id",
  "slaName": "sla",
  "directoryName": "directory",
  "fileCount": 10,
  "lastModified": <timestamp3>,
  "size": 533120
}
```

To delete a specific snapshot, send a DELETE request to the
[`/hdfs/snapshot/{id}`](#operation/deleteHdfsSnapshot) endpoint,
where `{id}` is the ID of the snapshot.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/hdfs/snapshot/$snapshot_id"
```

```bash
{
}
```

Delete all snapshots for a specific HDFS cluster with a DELETE on [`/hdfs/{id}/snapshot`](#operation/deleteHdfsSnapshots).

```bash
curl -X DELETE "https://$cluster_address/api/v1/hdfs/$id/snapshot"
```
## SLA Domain protection of host directorys

Assign a directory to an SLA with a PATCH [`/hdfs/{id}`](#operation/updateHdfs).

```bash
curl -X PATCH \
  -d '{
    "configuredSlaDomainId": "$sla_domain_id" }' \
  "https://$cluster_address/api/v1/hdfs/$directory_id"
```

```bash
{
  "id": "$directory_id",
  "excludes": [],
  "includes": [
    "/Users"
  ],
  "hostId": "$host_id",
  "templateId": "$directory_template_id",
  "configuredSlaDomainId": "$sla_domain_id"
}
```

List missed snapshots with a GET on [`/hdfs/{id}/missed_snapshot`](#operation/getMissedHdfsSnapshots).

```bash
curl -X GET "https://$cluster_address/api/v1/hdfs/$id/missed_snapshot"
```

```bash
{
  "hasMore": true,
  "data": [
    {
      "missedSnapshotTime": "2000-01-02T11:08:40.420Z"
    }
  ],
  "total": 1
}
```

## Search & Recovery

Once snapshots have been taken, they can be used to search for files and recover.

File search can be performed on a specific directory using its `$directory_id` with a GET on [`/hdfs/{id}/search`](#operation/searchHdfs) and specifying the file path with the `path` query parameter.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/hdfs/$directory_id/search?path=home"
```

```bash
{
  "hasMore": false,
  "data": [
    {
      "path": "/home",
      "filename": "home",
      "fileVersions": [
        {
          "snapshotId": "$snapshot_id",
          "lastModified": "2014-07-17T02:02:54+0000",
          "size": 533120
        }
      ]
    }
  ],
  "total": 1
}
```

Files within a snapshot can be browsed by using GET on [`/hdfs/snapshot/{id}/browse`](#operation/browseHdfsSnapshot).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/hdfs/snapshot/$snapshot_id/browse?path=%2Fhome&offset=0"
```

```bash
{
  "hasMore": false,
  "data": [
    {
      "filename": "ubuntu",
      "path": "ubuntu",
      "lastModified": "2016-12-01T23:26:59+0000",
      "size": 529024,
    }
  ],
  "total": 1
}
```

Files from a snapshot can also be restored to a host with POST on [`/hdfs/snapshot/{id}/restore_file`](#operation/createHdfsRestoreFileJob).

```bash
curl -X POST -d \
  '{
    "sourceDir": "/foo.txt",
    "destinationDir": "/bar.txt"
  }' \
  "https://$cluster_address/api/v1/hdfs/snapshot/$snapshot_id/restore_file"
```

Files can also be restored to a different host with POST on [`/hdfs/snapshot/{id}/export_file`](#operation/createHdfsExportFileJob).

```bash
curl -X POST -d \
  '{
    "sourceDir": "/foo.txt",
    "destinationDir": "/bar.txt",
    "hostId": "$host_id"
  }' \
  "https://$cluster_address/api/v1/hdfs/snapshot/$snapshot_id/export_file"
```

# SQL Server databases

Version 3.0 added support for Microsoft SQL backups.
First add the hosts hosting the Microsoft SQL databases as specified in the [host protection](#section/Hosts) section.
Once the host has been added, instances and databases will be auto-discovered.

## Instances

Microsoft SQL instances can be found by a GET on [`/mssql/instance`](#operation/queryMssqlInstance)

```bash
curl -X GET "https://$cluster_address/api/v1/mssql/instance"
```

```bash
{
  "data": [
    {
      "id": "$instance_id",
      "name": "$instance_name",
      "configuredSlaDomainId": "INHERIT",
      "configuredSlaDomainName": "Inherit",
      "effectiveSlaDomainId": "INHERIT",
      "effectiveSlaDomainName": "Inherit"
    }
  ],
  "hasMore": false,
  "total": 1
}
```

Further details are acquired from [`/mssql/instance/{id}`](#operation/getMssqlInstance).

```bash
curl -X GET "https://$cluster_address/api/v1/mssql/instance/$instance_id"
```

```bash
{
  "data": [
    {
      "id": "$instance_id",
      "name": "$instance_name",
      "configuredSlaDomainId": "INHERIT",
      "configuredSlaDomainName": "Inherit",
      "effectiveSlaDomainId": "UNPROTECTED",
      "effectiveSlaDomainName": "Unprotected"
    }
  ],
  "hasMore": false,
  "total": 1
}
```

The Rubrik cluster auto-detects most fields of the Microsoft SQL instance. However, certain fields such as the `clusterInstanceAddress` can be overridden with a PATCH to [`/mssql/instance/{id}`](#operation/updateMssqlInstance).

```bash
curl -X PATCH \
  -d '{
    "clusterInstanceAddress": "1.1.1.1"
  }' \
  "https://$cluster_address/api/v1/mssql/instance/$instance_id"
```

```bash
{
  "data": [
    '{
      "id": "$instance_id",
      "name": "$instance_name",
      "configuredSlaDomainId": "INHERIT",
      "configuredSlaDomainName": "Inherit",
      "effectiveSlaDomainId": "UNPROTECTED",
      "effectiveSlaDomainName": "Unprotected",
      "clusterInstanceAddress": "1.1.1.1"
  }' \
    }
  ],
  "hasMore": false,
  "total": 1
}
```

The total number of SQL Server Instances can be found by GET on
[/mssql/instance/count](#operation/countMssqlInstanceV1).

  ```bash
  curl -X GET "https://$cluster_address/api/v1/mssql/instance/count"
  ```

  ```bash
  {
    "count": $total_number_of_instances
  }
  ```

## Databases

All Microsoft SQL databases on an instance can be found with a GET on
 [`/mssql/db`](#operation/queryMssqlDb).

```bash
curl -X GET "https://$cluster_address/api/v1/mssql/db?instance_id=$instance_id"
```

```bash
{
  "data": [
    {
      "id": "$db_id",
      "name": "$db_name",
      "configuredSlaDomainId": "INHERIT",
      "configuredSlaDomainName": "Inherit",
      "effectiveSlaDomainId": "UNPROTECTED",
      "effectiveSlaDomainName": "Unprotected",
      "instanceId": "$instance_id"
      "instanceName": "$instance_name"
    }
  ],
  "hasMore": false,
  "total": 1
}
```

Further details are acquired from [`/mssql/db/{id}`](#operation/getMssqlDb).

```bash
curl -X GET "https://$cluster_address/api/v1/mssql/db/$db_id"
```

```bash
{
  "data": [
    {
      "id": "$db_id",
      "name": "$db_name",
      "configuredSlaDomainId": "INHERIT",
      "configuredSlaDomainName": "Inherit",
      "effectiveSlaDomainId": "UNPROTECTED",
      "effectiveSlaDomainName": "Unprotected",
      "instanceId": "$instance_id"
      "instanceName": "$instance_name"
    }
  ],
  "hasMore": false,
  "total": 1
}
```

The total number of SQL Server Databases can be found by GET on
 [/mssql/db/count](#operation/countMssqlDbV1).

  ```bash
  curl -X GET "https://$cluster_address/api/v1/mssql/db/count?root_id=$host_id"
  ```

  ```bash
  {
    "numTotal": 15,
    "numProtected": 2,
    "numNoSla": 0,
    "numDoNotProtect": 13
  }
  ```

Snappable Id of a SQL Server database can be found by GET on
[/mssql/db/{id}/snappable_id](#operation/mssqlGetSnappableIdV1).

  ```bash
  curl -X GET "https://$cluster_address/api/v1/mssql/db/$db_id/snappable_id"
  ```

  ```bash
  {
    "snappableId": "$snappable_id"
  }
  ```

The properties of SQL Server database can be updated by PATCH on
[/mssql/db/bulk](#operation/bulkUpdateMssqlDbV1).

```bash
curl -X PATCH "https://$cluster_address/api/v1/mssql/db/bulk" -d\
'[
  {
      "databaseId": "$db_id",
      "updateProperties": {
         "logBackupFrequencyInSeconds": 2000,
         "logRetentionHours": 180,
         "copyOnly": true,
         "maxDataStreams": 8,
         "isPaused": true,
         "shouldForceFull": true
   }
 }
]'
```

```bash
[
  {
    "id": "MssqlDatabase:::5d1da757-95d0-4740-9851-53c25c3dda2d",
    "name": "simple_rec",
    "configuredSlaDomainId": "ea82adf1-fa12-4b33-89af-9c2a08802a5d",
    "configuredSlaDomainName": "Gold",
    "configuredSlaDomainType": "ProtectionSla",
    "primaryClusterId": "977dbc71-8137-4de5-be23-67251f0b63c1",
    "isConfiguredSlaDomainRetentionLocked": false,
    "effectiveSlaDomainId": "ea82adf1-fa12-4b33-89af-9c2a08802a5d",
    "effectiveSlaDomainName": "Gold",
    "isEffectiveSlaDomainRetentionLocked": false,
    "effectiveSlaSourceObjectId": "MssqlDatabase:::5d1da757-95d0-4740-9851-53c25c3dda2d",
    "effectiveSlaSourceObjectName": "simple_rec",
    "slaAssignment": "Direct",
    "retentionSlaDomainId": "ea82adf1-fa12-4b33-89af-9c2a08802a5d",
    "rootProperties": {
      "rootType": "Host",
      "rootId": "Host:::151e41d1-5395-4940-98ec-17460eae8949",
      "rootName": "10.0.46.37"
    },
    "instanceId": "MssqlInstance:::442b9524-9e45-4b03-aa66-eec1f3d0c470",
    "instanceName": "SQLEXPRESS",
    "isRelic": false,
    "copyOnly": true,
    "logBackupFrequencyInSeconds": 2000,
    "logBackupRetentionHours": 180,
    "isLiveMount": false,
    "isLogShippingSecondary": false,
    "recoveryModel": "FULL",
    "state": "ONLINE",
    "hasPermissions": true,
    "isInAvailabilityGroup": false,
    "replicas": [
      {
        "instanceId": "MssqlInstance:::442b9524-9e45-4b03-aa66-eec1f3d0c470",
        "instanceName": "SQLEXPRESS",
        "recoveryModel": "FULL",
        "state": "ONLINE",
        "hasPermissions": true,
        "isStandby": false,
        "recoveryForkGuid": "83145A93-8921-4318-8508-B9ABE1D3B0F6",
        "isArchived": false,
        "isDeleted": false,
        "rootProperties": {
          "rootType": "Host",
          "rootId": "Host:::151e41d1-5395-4940-98ec-17460eae8949",
          "rootName": "10.0.46.37"
        }
      }
    ],
    "unprotectableReasons": [],
    "numMissedSnapshot": 0,
    "lastSnapshotTime": "2020-09-07T13:36:33.000Z",
    "includeBackupTaskInfo": false,
    "isOnline": true,
    "blackoutWindowStatus": {
      "isGlobalBlackoutActive": false,
      "isSnappableBlackoutActive": true
    },
    "blackoutWindows": {
      "globalBlackoutWindows": [],
      "snappableBlackoutWindows": [
        {
          "startTime": "2020-09-13T11:02:04+0000"
        }
      ]
    },
    "snapshotCount": 2,
    "isLocal": true,
    "isStandby": false,
    "latestRecoveryPoint": "2020-09-07T14:11:54.000Z",
    "oldestRecoveryPoint": "2020-09-07T12:47:38.000Z",
    "protectionDate": "2020-08-26T07:43:26.429Z",
    "recoveryForkGuid": "83145A93-8921-4318-8508-B9ABE1D3B0F6",
    "maxDataStreams": 8,
    "localStorage": 1363475,
    "archiveStorage": 0
  }
]
```

## Availability Groups

To get the details of a SQL Server Availability Group, GET on
[`/mssql/availability_group/{id}`](#operation/getMssqlAvailabilityGroupV1).

```bash
curl -X GET "https://$cluster_address/api/v1/mssql/availability_group/$availability_group_id"
```

```bash
{
  "id": "$availability_group_id",
  "name": "$availability_group_name",
  "configuredSlaDomainId": "$sla_id",
  "configuredSlaDomainName": "$sla_name",
  "configuredSlaDomainType": "$sla_type",
  "primaryClusterId": "$primary_cluster_id",
  "isConfiguredSlaDomainRetentionLocked": $is_sla_retention_locked,
  "effectiveSlaDomainId": "$sla_id",
  "effectiveSlaDomainName": "$sla_name",
  "isEffectiveSlaDomainRetentionLocked": $is_sla_retention_locked,
  "slaAssignment": "$sla_assignment",
  "logBackupFrequencyInSeconds": $log_backup_frequenct,
  "logRetentionHours": $log_backup_retention,
  "copyOnly": $copy_only
}
```

To get a summary of all SQL Server Availability Groups, GET on
[`/mssql/availability_group`](#operation/queryMssqlAvailabilityGroupV1).

```bash
curl -X GET "https://$cluster_address/api/v1/mssql/availability_group"
```

```bash
{
  "hasMore": false,
  "data": [
    {
      "id": "$availability_group_id",
      "name": "$availability_group_name",
      "configuredSlaDomainId": "$sla_id",
      "configuredSlaDomainName": "$sla_name",
      "configuredSlaDomainType": "$sla_type",
      "primaryClusterId": "$primary_cluster_id",
      "isConfiguredSlaDomainRetentionLocked": $is_sla_retention_locked,
      "effectiveSlaDomainId": "$sla_id",
      "effectiveSlaDomainName": "$sla_name",
      "isEffectiveSlaDomainRetentionLocked": $is_sla_retention_locked,
      "slaAssignment": "$sla_assignment",
      "logBackupFrequencyInSeconds": $log_backup_frequenct,
      "logRetentionHours": $log_backup_retention,
      "copyOnly": $copy_only
    }
  ],
  "total": 1
}
```

To update a SQL Server Availability Group, PATCH on
[`/mssql/availability_group/{id}`](#operation/updateMssqlAvailabilityGroupV1).

```bash
curl -X PATCH "https://$cluster_address/api/v1/mssql/availability_group/$availability_group_id" -d\
 '{
    "logBackupFrequencyInSeconds": $log_backup_freq,
    "logRetentionHours": $log_backup_retention,
    "copyOnly": $copy_only,
    "configuredSlaDomainId\": "$sla_id"
  }'
```

```bash
{
  "id": "$availability_group_id",
  "name": "$availability_group_name",
  "configuredSlaDomainId": "$sla_id",
  "configuredSlaDomainName": "$sla_name",
  "configuredSlaDomainType": "$sla_type",
  "primaryClusterId": "$primary_cluster_id",
  "isConfiguredSlaDomainRetentionLocked": $is_sla_retention_locked,
  "effectiveSlaDomainId": "$sla_id",
  "effectiveSlaDomainName": "$sla_name",
  "isEffectiveSlaDomainRetentionLocked": $is_sla_retention_locked,
  "slaAssignment": "$sla_assignment",
  "logBackupFrequencyInSeconds": $log_backup_frequenct,
  "logRetentionHours": $log_backup_retention,
  "copyOnly": $copy_only
}
```

## Protection

To create an on-demand snapshot, POST on [`/mssql/db/{id}/snapshot`](#operation/createOnDemandMssqlBackup).

```bash
curl -X POST \
  "https://$cluster_address/api/v1/mssql/db/$db_id/snapshot"
```

```bash
{
  "id": "$request_id",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/mssql/db/request/$request_id",
      "rel": "self"
    }
  ],
  "status": "QUEUED"
}
```

Once the snapshot has been taken, the `$snapshot_id` can be retrieved from the request with [`/mssql/request/{id}`](#operation/getMssqlAsyncRequestStatus).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/mssql/request/$request_id"
```

```bash
{
  "id": "$request_id",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/mssql/db/snapshot/$snapshot_id",
      "rel": "result"
    },
    {
      "href": "https://$cluster_address/api/v1/mssql/request/$request_id",
      "rel": "self"
    }
  ],
  "status": "SUCCEEDED"
}
```

The `$snapshot_id` can be used to extract further information on the snapshot with a GET on [`/mssql/db/snapshot/{id}`](#operation/getMssqlDbSnapshot).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/mssql/db/snapshot/$snapshot_id"
```

```bash
{
  "id": "$snapshot_id",
  "date": "2017-02-02T18:53:12.718Z",
  "isOnDemandSnapshot": true
}
```

To create an on-demand log backup, POST on [`/mssql/db/{id}/log_backup`](#operation/createOnDemandMssqlLogBackup).

```bash
curl -X POST \
  "https://$cluster_address/api/v1/mssql/db/$db_id/log_backup"
```

```bash
{
  "id": "$request_id",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/mssql/db/request/$request_id",
      "rel": "self"
    }
  ],
  "status": "QUEUED"
}
```

To protect a specific database under an SLA, perform a PATCH on [`/mssql/db/{id}`](#operation/updateMssqlDb)

```bash
curl -X PATCH \
  -d '{
    "configuredSlaDomainId": "$sla_domain_id" }' \
  "https://$cluster_address/api/v1/mssql/db/$db_id"
```

```bash
{
  "id": "$db_id",
  "name": "$db_name",
  "configuredSlaDomainId": "$sla_domain_id",
  "configuredSlaDomainName": "$sla_domain_name",
  "effectiveSlaDomainId": "$sla_domain_id",
  "effectiveSlaDomainName": "sla_domain_name",
  "instanceId": "$instance_id"
  "instanceName": "$instance_name"
}
```

List all snapshots for a database with a GET on [`/mssql/db/{id}/snapshot`](#operation/queryMssqlDbSnapshot).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/mssql/db/$db_id/snapshot"
```

```bash
{
  "hasMore": true,
  "data": [
    {
      "id": "$snapshot_id",
      "date": "2017-02-02T18:53:12.718Z",
      "isOnDemandSnapshot": true
    }
  ],
  "total": 1
}
```

Point-in-time recovery is supported when log backups are taken. The range of recoverable times can be listed with a GET on [`/mssql/db/{id}/recoverable_range`](#operation/getMssqlDbRecoverableRanges).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/mssql/db/$db_id/recoverable_range"
```

```bash
{
  "hasMore": true,
  "data": [
    {
      "beginTime": "2017-02-02T18:53:12.694Z",
      "endTime": "2017-02-02T20:53:12.694Z"
    }
  ],
  "total": 1
}
```

## Download
The Rubrik REST API server provides endpoints to browse and
download snapshots and logs for a specific SQL Server database.

### Browsing SQL Server snapshots
To view a list of snapshots and log backups of a specific SQL Server
database, send a POST request to the 
[`/mssql/db/{id}/browse`](#operation/browseMssqlBackupFiles)
endpoint where, `{id}` is the ID of the SQL Server database.

This POST call fetches metadata based on a timestamp or the
log sequence number (LSN) provided in the request payload.

To fetch a list of snapshots and log backups that are required to
recover to a point in time, specify the point in time using either the
`date` or the `lsnpoint` attribute of the `recoveryPoint` attribute.
Both `date` and `lsnPoint` cannot be used at the same time.

```bash
curl -X POST -d \
  '{ 
        "recoveryPoint": {"date": "2019-08-15T10:40"}
   }' \
  "https://$cluster_address/api/v1/mssql/db/$db_id/browse
```

To fetch a list of snapshots and log backups that fit within a range,
specify the range by using a combination of the `startPoint` and
`endPoint` attributes.
Within the `startPoint` and `endPoint` attributes, specify values for
either the `lsnPoint` or the `date` attributes, not for both.

```bash
curl -X POST -d \
  '{ 
        "startPoint": {"date": "2019-08-15T10:40"}, 
        "endPoint": {"date": "2019-08-15T10:45:47"} 
   }' \
  "https://$cluster_address/api/v1/mssql/db/$db_id/browse
```

To recover to a point in time, use the `recoveryPoint` attribute; do
not define a range using the `startPoint` and `endPoint` attributes.

To fetch a list of snapshots and log backups that fit within a range,
specify the beginning of a range using the `startPoint` attribute and
specify the end of the range using the `endPoint` attribute.
When specifying a range, do not specify a `recoveryPoint`.

The Rubrik REST API server responds with the list of the log and
database snapshots that fit within the parameters specified in the
request.

```bash
{
  "items": [
    {
      "backupId": "e8f0c6ee-fafc-4740-b9c9-deadba9815df",
      "backupType": "Log",
      "path": "testdb/logs/2019-08-15T10-40-58Z.trn",
      "date": "2019-08-15T10:40:58.000Z",
      "lsn": "45000000219000001",
      "recoveryForkGuid": "03F633D8-6B5A-48F5-97F0-401440F124FD",
      "backupSize": 86528
    },
    {
      "backupId": "5e3de1ce-f5ab-4787-a057-accec64fe7af",
      "backupType": "Snapshot",
      "path": "testdb/snapshot-2019-08-15T10-45-31Z/",
      "date": "2019-08-15T10:45:47.000Z",
      "lsn": "45000000221300001",
      "recoveryForkGuid": "03F633D8-6B5A-48F5-97F0-401440F124FD",
      "backupSize": 16777216
    },
    {
      "backupId": "c57d1908-c085-43ef-9a7f-fcb482994bf7",
      "backupType": "Log",
      "path": "testdb/logs/2019-08-15T10-46-03Z.trn",
      "date": "2019-08-15T10:46:03.000Z",
      "lsn": "45000000222300001",
      "recoveryForkGuid": "03F633D8-6B5A-48F5-97F0-401440F124FD",
      "backupSize": 86528
    }
  ]
}

```

### Downloading all SQL Server snapshots and logs
To initiate a request to build a zip file containing the
snapshots and log backups that are required to recover to a specific
point in time, or a range of time, send a POST request to the
[`/mssql/db/{id}/download_files`](#operation/createDownloadMssqlBackupFiles) endpoint.

The usage of parameters for this POST call is identical to the usage
described for the [browse API call](#browsing-sql-server-snapshots).

```bash
curl -X POST -d \
  '{ "startPoint": {"date": "2019-08-15T10:40"}, "endPoint": {"date": "2019-08-15T10:45:47"} }' \
  "https://$cluster_address/api/v1/mssql/db/$db_id/download_files
```

The Rubrik REST API server responds with the details of the
asynchronous task that is initiated by the POST API call.

```bash
{
  "id": "$request_id",
  "status": "$request_status",
  "progress": 0,
  "startTime": "2021-03-23T20:38:05.511Z",
  "endTime": "2021-03-23T20:38:05.511Z",
  "nodeId": "$node_id",
  "error": {
    "message": "$error_message"
  },
  "links": [
    {
      "href": "string",
      "rel": "string"
    }
  ]
}
```

To check the status of the download request, send a GET request to the
(`/mssql/request/{id}`)[#operation/getMssqlAsyncRequestStatus]
endpoint where, `{id}` is the `$request_id`.

The Rubrik REST API server responds with the link to
download the zip file when the zip file is ready for download.

### Downloading specific SQL Server snapshots and logs
To initiate a request to build a zip file containing
specific snapshots and log backups, send a POST
request to the [`/mssql/db/{id}/download_files_by_id`](#operation/createDownloadMssqlBackupFilesById) endpoint with
the object IDs for the snapshots and logs to be downloaded.

```bash
curl -X POST -d \
  '{ "items": ["e8f0c6ee-fafc-4740-b9c9-deadba9815df", "c57d1908-c085-43ef-9a7f-fcb482994bf7"] }' \
  "https://$cluster_address/api/v1/mssql/db/$db_id/download_files_by_id"
```

The Rubrik REST API server responds with the details of the
asynchronous task that is initiated by the POST API call.

```bash
{
  "id": "$request_id",
  "status": "$request_status",
  "progress": 0,
  "startTime": "2021-03-23T20:38:05.511Z",
  "endTime": "2021-03-23T20:38:05.511Z",
  "nodeId": "$node_id",
  "error": {
    "message": "$error_message"
  },
  "links": [
    {
      "href": "string",
      "rel": "string"
    }
  ]
}
```
To check the status of the download request, send a GET request to the
(`/mssql/request/{id}`)[#operation/getMssqlAsyncRequestStatus]
endpoint where, `{id}` is the `$request_id`.

The Rubrik REST API server responds with the link to
download the zip file when the zip file is ready for download.

The zip file uses the naming convention of `$database_name`-
`$random_string`.zip.

The path to the log backup files inside the zip file is of the form
`$database_name`/logs/`$database_name`-`$timestamp`.trn.
For example, if the `$database_name` is `BigDatabase`, the log
backup file is located at `BigDatabase/logs/BigDatabase-2021-03-23T03-15-55Z.trn` inside the downloaded zip
file.

The path to the database snapshot files inside the zip file is of the form
`$database_name`/snapshot-`$timestamp`/`$snapshot_files`. For
example, if the `$database_name` is
`BigDatabase` and a snapshot filename is `snapshot.mdf`, then the 
location of the file inside the downloaded zip file is
`BigDatabase/snapshot-2021-03-23T03-15-55Z/snapshot.mdf`.


Make an asynchronous POST request to the [`/mssql/db/{id}/download`](#operation/downloadFromArchive) endpoint to download snapshots and logs from archival for a given database and recovery point.

```bash
curl -X POST -d \
  '{ "recoveryPoint": { "timestampMs": 12345 } }' \
  "https://$cluster_address/api/v1/mssql/db/$db_id/download"
```

A 'missed snapshot' occurs when a snapshot that is required by SLA Domain policy cannot be created.
To retrieve information about missed snapshots, send a GET request to the [`/mssql/db/{id}/missed_snapshot`](#operation/getMissedMssqlDbSnapshots) endpoint.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/mssql/db/$db_id/missed_snapshot"
```

```bash
{
  "hasMore": true,
  "data": [
    {
      "missedSnapshotTime": "2000-01-02T11:08:40.420Z"
    }
  ],
  "total": 1
}
```

To retrieve the recoverable time ranges that were missed for a specified database, send a GET request to the [`/mssql/db/{id}/missed_recoverable_range`](#operation/getMssqlDbMissedRecoverableRanges) endpoint.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/mssql/db/$db_id/missed_recoverable_range"
```

```bash
{
  "hasMore": true,
  "data": [
    {
      "beginTime": "2017-02-02T18:53:12.694Z",
      "endTime": "2017-02-02T20:53:12.694Z"
    }
  ],
  "total": 1
}
```

Delete all snapshots for a specific database with a DELETE on [`/mssql/db/{id}/snapshot`](#operation/deleteMssqlDbSnapshots).

```bash
curl -X DELETE "https://$cluster_address/api/v1/mssql/db/$db_id/snapshot"
```

Assign SLA properties to multiple objects with a POST to
[`mssql/sla_domain/assign`](#operation/assignMssqlSlaProperties).

```bash
curl -X POST -d \
  '{
    "ids": ["$id1", "$id2"],
    "copyOnly": true,
    "configuredSlaDomainId": "$slaDomainId"
  }' \
  "https://$cluster_address/api/v1/mssql/sla_domain/assign"
```

To take on demand snapshot of multiple SQL Server databases, perform POST on
 [`/mssql/db/bulk/snapshot`](#operation/createOnDemandMssqlBatchBackupV1).

```bash
curl -X POST "https://$cluster_address/api/v1/mssql/db/bulk/snapshot" -d\
'{
   "slaId": "$sla_id",
   "databaseIds": [
     "$db_id_1",
     "$db_id_2"
   ],
   "instanceIds": [
     "$instance_id_3"
   ],
   "hostIds": [
     "$host_id_4",
     "$host_id_5",
     "$host_id_6",
   ],
   "windowsClusterIds": [
     "$windows_cluster_id_7"
   ],
   "availabilityGroupIds": [
     "$availability_group_id_8"
   ],
   "forceFullSnapshot": true
 }'
```
```bash
{
  "id": "$mssql_multi_host_batch_backup_job_id",
  "status": "$job_status",
  "progress": $job_progress,
  "startTime": "$job_start_time",
  "links": [
    {
      "href": "$link1",
      "rel": "self"
    }
  ]

```

Get the details of on demand backup job of SQL Server databases by performing
 GET on
 [`/mssql/db/bulk/snapshot/{id}`](#operation/getOnDemandMssqlBatchBackupResultV1).

```bash
curl -X GET "https://$cluster_address/api/v1/mssql/db/bulk/snapshot/$mssql_multi_host_batch_backup_job_id"
```

```bash
{
  "id": "$mssql_multi_host_batch_backup_job_id",
  "successfulSnapshots": [
    {
      "databaseId": "$db_id",
      "snapshotId": "$snapshot_id"
    }
  ],
  "failedSnapshots": [
    {
      "databaseId": "$db_id_2",
      "error": "$error"
    }
  ],
  "canceledSnapshots": []
}
```


To delete all the downloaded snapshots and logs for a SQL Server database,
 perform DELETE on
 [`mssql/db/{id}/recoverable_range/download`](#operation/deleteDownloadedMssqlDbRecoverableRangesV1).

```bash
curl -X DELETE "https://$cluster_address/api/v1/mssql/db/$db_id/recoverable_range_download"
```
```bash
{
  "jobInstanceId": "$expire_mssql_download_ranges_job_id"
}
```

To get the deletion status of downloaded recoverable range, perform GET on
 [`/mssql/db/recoverable_range/download/{id}`](#operation/getDeleteMssqlDbRecoverableRangesStatusV1).

```bash
curl -X GET \
"https://$cluster_address/api/v1/mssql/db/recoverable_range/download/$expire_mssql_download_ranges_job_id"
```

```bash
{
  "id": "$expire_mssql_download_ranges_job_id"
  "status": "SUCCEEDED",
  "startTime": "$job_start_time",
  "endTime": "$job_end_time",
  "jobType": "EXPIRE_MSSQL_DOWNLOADED_RANGES",
  "nodeId": "$node_id",
  "isDisabled": $is_disabled,
  "archived": $archived
}
```

To get the default SQL Server database backup properties, perform GET on
 [`/mssql/db/defaults`](#operation/getDefaultDbPropertiesV1).

```bash
curl -X GET "https://$cluster_address/api/v1/mssql/db/defaults"
```

```bash
{
  "logBackupFrequencyInSeconds": $log_backup_frequency,
  "cbtStatus": $cbt_status,
  "logRetentionTimeInHours": $log_retention_time
}
```

To update the default SQL Server database backup properties, perform PATCH on
 [`/mssql/db/defaults`](#operation/updateDefaultDbPropertiesV1).

```bash
curl -X PATCH "https://$cluster_address/api/v1/mssql/db/defaults" -d\
 '{
    "logBackupFrequencyInSeconds": 900,
    "cbtStatus": true,
    "logRetentionTimeInHours": 168
  }'
```

```bash
{
  "logBackupFrequencyInSeconds": 900,
  "cbtStatus": true,
  "logRetentionTimeInHours": 168
}
```

## Restore

Perform a restore with a POST on [`/mssql/db/{id}/restore`](#operation/createRestoreMssqlDb) specifying the timestamp as the recovery point.

```bash
curl -X POST -d \
  '{
    "recoveryPoint": {
      "timestampMs": 12345
    }
  }' \
  "https://$cluster_address/api/v1/mssql/db/$db_id/restore"
```

A database can also be exported to another instance with a POST on [`/mssql/db/{id}/export`](#operation/createExportMssqlDb).

```bash
curl -X POST -d \
  '{
    "recoveryPoint": {
      "timestampMs": 12345
    },
    "targetInstanceId": "$instance_id",
    "targetDatabaseName": "$db_name"
  }' \
  "https://$cluster_address/api/v1/mssql/db/$db_id/export"
```

List of all the database files which are needed to restore a SQL Server
 database can be found by GET on
 [/mssql/db/{id}/restore_files](#operation/mssqlGetRestoreFilesV1).

  ```bash
  curl -X GET "https://$cluster_address/api/v1mssql/db/$db_id/restore_files?time=$time_to_restore"
  ```

  ```bash
  [
    {
      "logicalName": "$logical_file_name",
      "originalPath": "$original_file_path",
      "originalName": "$original_file_name",
      "fileType": "Data",
      "fileId": $file_id
    },
    {
      "logicalName": "$logical_file_name",
      "originalPath": "$original_file_path",
      "originalName": "$original_file_name",
      "fileType": "Log",
      "fileId": $file_id
    }
  ]
  ```

An estimate of resources needed for restoring a SQL Server database can be
 found by GET on
 [/mssql/db/{id}/restore_estimate](#operation/mssqlRestoreEstimateV1).

  ```bash
  curl -X GET "https://$cluster_address/api/v1/mssql/db/$db_id/restore_estimate?time=$time_to_restore"
  ```

  ```bash
  {
    "bytesFromCloud": $bytes_from_cloud
  }
  ```

Get compatible instances for recovery of a SQL Server database by performing
 GET on
 [/mssql/db/{id}/compatible_instance](#operation/getCompatibleMssqlInstancesV1).

```bash
curl -X GET "https://$cluster_address/api/v1/mssql/db/$db_id/compatible_instance?recovery_type=$recovery_type"
```

```bash
{
  "hasMore": false,
  "data": [
    {
      "logBackupFrequencyInSeconds": $log_backup_frequency,
      "logRetentionHours": $log_backup_retention,
      "copyOnly": $copy_only,
      "id": "$instance_id",
      "internalTimestamp": $internal_timestamp,
      "name": "$instance_name",
      "primaryClusterId": "$cluster_id",
      "rootProperties": {
        "rootType": "$root_type",
        "rootId": "$root_id",
        "rootName": "$root_name"
      },
      "version": "$version",
      "configuredSlaDomainId": "$sla_domain_id",
      "configuredSlaDomainType": "$sla_type",
      "configuredSlaDomainName": "$sla_name",
      "isRetentionLocked": $is_retention_locked,
      "unprotectableReasons": []
    }
  ],
  "total": 1
}
```

## Live Mount

Perform a Live Mount with a POST on [`/mssql/db/{id}/mount`](#operation/createMssqlMount), specifying the timestamp as the recovery point.

```bash
curl -X POST -d \
  '{
    "recoveryPoint": {
      "timestampMs": 12345
    },
    "mountedDatabaseName": "$db_name"
  }' \
  "https://$cluster_address/api/v1/mssql/db/$db_id/mount"
```

All current Live Mounts can be found with a GET on [`/mssql/db/mount`](#operation/queryMssqlMount).

```bash
curl -X GET "https://$cluster_address/api/v1/mssql/db/mount"
```

```bash
{
  "hasMore": true,
  "data": [
    {
      "id": "$mount_id",
      "sourceDatabaseId": "$source_db_id",
      "sourceRecoveryPoint": {
        "timestampMs": 12345
      },
      "targetInstanceId": "$target_instance_id",
      "creationDate": "2017-02-02T18:53:12.694Z",
      "isReady": true,
      "mountedDatabaseId": "$mounted_db_id"
    }
  ],
  "total": 1
}
```

Further details for a single Live Mount are acquired from [`/mssql/db/mount/{id}`](#operation/getMssqlMount).

```bash
curl -X GET "https://$cluster_address/api/v1/mssql/db/mount/$mount_id"
```

```bash
{
  "id": "$mount_id",
  "sourceDatabaseId": "$source_db_id",
  "sourceRecoveryPoint": {
    "timestampMs": 12345
  },
  "targetInstanceId": "$target_instance_id",
  "creationDate": "2017-02-02T18:53:12.694Z",
  "isReady": true,
  "mountedDatabaseId": "$mounted_db_id",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/mssql/db/$source_db_id",
      "rel": "sourceDatabase"
    },
    {
      "href": "https://$cluster_address/api/v1/mssql/instance/$target_instance_id",
      "rel": "targetInstance"
    },
    {
      "href": "https://$cluster_address/api/v1/mssql/db/$mounted_db_id",
      "rel": "mountedDatabase"
    }
  ],
}
```

Delete a Live Mount with a DELETE on [`/mssql/db/mount/{id}`](#operation/createMssqlUnmount).

```bash
curl -X DELETE "https://$cluster_address/api/v1/mssql/db/mount/$mount_id"
```

## Log Shipping

Create a Log Shipping Configuration with a POST on [`/mssql/db/{id}/log_shipping`](#operation/createLogShippingConfiguration).

```bash
curl -X POST -d \
  '{
    "config": {
      "targetInstanceId": "$target_instance_id",
      "targetDatabaseName": "$db_name",
      "state": "$state"
    }
  }' \
  "https://$cluster_address/api/v1/mssql/db/{id}/log_shipping"
```

All current Log Shipping Configurations can be found with a GET on [`/mssql/db/log_shipping`](#operation/queryLogShippingConfigurations).

```bash
curl -X GET "https://$cluster_address/api/v1/mssql/db/log_shipping"
```

```bash
{
  "hasMore": true,
  "data": [
    {
      "id": "$log_shipping_id",
      "lastAppliedPoint": "2017-02-02T18:53:12.694Z",
      "location": "$host_name/$instance_name",
      "primaryDatabaseId": "$primary_db_id",
      "primaryDatabaseName": "$primary_database_name",
      "secondaryDatabaseName": "$secondary_database_name",
      "secondaryDatabaseId": "$secondary_database_id",
      "state": "$state",
      "status": "OK"
    }
  ],
  "total": 1
}
```

Further details for a single Log Shipping configuration are acquired from [`/mssql/db/log_shipping/{id}`](#operation/getLogShippingConfiguration).

```bash
curl -X GET "https://$cluster_address/api/v1/mssql/db/log_shipping/{id}"
```

```bash
{
  "id": "$log_shipping_id",
  "lastAppliedPoint": "2017-02-02T18:53:12.694Z",
  "location": "$host_name/$instance_name",
  "primaryDatabaseId": "$primary_db_id",
  "primaryDatabaseName": "$primary_database_name",
  "secondaryDatabaseName": "$secondary_database_name",
  "secondaryDatabaseId": "$secondary_database_id",
  "state": "$state",
  "status": "OK"
  "links": [
    {
      "href": "https://$cluster_address/api/v1/mssql/db/$primary_db_id",
      "rel": "primaryDatabase"
    },
    {
      "href": "https://$cluster_address/api/v1/mssql/instance/$secondary_instance_id",
      "rel": "secondaryInstance"
    },
    {
      "href": "https://$cluster_address/api/v1/mssql/db/$secondary_db_id",
      "rel": "secondaryDatabase"
    }
  ],
}
```

Update a Log Shipping Configuration with a PATCH on [`/mssql/db/log_shipping/{id}`](#operation/updateLogShippingConfiguration).

```bash
curl -X PATCH -d \
  '{
    "config": {
      "state": "$state"
    }
  }' \
  "https://$cluster_address/api/v1/mssql/db/log_shipping/$id"
```

```bash
{
  "id": "$request_id",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/mssql/db/request/$request_id",
      "rel": "self"
    }
  ],
  "status": "QUEUED"
}
```

Delete a Log Shipping Configuration with a DELETE on [`/mssql/db/log_shipping/{id}`](#operation/deleteLogShippingConfiguration).

```bash
curl -X DELETE "https://$cluster_address/api/v1/mssql/db/log_shipping/$id?delete_secondary_database=true"
```

```bash
{
  "id": "$request_id",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/mssql/db/request/$request_id",
      "rel": "self"
    }
  ],
  "status": "QUEUED"
}
```

Reseed a Log Shipping Configuration with a POST on [`/mssql/db/log_shipping/{id}/reseed`](#operation/reseedSecondary)

```bash
curl -X POST -d \
  '{
    "config": {
      "state": "$state"
    }
  }' \
  "https://$cluster_address/api/v1/mssql/db/log_shipping/$id/reseed"
```

```bash
{
  "id": "$request_id",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/mssql/db/request/$request_id",
      "rel": "self"
    }
  ],
  "status": "QUEUED"
}
```

# Hierarchy

This REST API is used to get SQL Server hierarchy objects.

### Get list of immediate descendant objects
Get a list of immediate descendant objects using a GET request to
[/mssql/hierarchy/{id}/children]\
(#operation/getMssqlHierarchyChildren).

```bash
curl -X GET "https://$cluster_address/api/v1/mssql/hierarchy/{id}/children"
```

```bash
{
  "data": [
    {
      "id": "$database_id",
      "name": "$database_name",
      "objectType": "MssqlDatabase",
      "descendantCount": {},
      "hasPermissions": true,
      "isInAvailabilityGroup": false,
      "isLiveMount": false,
      "isLogShippingSecondary": false,
      "configuredSlaDomainId": "INHERIT",
      "configuredSlaDomainName": "Inherit",
      "effectiveSlaDomainId": "INHERIT",
      "effectiveSlaDomainName": "Inherit"
    }
  ],
  "hasMore": false,
  "total": 1
}
```

### Get list of descendant objects
Get a list of descendant objects using
a GET request to
[/mssql/hierarchy/{id}/descendants]\
(#operation/getMssqlHierarchyDescendants).

```bash
curl -X GET "https://$cluster_address/api/v1/mssql/hierarchy/{id}/descendants"
```

```bash
{
  "data": [
    {
      "id": "$database_id",
      "name": "$database_name",
      "objectType": "MssqlDatabase",
      "descendantCount": {},
      "hasPermissions": true,
      "isInAvailabilityGroup": false,
      "isLiveMount": false,
      "isLogShippingSecondary": false,
      "configuredSlaDomainId": "INHERIT",
      "configuredSlaDomainName": "Inherit",
      "effectiveSlaDomainId": "INHERIT",
      "effectiveSlaDomainName": "Inherit"
    }
  ],
  "hasMore": false,
  "total": 1
}
```

### Get an object
Get an object in the hierarchy using a GET request to
[/mssql/hierarchy/{id}]\
(#operation/getMssqlHierarchyObject).

```bash
curl -X GET "https://$cluster_address/api/v1/mssql/hierarchy/{id}"
```

```bash
{
  "id": "$database_id",
  "name": "$database_name",
  "objectType": "MssqlDatabase",
  "descendantCount": {},
  "hasPermissions": true,
  "isInAvailabilityGroup": false,
  "isLiveMount": false,
  "isLogShippingSecondary": false,
  "configuredSlaDomainId": "INHERIT",
  "configuredSlaDomainName": "Inherit",
  "effectiveSlaDomainId": "INHERIT",
  "effectiveSlaDomainName": "Inherit"
}
```
## Host configurations

### Retrieving SQL Server host configurations
To retrieve all the SQL Server host configurations, send a GET request to
 [`/mssql/host/configuration`](#operation/queryMssqlHostConfig).

```bash
curl -X GET "https://$cluster_address/api/v1//mssql/host/configuration"
```

The Rubrik REST API server responds with a list of all the SQL Server host 
configurations.
```bash
{
  "data": [
    {
      "hostId": "hostId",
      "enableDatabaseBatchSnapshots": "Enabled",
      "enableVdi": "Enabled",
      "enableVdiDb": "Enabled",
      "enableGroupFetch": "Enabled",
      "enableCbtBackup": "Enabled",
      "physicalHostLogBackupThrottleMaxRefCount": 10,
      "throttlePhysicalHostMaxRefCount": 3,
      "fileTransferParallelism": 8,
      "mssqlDefaultMaxDataStreamsPerDatabase": 2,
      "fileRestoreReadParallelism": 16,
      "fileRestoreWriteParallelism": 4
    }
  ],
  "hasMore": false,
  "total": 1
}
```

To retrieve the configuration of a specific SQL Server host, send a GET 
request to
 [`/mssql/host/configuration/{host_id}`](#operation/getMssqlHostConfig).

```bash
curl -X GET "https://$cluster_address/api/v1//mssql/host/configuration/{host_id}"
```

The Rubrik REST API server responds with the configuration details of the 
specified SQL Server host.

```bash
{
  "enableDatabaseBatchSnapshots": "Enabled",
  "enableVdi": "Enabled",
  "enableVdiDb": "Enabled",
  "enableGroupFetch": "Enabled",
  "enableCbtBackup": "Enabled",
  "physicalHostLogBackupThrottleMaxRefCount": 10,
  "throttlePhysicalHostMaxRefCount": 3,
  "fileTransferParallelism": 8,
  "mssqlDefaultMaxDataStreamsPerDatabase": 2,
  "fileRestoreReadParallelism": 16,
  "fileRestoreWriteParallelism": 4
}
```


### Creating a SQL Server host configuration
To create a new SQL Server host configuration, send a POST request to
 [`/mssql/host/configuration`](#operation/createMssqlHostConfig).

```bash
curl -X POST -d \
 '{
   "hostId": "hostId",
   "enableDatabaseBatchSnapshots": "Enabled",
   "enableVdi": "Enabled",
   "enableVdiDb": "Enabled",
   "enableGroupFetch": "Enabled",
   "enableCbtBackup": "Enabled",
   "physicalHostLogBackupThrottleMaxRefCount": 10,
   "throttlePhysicalHostMaxRefCount": 3,
   "fileTransferParallelism": 8,
   "mssqlDefaultMaxDataStreamsPerDatabase": 2,
   "fileRestoreReadParallelism": 16,
   "fileRestoreWriteParallelism": 4
 }' \
"https://$cluster_address/api/v1/mssql/host/configuration"
```

The Rubrik REST API server responds with the details of the new SQL Server 
host configuration.
```bash
{
  "hostId": "hostId",
  "enableDatabaseBatchSnapshots": "Enabled",
  "enableVdi": "Enabled",
  "enableVdiDb": "Enabled",
  "enableGroupFetch": "Enabled",
  "enableCbtBackup": "Enabled",
  "physicalHostLogBackupThrottleMaxRefCount": 10,
  "throttlePhysicalHostMaxRefCount": 3,
  "fileTransferParallelism": 8,
  "mssqlDefaultMaxDataStreamsPerDatabase": 2,
  "fileRestoreReadParallelism": 16,
  "fileRestoreWriteParallelism": 4
}
```

### Updating a SQL Server host configuration
To update the configuration of a specific SQL Server host, send a PATCH 
request to
 [`/mssql/host/configuration/{host_id}`](#operation/updateMssqlHostConfig).

```bash
curl -X PATCH -d \
 '{
   "enableDatabaseBatchSnapshots": true,
   "enableVdi": true,
   "enableVdiDb": false,
   "enableGroupFetch": false,
   "enableCbtBackup": false,
   "physicalHostLogBackupThrottleMaxRefCount": 10,
   "throttlePhysicalHostMaxRefCount": 3,
   "fileTransferParallelism": 8,
   "mssqlDefaultMaxDataStreamsPerDatabase": 2,
   "fileRestoreReadParallelism": 16,
   "fileRestoreWriteParallelism": 4
 }' \
"https://$cluster_address/api/v1//mssql/host/configuration/{host_id}"
```

The Rubrik REST API server responds with the updated configuration details of 
the specified SQL Server host.

```bash
{
  "enableDatabaseBatchSnapshots": "Enabled",
  "enableVdi": "Enabled",
  "enableVdiDb": "Enabled",
  "enableGroupFetch": "Enabled",
  "enableCbtBackup": "Enabled",
  "physicalHostLogBackupThrottleMaxRefCount": 10,
  "throttlePhysicalHostMaxRefCount": 3,
  "fileTransferParallelism": 8,
  "mssqlDefaultMaxDataStreamsPerDatabase": 2,
  "fileRestoreReadParallelism": 16,
  "fileRestoreWriteParallelism": 4
}
```

### Deleting a SQL Server host configuration
To delete a specific SQL Server host configuration, send a DELETE request to
 [`/mssql/host/configuration/{host_id}`](#operation/deleteMssqlHostConfig).

```bash
curl -X DELETE "https://$cluster_address/api/v1/mssql/host/configuration/{host_id}"
```

The Rubrik REST API server deletes the specified SQL Server host configuration.

# Oracle Databases

## Delete Downloaded Oracle Db Snapshots and Log Snapshots

To request an asynchronous job to expire downloaded database snapshots taken during a specified time period as well as log snapshots that contain any logs with timestamps within that time period, send a DELETE request to the [`/oracle/db/{id}/downloaded_snapshots`](#operation/deleteDownloadedSnapshots) endpoint with optional query parameters before_time and after_time.

```bash
curl -X DELETE \
  "https://$cluster_address/api/v1/oracle/db/{id}/downloaded_snapshots?before_time=2016-01-01T01:23:45.678&after_time=2016-01-01T01:23:45.678"
  ```
An async request is returned and can be polled to retrieve the job status.

```bash
{
  "id": "$request_id",
  "links": [
    {
      "href": "https://$cluster_address/api/internal/oracle/request/$request_id",
      "rel": "self"
    }
  ],
  "status": "QUEUED"
}
```

## Provide Estimate for Restore Operation Download

To request the number of bytes that must be downloaded for a restore operation for an Oracle database, send a GET request to the [`/oracle/db/{id}/restore_estimate`](#operation/oracleRestoreEstimate) endpoint with the snapshot ID or the time to be restored to.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/oracle/db/{id}/restore_estimate?recovery_time=2016-01-01T01:23:45.678"
```
An OracleRestoreEstimateResult object is returned which stores the number of bytes which are needed to restore.

```bash
{
  "bytesToRestore": "$bytesToRestore",
}
```

## Bulk Update Oracle Databases

To update a list of Oracle Databases in bulk, send a PATCH request to the [`/oracle/db/bulk`](#operation/bulkUpdateOracleDb) endpoint with a bulk_update_properties to complete a update.

```bash
curl -X PATCH \
  -d '{
    "ids": "$ids",
    "logBackupFrequencyInMinutes": "$logBackupFrequencyInMinutes",
    "logRetentionHours": "$logRetentionHours",
    "hostLogRetentionHours": "$hostLogRetentionHours",
    "numChannels": "$numChannels",
    "hostMount": "string",
    "configuredSlaDomainIdDeprecated": "string",
    "nodeOrder": [
      {
        "nodeName": "string",
        "order": 0
      }
    ]
  }' \
  "https://$cluster_address/api/v1/oracle/db/bulk"
```

A BulkOracleDbDetails object contains an array of OracleDbDetail is returned.

## Bulk Update Oracle Hosts

To update a list of Oracle hosts in bulk, send a PATCH request to the [`/oracle/host/bulk`](#operation/bulkUpdateOracleHost) endpoint with a bulk_update_properties to complete a update.

```bash
curl -X PATCH \
  -d '{
    "ids": "$ids",
    "logBackupFrequencyInMinutes": "$logBackupFrequencyInMinutes",
    "logRetentionHours": "$logRetentionHours",
    "hostLogRetentionHours": "$hostLogRetentionHours",
    "numChannels": "$numChannels",
    "hostMount": "string",
    "configuredSlaDomainIdDeprecated": "string",
    "nodeOrder": [
      {
        "nodeName": "string",
        "order": 0
      }
    ]
  }' \
  "https://$cluster_address/api/v1/oracle/host/bulk"
```

A BulkOracleHostDetails object contains an array of OracleHostDetail is returned.

## Bulk Update Oracle RACs

To update a list of Oracle RACs in bulk, send a PATCH request to the [`/oracle/rac/bulk`](#operation/bulkUpdateOracleRac) endpoint with a bulk_update_properties to complete a update.

```bash
curl -X PATCH \
  -d '{
    "ids": "$ids",
    "logBackupFrequencyInMinutes": "$logBackupFrequencyInMinutes",
    "logRetentionHours": "$logRetentionHours",
    "hostLogRetentionHours": "$hostLogRetentionHours",
    "numChannels": "$numChannels",
    "hostMount": "string",
    "configuredSlaDomainIdDeprecated": "string",
    "nodeOrder": [
      {
        "nodeName": "string",
        "order": 0
      }
    ]
  }' \
  "https://$cluster_address/api/v1/oracle/rac/bulk"
```

A BulkOracleRacDetails object contains an array of OracleRacDetail is returned.

## Trigger a ORACLE_VALIDATE_BACKUP job to validate backups of selected recovery point on a choosing Oracle host

To request an asynchronous job to validate backups of selected recovery point on a choosing Oracle host or Oracle RAC, send a POST request to the [`/oracle/db/{id}/validate`](#operation/createOracleValidateBackupJob) endpoint with a OracleValidateConfig.

```bash
curl -X POST \
  -d '{
    "config": {
      "recoveryPoint": { "timestampMs": 12345 },
      "targetOracleHostOrRacId": "54321":,
      "sgaMaxSize": 4,
      "targetOracleHome": "/fullpath/for/oracleHome",
      "targetMountPath": "/fullpath/for/mountPath",
      "numChannels": 4
    }
  }' \
  "https://$cluster_address/api/v1/oracle/db/{id}/validate
  ```
An async request is returned and can be polled to retrieve the job status.

```bash
{
  "id": "$request_id",
  "links": [
    {
      "href": "https://$cluster_address/api/internal/oracle/request/$request_id",
      "rel": "self"
    }
  ],
  "status": "QUEUED"
}
```

## Get a download link of example Advanced Recovery Options file

To get a link to download an example Advanced Recovery Options file, send a GET request to the [`/oracle/aco_example_download_link`](#operation/getExampleAcoDownloadLink) endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/oracle/aco_example_download_link"
```

An OracleFileDownloadLink object is returned which has a link to download the sample Advanced Recovery Options file.

## Update Oracle Data Guard Group

To update an Oracle Data Guard group, send a PATCH request to the [`/oracle/data_guard_group/{id}`](#operation/updateOracleDataGuardGroup) endpoint. Edit the update_properties field with the properties to be updated.

```bash
curl -X PATCH \
  -d '{
    "logBackupFrequencyInMinutes": "$logBackupFrequencyInMinutes",
    "logRetentionHours": "$logRetentionHours",
    "hostLogRetentionHours": "$hostLogRetentionHours",
    "numChannels": "$numChannels",
    "hostMount": "string",
    "shouldBackupFromPrimaryOnly": false,
    "preferredDGMemberUniqueNames": ["unique_name"]
    ]
  }' \
  "https://$cluster_address/api/v1/oracle/data_guard_group/{id}"
```

The Rubrik REST API server responds with an OracleDbDetail object containing information about the Data Guard group.
```bash
{
  "id": "OracleDatabase:::1e7d288f-deed-4d72-a3a2-ad578c093f2e",
  "name": "rbk",
  "configuredSlaDomainId": "INHERIT",
  "configuredSlaDomainName": "Inherit",
  "configuredSlaDomainType": "ProtectionSla",
  "primaryClusterId": "55a8c22c-424c-41ee-91e0-94c282281e4b",
  "isConfiguredSlaDomainRetentionLocked": false,
  "effectiveSlaDomainId": "UNPROTECTED",
  "effectiveSlaDomainName": "Unprotected",
  "isEffectiveSlaDomainRetentionLocked": false,
  "effectiveSlaSourceObjectId": "Global:::All",
  "slaAssignment": "Unassigned",
  "retentionSlaDomainId": "UNPROTECTED",
  "infraPath": [],
  "isRelic": false,
  "numTablespaces": 0,
  "logBackupFrequencyInMinutes": 0,
  "numMissedSnapshot": 0,
  "includeBackupTaskInfo": true,
  "isDbLocalToTheCluster": true,
  "hostLogRetentionHours": 0,
  "isArchiveLogModeEnabled": true,
  "dbUniqueName": "DG_rbk",
  "dataGuardType": "DataGuardGroup",
  "dataGuardGroupMembers": [
    {
      "dbUniqueName": "rbk",
      "role": "PRIMARY",
      "standaloneHostId": "OracleHost:::d108cb3f-e4c6-4579-8aa1-f471940d6f8f",
      "standaloneHostName": "oel75-121-dg-primary-20210421023956"
    }
  ],
  "logRetentionHours": 720,
  "numChannels": 1,
  "hostMount": "/var/rubrik/oracle",
  "tablespaces": [],
  "snapshotCount": 0,
  "isLiveMount": false,
  "hostsInfo": [
    {
      "id": "Host:::0134de15-10b7-4296-a0b4-7232d2a9edaa",
      "hostname": "10.0.188.224",
      "oracleSysDbaUser": "oracle",
      "oracleQueryUser": "oracle"
    }
  ],
  "shouldBackupFromPrimaryDGGroupMemberOnly": true,
  "preferredDGMemberUniqueNames": []
}
```

## Retrieving Oracle databases
### Retrieving a summary of all Oracle databases

To get a list of Oracle databases, send a GET request to the [`/oracle/db`](#operation/queryOracleDbV1) endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/oracle/db"
```

The Rubrik REST API server responds with a list of OracleDbSummary objects containing information about the databases.

```bash
{
  "hasMore": true,
  "data": [
    {
      "id": "OracleDatabase:::912819e7-d603-4c1a-860a-88ba9c15b930",
      "name": "rbk",
      "configuredSlaDomainId": "INHERIT",
      "configuredSlaDomainName": "Inherit",
      "configuredSlaDomainType": "ProtectionSla",
      "primaryClusterId": "55a8c22c-424c-41ee-91e0-94c282281e4b",
      "isConfiguredSlaDomainRetentionLocked": false,
      "effectiveSlaDomainId": "UNPROTECTED",
      "effectiveSlaDomainName": "Unprotected",
      "isEffectiveSlaDomainRetentionLocked": false,
      "effectiveSlaSourceObjectId": "Global:::All",
      "slaAssignment": "Unassigned",
      "retentionSlaDomainId": "UNPROTECTED",
      "infraPath": [
        {
          "name": "oel75-121-dg-primary-20210421023956",
          "id": "OracleHost:::d108cb3f-e4c6-4579-8aa1-f471940d6f8f"
        }
      ],
      "isRelic": false,
      "numTablespaces": 5,
      "numMissedSnapshot": 0,
      "includeBackupTaskInfo": false,
      "isDbLocalToTheCluster": true,
      "hostLogRetentionHours": 0,
      "sid": "rbk",
      "standaloneHostId": "OracleHost:::d108cb3f-e4c6-4579-8aa1-f471940d6f8f",
      "numInstances": 1,
      "instances": [
        {
          "hostName": "10.0.188.224",
          "instanceSid": "rbk"
        }
      ],
      "isArchiveLogModeEnabled": true,
      "standaloneHostName": "oel75-121",
      "archiveLogDestinations": [
        ""
      ],
      "isPrimary": true,
      "dbUniqueName": "rbk",
      "databaseRole": "PRIMARY",
      "dataGuardType": "DataGuardMember",
      "dataGuardGroupId": "OracleDatabase:::1e7d288f-deed-4d72-a3a2-ad578c093f2e",
      "dataGuardGroupName": "DG_rbk"
    }
  ],
  "total": 1
}
```

### Retrieving detailed information for a specific Oracle database

To get detailed information about an Oracle Database, send a GET request to the [`/oracle/db/{id}`](#operation/getOracleDbV1) endpoint where, {id} is the ID of the Oracle database.

```bash
curl -X GET "https://$cluster_address/api/v1/oracle/db/$oracle_database_id"
```

The Rubrik REST API server responds with an OracleDbDetail object containing information about the specified  database.

```bash
{
  "id": "OracleDatabase:::912819e7-d603-4c1a-860a-88ba9c15b930",
  "name": "rbk",
  "configuredSlaDomainId": "INHERIT",
  "configuredSlaDomainName": "Inherit",
  "configuredSlaDomainType": "ProtectionSla",
  "primaryClusterId": "55a8c22c-424c-41ee-91e0-94c282281e4b",
  "isConfiguredSlaDomainRetentionLocked": false,
  "effectiveSlaDomainId": "UNPROTECTED",
  "effectiveSlaDomainName": "Unprotected",
  "isEffectiveSlaDomainRetentionLocked": false,
  "effectiveSlaSourceObjectId": "Global:::All",
  "slaAssignment": "Unassigned",
  "retentionSlaDomainId": "UNPROTECTED",
  "infraPath": [
    {
      "name": "oel75-121-dg-primary-20210421023956",
      "id": "OracleHost:::d108cb3f-e4c6-4579-8aa1-f471940d6f8f"
    }
  ],
  "isRelic": false,
  "numTablespaces": 5,
  "logBackupFrequencyInMinutes": 0,
  "numMissedSnapshot": 0,
  "includeBackupTaskInfo": true,
  "isDbLocalToTheCluster": true,
  "hostLogRetentionHours": 0,
  "sid": "rbk",
  "standaloneHostId": "OracleHost:::d108cb3f-e4c6-4579-8aa1-f471940d6f8f",
  "numInstances": 1,
  "instances": [
    {
      "hostName": "10.0.188.224",
      "instanceSid": "rbk"
    }
  ],
  "isArchiveLogModeEnabled": true,
  "standaloneHostName": "oel75-121-dg-primary-20210421023956",
  "archiveLogDestinations": [
    ""
  ],
  "isPrimary": true,
  "dbUniqueName": "rbk",
  "databaseRole": "PRIMARY",
  "dataGuardType": "DataGuardMember",
  "dataGuardGroupId": "OracleDatabase:::1e7d288f-deed-4d72-a3a2-ad578c093f2e",
  "dataGuardGroupName": "DG_rbk",
  "logRetentionHours": 720,
  "numChannels": 1,
  "hostMount": "/var/rubrik/oracle",
  "tablespaces": [
    "SYSAUX",
    "SYSTEM",
    "UNDOTBS1",
    "USERS",
    "TEMP"
  ],
  "snapshotCount": 0,
  "oracleHome": "/u01/app/oracle/product/12.1.0.2/dbhome_1",
  "isLiveMount": false,
  "hostsInfo": [
    {
      "id": "Host:::0134de15-10b7-4296-a0b4-7232d2a9edaa",
      "hostname": "10.0.188.224",
      "oracleSysDbaUser": "oracle",
      "oracleQueryUser": "oracle"
    }
  ]
}
```

## Updating Oracle Database

To update an Oracle database, send a PATCH request to the [`/oracle/db/{id}`](#operation/updateOracleDbV1) endpoint. Edit the update_properties field with the properties to be updated.

```bash
curl -X PATCH \
  -d '{
    "logBackupFrequencyInMinutes": "$logBackupFrequencyInMinutes",
    "logRetentionHours": "$logRetentionHours",
    "hostLogRetentionHours": "$hostLogRetentionHours",
    "numChannels": "$numChannels",
    "hostMount": "$hostMount"
    ]
  }' \
  "https://$cluster_address/api/v1/oracle/db/$oracle_database_id"
```

The Rubrik REST API server responds with an OracleDbDetail object containing information about the updated database.
```bash
{
  "id": "OracleDatabase:::912819e7-d603-4c1a-860a-88ba9c15b930",
  "name": "rbk",
  "configuredSlaDomainId": "INHERIT",
  "configuredSlaDomainName": "Inherit",
  "configuredSlaDomainType": "ProtectionSla",
  "primaryClusterId": "55a8c22c-424c-41ee-91e0-94c282281e4b",
  "isConfiguredSlaDomainRetentionLocked": false,
  "effectiveSlaDomainId": "UNPROTECTED",
  "effectiveSlaDomainName": "Unprotected",
  "isEffectiveSlaDomainRetentionLocked": false,
  "effectiveSlaSourceObjectId": "Global:::All",
  "slaAssignment": "Unassigned",
  "retentionSlaDomainId": "UNPROTECTED",
  "infraPath": [
    {
      "name": "oel75-121-dg-primary-20210421023956",
      "id": "OracleHost:::d108cb3f-e4c6-4579-8aa1-f471940d6f8f"
    }
  ],
  "isRelic": false,
  "numTablespaces": 5,
  "logBackupFrequencyInMinutes": 0,
  "numMissedSnapshot": 0,
  "includeBackupTaskInfo": true,
  "isDbLocalToTheCluster": true,
  "hostLogRetentionHours": 0,
  "sid": "rbk",
  "standaloneHostId": "OracleHost:::d108cb3f-e4c6-4579-8aa1-f471940d6f8f",
  "numInstances": 1,
  "instances": [
    {
      "hostName": "10.0.188.224",
      "instanceSid": "rbk"
    }
  ],
  "isArchiveLogModeEnabled": true,
  "standaloneHostName": "oel75-121-dg-primary-20210421023956",
  "archiveLogDestinations": [
    ""
  ],
  "isPrimary": true,
  "dbUniqueName": "rbk",
  "databaseRole": "PRIMARY",
  "dataGuardType": "DataGuardMember",
  "dataGuardGroupId": "OracleDatabase:::1e7d288f-deed-4d72-a3a2-ad578c093f2e",
  "dataGuardGroupName": "DG_rbk",
  "logRetentionHours": 720,
  "numChannels": 1,
  "hostMount": "/var/rubrik/oracle",
  "tablespaces": [
    "SYSAUX",
    "SYSTEM",
    "UNDOTBS1",
    "USERS",
    "TEMP"
  ],
  "snapshotCount": 0,
  "oracleHome": "/u01/app/oracle/product/12.1.0.2/dbhome_1",
  "isLiveMount": false,
  "hostsInfo": [
    {
      "id": "Host:::0134de15-10b7-4296-a0b4-7232d2a9edaa",
      "hostname": "10.0.188.224",
      "oracleSysDbaUser": "oracle",
      "oracleQueryUser": "oracle"
    }
  ]
}
```

## Get Oracle Advanced Cloning Options (ACO) parameters

To get a list of supported ACO parameter names, send a GET request to the [`/oracle/aco_parameter_list`](#operation/getAcoParameterList) endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/oracle/aco_parameter_list"
```

The Rubrik REST API server responds with an OracleAcoParameterList object which contains the list of supported ACO parameter names.

## Validate an Oracle Advanced Cloning Options (ACO) config file

To validate an ACO file, send a POST request to the [`/oracle/validate_aco_file`](#operation/validateOracleAcoFile) endpoint. Send the base 64 encoded string of the ACO file contents in the body and a boolean determining whether the ACO file is for a Live Mount or not, as a query parameter.
```bash
curl -X POST \
  -d '{
    "aco_contents_base64": "$aco_contents_base64"
  }' \
  "https://$cluster_address/api/v1/oracle/validate_aco_file?is_live_mount={is_live_mount}
```

The Rubrik REST API server validates the given ACO file contents and returns an OracleAcoValidationResult containing the validation result of the ACO file given.

# vApps

The Rubrik cluster protects vApps running in a VMware vCloud Director environment through the vCloud Director REST APIs.
The Rubrik cluster must connect to the underlying vCenter servers to protect vApps.

## vApp Templates

The Rubrik cluster protects vApp template objects through the vCloud Director APIs.

## vCloud Director server

A Rubrik cluster protects and manages vApps and vApp templates through the vCloud Director server that administers those
vApps. After a vCloud Director server is added to a Rubrik cluster, the Rubrik cluster automatically discovers the vApps
administered under the server.

### Retrieving details for a vApp template snapshot export

To retrieve the options available for exporting a specified vApp template snapshot to an organization vDC and available
storage policies, send a GET request
to [`/vcd/vapp/template/snapshot/{snapshot_id}/export/options`](#operation/getVappTemplateSnapshotExportOptions).

To filter the results of the GET request sent to the 
[`/vcd/vapp/template/snapshot/{snapshot_id}/export/options`](#operation/getVappTemplateSnapshotExportOptions)
endpoint, configure the following query parameters before sending the request.

| Parameter  | Required | Type   | Description |
| ---------- | -------- | ------ | ----------- |
|`catalog_id`| Required | string | ID of the target Catalog object.|
|`name`      | Required | string | Name of template object to be created. This is used to verify the existence of a template with the given name. Templates must have unique names.
|`org_vdc_id`| Optional | string | ID assigned to a target organization VDC object. This parameter is required when advanced export options are used.

A vApp template export targets a catalog and requires a valid storage policy and organization vDC. There are three
options available for export of a vApp template -

* **OriginalVdcExportOptions** - This option is used to export to the original organization vDC of the vApp template
  when the snapshot was taken. Only available when the catalog to export is under the same organization as the original
  organization vDC and the vDC is still active.
  `org_vdc_id` is not required when using this option.
* **DefaultCatalogExportOptions** - This option is used to export to the vDC corresponding to the default storage policy
  of the catalog. This option is unavailable for catalogs that do not have storage policies.
  `org_vdc_id` is not required when using this option.
* **AdvancedExportOptions** - This option is used to export to a specific organization vDC under the same organization
  as the Catalog to export. The GET request returns the choices of storage policies available.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/vcd/vapp/template/snapshot/$snapshot_id/export/options?catalog_id=$catalog_id&name=$template_name"
```

The Rubrik REST API responds with a `VappTemplateExportOptionsUnion` object which has fields for all the above options.

**Note:** To shorten the example, the response uses ellipses to replace some members.

```bash
{
  "hasMore": false,
  "originalVdcExportOptions" :
    {
      "orgVdcId": "$org_vdc_id1",
      "availableStoragePolicies": [
        ...
      ]
    },
   "defaultCatalogExportOptions" :
    {
      "orgVdcId": "$org_vdc_id1",
      "availableStoragePolicies": [
        ...
      ]
    },
   "advancedExportOptions" :
    {
      "orgVdcId": "$org_vdc_id1",
      "availableStoragePolicies": [
        ...
      ]
    }
}
```

### Exporting a vApp template snapshot

To create a new vApp template in a catalog using the export feature, send a POST request to the 
[`/vcd/vapp/template/snapshot/{snapshot_id}/export`](#operation/createVappTemplateSnapshotExport) endpoint.
The request takes the snapshot_id as a path parameter. The request payload includes the parameters described in the 
following table.

| Name            | Required | Type   | Description |
| --------------- | -------- | ------ | ----------- |
|`name`           | Required | string | Name of vApp template to be created.|
|`catalogId`      | Required | string | ID of the Catalog where the vApp template is created.|
|`orgVdcId`       | Required | string | ID of the organization vDC where the vApp template is created.|
|`storagePolicyId`| Required | string | ID of the organization vDC storage policy to be used. In case a storage policy ID is not provided, the default storage policy of the organization vDC is used.

**Note:** The Catalog and organization vDC must belong to the same organization. When providing a storage policy, that
storage policy must be present in the organization vDC.

```bash
curl -X POST -d \
  '{
    "name": "$template_name",
    "catalogId": "$catalog_id",
    "orgVdcId": "$org_vdc_id"
   }' \
   "https://$cluster_address/api/v1/vcd/vapp/template/snapshot/$snapshot_id/export"
```

The Rubrik REST API server initiates the asynchronous request task and responds with the the details of the
AsyncRequestStatus request.

```bash
{
  "id": "$request_id",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "$timestamp",
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vcd/vapp/request/$request_id",
      "rel": "self"
    }
  ]
}
```

### Retrieving summary of vApps

To retrieve the summary information for all vCD vApp objects, send a GET request to the
[`/vcd/vapp`](#operation/queryVcdVappsV1) endpoint. The parameters described in the following table are available to 
filter the results of the GET request.

| Name                     | Required | Type    | Description |
| ------------------------ | -------- | ------- | ----------- |
|`sort_by`                 | Optional | string  | Attribute to sort the vCD vApp list on.|
|`sort_order`              | Optional | string  | Order for sorting the results, either ascending or descending.|
|`limit`                   | Optional | int     | Limit the number of matches returned.|
|`offset`                  | Optional | int     | Number of matches to ignore from the beginning of the results.|
|`name`                    | Optional | string  | Search for a vCD vApp object by name.|
|`is_relic`                | Optional | boolean | Filter by isRelic field of vCD vApp object. Returns both relic and non-relic vApps when this value is not specified.|
|`effective_sla_domain_id` | Optional | string  | SLA Domain applied to the virtual machine, either directly or derived.|
|`primary_cluster_id`      | Optional | string  | Filter by primary cluster ID, or **local**.|
|`sla_assignment`          | Optional | string  | Filter by SLA assignment type.|
|`include_backup_task_info`| Optional | boolean | Include backup task information in response.|

 ```bash
 curl -X GET "https://$cluster_address/api/v1/vcd/vapp"
 ```

The Rubrik REST API server responds with a list of vApp objects that fit the specified parameters. The response is a 
List of VcdVappSummary objects.

 ```bash
 {
  "hasMore": true,
  "data": [
    {
      "id": "$vappId",
      "name": "$vappName",
      "configuredSlaDomainId": "INHERIT",
      "configuredSlaDomainName": "Inherit",
      "configuredSlaDomainType": "ProtectionSla",
      "primaryClusterId": "$primaryClusterId",
      "isConfiguredSlaDomainRetentionLocked": true,
      "slaLastUpdateTime": "$slaLastUpdateTime",
      "effectiveSlaDomainId": "UNPROTECTED",
      "effectiveSlaDomainName": "Unprotected",
      "isEffectiveSlaDomainRetentionLocked": true,
      "effectiveSlaDomainPolarisManagedId": "$effectiveSlaDomainPolarisManagedId",
      "effectiveSlaSourceObjectId": "$effectiveSlaSourceObjectId",
      "effectiveSlaSourceObjectName": "$effectiveSlaSourceObjectName",
      "slaAssignment": "Derived",
      "retentionSlaDomainId": "$retentionSlaDomainId",
      "vcdClusterId": "$vcdId",
      "vcdClusterName": "$vcdClusterName",
      "infraPath": [
        ...
      ],
      "isRelic": true,
      "numMissedSnapshot": 0,
      "lastSnapshotTime": "$lastSnapshotTime",
      "includeBackupTaskInfo": true,
      "currentBackupTaskInfo": {
        "taskStatus": "Queued",
        "queueTime": "$queueTime",
        "expectedEndTime": "$expectedEndTime"
      },
      "isTemplate": true,
      "catalogId": "$catalogId",
      "pendingSlaDomain": {
        "objectId": "$objectId",
        "pendingSlaDomainId": "$pendingSlaDomain",
        "pendingSlaDomainName": "$pendingSlaDomainName",
        "isPendingSlaDomainRetentionLocked": true
      }
    }
  ],
  "total": 0
}
 ```

### Retrieving details for a specific vApp

To retrieve detailed information about a specific vApp, send a GET request to
[`/vcd/vapp/{id}`](#operation/getVcdVappV1), where {id} is the ID of a vApp object.

 ```bash
 curl -X GET -d "https://$cluster_address/api/v1/vcd/vapp/{id}"
 ```

The Rubrik REST API server responds with the details (VcdVappDetail) of the specified vApp object.

 ```bash
{
  "id": "string",
  "status": "string",
  "progress": 0,
  "startTime": "2021-03-16T04:37:38.913Z",
  "endTime": "2021-03-16T04:37:38.913Z",
  "nodeId": "string",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "string",
      "rel": "string"
    }
  ]
}
 ```

### Updating vApp

To make changes to the parameters of a specified vApp object, send a PATCH request
to [`/vcd/vapp/{id}`](#operation/updateVcdVappV1), where {id} is the ID of the vApp object to be updated. The request
payload of the PATCH request includes the parameters to be updated.

| Name |  Description | Notes |
  | ---- | ------------ | ----- |
| configured_sla_domain_id | ID of the SLA Domain object that manages protection for the specified vApp object. Existing snapshots of the vApp object will be retained with the configuration of the specified SLA Domain. | optional |
| is_paused | Boolean value that indicates whether protection activity is paused for the specified vApp. Set to &#39;true&#39; when protection activity is paused and &#39;false&#39; when protection activity is not paused. Protection activity includes: backup, replication, and archiving. | optional |
| is_best_effort_synchronization_enabled | Boolean value that indicates whether the Rubrik cluster should attempt taking synchronized snapshots across all child Virtual Machines of the vApp object. | optional |
| vcd_vm_moids_to_exclude_from_snapshot | Array containing vCloud Director Virtual Machine moids that will be excluded from the vApp snapshots. | optional |

```bash
 curl -X PATCH -d \
  '{
    "configuredSlaDomainId": "$sla_domain_id",
    "isPaused": "true",
    "isBestEffortSynchronizationEnabled": "true",
    "vcdVmMoidsToExcludeFromSnapshot": "$vm_moids_to_exclude"
   }' \
   "https://$cluster_address/api/v1/vcd/vapp/{id}"
 ```

The Rubrik REST API server responds with the details (VcdVappDetail) of the updated vApp object.

 ```bash
{
  "configuredSlaDomainId": "INHERIT",
  "isPaused": true,
  "isBestEffortSynchronizationEnabled": true,
  "vcdVmMoidsToExcludeFromSnapshot": [
    ...
  ],
  "id": "$vappId",
  "name": "$name",
  "configuredSlaDomainName": "Inherit",
  "configuredSlaDomainType": "ProtectionSla",
  "primaryClusterId": "$primaryClusterId",
  "isConfiguredSlaDomainRetentionLocked": true,
  "slaLastUpdateTime": "$slaLastUpdateTime",
  "effectiveSlaDomainId": "UNPROTECTED",
  "effectiveSlaDomainName": "Unprotected",
  "isEffectiveSlaDomainRetentionLocked": true,
  "effectiveSlaDomainPolarisManagedId": "$effectiveSlaDomainPolarisManagedId",
  "effectiveSlaSourceObjectId": "$effectiveSlaSourceObjectId",
  "effectiveSlaSourceObjectName": "effectiveSlaSourceObjectName",
  "slaAssignment": "Derived",
  "retentionSlaDomainId": "$retentionSlaDomainId",
  "vcdClusterId": "$vcdClusterId",
  "vcdClusterName": "$vcdClusterName",
  "infraPath": [
    ...
  ],
  "isRelic": true,
  "numMissedSnapshot": 0,
  "lastSnapshotTime": "$lastSnapshotTime",
  "includeBackupTaskInfo": true,
  "currentBackupTaskInfo": {
    "taskStatus": "Queued",
    "queueTime": "$queueTime",
    "expectedEndTime": "$expectedEndTime"
  },
  "isTemplate": true,
  "catalogId": "$catalogId",
  "pendingSlaDomain": {
    "objectId": "$objectId",
    "pendingSlaDomainId": "$pendingSlaDomainId",
    "pendingSlaDomainName": "$pendingSlaDomainName",
    "isPendingSlaDomainRetentionLocked": true
  },
  "networks": [
    ...
  ],
  "vms": [
    ...
  ]
}
 ```

### Retrieving summary information for all vApp snapshots

## vApp snapshots

To retrieve summary information for each of the snapshot objects of a specified vApp object, send a GET request
to [`/vcd/vapp/{id}/snapshot`](#operation/queryVappSnapshotV1), where {id} is the ID of the vApp object.

 ```bash
 curl -X GET -d "https://$cluster_address/api/v1/vcd/vapp/{id}/snapshot"
 ```

The Rubrik REST API server responds with the details of all the snapshots of the specified vApp. 
The response is a List of VcdVappSnapshotSummary objects.

 ```bash
{
  "hasMore": true,
  "data": [
    {
      "id": "$vappId",
      "date": "$date",
      "expirationDate": "$expirationDate",
      "sourceObjectType": "$sourceObjectType",
      "isOnDemandSnapshot": true,
      "isCustomRetentionApplied": true,
      "cloudState": 0,
      "consistencyLevel": "#consistencyLevel",
      "indexState": 0,
      "replicationLocationIds": [
        "string"
      ],
      "archivalLocationIds": [
        "string"
      ],
      "slaId": "$slaId",
      "slaName": "$slaName",
      "isRetainedByRetentionLockSla": true,
      "cloudStorageTier": "Hot",
      "isPlacedOnLegalHold": true,
      "snapshotRetentionInfo": {
        "localInfo": {
          "id": "string",
          "name": "string",
          "isSnapshotPresent": true,
          "isExpirationDateCalculated": true,
          "expirationTime": "$expirationTime",
          "snapshotFrequency": "$snapshotFrequency",
          "isExpirationInformationUnavailable": true
        },
        "archivalInfos": [
          {
            "id": "$id",
            "name": "$name",
            "isSnapshotPresent": true,
            "isExpirationDateCalculated": true,
            "expirationTime": "$expirationTime",
            "snapshotFrequency": "$snapshotFrequency",
            "isExpirationInformationUnavailable": true
          }
        ],
        "replicationInfos": [
          {
            "id": "$id",
            "name": "$name",
            "isSnapshotPresent": true,
            "isExpirationDateCalculated": true,
            "expirationTime": "$expirationTime",
            "snapshotFrequency": "$snapshotFrequency",
            "isExpirationInformationUnavailable": true
          }
        ],
        "cloudNativeLocationInfo": [
          {
            "id": "$id",
            "name": "$name",
            "isSnapshotPresent": true,
            "isExpirationDateCalculated": true,
            "expirationTime": "$expirationTime",
            "snapshotFrequency": "$snapshotFrequency",
            "isExpirationInformationUnavailable": true
          }
        ]
      },
      "parentSnapshotId": "$parentSnapshotId",
      "vappName": "$vappName",
      "isSynchronized": true,
      "vmSnapshots": [
        {
          "vcenterVmId": "$vcenterVmId",
          "vmSnapshotId": "$vmSnapshotId",
          "vmName": "$vmName",
          "vcdVmMoid": "$vcdVmMoid",
          "indexState": 0
        }
      ]
    }
  ],
  "total": 0
}
 ```

## Creating an on-demand snapshot for a vApp

To create an on-demand snapshot for a specified vApp object, send a POST request to
[`/vcd/vapp/{id}/snapshot`](#operation/createOnDemandSnapshotV1), where {id} is the ID of the vApp object.

 ```bash
 curl -X POST -d "https://$cluster_address/api/v1/vcd/vapp/$id/snapshot"
 ```

The Rubrik REST API server initiates an asynchronous job to create an on-demand snapshot and returns the details of the
AsyncRequestStatus request.

 ```bash
{
  "id": "$requestId",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "$startTime",
  "endTime": "$endTime",
  "nodeId": "$nodeId",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vcd/vapp/request/$requestId",
      "rel": "self"
    }
  ]
}
 ```

### Deleting all snapshots of a vApp object

To delete all snapshots for a specified vApp object, send a DELETE request to
[`/vcd/vapp/{id}/snapshot`](#operation/deleteVappSnapshotsV1), where {id} is the ID of the vApp object whose snapshot
needs to be deleted.

 ```bash
 curl -X DELETE -d "https://$cluster_address/api/v1/vcd/vapp/$id/snapshot"
 ```

The Rubrik REST API server deletes all snapshots of the specified vApp.

 ```bash
{"Snapshots deleted successfully."}
 ```

## Retrieving details about a specific vApp snapshot

To retrieve detailed information about a specified snapshot for a vApp object, send a GET request
to [`/vcd/vapp/snapshot/{id}`](#operation/getVappSnapshotV1), where {id} is the ID of the snapshot object whose details
are required.

```bash
 curl -X GET -d "https://$cluster_address/api/v1/vcd/vapp/snapshot/{id}"
 ```

The Rubrik REST API server fetches details (VcdVappSnapshotDetail) of the specified vApp snapshot.

 ```bash
{
  "id": "$id",
  "date": "$date",
  "expirationDate": "$expirationDate",
  "sourceObjectType": "$sourceObjectType",
  "isOnDemandSnapshot": true,
  "isCustomRetentionApplied": true,
  "cloudState": 0,
  "consistencyLevel": "$consistencyLevel",
  "indexState": 0,
  "replicationLocationIds": [
    "string"
  ],
  "archivalLocationIds": [
    "string"
  ],
  "slaId": "$slaId",
  "slaName": "$slaName",
  "isRetainedByRetentionLockSla": true,
  "cloudStorageTier": "Hot",
  "isPlacedOnLegalHold": true,
  "snapshotRetentionInfo": {
    "localInfo": {
      "id": "string",
      "name": "string",
      "isSnapshotPresent": true,
      "isExpirationDateCalculated": true,
      "expirationTime": "$expirationTime",
      "snapshotFrequency": "$snapshotFrequency",
      "isExpirationInformationUnavailable": true
    },
    "archivalInfos": [
      {
        "id": "$id",
        "name": "$name",
        "isSnapshotPresent": true,
        "isExpirationDateCalculated": true,
        "expirationTime": "$expirationTime",
        "snapshotFrequency": "$snapshotFrequency",
        "isExpirationInformationUnavailable": true
      }
    ],
    "replicationInfos": [
      {
        "id": "$id",
        "name": "$name",
        "isSnapshotPresent": true,
        "isExpirationDateCalculated": true,
        "expirationTime": "$expirationTime",
        "snapshotFrequency": "$snapshotFrequency",
        "isExpirationInformationUnavailable": true
      }
    ],
    "cloudNativeLocationInfo": [
      {
        "id": "$id",
        "name": "$name",
        "isSnapshotPresent": true,
        "isExpirationDateCalculated": true,
        "expirationTime": "$expirationTime",
        "snapshotFrequency": "$snapshotFrequency",
        "isExpirationInformationUnavailable": true
      }
    ]
  },
  "parentSnapshotId": "$parentSnapshotId",
  "vappName": "$vappName",
  "isSynchronized": true,
  "vmSnapshots": [
    {
      "vcenterVmId": "$vcenterVmId",
      "vmSnapshotId": "$vmSnapshotId",
      "vmName": "$vmName",
      "vcdVmMoid": "$vcdVmMoid",
      "indexState": 0,
      "networkConnections": [
        {
          "nicIndex": 0,
          "macAddress": "$macAddress",
          "addressingMode": "DHCP",
          "ipAddress": "$ipAddress",
          "vappNetworkName": "vappNetworkName",
          "isConnected": true,
          "networkAdapterType": "$networkAdapterType"
        }
      ]
    }
  ],
  "networks": [
    {
      "name": "$name",
      "parentNetworkId": "$parentNetworkId",
      "isDeployed": true
    }
  ],
  "excludedVcdVmMoids": [
    $excludedVcdVmMoids
  ]
}
 ```

### Deleting a specific vApp snapshot object

To delete an on-demand snapshot or a snapshot from a vApp that is not assigned to an SLA Domain, send a DELETE request
to [`/vcd/vapp/snapshot/{id}`](#operation/deleteVappSnapshotV1), where {id}  is the ID assigned to a snapshot object.

```bash
 curl -X DELETE -d "https://$cluster_address/api/v1/vcd/vapp/snapshot/{id}?location=$snapshot_location"
 ```

The Rubrik REST API server deletes the specified vApp snapshot at the location ("all" or "local") specified. 

 ```bash
{"Snapshot successfully deleted."}
 ```

### Retrieving details about missed snapshots for a vApp object

To retrieve the timestamp for each missed snapshot for a specified vApp, send a GET request
to [`/vcd/vapp/{id}/missed_snapshot`](#operation/vcdMissedSnapshotsV1). where {id} is the id of the vapp.

 ```bash
  curl -X GET -d "https://$cluster_address/api/v1/vcd/vapp/$id/missed_snapshot"
  ```

The Rubrik REST API server fetches details about all missed snapshots (List of MissedSnapshot) of the specified vApp.

  ```bash
{
  "hasMore": true,
  "data": [
    {
      "archivalLocationType": [
        "string"
      ],
      "missedSnapshotTime": "$missedSnapshotTime",
      "missedSnapshotTimeUnits": [
        {
          "timeUnit": "Minute",
          "frequency": 0,
          "retention": 0,
          "dayOfTime": "Monday"
        }
      ]
    }
  ],
  "total": 0
}
  ```

### Retrieving exportable network configurations

To retrieve the summary information for the vApp networks that are available for network connections from the virtual
machines in the exported vApp snapshot, send a GET request
to [`/vcd/vapp/snapshot/{snapshot_id}/export/options`](#operation/getVappSnapshotExportOptionsV1). This API requires the
snapshot_id of the vApp snapshot object to export. It also requires the `export_mode`, `target_vapp_id` and the
`target_org_vdc_id1`.

```bash
  curl -X GET -d "https://$cluster_address/api/v1/vcd/vapp/snapshot/$snapshot_id/export/options?export_mode=$export_mode"
  ```

The Rubrik REST API server fetches VappExportOptions for the specified snapshot and export mode specified.

  ```bash
{
  "restorableNetworks": [
    {
      "name": "$name",
      "parentNetworkId": "$parentNetworkId",
      "isDeployed": true,
      "newName": "$newName"
    }
  ],
  "targetVappNetworks": [
    {
      "name": "$name",
      "parentNetworkId": "$parentNetworkId",
      "isDeployed": true
    }
  ],
  "availableStoragePolicies": [
    {
      "name": "$name",
      "id": "$id"
    }
  ],
  "allChildVmsWithDefaultNetworkConnections": [
    {
      "name": "$name",
      "vcdMoid": "$vcdMoid",
      "storagePolicyId": "$storagePolicyId",
      "networkConnections": [
        {
          "nicIndex": 0,
          "macAddress": "$macAddress",
          "addressingMode": "DHCP",
          "ipAddress": "$ipAddress",
          "vappNetworkName": "$vappNetworkName",
          "isConnected": true,
          "networkAdapterType": "$networkAdapterType"
        }
      ]
    }
  ]
}
  ```

### Exporting vApp snapshot

To export the specified vApp snapshot into a new vApp or an existing vApp, send a POST request
to [`/vcd/vapp/snapshot/{snapshot_id}/export`](#operation/createVappExportV1), where {snapshot_id} is the ID assigned to
the vApp snapshot object.

```bash
    curl -X POST -d \
    '{
      "exportMode": "$exportMode",
      "newVappParams": {
        "name": "$name",
        "orgVdcId": "$orgVdcId"
      },
      "targetVappId": "$targetVappId",
      "networksToRestore": [
        {
          "name": "$name",
          "parentNetworkId": "$parentNetworkId",
          "isDeployed": true,
          "newName": "$newName"
        }
      ],
      "vmsToExport": [
        {
          "name": "$name",
          "vcdMoid": "$vcdMoid",
          "storagePolicyId": "$storagePolicyId",
          "networkConnections": [
            {
              "nicIndex": 0,
              "macAddress": "$macAddress",
              "addressingMode": "DHCP",
              "ipAddress": "$ipAddress",
              "vappNetworkName": "$vappNetworkName",
              "isConnected": true,
              "networkAdapterType": "$networkAdapterType"
            }
          ]
        }
      ],
      "shouldPowerOnVappAfterExport": false
    }' \
    "https://$cluster_address/api/v1/vcd/vapp/snapshot/$snapshot_id/export"
```

The Rubrik REST API server initiates an asynchronous job to export vApp snapshot and returns the details of the
AsyncRequestStatus request.

```bash
{
  "id": "$requestId",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "$startTime",
  "endTime": "$endTime",
  "nodeId": "$nodeId",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vcd/vapp/request/$requestId",
      "rel": "self"
    }
  ]
}
```

### Recovering vApp objects of virtual machines

To instantly recover the specified vApp, send a POST request
to [`/vcd/vapp/snapshot/{snapshot_id}/instant_recover`](#operation/createVappInstantRecoveryV1), where {snapshot_id} is
the ID assigned to the vApp snapshot object.

```bash
    curl -X POST -d \
    '{
      "vmsToRestore": [
        {
          "name": "$name",
          "vcdMoid": "$vcdMoid",
          "storagePolicyId": "$storagePolicyId",
          "networkConnections": [
            {
              "nicIndex": 0,
              "macAddress": "$macAddress",
              "addressingMode": "DHCP",
              "ipAddress": "$ipAddress",
              "vappNetworkName": "$vappNetworkName",
              "isConnected": true,
              "networkAdapterType": "$networkAdapterType"
            }
          ]
        }
      ],
      "shouldPowerOnVmsAfterRecovery": false
    }' \
    "https://$cluster_address/api/v1/vcd/vapp/snapshot/$snapshot_id/instant_recover"
```

The Rubrik REST API server initiates an asynchronous job to Instant Recover vApp snapshot and returns the details of the
AsyncRequestStatus request.

```bash
{
  "id": "$requestId",
  "status": "$status",
  "progress": 0,
  "startTime": "$startTime",
  "endTime": "$endTime",
  "nodeId": "$nodeId",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vcd/vapp/request/$requestId",
      "rel": "self"
    }
  ]
}
```

### Retrieving Instant Recovery information

To retrieve the available vApp network connections and the default vApp network connection for the virtual machines in a
vApp snapshot, send a GET request
to [`/vcd/vapp/snapshot/{snapshot_id}/instant_recover/options`](#operation/getVappSnapshotInstantRecoveryOptionsV1),
where {snapshot_id} is the ID of the vApp snapshot object.

```bash
    curl -X GET -d "https://$cluster_address/api/v1/vcd/vapp/snapshot/$snapshot_id/instant_recover/options"
```

The Rubrik REST API server fetches VappInstantRecoveryOptions for the specified snapshot.

```bash
{
  "restorableVms": [
    {
      "name": "$name",
      "vcdMoid": "$vcdMoid",
      "storagePolicyId": "$storagePolicyId",
      "networkConnections": [
        {
          "nicIndex": 0,
          "macAddress": "$macAddress",
          "addressingMode": "DHCP",
          "ipAddress": "$ipAddress",
          "vappNetworkName": "$vappNetworkName",
          "isConnected": true,
          "networkAdapterType": "$networkAdapterType"
        }
      ]
    }
  ],
  "availableVappNetworks": [
    {
      "name": "$name",
      "parentNetworkId": "$parentNetworkId",
      "isDeployed": true
    }
  ]
}
```

### Retrieving vApp job status

To retrieves the details of a specified asynchronous job for a vApp, send a GET request
to [`/vcd/vapp/request/{id}`](#operation/getVappAsyncRequestStatusV1), where {id} is the ID assigned to an asynchronous
job.

```bash
    curl -X GET -d "https://$cluster_address/api/v1/vcd/vapp/request/{id}"
```

The Rubrik REST API server fetches status of a vApp asynchronous job (AsyncRequestStatus).

```bash
{
  "id": "$requestId",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "$startTime",
  "endTime": "$endTime",
  "nodeId": "$nodeId",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vcd/vapp/request/$requestId",
      "rel": "self"
    }
  ]
}
```

### Searching for a file in a vApp snapshot

To search for a file through snapshots of all virtual machines that are part of the vApp, send a GET request
to [`/vcd/vapp/{id}/search`](#operation/searchVappV1), where {id} is the ID of the vApp. It also requires a `path`
parameter. The parameter takes either a path prefix or a filename prefix.

```bash
    curl -X GET -d "https://$cluster_address/api/v1/vcd/vapp/$id/search/options?path=$path"
```

The Rubrik REST API server searches a file through snapshots of all virtual machines and returns list of 
AppSearchResponse.

```bash
{
  "hasMore": true,
  "data": [
    {
      "path": "$path",
      "filename": "$filename",
      "fileVersions": [
        {
          "lastModified": "$lastModified",
          "size": 0,
          "snapshotId": "$snapshotId",
          "fileMode": "$fileMode",
          "source": "$source"
        }
      ],
      "childObjectId": "$childObjectId",
      "childObjectName": "$childObjectName"
    }
  ],
  "total": 0
}
```

### Downloading snapshot from archive

To retrieve a snapshot that is not available locally, from an archival location, send a POST request
to [`/vcd/vapp/snapshot/{id}/download`](#operation/createVcdVappDownloadSnapshotFromCloudV1)z where {id} is the ID of
the snapshot which needs to be downloaded.

```bash
    curl -X POST -d "https://$cluster_address/api/v1/vcd/vapp/snapshot/$id/download"
```

The Rubrik REST API server initiates an asynchronous job to download vApp snapshot from archive and returns the 
details of the AsyncRequestStatus request.

```bash
{
  "id": "$requestId",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "$startTime",
  "endTime": "$endTime",
  "nodeId": "$nodeId",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vcd/vapp/request/$requestId",
      "rel": "self"
    }
  ]
}
```

### Retrieving summary for all vCD Clusters

To retrieve the summary information for all vCD cluster objects, send a GET request
to [`/vcd/cluster`](#operation/queryVcdClusterV1). The parameters described in the following table are available to
filter the results of the GET request.

| Name       | Required | Type   | Description |
| ---------- | -------- | ------ | ----------- |
|`name`      | Optional | string | Search for a vCD Cluster object by name.|
|`status`    | Optional | string | Filter the results using the status value of the vCD Cluster objects.|
|`sort_by`   | Optional | string | Attribute to sort the results on.|
|`sort_order`| Optional | string | Order for sorting the results, either ascending or descending.|

```bash
    curl -X GET -d "https://$cluster_address/api/v1/vcd/cluster"
```

The Rubrik REST API server fetches VcdClusterSummary for all vCD instances on the Rubrik cluster.

```bash
{
  "hasMore": true,
  "data": [
    {
      "id": "$id",
      "name": "$name",
      "configuredSlaDomainId": "INHERIT",
      "configuredSlaDomainName": "Inherit",
      "configuredSlaDomainType": "ProtectionSla",
      "primaryClusterId": "$primaryClusterId",
      "isConfiguredSlaDomainRetentionLocked": true,
      "slaLastUpdateTime": "$slaLastUpdateTime",
      "hostname": "$hostname",
      "username": "$username",
      "caCerts": "$caCerts",
      "connectionStatus": {
        "status": "Disconnected",
        "message": "string"
      }
    }
  ],
  "total": 0
}
```

### Adding a vCD Cluster

To create a vCD Cluster object by providing the address of the vCD Cluster and the credentials for an account on the
vCD Cluster that has administrator privileges, send a POST request to [`/vcd/cluster`](#operation/createVcdClusterV1).

```bash
    curl -X POST -d \
    '{
      "hostname": "$hostname",
      "username": "$username",
      "caCerts": "$caCerts",
      "password": "$password"
    }' \
    "https://$cluster_address/api/v1/vcd/cluster"
```

The Rubrik REST API server attempts to add vCD to the Rubrik cluster and returns AsyncRequestStatus of request.

```bash
{
  "id": "$requestId",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "$startTime",
  "endTime": "$endTime",
  "nodeId": "$nodeId",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vcd/cluster/request/$requestId",
      "rel": "self"
    }
  ]
}
```

### Retrieving VimServers of a vCD Cluster

To retrieve the VimServer representation of the vCenter Servers that are attached to a specified vCD Cluster object,
send a GET request to [`/vcd/cluster/{id}/vimserver`](#operation/queryVcdVimServerV1), where {id} is the ID assigned to
the vCD cluster. It also need two parameters `sort_by` and `sort_order` which decide the order of the results.

```bash
    curl -X GET -d "https://$cluster_address/api/v1/vcd/cluster/$id/vimserver"
```

The Rubrik REST API server fetches VimserverSummary for all Vim servers belonging to a vCD.

```bash
{
  "hasMore": true,
  "data": [
    {
      "id": "$id",
      "name": "$name",
      "vcenterId": "$vcenterId",
      "vcdClusterId": "$vcdClusterId",
      "vcdClusterName": "$vcdClusterName",
      "hostname": "$hostname",
      "connectionStatus": {
        "status": "Disconnected",
        "message": "string"
      }
    }
  ],
  "total": 0
}
```

### Refreshing a vCD Cluster

To refresh the metadata for a specified vCD Cluster object, send a POST request
to [`/vcd/cluster/{id}/refresh`](#operation/refreshVcdClusterV1), where {id} is the ID assigned to a vCD Cluster object.

```bash
    curl -X POST -d "https://$cluster_address/api/v1/vcd/cluster/$id/refresh"
```

The Rubrik REST API server initiates an asynchronous job to refresh a vCD and returns the
details of the AsyncRequestStatus request.

```bash
{
  "id": "$requestId",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "$startTime",
  "endTime": "$endTime",
  "nodeId": "$nodeId",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vcd/cluster/request/$requestId",
      "rel": "self"
    }
  ]
}
```

### Retrieving vCD Cluster details

To retrieve detailed information for a vCD Cluster object, send a GET request
to [`/vcd/cluster/{id}`](#operation/getVcdClusterV1), where {id} is the ID assigned to a vCD Cluster object.

```bash
    curl -X GET -d "https://$cluster_address/api/v1/vcd/cluster/{id}"
```

The Rubrik REST API server fetches VcdClusterDetail for the specified vCD instance.

```bash
{
  "id": "$id",
  "name": "$name",
  "configuredSlaDomainId": "$configuredSlaDomainId",
  "configuredSlaDomainName": "$configuredSlaDomainName",
  "configuredSlaDomainType": "ProtectionSla",
  "primaryClusterId": "$primaryClusterId",
  "isConfiguredSlaDomainRetentionLocked": true,
  "slaLastUpdateTime": "$slaLastUpdateTime",
  "hostname": "$hostname",
  "username": "$username",
  "caCerts": "$caCerts",
  "connectionStatus": {
    "status": "Disconnected",
    "message": "string"
  }
}
```

### Changing vCD Cluster object

To modify the hostname and credentials of a specified vCD Cluster object, send a PATCH request
to [`/vcd/cluster/{id}`](#operation/updateVcdClusterV1), where {id} is the ID assigned to a vCD Cluster object. It also
requires a parameter named `patch_properties` which contains the updated hostname and credentials for a specified vCD
Cluster object.

```bash
    curl -X PATCH -d \
    '{
      "hostname": "$hostname",
      "username": "$username",
      "password": "$password",
      "caCerts": "$caCerts",
      "configuredSlaDomainId": "$configuredSlaDomainId"
    }' \
    "https://$cluster_address/api/v1/vcd/cluster/{id}"
```

The Rubrik REST API server updates and fetches the updated VcdClusterDetail for the specified vCD instance.

```bash
{
  "id": "$id",
  "name": "$name",
  "configuredSlaDomainId": "$configuredSlaDomainId",
  "configuredSlaDomainName": "$configuredSlaDomainName",
  "configuredSlaDomainType": "ProtectionSla",
  "primaryClusterId": "$primaryClusterId",
  "isConfiguredSlaDomainRetentionLocked": true,
  "slaLastUpdateTime": "$slaLastUpdateTime",
  "hostname": "$hostname",
  "username": "$username",
  "caCerts": "$caCerts",
  "connectionStatus": {
    "status": "Disconnected",
    "message": "string"
  }
}
```

### Removing a vCD Cluster

To remove a vCD Cluster object, send a DELETE request to [`/vcd/cluster/{id}`](#operation/deleteVcdClusterV1), where
{id} is the ID of assigned to a vCD Cluster object.

```bash
    curl -X DELETE -d "https://$cluster_address/api/v1/vcd/cluster/{id}"
```

The Rubrik REST API server initiates an asynchronous job to delete a vCD instance and returns the
details of the AsyncRequestStatus request.

```bash
{
  "id": "$requestId",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "$startTime",
  "endTime": "$endTime",
  "nodeId": "$nodeId",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vcd/cluster/request/$requestId",
      "rel": "self"
    }
  ]
}
```

### Retrieving details of jobs on vCD cluster

To retrieve the details of a specified asynchronous job for a vCD Cluster, send a GET request
to [`/vcd/cluster/request/{id}`](#operation/getVcdClusterAsyncRequestStatusV1), where {id} is the ID assigned to an
asynchronous job.

```bash
    curl -X GET -d "https://$cluster_address/api/v1/vcd/cluster/request/{id}"
```

The Rubrik REST API server fetches details of the specifed asynchronous job and returns the AsyncRequestStatus request.

```bash
{
  "id": "$requestId",
  "status": "QUEUED",
  "progress": 0,
  "startTime": "$startTime",
  "endTime": "$endTime",
  "nodeId": "$nodeId",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "https://$cluster_address/api/v1/vcd/cluster/request/$requestId",
      "rel": "self"
    }
  ]
}
```

### Retrieving summary of a vCD hierarchy object

To retrieve details of the specified object in the vCD hierarchy, send a GET request
to [`/vcd/hierarchy/{id}`](#operation/getVcdHierarchyObjectV1), where {id} is the ID of the vCD hierarchy object.

```bash
    curl -X GET -d "https://$cluster_address/api/v1/vcd/hierarchy/{id}"
```

The Rubrik REST API server fetches VcdHierarchyObjectSummary for the specified vCD object.

```bash
{
  "id": "$id",
  "name": "$name",
  "configuredSlaDomainId": "$configuredSlaDomainId",
  "configuredSlaDomainName": "$configuredSlaDomainName",
  "configuredSlaDomainType": "$configuredSlaDomainType",
  "primaryClusterId": "$primaryClusterId",
  "isConfiguredSlaDomainRetentionLocked": true,
  "slaLastUpdateTime": "$slaLastUpdateTime",
  "effectiveSlaDomainId": "UNPROTECTED",
  "effectiveSlaDomainName": "Unprotected",
  "isEffectiveSlaDomainRetentionLocked": true,
  "effectiveSlaDomainPolarisManagedId": "$effectiveSlaDomainPolarisManagedId",
  "effectiveSlaSourceObjectId": "$effectiveSlaSourceObjectId",
  "effectiveSlaSourceObjectName": "$effectiveSlaSourceObjectName",
  "slaAssignment": "Derived",
  "retentionSlaDomainId": "$retentionSlaDomainId",
  "infraPath": [
    ...
  ],
  "slaPath": [
    ...
  ],
  "isRelic": true,
  "isDeleted": true,
  "objectType": "Cluster",
  "descendantCount": {
    "vcdCluster": 0,
    "connectedVimServer": 0,
    "disconnectedVimServer": 0,
    "org": 0,
    "orgVdc": 0,
    "catalog": 0,
    "vApp": 0
  },
  "connectionStatus": {
    "status": "Disconnected",
    "message": "string"
  },
  "ipAddress": "$ipAddress",
  "vcenterId": "$vcenterId",
  "extendedAttributes": {
    "vappAtributes": {
      "isVappTemplate": true
    }
  },
  "pendingSlaDomain": {
    "objectId": "$objectId",
    "pendingSlaDomainId": "$pendingSlaDomainId",
    "pendingSlaDomainName": "$pendingSlaDomainName",
    "isPendingSlaDomainRetentionLocked": true
  }
}
```

### Retrieving immediate descendant objects

To retrieve the list of immediate descendant objects for the specified parent, send a GET request
to [`/vcd/hierarchy/{id}/children`](#operation/getVcdHierarchyChildrenV1), where {id} is the ID of the parent vCD
hierarchy object. The parameters described in the following table are available to filter the results of the GET
request.

| Name                    | Required | Type    | Description |
| ----------------------- | -------- | ------- | ----------- |
|`id`                     | Required | string  | ID of the parent vCD hierarchy object. To get top-level nodes, use **root** as the ID.|
|`sort_by`                | Optional | string  | Attribute to sort the results on.|
|`sort_order`             | Optional | string  | Order for sorting the results, either ascending or descending.|
|`limit`                  | Optional | int     | Limit the number of matches returned.|
|`offset`                 | Optional | int     | Number of matches to ignore from the beginning of the results.|
|`name`                   | Optional | string  | Search object by object name.|
|`is_relic`               | Optional | boolean | Filter by isRelic field of vCD vApp hierarchy object. Return both relic and non-relic children when this value is not specified.|
|`effective_sla_domain_id`| Optional | string  | Filter by ID of effective SLA domain.|
|`object_type`            | Optional | string  | Filter by node object type. |
|`primary_cluster_id`     | Optional | string  | Filter by primary cluster ID, or **local**.|
|`sla_assignment`         | Optional | string  | Filter by SLA assignment type.|
|`snappable_status`       | Optional | string  | Filters vCD hierarchy objects based on the specified query value.|

```bash
    curl -X GET -d "https://$cluster_address/api/v1/vcd/hierarchy/$id/children"
```

The Rubrik REST API server fetches VcdHierarchyObjectSummary for all children (immediate descendants) 
of the specified vCD object.

```bash
{
  "hasMore": true,
  "data": [
    {
      "id": "$id",
      "name": "$name",
      "configuredSlaDomainId": "$configuredSlaDomainId",
      "configuredSlaDomainName": "$configuredSlaDomainName",
      "configuredSlaDomainType": "$configuredSlaDomainType",
      "primaryClusterId": "$primaryClusterId",
      "isConfiguredSlaDomainRetentionLocked": true,
      "slaLastUpdateTime": "$slaLastUpdateTime",
      "effectiveSlaDomainId": "UNPROTECTED",
      "effectiveSlaDomainName": "Unprotected",
      "isEffectiveSlaDomainRetentionLocked": true,
      "effectiveSlaDomainPolarisManagedId": "$effectiveSlaDomainPolarisManagedId",
      "effectiveSlaSourceObjectId": "$effectiveSlaSourceObjectId",
      "effectiveSlaSourceObjectName": "$effectiveSlaSourceObjectName",
      "slaAssignment": "Derived",
      "retentionSlaDomainId": "$retentionSlaDomainId",
      "infraPath": [
        ...
      ],
      "slaPath": [
        ...
      ],
      "isRelic": true,
      "isDeleted": true,
      "objectType": "Cluster",
      "descendantCount": {
        "vcdCluster": 0,
        "connectedVimServer": 0,
        "disconnectedVimServer": 0,
        "org": 0,
        "orgVdc": 0,
        "catalog": 0,
        "vApp": 0
      },
      "connectionStatus": {
        "status": "Disconnected",
        "message": "string"
      },
      "ipAddress": "$ipAddress",
      "vcenterId": "$vcenterId",
      "extendedAttributes": {
        "vappAtributes": {
          "isVappTemplate": true
        }
      },
      "pendingSlaDomain": {
        "objectId": "$objectId",
        "pendingSlaDomainId": "$pendingSlaDomainId",
        "pendingSlaDomainName": "$pendingSlaDomainName",
        "isPendingSlaDomainRetentionLocked": true
      }
    }
  ],
  "total": 0
}
```

### Retrieving list of descendant objects

To retrieve the list of descendant objects for the specified parent, send a GET request to
[`/vcd/hierarchy/{id}/descendants`](#operation/getVcdHierarchyDescendantsV1), where {id} is the ID of the parent vCD
hierarchy object. The parameters described in the following table are available to filter the results of the GET
request.

| Name                    | Required | Type    | Description |
| ----------------------- | -------- | ------- | ----------- |
|`id`                     | Required | string  | ID of the parent vCD hierarchy object. To get top-level nodes, use **root** as the ID.|
|`sort_by`                | Optional | string  | Attribute to sort the results on.|
|`sort_order`             | Optional | string  | Order for sorting the results, either ascending or descending.|
|`limit`                  | Optional | int     | Limit the number of matches returned.|
|`offset`                 | Optional | int     | Number of matches to ignore from the beginning of the results.|
|`name`                   | Optional | string  | Search object by object name.|
|`is_relic`               | Optional | boolean | Filter by isRelic field of vCD vApp hierarchy object. Return both relic and non-relic children when this value is not specified.|
|`effective_sla_domain_id`| Optional | string  | Filter by ID of effective SLA domain.|
|`object_type`            | Optional | string  | Filter by node object type. |
|`primary_cluster_id`     | Optional | string  | Filter by primary cluster ID, or **local**.|
|`sla_assignment`         | Optional | string  | Filter by SLA assignment type.|
|`snappable_status`       | Optional | string  | Filters vCD hierarchy objects based on the specified query value.|

```bash
    curl -X GET -d "https://$cluster_address/api/v1/vcd/hierarchy/$id/descendants"
```

The Rubrik REST API server fetches VcdHierarchyObjectSummary for all descendants of specified vCD object.

```bash
{
  "hasMore": true,
  "data": [
    {
      "id": "$id",
      "name": "$name",
      "configuredSlaDomainId": "$configuredSlaDomainId",
      "configuredSlaDomainName": "$configuredSlaDomainName",
      "configuredSlaDomainType": "$configuredSlaDomainType",
      "primaryClusterId": "$primaryClusterId",
      "isConfiguredSlaDomainRetentionLocked": true,
      "slaLastUpdateTime": "$slaLastUpdateTime",
      "effectiveSlaDomainId": "UNPROTECTED",
      "effectiveSlaDomainName": "Unprotected",
      "isEffectiveSlaDomainRetentionLocked": true,
      "effectiveSlaDomainPolarisManagedId": "$effectiveSlaDomainPolarisManagedId",
      "effectiveSlaSourceObjectId": "$effectiveSlaSourceObjectId",
      "effectiveSlaSourceObjectName": "$effectiveSlaSourceObjectName",
      "slaAssignment": "Derived",
      "retentionSlaDomainId": "$retentionSlaDomainId",
      "infraPath": [
        ...
      ],
      "slaPath": [
        ...
      ],
      "isRelic": true,
      "isDeleted": true,
      "objectType": "Cluster",
      "descendantCount": {
        "vcdCluster": 0,
        "connectedVimServer": 0,
        "disconnectedVimServer": 0,
        "org": 0,
        "orgVdc": 0,
        "catalog": 0,
        "vApp": 0
      },
      "connectionStatus": {
        "status": "Disconnected",
        "message": "string"
      },
      "ipAddress": "$ipAddress",
      "vcenterId": "$vcenterId",
      "extendedAttributes": {
        "vappAtributes": {
          "isVappTemplate": true
        }
      },
      "pendingSlaDomain": {
        "objectId": "$objectId",
        "pendingSlaDomainId": "$pendingSlaDomainId",
        "pendingSlaDomainName": "$pendingSlaDomainName",
        "isPendingSlaDomainRetentionLocked": true
      }
    }
  ],
  "total": 0
}
```

# Blackout Windows

## Get Global Blackout Window Status
Send a GET request to ['/blackout_window`](#operation/getBlackoutWindowStatus)

```bash
curl -X GET "https://$cluster_address/api/v1/blackout_window"
```

## Start or Stop the Global Blackout Window in local Rubrik Cluster
Send a PATCH request to [`/blackout_window`](#operation/toggleBlackoutWindow)

```bash
curl -X PATCH \
  -d '{ \
   "isGlobalBlackoutActive": true \
   }' \
  "https://$cluster_address/api/v1/blackout_window"
```

# Managed Volumes

## Create Script to Unify Managed Volume Export View

To request an asynchronous job to generate a script to create a directory to view all files in all channels of a managed volume export, send a POST request to the [`/managed_volume/snapshot/export/{id}/script`](#operation/createManagedVolumeGenerateScriptJob) endpoint with the ID of the snapshot export.

```bash
curl -X POST \
  "https://$cluster_address/api/v1/managed_volume/snapshot/export/{id}/script"
```
An asynchronous request is returned and can be polled to retrieve the job status.

```bash
{
  "id":"$request_id",
  "links": [
    {
      "href":"https://$cluster_address/api/v1/managed_volume/request/$request_id",
      "rel":"result"
    },
  "status":"QUEUED"
}
```

# Archival

## Create Script to Refresh data sources in a Reader location

Send a POST request to the [`/archive/location/{location_id}/reader/refresh/data_sources`](#operation/refreshArchivalLocationDataSources) endpoint to request an asynchronous job that refreshes the metadata for a list of data sources from a specified reader location. The POST request must provide the ID of the reader location and a list of the IDs of the data sources in the archival location.

```bash
curl -X POST \
  "https://$cluster_address/api/v1/archive/location/{location_id}/reader/refresh/data_sources"
```
An asynchronous request is returned and can be polled to retrieve the job status.

```bash
{
  "id":"$request_id",
  "links": [
    {
      "href":"https://$cluster_address/api/v1/archive/request/$request_id",
      "rel":"result"
    },
  "status":"QUEUED"
}
```

## Get the ID of the customer AWS account that owns the archival location

Send a GET request to the [`/archive/aws/s3/{id}/account_id`](#operation/getAwsAccountId) endpoint to request the ID of the AWS customer account for the S3 archival location. Returns an error when the location given is not an AWS S3 archival location.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/archive/aws/s3/{id}/account_id"
```
Returns the ID of the AWS account.

## Disable archival location for archiving and modifications.

Send a POST request to the [`/archive/location/{location_id}/owner/disable`](#operation/disableArchivalLocation) endpoint to disable the specified active archival location. The POST request must include the ID of the active location.

```bash
curl -X POST \
  "https://$cluster_address/api/v1/archive/location/{location_id}/owner/disable"
```
Returns empty response body

## Enable archival location for archiving and modifications.

Send a POST request to the [`/archive/location/{location_id}/owner/enable`](#operation/enableArchivalLocation) endpoint to enable archiving and other
operations that were previously disabled on the specified archival location
with the disable operation. The POST request must include the ID of the
specified location.

```bash
curl -X POST \
  "https://$cluster_address/api/v1/archive/location/{location_id}/owner/enable"
```
Returns empty response body

# Replication

## Enable Source Specific Replication Pause
Send a POST request to [`/replication/location_pause/enable`]
(#operation/enablePerLocationPause)

```bash
curl -X POST \
  -d '{ \
   "sourceClusterUuids": ["510ae3f4-d733-4545-9ea4-fe702401fdca"], \
   "shouldCancelImmediately": true \
   }' \
  "https://$cluster_address/api/v1/replication/location_pause/enable"
```

## Disable Source Specific Replication Pause
Send a POST request to [`/replication/location_pause/disable`]
(#operation/disablePerLocationPause)

```bash
curl -X POST \
  -d '{ \
   "sourceClusterUuids": ["510ae3f4-d733-4545-9ea4-fe702401fdca"], \
   "shouldSkipOldSnapshots": true \
   }' \
  "https://$cluster_address/api/v1/replication/location_pause/disable"
```

# Unmanaged object

An unmanaged object is an object that is not currently assigned
an active SLA.

### Get all unmanaged reader object summaries
Get a listing of all unmanaged reader object summaries using
a GET request to
[/unmanaged_object/reader_object](#operation/queryUnmanagedReaderObject).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/unmanaged_object/reader_object"
```
The Rubrik REST API server returns a `ListResponse` object of unmanaged
reader object summaries.
```bash
{
  "data": [
    {
      "id": "$vm1_managed_id",
      "name": "$vm1_name",
      "objectType": "VirtualMachine",
      "physicalLocation": [
        {
          "managedId": "$location1_managed_id",
          "name": "$location1_name"
        }
      ],
      "unmanagedStatus": "Unprotected",
      "autoSnapshotCount": 20,
      "manualSnapshotCount": 0,
      "localStorage": 100,
      "archiveStorage": 0,
      "retentionSlaDomainId": "$gold_sla_id",
      "retentionSlaDomainName": "Gold"
    }
  ],
  "hasMore": false,
  "total": 1
}
```
### Get all unmanaged object summaries
Get a list of all objects with unmanaged snapshots using
a GET request to
[/unmanaged_object](#operation/queryUnmanagedObjectV1).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/unmanaged_object"
```
The Rubrik REST API server returns a `ListResponse` object of objects with
 unmanaged snapshots.
```bash
{
  "data": [
    {
      "id": "$vm1_managed_id",
      "name": "$vm1_name",
      "objectType": "VirtualMachine",
      "physicalLocation": [
        {
          "managedId": "$location1_managed_id",
          "name": "$location1_name"
        }
      ],
      "unmanagedStatus": "Unprotected",
      "snapshotCount": 20,
      "localStorage": 100,
      "archiveStorage": 0,
      "retentionSlaDomainId": "$gold_sla_id",
      "retentionSlaDomainName": "Gold"
    }
  ],
  "hasMore": false,
  "total": 1
}
```

### Get summary of all snapshots for a given object
Get summary of all snapshots for a given object using
a GET request to
[/unmanaged_object/{id}/snapshot](#operation/queryUnmanagedObjectSnapshotsV1).
```bash
curl -X GET \
  "https://$cluster_address/api/v1/unmanaged_object/{id}/snapshot"
```
The Rubrik REST API server return a `ListResponse` object of snapshot summaries
for the given object.
```bash
{
  "data": [
    {
      "id": "$snapshot_id",
      "date": "<timestamp>",
      "snapshotType": "PolicyBased",
      "snapshotRetentionInfo": {
        "localInfo": {
          "id": "location_id",
          "name": "local_cluster",
          "isSnapshotPresent": true,
          "isExpirationDateCalculated": true,
          "expirationTime": "<timestamp2>"
        },
        "archivalInfos": [],
        "replicationInfos": []
      }
    }
  ],
  "hasMore": false,
  "total": 1
}
```

### Assign a retention SLA to unmanaged object.
Assign a retention SLA to an unmanaged object to expire existing snapshots
in a structured manner.

Send a POST request to [/unmanaged_object/assign_retention_sla](#operation/assignToRetentionSlaAsync).

**Example:** Assigning a retention SLA Domain with ID $slaId to a list of unmanaged objects - $snap1Id, $snap2Id

```bash
curl -X POST \
  -d '{
    "slaDomainId": $slaId,
    "managedIds": [$snap1Id, $snap2Id]
  }' \
  "https://$cluster_address/api/v1/unmanaged_object/assign_retention_sla"
```

### Bulk tier existing snapshots to cold storage
Schedules a job to tier existing snapshots of the selected objects to cold
storage.

Send a POST request to
[/unmanaged_object/snapshot/bulk_archive_tier](#operation/bulkTierExistingSnapshots)

**Example:** Tier existing snapshots for the objects - $object1Id, $object2Id

```bash
curl -X POST \
  -d '{
    "objectIds": [$object1Id, $object2Id]
  }' \
  "https://$cluster_address/api/v1/unmanaged_object/snapshot/bulk_archive_tier"
```

**Example:** Tier existing snapshots for the objects - $object1Id, $object2Id
only in archival location $archivalLocationId

```bash
curl -X POST \
  -d '{
    "objectIds": [$object1Id, $object2Id],
    "locationId": $archivalLocationId
  }' \
  "https://$cluster_address/api/v1/unmanaged_object/snapshot/bulk_archive_tier"

An asynchronous request is returned and can be polled to retrieve the job status.

```bash
{
  "id":"$request_id",
  "links": [
    {
      "href":"https://$cluster_address/api/v1/unmanaged_object/snapshot/bulk_archive_tier/request/$request_id",
      "rel":"result"
    },
  "status":"QUEUED"
}
```

# Data Source

A data source is an object whose snapshots can be taken.

### Delete given snapshots for an object
Delete snapshots identified by the given snapshot IDs for
the specified object using a POST request to
[
`/data_source/{id}/snapshot/bulk_delete`
](#operation/bulkDeleteSnapshotsForObject).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/data_source/{id}/snapshot/bulk_delete"
```

### Delete all snapshots for given objects
Delete all snapshots for given objects using
a POST request to
[`/data_source/snapshot/bulk_delete`](#operation/bulkDeleteSnapshots).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/data_source/snapshot/bulk_delete"
```

### Get information of expired snapshots which were explicitly assigned a SLA domain
To get information on snapshots that expired according to their assigned
SLA domain, send a GET request to
[`/data_source/{id}/expired_custom_retention_snapshots`](#operation/expiredCustomRetentionSnapshots).

```bash
curl -X GET \
  "https://$cluster_address/api/v1/data_source/{id}/expired_custom_retention_snapshots"
```

# SAP HANA databases

## Get SAP HANA database summary

Request a list of SAP HANA discovered databases by sending a GET
request to [`/sap_hana/db`](#operation/querySapHanaDatabases).

```bash
curl -X GET "https://$cluster_address/api/v1/sap_hana/db"
```

```bash
{
  "data": [
    {
      "id": "$db_id",
      "name": "$db_name",
      "dbStatus": "ACTIVE",
      "dbType": "TENANT",
      "dataPathType": "GCP"
      "logBackupJobFrequencyMins": 30
      "sapHanaSystemId": "$sap_hana_system_id",
      "sid": "SC1",
      "instanceNumber": "03",
      "primaryClusterId": "$cluster_id",
      "isRelic": False,
      "isArchived": False
    }
  ],
  "hasMore": false,
  "total": 1
}
```

Further details are acquired from
[`/sap_hana/db/{id}`](#operation/getSapHanaDatabase).

```
curl -X GET "https://$cluster_address/api/v1/sap_hana/db/$db_id"
```

```bash
{
      "id": "$db_id",
      "name": "$db_name",
      "dbStatus": "ACTIVE",
      "dbType": "TENANT",
      "dataPathType": "GCP"
      "logBackupJobFrequencyMins": 30
      "sapHanaSystemId": "$sap_hana_system_id",
      "sid": "SC1",
      "instanceNumber": "03",
      "primaryClusterId": "$cluster_id",
      "isRelic": False,
      "isArchived": False,
      "previousFailedBackupPrefixes": [
        "abcd", "defg"
      ],
      "snapShotCount": 3
}
```

Update SLA Domain assigned to SAP HANA database by using
[`/sap_hana/db/{id}`](#operation/patchSapHanaDatabase). The API returns with
the summary of the SAP HANA database.

```bash
curl -X PATCH "https://$cluster_address/api/v1/sap_hana/db/$db_id"
```

```bash
{
      "id": "$db_id",
      "name": "$db_name",
      "dbStatus": "ACTIVE",
      "dbType": "TENANT",
      "dataPathType": "GCP"
      "logBackupJobFrequencyMins": 30
      "sapHanaSystemId": "$sap_hana_system_id",
      "sid": "SC1",
      "instanceNumber": "03",
      "primaryClusterId": "$cluster_id",
      "isRelic": False,
      "isArchived": False,
      "previousFailedBackupPrefixes": [
        "abcd", "defg"
      ],
      "snapShotCount": 3
}
```

## System copy restore

System copy restore is a type of restore that is used across different SAP HANA
databases.

### Configuring system copy restore

To initiate a task to configure a system copy restore on a SAP HANA database,
send a POST request to [`/sap_hana/db/{id}/configure_restore`](#operation/configureSapHanaRestore)
where, {id} is the ID of the target SAP HANA database.

```bash
curl -X POST \
  -d '{
    "source_config": {
        "snappable_id": "$source_db_id"
      }
    }' \
"https://$cluster_address/api/v1/sap_hana/db/$target_db_id/configure_restore"
```

The Rubrik REST API server initiates the configuration task and responds with a
request object.

```bash
{
      "id": "$request_id",
      "status": "QUEUED",
      "error": "None",
      "progress": 0,
      "startTime": "$start_timestamp",
      "endTime": "$end_timestamp",
      "links": [
        {
          "href": "https://$cluster_address/api/v1/sap_hana/db/request/$request_id",
          "rel": "self"
        }
      ]
}
```

### Unconfiguring system copy restore

To initiate a task to reset the configuration for a system copy restore on a
SAP HANA database, send a POST request to
[`/sap_hana/db/{id}/unconfigure_restore`](#operation/unconfigureSapHanaRestore)
where, {id} is the ID of the target SAP HANA database.

```bash
curl -X POST "https://$cluster_address/api/v1/sap_hana/db/$target_db_id/unconfigure_restore"
```
The Rubrik REST API server initiates the task to reset the configuration for the
system copy restore and responds with a request object.

```bash
{
      "id": "$request_id",
      "status": "QUEUED",
      "error": "None",
      "progress": 0,
      "startTime": "$start_timestamp",
      "endTime": "$end_timestamp",
      "links": [
        {
          "href": "https://$cluster_address/api/v1/sap_hana/db/request/$request_id",
          "rel": "self"
        }
      ]
}
```

## SAP HANA system apis

Request a list of SAP HANA systems on a cluster by sending a GET
request to [`/sap_hana/system`](#operation/querySapHanaSystems).

```bash
curl -X GET "https://$cluster_address/api/v1/sap_hana/system"
```

```bash
{
  "data": [
    {
      "id": "$system_id",
      "sid": "SC1",
      "numDbs": 3,
      "containerType": "SINGLE_CONTAINER",
      "instanceNumber": "03",
      "status": "OK",
      "username": "$system_username",
    }
  ],
  "hasMore": false,
  "total": 1
}
```

Adds an entry for SAP HANA system to database. To add a SAP HANA system entry,
send a POST request to [`/sap_hana/system`](#operation/addSapHanaSystem).

```bash
curl -X POST \
  -d '{
    "username": "$username",
    "password": "$password",
    "sid": "$sid",
    "instance": "$instance",
    "hostIdList": [
      "$host_id"
    ],
    "dataPathSpec": {
      "$dataPathType": "GCP"
    } }' \
  "https://$cluster_address/api/v1/sap_hana/system"
```
The Rubrik REST API server responds with the ID of the added SAP HANA system and
the status of the scheduled system refresh job.

```bash
{
      "id": "$system_id",
      "sid": "SC1",
      "numDbs": 3,
      "containerType": "SINGLE_CONTAINER",
      "instanceNumber": "03",
      "status": "OK",
      "username": "$system_username",
}
```

Further details are acquired by
[`/sap_hana/system/{id}`](#operation/getSapHanaSystem).

```bash
curl -X GET "https://$cluster_address/api/v1/sap_hana/system/$db_id"
```

```bash
{
      "id": "$system_id",
      "sid": "SC1",
      "numDbs": 3,
      "containerType": "SINGLE_CONTAINER",
      "instanceNumber": "03",
      "status": "OK",
      "username": "$system_username",
}
```

Update the SlA Domain assigned to the SAP HANA system by calling the
[`/sap_hana/system/{id}`](#operation/patchSapHanaSystem) endpoint. The API
returns the summary of the SAP HANA system.

```bash
curl -X PATCH "https://$cluster_address/api/v1/sap_hana/system/$db_id"
```

```bash
{
      "id": "$system_id",
      "sid": "SC1",
      "numDbs": 3,
      "containerType": "SINGLE_CONTAINER",
      "instanceNumber": "03",
      "status": "OK",
      "username": "$system_username",
}
```

Delete a SAP HANA system by calling the
[`/sap_hana/system/{id}`](#operation/deleteSapHanaSystem) endpoint. The API
initiates a delete job and responds with a request object.

```bash
curl -X DELETE "https://$cluster_address/api/v1/sap_hana/system/$id"
```

```bash
{
      "id": "$request_id",
      "status": "RUNNING",
      "error": "None",
      "progress": 0,
      "startTime": "$start_timestamp",
      "endTime": "$end_timestamp",
      "links": [
        {
          "href": "https://$cluster_address/api/v1/sap_hana/system/request/$request_id",
          "rel": "self"
        }
      ]
}
```

Using the information provided in the request object, send a GET request to the
[`/sap_hana/system/request/{id}`](#operation/getSapHanaSystemAsyncRequestStatus)
endpoint to poll the task status. When the value of `status` in the task object
is `SUCCEEDED`, the task finished successfully.

```bash
curl -X GET "https://$cluster_address/api/v1/sap_hana/system/request/$id"
```

```bash
{
      "id": "$request_id",
      "status": "SUCCEEDED",
      "error": "None",
      "progress": 0,
      "startTime": "$start_timestamp",
      "endTime": "$end_timestamp",
      "links": [
        {
          "href": "https://$cluster_address/api/v1/sap_hana/system/request/$request_id",
          "rel": "self"
        }
      ]
}
```

Refresh the metadata of a SAP HANA system object by calling the
[`/sap_hana/system/{id}/refresh`](#operation/createSapHanaSystemRefresh)
endpoint. The API initiates a refresh job and responds with a request object.

```bash
curl -X POST "https://$cluster_address/api/v1/sap_hana/system/$id/refresh"
```

```bash
{
      "id": "$request_id",
      "status": "RUNNING",
      "error": "None",
      "progress": 0,
      "startTime": "$start_timestamp",
      "endTime": "$end_timestamp",
      "links": [
        {
          "href": "https://$cluster_address/api/v1/sap_hana/system/request/$request_id",
          "rel": "self"
        }
      ]
}
```

Create a full data snapshot of a SAP HANA system object by
sending a POST request to the
[`/sap_hana/db/{id}/snapshot`](#operation/createOnDemandSapHanaBackup)
endpoint. The API initiates a data backup job and responds with a request
object.

```bash
curl -X POST "https://$cluster_address/api/v1/sap_hana/db/{id}/snapshot"
```

```bash
{
      "id": "$request_id",
      "status": "QUEUED",
      "error": "None",
      "progress": 0,
      "startTime": "$start_timestamp",
      "endTime": "$end_timestamp",
      "links": [
        {
          "href": "https://$cluster_address/api/v1/sap_hana/db/request/$request_id",
          "rel": "self"
        }
      ]
}
```

Using the information provided in the request object, send a
GET request to the
[`/sap_hana/db/request/{id}`](#operation/getSapHanaDbAsyncRequestStatus))
endpoint to poll the task status. When the value of `status` in
the task object is `SUCCEEDED`, the task finished successfully.
The response also includes the `$snapshot_id`.

```bash
curl -X GET "https://$cluster_address/api/v1/sap_hana/db/request/{id}"
```

```bash
{
      "id": "$request_id",
      "status": "SUCCEEDED",
      "error": "None",
      "progress": 0,
      "startTime": "$start_timestamp",
      "endTime": "$end_timestamp",
      "links": [
        {
          "href": "https://$cluster_address/api/v1/sap_hana/db/snapshot/$snapshot_id",
          "rel": "result"
        },
        {
          "href": "https://$cluster_address/api/v1/sap_hana/db/request/$request_id",
          "rel": "self"
        }
      ]
}
```

Request a list of summary of snapshots of a SAP HANA database by
sending a GET request to the
[`/sap_hana/db/{id}/snapshot`](#operation/querySapHanaDbSnapshot)
endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/sap_hana/db/{id}/snapshot"
```

```bash
{
  "data": [
    {
      "id": "$db_id",
      "date": "2019-12-16T23:21:53.377Z",
      "sourceObjectType": "SapHanaDatabase",
      "isOnDemandSnapshot": true,
      "isCustomRetentionApplied": false
      "cloudState": 0
      "replicationLocationIds": [
        "string"
      ],
      "archivalLocationIds": [
        "string"
      ],
      "slaId": "string",
      "slaName": "string",
      "isRetainedByRetentionLockSla": true,
      "backupId": 949363200000,
      "backupType": "FULL",
      "sapHanaStartTime": "2019-12-16T23:21:53.377Z",
      "sapHanaEndTime": "2019-12-16T23:21:53.377Z",
      "rubrikSnapshotStartTime": "2019-12-16T23:21:53.377Z",
      "rubrikSnapshotEndTime": "2019-12-16T23:21:53.377Z",
      "backupPrefix": "RUBRIK_949363200000_ON_DEMAND",
      "isExternalBackup": false,
      "isRubrikTriggeredOnDemandBackup": false
    }
  ],
  "hasMore": false,
  "total": 1
}
```

Request SAP HANA database snapshot details by sending a
GET request to the
[`/sap_hana/db/snapshot/{id}`](#operation/getSapHanaDbSnapshot) endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/sap_hana/db/snapshot/{id}"
```

```bash
{
      "isCorrupt": false,
      "id": "$db_id",
      "date": "2019-12-16T23:21:53.377Z",
      "sourceObjectType": "SapHanaDatabase",
      "isOnDemandSnapshot": true,
      "isCustomRetentionApplied": false
      "cloudState": 0
      "replicationLocationIds": [
        "string"
      ],
      "archivalLocationIds": [
        "string"
      ],
      "slaId": "string",
      "slaName": "string",
      "isRetainedByRetentionLockSla": true,
      "backupId": 949363200000,
      "backupType": "FULL",
      "sapHanaStartTime": "2019-12-16T23:21:53.377Z",
      "sapHanaEndTime": "2019-12-16T23:21:53.377Z",
      "rubrikSnapshotStartTime": "2019-12-16T23:21:53.377Z",
      "rubrikSnapshotEndTime": "2019-12-16T23:21:53.377Z",
      "backupPrefix": "RUBRIK_949363200000_ON_DEMAND",
      "isExternalBackup": false,
      "isRubrikTriggeredOnDemandBackup": false
}
```

Request details of recoverable ranges of a SAP HANA database
by sending a GET request to the
[`/sap_hana/db/{id}/recoverable_range`](#operation/getSapHanaDbRecoverableRanges)
endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/sap_hana/db/{id}/recoverable_range"
```

```bash
{
  "hasMore": false,
  "data": [
    {
      "beginTime": "2017-02-02T18:53:12.694Z",
      "endTime": "2017-02-02T20:53:12.694Z"
    }
  ],
  "total": 1
}
```

Delete a full snapshot with a DELETE request to the
 [`/sap_hana/db/snapshot/{id}`](#operation/deleteSapHanaDbSnapshot) endpoint

```bash
curl -X DELETE "https://$cluster_address/api/v1/sap_hana/db/snapshot/{id}"
```
Request details of missed snapshots of a SAP HANA database
by sending a GET request to the
[`/sap_hana/db/{id}/missed_snapshot`](#operation/getMissedSapHanaDbSnapshots)
endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/sap_hana/db/{id}/missed_snapshot"
```

```bash
{
  "hasMore": true,
  "data": [
    {
      "archivalLocationType": [
        "string"
      ],
      "missedSnapshotTime": "2020-08-06T14:23:13.666Z",
      "missedSnapshotTimeUnits": [
        {
          "timeUnit": "Minute",
          "frequency": 0,
          "retention": 0,
          "dayOfTime": "Monday"
        }
      ]
    }
  ],
  "total": 0
}
```

# Volume Groups

Rubrik clusters can protect Windows volumes on a host as a Volume Group.

## Getting a list of Volume Groups

To retrieve a current list of Volume Groups, send a GET request to
[`/volume_group`](#operation/queryVolumeGroup).

```bash
curl -X GET "https://$cluster_address/api/v1/volume_group"
```

The Rubrik REST API server responds with a list of summary objects
of Volume Groups.

```bash
{
  "hasMore": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "configuredSlaDomainId": "string",
      "configuredSlaDomainName": "string",
      "primaryClusterId": "string",
      "isConfiguredSlaDomainRetentionLocked": true,
      "effectiveSlaDomainId": "string",
      "effectiveSlaDomainName": "string",
      "isEffectiveSlaDomainRetentionLocked": true,
      "effectiveSlaDomainPolarisManagedId": "string",
      "effectiveSlaSourceObjectId": "string",
      "effectiveSlaSourceObjectName": "string",
      "slaAssignment": "Derived",
      "hostname": "string",
      "hostId": "string",
      "isRelic": true
    }
  ],
  "total": 0
}
```

## Getting Volume Group Details

To retrieve the details of a Volume Group, send a GET request to
[`/volume_group/{id}`](#operation/getVolumeGroup)

```bash
curl -X GET "https://$cluster_address/api/v1/volume_group/{id}"
```

The Rubrik REST API server responds with the details of the Volume Group.

```bash
{
  "id": "string",
  "name": "string",
  "configuredSlaDomainId": "string",
  "configuredSlaDomainName": "string",
  "primaryClusterId": "string",
  "isConfiguredSlaDomainRetentionLocked": true,
  "effectiveSlaDomainId": "string",
  "effectiveSlaDomainName": "string",
  "isEffectiveSlaDomainRetentionLocked": true,
  "effectiveSlaDomainPolarisManagedId": "string",
  "effectiveSlaSourceObjectId": "string",
  "effectiveSlaSourceObjectName": "string",
  "slaAssignment": "Derived",
  "hostname": "string",
  "hostId": "string",
  "isRelic": true,
  "blackoutWindowStatus": {
    "isGlobalBlackoutActive": true,
    "isSnappableBlackoutActive": true
  },
  "blackoutWindows": {
    "globalBlackoutWindows": [
      {
        "startTime": "string",
        "endTime": "string"
      }
    ],
    "snappableBlackoutWindows": [
      {
        "startTime": "string",
        "endTime": "string"
      }
    ]
  },
  "isPaused": true,
  "volumes": [
    {
      "id": "string",
      "fileSystemType": "NTFS",
      "mountPoints": [
        "string"
      ],
      "size": 0,
      "naturalId": "string",
      "volumeGroupId": "string",
      "isCurrentlyPresentOnSystem": true
    }
  ]
}
```

## Patching Volume Group Details

To modify the details of a Volume Group, send a PATCH request to
[`/volume_group/{id}`](#operation/patchVolumeGroup)

```bash
curl -X POST "https://$cluster_address/api/v1/volume_group/{id}"
```

## Getting a list of all snapshots of a Volume Group

To get a list of all snapshots of a Volume Group, send a GET request to
[`/volume_group/{id}/snapshot`](#operation/queryVolumeGroupSnapshot)

```bash
curl -X GET "https://$cluster_address/api/v1/volume_group/{id}/snapshot"
```

The Rubrik REST API server responses with a list of snapshots of the
Volume Group.

```bash
{
  "hasMore": true,
  "data": [
    {
      "id": "string",
      "date": "2019-12-16T23:21:53.446Z",
      "expirationDate": "2019-12-16T23:21:53.446Z",
      "sourceObjectType": "string",
      "isOnDemandSnapshot": true,
      "cloudState": 0,
      "consistencyLevel": "string",
      "indexState": 0,
      "replicationLocationIds": [
        "string"
      ],
      "archivalLocationIds": [
        "string"
      ],
      "slaId": "string",
      "slaName": "string",
      "isRetainedByRetentionLockSla": true,
      "cloudStorageTier": "Hot",
      "volumeGroupId": "string",
      "name": "string",
      "includedVolumes": [
        {
          "id": "string",
          "fileSystemType": "NTFS",
          "mountPoints": [
            "string"
          ],
          "size": 0
        }
      ]
    }
  ],
  "total": 0
}
```

## Creating on-demand snapshot of a Volume Group

To create an on-demand snapshot of a Volume Group, send a POST request to
[`/volume_group/{id}/snapshot`](#operation/createOnDemandVolumeGroupBackup)

```bash
curl -X POST "https://$cluster_address/api/v1/volume_group/{id}/snapshot"
```

The Rubrik REST API server initiates the asynchronous snapshot task and
responds with a task object.

```
{
  "id": "string",
  "status": "string",
  "progress": 0,
  "startTime": "2019-12-16T23:21:53.450Z",
  "endTime": "2019-12-16T23:21:53.450Z",
  "nodeId": "string",
  "error": {
    "message": "string"
  },
  "links": [
    {
      "href": "string",
      "rel": "string"
    }
  ]
}
```

## Getting the forced full snapshot configuration of a Volume Group

To retrieve the configuration used to force a full snapshot of a Volume
Group, send a GET request to
[`/volume_group/{id}/request/force_full_snapshot`](#operation/getVolumeGroupForceFullSpec)

```bash
curl -X GET "https://$cluster_address/api/v1/volume_group/{id}/request/force_full_snapshot"
```

The Rubrik REST API server responds with the Volume Group force full
response object. The response object contains the latest configuration,
unless it was cleared by a backup job of the Volume Group or it was
never set.

```bash
{
  "volumeGroupId": "VolumeGroup:::fe9470a4-4057-4357-ac1f-ae99ff735439",
  "volumeInfos": [
    {
      "volumeId": "872bdd28-4d5d-4831-8698-59d692a822fc",
      "shouldDedupe": false
    },
    {
      "volumeId": "39f61483-9cf5-11e9-80b9-00155d094203",
      "shouldDedupe": true
    }
  ]
}
```

## Requesting a forced full snapshot for a Volume Group

To request a forced full snapshot of a Volume Group, send a POST request to
[`/volume_group/{id}/request/force_full_snapshot`](#operation/requestVolumeGroupForceFullSnapshot)

```bash
curl -X POST "https://$cluster_address/api/v1/volume_group/{id}/request/force_full_snapshot"
```

The Rubrik REST API server persists the configuration for forcing a
full snapshot until the next backup job, which takes a full snapshot
and clears the configuration.

```
{
  "volumeGroupId": "VolumeGroup:::fe9470a4-4057-4357-ac1f-ae99ff735439",
  "volumeInfos": [
    {
      "volumeId": "872bdd28-4d5d-4831-8698-59d692a822fc",
      "shouldDedupe": false
    },
    {
      "volumeId": "39f61483-9cf5-11e9-80b9-00155d094203",
      "shouldDedupe": true
    }
  ]
}
```

## Getting details of a Volume Group snapshot

To get the details of a Volume Group snapshot, send a GET request to
[`/volume_group/snapshot/{id}`](#operation/getVolumeGroupSnapshot)

```bash
curl -X GET "https://$cluster_address/api/v1/volume_group/snapshot/{id}"
```

The The Rubrik REST API server responds with the details of a snapshot.

```
{
  "id": "string",
  "date": "2019-12-16T23:21:53.395Z",
  "expirationDate": "2019-12-16T23:21:53.395Z",
  "sourceObjectType": "string",
  "isOnDemandSnapshot": true,
  "cloudState": 0,
  "consistencyLevel": "string",
  "indexState": 0,
  "replicationLocationIds": [
    "string"
  ],
  "archivalLocationIds": [
    "string"
  ],
  "slaId": "string",
  "slaName": "string",
  "isRetainedByRetentionLockSla": true,
  "cloudStorageTier": "Hot",
  "volumeGroupId": "string",
  "name": "string",
  "includedVolumes": [
    {
      "id": "string",
      "fileSystemType": "NTFS",
      "mountPoints": [
        "string"
      ],
      "size": 0
    }
  ]
}
```

## Getting summary information of all Volume Group mounts

To get summary information of all Volume Group mounts, send a GET request to
[`/volume_group/snapshot/mount`](#operation/queryVolumeGroupSnapshotMount)

```bash
curl -X GET "https://$cluster_address/api/v1/volume_group/snapshot/mount"
```

The Rubrik REST API server returns summary information for all mounts.

```
{
  "hasMore": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "sourceVolumeGroupId": "string",
      "sourceHostId": "string",
      "sourceHostName": "string",
      "snapshotDate": "2019-12-16T23:21:53.377Z",
      "snapshotSourceVersion": "WithLayoutInfo",
      "mountedDate": "2019-12-16T23:21:53.377Z",
      "mountedVolumes": [
        {
          "id": "string",
          "originalMountPoints": [
            "string"
          ],
          "size": 0,
          "fileSystemType": "NTFS",
          "smbPath": "string",
          "hostMountedPath": "string"
        }
      ],
      "targetHostId": "string",
      "targetHostName": "string",
      "mountRequestId": "string",
      "unmountRequestId": "string",
      "isReady": true,
      "restoreScriptSmbPath": "string"
    }
  ],
  "total": 0
}
```

## Getting summary information of one mount

To retrieve summary information of one Volume Group mount, send a GET
request to
[`/volume_group/snapshot/mount/{id}`](#operation/getVolumeGroupSnapshotMount)

```bash
curl -X GET "https://$cluster_address/api/v1/volume_group/snapshot/mount/{id}"
```

The Rubrik REST API server returns summary information of the mount.

```
{
  "id": "string",
  "name": "string",
  "sourceVolumeGroupId": "string",
  "sourceHostId": "string",
  "sourceHostName": "string",
  "snapshotDate": "2019-12-16T23:21:53.387Z",
  "snapshotSourceVersion": "WithLayoutInfo",
  "mountedDate": "2019-12-16T23:21:53.388Z",
  "mountedVolumes": [
    {
      "id": "string",
      "originalMountPoints": [
        "string"
      ],
      "size": 0,
      "fileSystemType": "NTFS",
      "smbPath": "string",
      "hostMountedPath": "string"
    }
  ],
  "targetHostId": "string",
  "targetHostName": "string",
  "mountRequestId": "string",
  "unmountRequestId": "string",
  "isReady": true,
  "restoreScriptSmbPath": "string"
}

```


## Getting summary information of the latest snapshot of a Volume Group

Send a GET request to
[`/volume_group/{id}/latest_snapshot`]\
(#operation/queryVolumeGroupLatestSnapshot)
to receive a summary of the latest snapshot of a Volume Group.

```bash
curl -X GET "https://$cluster_address/api/v1/volume_group/{id}/latest_snapshot"
```

The Rubrik REST API server returns summary information of the snapshot.
```bash
[
  {
    "id": "string",
    "date": "2019-12-16T23:21:53.446Z",
    "expirationDate": "2019-12-16T23:21:53.446Z",
    "sourceObjectType": "string",
    "isOnDemandSnapshot": true,
    "cloudState": 0,
    "consistencyLevel": "string",
    "indexState": 0,
    "replicationLocationIds": [
      "string"
    ],
    "archivalLocationIds": [
      "string"
    ],
    "slaId": "string",
    "slaName": "string",
    "isRetainedByRetentionLockSla": true,
    "cloudStorageTier": "Hot",
    "volumeGroupId": "string",
    "name": "string",
    "includedVolumes": [
      {
        "id": "string",
        "fileSystemType": "NTFS",
        "mountPoints": [
          "string"
        ],
        "size": 0
      }
    ]
  }
]
```

# Snapshot Stats

### Return storage stats of a snapshot
To receive the storage statistics of a snapshot, send a GET request to
 [`/snapshot/{id}/storage/stats`]\
(#operation/getSnapshotStorageStatsV1).

```bash
curl -X GET "https://$cluster_address/api/v1/snapshot/{id}/storage/stats"
```

# Hierarchy

### Return the list of descendant objects with SLA conflicts in bulk
To bulk get the list of descendant objects with SLA conflicts, send a POST
 request to
 [`/hierarchy/bulk_sla_conflicts`]\
(#operation/bulkHierarchySlaConflictsV1).

```bash
curl -X POST "https://$cluster_address/api/v1/hierarchy/bulk_sla_conflicts"
```

# Backup Verification

Backup verification checks the validity of a backup
based on the specified snapshot ID and object ID.

### Verify the validity of a given snapshot
Verify the validity of the snapshot identified
by the specified snapshot ID and object ID.
[
`/backup/verify`
](#operation/verifySnapshot).

```bash
curl -X POST \
  -d '{
    "objectId": "$objectId",
    "snapshotIdsOpt": "$snapshotIdsOpt",
    "locationIdOpt": "$locationIdOpt",
    "shouldVerifyAfterOpt": "$shouldVerifyAfterOpt" }' \
  "https://$cluster_address/api/v1/backup/verify/"
```

### Get asynchronous request details for Backup Verification
Get the details of an asynchronous request
for a backup verification job.
[
`/backup/verify/{id}`
](#operation/getBackupVerificationAsyncRequestStatus).

```bash
curl -X GET "https://$cluster_address/api/v1/backup/verify/$id"
```

### Reschedule unsuccessful backup tasks
[
`/backup/retry`
](#operation/createBackupRemediationAsyncTask).

```bash
curl -X POST \
  -d '{
    "spec": [
      {
        "objectId": "$objectId",
        "eventSeriesId": "$eventSeriesId"
      }
    ],
    "config": {
      "runNow": "$runNow"
    }
  }' \
  "https://$cluster_address/api/v1/backup/retry/"
```

### Get status of reschedule operation
[
`/backup/retry/{id}`
](#operation/getBackupRemediationAsyncTaskStatus).

```bash
curl -X GET "https://$cluster_address/api/v1/backup/retry/$id"
```

# Exclusion pattern

An exclusion pattern is a regular expression pattern that enables Rubrik clusters to exclude files and folders, with names that match the regular expression pattern, from search results. Once created, the Rubrik cluster applies the exclusion pattern to the global search results and the snapshot level search results. The exclusion patterns also exclude matching files and folders from the recovery process.

A Rubrik cluster can apply the exclusion pattern on a particular [Fileset](#section/Filesets) or on all the filesets associated with a particular [Host](#section/Hosts).

The exclusion patterns are either mutable or immutable. By default, the exclusion patterns are mutable or editable upon creation.

The Rubrik REST API exposes endpoints to:

* create a single exclusion pattern
* create multiple exclusion patterns, in bulk
* get details of all the existing exclusion patterns
* view details of a specific exclusion pattern
* update an existing exclusion pattern
* delete a single exclusion pattern
* delete multiple exclusion patterns, in bulk

## Adding an exclusion pattern
To create a new exclusion pattern, send a POST request to [/exclusion_pattern](#operation/createExclusionPattern).
The request payload must include the following attributes required to create an exclusion pattern:
* `sourceId` - The ID for a fileset or a host to which the pattern will apply.
* `pattern` - The regular expression pattern.

```bash
curl -X POST \
  -d '{
    "sourceId": "$sourceId",
    "pattern": "$pattern" }' \
  "https://$cluster_address/api/v1/exclusion_pattern"
```

The Rubrik REST API server responds with the details of the new exclusion pattern.

```bash
{
  "id": "$id",
  "sourceId": "$sourceId",
  "pattern": "$pattern",
  "isMutable": true,
  "patternStatus": "Queued",
  "isActive": true,
  "primaryClusterId": "$primaryClusterId"
}
```

## Bulk adding exclusion patterns
To create exclusion patterns in bulk, send a POST request to [/exclusion_pattern/bulk](#operation/bulkCreateExclusionPattern).
The request payload must be an array. The array contains one set of required attributes for every exclusion pattern that will be created. See [Adding an exclusion pattern](#adding-an-exclusion-pattern) for a list of required attributes.

```bash
curl -X POST \
  -d '{
    [{ "sourceId": "$sourceId1", "pattern": "$pattern1"}, { "sourceId": "$sourceId2", "pattern": "$pattern2"}] }' \
  "https://$cluster_address/api/v1/exclusion_pattern/bulk"
```

The Rubrik REST API server responds with the details of the new exclusion patterns.

```bash
{
  "exclusionPatternDetails": [
    {
      "id": "$id",
      "sourceId": "$sourceId1",
      "pattern": "$pattern1",
      "isMutable": true,
      "patternStatus": "Queued",
      "isActive": true,
      "primaryClusterId": "$primaryClusterId"
    },
    {
      "id": "$id",
      "sourceId": "$sourceId2",
      "pattern": "$pattern2",
      "isMutable": true,
      "patternStatus": "Queued",
      "isActive": true,
      "primaryClusterId": "$primaryClusterId"
    }
  ]
}
```

## Retrieving all exclusion patterns
To retrieve a summary of all the exclusion patterns that have been added to the Rubrik cluster, send a GET request to [/exclusion_pattern](#operation/queryExclusionPattern).
The GET /exclusion_pattern endpoint exposes a number of parameters to filter the list of exclusion patterns returned by the endpoint. The endpoint can be used with or without any of the available parameters.

```bash
curl -X GET "https://$cluster_address/api/v1/exclusion_pattern"
```

The Rubrik REST API server responds with a ListResponse object that contains the current list of exclusion patterns and their details.

```bash
{
  "hasMore": true,
  "data": [
    {
      "id": "$id",
      "sourceId": "$sourceId",
      "pattern": "$pattern",
      "isMutable": true,
      "patternStatus": "Applied",
      "isActive": true,
      "primaryClusterId": "$primaryClusterId"
    }
  ],
  "total": 1
}
```

## Retrieving a specific exclusion pattern
To retrieve the details of a specific exclusion pattern, send a GET request to [/exclusion_pattern/{id}](#operation/getExclusionPattern).
The {id} represents the ID for the exclusion pattern and has the form - ExclusionPattern:::{uuid}.

```bash
curl -X GET \
  "https://$cluster_address/api/v1/exclusion_pattern/$exclusion_pattern_id"
```

The Rubrik REST API server responds with the details of the specified exclusion pattern.

```bash
{
  "id": "$exclusion_pattern_id",
  "sourceId": "$sourceId",
  "pattern": "$pattern",
  "isMutable": true,
  "patternStatus": "Applied",
  "isActive": true,
  "primaryClusterId": "$primaryClusterId"
}
```

## Updating an exclusion pattern
To update a specific exclusion pattern, send a POST request to [/exclusion_pattern/{id}](#operation/updateExclusionPattern).
Note that the Rubrik cluster allows updating only the exclusion patterns that have `"isMutable": true`.
The {id} represents the ID for the exclusion pattern to be updated and has the form - ExclusionPattern:::{uuid}.

The attributes that can be updated are all or a subset of the following attributes:

* pattern
* isActive
* isMutable

```bash
curl -X POST \
  -d '{
    "pattern": "$pattern",
    "isActive": false,
    "isMutable": true }' \
  "https://$cluster_address/api/v1/exclusion_pattern/$exclusion_pattern_id"
```

The Rubrik REST API server responds with the details of the updated exclusion pattern.

```bash
{
  "id": "$exclusion_pattern_id",
  "sourceId": "$sourceId",
  "pattern": "$pattern",
  "isMutable": true,
  "patternStatus": "Queued",
  "isActive": true,
  "primaryClusterId": "$primaryClusterId"
}
```

## Deleting an exclusion pattern
To delete a specific exclusion pattern, send a DELETE request to [/exclusion_pattern/{id}](#operation/deleteExclusionPattern).
Note that the Rubrik cluster only allows the deletion of the exclusion patterns that have `"isMutable": true`.
The {id} represents the ID for the exclusion pattern to be deleted and has the form - ExclusionPattern:::{uuid}.

```bash
curl -X DELETE \
  "https://$cluster_address/api/v1/exclusion_pattern/$exclusion_pattern_id"
```
The Rubrik REST API server responds with a 204 HTTP response code to indicate the successful deletion of the specified exclusion pattern.

## Bulk deleting exclusion patterns
To delete exclusion patterns in bulk, send a DELETE request to [/exclusion_pattern/bulk](#operation/bulkDeleteExclusionPattern) with the IDs for the exclusion patterns to be deleted.
Note that the Rubrik cluster only allows the deletion of the exclusion patterns that have `"isMutable": true`.

```bash
curl -X DELETE \
  "https://$cluster_address/api/v1/exclusion_pattern/bulk?ids=$exclusion_pattern_id1,$exclusion_pattern_id2"
```
The Rubrik REST API server responds with a 204 HTTP response code to indicate the successful deletion of the specified exclusion patterns.

# Hyper-V VMs 

## Getting the forced full snapshot configuration of a Hyperv VM

To retrieve the configuration used to force a full snapshot
of a Hyperv virtual machine, send a GET request to:
[`/hyperv/vm/{id}/request/force_full_snapshot`](#operation/getHypervVirtualMachineForceFullSpec)

```bash
curl -X GET "https://$cluster_address/api/v1/hyperv/vm/{id}/request/force_full_snapshot"
```

The Rubrik REST API server responds with the Hyperv virtual machine force full
response object. The response object contains the latest configuration,
unless it was cleared by a backup job of the Hyperv virtual machine or was
never set.

```bash
{
  "vmId": "HypervVirtualMachine:::fe9470a4-4057-4357-ac1f-ae99ff735439",
  "virtualDiskInfos": [
    {
      "virtualDiskId": "872bdd28-4d5d-4831-8698-59d692a822fc",
      "shouldDedupe": false
    },
    {
      "virtualDiskId": "39f61483-9cf5-11e9-80b9-00155d094203",
      "shouldDedupe": true
    }
  ]
}
```

## Requesting a forced full snapshot for a Hyperv VM

To request a forced full snapshot of a Hyperv virtual machine, send a POST
request to:
[`/hyperv/vm/{id}/request/force_full_snapshot`](#operation/requestHypervVirtualMachineForceFullSnapshot)

```bash
curl -X POST "https://$cluster_address/api/v1/hyperv/vm/{id}/request/force_full_snapshot"
```

The Rubrik REST API server persists the configuration to force a
full snapshot until the next backup job, which takes a full snapshot
and clears the configuration.

```bash
{
  "vmId": "HypervVirtualMachine:::fe9470a4-4057-4357-ac1f-ae99ff735439",
  "virtualDiskInfos": [
    {
      "virtualDiskId": "872bdd28-4d5d-4831-8698-59d692a822fc",
      "shouldDedupe": false
    },
    {
      "virtualDiskId": "39f61483-9cf5-11e9-80b9-00155d094203",
      "shouldDedupe": true
    }
  ]
}
```

# Health monitor
The Rubrik REST API endpoints for health monitor will allow users to get insight
into the health of individual nodes or the entire Rubrik cluster.
Currently, the endpoints support following operations:
* Retrieve a list of available health monitor policies.
* Enforce health monitor policies on one or more nodes of the Rubrik cluster.
* Retrieve the status of the health monitor policies.

## Get health monitor policies
To retrieve a list of health monitor policies, send GET request to
GET ['/health_monitor/policies'](#operation/getPolicies) endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/health_monitor/policies"
```
The Rubrik REST API server responds with a list of the available health monitor
policies. Following output displays the response for Sdfs policy.
```bash
[
  {
    "policyId": "Sdfs",
    "policyType": "CHECKER",
    "policyName": "Sdfs Check",
    "description": "Verify /sd is accessible and the SDFS service is responding",
    "script": "$policyScript",
    "scope": "NODE",
    "runInState": [
      "OK",
      "BAD"
    ],
    "isEnabled": true,
    "isHidden": false,
    "scheduleFreqInSec": 20,
    "causes": [],
    "remedies": [],
    "configParams": [],
    "notificationConfig": {
      "name": "Sdfs Check Failure",
      "notificationType": "DIAGNOSTIC",
      "notificationMessage": "Sdfs check failed",
      "criticalDetails": {
        "numFailures": 150,
        "failureWindow": 3000,
        "action": {
          "actionString": "$criticalActionScript",
          "isEnabled": true
        }
      },
      "warnDetails": {
        "numFailures": 75,
        "failureWindow": 2000,
        "action": {
          "actionString": "$warnActionScript",
          "isEnabled": true
        }
      }
    },
    "dependencies": []
  }
]

```

## Run health monitor Policies
To enforce health monitor policies on selected nodes or the entire Rubrik
cluster send a POST Request to
['/health_monitor/$runPolicy'](#operation/runPolicies) endpoint.

```bash
curl -X POST
  -d '{
    "policyIds": ["policy_id1", "policy_id2"],
    "nodeIds": ["node_id1, node_id2"]}' \
  "https://$cluster_address>/api/v1/health_monitor/runPolicy"
```
The Rubrik REST API server responds with the result of running the health
monitor policies. Following output displays the Sdfs policy enforcement response.
```
[
  {
    "nodeId": "$node_id1",
    "checkResults": [
      {
        "nodeId": "$node_id1",
        "policyId": "Sdfs",
        "isCheckPassed": true
      }
    ]
  },
  {
    "nodeId": "$node_id2",
    "checkResults": [
      {
        "nodeId": "$node_id2",
        "policyId": "Sdfs",
        "isCheckPassed": true
      }
    ]
  },
  {
    "nodeId": "$node_id3",
    "checkResults": [
      {
        "nodeId": "$node_id3",
        "policyId": "Sdfs",
        "isCheckPassed": true
      }
    ]
  }

```
## Health monitor policy enforcement status
To retrieve the status of the policy enforcement, send a GET request to
GET ['/health_monitor/policyStatus'](#operation/getPolicyStatus) endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/health_monitor/policyStatus?
node_ids=<node_id1,node_id2>&policy_ids=policy_id1,policy_id2&has_detailed_status=true"
```
The Rubrik REST API server responds with the status of running the policies on
the selected nodes or the entire Rubrik cluster.
```
[
  {
    "nodeId": "$node_id1",
    "checkResults": [
      {
        "nodeId": "$node_id1",
        "policyId": "Sdfs",
        "isCheckPassed": true,
        "checkOutput": "Passed last 12 attempts."
      }
    ]
  },
  {
    "nodeId": "$node_id2",
    "checkResults": [
      {
        "nodeId": "$node_id2",
        "policyId": "Sdfs",
        "isCheckPassed": true,
        "checkOutput": "Passed last 12 attempts."
      }
    ]
  },
  {
    "nodeId": "$node_id3",
    "checkResults": [
      {
        "nodeId": "$node_id3",
        "policyId": "Sdfs",
        "isCheckPassed": true,
        "checkOutput": "Passed last 12 attempts."
      }
    ]
  }
]
```

# Job Monitoring

## Get summary information for protection and recovery jobs that are currently
## running, scheduled to run, or completed in the last 24 hours.
To get summary information for protection and recovery jobs that are currently
running, scheduled to run, or completed in the last 24 hours, send a GET request
to [`/job_monitoring`](#operation/getJobMonitoringInfo) endpoint with optional
query parameters. The optional query parameters are job_event_status, job_type,
is_first_full, nclude_log_related_job, object_type, object_name, node_name,
effective_sla_domain_id, last_update_time, after_id, sort_by, sort_order
and limit. The default sort sort_by is start time with sort_order as asc.

```bash
curl -X GET "https://$cluster_address/api/v1/job_monitoring?job_event_status=Active,Queued&limit=1&sort_by=StartTime&sort_order=asc"
```

The list of jobs matching the filters is returned.
```bash
{
  "jobMonitoringInfoList": [
    {
      "jobMonitoringState": "Active",
      "jobStatus": "Queued",
      "jobType": "Replication",
      "objectId": "ObjectId,
      "objectType": "VmwareVirtualMachine",
      "objectName": "object name",
      "locationId": "location id",
      "locationName": "location name",
      "slaDomainId": "6d29f271-d706-47a5-a706-f4411ae5555a",
      "slaDomainName": "Sla name",
      "startTime": "2019-10-28T22:15:14.868Z",
      "isFirstFullSnapshot": false,
      "retryCount": 0,
      "eventSeriesId": "b3a00c13-74de-4508-80cd-822d5f2960fe",
      "duration": 1802576,
      "nodeId": "node_id",
      "warningCount": 0,
      "lastUpdatedTime": "2019-10-28T22:15:15.088Z"
    }
  ],
  "jobEventStatus": ["Active","Queued"],
  "shouldIncludeLogRelatedJob": false,
  "afterId": "afterId",
  "hasMore": true
}
```
## Get job summary information for protection and recovery jobs separated by
## job type that have been scheduled, are currently running, or completed in
## the past 24 hours.
To get job summary information for protection and recovery jobs separated by
job type that have been scheduled, are currently running, or completed in the
past 24 hours,send a GET request to
[`/job_monitoring/summary_by_job_type`](#operation/getMonitoringJobCountByJobType)
with the required job_monitoring_state parameter.

```bash
curl -X GET "https://$cluster_address/api/v1/job_monitoring/summary_by_job_type?job_monitoring_state=Active"
```

The reponse is the the number of jobs for the given state separated by job_type.

```bash
{
  "jobMonitoringState": "Active",
  "objectCounts": {
    "total": 37,
    "archival": 10,
    "backup": 15,
    "instantiate": 0,
    "recovery": 0,
    "replication": 12,
    "logBackup": 0,
    "logArchival": 0,
    "logReplication": 0,
    "logShipping": 0
  }
}
```
## Get job summary information separated by job state for all running jobs,
## jobs that have been scheduled, and jobs that are complete, for protection
## and recovery jobs in the past 24 hours.
To get job summary information separated by job state for all running jobs,
jobs that have been scheduled, and jobs that are complete, for protection and
recovery jobs in the past 24 hours, send a GET request to
[`/job_monitoring/get_summary_by_job_state`](#operation/getMonitoringJobCountByJobState)
with the optional parameter job_types to get the count only for a
specific state.

```bash
curl -X GET "https://$cluster_address/api/v1/job_monitoring/get_summary_by_job_state"
```

The response is the number of jobs in each state.

```bash
{
  "jobTypes": [
    "Instantiate",
    "LogReplication",
    "Archival",
    "Replication",
    "LogBackup",
    "LogShipping",
    "Backup",
    "Recovery",
    "LogArchival"
  ],
  "objectCounts": {
    "total": 52,
    "failure": 2,
    "active": 15,
    "scheduled": 10,
    "success": 25
  }
}
```

## Get a link to to download the job summary information as a CSV file, with
## the same filters as in the `GET /job_monitoring/` API.
To get a link to to download the job summary information as a CSV file, send a
GET request to
[`/job_monitoring/csv_download_link`](#operation/getJobMonitoringInfoCsvDownloadLink)
 with require parameter job_monitoring_state.

```bash
curl -X GET "https://$cluster_address/api/v1/job_monitoring/csv_download_link?job_monitoring_state=Active"
```

The link to the file is returned.

```bash
{
  "downloadLink": "https://$cluster_address/report_dir/name.csv",
  "jobMonitoringState": "Active"
}
```

## Create an email subscription to the monitoring page with user-specified
## job states.
To create an email subscription to the monitoring page, send a
POST request to
[`/job_monitoring/subscription`](#operation/createMonitoringSubscription)
 with required parameter subscription_request.

```bash
curl -X POST -d '{
  "timeAttributes": "$timeAttributes",
  "emailAddresses": "$emailAddresses",
  "attachments": "$attachments",
  "jobStates": "$jobStates"
}' "https://$cluster_address/api/v1/job_monitoring/subscription"
```

The summary of the created monitoring email subscription is returned.

```bash
{
  "timeAttributes": {"dailyScheduleHour": 7},
  "emailAddresses": ["abcde@rubrik.com"],
  "attachments": ["Csv"],
  "jobStates": ["Active"],
  "id": "b3a00c13-74de-4508-80cd-822d5f2960fe",
  "status": "Active",
  "owner": {
    "userId": "6d29f271-d706-47a5-a706-f4411ae5555a",
    "userName": "Owner"
  }
}
```

## Get all monitoring page email subscriptions.
To get all email subscriptions to the monitoring page, send a
GET request to [`/job_monitoring/subscription`]
(#operation/getMonitoringSubscriptions)
 with no parameters.

```bash
curl -X GET
"https://$cluster_address/api/v1/job_monitoring/subscription"
```

A summary of all unarchived email subscriptions for monitoring
  page in a list of summaries sorted by creation time (earliest
  created first).
  Each summary contains information for each subscription
  -- Time attributes - when to send the email
  -- Email addresses - who to send the email
  -- Attachments - what attachments should the email include
  -- Job states - which job states to include in the email
      (Failure, Scheduled, Success, Active, Canceled).
  -- Id - the tring that identifies the subscription
  -- Status - the status of the subscription
      (Active, Suspended, or Unknown)
  -- Owner - information about the owner of the subscription
    -- user id - unique id used to identify the owner
    -- user name - human-readable name of user
       the time schedule to send the subscription

```bash
[
  {
    "timeAttributes": {"dailyScheduleHour": 7},
    "emailAddresses": ["abcde@rubrik.com"],
    "attachments": ["Csv"],
    "jobStates": ["Active"],
    "id": "b3a00c13-74de-4508-80cd-822d5f2960fe",
    "status": "Suspended",
    "owner": {
      "userId": "6d29f271-d706-47a5-a706-f4411ae5555a",
      "userName": "Owner"
    }
  },
  {
    "timeAttributes": {"dailyScheduleHour": 20},
    "emailAddresses": ["dummy@rubrik.com"],
    "attachments": ["Csv"],
    "jobStates": ["Failure", "Canceled"],
    "id": "b3a00c13-74de-4508-80cd-822d5f2960fe",
    "status": "Active",
    "owner": {
      "userId": "499aeb71-f114-45a5-8456-91b9f6c45ddd",
      "userName": "Owner"
    }
  },
]
```

## Get a monitoring page email subscription.
To get an email subscription to the monitoring page, send a
GET request to
[`/job_monitoring/subscription/{subscription_id}`]
(#operation/getMonitoringSubscription)
 with required parameter subscription_id.

```bash
curl -X GET
"https://$cluster_address/api/v1/job_monitoring/subscription/$subscription_id"
```

The summary of the created monitoring email subscription is returned.

```bash
{
  "timeAttributes": {"dailyScheduleHour": 7},
  "emailAddresses": ["abcde@rubrik.com"],
  "attachments": ["Csv"],
  "jobStates": ["Active"],
  "id": "b3a00c13-74de-4508-80cd-822d5f2960fe",
  "status": "Active",
  "owner": {
    "userId": "6d29f271-d706-47a5-a706-f4411ae5555a",
    "userName": "Owner"
  }
}
```

## Update an existing monitoring page email subscription.
To update an email subscription to the monitoring page, send a
PATCH request to
[`/job_monitoring/subscription/{subscription_id}`]
(#operation/updateMonitoringSubscription)
 with required parameter subscription_id.

```bash
curl -X PATCH -d '{
  "timeAttributes": "$timeAttributes",
  "emailAddresses": "$emailAddresses",
  "attachments": "$attachments",
  "jobStates": "$jobStates",
  "id": "$id",
  "assumeOwnership": "$assumeOwnership"
}'
"https://$cluster_address/api/v1/job_monitoring/subscription/$subscription_id"
```

The summary of the updated monitoring email subscription is returned.

```bash
{
  "timeAttributes": {"dailyScheduleHour": 7},
  "emailAddresses": ["abcde@rubrik.com"],
  "attachments": ["Csv"],
  "jobStates": ["Active"],
  "id": "b3a00c13-74de-4508-80cd-822d5f2960fe",
  "status": "Active",
  "owner": {
    "userId": "6d29f271-d706-47a5-a706-f4411ae5555a",
    "userName": "Owner"
  }
}
```

## Delete an existing monitoring page email subscription.
To delete an email subscription to the monitoring page, send a
DELETE request to
[`/job_monitoring/subscription/{subscription_id}`]
(#operation/deleteMonitoringSubscription)
 with required parameter subscription_id.

```bash
curl -X DELETE
"https://$cluster_address/api/v1/job_monitoring/subscription/$subscription_id"
```

# Rubrik syslog management

Rubrik CDM clusters include the capability to add export rules to forward
syslog information to remote servers.

# Managing the Rubrik cluster syslog settings

To view all the currently configured syslog export rules, send a GET request to
the [`/syslog/export`](#operation/getSyslogExportRules) endpoint.

**Example:** Retrieving the currently configured syslog export rules for a
Rubrik cluster.

```bash
curl -X GET "https://$cluster_address/api/v1/syslog/export"
```

To add a new syslog export rule, send a POST request to the
[`/syslog/export`](#operation/addSyslogExportRule) endpoint.

**Example:** Adding a new syslog export rule for a Rubrik cluster

```bash
curl -X POST "https://$cluster_address/api/v1/syslog/export"
```

To retrieve a syslog export rule, send a GET request with the export rule ID to
the [`/syslog/export/{id}`](#operation/getSyslogExportRule) endpoint.

To modify a syslog export rule, send a PATCH request with the export rule ID to
the [`/syslog/export/{id}`](#operation/updateSyslogExportRule) endpoint.

To remove a syslog export rule, send a DELETE request with the export rule ID to
the [`/syslog/export/{id}`](#operation/deleteSyslogExportRule) endpoint.

**Example:** Managing individual syslog export rules for a Rubrik cluster

```bash
curl -X GET "https://$cluster_address/api/v1/syslog/export/{id}"
curl -X PATCH "https://$cluster_address/api/v1/syslog/export/{id}"
curl -X DELETE "https://$cluster_address/api/v1/syslog/export/{id}"
```

To test a syslog export rule, send a POST request with the export rule
information to the [`/syslog/export/test`](#operation/testSyslogExportRule)
endpoint.

**Example:** Testing a syslog export rule for a Rubrik cluster

```bash
curl -X POST "https://$cluster_address/api/v1/syslog/export/test"
```

# Rubrik user management

Rubrik CDM clusters include the capability to manage access to resources
using local users.

# Managing the Rubrik local user account lockout

To view the current local user account lockout configuration, send a GET
request to
the [`/user/lockout`](#operation/getUserAccountLockoutSettings) endpoint.

**Example:** Retrieving the current local user account lockout configuration
for a Rubrik cluster

```bash
curl -X GET "https://$cluster_address/api/v1/user/lockout"
```

To update the lockout configuration, send a PATCH request to the
[`/user/lockout`](#operation/manageUserAccountLockoutSettings) endpoint.

**Example:** Updating the local user account lockout configuration for a
Rubrik cluster.

```bash
curl -X PATCH "https://$cluster_address/api/v1/user/lockout"
```

## Unlocking a locked user
To unlock a locked user, send a POST request to the
[`/user/{id}/unlock`](#operation/unlockUser) endpoint

**Example:** Unlocking a locked local user on CDM cluster
```bash
curl -X POST "https://$cluster_address/api/v1/user/{id}/unlock"
```

# Configuring users with TOTP as 2FA

To fetch the TOTP status for an account, send a GET request to the
[`/user/{id}/totp/status`](#operation/getTotpStatus) endpoint.

**Example:** Retrieving TOTP status

```bash
curl -X GET "https://$cluster_address/api/v1/user/{id}/totp/status"
```

To configure and enable TOTP for an account, send a PUT request to the
[`/user/{id}/totp/config`](#operation/setupTotp) endpoint.

**Example:** Configure TOTP
```bash
curl -X PUT "https://$cluster_address/api/v1/user/{id}/totp/config"
```

To reset and disable TOTP for an account, send a DELETE request to the
[`/user/{id}/totp/config`](#operation/resetTotp) endpoint.

**Example:** Reset TOTP
```bash
curl -X DELETE "https://$cluster_address/api/v1/user/{id}/totp/config"
```

To generate TOTP secret for an account, send a POST request to the
[`/user/{id}/totp/new_secret`](#operation/generateTotpSecret) endpoint.

**Example:** Generate TOTP secret
```bash
curl -X POST "https://$cluster_address/api/v1/user/{id}/totp/new_secret"
```

# MFA Servers

An MFA Server is a server that Rubrik can be configured with in order to support
integrations with external multi-factor authentication services.

## Adding a server
To add an MFA Server to the cluster, send a POST request to the
[`/mfa/rsa/server`](#operation/createRsaMfaServer) endpoint.

```bash
curl -X POST -d \
  '
  {
  "name": "string",
  "timeout": 0,
  "baseUrl": "string",
  "clientId": "string",
  "assurancePolicyName": "string",
  "ldapUsernameAttribute": "string",
  "certificateId": "string",
  "restApiKey": "string",
  "restApiAccessId": "string"
  }
  ' \
  "https://$cluster_address/api/v1/mfa/rsa/server"
```
```bash
{
  "name": "string",
  "timeout": 0,
  "baseUrl": "string",
  "clientId": "string",
  "assurancePolicyName": "string",
  "ldapUsernameAttribute": "string",
  "certificateId": "string",
  "id": "string"
}
```
## Getting MFA Servers
To get all MFA Servers configured on the cluster, leverage a GET request on the
[`/mfa/rsa/server`](#operation/queryRsaMfaServers) endpoint.

```bash
curl -X GET "https://$cluster_address/api/v1/mfa/rsa/server"
```
```bash
{
  "hasMore": true,
  "data": [
    {
      "name": "string",
      "timeout": 0,
      "baseUrl": "string",
      "clientId": "string",
      "assurancePolicyName": "string",
      "ldapUsernameAttribute": "string",
      "certificateId": "string",
      "id": "string"
    }
  ],
  "total": 0
}
```

## Deleting MFA Server Integrations
In order to delete a specific MFA Server integration, make a DELETE call to the
[`/mfa/rsa/server/{id}`](#operation/deleteRsaMfaServer) endpoint.

```bash
curl -X DELETE \
  -d '{
    "id": "$server_id" }' \
  "https://$cluster_address/api/v1/mfa/rsa/server/{id}"
```

## Getting an MFA Server
In order to retrieve a specific MFA server integration, make a GET call to the
[`/mfa/rsa/server/{id}`](#operation/getRsaMfaServer) endpoint.

```bash
curl -X POST \
  -d '{
    "id": "server_id" }' \
  "https://$cluster_address/api/v1/mfa/rsa/server/{id}"
```
```bash
{
  "name": "string",
  "timeout": 0,
  "baseUrl": "string",
  "clientId": "string",
  "assurancePolicyName": "string",
  "ldapUsernameAttribute": "string",
  "certificateId": "string",
  "id": "string"
}
```

## Updating an MFA Server
In order to update a specific MFA Server integration, make a PATCH call to the
[`/mfa/rsa/server/{id}`](#operation/updateRsaMfaServer) endpoint.

```bash
curl -X PATCH \
  -d '{
{
  "name": "string",
  "timeout": 0,
  "baseUrl": "string",
  "restApiKey": "string",
  "clientId": "string",
  "assurancePolicyName": "string",
  "restApiAccessId": "string",
  "ldapUsernameAttribute": "string",
  "certificateId": "string"
}
    ' \
  "https://$cluster_address/api/v1/mfa/rsa/server/{id}"
```
```bash
{
  "name": "string",
  "timeout": 0,
  "baseUrl": "string",
  "clientId": "string",
  "assurancePolicyName": "string",
  "ldapUsernameAttribute": "string",
  "certificateId": "string",
  "id": "string"
}
```

# Legal

## Copyright

Rubrik REST API - Copyright © 2017-2021 Rubrik Inc.
All rights reserved.

This documentation may be used free of charge. Selling without prior written consent is prohibited.
Obtain permission before redistributing. In all cases, this copyright notice and disclaimer must remain
intact.


## Disclaimer

THE CONTENTS OF THIS DOCUMENTATION ARE PROVIDED "AS IS," AND COPYRIGHT HOLDERS MAKE NO
REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR
TITLE; THAT THE CONTENTS OF THE DOCUMENTATION ARE SUITABLE FOR ANY PURPOSE; THAT THE
IMPLEMENTATION OF SUCH CONTENTS WILL NOT INFRINGE ANY THIRD PARTY PATENTS, COPYRIGHTS,
TRADEMARKS OR OTHER RIGHTS.
COPYRIGHT HOLDERS WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
DAMAGES ARISING OUT OF ANY USE OF THE DOCUMENTATION OR THE PERFORMANCE OR IMPLEMENTATION OF
THE CONTENTS THEREOF.

## Trademarks

Rubrik, the Rubrik logo, Rubrik Envision, and Rubrik Edge are trademarks or registered trademarks of Rubrik, Inc. in the U.S. and/or other countries. All other trademarks are the property of their respective owners.

# Report Config

## Update the config parameters related to Reports
Send a PATCH request to [`/report/config`](#operation/setReportConfig)
This request updates the configuration parameters related to the reporting framework.
`cleanupReportJobInstanceForLogJobs` specifies an interval in days. Log jobs in report job instances are retained for the specified interval.

```bash
curl -X PATCH "https://$cluster_address/api/v1/report/config"
```

## Get summary information for backup compliance based on each 24 hour time period
Send a GET request to [`/report/compliance_summary`](#operation/getComplianceSummaryV1)

```bash
curl -X GET "https://$cluster_address/api/v1/report/compliance_summary"
```

## Get summary information for backup compliance based on snapshot range
Send a GET request to
 [`/report/compliance_summary_sla`](#operation/getComplianceSummarySLAV1)

```bash
curl -X GET "https://$cluster_address/api/v1/report/compliance_summary_sla"
```

#Database log backup report

#Get the database log report summary

To get the database log report summary, send a GET request to the
[`/database/log_report`](#operation/queryLogReport) end point

**Example:** Retrieving the database log report summary

```bash
curl -X GET "https://$cluster_address/api/v1/database/log_report"
```
```bash
{
  "total": 1,
  "data": [
    {
      "effectiveSlaDomainName": "sla_name",
      "id": "$db_id",
      "name": "$db_name",
      "location": "$location_name",
      "databaseType": "$db_type",
      "primaryClusterId": "$cluster_id",
      "logBackupFrequency": 3600,
      "lastSnapshotTime": "2020-11-10T22:21:43.000Z",
      "effectiveSlaDomainId": "$sla_id"
    }
  ],
  "hasMore": false
}
```

#Get the database log report properties

To get the database log report properties, send a GET request to the
[`/database/log_report/defaults`](#operation/queryReportProperties) end point

 **Example:** Retrieving the database log report properties

```bash
curl -X GET "https://$cluster_address/api/v1/database/log_report/defaults"
```
```bash
{
  "logDelayNotificationFrequencyInMin": 720,
  "logDelayThresholdInMin": 720,
  "enableDelayNotification": false
}
```

#Update the database log report properties

To update the database log report properties, send a PATCH request to the
[`/database/log_report/defaults`](#operation/updateReportProperties) end point

 **Example:** Update the database log report properties

```bash
curl -X PATCH "https://$cluster_address/api/v1/database/log_report/defaults" -d\
'{
    "logDelayNotificationFrequencyInMin": 360,
    "logDelayThresholdInMin": 120,
    "enableDelayNotification": true
 }'
```

# Organization

## Create a list of Rubrik Envoy objects
To create a list of Rubrik Envoy objects, send a POST request to the
[`/organization/{id}/envoy/bulk`](#operation/bulkCreateEnvoys) endpoint. The
request takes an ID for the Organization and the information about the Rubrik
Envoy objects.

```bash
curl -X POST "https://$cluster_address/api/v1/organization/{id}/envoy/bulk"
```

The Rubrik REST API server responds with a `ListResponse` object.
```bash
{
  "hasMore": true,
  "data": [
    {
      "id": "string",
      "ipAddress": "string",
      "port": 1234,
      "organizationId": "string",
      "status": "Connected",
    },
  ]
}
```

## Remove a list of Rubrik Envoy objects
To remove a list of Rubrik Envoy objects, send a DELETE request to the
[`/organization/{id}/envoy/bulk`](#operation/bulkDeleteEnvoys) endpoint. The
request takes an ID for the Organization and a list of IDs for Rubrik Envoy
objects.

```bash
curl -X DELETE "https://$cluster_address/api/v1/organization/{id}/envoy/bulk"
```

The Rubrik REST API server responds with HTTP response code 204. This indicates
the request succeeded and the response body is empty.

## Update a list of Rubrik Envoy objects
To update a list of Rubrik Envoy objects, send a PATCH request to the
[`/organization/{id}/envoy/bulk`](#operation/bulkUpdateEnvoys) endpoint. The
request takes an ID for the Organization and the information about the Rubrik
Envoy objects.

```bash
curl -X PATCH "https://$cluster_address/api/v1/organization/{id}/envoy/bulk"
```

The Rubrik REST API server responds with a `ListResponse` object.
```bash
{
  "hasMore": true,
  "data": [
    {
      "id": "string",
      "ipAddress": "string",
      "port": 1234,
      "organizationId": "string",
      "status": "Connected",
    },
  ]
}
```


### Available Operations

