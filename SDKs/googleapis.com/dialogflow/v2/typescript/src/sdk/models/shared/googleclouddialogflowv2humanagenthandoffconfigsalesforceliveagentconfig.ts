/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Configuration specific to Salesforce Live Agent.
 */
export class GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig extends SpeakeasyBase {
  /**
   * Required. Live Agent chat button ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "buttonId" })
  buttonId?: string;

  /**
   * Required. Live Agent deployment ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "deploymentId" })
  deploymentId?: string;

  /**
   * Required. Domain of the Live Agent endpoint for this agent. You can find the endpoint URL in the `Live Agent settings` page. For example if URL has the form https://d.la4-c2-phx.salesforceliveagent.com/..., you should fill in d.la4-c2-phx.salesforceliveagent.com.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "endpointDomain" })
  endpointDomain?: string;

  /**
   * Required. The organization ID of the Salesforce account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "organizationId" })
  organizationId?: string;
}
