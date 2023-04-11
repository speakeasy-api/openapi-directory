import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information used to generate a token
 */
export declare class IdentificationTokenGenerationRequest extends SpeakeasyBase {
    /**
     * The email of the visitor that you wish to identify
     */
    email: string;
    /**
     * The first name of the visitor that you wish to identify. This value will only be set in HubSpot for new contacts and existing contacts where first name is unknown. Optional.
     */
    firstName?: string;
    /**
     * The last name of the visitor that you wish to identify. This value will only be set in HubSpot for new contacts and existing contacts where last name is unknown. Optional.
     */
    lastName?: string;
}
