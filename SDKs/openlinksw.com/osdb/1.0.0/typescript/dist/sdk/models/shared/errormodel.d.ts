import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ErrorModelStatusEnum {
    Error = "error"
}
/**
 * Error response
 */
export declare class ErrorModel extends SpeakeasyBase {
    /**
     * The path of the REST API method reporting the error
     */
    api?: string;
    /**
     * The name of the REST API method reporting the error
     */
    method?: string;
    /**
     * A message describing the error
     */
    response?: string;
    status?: ErrorModelStatusEnum;
}
