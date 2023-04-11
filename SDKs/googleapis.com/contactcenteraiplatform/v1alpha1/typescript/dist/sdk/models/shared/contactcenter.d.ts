import { SpeakeasyBase } from "../../../internal/utils";
import { AdminUser } from "./adminuser";
import { InstanceConfig } from "./instanceconfig";
import { SAMLParams } from "./samlparams";
import { URIs } from "./uris";
/**
 * Message describing ContactCenter object Next ID: 14
 */
export declare class ContactCenterInput extends SpeakeasyBase {
    /**
     * Message storing info about the first admin user. Next ID: 3
     */
    adminUser?: AdminUser;
    /**
     * Optional. Whether to enable users to be created in the CCAIP-instance concurrently to having users in Cloud identity
     */
    ccaipManagedUsers?: boolean;
    /**
     * Required. Immutable. At least 2 and max 16 char long, must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt).
     */
    customerDomainPrefix?: string;
    /**
     * Required. A user friendly name for the ContactCenter.
     */
    displayName?: string;
    /**
     * Message storing the instance configuration.
     */
    instanceConfig?: InstanceConfig;
    /**
     * Labels as key value pairs
     */
    labels?: Record<string, string>;
    /**
     * name of resource
     */
    name?: string;
    /**
     * Message storing SAML params to enable Google as IDP.
     */
    samlParams?: SAMLParams;
    /**
     * Message storing the URIs of the ContactCenter.
     */
    uris?: URIs;
    /**
     * Optional. Email address of the first admin user.
     */
    userEmail?: string;
}
/**
 * Output only. The state of this contact center.
 */
export declare enum ContactCenterStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    StateDeploying = "STATE_DEPLOYING",
    StateDeployed = "STATE_DEPLOYED",
    StateTerminating = "STATE_TERMINATING",
    StateFailed = "STATE_FAILED",
    StateTerminatingFailed = "STATE_TERMINATING_FAILED",
    StateTerminated = "STATE_TERMINATED"
}
/**
 * Message describing ContactCenter object Next ID: 14
 */
export declare class ContactCenter extends SpeakeasyBase {
    /**
     * Message storing info about the first admin user. Next ID: 3
     */
    adminUser?: AdminUser;
    /**
     * Optional. Whether to enable users to be created in the CCAIP-instance concurrently to having users in Cloud identity
     */
    ccaipManagedUsers?: boolean;
    /**
     * Output only. [Output only] Create time stamp
     */
    createTime?: string;
    /**
     * Required. Immutable. At least 2 and max 16 char long, must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt).
     */
    customerDomainPrefix?: string;
    /**
     * Required. A user friendly name for the ContactCenter.
     */
    displayName?: string;
    /**
     * Message storing the instance configuration.
     */
    instanceConfig?: InstanceConfig;
    /**
     * Labels as key value pairs
     */
    labels?: Record<string, string>;
    /**
     * name of resource
     */
    name?: string;
    /**
     * Message storing SAML params to enable Google as IDP.
     */
    samlParams?: SAMLParams;
    /**
     * Output only. The state of this contact center.
     */
    state?: ContactCenterStateEnum;
    /**
     * Output only. [Output only] Update time stamp
     */
    updateTime?: string;
    /**
     * Message storing the URIs of the ContactCenter.
     */
    uris?: URIs;
    /**
     * Optional. Email address of the first admin user.
     */
    userEmail?: string;
}
