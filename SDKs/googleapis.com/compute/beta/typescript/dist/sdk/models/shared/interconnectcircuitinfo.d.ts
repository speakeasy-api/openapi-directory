import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a single physical circuit between the Customer and Google. CircuitInfo objects are created by Google, so all fields are output only.
 */
export declare class InterconnectCircuitInfo extends SpeakeasyBase {
    /**
     * Customer-side demarc ID for this circuit.
     */
    customerDemarcId?: string;
    /**
     * Google-assigned unique ID for this circuit. Assigned at circuit turn-up.
     */
    googleCircuitId?: string;
    /**
     * Google-side demarc ID for this circuit. Assigned at circuit turn-up and provided by Google to the customer in the LOA.
     */
    googleDemarcId?: string;
}
