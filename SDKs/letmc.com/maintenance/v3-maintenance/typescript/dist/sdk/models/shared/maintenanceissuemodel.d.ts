import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceDocumentModel } from "./maintenancedocumentmodel";
/**
 * The priority of the job (Defaults to 'Low' if incorrect value or empty)
 */
export declare enum MaintenanceIssueModelIssuePriorityEnum {
    Low = "Low",
    Medium = "Medium",
    High = "High"
}
/**
 * Submission Model - Handles all fields required to submit an online maintenance job
 */
export declare class MaintenanceIssueModel extends SpeakeasyBase {
    /**
     * Documents linked to a submitted maintenance job
     */
    documents?: MaintenanceDocumentModel[];
    /**
     * ID used externally to manage jobs before sending to the system. This has a 10 character limit.
     */
    externalID?: string;
    /**
     * The fault title if applicable
     */
    issueFault?: string;
    /**
     * Fault notes
     */
    issueNotes?: string;
    /**
     * The priority of the job (Defaults to 'Low' if incorrect value or empty)
     */
    issuePriority?: MaintenanceIssueModelIssuePriorityEnum;
    /**
     * The title of the issue
     */
    issueTitle?: string;
    /**
     * The first line of the property address
     */
    propertyAddress1?: string;
    /**
     * The second line of the property address
     */
    propertyAddress2?: string;
    /**
     * The third line of the property address
     */
    propertyAddress3?: string;
    /**
     * The forth line of the property address
     */
    propertyAddress4?: string;
    /**
     * The country the property is located
     */
    propertyCountry?: string;
    /**
     * The property postcode
     */
    propertyPostcode?: string;
    /**
     * The date the job was reported
     */
    reportedAt?: Date;
    /**
     * The email address of the Tenant
     */
    tenantEMailAddress?: string;
    /**
     * The forename of the Tenant
     */
    tenantForename?: string;
    /**
     * The primary phone number of the Tenant
     */
    tenantPhonePrimary?: string;
    /**
     * The secondary phone number of the Tenant
     */
    tenantPhoneSecondary?: string;
    /**
     * Is the Tenant’s presence requested during the maintenance visit? (Defaults to “false” if incorrect value or empty)
     */
    tenantPresenceRequested?: boolean;
    /**
     * The surname of the Tenant
     */
    tenantSurname?: string;
    /**
     * The title of the Tenant
     */
    tenantTitle?: string;
}
