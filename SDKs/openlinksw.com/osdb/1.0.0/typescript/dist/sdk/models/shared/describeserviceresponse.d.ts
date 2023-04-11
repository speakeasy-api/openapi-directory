import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceDescription } from "./servicedescription";
export declare enum DescribeServiceResponseStatusEnum {
    Success = "success"
}
/**
 * A single service description
 */
export declare class DescribeServiceResponse extends SpeakeasyBase {
    /**
     * The path of the REST API method
     */
    api: string;
    /**
     * The name of the REST API method
     */
    method: string;
    response: ServiceDescription;
    status: DescribeServiceResponseStatusEnum;
}
