import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specification that applies to entries that are part `LOOKER` system (user_specified_type)
 */
export declare class GoogleCloudDatacatalogV1LookerSystemSpec extends SpeakeasyBase {
    /**
     * Name of the parent Looker Instance. Empty if it does not exist.
     */
    parentInstanceDisplayName?: string;
    /**
     * ID of the parent Looker Instance. Empty if it does not exist. Example value: `someinstance.looker.com`
     */
    parentInstanceId?: string;
    /**
     * Name of the parent Model. Empty if it does not exist.
     */
    parentModelDisplayName?: string;
    /**
     * ID of the parent Model. Empty if it does not exist.
     */
    parentModelId?: string;
    /**
     * Name of the parent View. Empty if it does not exist.
     */
    parentViewDisplayName?: string;
    /**
     * ID of the parent View. Empty if it does not exist.
     */
    parentViewId?: string;
}
