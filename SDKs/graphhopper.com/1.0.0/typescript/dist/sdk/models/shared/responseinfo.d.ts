import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional information for your request
 */
export declare class ResponseInfo extends SpeakeasyBase {
    /**
     * Attribution according to our documentation is necessary if no white-label option included.
     */
    copyrights?: string[];
    took?: number;
}
