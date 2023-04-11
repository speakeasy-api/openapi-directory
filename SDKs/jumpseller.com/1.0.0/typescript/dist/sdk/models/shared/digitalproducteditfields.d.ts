import { SpeakeasyBase } from "../../../internal/utils";
export declare class DigitalProductEditFields extends SpeakeasyBase {
    /**
     * Filename of the digital product (with file extensison)
     */
    filename?: string;
    /**
     * Public accessible URL with the desired file contents. (LIMIT: 100MB)
     */
    url?: string;
}
