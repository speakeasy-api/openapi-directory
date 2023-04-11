import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceDescription } from "./servicedescription";
export declare enum ListServicesResponseStatusEnum {
    Success = "success"
}
/**
 * An array of service descriptions for all services registered with the OSDB server
 */
export declare class ListServicesResponse extends SpeakeasyBase {
    /**
     * The path of the REST API method
     */
    api: string;
    /**
     * The name of the REST API method
     */
    method: string;
    response: ServiceDescription[];
    status: ListServicesResponseStatusEnum;
}
