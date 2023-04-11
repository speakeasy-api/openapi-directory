import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus } from "./googlecloudassuredworkloadsv1workloadcompliancestatus";
import { GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse } from "./googlecloudassuredworkloadsv1workloadekmprovisioningresponse";
import { GoogleCloudAssuredworkloadsV1WorkloadKMSSettings } from "./googlecloudassuredworkloadsv1workloadkmssettings";
import { GoogleCloudAssuredworkloadsV1WorkloadResourceInfo } from "./googlecloudassuredworkloadsv1workloadresourceinfo";
import { GoogleCloudAssuredworkloadsV1WorkloadResourceSettings } from "./googlecloudassuredworkloadsv1workloadresourcesettings";
import { GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse } from "./googlecloudassuredworkloadsv1workloadsaaenrollmentresponse";
/**
 * Required. Immutable. Compliance Regime associated with this workload.
 */
export declare enum GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum {
    ComplianceRegimeUnspecified = "COMPLIANCE_REGIME_UNSPECIFIED",
    Il4 = "IL4",
    Cjis = "CJIS",
    FedrampHigh = "FEDRAMP_HIGH",
    FedrampModerate = "FEDRAMP_MODERATE",
    UsRegionalAccess = "US_REGIONAL_ACCESS",
    Hipaa = "HIPAA",
    Hitrust = "HITRUST",
    EuRegionsAndSupport = "EU_REGIONS_AND_SUPPORT",
    CaRegionsAndSupport = "CA_REGIONS_AND_SUPPORT",
    Itar = "ITAR",
    AuRegionsAndUsSupport = "AU_REGIONS_AND_US_SUPPORT",
    AssuredWorkloadsForPartners = "ASSURED_WORKLOADS_FOR_PARTNERS",
    IsrRegions = "ISR_REGIONS",
    IsrRegionsAndSupport = "ISR_REGIONS_AND_SUPPORT",
    CaProtectedB = "CA_PROTECTED_B"
}
/**
 * Optional. Partner regime associated with this workload.
 */
export declare enum GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum {
    PartnerUnspecified = "PARTNER_UNSPECIFIED",
    LocalControlsByS3Ns = "LOCAL_CONTROLS_BY_S3NS",
    SovereignControlsByTSystems = "SOVEREIGN_CONTROLS_BY_T_SYSTEMS"
}
/**
 * A Workload object for managing highly regulated workloads of cloud customers.
 */
export declare class GoogleCloudAssuredworkloadsV1WorkloadInput extends SpeakeasyBase {
    /**
     * Optional. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.
     */
    billingAccount?: string;
    /**
     * Required. Immutable. Compliance Regime associated with this workload.
     */
    complianceRegime?: GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum;
    /**
     * Represents the Compliance Status of this workload
     */
    complianceStatus?: GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus;
    /**
     * Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload
     */
    displayName?: string;
    /**
     * External key management systems(EKM) Provisioning response
     */
    ekmProvisioningResponse?: GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse;
    /**
     * Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.
     */
    enableSovereignControls?: boolean;
    /**
     * Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations.
     */
    etag?: string;
    /**
     * Settings specific to the Key Management Service. This message is deprecated. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
     */
    kmsSettings?: GoogleCloudAssuredworkloadsV1WorkloadKMSSettings;
    /**
     * Optional. Labels applied to the workload.
     */
    labels?: Record<string, string>;
    /**
     * Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only.
     */
    name?: string;
    /**
     * Optional. Partner regime associated with this workload.
     */
    partner?: GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum;
    /**
     * Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}
     */
    provisionedResourcesParent?: string;
    /**
     * Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.
     */
    resourceSettings?: GoogleCloudAssuredworkloadsV1WorkloadResourceSettings[];
    /**
     * Signed Access Approvals (SAA) enrollment response.
     */
    saaEnrollmentResponse?: GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse;
}
/**
 * Output only. Represents the KAJ enrollment state of the given workload.
 */
export declare enum GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum {
    KajEnrollmentStateUnspecified = "KAJ_ENROLLMENT_STATE_UNSPECIFIED",
    KajEnrollmentStatePending = "KAJ_ENROLLMENT_STATE_PENDING",
    KajEnrollmentStateComplete = "KAJ_ENROLLMENT_STATE_COMPLETE"
}
/**
 * A Workload object for managing highly regulated workloads of cloud customers.
 */
export declare class GoogleCloudAssuredworkloadsV1Workload extends SpeakeasyBase {
    /**
     * Optional. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.
     */
    billingAccount?: string;
    /**
     * Required. Immutable. Compliance Regime associated with this workload.
     */
    complianceRegime?: GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum;
    /**
     * Represents the Compliance Status of this workload
     */
    complianceStatus?: GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus;
    /**
     * Output only. Urls for services which are compliant for this Assured Workload, but which are currently disallowed by the ResourceUsageRestriction org policy. Invoke RestrictAllowedResources endpoint to allow your project developers to use these services in their environment."
     */
    compliantButDisallowedServices?: string[];
    /**
     * Output only. Immutable. The Workload creation timestamp.
     */
    createTime?: string;
    /**
     * Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload
     */
    displayName?: string;
    /**
     * External key management systems(EKM) Provisioning response
     */
    ekmProvisioningResponse?: GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse;
    /**
     * Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.
     */
    enableSovereignControls?: boolean;
    /**
     * Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations.
     */
    etag?: string;
    /**
     * Output only. Represents the KAJ enrollment state of the given workload.
     */
    kajEnrollmentState?: GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum;
    /**
     * Settings specific to the Key Management Service. This message is deprecated. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
     */
    kmsSettings?: GoogleCloudAssuredworkloadsV1WorkloadKMSSettings;
    /**
     * Optional. Labels applied to the workload.
     */
    labels?: Record<string, string>;
    /**
     * Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only.
     */
    name?: string;
    /**
     * Optional. Partner regime associated with this workload.
     */
    partner?: GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum;
    /**
     * Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}
     */
    provisionedResourcesParent?: string;
    /**
     * Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.
     */
    resourceSettings?: GoogleCloudAssuredworkloadsV1WorkloadResourceSettings[];
    /**
     * Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only.
     */
    resources?: GoogleCloudAssuredworkloadsV1WorkloadResourceInfo[];
    /**
     * Signed Access Approvals (SAA) enrollment response.
     */
    saaEnrollmentResponse?: GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse;
}
