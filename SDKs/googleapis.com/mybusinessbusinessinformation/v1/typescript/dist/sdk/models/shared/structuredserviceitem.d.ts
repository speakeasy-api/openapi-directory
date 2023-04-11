import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a structured service offered by the merchant. For eg: toilet_installation.
 */
export declare class StructuredServiceItem extends SpeakeasyBase {
    /**
     * Optional. Description of structured service item. The character limit is 300.
     */
    description?: string;
    /**
     * Required. The `service_type_id` field is a Google provided unique ID that can be found in `ServiceType`. This information is provided by `BatchGetCategories` rpc service.
     */
    serviceTypeId?: string;
}
