import { SpeakeasyBase } from "../../../internal/utils";
export declare class Organization extends SpeakeasyBase {
    /**
     * The unique identifier of the organization in your CRM.
     */
    crmUid?: string;
    /**
     * A link to the organization profile in your CRM.
     */
    crmUrl: string;
    /**
     * The date the organization became a customer.
     */
    dealClosedDate?: string;
    /**
     * The current stage of the organization in the marketing or sales process.
     */
    lifecycleStage: string;
    /**
     * The email of the team member who is in charge of the organization.
     */
    ownerEmail?: string;
    /**
     * The name of the team member who is in charge of the organization.
     */
    ownerName?: string;
    /**
     * The pricing plan the organization is on.
     */
    pricePlan?: string;
    /**
     * The name of the CRM you use for tracking the organization.
     */
    source: string;
}
