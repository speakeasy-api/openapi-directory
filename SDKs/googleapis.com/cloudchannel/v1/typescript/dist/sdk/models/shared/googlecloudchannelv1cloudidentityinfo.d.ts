import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1EduData } from "./googlecloudchannelv1edudata";
/**
 * CustomerType indicates verification type needed for using services.
 */
export declare enum GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum {
    CustomerTypeUnspecified = "CUSTOMER_TYPE_UNSPECIFIED",
    Domain = "DOMAIN",
    Team = "TEAM"
}
/**
 * Cloud Identity information for the Cloud Channel Customer.
 */
export declare class GoogleCloudChannelV1CloudIdentityInfoInput extends SpeakeasyBase {
    /**
     * The alternate email.
     */
    alternateEmail?: string;
    /**
     * CustomerType indicates verification type needed for using services.
     */
    customerType?: GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum;
    /**
     * Required Edu Attributes
     */
    eduData?: GoogleCloudChannelV1EduData;
    /**
     * Language code.
     */
    languageCode?: string;
    /**
     * Phone number associated with the Cloud Identity.
     */
    phoneNumber?: string;
}
/**
 * Cloud Identity information for the Cloud Channel Customer.
 */
export declare class GoogleCloudChannelV1CloudIdentityInfo extends SpeakeasyBase {
    /**
     * Output only. URI of Customer's Admin console dashboard.
     */
    adminConsoleUri?: string;
    /**
     * The alternate email.
     */
    alternateEmail?: string;
    /**
     * CustomerType indicates verification type needed for using services.
     */
    customerType?: GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum;
    /**
     * Required Edu Attributes
     */
    eduData?: GoogleCloudChannelV1EduData;
    /**
     * Output only. Whether the domain is verified. This field is not returned for a Customer's cloud_identity_info resource. Partners can use the domains.get() method of the Workspace SDK's Directory API, or listen to the PRIMARY_DOMAIN_VERIFIED Pub/Sub event in to track domain verification of their resolve Workspace customers.
     */
    isDomainVerified?: boolean;
    /**
     * Language code.
     */
    languageCode?: string;
    /**
     * Phone number associated with the Cloud Identity.
     */
    phoneNumber?: string;
    /**
     * Output only. The primary domain name.
     */
    primaryDomain?: string;
}
