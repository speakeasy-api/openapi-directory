import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the consumer which should have been defined in [Google Resource Manager](https://cloud.google.com/resource-manager/).
 */
export declare enum ConsumerInfoTypeEnum {
    ConsumerTypeUnspecified = "CONSUMER_TYPE_UNSPECIFIED",
    Project = "PROJECT",
    Folder = "FOLDER",
    Organization = "ORGANIZATION",
    ServiceSpecific = "SERVICE_SPECIFIC"
}
/**
 * `ConsumerInfo` provides information about the consumer.
 */
export declare class ConsumerInfo extends SpeakeasyBase {
    /**
     * The consumer identity number, can be Google cloud project number, folder number or organization number e.g. 1234567890. A value of 0 indicates no consumer number is found.
     */
    consumerNumber?: string;
    /**
     * The Google cloud project number, e.g. 1234567890. A value of 0 indicates no project number is found. NOTE: This field is deprecated after Chemist support flexible consumer id. New code should not depend on this field anymore.
     */
    projectNumber?: string;
    /**
     * The type of the consumer which should have been defined in [Google Resource Manager](https://cloud.google.com/resource-manager/).
     */
    type?: ConsumerInfoTypeEnum;
}
