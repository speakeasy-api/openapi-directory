import { SpeakeasyBase } from "../../../internal/utils";
import { SapDiscoveryResource } from "./sapdiscoveryresource";
/**
 * Message describing the system component.
 */
export declare class SapDiscoveryComponent extends SpeakeasyBase {
    /**
     * The component is a SAP application.
     */
    applicationType?: string;
    /**
     * The component is a SAP database.
     */
    databaseType?: string;
    /**
     * Pantheon Project in which the resources reside.
     */
    hostProject?: string;
    /**
     * The resources in a component.
     */
    resources?: SapDiscoveryResource[];
    /**
     * The sap identifier, used by the SAP software and helps differentiate systems for customers.
     */
    sid?: string;
}
