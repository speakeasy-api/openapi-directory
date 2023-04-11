import { SpeakeasyBase } from "../../../internal/utils";
import { Access } from "./access";
import { CloudDlpDataProfile } from "./clouddlpdataprofile";
import { CloudDlpInspection } from "./clouddlpinspection";
import { Compliance } from "./compliance";
import { Connection } from "./connection";
import { ContactDetails } from "./contactdetails";
import { Container } from "./container";
import { Database } from "./database";
import { Exfiltration } from "./exfiltration";
import { File } from "./file";
import { GoogleCloudSecuritycenterV1ExternalSystem } from "./googlecloudsecuritycenterv1externalsystem";
import { IamBinding } from "./iambinding";
import { Indicator } from "./indicator";
import { KernelRootkit } from "./kernelrootkit";
import { Kubernetes } from "./kubernetes";
import { MitreAttack } from "./mitreattack";
import { OrgPolicyConstraint } from "./orgpolicyconstraint";
import { Process } from "./process";
import { SecurityMarks } from "./securitymarks";
import { Vulnerability } from "./vulnerability";
/**
 * The class of the finding.
 */
export declare enum FindingFindingClassEnum {
    FindingClassUnspecified = "FINDING_CLASS_UNSPECIFIED",
    Threat = "THREAT",
    Vulnerability = "VULNERABILITY",
    Misconfiguration = "MISCONFIGURATION",
    Observation = "OBSERVATION",
    SccError = "SCC_ERROR"
}
/**
 * Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn't set the value of mute.
 */
export declare enum FindingMuteEnum {
    MuteUnspecified = "MUTE_UNSPECIFIED",
    Muted = "MUTED",
    Unmuted = "UNMUTED",
    Undefined = "UNDEFINED"
}
/**
 * The severity of the finding. This field is managed by the source that writes the finding.
 */
export declare enum FindingSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Critical = "CRITICAL",
    High = "HIGH",
    Medium = "MEDIUM",
    Low = "LOW"
}
/**
 * The state of the finding.
 */
export declare enum FindingStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
 */
export declare class Finding extends SpeakeasyBase {
    /**
     * Represents an access event.
     */
    access?: Access;
    /**
     * The canonical name of the finding. It's either "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}" or "projects/{project_number}/sources/{source_id}/findings/{finding_id}", depending on the closest CRM ancestor of the resource associated with the finding.
     */
    canonicalName?: string;
    /**
     * The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION"
     */
    category?: string;
    /**
     * The [data profile](https://cloud.google.com/dlp/docs/data-profiles) associated with the finding.
     */
    cloudDlpDataProfile?: CloudDlpDataProfile;
    /**
     * Details about the Cloud Data Loss Prevention (Cloud DLP) [inspection job](https://cloud.google.com/dlp/docs/concepts-job-triggers) that produced the finding.
     */
    cloudDlpInspection?: CloudDlpInspection;
    /**
     * Contains compliance information for security standards associated to the finding.
     */
    compliances?: Compliance[];
    /**
     * Contains information about the IP connection associated with the finding.
     */
    connections?: Connection[];
    /**
     * Output only. Map containing the points of contact for the given finding. The key represents the type of contact, while the value contains a list of all the contacts that pertain. Please refer to: https://cloud.google.com/resource-manager/docs/managing-notification-contacts#notification-categories { "security": { "contacts": [ { "email": "person1@company.com" }, { "email": "person2@company.com" } ] } }
     */
    contacts?: Record<string, ContactDetails>;
    /**
     * Containers associated with the finding. containers provides information for both Kubernetes and non-Kubernetes containers.
     */
    containers?: Container[];
    /**
     * The time at which the finding was created in Security Command Center.
     */
    createTime?: string;
    /**
     * Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of CloudSQL instances or Cloud Spanner instances), or the database instance itself. Some database resources may not have the full resource name populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. CloudSQL databases). In these cases only the display name will be provided.
     */
    database?: Database;
    /**
     * Contains more detail about the finding.
     */
    description?: string;
    /**
     * The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp.
     */
    eventTime?: string;
    /**
     * Exfiltration represents a data exfiltration attempt of one or more sources to one or more targets. Sources represent the source of data that is exfiltrated, and Targets represents the destination the data was copied to.
     */
    exfiltration?: Exfiltration;
    /**
     * Output only. Third party SIEM/SOAR fields within SCC, contains external system information and external system finding fields.
     */
    externalSystems?: Record<string, GoogleCloudSecuritycenterV1ExternalSystem>;
    /**
     * The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL.
     */
    externalUri?: string;
    /**
     * File associated with the finding.
     */
    files?: File[];
    /**
     * The class of the finding.
     */
    findingClass?: FindingFindingClassEnum;
    /**
     * Represents IAM bindings associated with the Finding.
     */
    iamBindings?: IamBinding[];
    /**
     * Represents what's commonly known as an _indicator of compromise_ (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).
     */
    indicator?: Indicator;
    /**
     * Kernel mode rootkit signatures.
     */
    kernelRootkit?: KernelRootkit;
    /**
     * Kubernetes-related attributes.
     */
    kubernetes?: Kubernetes;
    /**
     * MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org
     */
    mitreAttack?: MitreAttack;
    /**
     * Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885
     */
    moduleName?: string;
    /**
     * Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn't set the value of mute.
     */
    mute?: FindingMuteEnum;
    /**
     * First known as mute_annotation. Records additional information about the mute operation e.g. mute config that muted the finding, user who muted the finding, etc. Unlike other attributes of a finding, a finding provider shouldn't set the value of mute.
     */
    muteInitiator?: string;
    /**
     * Output only. The most recent time this finding was muted or unmuted.
     */
    muteUpdateTime?: string;
    /**
     * The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}"
     */
    name?: string;
    /**
     * Next steps associate to the finding.
     */
    nextSteps?: string;
    /**
     * Contains information about the org policy constraints associated with the finding.
     */
    orgPolicyConstraints?: OrgPolicyConstraint[];
    /**
     * The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}"
     */
    parent?: string;
    /**
     * Output only. The human readable display name of the finding source such as "Event Threat Detection" or "Security Health Analytics".
     */
    parentDisplayName?: string;
    /**
     * Represents operating system processes associated with the Finding.
     */
    processes?: Process[];
    /**
     * For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time.
     */
    resourceName?: string;
    /**
     * User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.
     */
    securityMarks?: SecurityMarks;
    /**
     * The severity of the finding. This field is managed by the source that writes the finding.
     */
    severity?: FindingSeverityEnum;
    /**
     * Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only.
     */
    sourceProperties?: Record<string, any>;
    /**
     * The state of the finding.
     */
    state?: FindingStateEnum;
    /**
     * Refers to common vulnerability fields e.g. cve, cvss, cwe etc.
     */
    vulnerability?: Vulnerability;
}
/**
 * Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
 */
