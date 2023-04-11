import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedResource } from "./embeddedresource";
/**
 * Success
 */
export declare class PhoneNumberAssignment extends SpeakeasyBase {
    /**
     * PhoneNumberAssignment ID
     */
    id?: number;
    /**
     * The phone number associated with this assignment
     */
    number?: string;
    user?: EmbeddedResource;
}
