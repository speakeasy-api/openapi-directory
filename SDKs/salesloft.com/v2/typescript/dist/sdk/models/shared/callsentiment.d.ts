import { SpeakeasyBase } from "../../../internal/utils";
export declare class CallSentiment extends SpeakeasyBase {
    /**
     * Datetime of when the call sentiment was created
     */
    createdAt?: Date;
    /**
     * ID of CallSentiment
     */
    id?: number;
    /**
     * An available call sentiment text
     */
    name?: string;
    /**
     * Datetime of when the call sentiment was last updated
     */
    updatedAt?: Date;
}
