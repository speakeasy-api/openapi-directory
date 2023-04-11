import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ! Information about a vulnerability with an HTML.
 */
export declare class Form extends SpeakeasyBase {
    /**
     * ! The URI where to send the form when it's submitted.
     */
    actionUri?: string;
    /**
     * ! The names of form fields related to the vulnerability.
     */
    fields?: string[];
}
