import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates which datasets are available and added by default to the address responses
 */
export declare class ApiKeyDatasets extends SpeakeasyBase {
    /**
     * IE Address File. Eircode Address Database
     */
    ecad: boolean;
    /**
     * IE Base Address File. Eircode Address File
     */
    ecaf: boolean;
    /**
     * Western Europe Address File
     */
    herewe?: boolean;
    /**
     * UK Multiple Residence Dataset
     */
    mr: boolean;
    /**
     * UK Not Yet Built Dataset
     */
    nyb: boolean;
    /**
     * UK Main Address File (Postcode Address File)
     */
    paf: boolean;
    /**
     * UK Property Alias dataset
     */
    pafa: boolean;
    /**
     * UK Welsh Language Dataset
     */
    pafw: boolean;
    /**
     * US Address Dataset
     */
    usps: boolean;
}
