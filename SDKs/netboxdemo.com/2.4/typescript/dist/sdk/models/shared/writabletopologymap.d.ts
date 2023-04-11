import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableTopologyMapInput extends SpeakeasyBase {
    description?: string;
    /**
     * Identify devices to include in the diagram using regular expressions, one per line. Each line will result in a new tier of the drawing. Separate multiple regexes within a line using semicolons. Devices will be rendered in the order they are defined.
     */
    devicePatterns: string;
    name: string;
    site?: number;
    slug: string;
}
