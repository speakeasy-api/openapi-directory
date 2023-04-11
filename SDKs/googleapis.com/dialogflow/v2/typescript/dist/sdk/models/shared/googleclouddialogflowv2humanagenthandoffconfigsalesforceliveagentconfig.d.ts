import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration specific to Salesforce Live Agent.
 */
export declare class GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig extends SpeakeasyBase {
    /**
     * Required. Live Agent chat button ID.
     */
    buttonId?: string;
    /**
     * Required. Live Agent deployment ID.
     */
    deploymentId?: string;
    /**
     * Required. Domain of the Live Agent endpoint for this agent. You can find the endpoint URL in the `Live Agent settings` page. For example if URL has the form https://d.la4-c2-phx.salesforceliveagent.com/..., you should fill in d.la4-c2-phx.salesforceliveagent.com.
     */
    endpointDomain?: string;
    /**
     * Required. The organization ID of the Salesforce account.
     */
    organizationId?: string;
}