export declare class FindingInput extends SpeakeasyBase {
    /**
     * Represents an access event.
     */
    access?: Access;
    /**
     * The canonical name of the finding. It's either "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}" or "projects/{project_number}/sources/{source_id}/findings/{finding_id}", depending on the closest CRM ancestor of the resource associated with the finding.
     */
    canonicalName?: string;
    /**
     * The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION"
     */
    category?: string;
    /**
     * The [data profile](https://cloud.google.com/dlp/docs/data-profiles) associated with the finding.
     */
    cloudDlpDataProfile?: CloudDlpDataProfile;
    /**
     * Details about the Cloud Data Loss Prevention (Cloud DLP) [inspection job](https://cloud.google.com/dlp/docs/concepts-job-triggers) that produced the finding.
     */
    cloudDlpInspection?: CloudDlpInspection;
    /**
     * Contains compliance information for security standards associated to the finding.
     */
    compliances?: Compliance[];
    /**
     * Contains information about the IP connection associated with the finding.
     */
    connections?: Connection[];
    /**
     * Containers associated with the finding. containers provides information for both Kubernetes and non-Kubernetes containers.
     */
    containers?: Container[];
    /**
     * The time at which the finding was created in Security Command Center.
     */
    createTime?: string;
    /**
     * Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of CloudSQL instances or Cloud Spanner instances), or the database instance itself. Some database resources may not have the full resource name populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. CloudSQL databases). In these cases only the display name will be provided.
     */
    database?: Database;
    /**
     * Contains more detail about the finding.
     */
    description?: string;
    /**
     * The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp.
     */
    eventTime?: string;
    /**
     * Exfiltration represents a data exfiltration attempt of one or more sources to one or more targets. Sources represent the source of data that is exfiltrated, and Targets represents the destination the data was copied to.
     */
    exfiltration?: Exfiltration;
    /**
     * The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL.
     */
    externalUri?: string;
    /**
     * File associated with the finding.
     */
    files?: File[];
    /**
     * The class of the finding.
     */
    findingClass?: FindingFindingClassEnum;
    /**
     * Represents IAM bindings associated with the Finding.
     */
    iamBindings?: IamBinding[];
    /**
     * Represents what's commonly known as an _indicator of compromise_ (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).
     */
    indicator?: Indicator;
    /**
     * Kernel mode rootkit signatures.
     */
    kernelRootkit?: KernelRootkit;
    /**
     * Kubernetes-related attributes.
     */
    kubernetes?: Kubernetes;
    /**
     * MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org
     */
    mitreAttack?: MitreAttack;
    /**
     * Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885
     */
    moduleName?: string;
    /**
     * Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn't set the value of mute.
     */
    mute?: FindingMuteEnum;
    /**
     * First known as mute_annotation. Records additional information about the mute operation e.g. mute config that muted the finding, user who muted the finding, etc. Unlike other attributes of a finding, a finding provider shouldn't set the value of mute.
     */
    muteInitiator?: string;
    /**
     * The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}"
     */
    name?: string;
    /**
     * Next steps associate to the finding.
     */
    nextSteps?: string;
    /**
     * Contains information about the org policy constraints associated with the finding.
     */
    orgPolicyConstraints?: OrgPolicyConstraint[];
    /**
     * The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}"
     */
    parent?: string;
    /**
     * Represents operating system processes associated with the Finding.
     */
    processes?: Process[];
    /**
     * For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time.
     */
    resourceName?: string;
    /**
     * User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.
     */
    securityMarks?: SecurityMarks;
    /**
     * The severity of the finding. This field is managed by the source that writes the finding.
     */
    severity?: FindingSeverityEnum;
    /**
     * Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only.
     */
    sourceProperties?: Record<string, any>;
    /**
     * The state of the finding.
     */
    state?: FindingStateEnum;
    /**
     * Refers to common vulnerability fields e.g. cve, cvss, cwe etc.
     */
    vulnerability?: Vulnerability;
}
