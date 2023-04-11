import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List of API Services
 */
export declare class APIServiceOut extends SpeakeasyBase {
    /**
     * Indicates how many units per call this service costs (ex. the number of units per name)
     */
    costInUnits?: number;
    /**
     * Groups together classifiers providing a similar service (ex. gender groups personalname_gender and personalfullname_gender)
     */
    serviceGroup?: string;
    /**
     * A service name corresponds to classifier name in apiStatus (ex. personalname_gender or personalfullname_gender)
     */
    serviceName?: string;
}
