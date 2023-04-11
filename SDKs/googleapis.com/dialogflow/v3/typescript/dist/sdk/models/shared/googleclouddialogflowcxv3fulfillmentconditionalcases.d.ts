import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase, GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput } from "./googleclouddialogflowcxv3fulfillmentconditionalcasescase";
/**
 * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
 */
export declare class GoogleCloudDialogflowCxV3FulfillmentConditionalCases extends SpeakeasyBase {
    /**
     * A list of cascading if-else conditions.
     */
    cases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase[];
}
/**
 * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
 */
export declare class GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput extends SpeakeasyBase {
    /**
     * A list of cascading if-else conditions.
     */
    cases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput[];
}
