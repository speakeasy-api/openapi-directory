import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1AssociationInfo } from "./googlecloudchannelv1associationinfo";
import { GoogleCloudChannelV1CommitmentSettings, GoogleCloudChannelV1CommitmentSettingsInput } from "./googlecloudchannelv1commitmentsettings";
import { GoogleCloudChannelV1Parameter, GoogleCloudChannelV1ParameterInput } from "./googlecloudchannelv1parameter";
import { GoogleCloudChannelV1ProvisionedService } from "./googlecloudchannelv1provisionedservice";
import { GoogleCloudChannelV1TrialSettings } from "./googlecloudchannelv1trialsettings";
/**
 * An entitlement is a representation of a customer's ability to use a service.
 */
export declare class GoogleCloudChannelV1EntitlementInput extends SpeakeasyBase {
    /**
     * Association links that an entitlement has to other entitlements.
     */
    associationInfo?: GoogleCloudChannelV1AssociationInfo;
    /**
     * Commitment settings for commitment-based offers.
     */
    commitmentSettings?: GoogleCloudChannelV1CommitmentSettingsInput;
    /**
     * Required. The offer resource name for which the entitlement is to be created. Takes the form: accounts/{account_id}/offers/{offer_id}.
     */
    offer?: string;
    /**
     * Extended entitlement parameters. When creating an entitlement, valid parameter names and values are defined in the Offer.parameter_definitions. For Google Workspace, the following Parameters may be accepted as input: - max_units: The maximum assignable units for a flexible offer OR - num_units: The total commitment for commitment-based offers The response may additionally include the following output-only Parameters: - assigned_units: The number of licenses assigned to users. For GCP billing subaccounts, the following Parameter may be accepted as input: - display_name: The display name of the billing subaccount.
     */
    parameters?: GoogleCloudChannelV1ParameterInput[];
    /**
     * Optional. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given, it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. This is only supported for Google Workspace entitlements.
     */
    purchaseOrderId?: string;
    /**
     * Settings for trial offers.
     */
    trialSettings?: GoogleCloudChannelV1TrialSettings;
}
/**
 * Output only. Current provisioning state of the entitlement.
 */
export declare enum GoogleCloudChannelV1EntitlementProvisioningStateEnum {
    ProvisioningStateUnspecified = "PROVISIONING_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Suspended = "SUSPENDED"
}
export declare enum GoogleCloudChannelV1EntitlementSuspensionReasonsEnum {
    SuspensionReasonUnspecified = "SUSPENSION_REASON_UNSPECIFIED",
    ResellerInitiated = "RESELLER_INITIATED",
    TrialEnded = "TRIAL_ENDED",
    RenewalWithTypeCancel = "RENEWAL_WITH_TYPE_CANCEL",
    PendingTosAcceptance = "PENDING_TOS_ACCEPTANCE",
    Other = "OTHER"
}
/**
 * An entitlement is a representation of a customer's ability to use a service.
 */
export declare class GoogleCloudChannelV1Entitlement extends SpeakeasyBase {
    /**
     * Association links that an entitlement has to other entitlements.
     */
    associationInfo?: GoogleCloudChannelV1AssociationInfo;
    /**
     * Commitment settings for commitment-based offers.
     */
    commitmentSettings?: GoogleCloudChannelV1CommitmentSettings;
    /**
     * Output only. The time at which the entitlement is created.
     */
    createTime?: string;
    /**
     * Output only. Resource name of an entitlement in the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}.
     */
    name?: string;
    /**
     * Required. The offer resource name for which the entitlement is to be created. Takes the form: accounts/{account_id}/offers/{offer_id}.
     */
    offer?: string;
    /**
     * Extended entitlement parameters. When creating an entitlement, valid parameter names and values are defined in the Offer.parameter_definitions. For Google Workspace, the following Parameters may be accepted as input: - max_units: The maximum assignable units for a flexible offer OR - num_units: The total commitment for commitment-based offers The response may additionally include the following output-only Parameters: - assigned_units: The number of licenses assigned to users. For GCP billing subaccounts, the following Parameter may be accepted as input: - display_name: The display name of the billing subaccount.
     */
    parameters?: GoogleCloudChannelV1Parameter[];
    /**
     * Service provisioned for an entitlement.
     */
    provisionedService?: GoogleCloudChannelV1ProvisionedService;
    /**
     * Output only. Current provisioning state of the entitlement.
     */
    provisioningState?: GoogleCloudChannelV1EntitlementProvisioningStateEnum;
    /**
     * Optional. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given, it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. This is only supported for Google Workspace entitlements.
     */
    purchaseOrderId?: string;
    /**
     * Output only. Enumerable of all current suspension reasons for an entitlement.
     */
    suspensionReasons?: GoogleCloudChannelV1EntitlementSuspensionReasonsEnum[];
    /**
     * Settings for trial offers.
     */
    trialSettings?: GoogleCloudChannelV1TrialSettings;
    /**
     * Output only. The time at which the entitlement is updated.
     */
    updateTime?: string;
}
