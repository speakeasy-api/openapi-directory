import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The HTTP method used to make a callback to your application
 */
export declare enum CallbackUrlMethodEnum {
    Get = "GET",
    Post = "POST"
}
export declare class CallbackUrl extends SpeakeasyBase {
    /**
     * The HTTP method used to make a callback to your application
     */
    method?: CallbackUrlMethodEnum;
    /**
     * The URL used for a callback to your application
     */
    url?: string;
}
