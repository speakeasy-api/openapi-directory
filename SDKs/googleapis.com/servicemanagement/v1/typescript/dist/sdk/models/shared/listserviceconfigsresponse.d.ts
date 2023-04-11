import { SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";
/**
 * Response message for ListServiceConfigs method.
 */
export declare class ListServiceConfigsResponse extends SpeakeasyBase {
    /**
     * The token of the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of service configuration resources.
     */
    serviceConfigs?: Service[];
}
