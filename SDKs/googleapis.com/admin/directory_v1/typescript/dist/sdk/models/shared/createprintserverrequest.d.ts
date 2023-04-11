import { SpeakeasyBase } from "../../../internal/utils";
import { PrintServerInput } from "./printserver";
/**
 * Request for adding a new print server.
 */
export declare class CreatePrintServerRequestInput extends SpeakeasyBase {
    /**
     * Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`
     */
    parent?: string;
    /**
     * Configuration for a print server.
     */
    printServer?: PrintServerInput;
}
