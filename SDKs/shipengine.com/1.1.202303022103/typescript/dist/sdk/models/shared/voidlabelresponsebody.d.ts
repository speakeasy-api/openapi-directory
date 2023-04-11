import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A void label response body
 */
export declare class VoidLabelResponseBody extends SpeakeasyBase {
    /**
     * Indicates whether the attempt to void the label was successful
     */
    approved: boolean;
    message: string;
}
