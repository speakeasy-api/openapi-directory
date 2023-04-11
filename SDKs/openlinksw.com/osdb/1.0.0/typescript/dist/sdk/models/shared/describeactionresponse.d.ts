import { SpeakeasyBase } from "../../../internal/utils";
import { ActionDescription } from "./actiondescription";
export declare enum DescribeActionResponseStatusEnum {
    Success = "success"
}
/**
 * A single action description
 */
export declare class DescribeActionResponse extends SpeakeasyBase {
    /**
     * The path of the REST API method
     */
    api: string;
    /**
     * The name of the REST API method
     */
    method: string;
    response: ActionDescription;
    status: DescribeActionResponseStatusEnum;
}
