import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JWT location in a header
 */
export declare class InHeader extends SpeakeasyBase {
    /**
     * Name of the header
     */
    name: string;
    /**
     * Remove regex inside the value, like 'Bearer '
     */
    remove: string;
    /**
     * String with value InHeader
     */
    type: string;
}
